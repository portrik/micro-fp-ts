import { describe, expect, test } from 'vitest';

import { array } from '../../../src';

describe('mirror', () => {
	test('mirrors the array into a record', () => {
		// eslint-disable-next-line unicorn/no-null
		const source = ['key', 1, true, null, undefined];

		expect(array.mirror(source)).toStrictEqual({
			'key': 'key',
			'1': 1,
			'true': true,
			// eslint-disable-next-line unicorn/no-null
			'null': null,
			'undefined': undefined
		});
	});
});
