import { default as fixtures } from './fixtures.json' assert { type: 'json'};
import { isSorted } from '../../../src';

const comparators = {
	descending: function(a: number, b: number): number { return b - a; },
	ascending: function(a: number, b: number): number { return a - b; }
};

describe('checksort', () => {
	test.each(fixtures)('Returns $expected for $array', ({ array, expected, comparator }) => {
		const actual = isSorted(array, comparator === 'descending' ? comparators.descending : comparators.ascending);

		expect(actual).toEqual(expected);
	});
});
