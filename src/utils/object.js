
/**
 * @class ObjectUtils
 * @classdesc Various object utilities.
 */
class ObjectUtils {
	/**
	 * Adds a property while avoiding circular properties.
	 * 
	 * @param {Object} object 
	 * @param {string|number} key 
	 * @param {*} property 
	 * @returns {void}
	 * @memberof ObjectUtils
	 */
	static addPropertyNonCircular(object, key, property) {
		Object.defineProperty(object, key, {
			set(v) {
				property = v;
			},
			get() {
				return property;
			}
		});

		return;
	}

	/**
	 * Maps an object by a property.
	 * @param {Object} object 
	 * @param {string|number} property
	 * @returns {Array.<*>}
	 * @memberof ObjectUtils
	 */
	static mapProperty(object, property) {
		return Object
			.fromEntries(Object
				.entries(object)
				.map(o => ([o[0], o[1][property]])));
	}
}

export default ObjectUtils;