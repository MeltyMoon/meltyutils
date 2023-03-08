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
	static array = array;
	static boolean = boolean;
	static date = date;
	static number = number;
	static object = object;
	static regexp = regexp;
	static string = string;
	static document = document;
}

export default MeltyUtils;