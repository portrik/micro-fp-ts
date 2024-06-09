/* eslint-disable functional/functional-parameters */
import { Option, fromNullable, match, none, some } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/function';

/**
 * Remove an element at the selected index from the array.
 *
 * @example
 * unorderedRemoval([1, 2, 3], 1); // Returns some([1, 3])
 *
 * @example
 * unorderedRemoval([], 1); // Returns some([])
 *
 * @example
 * unorderedRemoval([1, 2, 3], 15); // Returns none
 *
 * @param array
 * @param index
 *
 * @returns Array without the item at the selected index. If the index does not exist, returns none.
 */
function unorderedRemoval<Content>(array: ReadonlyArray<Content>, index: number): Option<ReadonlyArray<Content>> {
	const elementToRemove = fromNullable(array[index]);

	return pipe(
		elementToRemove,
		match(
			(): Option<never> => none,
			(): Option<ReadonlyArray<Content>> => some([...array.slice(0, index), ...array.slice(index + 1)])
		)
	);
}

export { unorderedRemoval };
