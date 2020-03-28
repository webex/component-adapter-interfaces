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

### Issues

Please open an
[issue](https://github.com/webex/component-adapter-interfaces/issues)
and we will get to it in an orderly manner.
Please leave as much as information as possible for a better understanding.

## License

[MIT License](https://opensource.org/licenses/MIT)

## Support

For more developer resources, tutorials and support, visit the Webex developer portal, https://developer.webex.com.
