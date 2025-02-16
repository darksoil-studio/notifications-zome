import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		poolOptions: {
			threads: {
				singleThread: true,
			},
		},
		retry: 2,
		testTimeout: 60 * 1000 * 2, // 2  mins
	},
});
