export default class NumberUtils {
	/**
	 * Applies a range to a number.
	 * @param {number} value 
	 * @param {number} min 
	 * @param {number} max
	 * @returns {number} 
	 */
	static applyRange(value, min, max) {
		value = Math.max(min, value);
		
		if (max) {
			value = Math.min(max, value);
		}
		
		return value;
	}

	/**
	 * Checks if a number is in the specified range.
	 * @param {number} value 
	 * @param {number} min 
	 * @param {number} max 
	 */
	static inRange(value, min, max) {
		return value >= min && value <= max;
	}

	/**
	 * Returns the number on the opposite side of the range.
	 * @param {number} value 
	 * @param {number} min 
	 * @param {number} max 
	 */
	flipRange(value, min, max) {
		if (!NumberUtils.inRange(value, min, max)) {
			return null;
		}

		return min - value + max;
	}
}