import { flatMap, map } from 'fp-ts/lib/ReadonlyArray';
import { pipe } from 'fp-ts/lib/function';

/**
 * Create all possible cartesian products for two arrays.
 *
 * @example
 * cartesian(['red', 'blue'], ['circle', 'square']); // Returns `[['red', 'circle'], ['red', 'square'], ['blue', 'circle'], ['blue', 'square']]`
 *
 * @param left Left array of cartesian product
 * @param right Right array of cartesian product
 *
 * @returns Cartesian product of the two arrays
 */
function cartesian<LeftContent, RightContent>(left: ReadonlyArray<LeftContent>, right: ReadonlyArray<RightContent>): ReadonlyArray<Readonly<[LeftContent, RightContent]>> {
	return pipe(
		left,
		flatMap((leftValue: LeftContent): ReadonlyArray<Readonly<[LeftContent, RightContent]>> => pipe(
			right,
			map((rightValue: RightContent): Readonly<[LeftContent, RightContent]> => [leftValue, rightValue])
		)),
	);
}

export { cartesian };
