export default class StringUtils {
	/**
	 * Checks if a string is parsable as a JSON object.
	 * 
	 * @param {string} str
	 * @returns {boolean}
	 */
	static isJSON(str) {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	}

	/**
	 * Limits the string to the specified size.
	 * @param {string} string
	 * @param {number} size
	 * @returns {string} 
	 */
	static limit(string, size, ellipsis = false) {
		if (ellipsis) {
			return string.replace(RegExp(`(?<=.{${size - 3}}).+`), "...");
		}
		return string.slice(0, size);
	}


	/**
	 * Chops a string into strings of a specified length.
	 * @param {string} string
	 * @param {number} size
	 * @returns {string[]} 
	 */
	static chop(string, size) {
		let chopped = [];

		while (string.length > 0) {
			chopped.push(string.slice(0, size));
			if (string.length - size <= 0) {
				string = 0;
			} else {
				string = string.slice(size);
			}
		}

		return chopped;
	}

	/**
	 * Removes the elpisis (...) at the end of a string.
	 * @param {string} string 
	 * @returns {string}
	 */
	removeEndingElipsis(string) {
		return string.replace(/\.\.\.$/, "");
	}
}