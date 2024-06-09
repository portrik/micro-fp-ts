type Comparator<Value> = (a: Value, b: Value) => boolean;

function defaultComparator<Value>(a: Value, b: Value): boolean {
	return JSON.stringify(a) === JSON.stringify(b);
}

/**
 * Find whether a value is contained in an array.
 *
 * @example
 * inArray(['a', 'b', 'c'], 'a'); // Returns true
 *
 * @example
 * inArray([], 'a'); // Returns false
 *
 * @param array
 * @param toFind
 * @param comparator Comparator function to determine whether two values are equal. Uses JSON.stringify by default
 *
 * @returns Is the value contained in the array?
 */
function inArray<Content>(array: ReadonlyArray<Content>, toFind: Content, comparator: Comparator<Content> = defaultComparator): boolean {
	return array.some((value: Content) => comparator(toFind, value));
}

export { inArray };
