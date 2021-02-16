/**
 * Check if an expiration date has past or not
 * @param  {Integer} expires The expiration timestamp
 * @return {Boolean}         If true, data is still valid
 */
function isValid (expires) {

	// If there's no expiration date, return true
	if (expires === null) return true;

	// Get the difference between the timestamp and expiration date
	let difference = expires - new Date().getTime();

	// Check if the data has expired
	return difference > 0;

}

/**
 * Create the storage constructor
 * @param {String}  id      The storage ID
 * @param {Boolean} session If true, use sessionStorage instead of localStorage
 */
function Bin (id, session) {
	if (!id) throw new Error('Please provide an ID for your Bin.');
	this.id = id;
	this.storage = session ? sessionStorage : localStorage;
}

/**
 * Save data to storage with a timestamp
 * @param {Object|Array|String|Number} data    The data to save
 * @param {Integer}                    expires How long from now the data expires, in seconds
 */
Bin.prototype.set = function (data, expires) {
	this.storage.setItem(this.id, JSON.stringify({
		expires: expires ? new Date().getTime() + (expires * 1000) : null,
		data: data
	}));
};

/**
 * Get data from storage
 * @param {Object|Array|String|Number}  fallback A fallback value to return if no data is found [optional]
 * @param {Boolean}                     ignore   If true, return the data even if it's expired [optional]
 * @return {Object|Array|String|Number}          The saved data
 */
Bin.prototype.get = function (fallback, ignore) {
	let data = JSON.parse(this.storage.getItem(this.id));
	if (!data) return fallback ? fallback : data;
	if (ignore || isValid(this.expires)) return data;
	this.remove();
};

/**
 * Check if stored data is still valid
 * @return {Boolean}      If true, data is still valid
 */
Bin.prototype.isValid = function () {

	// Get the data
	let data = JSON.parse(this.storage.getItem(this.id));
	if (!data) return false;

	return isValid(data.expires);

};

/**
 * Remove an item from storage
 */
Bin.prototype.remove = function () {
	this.storage.removeItem(this.id);
};


export default Bin;