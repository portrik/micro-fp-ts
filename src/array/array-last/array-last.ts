/*!
 * array-last <https://github.com/jonschlinkert/array-last>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

import { Option, none, some } from 'fp-ts/lib/Option';

/**
 * Get the last element from an array.
 *
 * @example
 * arrayLast([1, 2, 3]); // Returns `some(3)`
 *
 * @example
 * arrayLast([]); // Returns `none`
 *
 * @param array
 *
 * @returns Last element from the array. None in case the array is empty.
 */
function arrayLast<Content>(array: ReadonlyArray<Content>): Option<Content>;

/**
 * Get the last element from an array.
 *
 * @example
 * arrayLast([1, 2, 3], 1); // Returns `some(3)`
 *
 * @example
 * arrayLast([], 1); // Returns `none`
 *
 * @param array
 * @param size
 *
 * @returns Last element from the array. None in case the array is empty.
 */
function arrayLast<Content>(array: ReadonlyArray<Content>, size: 1): Option<Content>;

/**
 * Get the last N elements from an array.
 *
 * @example
 * arrayLast([1, 2, 3], 4); // Returns `some([1, 2, 3])
 *
 * @example
 * arrayLast([], 12); // Returns `none`
 *
 * @param array
 * @param size
 *
 * @returns Last N elements from the array. None in case the array is empty.
 */
function arrayLast<Content>(array: ReadonlyArray<Content>, size: number): Option<Content>;

function arrayLast<Content>(array: ReadonlyArray<Content>, size: number = 1): Option<Content | Content[]> {
	const last = [...array]
		.reverse()
		.slice(0, size)
		.reverse();

	if (last.length === 0 || size < 1) {
		return none;
	}

	// Non-null assertion is guaranteed to be non-issue by the argument above.
	return some(size === 1 ? last[0]! : last);
};

export { arrayLast };
