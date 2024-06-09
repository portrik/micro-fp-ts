import { none, some } from 'fp-ts/lib/Option';

import { array } from '../../../src';

describe('unordered-array-remove', () => {
	test('should remove from valid index', () => {
		expect(array.unorderedRemoval([1, 2, 3], 1)).toEqual(some([1, 3]));
	});

	test('should return none invalid index', () => {
		expect(array.unorderedRemoval([1, 2, 3], 15)).toEqual(none);
	});

	test('should return none for empty final array', () => {
		expect(array.unorderedRemoval([1], 0)).toEqual(some([]));
	});
});
