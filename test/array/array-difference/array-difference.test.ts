import { array } from '../../../src';

describe('array-difference', () => {
	test('should find differences', () => {
		expect(array.arrayDifference(['a', 'b', 'c'], ['b', 'c', 'e'])).toEqual(['a']);
		expect(array.arrayDifference(['x', 'b', 'c', 'e', 'y'], ['b', 'x', 'e'])).toEqual(['c', 'y']);
		expect(array.arrayDifference(['x', 'x'], ['a', 'b', 'c'])).toEqual(['x', 'x']);
		expect(array.arrayDifference(['x'], ['a', 'b', 'c'])).toEqual(['x']);
		expect(array.arrayDifference(['x', 'b', 'b', 'b', 'c', 'e', 'y'], ['x', 'e'])).toEqual(['b', 'b', 'b', 'c', 'y']);
		expect(array.arrayDifference(['a', 'b', 'b', 'b', 'b'], ['b'])).toEqual(['a']);
	});

	test('should handle empty arrays', () => {
		expect(array.arrayDifference([], [])).toEqual([]);
		expect(array.arrayDifference([], ['a'])).toEqual([]);
		expect(array.arrayDifference(['a'], [])).toEqual(['a']);
	});
});
