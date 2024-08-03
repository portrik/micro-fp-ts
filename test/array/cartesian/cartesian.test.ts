import { describe, expect, test } from 'vitest';
import { array } from '../../../src';

describe('cartesian', () => {
	test('produces valid cartesian product', () => {
		expect(array.cartesian(['red', 'blue'], ['circle', 'square'])).toStrictEqual([['red', 'circle'], ['red', 'square'], ['blue', 'circle'], ['blue', 'square']]);
	});
});
