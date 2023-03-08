
/**
 * @class DocumentUtils
 * @classdesc Various document utilities.
 */
class DocumentUtils {
	/**
	 * @param {Object} options The options for the element.
	 * @param {string} options.tag The element tag.
	 * @param {?string} options.id The element id.
	 * @param {?Element} options.parent The element parent.
	 * @param {?string} options.class The element class.
	 * @param {?boolean} options.draggable Whether the element is draggable.
	 * @returns {Element}
	 * @memberof DocumentUtils
	 */
	static create(options) {
		if (typeof window !== "undefined") {
			throw new Error("This program is not being ran in a browser.");
		}

		const element = document.createElement(options.tag);

		if (options.id) {
			element.id = options.id;
		}

		if (options.class) {
			element.className = options.class;
		}

		if (options.draggable) {
			element.draggable = options.draggable;
		}

		if (options.parent) {
			options.parent.appendChild(element);
		}

		return element;
	}
}

export default DocumentUtils;