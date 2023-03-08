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
	static array = ArrayUtils;
	static boolean = BooleanUtils;
	static date = DateUtils;
	static number = NumberUtils;
	static object = ObjectUtils;
	static regexp = RegExpUtils;
	static string = StringUtils;
	static document = DocumentUtils;
}

export default MeltyUtils;