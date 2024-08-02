import { none, some } from 'fp-ts/lib/Option';

import { array } from '../../../src';

describe('map', () => {
	test('should convert an object into an array', () => {
		expect(array.map({ daft: 'punk', giovanni: 'Giorgio' }, (key: string, value: string): string => `${key} ${value}`)).toEqual(some(['daft punk', 'giovanni Giorgio']));
	});

	test('should return none for an empty object', () => {
		expect(array.map({}, (key: string, value: string): string => `${key} ${value}`)).toEqual(none);
	});
});
