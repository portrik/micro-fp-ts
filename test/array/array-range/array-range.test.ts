import { none, some } from 'fp-ts/lib/Option';

import { array } from '../../../src';

describe('array-range', () => {
	it('should return none arguments', () => {
		expect(array.arrayRange()).toEqual(none);
	});

	it('should create range from zero', () => {
		expect(array.arrayRange(5)).toEqual(some([0, 1, 2, 3, 4]));
	});

	it('should create positive range', () => {
		expect(array.arrayRange(1, 4)).toEqual(some([1, 2, 3]));
	});

	it('should create negative range', () => {
		expect(array.arrayRange(-2, 1)).toEqual(some([-2, -1, 0]));
	});

	it('should create decrementing range', () => {
		expect(array.arrayRange(2, -1)).toEqual(some([2, 1, 0]));
	});
});
