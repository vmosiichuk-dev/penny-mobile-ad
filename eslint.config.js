import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
	{
		files: ['*.js', '*.jsx'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			react: eslintPluginReact,
			prettier: eslintPluginPrettier,
		},
		rules: {
			'prettier/prettier': ['error'],
			'no-unused-vars': ['warn'],
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];
