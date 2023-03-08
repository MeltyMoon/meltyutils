class NumberUtils {
	/**
	 * Applies a range to a number.
	 * @param {number} value The value to apply the range to.
	 * @param {number} min The minimum/lowest number in the range.
	 * @param {number} max The maximum/highest number in the range.
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
	 * @param {number} value The value to test. 
	 * @param {number} min The minimum/lowest number in the range.
	 * @param {number} max The maximum/highest number in the range.
	 * @returns {boolean}
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
	 */
	flipRange(value, min, max) {
		if (!NumberUtils.inRange(value, min, max)) {
			return null;
		}

		return min - value + max;
	}
}

export default NumberUtils;