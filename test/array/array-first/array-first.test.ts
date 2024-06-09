/*!
 * array-first <https://github.com/jonschlinkert/array-first>
 *
 * Copyright (c) 2014-2016 Jon Schlinkert.
 * Licensed under the MIT License
 */

import { none, some } from 'fp-ts/lib/Option';

import { arrayFirst } from '../../../src';

describe('array-first', function() {
	it('should return none for empty array:', () => {
		expect(arrayFirst([])).toEqual(none);
	});

	it('should return none for size under 1', () => {
		expect(arrayFirst([1, 2, 3, 4], 0)).toEqual(none);
	});

	it('should return the first element in the array:', () => {
		expect(arrayFirst(['a', 'b', 'c', 'd', 'e', 'f'])).toEqual(some('a'));
		expect(arrayFirst(['a', 'b', 'c', 'd', 'e', 'f'], 1)).toEqual(some('a'));
	});

	it('should return the first n elements of the array:', () => {
		expect(arrayFirst(['a', 'b', 'c', 'd', 'e', 'f'], 3)).toEqual(some(['a', 'b', 'c']));
	});

	it('should return the first n elements of the array even for size larger than array length', () => {
		expect(arrayFirst(['a', 'b', 'c', 'd'], 10)).toEqual(some(['a', 'b', 'c', 'd']));
	});
});

