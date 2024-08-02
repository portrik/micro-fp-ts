import { array } from '../../../src';

describe('contains', () => {
	test('should find valid element', () => {
		expect(array.contains(['a', 'b', 'c'], 'c')).toBeTruthy();
	});

	test('should not find missing element', () => {
		expect(array.contains(['a', 'b', 'c'], 'x')).toBeFalsy();
	});

	test('should handle empty array', () => {
		expect(array.contains([], 'a')).toBeFalsy();
	});
});
