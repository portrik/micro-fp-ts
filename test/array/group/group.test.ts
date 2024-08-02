import { array } from '../../../src';

describe('group', () => {
	test('groups values', () => {
		const source = [
			{ tag: 'one', content: 'A' },
			{ tag: 'one', content: 'B' },
			{ tag: 'two', content: 'C' },
			{ tag: 'two', content: 'D' },
			{ tag: 'three', content: 'E' },
			{ tag: 'three', content: 'F' }
		];

		expect(array.group(source, 'tag')).toStrictEqual({
			one: [
				{ tag: 'one', content: 'A' },
				{ tag: 'one', content: 'B' }
			],
			two: [
				{ tag: 'two', content: 'C' },
				{ tag: 'two', content: 'D' }
			],
			three: [
				{ tag: 'three', content: 'E' },
				{ tag: 'three', content: 'F' }
			]
		});
	});
});
