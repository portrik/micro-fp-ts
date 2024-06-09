import { Eq } from 'fp-ts/lib/Eq';
import { uniq } from 'fp-ts/Array';

type Hasher<Content> = (input: Content) => string;

/**
 * Remove duplicates from an array.
 *
 * @example
 * deduplicate([1, 2, 2, 3]); // Returns `[1, 2, 3]`
 *
 * @example
 * deduplicate([{ a: 1 }, { a: 1 }, { a: 2 }], (value: { a: number }) => String(value.a)); // Returns `[{ a: 1 }, { a: 2 }]`
 *
 * @param array
 * @param hasher Hashing function used for comparison between elements
 *
 * @returns New array without duplicates
 */
function deduplicate<Content>(array: ReadonlyArray<Content>, hasher: Hasher<Content> = JSON.stringify): ReadonlyArray<Content> {
	const equalizer: Eq<Content> = {
		equals: (left: Content, right: Content): boolean => hasher(left) === hasher(right)
	};

	return uniq<Content>(equalizer)([...array]);
}

export { deduplicate };
