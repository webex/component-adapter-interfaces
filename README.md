<div align='center'>
  <h1>Webex Component Adapter Interfaces</h1>
  <h3>Library of Interfaces for Adapters in the Webex Component System</h3>

  <a href='https://circleci.com/gh/webex/component-adapter-interfaces'>
    <img alt='CircleCI' src='https://circleci.com/gh/webex/component-adapter-interfaces.svg?style=shield'>
  </a>
  <a href='https://www.npmjs.com/package/@webex/component-adapter-interfaces'>
    <img alt='npm latest version' src='https://img.shields.io/npm/v/@webex/component-adapter-interfaces?label=npm%40latest'>
  </a>
  <a href='#badge'>
    <img alt='semantic-release' src='https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg'>
  </a>
  <a href='https://github.com/webex/component-adapter-interfaces/blob/master/package.json#L28'>
    <img src='https://img.shields.io/npm/l/webex.svg' alt='license'>
  </a>
</div>

**Webex Component Adapter Interfaces** is a set of interfaces that the
[Webex Component System](https://github.com/webex/components#adapters)
uses as a contract for the _Webex Components_ on how to obtain data.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
  - [Issues](#issues)
  - [Contributing Code](#contributing-code)
  - [Release Process](#release-process)
    - [Commit linter](#commit-linter)
- [License](#license)
- [Support](#support)

## Install

```bash
npm install --save @webex/component-adapter-interfaces
```

## Usage

The adapter interfaces are meant to be used by developers that want to use the
[Webex Components](https://github.com/webex/components#webex-components) but for
which an adapter does not exist for their source of data. For instance, the
[SDK Component Adapter](https://github.com/webex/sdk-component-adapter#webex-sdk-component-adapter)
exists to communicate with the
[Javascript SDK](https://github.com/webex/webex-js-sdk#webex-js-sdk)
to ultimately obtain data from Webex services.

An example of extending the `RoomsAdapter` for your datasource would look like:

```js
import {RoomsAdapter} from '@webex/components-adapter-interfaces';

export default class MyRoomsAdapter extends RoomsAdapter {
  getRoom(ID) {
    // ... my implementation
  }
}
```

The key of the interfaces is that they define what methods the _Webex Components_
expect.

_Happy Coding!_

## Contributing

We'd love for you to contribute to our source code and to make **Webex Component Adapter Interfaces** even better than it is today! Here are some [guidelines](https://github.com/webex/components/blob/master/CONTRIBUTING.md) that we'd like you to follow.

### Issues

Please open an [issue](https://github.com/webex/components/issues) and we will get to it in an orderly manner.
Please leave as much as information as possible for a better understanding.

### Contributing Code

We are using [Webex Style Guide eslint rule](https://github.com/webex/web-styleguide/tree/master/packages/node_modules/%40webex/eslint-config-react) and [prettier](https://github.com/prettier/prettier) to lint the code style.
You can "prettify" your code before committing via:

```bash
npm run prettier:write
```

### Release Process

There is a list of commit types provided [here](https://github.com/webex/components/blob/master/CONTRIBUTING.md#type). However, not all commits trigger our release process.
We are using [semantic-release](https://github.com/semantic-release/semantic-release) to fully automate the version management and package publishing.
By default `semantic-release` uses the [Angular Commit Message Conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) and triggers release and publishing based on the following rules:

| Commit                             | Release type  |
| ---------------------------------- | :-----------: |
| Commit with type `BREAKING CHANGE` | Major release |
| Commit with type `feat`            | Minor release |
| Commit with type `fix`             | Patch release |
| Commit with type `perf`            | Patch release |

#### Commit linter

We are using [commitlint](https://github.com/conventional-changelog/commitlint) to lintify the commit messages.
Please make sure to choose the appropriate commit [type](https://github.com/webex/components/blob/master/CONTRIBUTING.md#type), [scope](https://github.com/webex/components/blob/master/CONTRIBUTING.md#scope) and [subject](https://github.com/webex/components/blob/master/CONTRIBUTING.md#scope).

## License

[MIT License](https://opensource.org/licenses/MIT)

## Support

For more developer resources, tutorials and support, visit the Webex developer portal, https://developer.webex.com.
