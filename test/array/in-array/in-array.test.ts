import { array } from '../../../src';

describe('in-array', () => {
	test('should find valid element', () => {
		expect(array.inArray(['a', 'b', 'c'], 'c')).toBeTruthy();
	});

	test('should not find missing element', () => {
		expect(array.inArray(['a', 'b', 'c'], 'x')).toBeFalsy();
	});

	test('should handle empty array', () => {
		expect(array.inArray([], 'a')).toBeFalsy();
	});
});
