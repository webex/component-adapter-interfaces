module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'airbnb-typescript-prettier',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jsdoc/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'jest', 'jsdoc'],
  rules: {
    'react/jsx-key': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'jest/no-done-callback': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/require-default-props': [
      2,
      {
        functions: 'defaultArguments',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      rules: {
        'jest/no-done-callback': 'off',
        'react/jsx-filename-extension': 'off',
      },
    },
    {
      files: ['**/*.stories.tsx', '**/*.test.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
      },
    },
    {
      files: ['**/__mocks__/**'],
      rules: {
        'jsdoc/require-jsdoc': 'off',
      },
    },
  ],
  ignorePatterns: [
    '.eslintrc.js',
    'webpack.*.js',
    'babel.config.js',
    'jest.config.js',
    'rollup.*.js',
  ],
};
