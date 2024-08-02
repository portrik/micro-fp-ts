import { none, some } from 'fp-ts/lib/Option';
import { array } from '../../../src';

describe('swap', () => {
	it('should return none for invalid indexes', () => {
		expect(array.swap([], 0, 1)).toEqual(none);
	});

	it('should swap valid indexes', () => {
		const source = ['a', 'b', 'c'];

		expect(array.swap(source, 0, 2)).toEqual(some(['c', 'b', 'a']));
		expect(source).toEqual(['a', 'b', 'c']);
	});
});
