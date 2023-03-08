import { default as ArrayUtils } from "./utils/array";
import { default as BooleanUtils } from "./utils/boolean";
import { default as DateUtils } from "./utils/date";
import { default as NumberUtils } from "./utils/number";
import { default as ObjectUtils } from "./utils/object";
import { default as RegExpUtils } from "./utils/regexp";
import { default as StringUtils } from "./utils/string";
import { default as DocumentUtils } from "./utils/document";

/**
 * @class MeltyUtils
 * @classdesc Various utilities.
 */
const MeltyUtils = class MeltyUtils {
	/**
	 * @type {ArrayUtils}
	 * @memberof MeltyUtils
	 */
	static array = ArrayUtils;
	/**
	 * @type {BooleanUtils}
	 * @memberof MeltyUtils
	 */
	static boolean = BooleanUtils;
	/**
	 * @type {DateUtils}
	 * @memberof MeltyUtils
	 */
	static date = DateUtils;
	/**
	 * @type {NumberUtils}
	 * @memberof MeltyUtils
	 */
	static number = NumberUtils;
	/**
	 * @type {ObjectUtils}
	 * @memberof MeltyUtils
	 */
	static object = ObjectUtils;
	/**
	 * @type {RegExpUtils}
	 * @memberof MeltyUtils
	 */
	static regexp = RegExpUtils;
	/**
	 * @type {StringUtils}
	 * @memberof MeltyUtils
	 */
	static string = StringUtils;
	/**
	 * @type {DocumentUtils}
	 * @memberof MeltyUtils
	 */
	static document = DocumentUtils;
}

export default MeltyUtils;