import { none, some } from 'fp-ts/lib/Option';

import { array } from '../../../src';

describe('range', () => {
	it('should return none arguments', () => {
		expect(array.range()).toEqual(none);
	});

	it('should create range from zero', () => {
		expect(array.range(5)).toEqual(some([0, 1, 2, 3, 4]));
	});

	it('should create positive range', () => {
		expect(array.range(1, 4)).toEqual(some([1, 2, 3]));
	});

	it('should create negative range', () => {
		expect(array.range(-2, 1)).toEqual(some([-2, -1, 0]));
	});

	it('should create decrementing range', () => {
		expect(array.range(2, -1)).toEqual(some([2, 1, 0]));
	});
});
