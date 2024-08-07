type Comparator<Value> = (left: Value, right: Value) => boolean;

function defaultComparator<Value>(left: Value, right: Value): boolean {
	return JSON.stringify(left) === JSON.stringify(right);
};

/**
 * Get elements from `left` that are absent from `right`.
 *
 * @example
 * difference(['a', 'b', 'c'], ['b', 'c', 'e']); // Returns `['a']`
 *
 * @example
 * difference([], ['a']); // Returns `[]`
 *
 * @param left
 * @param right
 * @param comparator Comparator function used for detecting equality. Uses JSON.stringify by default.
 *
 * @returns Elements from `left` that are absent from `right`
 */
function difference<Content>(left: ReadonlyArray<Content>, right: ReadonlyArray<Content>, comparator: Comparator<Content> = defaultComparator): ReadonlyArray<Content> {
	return left
		.filter((element: Content): boolean => !right.some((rightElement: Content): boolean => comparator(element, rightElement)));
}

export { difference };
