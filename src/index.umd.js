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