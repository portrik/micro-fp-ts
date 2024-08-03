import { describe, expect, test } from 'vitest';
import { array } from '../../../src';

describe('difference', () => {
	test('should find differences', () => {
		expect(array.difference(['a', 'b', 'c'], ['b', 'c', 'e'])).toEqual(['a']);
		expect(array.difference(['x', 'b', 'c', 'e', 'y'], ['b', 'x', 'e'])).toEqual(['c', 'y']);
		expect(array.difference(['x', 'x'], ['a', 'b', 'c'])).toEqual(['x', 'x']);
		expect(array.difference(['x'], ['a', 'b', 'c'])).toEqual(['x']);
		expect(array.difference(['x', 'b', 'b', 'b', 'c', 'e', 'y'], ['x', 'e'])).toEqual(['b', 'b', 'b', 'c', 'y']);
		expect(array.difference(['a', 'b', 'b', 'b', 'b'], ['b'])).toEqual(['a']);
	});

	test('should handle empty arrays', () => {
		expect(array.difference([], [])).toEqual([]);
		expect(array.difference([], ['a'])).toEqual([]);
		expect(array.difference(['a'], [])).toEqual(['a']);
	});
});
