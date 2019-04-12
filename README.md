# @ianwalter/debug-loader
> A [Webpack][webpackUrl] loader that logs source to your console for debugging
> purposes

[![npm page][npmImage]][npmUrl]

## Installation

```console
yarn add @ianwalter/debug-loader --dev
```

## Usage

Just stick it into the loader chain!

```js
'css!debug!sass'
```

You can also specify an `id` query option to tag the output:

```js
'css!debug?id=SASS!sass'
```


## License

Apache 2.0 with Commons Clause - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://iankwalter.com)

[npmImage]: https://img.shields.io/npm/v/@ianwalter/debug-loader.svg
[npmUrl]: https://www.npmjs.com/package/@ianwalter/debug-loader
[licenseUrl]: https://github.com/ianwalter/debug-loader/blob/master/LICENSE
