import { array } from '../../../src';

describe('chunk', () => {
	test('handles empty array', () => {
		expect(array.chunk([], 2)).toEqual([]);
	});

	test('handles divisible size', () => {
		expect(array.chunk([0, 1, 2, 3], 2)).toEqual([[0, 1], [2, 3]]);
	});

	test('handles non-divisible size', () => {
		expect(array.chunk([0, 1, 2, 3], 3)).toEqual([[0, 1, 2], [3]]);
	});
});
