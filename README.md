# CP Random
[![Node](https://img.shields.io/node/v/cp-random.svg?style=flat-square)](https://npmjs.org/package/cp-random)
[![Version](https://img.shields.io/npm/v/cp-random.svg?style=flat-square)](https://npmjs.org/package/cp-random)
[![Downloads](https://img.shields.io/npm/dt/cp-random.svg?style=flat-square)](https://npmjs.org/package/cp-random)
[![Travis](https://img.shields.io/travis/TiagoDanin/CP-Random.svg?branch=master&style=flat-square)](https://travis-ci.org/TiagoDanin/CP-Random)

Copy random files to a specific folder


## Installation
Module available through the
[npm registry](https://www.npmjs.com/). It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
# NPM
npm install cp-random --global
# Or Using Yarn
yarn global add cp-random
```

## Usage
```sh
# Copy all files - from [dir] to [dir]
cp-random --from [dir] --to [dir]
# Copy [number] files - from [dir] to [dir]
cp-random --from [dir] --to [dir] --max [number]

```

## Tests
To run the test suite, first install the dependencies, then run `test`:

```sh
# NPM
npm test
# Or Using Yarn
yarn test
```

## Dependencies
- [minimist](https://ghub.io/minimist): parse argument options


## Related
- [thanos-nodejs](https://ghub.io/thanos-nodejs): Reduce the file size of your project down to 50%, by randomly deleting half of the files.

## Contributors
Pull requests and stars are always welcome. For bugs and feature requests, please [create an issue](https://github.com/TiagoDanin/CP-Random/issues). [List of all contributors](https://github.com/TiagoDanin/CP-Random/graphs/contributors).


## License
[MIT](LICENSE) © [Tiago Danin](https://TiagoDanin.github.io)
