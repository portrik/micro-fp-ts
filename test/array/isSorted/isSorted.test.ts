import { describe, expect, test } from 'vitest';
import { array } from '../../../src';
import { default as fixtures } from './fixtures.json' assert { type: 'json'};

const comparators = {
	descending: (a: number, b: number): number => b - a,
	ascending: (a: number, b: number): number => a - b
};

describe('isSorted', () => {
	test.each(fixtures)('Returns $expected for $array', ({ array: input, expected, comparator }) => {
		const actual = array.isSorted(input, comparator === 'descending' ? comparators.descending : comparators.ascending);

		expect(actual).toEqual(expected);
	});
});
