module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-webex-int`
  extends: ['webex-int'],
  settings: {},
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.eslint.json',
      './src/*/tsconfig.json',
    ],
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'warn',
  },
};
