export default [
  {
    languageOptions: {
      sourceType: 'module',
    },
    rules: {
      semi: ['error', 'always',],
      eqeqeq: ['error', 'always',],
      quotes: ['error', 'single',],
      indent: ['error', 2, { 'SwitchCase': 1, },],
      'prefer-const': 'error',
      'no-var': 'error',
      'array-bracket-spacing': 'error',
      'space-in-parens': 'error',
      'spaced-comment': 'error',
      'no-trailing-spaces': 'error',
      'no-console': 'warn',
      'comma-dangle': [
        'error', {
          'arrays': 'always',
          'objects': 'always',
        },
      ],
    },
  },
];
