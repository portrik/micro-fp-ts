import { defineConfig } from 'vitest/config';

const isCI = process.env['CI'] !== undefined;

export default defineConfig({
	test: {
		globals: true,
		watch: false,
		coverage: {
			enabled: isCI,
			provider: 'v8',
		},
		reporters: ['default', 'junit'],
		outputFile: {
			junit: 'junit.xml'
		}
	}
});
