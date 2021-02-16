# Bin [![Build Status](https://travis-ci.org/cferdinandi/bin.svg)](https://travis-ci.org/cferdinandi/bin)
A tiny (< 1kb) `localStorage` and `sessionStorage` helper library.

It automatically parses objects and arrays into strings (and back). It also let's you validate and expire `localStorage` data after a set period of time.

[Installation](#installation) | [API](#api) | [Browser Compatibility](#browser-compatibility) | [License](#license)

<hr>

### Want to learn how to write your own vanilla JS libraries? Check out my [Vanilla JS Pocket Guides](https://vanillajsguides.com/) or join the [Vanilla JS Academy](https://vanillajsacademy.com) and level-up as a web developer. 🚀

<hr>


## Installation

[The CDN is the fastest and simplest way to get started](https://cdn.jsdelivr.net/npm/storagebinjs/dist/), but you can use importable modules or a direct download if you’d prefer.

```html
<!-- Get the latest major version -->
<script src="https://cdn.jsdelivr.net/npm/storagebinjs@1/dist/bin.min.js"></script>
```

Bin uses semantic versioning. You can grab a major, minor, or patch version from the CDN with the `@1.2.3` syntax. You can find all available versions [under releases](https://github.com/cferdinandi/bin/releases).

**ES Modules**

Bin also supports modern browsers and module bundlers (like Rollup, Webpack, Snowpack, and so on) using the ES modules import syntax. Use the `.es` version.

```js
import Bin from 'https://cdn.jsdelivr.net/npm/storagebinjs@1/dist/bin.es.min.js';
```

**NPM**

You can also use NPM (or your favorite package manager). First, install with NPM.

```bash
npm install storagebinjs --save
```

Then import the package.

```js
import Bin from 'storagebinjs';
```

**CommonJS**

If you use NodeJS, you can import bin using the `require()` method with the `.cjs` version.

```js
let Bin = require('https://cdn.jsdelivr.net/npm/storagebinjs@1/dist/bin.cjs.min.js');
```

**AMD**

If you use RequireJS, SystemJS, and other AMD formats, you can import bin with the `.amd` version.

```js
requirejs(['https://cdn.jsdelivr.net/npm/storagebinjs@1/dist/bin.amd.min.js'], function (Bin) {
  //...
});
```

**Direct Download**

You can download the files directly from GitHub.

Compiled and production-ready code can be found in the `dist` directory. The `src` directory contains development code.

```html
<script src="path/to/bin.min.js"></script>
```



## API

Before working with Bin, you need to instantiate a new instance. Pass in the ID you would like to use for your `localStorage`/`sessionStorage` data as an argument.

Bin defaults to `localStorage`. You can optionally pass in `true` as a second argument to use `sessionStorage` instead.

```js
// Instantiate a new localStorage instance
var myBin = new Bin('myBinID');

// Instantiate a new sessionStorage instance
var myBinSession = new Bin('myBinSessionID', true);
```

### `set()`

Save data to storage.

Pass in your data as an argument. It can be an object, array, string, number&mdash;any valid JavaScript object type. Bin will automatically convert it to a string for storage.

```js
// Store an object
myBin.set({
	sandwich: 'turkey',
	drink: 'soda',
	chips: true
});

// Store an array
myBin.set([
	'turkey',
	'tuna',
	'pb&j'
]);

// Store a string
myBin.set('I love Cape Cod potato chips!');

// Store a number
myBin.set(42);
```

If you would like your data to expire, pass in the amount of time in seconds that the data is good for.

```js
// expires in one week
// 60 seconds x 60 minutes x 24 hours x 7 days
myBin.set('Temporary value', 60 * 60 * 24 * 7);
```

### `get()`

Get data from storage. You can optionally pass in a fallback to use if no data is found.

```js
// Get data from storage
myBin.get();

// Use a fallback object
myBin.get({});

// Use a fallback array
myBin.get([]);

// Use a fallback string
myBin.get('');

// Use a fallback number
myBin.get(0);
```

If the data has expired, it will be removed and `null` will be returned. To get the actual data event if it has expired, pass in `true` as a second argument.

```js
myBin.get('Temporary value', true);
```

### `isValid()`

Check if data has expired based on the `expiration` you set when defining it.

```js
// 1 hour
myBin.isValid();

// 1 day
myBin.isValid();

// 1 week
myBin.isValid();

// 1 year
myBin.isValid();

// 15 minutes
myBin.isValid();

// 2 days
myBin.isValid();
```

### `remove()`

Remove data from storage. The instance will remain available, but the data will be wiped from `localStorage`/`sessionStorage`.

```js
myBin.remove();
```



## Browser Compatibility

Bin works in all modern browsers, and IE 8 and above.



## License

The code is available under the [MIT License](LICENSE.md).