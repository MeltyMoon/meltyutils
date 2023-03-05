import { isBooleanString, booleanStringIsTrue, booleanStringIsFalse } from "./regexp";
/**
 * @typedef {boolean|string|0|1} BooleanResolvable
 */

export default class BooleanUtils {
	/**
	 * Checks if the provided thing is parsable as boolean.
	 *
	 * @static
	 * @param {BooleanResolvable} resolvable 
	 * @return {boolean}
	 */
	static is(resolvable) {
		switch (typeof resolvable) {
			default:
				return false;

			case "boolean":
				return true;

			case "string":
				return isBooleanString.test(resolvable);

			case "number":
				if ([0,1].includes( resolvable)) {
					return true;
				}

				return false;
		}
	}

	/**
	 * Parses a resolvable boolean.
	 * Returns null if it is not a boolean.
	 *
	 * @param {BooleanResolvable} resolvable 
	 * @return {boolean|null}
	 */
	static parse(resolvable) {
		switch (resolvable) {
			case 0:
				return false;
			case 1:
				return true;
		}

		switch (typeof resolvable) {
			default:
				return null;
			case "boolean":
				return resolvable;
			case "string":
				if (isBooleanString.test(resolvable)) {
					return this.isTrue(resolvable);
				}
				return null;
		}
	}

	/**
	 * Checks if a resolvable boolean is true.
	 *
	 * @static
	 * @param {BooleanResolvable} resolvable 
	 * @return {boolean}
	 */
	static isTrue(resolvable) {
		switch (typeof resolvable) {
			default:
				return false;
			case "boolean":
				return resolvable;
			case "string":
				return booleanStringIsTrue.test(resolvable);
			case "number":
				return resolvable === 1;
		}
	}

	/**
	 * Checks if a resolvable boolean is false.
	 *
	 * @static
	 * @param {BooleanResolvable} resolvable 
	 * @return {boolean}
	 */
	static isFalse(resolvable) {
		switch (typeof resolvable) {
			default:
				return false;
			case "boolean":
				return !resolvable;
			case "string":
				return booleanStringIsFalse.test(resolvable);
			case "number": 
				return resolvable === 0;
		}
	}
}