// fp-ts functions can be without arguments
/* eslint-disable functional/functional-parameters */
import * as FunctionalNumber from 'fp-ts/number';
import { type Option, fromNullable, isNone, isSome, match, none, some } from 'fp-ts/lib/Option';
import { type ReadonlyNonEmptyArray, fromArray, map, reduce, sortBy } from 'fp-ts/lib/ReadonlyNonEmptyArray';
import { pipe } from 'fp-ts/lib/function';

/**
 * Swap two values by index in an array.
 *
 * Implementation does not modify the source array.
 * The order of the indexes does not matter.
 *
 * @example
 * swap([], 0, 1); // Returns `none`
 *
 * @example
 * swap(['a', 'b', 'c'], 0, 2); // Returns `some(['c', 'b', 'a'])`
 *
 * @param array Source array to swap indexes in
 * @param leftIndex First index
 * @param rightIndex Second index
 *
 * @returns New array with the indexes swapped. In case the indexes are not valid, returns none.
 */
function swap<Content>(array: ReadonlyArray<Content>, leftIndex: number, rightIndex: number): Option<ReadonlyNonEmptyArray<Content>> {
	return pipe(
		[leftIndex, rightIndex] as ReadonlyNonEmptyArray<number>,
		sortBy([FunctionalNumber.Ord]),
		map((index: number): Option<[number, NonNullable<Content>]> => {
			const value = fromNullable(array[index]);

			return isSome(value) ? some([index, value.value]) : none;
		}),
		reduce(some([]), (result: Option<ReadonlyArray<[number, NonNullable<Content>]>>, value: Option<[number, NonNullable<Content>]>): Option<ReadonlyArray<[number, NonNullable<Content>]>> => isNone(result) || isNone(value) ? none : some([...result.value, value.value])),
		match(
			(): Option<never> => none,
			(values: ReadonlyArray<[number, NonNullable<Content>]>): Option<ReadonlyNonEmptyArray<Content>> => fromArray([
				// biome-ignore lint/style/noNonNullAssertion: Tuple is guaranteed to exist.
				...array.slice(0, values[0]![0]),
				// biome-ignore lint/style/noNonNullAssertion: Tuple is guaranteed to exist.
				values[1]![1],
				// biome-ignore lint/style/noNonNullAssertion: Tuple is guaranteed to exist.
				...array.slice(values[0]![0] + 1, values[1]![0]),
				// biome-ignore lint/style/noNonNullAssertion: Tuple is guaranteed to exist.
				values[0]![1],
			])
		)
	);
}

export { swap };
