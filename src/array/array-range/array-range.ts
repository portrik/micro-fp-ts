// fp-ts functions can be without arguments
/* eslint-disable functional/functional-parameters */
import { Option, fromNullable, getOrElse, isNone, isSome, match, none, some } from 'fp-ts/lib/Option';
import { match as booleanMatch } from 'fp-ts/boolean';
import { pipe } from 'fp-ts/lib/function';

/**
 * Create range from zero to the specified end. The end value is excluded.
 *
 * @example
 * arrayRange(3); // Returns `some([0, 1, 2])`
 *
 * @example
 * arrayRange(0); // Returns `none`
 *
 * @param end Upper end of the range
 *
 * @returns Array in some or none in case the range is invalid.
 */
function arrayRange(end?: number): Option<ReadonlyArray<number>>;

/**
 * Create a range from start to end. The end value is excluded.
 *
 * @example
 * arrayRange(-2, 1); // Returns `some([-2, -1])`
 *
 * @example
 * arrayRange(3, 0); // Returns `some([3, 2, 1])`
 *
 * @example
 * arrayRange(15, 15); // Returns `none`
 *
 * @param start Lower end of the range
 * @param end Upper end of the range
 *
 * @returns Array in some or non in case the range is invalid.
 */
function arrayRange(start: number, end: number): Option<ReadonlyArray<number>>;

function arrayRange(left: number = 0, right?: number): Option<ReadonlyArray<number>> {
	const end = fromNullable(right);
	const size = pipe(
		end,
		getOrElse(() => 0),
		(rightBound: number) => Math.abs(rightBound - left)
	);

	const isValidSlice = (isSome(end) || left > 0) && size > 0;
	const direction = isNone(end) || left < end.value ? 1 : -1;

	return pipe(
		isValidSlice,
		booleanMatch(
			(): Option<never> => none,
			(): Option<ReadonlyArray<number>> => some(Array.from(
				{ length: size },
				(_: never, index: number): number => pipe(
					end,
					match(
						(): number => index,
						(): number => left + (index * direction)
					)
				)
			))
		)
	);
}

export { arrayRange };
