import { AppClient } from '@holochain/client';
import { consume, provide } from '@lit/context';
import { appClientContext } from '@tnesh-stack/elements';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { notificationsStoreContext } from '../context.js';
import { NotificationsClient } from '../notifications-client.js';
import { NotificationsStore } from '../notifications-store.js';

@customElement('notifications-context')
export class NotificationsContext extends LitElement {
	@provide({ context: notificationsStoreContext })
	@property({ type: Object })
	store!: NotificationsStore;

	@consume({ context: appClientContext, subscribe: true })
	client!: AppClient;

	@property()
	role!: string;

	@property()
	zome = 'notifications';

	connectedCallback() {
		super.connectedCallback();
		if (this.store) return;
		if (!this.role) {
			throw new Error(
				`<notifications-context> must have a role="YOUR_DNA_ROLE" property, eg: <notifications-context role="role1">`,
			);
		}
		if (!this.client) {
			throw new Error(
				`<notifications-context> must either:
				a) be placed inside <app-client-context>
					or 
				b) receive an AppClient property (eg. <notifications-context .client=\${client}>) 
					or 
				c) receive a store property (eg. <notifications-context .store=\${store}>)`,
			);
		}
		this.store = new NotificationsStore(
			new NotificationsClient(this.client, this.role, this.zome),
		);
	}

	render() {
		return html`<slot></slot>`;
	}

	static styles = css`
		:host {
			display: contents;
		}
	`;
}
