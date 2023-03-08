/**
 * @class ArrayUtils
 * @classdesc Various array utilities.
 */
class ArrayUtils {
	/**
	 * Groups items in an array in groups of a specified size.
	 * 
	 * Example: group([0, 0, 0, 0, 0, 0], 2) => [[0, 0], [0, 0], [0, 0]].
	 * @param {Array.<*>} array 
	 * @param {number} groupSize The size of the groups. 
	 * @returns {Array.<Array.<*>>}
	 * @memberof ArrayUtils
	 */
	static group(array, groupSize) {
		if (!groupSize) {
			throw new ReferenceError("Must provide a group size.");
		}

		let groups = [];
		for (const item of array) {
			if (groups[groups.length - 1].length >= groupSize) {
				groups.push([]);
			}
			groups[groups.length - 1].push(item); 
		}

		return groups;
	}

	/**
	 * Groups an array by callback checks.
	 * 
	 * If an item falls under 2 groups, it will go into the group that comes first.
	 * @param {Array.<*>} array 
	 * @param {Array.<ItemCallback>} groups 
	 * @memberof ArrayUtils
	 */
	static groupBy(array, groups) {
		let results = [];
		// eslint-disable-next-line no-unused-vars
		for (const index of Object.keys(groups)) {
			results[index] = [];
		}

		for (const item of array) {
			let grouped = false;
			for (const [index, group] of Object.entries(groups)) {
				if (!grouped) {
					if (group(item) === true) {
						results[index].push(item);
						grouped = true;
					}
				}
			}
		}

		return results;
	}

	/**
	 * Maps an array by the property of each item.
	 * @param {Array.<*>} array
	 * @param {string|number} property
	 * @returns {Array.<*>}
	 * @memberof ArrayUtils
	 */
	static mapProperty(array, property) {
		return array.map(item => item[property]);
	}

	/**
	 * Gets the last index of an array.
	 * @param {Array.<*>} array 
	 * @returns {number}
	 * @memberof ArrayUtils
	 */
	static lastIndex(array) {
		return array.length - 1;
	}
}

export default ArrayUtils;