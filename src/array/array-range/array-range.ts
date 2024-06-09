import { Option, none, some } from 'fp-ts/lib/Option';

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
	if (right == null && left < 1) {
		return none;
	}

	const size = Math.abs((right ?? 0) - left);
	if (size === 0) {
		return none;
	}

	return some(Array.from({ length: size }, (_: never, index: number): number => {
		if (right == null) {
			return index;
		}

		return left + (left > right ? -index : index);
	}));
}

export { arrayRange };
