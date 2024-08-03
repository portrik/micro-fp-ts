import { type ReadonlyNonEmptyArray, fromArray } from 'fp-ts/lib/ReadonlyNonEmptyArray';
import type { Option } from 'fp-ts/lib/Option';
import { Ord } from 'fp-ts/string';
import type { ReadonlyRecord } from 'fp-ts/lib/ReadonlyRecord';
import { collect } from 'fp-ts/Record';
import { pipe } from 'fp-ts/lib/function';

/**
 * Map a record into an array with a mapper function.
 *
 * @example
 * map({ daft: 'punk', giovanni: 'Giorgio' }, (key: string, value: string): string => `${key} ${value}`);
 * // returns some(['daft punk', 'giovanni Giorgio'])
 *
 * @example
 * map({}, (key: string, value: string): string => `${key} ${value}`);
 * // returns none
 *
 * @param inputMap Record/map to map
 * @param mapper Mapper function creating the final value from key and record value
 *
 * @returns Non-empty array in some or none in case an empty array is returned
 */
function map<Value, MappedValue>(inputMap: ReadonlyRecord<string, Value>, mapper: (key: string, value: Value) => MappedValue): Option<ReadonlyNonEmptyArray<MappedValue>> {
	return pipe(
		inputMap,
		collect(Ord)(mapper),
		fromArray
	);
}

export { map };
