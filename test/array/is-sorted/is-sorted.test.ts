import { array } from '../../../src';
import { default as fixtures } from './fixtures.json' assert { type: 'json'};

const comparators = {
	descending: function(a: number, b: number): number { return b - a; },
	ascending: function(a: number, b: number): number { return a - b; }
};

describe('is-sorted', () => {
	test.each(fixtures)('Returns $expected for $array', ({ array: input, expected, comparator }) => {
		const actual = array.isSorted(input, comparator === 'descending' ? comparators.descending : comparators.ascending);

		expect(actual).toEqual(expected);
	});
});
