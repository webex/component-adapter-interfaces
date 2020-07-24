# Dependencies

This guide describes the dependencies of this repository and their purpose.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Peer Dependencies](#peer-dependencies)
- [Development Dependencies](#development-dependencies)
  - [babel](#babel)
  - [commitlint](#commitlint)
  - [ESLint](#eslint)
  - [Husky](#husky)
  - [Jest](#jest)
  - [Rollup](#rollup)
  - [semantic-release](#semantic-release)

## Peer Dependencies

Peer dependencies are package dependencies that the library depends on
but are not included as part of the library's final production bundle.

Usually peer dependencies are packages that would-be users would already have or need
as part of their own applications, and hence, no need to include them as part of
the library code.

### RxJS

#### RxJS Packages

- [rxjs](https://www.npmjs.com/package/rxjs): RxJS core package

## Development Dependencies

Development dependencies are package dependencies used while developing library code
but are not part of the library's final production bundle.

### Babel

[Babel](https://babeljs.io)
is a compiler that allows developers to use new JavaScript features that are not yet available in all browsers.

#### Babel Packages

- [@babel/core](https://www.npmjs.com/package/@babel/core):
  Compiler core package
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env):
  Pre-set of JavaScript features babel should compile

### Commitlint

[commitlint](https://commitlint.js.org/)
checks commit messages to make sure they follow
[commit message guidelines](https://github.com/webex/components/blob/master/CONTRIBUTING.md#git-commit).

#### Commitlint Packages

- [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli):
  commitlint core package
- [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional):
  commitlint enforcer of [conventional commit](https://conventionalcommits.org/) guidelines

### ESLint

[ESLint](https://eslint.org/) is a static analysis tool that enforces code styles and patterns.

#### ESLint Packages

- [eslint](https://www.npmjs.com/package/eslint):
  ESLint core package
- [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base):
  Airbnb's
  [JavaScript style guide](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-)
  configurations
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import):
  Plugin that enforces import/export styles
- [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest):
  Plugin that enforces standard [Jest](https://jestjs.io) styles
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc):
  Plugin that enforces standard [JSDoc](https://jsdoc.app) styles

### Husky

[Husky](https://github.com/typicode/husky#husky) simplifies running scripts in
[Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).

#### Husky Packages

- [husky](https://www.npmjs.com/package/husky) - Husky core package

### Jest

[Jest](https://jestjs.io) is a testing framework and runner. Used for unit tests.

#### Jest Packages

- [jest](https://www.npmjs.com/package/jest): Jest core package
- [jest-junit](https://www.npmjs.com/package/jest-junit):
  Plugin that allows for JUnit-style reporting

### Rollup

[Rollup](https://rollupjs.org) is a JavaScript module bundler.

#### Rollup Packages

- [rollup](https://www.npmjs.com/package/rollup): Rollup core package
- [rollup-plugin-terser](https://www.npmjs.com/package/rollup-plugin-terser):
  Plugin to create minified bundles

### Semantic Release

[semantic-release](https://semantic-release.gitbook.io/semantic-release/)
automates the versioning and release process.
semantic-release using semantic versioning to find the next version.
It also takes care of updating all packages, pushing back to Git and publishing to NPM.

#### Semantic Release Packages

- [semantic-release](https://www.npmjs.com/package/semantic-release):
  semantic-release core package
- [@semantic-release/changelog](https://www.npmjs.com/package/@semantic-release/changelog):
  Plugin to generate the changelog
- [@semantic-release/git](https://www.npmjs.com/package/@semantic-release/git):
  Plugin to commit release assets into a Git repository
