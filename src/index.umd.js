import { default as array } from "./utils/array";
import { default as boolean } from "./utils/boolean";
import { default as date } from "./utils/date";
import { default as number } from "./utils/number";
import { default as object } from "./utils/object";
import { default as regexp } from "./utils/regexp";
import { default as string } from "./utils/string";
import { default as document } from "./utils/document";

/**
 * @class MeltyUtils
 * @classdesc Various utilities.
 */
const MeltyUtils = class MeltyUtils {
	/**
	 * @type {import("./utils/array")}
	 * @memberof MeltyUtils
	 */
	static array = array;
	/**
	 * @type {import("./utils/boolean")}
	 * @memberof MeltyUtils
	 */
	static boolean = boolean;
	/**
	 * @type {import("./utils/date")}
	 * @memberof MeltyUtils
	 */
	static date = date;
	/**
	 * @type {import("./utils/number")}
	 * @memberof MeltyUtils
	 */
	static number = number;
	/**
	 * @type {import("./utils/object")}
	 * @memberof MeltyUtils
	 */
	static object = object;
	/**
	 * @type {import("./utils/regexp")}
	 * @memberof MeltyUtils
	 */
	static regexp = regexp;
	/**
	 * @type {import("./utils/string")}
	 * @memberof MeltyUtils
	 */
	static string = string;
	/**
	 * @type {import("./utils/=")}
	 * @memberof MeltyUtils
	 */
	static document = document;
}

export default MeltyUtils;