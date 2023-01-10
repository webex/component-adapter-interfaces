module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-webex-int`
  settings: {},
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.eslint.json',
      './src/webexcalling/tsconfig.json'
    ],
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'warn',
  },
};
