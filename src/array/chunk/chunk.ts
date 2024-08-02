// Disabled due to match
/* eslint-disable functional/functional-parameters */
import { Option, isSome, match, none, some } from 'fp-ts/lib/Option';
import { ReadonlyNonEmptyArray, fromArray } from 'fp-ts/lib/ReadonlyNonEmptyArray';
import { map, reduce } from 'fp-ts/lib/ReadonlyArray';
import { pipe } from 'fp-ts/lib/function';

/**
 * Split an array into chunks of a given size.
 *
 * @example
 * array.chunk([], 2); // Returns `[]`
 *
 * @example
 * array.chunk([0, 1, 2, 3], 2); // Returns `[[0, 1], [2, 3]]`
 *
 * @example
 * array.chunk([0, 1, 2, 3], 3); // Returns `[[0, 1, 2], [3]]`
 *
 * @param array Array to split into chunks
 * @param size Size of a single chunk
 *
 * @returns Array of chunks with the given size
 */
function chunk<Content>(array: ReadonlyArray<Content>, size: number): ReadonlyArray<ReadonlyNonEmptyArray<Content>> {
	const chunksCount = array.length % size === 0 ? array.length / size : Math.ceil((array.length + 1) / size);

	return pipe(
		Array.from({ length: chunksCount }, (_: unknown, index: number): Readonly<[number, number]> => [index * size, (index * size + size)]),
		map(([start, end]: Readonly<[number, number]>): Option<ReadonlyNonEmptyArray<Content>> => fromArray(array.slice(start, end))),
		reduce(some([]), (result: Option<ReadonlyArray<ReadonlyNonEmptyArray<Content>>>, value: Option<ReadonlyNonEmptyArray<Content>>): Option<ReadonlyArray<ReadonlyNonEmptyArray<Content>>> => {
			const isValid = isSome(result) && isSome(value);

			return isValid ? some([...result.value, value.value]) : none;
		}),
		match(
			(): ReadonlyArray<ReadonlyNonEmptyArray<Content>> => [],
			(values: ReadonlyArray<ReadonlyNonEmptyArray<Content>>): ReadonlyArray<ReadonlyNonEmptyArray<Content>> => values
		)
	);
}

export { chunk };
