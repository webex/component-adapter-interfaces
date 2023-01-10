module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ["**/webex/*.js"],
  rules: {
    'jest/no-done-callback': 'off',
  },
};
