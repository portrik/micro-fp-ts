import { array } from '../../../src';

describe('flatten', () => {
	it('should flatten nested arrays', () => {
		expect(array.flatten((['a', 'b', ['c'], 'd', ['e']]))).toEqual(['a', 'b', 'c', 'd', 'e']);
	});

	it('should flatten deeply nested arrays:', () => {
		expect(array.flatten(['a', [[[[[[[['b', [['c']]]]]], 'd', ['e']]]]]])).toEqual(['a', 'b', 'c', 'd', 'e']);
		expect(array.flatten(['a', 'b', ['c'], 'd', ['e']])).toEqual(['a', 'b', 'c', 'd', 'e']);
		expect(array.flatten([['a', ['b', ['k', ['a', ['b', ['c'], [['a', [['a', ['b', ['k', ['a', ['b', ['c']], ['a', ['x', ['c'], ['a', ['x', ['k']]], ['d', ['z']]]], ['d', ['m']]], ['d', ['e']]]]], ['d', ['e']]], ['b', ['k', ['a', ['b', ['c']], ['a', ['x', ['c'], ['a', ['x', ['k']]], ['d', ['z']]]], ['d', ['m']]], ['d', ['e']]]]], ['d', ['e']]]], ['a', ['x', ['c'], ['a', ['x', ['k']], [['a', ['b', ['k', ['a', ['b', ['c']], ['a', ['x', ['c'], ['a', ['x', ['k']]], ['d', ['z']]]], ['d', ['m']]], ['d', ['e']]]]], ['d', ['e']]]], ['d', ['z']]]], ['d', ['m']]], ['d', ['e']]]]], ['d', ['e']]])).toEqual(['a', 'b', 'k', 'a', 'b', 'c', 'a', 'a', 'b', 'k', 'a', 'b', 'c', 'a', 'x', 'c', 'a', 'x', 'k', 'd', 'z', 'd', 'm', 'd', 'e', 'd', 'e', 'b', 'k', 'a', 'b', 'c', 'a', 'x', 'c', 'a', 'x', 'k', 'd', 'z', 'd', 'm', 'd', 'e', 'd', 'e', 'a', 'x', 'c', 'a', 'x', 'k', 'a', 'b', 'k', 'a', 'b', 'c', 'a', 'x', 'c', 'a', 'x', 'k', 'd', 'z', 'd', 'm', 'd', 'e', 'd', 'e', 'd', 'z', 'd', 'm', 'd', 'e', 'd', 'e']);
	});
});
