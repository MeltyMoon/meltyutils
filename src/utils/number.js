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
}