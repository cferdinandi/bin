/*!
 * bin v0.0.1: A tiny localStorage library
 * (c) 2018 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/bin
 */

 (function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], (function () {
			return factory(root);
		}));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.Bin = factory(root);
	}
 })(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, (function (window) {

	'use strict';

	/**
	 * Create the storage constructor
	 * @param {String}  id      The storage ID
	 * @param {Boolean} session If true, use sessionStorage instead of localStorage
	 */
	var Constructor = function (id, session) {
		if (!id) throw new Error('Please provide an ID for your Bin.');
		this.id = id;
		this.storage = session ? sessionStorage : localStorage;
		this.string = false;
	};

	/**
	 * Save data to storage with a timestamp
	 * @param {Object|Array|String|Number} data The data to save
	 */
	Constructor.prototype.set = function (data) {
		this.storage.setItem(this.id, JSON.stringify({
			timestamp: new Date().getTime(),
			data: data
		}));
	};

	/**
	 * Get data from storage
	 * @param {Object|Array|String|Number}  fallback A fallback value to return if no data is found [optional]
	 * @param {Boolean}                     full     If true, return the data AND timestamp [optional]
	 * @return {Object|Array|String|Number}          The saved data
	 */
	Constructor.prototype.get = function (fallback, full) {
		var data = this.storage.getItem(this.id);
		data = data ? JSON.parse(data) : null;
		if (!data) return fallback ? fallback : data;
		return full ? data : data.data;
	};

	/**
	 * Check if stored data is still valid
	 * @param  {Number}  time The amount of ellapsed time in milliseconds before the data expires
	 * @return {Boolean}      If true, data is still valid
	 */
	Constructor.prototype.isValid = function (time) {

		// Get the data
		var data = this.get(null, true);
		if (!data) return false;

		// Get the difference between the timestamp and current time
		var difference = new Date().getTime() - data.timestamp;

		// Check if the ellapsed time is less than the valid time
		return difference < time;

	};

	/**
	 * Remove an item from storage
	 */
	Constructor.prototype.remove = function () {
		this.storage.removeItem(this.id);
	};

	// Return the constructor
	return Constructor;

}));