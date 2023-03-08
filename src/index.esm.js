import ArrayUtils from "./utils/array";
import BooleanUtils from "./utils/boolean";
import DateUtils from "./utils/date";
import NumberUtils from "./utils/number";
import ObjectUtils from "./utils/object";
import RegExpUtils from "./utils/regexp";
import StringUtils from "./utils/string";
import DocumentUtils from "./utils/document";

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