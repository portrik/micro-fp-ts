import { ReadonlyRecord } from 'fp-ts/lib/ReadonlyRecord';
import { pipe } from 'fp-ts/lib/function';
import { reduce } from 'fp-ts/lib/ReadonlyArray';

/**
 * Group an array of objects by their values.
 *
 * @example
 * group([{ 'a': 'a', 'b': 'b' }, { 'a': 'foo', 'b': 'bar' }], 'a'); // Returns `some({ 'a': [{ 'a': 'a', 'b': 'b' }], 'foo': [{ 'a': 'foo', 'b': 'bar' }] })`
 *
 * @param values Values to group
 * @param key Key to group by
 *
 * @returns Record with the values under the selected key as keys and values in an array as the value.
 */
function group<Value extends Record<string, unknown>, Key extends keyof Value>(values: ReadonlyArray<Value>, key: Key): ReadonlyRecord<string, ReadonlyArray<Value>> {
	return pipe(
		values,
		reduce({}, (result: ReadonlyRecord<string, ReadonlyArray<Value>>, value: Value): ReadonlyRecord<string, ReadonlyArray<Value>> => {
			const index =`${value[key]}`;
			const current = result[index];

			return {
				...result,
				[index]: current === undefined ? [value] : [...current, value]
			};
		})
	);
}

export { group };
