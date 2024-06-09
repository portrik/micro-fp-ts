import { none, some } from 'fp-ts/lib/Option';

import { array } from '../../../src';

describe('array-last', () => {
	it('should return none for empty array:', () => {
		expect(array.arrayLast([])).toEqual(none);
	});

	it('should return none for size under 1', () => {
		expect(array.arrayLast([1, 2, 3], 0)).toEqual(none);
	});

	it('should return the last element in the array:', () => {
		expect(array.arrayLast(['a', 'b', 'c', 'd', 'e', 'f'])).toEqual(some('f'));
		expect(array.arrayLast(['a', 'b', 'c', 'd', 'e', 'f'], 1)).toEqual(some('f'));
	});

	it('should the last n elements of the array:', () => {
		expect(array.arrayLast(['a', 'b', 'c', 'd', 'e', 'f'], 3)).toEqual(some(['d', 'e', 'f']));
	});
});
