/*!
 * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

type NestedArray<Content> = ReadonlyArray<Content> | ReadonlyArray<NestedArray<Content>>;

function isArray<Content>(value: unknown): value is ReadonlyArray<Content> {
	return Array.isArray(value);
}

/**
 * Flatten an array infinitely.
 *
 * @example
 * flatten([1]); // Returns `[1]`
 *
 * @example
 * flatten([1, [[[[[2]]]]]]); // Returns `[1, 2]`
 *
 * @param array
 *
 * @returns Infinitely flattened array
 */
function flatten<Content>(array: NestedArray<Content>): ReadonlyArray<Content> {
	return array
		.flatMap((value: Content | NestedArray<Content>): ReadonlyArray<Content> => isArray(value) ? flatten(value) : [value]);
};

export { flatten };
