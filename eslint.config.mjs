// @ts-expect-error ESlint definitions are not really needed
import eslint from '@eslint/js';
import functional from 'eslint-plugin-functional';
import sonarjs from 'eslint-plugin-sonarjs';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		...sonarjs.configs.recommended,
		...stylistic.configs['recommended-flat'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			functional,
			unicorn,
			'@stylistic': stylistic,
		},
		rules: {
			...unicorn.configs['flat/recommended'].rules,
			...functional.configs?.['strict']?.rules,
			...functional.configs?.['stylistic']?.rules,
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/linebreak-style': ['error', 'unix'],
			'@stylistic/quotes': ['error', 'single'],
			'@stylistic/semi': ['error', 'always'],
			'@stylistic/array-bracket-spacing': ['error', 'never'],
			'@stylistic/arrow-spacing': 'error',
			'@stylistic/block-spacing': 'error',
			'@stylistic/comma-spacing': ['error', { 'before': false, 'after': true }],
			'@stylistic/computed-property-spacing': ['error', 'never'],
			'@stylistic/function-call-spacing': ['error', 'never'],
			'@stylistic/key-spacing': ['error', { 'beforeColon': false }],
			'@stylistic/no-mixed-spaces-and-tabs': 'error',
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'sort-imports': ['error', {
				ignoreCase: false,
				ignoreDeclarationSort: false,
				'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
				'allowSeparatedGroups': true
			}],
			'functional/prefer-immutable-types': ['error', { 'enforcement': 'ReadonlyDeep' }],
			'functional/type-declaration-immutability': ['off'],
			'unicorn/no-array-callback-reference': ['off']
		},
	},
	{
		files: ['**/*.test.ts'],
		plugins: {
			functional: functional,
		},
		rules: {
			...functional.configs?.['off']?.rules
		}
	}
);
