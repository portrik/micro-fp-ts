/*!
 * array-first <https://github.com/jonschlinkert/array-first>
 *
 * Copyright (c) 2014-2016 Jon Schlinkert.
 * Licensed under the MIT License
 */

import { none, some } from 'fp-ts/lib/Option';

import { array } from '../../../src';

describe('first', function() {
	it('should return none for empty array:', () => {
		expect(array.first([])).toEqual(none);
	});

	it('should return none for size under 1', () => {
		expect(array.first([1, 2, 3, 4], 0)).toEqual(none);
	});

	it('should return the first element in the array:', () => {
		expect(array.first(['a', 'b', 'c', 'd', 'e', 'f'])).toEqual(some('a'));
		expect(array.first(['a', 'b', 'c', 'd', 'e', 'f'], 1)).toEqual(some('a'));
	});

	it('should return the first n elements of the array:', () => {
		expect(array.first(['a', 'b', 'c', 'd', 'e', 'f'], 3)).toEqual(some(['a', 'b', 'c']));
	});

	it('should return the first n elements of the array even for size larger than array length', () => {
		expect(array.first(['a', 'b', 'c', 'd'], 10)).toEqual(some(['a', 'b', 'c', 'd']));
	});
});

