# debug-loader
A Webpack loader that logs source to your console for debugging purposes.

## Installation

Install via NPM:

```
npm install debug-loader --save-dev
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

- Ian
