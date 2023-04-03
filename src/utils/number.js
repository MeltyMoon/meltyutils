const words = {
	// extensions: [
	// 	{ ext: "un", value: 1, suffixMarking: "", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "duo", value: 2, suffixMarking: "", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "tre", value: 3, suffixMarking: "", suffixes: { "N": "", "M": "", "S": "s", "X": "s" } },
	// 	{ ext: "quattor", value: 4, suffixMarking: "", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "quinqua", value: 5, suffixMarking: "", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "se", value: 6, suffixMarking: "", suffixes: { "N": "", "M": "", "S": "x", "X": "" } },
	// 	{ ext: "septe", value: 7, suffixMarking: "", suffixes: { "N": "n", "M": "m", "S": "", "X": "" } },
	// 	{ ext: "octo", value: 8, suffixMarking: "", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "nove", value: 9, suffixMarking: "", suffixes: { "N": "n", "M": "m", "S": "", "X": "" } },
	// 	{ ext: "deci", value: 10, suffixMarking: "N", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "viginti", value: 20, suffixMarking: "MS", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "triginti", value: 30, suffixMarking: "NS", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "quadraginta", value: 40, suffixMarking: "NS", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "quinquaginta", value: 50, suffixMarking: "NS", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "sexaginta", value: 60, suffixMarking: "N", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "septuaginta", value: 70, suffixMarking: "N", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "octoginta", value: 80, suffixMarking: "MX", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "nonaginta", value: 90, suffixMarking: "", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "centi", value: 100, suffixMarking: "NX", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "ducenti", value: 200, suffixMarking: "N", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "trecenti", value: 300, suffixMarking: "NS", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "quadringenti", value: 400, suffixMarking: "NS", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "quingenti", value: 500, suffixMarking: "NS", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "sescenti", value: 600, suffixMarking: "N", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "septingenti", value: 700, suffixMarking: "N", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "octingenti", value: 800, suffixMarking: "MX", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// 	{ ext: "nonaginti", value: 900, suffixMarking: "", suffixes: { "N": "", "M": "", "S": "", "X": "" } },
	// ],
	bigNumbers: [
		"", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion"
	],
	single: [
		"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", ""
	],
	teens: [
		"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",
	],
	tens: [, ,
		"twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
	],
}

/**
 * @class NumberUtils
 * @classdesc Various number/math utilities.
 */
class NumberUtils {
	/**
	 * Stringifies numbers.
	 * 
	 * example:
	 * ```js
	 * stringify(1) === "one"
	 * ```
	 * @param {number} number
	 * @returns {string} 
	 */
	static stringify(number) {
		if (number === 0) {
			return "zero";
		};

		const groups = [];

		while (number > 0) {
			groups.push(number % 1000);
			number = Math.floor(number / 1000);
		}

		const groupWords = groups.map((group, index) => {
			let string = "";

			const hundreds = Math.floor(group / 100),
				tensOnes = group % 100;

			if (hundreds > 0) {
				string += `${words.single[hundreds]} hundred`;
			}

			if (tensOnes > 0) {
				if (!(tensOnes < 10 || tensOnes < 20)) {
					const tens = Math.floor(tensOnes / 10),
						ones = tensOnes % 10;

					string += ` ${words.tens[tens]} ${ones > 0 ? words.single[ones] : ""}`;
				} else {
					string += ` and ${tensOnes < 10 ? words.single[tensOnes] : words.teens[tensOnes - 10]}`;
				}
			}


			if (group > 0 && index < words.bigNumbers.length) {
				string += ` ${words.bigNumbers[index]}`;
			}

			return string.trim();
		});

		return groupWords
			.reverse()
			.join(" ")
			.replace(/(\s)*$/g, "")
			.replace(/^and/, "")
			.replace(/^(\s)*/g, "");
	}

	/**
	 * Applies a range to a number.
	 * @param {number} value The value to apply the range to.
	 * @param {number} min The minimum/lowest number in the range.
	 * @param {number} max The maximum/highest number in the range.
	 * @returns {number} 
	 * @memberof NumberUtils 
	 */
	static applyRange(value, min, max) {
		value = Math.max(min, value);

		if (max) {
			value = Math.min(max, value);
		}

		return value;
	}

	/**
	 * Generates a pseudo-random number in the specified range.
	 * @param {number} min The minimum/lowest number in the range.
	 * @param {number} max The maximum/highest number in the range.
	 * @return {number}
	 * @memberof NumberUtils
	 */
	static randomNumber(min, max) {
		return Math.floor(Math.random() * max) + min;
	}

	/**
	 * Checks if a number is in the specified range.
	 * @param {number} value The value to test. 
	 * @param {number} min The minimum/lowest number in the range.
	 * @param {number} max The maximum/highest number in the range.
	 * @returns {boolean}
	 * @memberof NumberUtils 
	 */
	static inRange(value, min, max) {
		return value >= min && value <= max;
	}

	/**
	 * Returns the number on the opposite side of the range.
	 * @param {number} value The value.
	 * @param {number} min The minimum/lowest number in the range.
	 * @param {number} max The maximum/highest number in the range.
	 * @returns {number|null}
	 * @memberof NumberUtils 
	 */
	static flipRange(value, min, max) {
		if (!NumberUtils.inRange(value, min, max)) {
			return null;
		}

		return min - value + max;
	}
}

export default NumberUtils;