import { describe, expect, test } from 'vitest';
import { none, some } from 'fp-ts/lib/Option';

import { array } from '../../../src';

describe('last', () => {
	test('should return none for empty array:', () => {
		expect(array.last([])).toEqual(none);
	});

	test('should return none for size under 1', () => {
		expect(array.last([1, 2, 3], 0)).toEqual(none);
	});

	test('should return the last element in the array:', () => {
		expect(array.last(['a', 'b', 'c', 'd', 'e', 'f'])).toEqual(some('f'));
		expect(array.last(['a', 'b', 'c', 'd', 'e', 'f'], 1)).toEqual(some('f'));
	});

	test('should the last n elements of the array:', () => {
		expect(array.last(['a', 'b', 'c', 'd', 'e', 'f'], 3)).toEqual(some(['d', 'e', 'f']));
	});
});
