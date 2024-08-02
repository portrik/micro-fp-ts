import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		watch: false,
		coverage: {
			enabled: true,
			provider: 'v8',
			// @ts-expect-error There seems to be incorrect typing. `reporter` vs `reporters`
			reporters: ['junit']
		}
	}
});
