import { sentenceSplitString } from "./regexp";

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

	splitSentences(string) {
		return string.split(sentenceSplitString);
	}

	/**
	 * Removes the elpisis (...) at the end of a string.
	 * @param {string} string 
	 * @returns {string}
	 */
	removeEndingElipsis(string) {
		return string.replace(/\.\.\.$/, "");
	}

	/**
	 * Attempts to evenly space strings.
	 * (only really works with monospace fonts)
	 * 
	 * you must put `$SPACE$` where you want the space to be
	 * 
	 * ##### example:
	 * ```js
	 * [ "key$SPACE$value", "examplekey$SPACE$examplevalue" ]
	 * ```
	 * @param  {Array.<string>} strings
	 * @param  {Object} [options]
	 * @param  {"left"|"right"|"center"} [options.alignKey="left"] The direction to align the keys.
	 * 
	 * Default is `"left"`
	 * @param  {number} [options.minimumSpacing=1] The minimum amount of spaces between the key and the value.
	 * 
	 * Default is `1`.
	 */
	evenlySpace(strings, options) {
		options = {
			alignKey: "left",
			minimumSpacing: 1,
			...(options ?? {}),
		};

		strings = strings.flat().map(str => {
			const string = str.split("$SPACE$");

			if (string.length > 2) {
				throw new SyntaxError("this function currently only supports one spacing per string");
			}

			return string;
		});

		let longestKey = 0, _strings = [];
		for (const [key] of strings) {
			longestKey = Math.max(longestKey, key.length);
		}

		for (const _string of strings) {
			let string = "";
			const difference = longestKey - _string[0].length;
			string += `${options.alignKey === "left" ? "" : " ".repeat(Math.floor(difference / (options.alignKey === "center" ? 2 : 1)))}`;
			string += _string[0];
			string += `${options.alignKey === "right" ? "" : " ".repeat(Math.ceil(difference / (options.alignKey === "center" ? 2 : 1)))}`;
			string += `${" ".repeat(options.minimumSpacing)}`;
			string += _string[1];

			_strings.push(string);
		}
		return _strings;
	}
}