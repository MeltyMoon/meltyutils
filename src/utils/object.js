export default class ObjectUtils {
	/**
	 * Adds a property while avoiding circular properties.
	 * 
	 * @param {Object} object 
	 * @param {string|number} key 
	 * @param {*} property 
	 * @returns {void}
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
	 */
	static mapProperty(object, property) {
		return Object
			.fromEntries(Object
				.entries(object)
				.map(o => ([o[0], o[1][property]])));
	}
}