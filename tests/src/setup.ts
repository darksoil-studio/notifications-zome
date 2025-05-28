import { AsyncSignal, Signal } from '@darksoil-studio/holochain-signals';
import {
	LinkedDevicesClient,
	LinkedDevicesStore,
} from '@darksoil-studio/linked-devices-zome';
import { AppWebsocket } from '@holochain/client';
import { Scenario, dhtSync } from '@holochain/tryorama';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { NotificationsClient } from '../../ui/src/notifications-client.js';
import { NotificationsStore } from '../../ui/src/notifications-store.js';

const testHappUrl =
	dirname(fileURLToPath(import.meta.url)) +
	'/../../workdir/notifications_test-debug.happ';

export async function setup(scenario: Scenario, numPlayers = 2) {
	const players = await promiseAllSequential(
		Array.from(new Array(numPlayers)).map(() => () => addPlayer(scenario)),
	);

	// Shortcut peer discovery through gossip and register all agents in every
	// conductor of the scenario.
	await scenario.shareAllAgents();

	await dhtSync(
		players.map(p => p.player),
		players[0].player.cells[0].cell_id[0],
	);

	console.log('Setup completed!');

	return players;
}

async function addPlayer(scenario: Scenario) {
	const player = await scenario.addPlayerWithApp({
		appBundleSource: {
			type: 'path',
			value: testHappUrl,
		},
	});

	patchCallZome(player.appWs as AppWebsocket);
	await player.conductor
		.adminWs()
		.authorizeSigningCredentials(player.cells[0].cell_id);
	const store = new NotificationsStore(
		new NotificationsClient(player.appWs as any, 'notifications_test'),
	);
	const linkedDevicesStore = new LinkedDevicesStore(
		new LinkedDevicesClient(player.appWs as any, 'notifications_test'),
	);
	return {
		store,
		linkedDevicesStore,
		player,
		startUp: async () => {
			await player.conductor.startUp();
			const port = await player.conductor.attachAppInterface();
			const issued = await player.conductor
				.adminWs()
				.issueAppAuthenticationToken({
					installed_app_id: player.appId,
				});
			const appWs = await player.conductor.connectAppWs(issued.token, port);
			patchCallZome(appWs);
			store.client.client = appWs;
		},
	};
}

async function promiseAllSequential<T>(
	promises: Array<() => Promise<T>>,
): Promise<Array<T>> {
	const results: Array<T> = [];
	for (const promise of promises) {
		results.push(await promise());
	}
	return results;
}

export function patchCallZome(appWs: AppWebsocket) {
	const callZome = appWs.callZome;

	appWs.callZome = async req => {
		try {
			const result = await callZome(req);
			return result;
		} catch (e) {
			if (
				!e.toString().includes('Socket is not open') &&
				!e.toString().includes('ClientClosedWithPendingRequests')
			) {
				throw e;
			}
		}
	};
}

export async function eventually<T>(
	signal: AsyncSignal<T>,
	check: (v: T) => void,
	timeoutMs = 240_000,
) {
	const timeoutError = new Error('Timeout');
	return new Promise((resolve, reject) => {
		let error;
		setTimeout(() => {
			reject(error ? error : timeoutError);
		}, timeoutMs);
		effect(() => {
			const value = signal.get();
			if (value.status === 'pending') return;
			if (value.status === 'error') {
				error = new Error(value.error.toString());
				return;
			}

			try {
				check(value.value);
				resolve(undefined);
			} catch (e) {}
		});
	});
}

let needsEnqueue = true;

const w = new Signal.subtle.Watcher(() => {
	if (needsEnqueue) {
		needsEnqueue = false;
		queueMicrotask(processPending);
	}
});

function processPending() {
	needsEnqueue = true;

	for (const s of w.getPending()) {
		s.get();
	}

	w.watch();
}

export function effect(callback) {
	let cleanup;

	const computed = new Signal.Computed(() => {
		typeof cleanup === 'function' && cleanup();
		cleanup = callback();
	});

	w.watch(computed);
	computed.get();

	return () => {
		w.unwatch(computed);
		typeof cleanup === 'function' && cleanup();
		cleanup = undefined;
	};
}
