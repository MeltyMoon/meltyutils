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

var ArrayUtils = /*#__PURE__*/function () {
  function ArrayUtils() {}
  /**
   * Groups items in an array in groups of a specified size.
   * 
   * Example: group([0, 0, 0, 0, 0, 0], 2) => [[0, 0], [0, 0], [0, 0]].
   * @param {Array.<*>} array 
   * @param {number} groupSize The size of the groups. 
   * @returns {Array.<Array.<*>>}
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
  };
  return ArrayUtils;
}();

var isBooleanString = /^(t(rue)?|f(alse)?|y(es)?|n(o)?|0|1)$/i,
  booleanStringIsTrue = /^(t(rue)?|y(es)?|1)$/i,
  booleanStringIsFalse = /^(f(alse)?|n(o)?|0)$/i;
var RegExpUtils = function RegExpUtils() {};

/**
 * @typedef {boolean|string|0|1} BooleanResolvable
 */
var BooleanUtils = /*#__PURE__*/function () {
  function BooleanUtils() {}
  /**
   * Checks if the provided thing is parsable as boolean.
   *
   * @static
   * @param {BooleanResolvable} resolvable 
   * @return {boolean}
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
var DateUtils = /*#__PURE__*/function () {
  function DateUtils() {}
  /**
   * Gets the difference between two dates. (in milliseconds) 
   * @param {DateResolvable} date1 The first date. 
   * @param {?DateResolvable} date2 The second date.
   * 
   * Defaults to the current date if not provided.
   * @returns {number}
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
   */;
  DateUtils.isDate = function isDate(resolvable) {
    return new Date(resolvable) !== "Invalid Date" && !isNaN(new Date(resolvable));
  };
  return DateUtils;
}();

var NumberUtils = /*#__PURE__*/function () {
  function NumberUtils() {}
  /**
   * Applies a range to a number.
   * @param {number} value 
   * @param {number} min 
   * @param {number} max
   * @returns {number} 
   */
  NumberUtils.applyRange = function applyRange(value, min, max) {
    value = Math.max(min, value);
    if (max) {
      value = Math.min(max, value);
    }
    return value;
  };
  return NumberUtils;
}();

var ObjectUtils = /*#__PURE__*/function () {
  function ObjectUtils() {}
  /**
   * Adds a property while avoiding circular properties.
   * 
   * @param {Object} object 
   * @param {string|number} key 
   * @param {*} property 
   * @returns {void}
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
   */;
  ObjectUtils.mapProperty = function mapProperty(object, property) {
    return Object.fromEntries(Object.entries(object).map(function (o) {
      return [o[0], o[1][property]];
    }));
  };
  return ObjectUtils;
}();

var StringUtils = /*#__PURE__*/function () {
  function StringUtils() {}
  /**
   * Checks if a string is parsable as a JSON object.
   * 
   * @param {string} str
   * @returns {boolean}
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
  };
  return StringUtils;
}();

var MeltyUtils = {
  array: ArrayUtils,
  "boolean": BooleanUtils,
  date: DateUtils,
  number: NumberUtils,
  object: ObjectUtils,
  regexp: RegExpUtils,
  string: StringUtils
};

export { MeltyUtils as default };
//# sourceMappingURL=meltyutils.esm.js.map
