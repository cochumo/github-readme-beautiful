module.exports = {
	extends: ['next', 'next/core-web-vitals', 'prettier'],
	rules: {
		semi: 'never',
		'import/prefer-default-export': 'off',
		'newline-before-return': 'error',
		'no-console': 'warn',
		'no-var': 'error',
	},
}
