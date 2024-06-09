import { array } from '../../../src';

describe('deduplicate', () => {
	it('should remove duplicates', () => {
		expect(array.deduplicate([1, 1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
	});


	it('should remove multiple duplicates', () => {
		expect(array.deduplicate([1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
	});

	it('should remove multiple duplicates of multiple values', () => {
		expect(array.deduplicate([1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5, 6]);
	});

	it('should remove duplicates of complex values', () => {
		expect(array.deduplicate([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 3 }])).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }]);
	});

	it('should remove duplicates of complex values when using a custom hasher', () => {
		expect(array.deduplicate([{ a: 1, b: 1 }, { a: 2, b: 2 }, { a: 3, b: 3 }, { a: 3, b: 4 }], value => value.a.toString())).toEqual([{ a: 1, b: 1 }, { a: 2, b: 2 }, { a: 3, b: 3 }]);
	});

	it('should remove date duplicates', () => {
		const myDate = new Date(2017, 0, 1);

		expect(array.deduplicate([myDate, myDate, myDate])).toEqual([myDate]);
	});

	it('should remove date duplicates inside a complex object', () => {
		const myDate = new Date(2017, 0, 1);

		expect(array.deduplicate([{ date: myDate }, { date: myDate }, { date: myDate }])).toEqual([{ date: myDate }]);
	});
});
