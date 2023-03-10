function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/**
 * @class ArrayUtils
 * @classdesc Various array utilities.
 */
var ArrayUtils = /*#__PURE__*/function () {
  function ArrayUtils() {}
  /**
   * Groups items in an array in groups of a specified size.
   * 
   * Example: group([0, 0, 0, 0, 0, 0], 2) => [[0, 0], [0, 0], [0, 0]].
   * @param {Array.<*>} array 
   * @param {number} groupSize The size of the groups. 
   * @returns {Array.<Array.<*>>}
   * @memberof ArrayUtils
   */
  ArrayUtils.group = function group(array, groupSize) {
    if (!groupSize) {
      throw new ReferenceError("Must provide a group size.");
    }
    var groups = [];
    for (var _iterator = _createForOfIteratorHelperLoose(array), _step; !(_step = _iterator()).done;) {
      var item = _step.value;
      if (groups[groups.length - 1].length >= groupSize) {
        groups.push([]);
      }
      groups[groups.length - 1].push(item);
    }
    return groups;
  }

  /**
   * Groups an array by callback checks.
   * 
   * If an item falls under 2 groups, it will go into the group that comes first.
   * @param {Array.<*>} array 
   * @param {Array.<ItemCallback>} groups 
   * @memberof ArrayUtils
   */;
  ArrayUtils.groupBy = function groupBy(array, groups) {
    var results = [];
    // eslint-disable-next-line no-unused-vars
    for (var _i = 0, _Object$keys = Object.keys(groups); _i < _Object$keys.length; _i++) {
      var index = _Object$keys[_i];
      results[index] = [];
    }
    for (var _iterator2 = _createForOfIteratorHelperLoose(array), _step2; !(_step2 = _iterator2()).done;) {
      var item = _step2.value;
      var grouped = false;
      for (var _i2 = 0, _Object$entries = Object.entries(groups); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = _Object$entries[_i2],
          _index = _Object$entries$_i[0],
          group = _Object$entries$_i[1];
        if (!grouped) {
          if (group(item) === true) {
            results[_index].push(item);
            grouped = true;
          }
        }
      }
    }
    return results;
  }

  /**
   * Maps an array by the property of each item.
   * @param {Array.<*>} array
   * @param {string|number} property
   * @returns {Array.<*>}
   * @memberof ArrayUtils
   */;
  ArrayUtils.mapProperty = function mapProperty(array, property) {
    return array.map(function (item) {
      return item[property];
    });
  }

  /**
   * Gets the last index of an array.
   * @param {Array.<*>} array 
   * @returns {number}
   * @memberof ArrayUtils
   */;
  ArrayUtils.lastIndex = function lastIndex(array) {
    return array.length - 1;
  };
  return ArrayUtils;
}();

var isBooleanString = /^(t(rue)?|f(alse)?|y(es)?|n(o)?|0|1)$/i,
  booleanStringIsTrue = /^(t(rue)?|y(es)?|1)$/i,
  booleanStringIsFalse = /^(f(alse)?|n(o)?|0)$/i,
  sentenceSplitString = /\.(?=(\s|$))/g;

/**
 * @class RegExpUtils
 * @classdesc Various regular expression utilities.
 */
var RegExpUtils = function RegExpUtils() {};

/**
 * @typedef {boolean|string|0|1} BooleanResolvable
 */

/**
 * @class BooleanUtils
 * @classdesc Various boolean utilities.
 */
var BooleanUtils = /*#__PURE__*/function () {
  function BooleanUtils() {}
  /**
   * Checks if the provided thing is parsable as boolean.
   *
   * @static
   * @param {BooleanResolvable} resolvable 
   * @return {boolean}
   * @memberof BooleanUtils
   */
  BooleanUtils.is = function is(resolvable) {
    switch (typeof resolvable) {
      default:
        return false;
      case "boolean":
        return true;
      case "string":
        return isBooleanString.test(resolvable);
      case "number":
        if ([0, 1].includes(resolvable)) {
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
   * @memberof BooleanUtils
   */;
  BooleanUtils.parse = function parse(resolvable) {
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
   * @memberof BooleanUtils
   */;
  BooleanUtils.isTrue = function isTrue(resolvable) {
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
   * @memberof BooleanUtils
   */;
  BooleanUtils.isFalse = function isFalse(resolvable) {
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
  };
  return BooleanUtils;
}();

var timeMs = [1e3, 6e4, 36e5, 864e5, 2628e6, 31536e6];
/**
 * @typedef {Date|number} DateResolvable
 */

/**
 * @class DateUtils
 * @classdesc Various date utilities.
 */
var DateUtils = /*#__PURE__*/function () {
  function DateUtils() {}
  /**
   * Gets the difference between two dates. (in milliseconds) 
   * @param {DateResolvable} date1 The first date. 
   * @param {?DateResolvable} date2 The second date.
   * 
   * Defaults to the current date if not provided.
   * @returns {number}
   * @memberof DateUtils
   */
  DateUtils.difference = function difference(date1, date2) {
    if (date2 === void 0) {
      date2 = null;
    }
    if (date2 === null) {
      date1 = date2;
      date2 = Date.now();
    }
    if (date1 instanceof Date) {
      date1 = date1.valueOf();
    }
    if (date2 instanceof Date) {
      date2 = date2.valueOf();
    }
    return date1 - date2;
  }

  /**
   * Gets the date from the provided relative string.
   * @param {string} string 
   * @returns {number}
   * @memberof DateUtils
   */;
  DateUtils.parseRelativeString = function parseRelativeString(string) {
    var yearMatches = /[0-9]+(y|ear(s)?)/gi.exec(string),
      monthMatches = /[0-9]+(M|month(s)?)/g.exec(string),
      dayMatches = /[0-9]+(d(ay(s)?)?)/gi.exec(string),
      hourMatches = /[0-9]+(h(our(s)?)?)/gi.exec(string),
      minuteMatches = /[0-9]+(m(inute(s)?)?)/g.exec(string),
      secondMatches = /[0-9]+(s(econd(s)?)?)/gi.exec(string);
    var relative = 0,
      value;
    for (var _i = 0, _Object$entries = Object.entries([secondMatches, minuteMatches, hourMatches, dayMatches, monthMatches, yearMatches]); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _Object$entries[_i],
        index = _Object$entries$_i[0],
        matches = _Object$entries$_i[1];
      if (((matches == null ? void 0 : matches.length) || 0) > 0) {
        for (var _iterator = _createForOfIteratorHelperLoose(matches), _step; !(_step = _iterator()).done;) {
          var match = _step.value;
          value = parseInt(match);
          if (!isNaN(value)) {
            relative += value * timeMs[index];
          }
        }
      }
    }
    return Date.now() + relative;
  }

  /**
   * Checks if the resolvable is a date.
   * @param {DateResolvable} resolvable
   * @returns {boolean} 
   * @memberof DateUtils
   */;
  DateUtils.isDate = function isDate(resolvable) {
    return new Date(resolvable) !== "Invalid Date" && !isNaN(new Date(resolvable));
  }

  /**
   * Waits till the date to resolve (and run the provided callback if provided)
   * @param {DateResolvable} date 
   * @param {?function} callback
   * @param {...*} args
   * @returns {Promise.<*>}
   */;
  DateUtils.waitTill = function waitTill(date, callback) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return new Promise(function (resolve) {
      setTimeout(function () {
        if (callback) {
          callback.apply(void 0, args);
        }
      }, DateUtils.difference(date) - 100);
    });
  };
  return DateUtils;
}();

/**
 * @class NumberUtils
 * @classdesc Various number/math utilities.
 */
var NumberUtils = /*#__PURE__*/function () {
  function NumberUtils() {}
  /**
   * Applies a range to a number.
   * @param {number} value The value to apply the range to.
   * @param {number} min The minimum/lowest number in the range.
   * @param {number} max The maximum/highest number in the range.
   * @returns {number} 
   * @memberof NumberUtils 
   */
  NumberUtils.applyRange = function applyRange(value, min, max) {
    value = Math.max(min, value);
    if (max) {
      value = Math.min(max, value);
    }
    return value;
  }

  /**
   * Checks if a number is in the specified range.
   * @param {number} value The value to test. 
   * @param {number} min The minimum/lowest number in the range.
   * @param {number} max The maximum/highest number in the range.
   * @returns {boolean}
   * @memberof NumberUtils 
   */;
  NumberUtils.inRange = function inRange(value, min, max) {
    return value >= min && value <= max;
  }

  /**
   * Returns the number on the opposite side of the range.
   * @param {number} value The value.
   * @param {number} min The minimum/lowest number in the range.
   * @param {number} max The maximum/highest number in the range.
   * @returns {number|null}
   * @memberof NumberUtils 
   */;
  NumberUtils.flipRange = function flipRange(value, min, max) {
    if (!NumberUtils.inRange(value, min, max)) {
      return null;
    }
    return min - value + max;
  };
  return NumberUtils;
}();

/**
 * @class ObjectUtils
 * @classdesc Various object utilities.
 */
var ObjectUtils = /*#__PURE__*/function () {
  function ObjectUtils() {}
  /**
   * Adds a property while avoiding circular properties.
   * 
   * @param {Object} object 
   * @param {string|number} key 
   * @param {*} property 
   * @returns {void}
   * @memberof ObjectUtils
   */
  ObjectUtils.addPropertyNonCircular = function addPropertyNonCircular(object, key, property) {
    Object.defineProperty(object, key, {
      set: function set(v) {
        property = v;
      },
      get: function get() {
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
   */;
  ObjectUtils.mapProperty = function mapProperty(object, property) {
    return Object.fromEntries(Object.entries(object).map(function (o) {
      return [o[0], o[1][property]];
    }));
  };
  return ObjectUtils;
}();

/**
 * @class StringUtils
 * @classdesc Various string utilities.
 */
var StringUtils = /*#__PURE__*/function () {
  function StringUtils() {}
  /**
   * Checks if a string is parsable as a JSON object.
   * 
   * @param {string} str
   * @returns {boolean}
   * @memberof StringUtils
   */
  StringUtils.isJSON = function isJSON(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  /**
   * Limits the string to the specified size.
   * @param {string} string
   * @param {number} size
   * @returns {string} 
   * @memberof StringUtils
   */;
  StringUtils.limit = function limit(string, size, ellipsis) {
    if (ellipsis === void 0) {
      ellipsis = false;
    }
    if (ellipsis) {
      return string.replace(RegExp("(?<=.{" + (size - 3) + "}).+"), "...");
    }
    return string.slice(0, size);
  }

  /**
   * Chops a string into strings of a specified length.
   * @param {string} string
   * @param {number} size
   * @returns {string[]} 
   * @memberof StringUtils
   */;
  StringUtils.chop = function chop(string, size) {
    var chopped = [];
    while (string.length > 0) {
      chopped.push(string.slice(0, size));
      if (string.length - size <= 0) {
        string = 0;
      } else {
        string = string.slice(size);
      }
    }
    return chopped;
  }

  /**
   * Splits a string into an array containing its sentences.
   * @param {string} string 
   * @returns {Array.<string>}
   * @memberof StringUtils
   */;
  StringUtils.splitSentences = function splitSentences(string) {
    return string.split(sentenceSplitString);
  }

  /**
   * Removes the elpisis (...) at the end of a string.
   * @param {string} string 
   * @returns {string}
   * @memberof StringUtils
   */;
  StringUtils.removeEndingElipsis = function removeEndingElipsis(string) {
    return string.replace(/\.\.\.$/, "");
  }

  /**
   * Attempts to evenly space strings.
   * (only really works with monospace fonts)
   * 
   * you must put `$SPACE$` where you want the space to be
   * 
   * ##### example:
   * ```js
   * [ "key$SPACE$value", "examplekey$SPACE$examplevalue" ]
   * ```
   * @param  {Array.<string>} strings
   * @param  {Object} [options]
   * @param  {"left"|"right"|"center"} [options.alignKey="left"] The direction to align the keys.
   * 
   * Default is `"left"`
   * @param  {number} [options.minimumSpacing=1] The minimum amount of spaces between the key and the value.
   * 
   * Default is `1`.
   * @memberof StringUtils
   */;
  StringUtils.evenlySpace = function evenlySpace(strings, options) {
    var _options;
    options = _extends({
      alignKey: "left",
      minimumSpacing: 1
    }, (_options = options) != null ? _options : {});
    strings = strings.flat().map(function (str) {
      var string = str.split("$SPACE$");
      if (string.length > 2) {
        throw new SyntaxError("this function currently only supports one spacing per string");
      }
      return string;
    });
    var longestKey = 0,
      _strings = [];
    for (var _iterator = _createForOfIteratorHelperLoose(strings), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
        key = _step$value[0];
      longestKey = Math.max(longestKey, key.length);
    }
    for (var _iterator2 = _createForOfIteratorHelperLoose(strings), _step2; !(_step2 = _iterator2()).done;) {
      var _string = _step2.value;
      var string = "";
      var difference = longestKey - _string[0].length;
      string += "" + (options.alignKey === "left" ? "" : " ".repeat(Math.floor(difference / (options.alignKey === "center" ? 2 : 1))));
      string += _string[0];
      string += "" + (options.alignKey === "right" ? "" : " ".repeat(Math.ceil(difference / (options.alignKey === "center" ? 2 : 1))));
      string += "" + " ".repeat(options.minimumSpacing);
      string += _string[1];
      _strings.push(string);
    }
    return _strings;
  };
  return StringUtils;
}();

/**
 * @class DocumentUtils
 * @classdesc Various document utilities.
 */
var DocumentUtils = /*#__PURE__*/function () {
  function DocumentUtils() {}
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
  DocumentUtils.create = function create(options) {
    if (typeof window !== "undefined") {
      throw new Error("This program is not being ran in a browser.");
    }
    var element = document.createElement(options.tag);
    if (options.id) {
      element.id = options.id;
    }
    if (options["class"]) {
      element.className = options["class"];
    }
    if (options.draggable) {
      element.draggable = options.draggable;
    }
    if (options.parent) {
      options.parent.appendChild(element);
    }
    return element;
  };
  return DocumentUtils;
}();

var _class;

/**
 * @class MeltyUtils
 * @classdesc Various utilities.
 */
var MeltyUtils = (_class = function MeltyUtils() {}, _class.array = ArrayUtils, _class["boolean"] = BooleanUtils, _class.date = DateUtils, _class.number = NumberUtils, _class.object = ObjectUtils, _class.regexp = RegExpUtils, _class.string = StringUtils, _class.document = DocumentUtils, _class);

export { MeltyUtils as default };
//# sourceMappingURL=meltyutils.esm.js.map
