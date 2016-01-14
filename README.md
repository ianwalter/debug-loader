# debug-loader
A Webpack loader that allows you to debug your loader chain more easily.

## Installation

Install via NPM:

```
npm install debug-loader --save-dev
```

## Usage

Stick it into the loader chain and specify a query option:

```js
'css!debug?source!sass'
```

### Available Query Options

* `source=value` &mdash; Outputs the source from the last loader. If you specify
a value it will be used to identify the log output.

* `timer=value` &mdash; Outputs the amount of time elapsed between two debug
loaders. If you specify a value it will be used to identify the timer.
```js
'debug?time=SASS!sass!debug?time=SASS'
// => --- SASS: 3095ms.
```

&nbsp;

Created by [Ian Kennington Walter](http://iankwalter.com)
