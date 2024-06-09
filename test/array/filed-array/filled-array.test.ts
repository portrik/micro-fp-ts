import { none, some } from 'fp-ts/lib/Option';

import { array } from '../../../src';

describe('filled-array', () => {
	test('should return none for length 0', () => {
		expect(array.filledArray('x', 0)).toEqual(none);
	});

	test('should return array with valid size and static value', () => {
		expect(array.filledArray('x', 2)).toEqual(some(['x', 'x']));
	});

	test('should return array with valid size and a callback', () => {
		expect(array.filledArray((index: number): number => index, 3)).toEqual(some([0, 1, 2]));
	});
});
