/*!
 * array-last <https://github.com/jonschlinkert/array-last>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

// fp-ts functions can be without arguments
/* eslint-disable functional/functional-parameters */
import { Option, none, some } from 'fp-ts/lib/Option';
import { match } from 'fp-ts/lib/boolean';
import { pipe } from 'fp-ts/lib/function';

/**
 * Get the last element from an array.
 *
 * @example
 * last([1, 2, 3]); // Returns `some(3)`
 *
 * @example
 * last([]); // Returns `none`
 *
 * @param array
 *
 * @returns Last element from the array. None in case the array is empty.
 */
function last<Content>(array: ReadonlyArray<Content>): Option<Content>;

/**
 * Get the last element from an array.
 *
 * @example
 * last([1, 2, 3], 1); // Returns `some(3)`
 *
 * @example
 * last([], 1); // Returns `none`
 *
 * @param array
 * @param size
 *
 * @returns Last element from the array. None in case the array is empty.
 */
function last<Content>(array: ReadonlyArray<Content>, size: 1): Option<Content>;

/**
 * Get the last N elements from an array.
 *
 * @example
 * last([1, 2, 3], 4); // Returns `some([1, 2, 3])
 *
 * @example
 * last([], 12); // Returns `none`
 *
 * @param array
 * @param size
 *
 * @returns Last N elements from the array. None in case the array is empty.
 */
function last<Content>(array: ReadonlyArray<Content>, size: number): Option<Content>;

function last<Content>(array: ReadonlyArray<Content>, size: number = 1): Option<NonNullable<Content> | ReadonlyArray<Content>> {
	const lastSlice: ReadonlyArray<Content>= pipe(
		array,
		(initialArray: ReadonlyArray<Content>): ReadonlyArray<Content> => [...initialArray].reverse(),
		(reversed: ReadonlyArray<Content>): ReadonlyArray<Content> => reversed.slice(0, size),
		(slice: ReadonlyArray<Content>): ReadonlyArray<Content> => [...slice].reverse(),
	);

	return pipe(
		lastSlice.length > 0 && size > 0,
		match(
			(): Option<never> => none,
			(): Option<NonNullable<Content> | ReadonlyArray<Content>> => some(size === 1 ? lastSlice[0]! : lastSlice)
		)
	);
};

export { last };
