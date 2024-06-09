/* eslint-disable functional/functional-parameters */
import { Option } from 'fp-ts/lib/Option';
import { fromArray } from 'fp-ts/lib/ReadonlyNonEmptyArray';
import { match } from 'fp-ts/lib/boolean';
import { pipe } from 'fp-ts/lib/function';

/**
 * Create an array filled with the specified value.
 *
 * @example
 * filledArray('x', 3); // Returns `some(['x', 'x', 'x'])
 *
 * @example
 * filledArray('x', 0); // Returns `none`
 *
 * @example
 * filledArray((index: number): number => index, 3); // Returns `some([0, 1, 2])
 *
 * @param fillValue Either a static value or a function creating the value
 * @param length
 *
 * @returns Array of the specified length with the provided length. Returns none in case the array is empty.
 */
function filledArray<Content>(fillValue: Content | ((index: number) => Content), length: number): Option<ReadonlyArray<Content>> {
	return fromArray(Array.from({ length: length }, (_: never, index: number): Content => pipe(
		typeof fillValue === 'function',
		match(
			// Type assertions do not work properly for this case, for some reason.
			(): Content => fillValue as Content,
			(): Content => (fillValue as (index: number) => Content)(index)
		)
	)));
}

export { filledArray };
