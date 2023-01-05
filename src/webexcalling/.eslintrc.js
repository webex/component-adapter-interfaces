module.exports = {
  root: true,
  extends: ['webex-int'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    'jest/no-done-callback': 'off',
  },
};
