# Bin [![Build Status](https://travis-ci.org/cferdinandi/bin.svg)](https://travis-ci.org/cferdinandi/bin)
A tiny `localStorage` and `sessionStorage` helper library.

It automatically parses objects and arrays into strings (and back). It also let's you validate and expire `localStorage` data after a set period of time.

<hr>

### Want to learn how to write your own vanilla JS libraries? Check out my [Vanilla JS Pocket Guides](https://vanillajsguides.com/) or join the [Vanilla JS Academy](https://vanillajsacademy.com) and level-up as a web developer. 🚀

<hr>


## Installing Bin

Compiled and production-ready code can be found in the `dist` directory. The `src` directory contains development code.

**Direct Download**

You can [download the files directly from GitHub](https://github.com/cferdinandi/bin/archive/master.zip).

```html
<script src="path/to/bin.min.js"></script>
```

**CDN**

You can also use the [jsDelivr CDN](https://cdn.jsdelivr.net/gh/cferdinandi/bin/dist/). I recommend linking to a specific version number or version range to prevent major updates from breaking your site. Bin uses semantic versioning.

```html
<!-- Always get the latest version -->
<!-- Not recommended for production sites! -->
<script src="https://cdn.jsdelivr.net/gh/cferdinandi/bin/dist/bin.min.js"></script>

<!-- Get minor updates and patch fixes within a major version -->
<script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@1/dist/bin.min.js"></script>

<!-- Get patch fixes within a minor version -->
<script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@1.0/dist/bin.min.js"></script>

<!-- Get a specific version -->
<script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@1.0.0/dist/bin.min.js"></script>
```



## Methods

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

Pass in your data as an argument. It can be an object, array, string, number---any valid JavaScript object type. Bin will automatically convert it to a string for storage.

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

### `isValid()`

Check if a certain amount of time has passed since the data was saved to storage. Pass in the amount of time in milliseconds that the data is good for as an argument.

```js
// 1 hour
myBin.isValid(1000 * 60 * 60);

// 1 day
myBin.isValid(1000 * 60 * 60 * 24);

// 1 week
myBin.isValid(1000 * 60 * 60 * 24 * 7);

// 1 year
myBin.isValid(1000 * 60 * 60 * 24 * 365);

// 15 minutes
myBin.isValid(1000 * 60 * 15);

// 2 days
myBin.isValid(1000 * 60 * 60 * 24 * 2);
```

### `remove()`

Remove data from storage. The instance will remain available, but the data will be wiped from `localStorage`/`sessionStorage`.

```js
myBin.remove();
```



## Working with the Source Files

If you would prefer, you can work with the development code in the `src` directory using the included [Gulp build system](http://gulpjs.com/). This compiles, lints, and minifies code.

### Dependencies
Make sure these are installed first.

* [Node.js](http://nodejs.org)
* [Gulp](http://gulpjs.com) `sudo npm install -g gulp`

### Quick Start

1. In bash/terminal/command line, `cd` into your project directory.
2. Run `npm install` to install required files.
3. When it's done installing, run one of the task runners to get going:
	* `gulp` manually compiles files.
	* `gulp watch` automatically compiles files when changes are made and applies changes using [LiveReload](http://livereload.com/).



## Browser Compatibility

Smooth Scroll works in all modern browsers, and IE 8 and above.



## License

The code is available under the [MIT License](LICENSE.md).