/*!
 * array-first <https://github.com/jonschlinkert/array-first>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

// fp-ts functions can be without arguments
/* eslint-disable functional/functional-parameters */
import { Option, none, some } from 'fp-ts/Option';
import { fromArray } from 'fp-ts/ReadonlyArray';
import { match } from 'fp-ts/boolean';
import { pipe } from 'fp-ts/lib/function';

/**
 * Get the first element from an array.
 *
 * @example
 * arrayFirst([1,2,3]); // Returns `some(1)`
 *
 * @example
 * arrayFirst([]); // Returns `none`
 *
 * @param array
 *
 * @returns First element from the array. None in case the array is empty.
 */
function arrayFirst<Content>(array: ReadonlyArray<Content>): Option<Content>;

/**
 * Get the first element from an array.
 *
 * @example
 * arrayFirst([1,2,3], 1); // Returns `some(1)`
 *
 * @example
 * arrayFirst([], 1); // Returns `none`
 *
 * @param array
 * @param size
 *
 * @returns First element from the array. None in case the array is empty.
 */
function arrayFirst<Content>(array: ReadonlyArray<Content>, size: 1): Option<Content>;

/**
 * Get the first N elements from an array.
 *
 * @example
 * arrayFirst([1,2,3], 4); // Returns `some([1,2,3])`
 *
 * @example
 * arrayFirst([], 12); // Returns `none`
 *
 * @param array
 * @param size Number of elements to get
 *
 * @returns First N elements from the array. None in case the array is empty.
 */
function arrayFirst<Content>(array: ReadonlyArray<Content>, size: number): Option<Content[]>;

function arrayFirst<Content>(array: ReadonlyArray<Content>, size: number = 1): Option<NonNullable<Content> | ReadonlyArray<Content>> {
	const slice = fromArray(array.slice(0, size));

	return pipe(
		slice.length > 0 && size > 0,
		match(
			(): Option<never> => none,
			(): Option<NonNullable<Content> | ReadonlyArray<Content>> => some(size === 1 ? slice[0]! : slice)
		)
	);
};

export { arrayFirst };
