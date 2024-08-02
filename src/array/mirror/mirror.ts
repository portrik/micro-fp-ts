import { ReadonlyRecord } from 'fp-ts/lib/ReadonlyRecord';
import { pipe } from 'fp-ts/lib/function';
import { reduce } from 'fp-ts/lib/ReadonlyArray';

/**
 * Convert an array into a record with keys and values from the source array.
 *
 * Duplicate values are ignored.
 *
 * @example
 * mirror(['key', 1, true, null, undefined]); // Returns `{ 'key': 'key', '1': 1, 'true': true, 'null': null, 'undefined': undefined }`
 *
 * @param source Source array to mirror into an object.
 *
 * @returns Record with the values and keys from the source array. Keys are stringified.
 */
function mirror<Indexable extends (string | number | boolean | null | undefined)>(source: ReadonlyArray<Indexable>): ReadonlyRecord<string, Indexable> {
	return pipe(
		source,
		reduce({}, (result: ReadonlyRecord<string, Indexable>, value: Indexable): ReadonlyRecord<string, Indexable> => ({ ...result, [`${value}`]: value }))
	);
}

export { mirror };
