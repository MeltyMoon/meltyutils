const timeMs = [1e3, 6e4, 36e5, 864e5, 2628e6, 31536e6];
/**
 * @typedef {Date|number} DateResolvable
 */

/**
 * @class DateUtils
 * @classdesc Various date utilities.
 */
class DateUtils {
	/**
	 * Gets the difference between two dates. (in milliseconds) 
	 * @param {DateResolvable} date1 The first date. 
	 * @param {?DateResolvable} date2 The second date.
	 * 
	 * Defaults to the current date if not provided.
	 * @returns {number}
	 * @memberof DateUtils
	 */
	static difference(date1, date2 = null) {
		if (date2 === null) {
			date1 = date2;
			date2 = Date.now();
		}
		
		if (date1 instanceof Date) {
			date1 = date1.valueOf();
		}

		if (date2 instanceof Date) {
			date2 = date2.valueOf();
		}

		return date1 - date2;
	}

	/**
	 * Gets the date from the provided relative string.
	 * @param {string} string 
	 * @returns {number}
	 * @memberof DateUtils
	 */
	static parseRelativeString(string) {
		const yearMatches = /[0-9]+(y|ear(s)?)/gi.exec(string),
			monthMatches = /[0-9]+(M|month(s)?)/g.exec(string),
			dayMatches = /[0-9]+(d(ay(s)?)?)/gi.exec(string),
			hourMatches = /[0-9]+(h(our(s)?)?)/gi.exec(string),
			minuteMatches = /[0-9]+(m(inute(s)?)?)/g.exec(string),
			secondMatches = /[0-9]+(s(econd(s)?)?)/gi.exec(string);

		let relative = 0, value;
		for (const [index, matches] of Object.entries([secondMatches, minuteMatches, hourMatches, dayMatches, monthMatches, yearMatches])) {
			if ((matches?.length || 0) > 0) {
				for (const match of matches) {
					value = parseInt(match);
					if (!isNaN(value)) {
						relative += value * timeMs[index];
					}
				}
			}
		}

		return Date.now() + relative;
	}


	/**
	 * Checks if the resolvable is a date.
	 * @param {DateResolvable} resolvable
	 * @returns {boolean} 
	 * @memberof DateUtils
	 */
	static isDate(resolvable) {
		return (new Date(resolvable) !== "Invalid Date") && !isNaN(new Date(resolvable));
	}

	/**
	 * Waits till the date to resolve (and run the provided callback if provided)
	 * @param {DateResolvable} date 
	 * @param {?function} callback
	 * @param {...*} args
	 * @returns {Promise.<*>}
	 */
	static waitTill(date, callback, ...args) {
		return new Promise(resolve => {
			setTimeout(() => {
				if (callback) {
					callback(...args);
				}
			}, DateUtils.difference(date) - 100);
		});
	}
}

export default DateUtils;