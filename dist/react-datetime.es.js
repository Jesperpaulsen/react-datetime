var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import moment from "moment";
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = propTypes.exports;
var react = { exports: {} };
var react_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = objectAssign, n$1 = typeof Symbol === "function" && Symbol.for, p = n$1 ? Symbol.for("react.element") : 60103, q = n$1 ? Symbol.for("react.portal") : 60106, r$1 = n$1 ? Symbol.for("react.fragment") : 60107, t = n$1 ? Symbol.for("react.strict_mode") : 60108, u$1 = n$1 ? Symbol.for("react.profiler") : 60114, v$1 = n$1 ? Symbol.for("react.provider") : 60109, w = n$1 ? Symbol.for("react.context") : 60110, x = n$1 ? Symbol.for("react.forward_ref") : 60112, y = n$1 ? Symbol.for("react.suspense") : 60113, z = n$1 ? Symbol.for("react.memo") : 60115, A = n$1 ? Symbol.for("react.lazy") : 60116, B = typeof Symbol === "function" && Symbol.iterator;
function C$1(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var D = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, E$1 = {};
function F$1(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E$1;
  this.updater = c || D;
}
F$1.prototype.isReactComponent = {};
F$1.prototype.setState = function(a, b) {
  if (typeof a !== "object" && typeof a !== "function" && a != null)
    throw Error(C$1(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};
F$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function G$1() {
}
G$1.prototype = F$1.prototype;
function H$1(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E$1;
  this.updater = c || D;
}
var I$1 = H$1.prototype = new G$1();
I$1.constructor = H$1;
l(I$1, F$1.prototype);
I$1.isPureReactComponent = true;
var J$1 = { current: null }, K$1 = Object.prototype.hasOwnProperty, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b, c) {
  var e, d = {}, g = null, k = null;
  if (b != null)
    for (e in b.ref !== void 0 && (k = b.ref), b.key !== void 0 && (g = "" + b.key), b)
      K$1.call(b, e) && !L$1.hasOwnProperty(e) && (d[e] = b[e]);
  var f = arguments.length - 2;
  if (f === 1)
    d.children = c;
  else if (1 < f) {
    for (var h = Array(f), m = 0; m < f; m++)
      h[m] = arguments[m + 2];
    d.children = h;
  }
  if (a && a.defaultProps)
    for (e in f = a.defaultProps, f)
      d[e] === void 0 && (d[e] = f[e]);
  return { $$typeof: p, type: a, key: g, ref: k, props: d, _owner: J$1.current };
}
function N$1(a, b) {
  return { $$typeof: p, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return typeof a === "object" && a !== null && a.$$typeof === p;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + ("" + a).replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P$1 = /\/+/g, Q$1 = [];
function R$1(a, b, c, e) {
  if (Q$1.length) {
    var d = Q$1.pop();
    d.result = a;
    d.keyPrefix = b;
    d.func = c;
    d.context = e;
    d.count = 0;
    return d;
  }
  return { result: a, keyPrefix: b, func: c, context: e, count: 0 };
}
function S$1(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > Q$1.length && Q$1.push(a);
}
function T$1(a, b, c, e) {
  var d = typeof a;
  if (d === "undefined" || d === "boolean")
    a = null;
  var g = false;
  if (a === null)
    g = true;
  else
    switch (d) {
      case "string":
      case "number":
        g = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case p:
          case q:
            g = true;
        }
    }
  if (g)
    return c(e, a, b === "" ? "." + U$1(a, 0) : b), 1;
  g = 0;
  b = b === "" ? "." : b + ":";
  if (Array.isArray(a))
    for (var k = 0; k < a.length; k++) {
      d = a[k];
      var f = b + U$1(d, k);
      g += T$1(d, f, c, e);
    }
  else if (a === null || typeof a !== "object" ? f = null : (f = B && a[B] || a["@@iterator"], f = typeof f === "function" ? f : null), typeof f === "function")
    for (a = f.call(a), k = 0; !(d = a.next()).done; )
      d = d.value, f = b + U$1(d, k++), g += T$1(d, f, c, e);
  else if (d === "object")
    throw c = "" + a, Error(C$1(31, c === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, ""));
  return g;
}
function V$1(a, b, c) {
  return a == null ? 0 : T$1(a, "", b, c);
}
function U$1(a, b) {
  return typeof a === "object" && a !== null && a.key != null ? escape(a.key) : b.toString(36);
}
function W$1(a, b) {
  a.func.call(a.context, b, a.count++);
}
function aa$1(a, b, c) {
  var e = a.result, d = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? X$1(a, e, c, function(a2) {
    return a2;
  }) : a != null && (O$1(a) && (a = N$1(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P$1, "$&/") + "/") + c)), e.push(a));
}
function X$1(a, b, c, e, d) {
  var g = "";
  c != null && (g = ("" + c).replace(P$1, "$&/") + "/");
  b = R$1(b, g, e, d);
  V$1(a, aa$1, b);
  S$1(b);
}
var Y$1 = { current: null };
function Z$1() {
  var a = Y$1.current;
  if (a === null)
    throw Error(C$1(321));
  return a;
}
var ba$1 = { ReactCurrentDispatcher: Y$1, ReactCurrentBatchConfig: { suspense: null }, ReactCurrentOwner: J$1, IsSomeRendererActing: { current: false }, assign: l };
react_production_min.Children = { map: function(a, b, c) {
  if (a == null)
    return a;
  var e = [];
  X$1(a, e, null, b, c);
  return e;
}, forEach: function(a, b, c) {
  if (a == null)
    return a;
  b = R$1(null, null, b, c);
  V$1(a, W$1, b);
  S$1(b);
}, count: function(a) {
  return V$1(a, function() {
    return null;
  }, null);
}, toArray: function(a) {
  var b = [];
  X$1(a, b, null, function(a2) {
    return a2;
  });
  return b;
}, only: function(a) {
  if (!O$1(a))
    throw Error(C$1(143));
  return a;
} };
react_production_min.Component = F$1;
react_production_min.Fragment = r$1;
react_production_min.Profiler = u$1;
react_production_min.PureComponent = H$1;
react_production_min.StrictMode = t;
react_production_min.Suspense = y;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba$1;
react_production_min.cloneElement = function(a, b, c) {
  if (a === null || a === void 0)
    throw Error(C$1(267, a));
  var e = l({}, a.props), d = a.key, g = a.ref, k = a._owner;
  if (b != null) {
    b.ref !== void 0 && (g = b.ref, k = J$1.current);
    b.key !== void 0 && (d = "" + b.key);
    if (a.type && a.type.defaultProps)
      var f = a.type.defaultProps;
    for (h in b)
      K$1.call(b, h) && !L$1.hasOwnProperty(h) && (e[h] = b[h] === void 0 && f !== void 0 ? f[h] : b[h]);
  }
  var h = arguments.length - 2;
  if (h === 1)
    e.children = c;
  else if (1 < h) {
    f = Array(h);
    for (var m = 0; m < h; m++)
      f[m] = arguments[m + 2];
    e.children = f;
  }
  return {
    $$typeof: p,
    type: a.type,
    key: d,
    ref: g,
    props: e,
    _owner: k
  };
};
react_production_min.createContext = function(a, b) {
  b === void 0 && (b = null);
  a = { $$typeof: w, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
  a.Provider = { $$typeof: v$1, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b = M$1.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: x, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: A, _ctor: a, _status: -1, _result: null };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: z, type: a, compare: b === void 0 ? null : b };
};
react_production_min.useCallback = function(a, b) {
  return Z$1().useCallback(a, b);
};
react_production_min.useContext = function(a, b) {
  return Z$1().useContext(a, b);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useEffect = function(a, b) {
  return Z$1().useEffect(a, b);
};
react_production_min.useImperativeHandle = function(a, b, c) {
  return Z$1().useImperativeHandle(a, b, c);
};
react_production_min.useLayoutEffect = function(a, b) {
  return Z$1().useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return Z$1().useMemo(a, b);
};
react_production_min.useReducer = function(a, b, c) {
  return Z$1().useReducer(a, b, c);
};
react_production_min.useRef = function(a) {
  return Z$1().useRef(a);
};
react_production_min.useState = function(a) {
  return Z$1().useState(a);
};
react_production_min.version = "16.14.0";
{
  react.exports = react_production_min;
}
var React = react.exports;
function ViewNavigation({ onClickPrev, onClickSwitch, onClickNext, switchContent, switchColSpan, switchProps }) {
  return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    className: "rdtPrev",
    onClick: onClickPrev
  }, /* @__PURE__ */ React.createElement("span", null, "\u2039")), /* @__PURE__ */ React.createElement("th", __spreadValues({
    className: "rdtSwitch",
    colSpan: switchColSpan,
    onClick: onClickSwitch
  }, switchProps), switchContent), /* @__PURE__ */ React.createElement("th", {
    className: "rdtNext",
    onClick: onClickNext
  }, /* @__PURE__ */ React.createElement("span", null, "\u203A")));
}
class DaysView extends React.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "_setDate", (e) => {
      this.props.updateDate(e);
    });
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "rdtDays"
    }, /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, this.renderNavigation(), this.renderDayHeaders()), /* @__PURE__ */ React.createElement("tbody", null, this.renderDays()), this.renderFooter()));
  }
  renderNavigation() {
    const date = this.props.viewDate;
    const locale = date.localeData();
    return /* @__PURE__ */ React.createElement(ViewNavigation, {
      onClickPrev: () => this.props.navigate(-1, "months"),
      onClickSwitch: () => this.props.showView("months"),
      onClickNext: () => this.props.navigate(1, "months"),
      switchContent: locale.months(date) + " " + date.year(),
      switchColSpan: 5,
      switchProps: { "data-value": this.props.viewDate.month() }
    });
  }
  renderDayHeaders() {
    const locale = this.props.viewDate.localeData();
    let dayItems = getDaysOfWeek(locale).map((day, index) => /* @__PURE__ */ React.createElement("th", {
      key: day + index,
      className: "dow"
    }, day));
    return /* @__PURE__ */ React.createElement("tr", null, dayItems);
  }
  renderDays() {
    const date = this.props.viewDate;
    const startOfMonth = date.clone().startOf("month");
    const endOfMonth = date.clone().endOf("month");
    let rows = [[], [], [], [], [], []];
    let startDate = date.clone().subtract(1, "months");
    startDate.date(startDate.daysInMonth()).startOf("week");
    let endDate = startDate.clone().add(42, "d");
    let i = 0;
    while (startDate.isBefore(endDate)) {
      let row = getRow$2(rows, i++);
      row.push(this.renderDay(startDate, startOfMonth, endOfMonth));
      startDate.add(1, "d");
    }
    return rows.map((r2, i2) => /* @__PURE__ */ React.createElement("tr", {
      key: `${endDate.month()}_${i2}`
    }, r2));
  }
  renderDay(date, startOfMonth, endOfMonth) {
    let selectedDate = this.props.selectedDate;
    let dayProps = {
      key: date.format("M_D"),
      "data-value": date.date(),
      "data-month": date.month(),
      "data-year": date.year()
    };
    let className = "rdtDay";
    if (date.isBefore(startOfMonth)) {
      className += " rdtOld";
    } else if (date.isAfter(endOfMonth)) {
      className += " rdtNew";
    }
    if (selectedDate && date.isSame(selectedDate, "day")) {
      className += " rdtActive";
    }
    if (date.isSame(this.props.moment(), "day")) {
      className += " rdtToday";
    }
    if (this.props.isValidDate(date)) {
      dayProps.onClick = this._setDate;
    } else {
      className += " rdtDisabled";
    }
    dayProps.className = className;
    return this.props.renderDay(dayProps, date.clone(), selectedDate && selectedDate.clone());
  }
  renderFooter() {
    if (!this.props.timeFormat)
      return;
    const date = this.props.viewDate;
    return /* @__PURE__ */ React.createElement("tfoot", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
      onClick: () => this.props.showView("time"),
      colSpan: 7,
      className: "rdtTimeToggle"
    }, date.format(this.props.timeFormat))));
  }
}
__publicField(DaysView, "defaultProps", {
  isValidDate: () => true,
  renderDay: (props, date) => /* @__PURE__ */ React.createElement("td", __spreadValues({}, props), date.date())
});
function getRow$2(rows, day) {
  return rows[Math.floor(day / 7)];
}
function getDaysOfWeek(locale) {
  const first = locale.firstDayOfWeek();
  let dow = [];
  let i = 0;
  locale._weekdaysMin.forEach(function(day) {
    dow[(7 + i++ - first) % 7] = day;
  });
  return dow;
}
class MonthsView extends React.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "_updateSelectedMonth", (event) => {
      this.props.updateDate(event);
    });
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "rdtMonths"
    }, /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, this.renderNavigation())), /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("tbody", null, this.renderMonths())));
  }
  renderNavigation() {
    let year = this.props.viewDate.year();
    return /* @__PURE__ */ React.createElement(ViewNavigation, {
      onClickPrev: () => this.props.navigate(-1, "years"),
      onClickSwitch: () => this.props.showView("years"),
      onClickNext: () => this.props.navigate(1, "years"),
      switchContent: year,
      switchColSpan: "2"
    });
  }
  renderMonths() {
    let rows = [[], [], []];
    for (let month = 0; month < 12; month++) {
      let row = getRow$1(rows, month);
      row.push(this.renderMonth(month));
    }
    return rows.map((months, i) => /* @__PURE__ */ React.createElement("tr", {
      key: i
    }, months));
  }
  renderMonth(month) {
    const selectedDate = this.props.selectedDate;
    let className = "rdtMonth";
    let onClick;
    if (this.isDisabledMonth(month)) {
      className += " rdtDisabled";
    } else {
      onClick = this._updateSelectedMonth;
    }
    if (selectedDate && selectedDate.year() === this.props.viewDate.year() && selectedDate.month() === month) {
      className += " rdtActive";
    }
    let props = { key: month, className, "data-value": month, onClick };
    if (this.props.renderMonth) {
      return this.props.renderMonth(props, month, this.props.viewDate.year(), this.props.selectedDate && this.props.selectedDate.clone());
    }
    return /* @__PURE__ */ React.createElement("td", __spreadValues({}, props), this.getMonthText(month));
  }
  isDisabledMonth(month) {
    let isValidDate = this.props.isValidDate;
    if (!isValidDate) {
      return false;
    }
    let date = this.props.viewDate.clone().set({ month });
    let day = date.endOf("month").date() + 1;
    while (day-- > 1) {
      if (isValidDate(date.date(day))) {
        return false;
      }
    }
    return true;
  }
  getMonthText(month) {
    const localMoment = this.props.viewDate;
    const monthStr = localMoment.localeData().monthsShort(localMoment.month(month));
    return capitalize(monthStr.substring(0, 3));
  }
}
function getRow$1(rows, year) {
  if (year < 4) {
    return rows[0];
  }
  if (year < 8) {
    return rows[1];
  }
  return rows[2];
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
class YearsView extends React.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "disabledYearsCache", {});
    __publicField(this, "_updateSelectedYear", (event) => {
      this.props.updateDate(event);
    });
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "rdtYears"
    }, /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, this.renderNavigation())), /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("tbody", null, this.renderYears())));
  }
  renderNavigation() {
    const viewYear = this.getViewYear();
    return /* @__PURE__ */ React.createElement(ViewNavigation, {
      onClickPrev: () => this.props.navigate(-10, "years"),
      onClickSwitch: () => this.props.showView("years"),
      onClickNext: () => this.props.navigate(10, "years"),
      switchContent: `${viewYear}-${viewYear + 9}`
    });
  }
  renderYears() {
    const viewYear = this.getViewYear();
    let rows = [[], [], []];
    for (let year = viewYear - 1; year < viewYear + 11; year++) {
      let row = getRow(rows, year - viewYear);
      row.push(this.renderYear(year));
    }
    return rows.map((years, i) => /* @__PURE__ */ React.createElement("tr", {
      key: i
    }, years));
  }
  renderYear(year) {
    const selectedYear = this.getSelectedYear();
    let className = "rdtYear";
    let onClick;
    if (this.isDisabledYear(year)) {
      className += " rdtDisabled";
    } else {
      onClick = this._updateSelectedYear;
    }
    if (selectedYear === year) {
      className += " rdtActive";
    }
    let props = { key: year, className, "data-value": year, onClick };
    return this.props.renderYear(props, year, this.props.selectedDate && this.props.selectedDate.clone());
  }
  getViewYear() {
    return parseInt(this.props.viewDate.year() / 10, 10) * 10;
  }
  getSelectedYear() {
    return this.props.selectedDate && this.props.selectedDate.year();
  }
  isDisabledYear(year) {
    let cache = this.disabledYearsCache;
    if (cache[year] !== void 0) {
      return cache[year];
    }
    let isValidDate = this.props.isValidDate;
    if (!isValidDate) {
      return false;
    }
    let date = this.props.viewDate.clone().set({ year });
    let day = date.endOf("year").dayOfYear() + 1;
    while (day-- > 1) {
      if (isValidDate(date.dayOfYear(day))) {
        cache[year] = false;
        return false;
      }
    }
    cache[year] = true;
    return true;
  }
}
__publicField(YearsView, "defaultProps", {
  renderYear: (props, year) => /* @__PURE__ */ React.createElement("td", __spreadValues({}, props), year)
});
function getRow(rows, year) {
  if (year < 3) {
    return rows[0];
  }
  if (year < 7) {
    return rows[1];
  }
  return rows[2];
}
const timeConstraints = {
  hours: {
    min: 0,
    max: 23,
    step: 1
  },
  minutes: {
    min: 0,
    max: 59,
    step: 1
  },
  seconds: {
    min: 0,
    max: 59,
    step: 1
  },
  milliseconds: {
    min: 0,
    max: 999,
    step: 1
  }
};
function createConstraints(overrideTimeConstraints) {
  let constraints = {};
  Object.keys(timeConstraints).forEach((type) => {
    constraints[type] = __spreadValues(__spreadValues({}, timeConstraints[type]), overrideTimeConstraints[type] || {});
  });
  return constraints;
}
class TimeView extends React.Component {
  constructor(props) {
    super(props);
    this.constraints = createConstraints(props.timeConstraints);
    this.state = this.getTimeParts(props.selectedDate || props.viewDate);
  }
  render() {
    let items = [];
    const timeParts = this.state;
    this.getCounters().forEach((c, i) => {
      if (i && c !== "ampm") {
        items.push(/* @__PURE__ */ React.createElement("div", {
          key: `sep${i}`,
          className: "rdtCounterSeparator"
        }, ":"));
      }
      items.push(this.renderCounter(c, timeParts[c]));
    });
    return /* @__PURE__ */ React.createElement("div", {
      className: "rdtTime"
    }, /* @__PURE__ */ React.createElement("table", null, this.renderHeader(), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("div", {
      className: "rdtCounters"
    }, items))))));
  }
  renderCounter(type, value) {
    if (type === "hours" && this.isAMPM()) {
      value = (value - 1) % 12 + 1;
      if (value === 0) {
        value = 12;
      }
    }
    if (type === "ampm") {
      if (this.props.timeFormat.indexOf(" A") !== -1) {
        value = this.props.viewDate.format("A");
      } else {
        value = this.props.viewDate.format("a");
      }
    }
    return /* @__PURE__ */ React.createElement("div", {
      key: type,
      className: "rdtCounter"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "rdtBtn",
      onMouseDown: (e) => this.onStartClicking(e, "increase", type)
    }, "\u25B2"), /* @__PURE__ */ React.createElement("div", {
      className: "rdtCount"
    }, value), /* @__PURE__ */ React.createElement("span", {
      className: "rdtBtn",
      onMouseDown: (e) => this.onStartClicking(e, "decrease", type)
    }, "\u25BC"));
  }
  renderHeader() {
    if (!this.props.dateFormat)
      return;
    const date = this.props.selectedDate || this.props.viewDate;
    return /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
      className: "rdtSwitch",
      colSpan: "4",
      onClick: () => this.props.showView("days")
    }, date.format(this.props.dateFormat))));
  }
  onStartClicking(e, action, type) {
    if (e && e.button && e.button !== 0) {
      return;
    }
    if (type === "ampm")
      return this.toggleDayPart();
    let update = {};
    let body = document.body;
    update[type] = this[action](type);
    this.setState(update);
    this.timer = setTimeout(() => {
      this.increaseTimer = setInterval(() => {
        update[type] = this[action](type);
        this.setState(update);
      }, 70);
    }, 500);
    this.mouseUpListener = () => {
      clearTimeout(this.timer);
      clearInterval(this.increaseTimer);
      this.props.setTime(type, parseInt(this.state[type], 10));
      body.removeEventListener("mouseup", this.mouseUpListener);
      body.removeEventListener("touchend", this.mouseUpListener);
    };
    body.addEventListener("mouseup", this.mouseUpListener);
    body.addEventListener("touchend", this.mouseUpListener);
  }
  toggleDayPart() {
    let hours = parseInt(this.state.hours, 10);
    if (hours >= 12) {
      hours -= 12;
    } else {
      hours += 12;
    }
    this.props.setTime("hours", hours);
  }
  increase(type) {
    const tc2 = this.constraints[type];
    let value = parseInt(this.state[type], 10) + tc2.step;
    if (value > tc2.max)
      value = tc2.min + (value - (tc2.max + 1));
    return pad(type, value);
  }
  decrease(type) {
    const tc2 = this.constraints[type];
    let value = parseInt(this.state[type], 10) - tc2.step;
    if (value < tc2.min)
      value = tc2.max + 1 - (tc2.min - value);
    return pad(type, value);
  }
  getCounters() {
    let counters = [];
    let format = this.props.timeFormat;
    if (format.toLowerCase().indexOf("h") !== -1) {
      counters.push("hours");
      if (format.indexOf("m") !== -1) {
        counters.push("minutes");
        if (format.indexOf("s") !== -1) {
          counters.push("seconds");
          if (format.indexOf("S") !== -1) {
            counters.push("milliseconds");
          }
        }
      }
    }
    if (this.isAMPM()) {
      counters.push("ampm");
    }
    return counters;
  }
  isAMPM() {
    return this.props.timeFormat.toLowerCase().indexOf(" a") !== -1;
  }
  getTimeParts(date) {
    const hours = date.hours();
    return {
      hours: pad("hours", hours),
      minutes: pad("minutes", date.minutes()),
      seconds: pad("seconds", date.seconds()),
      milliseconds: pad("milliseconds", date.milliseconds()),
      ampm: hours < 12 ? "am" : "pm"
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.selectedDate) {
      if (this.props.selectedDate !== prevProps.selectedDate) {
        this.setState(this.getTimeParts(this.props.selectedDate));
      }
    } else if (prevProps.viewDate !== this.props.viewDate) {
      this.setState(this.getTimeParts(this.props.viewDate));
    }
  }
}
function pad(type, value) {
  const padValues = {
    hours: 1,
    minutes: 2,
    seconds: 2,
    milliseconds: 3
  };
  let str = value + "";
  while (str.length < padValues[type])
    str = "0" + str;
  return str;
}
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  var f, g, h, k, l2;
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var p2 = null, q2 = null, t2 = function() {
      if (p2 !== null)
        try {
          var a = exports.unstable_now();
          p2(true, a);
          p2 = null;
        } catch (b) {
          throw setTimeout(t2, 0), b;
        }
    }, u2 = Date.now();
    exports.unstable_now = function() {
      return Date.now() - u2;
    };
    f = function(a) {
      p2 !== null ? setTimeout(f, 0, a) : (p2 = a, setTimeout(t2, 0));
    };
    g = function(a, b) {
      q2 = setTimeout(a, b);
    };
    h = function() {
      clearTimeout(q2);
    };
    k = function() {
      return false;
    };
    l2 = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var w2 = window.performance, x2 = window.Date, y2 = window.setTimeout, z2 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var A2 = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
      typeof A2 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
    }
    if (typeof w2 === "object" && typeof w2.now === "function")
      exports.unstable_now = function() {
        return w2.now();
      };
    else {
      var B2 = x2.now();
      exports.unstable_now = function() {
        return x2.now() - B2;
      };
    }
    var C2 = false, D2 = null, E2 = -1, F2 = 5, G2 = 0;
    k = function() {
      return exports.unstable_now() >= G2;
    };
    l2 = function() {
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : F2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    var H2 = new MessageChannel(), I2 = H2.port2;
    H2.port1.onmessage = function() {
      if (D2 !== null) {
        var a = exports.unstable_now();
        G2 = a + F2;
        try {
          D2(true, a) ? I2.postMessage(null) : (C2 = false, D2 = null);
        } catch (b) {
          throw I2.postMessage(null), b;
        }
      } else
        C2 = false;
    };
    f = function(a) {
      D2 = a;
      C2 || (C2 = true, I2.postMessage(null));
    };
    g = function(a, b) {
      E2 = y2(function() {
        a(exports.unstable_now());
      }, b);
    };
    h = function() {
      z2(E2);
      E2 = -1;
    };
  }
  function J2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; ; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (e !== void 0 && 0 < K2(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function L2(a) {
    a = a[0];
    return a === void 0 ? null : a;
  }
  function M2(a) {
    var b = a[0];
    if (b !== void 0) {
      var c = a.pop();
      if (c !== b) {
        a[0] = c;
        a:
          for (var d = 0, e = a.length; d < e; ) {
            var m = 2 * (d + 1) - 1, n2 = a[m], v2 = m + 1, r2 = a[v2];
            if (n2 !== void 0 && 0 > K2(n2, c))
              r2 !== void 0 && 0 > K2(r2, n2) ? (a[d] = r2, a[v2] = c, d = v2) : (a[d] = n2, a[m] = c, d = m);
            else if (r2 !== void 0 && 0 > K2(r2, c))
              a[d] = r2, a[v2] = c, d = v2;
            else
              break a;
          }
      }
      return b;
    }
    return null;
  }
  function K2(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return c !== 0 ? c : a.id - b.id;
  }
  var N2 = [], O2 = [], P2 = 1, Q2 = null, R2 = 3, S2 = false, T2 = false, U2 = false;
  function V2(a) {
    for (var b = L2(O2); b !== null; ) {
      if (b.callback === null)
        M2(O2);
      else if (b.startTime <= a)
        M2(O2), b.sortIndex = b.expirationTime, J2(N2, b);
      else
        break;
      b = L2(O2);
    }
  }
  function W2(a) {
    U2 = false;
    V2(a);
    if (!T2)
      if (L2(N2) !== null)
        T2 = true, f(X2);
      else {
        var b = L2(O2);
        b !== null && g(W2, b.startTime - a);
      }
  }
  function X2(a, b) {
    T2 = false;
    U2 && (U2 = false, h());
    S2 = true;
    var c = R2;
    try {
      V2(b);
      for (Q2 = L2(N2); Q2 !== null && (!(Q2.expirationTime > b) || a && !k()); ) {
        var d = Q2.callback;
        if (d !== null) {
          Q2.callback = null;
          R2 = Q2.priorityLevel;
          var e = d(Q2.expirationTime <= b);
          b = exports.unstable_now();
          typeof e === "function" ? Q2.callback = e : Q2 === L2(N2) && M2(N2);
          V2(b);
        } else
          M2(N2);
        Q2 = L2(N2);
      }
      if (Q2 !== null)
        var m = true;
      else {
        var n2 = L2(O2);
        n2 !== null && g(W2, n2.startTime - b);
        m = false;
      }
      return m;
    } finally {
      Q2 = null, R2 = c, S2 = false;
    }
  }
  function Y2(a) {
    switch (a) {
      case 1:
        return -1;
      case 2:
        return 250;
      case 5:
        return 1073741823;
      case 4:
        return 1e4;
      default:
        return 5e3;
    }
  }
  var Z2 = l2;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    T2 || S2 || (T2 = true, f(X2));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return R2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return L2(N2);
  };
  exports.unstable_next = function(a) {
    switch (R2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = R2;
    }
    var c = R2;
    R2 = b;
    try {
      return a();
    } finally {
      R2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = Z2;
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = R2;
    R2 = a;
    try {
      return b();
    } finally {
      R2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    if (typeof c === "object" && c !== null) {
      var e = c.delay;
      e = typeof e === "number" && 0 < e ? d + e : d;
      c = typeof c.timeout === "number" ? c.timeout : Y2(a);
    } else
      c = Y2(a), e = d;
    c = e + c;
    a = { id: P2++, callback: b, priorityLevel: a, startTime: e, expirationTime: c, sortIndex: -1 };
    e > d ? (a.sortIndex = e, J2(O2, a), L2(N2) === null && a === L2(O2) && (U2 ? h() : U2 = true, g(W2, e - d))) : (a.sortIndex = c, J2(N2, a), T2 || S2 || (T2 = true, f(X2)));
    return a;
  };
  exports.unstable_shouldYield = function() {
    var a = exports.unstable_now();
    V2(a);
    var b = L2(N2);
    return b !== Q2 && Q2 !== null && b !== null && b.callback !== null && b.startTime <= a && b.expirationTime < Q2.expirationTime || k();
  };
  exports.unstable_wrapCallback = function(a) {
    var b = R2;
    return function() {
      var c = R2;
      R2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        R2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, n = objectAssign, r = scheduler.exports;
function u(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!aa)
  throw Error(u(227));
function ba(a, b, c, d, e, f, g, h, k) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (m) {
    this.onError(m);
  }
}
var da = false, ea = null, fa = false, ha = null, ia = { onError: function(a) {
  da = true;
  ea = a;
} };
function ja(a, b, c, d, e, f, g, h, k) {
  da = false;
  ea = null;
  ba.apply(ia, arguments);
}
function ka(a, b, c, d, e, f, g, h, k) {
  ja.apply(this, arguments);
  if (da) {
    if (da) {
      var l2 = ea;
      da = false;
      ea = null;
    } else
      throw Error(u(198));
    fa || (fa = true, ha = l2);
  }
}
var la = null, ma = null, na = null;
function oa(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = na(c);
  ka(d, b, void 0, a);
  a.currentTarget = null;
}
var pa = null, qa = {};
function ra() {
  if (pa)
    for (var a in qa) {
      var b = qa[a], c = pa.indexOf(a);
      if (!(-1 < c))
        throw Error(u(96, a));
      if (!sa[c]) {
        if (!b.extractEvents)
          throw Error(u(97, a));
        sa[c] = b;
        c = b.eventTypes;
        for (var d in c) {
          var e = void 0;
          var f = c[d], g = b, h = d;
          if (ta.hasOwnProperty(h))
            throw Error(u(99, h));
          ta[h] = f;
          var k = f.phasedRegistrationNames;
          if (k) {
            for (e in k)
              k.hasOwnProperty(e) && ua(k[e], g, h);
            e = true;
          } else
            f.registrationName ? (ua(f.registrationName, g, h), e = true) : e = false;
          if (!e)
            throw Error(u(98, d, a));
        }
      }
    }
}
function ua(a, b, c) {
  if (va[a])
    throw Error(u(100, a));
  va[a] = b;
  wa[a] = b.eventTypes[c].dependencies;
}
var sa = [], ta = {}, va = {}, wa = {};
function xa(a) {
  var b = false, c;
  for (c in a)
    if (a.hasOwnProperty(c)) {
      var d = a[c];
      if (!qa.hasOwnProperty(c) || qa[c] !== d) {
        if (qa[c])
          throw Error(u(102, c));
        qa[c] = d;
        b = true;
      }
    }
  b && ra();
}
var ya = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), za = null, Aa = null, Ba = null;
function Ca(a) {
  if (a = ma(a)) {
    if (typeof za !== "function")
      throw Error(u(280));
    var b = a.stateNode;
    b && (b = la(b), za(a.stateNode, a.type, b));
  }
}
function Da(a) {
  Aa ? Ba ? Ba.push(a) : Ba = [a] : Aa = a;
}
function Ea() {
  if (Aa) {
    var a = Aa, b = Ba;
    Ba = Aa = null;
    Ca(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Ca(b[a]);
  }
}
function Fa(a, b) {
  return a(b);
}
function Ga(a, b, c, d, e) {
  return a(b, c, d, e);
}
function Ha() {
}
var Ia = Fa, Ja = false, Ka = false;
function La() {
  if (Aa !== null || Ba !== null)
    Ha(), Ea();
}
function Ma(a, b, c) {
  if (Ka)
    return a(b, c);
  Ka = true;
  try {
    return Ia(a, b, c);
  } finally {
    Ka = false, La();
  }
}
var Na = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Oa = Object.prototype.hasOwnProperty, Pa = {}, Qa = {};
function Ra(a) {
  if (Oa.call(Qa, a))
    return true;
  if (Oa.call(Pa, a))
    return false;
  if (Na.test(a))
    return Qa[a] = true;
  Pa[a] = true;
  return false;
}
function Sa(a, b, c, d) {
  if (c !== null && c.type === 0)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (c !== null)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return a !== "data-" && a !== "aria-";
    default:
      return false;
  }
}
function Ta(a, b, c, d) {
  if (b === null || typeof b === "undefined" || Sa(a, b, c, d))
    return true;
  if (d)
    return false;
  if (c !== null)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return b === false;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function v(a, b, c, d, e, f) {
  this.acceptsBooleans = b === 2 || b === 3 || b === 4;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f;
}
var C = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  C[a] = new v(a, 0, false, a, null, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  C[b] = new v(b, 1, false, a[1], null, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  C[a] = new v(a, 2, false, a.toLowerCase(), null, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  C[a] = new v(a, 2, false, a, null, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  C[a] = new v(a, 3, false, a.toLowerCase(), null, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  C[a] = new v(a, 3, true, a, null, false);
});
["capture", "download"].forEach(function(a) {
  C[a] = new v(a, 4, false, a, null, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  C[a] = new v(a, 6, false, a, null, false);
});
["rowSpan", "start"].forEach(function(a) {
  C[a] = new v(a, 5, false, a.toLowerCase(), null, false);
});
var Ua = /[\-:]([a-z])/g;
function Va(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(Ua, Va);
  C[b] = new v(b, 1, false, a, null, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(Ua, Va);
  C[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(Ua, Va);
  C[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  C[a] = new v(a, 1, false, a.toLowerCase(), null, false);
});
C.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true);
["src", "href", "action", "formAction"].forEach(function(a) {
  C[a] = new v(a, 1, false, a.toLowerCase(), null, true);
});
var Wa = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
Wa.hasOwnProperty("ReactCurrentDispatcher") || (Wa.ReactCurrentDispatcher = { current: null });
Wa.hasOwnProperty("ReactCurrentBatchConfig") || (Wa.ReactCurrentBatchConfig = { suspense: null });
function Xa(a, b, c, d) {
  var e = C.hasOwnProperty(b) ? C[b] : null;
  var f = e !== null ? e.type === 0 : d ? false : !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N" ? false : true;
  f || (Ta(b, c, e, d) && (c = null), d || e === null ? Ra(b) && (c === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}
var Ya = /^(.*)[\\\/]/, E = typeof Symbol === "function" && Symbol.for, Za = E ? Symbol.for("react.element") : 60103, $a = E ? Symbol.for("react.portal") : 60106, ab = E ? Symbol.for("react.fragment") : 60107, bb = E ? Symbol.for("react.strict_mode") : 60108, cb = E ? Symbol.for("react.profiler") : 60114, db = E ? Symbol.for("react.provider") : 60109, eb = E ? Symbol.for("react.context") : 60110, fb = E ? Symbol.for("react.concurrent_mode") : 60111, gb = E ? Symbol.for("react.forward_ref") : 60112, hb = E ? Symbol.for("react.suspense") : 60113, ib = E ? Symbol.for("react.suspense_list") : 60120, jb = E ? Symbol.for("react.memo") : 60115, kb = E ? Symbol.for("react.lazy") : 60116, lb = E ? Symbol.for("react.block") : 60121, mb = typeof Symbol === "function" && Symbol.iterator;
function nb(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = mb && a[mb] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
function ob(a) {
  if (a._status === -1) {
    a._status = 0;
    var b = a._ctor;
    b = b();
    a._result = b;
    b.then(function(b2) {
      a._status === 0 && (b2 = b2.default, a._status = 1, a._result = b2);
    }, function(b2) {
      a._status === 0 && (a._status = 2, a._result = b2);
    });
  }
}
function pb(a) {
  if (a == null)
    return null;
  if (typeof a === "function")
    return a.displayName || a.name || null;
  if (typeof a === "string")
    return a;
  switch (a) {
    case ab:
      return "Fragment";
    case $a:
      return "Portal";
    case cb:
      return "Profiler";
    case bb:
      return "StrictMode";
    case hb:
      return "Suspense";
    case ib:
      return "SuspenseList";
  }
  if (typeof a === "object")
    switch (a.$$typeof) {
      case eb:
        return "Context.Consumer";
      case db:
        return "Context.Provider";
      case gb:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || (b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef");
      case jb:
        return pb(a.type);
      case lb:
        return pb(a.render);
      case kb:
        if (a = a._status === 1 ? a._result : null)
          return pb(a);
    }
  return null;
}
function qb(a) {
  var b = "";
  do {
    a:
      switch (a.tag) {
        case 3:
        case 4:
        case 6:
        case 7:
        case 10:
        case 9:
          var c = "";
          break a;
        default:
          var d = a._debugOwner, e = a._debugSource, f = pb(a.type);
          c = null;
          d && (c = pb(d.type));
          d = f;
          f = "";
          e ? f = " (at " + e.fileName.replace(Ya, "") + ":" + e.lineNumber + ")" : c && (f = " (created by " + c + ")");
          c = "\n    in " + (d || "Unknown") + f;
      }
    b += c;
    a = a.return;
  } while (a);
  return b;
}
function rb(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;
    default:
      return "";
  }
}
function sb(a) {
  var b = a.type;
  return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
}
function tb(a) {
  var b = sb(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
    var e = c.get, f = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function xb(a) {
  a._valueTracker || (a._valueTracker = tb(a));
}
function yb(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = sb(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function zb(a, b) {
  var c = b.checked;
  return n({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a._wrapperState.initialChecked });
}
function Ab(a, b) {
  var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
  c = rb(b.value != null ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null };
}
function Bb(a, b) {
  b = b.checked;
  b != null && Xa(a, "checked", b, false);
}
function Cb(a, b) {
  Bb(a, b);
  var c = rb(b.value), d = b.type;
  if (c != null)
    if (d === "number") {
      if (c === 0 && a.value === "" || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if (d === "submit" || d === "reset") {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? Db(a, b.type, c) : b.hasOwnProperty("defaultValue") && Db(a, b.type, rb(b.defaultValue));
  b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
}
function Eb(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!(d !== "submit" && d !== "reset" || b.value !== void 0 && b.value !== null))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  c !== "" && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  c !== "" && (a.name = c);
}
function Db(a, b, c) {
  if (b !== "number" || a.ownerDocument.activeElement !== a)
    c == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
function Fb(a) {
  var b = "";
  aa.Children.forEach(a, function(a2) {
    a2 != null && (b += a2);
  });
  return b;
}
function Gb(a, b) {
  a = n({ children: void 0 }, b);
  if (b = Fb(b.children))
    a.children = b;
  return a;
}
function Hb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + rb(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      b !== null || a[e].disabled || (b = a[e]);
    }
    b !== null && (b.selected = true);
  }
}
function Ib(a, b) {
  if (b.dangerouslySetInnerHTML != null)
    throw Error(u(91));
  return n({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function Jb(a, b) {
  var c = b.value;
  if (c == null) {
    c = b.children;
    b = b.defaultValue;
    if (c != null) {
      if (b != null)
        throw Error(u(92));
      if (Array.isArray(c)) {
        if (!(1 >= c.length))
          throw Error(u(93));
        c = c[0];
      }
      b = c;
    }
    b == null && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: rb(c) };
}
function Kb(a, b) {
  var c = rb(b.value), d = rb(b.defaultValue);
  c != null && (c = "" + c, c !== a.value && (a.value = c), b.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c));
  d != null && (a.defaultValue = "" + d);
}
function Lb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
}
var Mb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function Nb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ob(a, b) {
  return a == null || a === "http://www.w3.org/1999/xhtml" ? Nb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
}
var Pb, Qb = function(a) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if (a.namespaceURI !== Mb.svg || "innerHTML" in a)
    a.innerHTML = b;
  else {
    Pb = Pb || document.createElement("div");
    Pb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = Pb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function Rb(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && c.nodeType === 3) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
function Sb(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var Tb = { animationend: Sb("Animation", "AnimationEnd"), animationiteration: Sb("Animation", "AnimationIteration"), animationstart: Sb("Animation", "AnimationStart"), transitionend: Sb("Transition", "TransitionEnd") }, Ub = {}, Vb = {};
ya && (Vb = document.createElement("div").style, "AnimationEvent" in window || (delete Tb.animationend.animation, delete Tb.animationiteration.animation, delete Tb.animationstart.animation), "TransitionEvent" in window || delete Tb.transitionend.transition);
function Wb(a) {
  if (Ub[a])
    return Ub[a];
  if (!Tb[a])
    return a;
  var b = Tb[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Vb)
      return Ub[a] = b[c];
  return a;
}
var Xb = Wb("animationend"), Yb = Wb("animationiteration"), Zb = Wb("animationstart"), $b = Wb("transitionend"), ac = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), bc = new (typeof WeakMap === "function" ? WeakMap : Map)();
function cc(a) {
  var b = bc.get(a);
  b === void 0 && (b = /* @__PURE__ */ new Map(), bc.set(a, b));
  return b;
}
function dc(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, (b.effectTag & 1026) !== 0 && (c = b.return), a = b.return;
    while (a);
  }
  return b.tag === 3 ? c : null;
}
function ec(a) {
  if (a.tag === 13) {
    var b = a.memoizedState;
    b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
    if (b !== null)
      return b.dehydrated;
  }
  return null;
}
function fc(a) {
  if (dc(a) !== a)
    throw Error(u(188));
}
function gc(a) {
  var b = a.alternate;
  if (!b) {
    b = dc(a);
    if (b === null)
      throw Error(u(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (e === null)
      break;
    var f = e.alternate;
    if (f === null) {
      d = e.return;
      if (d !== null) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f.child) {
      for (f = e.child; f; ) {
        if (f === c)
          return fc(e), a;
        if (f === d)
          return fc(e), b;
        f = f.sibling;
      }
      throw Error(u(188));
    }
    if (c.return !== d.return)
      c = e, d = f;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f.child; h; ) {
          if (h === c) {
            g = true;
            c = f;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g)
          throw Error(u(189));
      }
    }
    if (c.alternate !== d)
      throw Error(u(190));
  }
  if (c.tag !== 3)
    throw Error(u(188));
  return c.stateNode.current === c ? a : b;
}
function hc(a) {
  a = gc(a);
  if (!a)
    return null;
  for (var b = a; ; ) {
    if (b.tag === 5 || b.tag === 6)
      return b;
    if (b.child)
      b.child.return = b, b = b.child;
    else {
      if (b === a)
        break;
      for (; !b.sibling; ) {
        if (!b.return || b.return === a)
          return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return null;
}
function ic(a, b) {
  if (b == null)
    throw Error(u(30));
  if (a == null)
    return b;
  if (Array.isArray(a)) {
    if (Array.isArray(b))
      return a.push.apply(a, b), a;
    a.push(b);
    return a;
  }
  return Array.isArray(b) ? [a].concat(b) : [a, b];
}
function jc(a, b, c) {
  Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a);
}
var kc = null;
function lc(a) {
  if (a) {
    var b = a._dispatchListeners, c = a._dispatchInstances;
    if (Array.isArray(b))
      for (var d = 0; d < b.length && !a.isPropagationStopped(); d++)
        oa(a, b[d], c[d]);
    else
      b && oa(a, b, c);
    a._dispatchListeners = null;
    a._dispatchInstances = null;
    a.isPersistent() || a.constructor.release(a);
  }
}
function mc(a) {
  a !== null && (kc = ic(kc, a));
  a = kc;
  kc = null;
  if (a) {
    jc(a, lc);
    if (kc)
      throw Error(u(95));
    if (fa)
      throw a = ha, fa = false, ha = null, a;
  }
}
function nc(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return a.nodeType === 3 ? a.parentNode : a;
}
function oc(a) {
  if (!ya)
    return false;
  a = "on" + a;
  var b = a in document;
  b || (b = document.createElement("div"), b.setAttribute(a, "return;"), b = typeof b[a] === "function");
  return b;
}
var pc = [];
function qc(a) {
  a.topLevelType = null;
  a.nativeEvent = null;
  a.targetInst = null;
  a.ancestors.length = 0;
  10 > pc.length && pc.push(a);
}
function rc(a, b, c, d) {
  if (pc.length) {
    var e = pc.pop();
    e.topLevelType = a;
    e.eventSystemFlags = d;
    e.nativeEvent = b;
    e.targetInst = c;
    return e;
  }
  return { topLevelType: a, eventSystemFlags: d, nativeEvent: b, targetInst: c, ancestors: [] };
}
function sc(a) {
  var b = a.targetInst, c = b;
  do {
    if (!c) {
      a.ancestors.push(c);
      break;
    }
    var d = c;
    if (d.tag === 3)
      d = d.stateNode.containerInfo;
    else {
      for (; d.return; )
        d = d.return;
      d = d.tag !== 3 ? null : d.stateNode.containerInfo;
    }
    if (!d)
      break;
    b = c.tag;
    b !== 5 && b !== 6 || a.ancestors.push(c);
    c = tc(d);
  } while (c);
  for (c = 0; c < a.ancestors.length; c++) {
    b = a.ancestors[c];
    var e = nc(a.nativeEvent);
    d = a.topLevelType;
    var f = a.nativeEvent, g = a.eventSystemFlags;
    c === 0 && (g |= 64);
    for (var h = null, k = 0; k < sa.length; k++) {
      var l2 = sa[k];
      l2 && (l2 = l2.extractEvents(d, b, f, e, g)) && (h = ic(h, l2));
    }
    mc(h);
  }
}
function uc(a, b, c) {
  if (!c.has(a)) {
    switch (a) {
      case "scroll":
        vc(b, "scroll", true);
        break;
      case "focus":
      case "blur":
        vc(b, "focus", true);
        vc(b, "blur", true);
        c.set("blur", null);
        c.set("focus", null);
        break;
      case "cancel":
      case "close":
        oc(a) && vc(b, a, true);
        break;
      case "invalid":
      case "submit":
      case "reset":
        break;
      default:
        ac.indexOf(a) === -1 && F(a, b);
    }
    c.set(a, null);
  }
}
var wc, xc, yc, zc = false, Ac = [], Bc = null, Cc = null, Dc = null, Ec = /* @__PURE__ */ new Map(), Fc = /* @__PURE__ */ new Map(), Gc = [], Hc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "), Ic = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a, b) {
  var c = cc(b);
  Hc.forEach(function(a2) {
    uc(a2, b, c);
  });
  Ic.forEach(function(a2) {
    uc(a2, b, c);
  });
}
function Kc(a, b, c, d, e) {
  return { blockedOn: a, topLevelType: b, eventSystemFlags: c | 32, nativeEvent: e, container: d };
}
function Lc(a, b) {
  switch (a) {
    case "focus":
    case "blur":
      Bc = null;
      break;
    case "dragenter":
    case "dragleave":
      Cc = null;
      break;
    case "mouseover":
    case "mouseout":
      Dc = null;
      break;
    case "pointerover":
    case "pointerout":
      Ec.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fc.delete(b.pointerId);
  }
}
function Mc(a, b, c, d, e, f) {
  if (a === null || a.nativeEvent !== f)
    return a = Kc(b, c, d, e, f), b !== null && (b = Nc(b), b !== null && xc(b)), a;
  a.eventSystemFlags |= d;
  return a;
}
function Oc(a, b, c, d, e) {
  switch (b) {
    case "focus":
      return Bc = Mc(Bc, a, b, c, d, e), true;
    case "dragenter":
      return Cc = Mc(Cc, a, b, c, d, e), true;
    case "mouseover":
      return Dc = Mc(Dc, a, b, c, d, e), true;
    case "pointerover":
      var f = e.pointerId;
      Ec.set(f, Mc(Ec.get(f) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f = e.pointerId, Fc.set(f, Mc(Fc.get(f) || null, a, b, c, d, e)), true;
  }
  return false;
}
function Pc(a) {
  var b = tc(a.target);
  if (b !== null) {
    var c = dc(b);
    if (c !== null) {
      if (b = c.tag, b === 13) {
        if (b = ec(c), b !== null) {
          a.blockedOn = b;
          r.unstable_runWithPriority(a.priority, function() {
            yc(c);
          });
          return;
        }
      } else if (b === 3 && c.stateNode.hydrate) {
        a.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Qc(a) {
  if (a.blockedOn !== null)
    return false;
  var b = Rc(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent);
  if (b !== null) {
    var c = Nc(b);
    c !== null && xc(c);
    a.blockedOn = b;
    return false;
  }
  return true;
}
function Sc(a, b, c) {
  Qc(a) && c.delete(b);
}
function Tc() {
  for (zc = false; 0 < Ac.length; ) {
    var a = Ac[0];
    if (a.blockedOn !== null) {
      a = Nc(a.blockedOn);
      a !== null && wc(a);
      break;
    }
    var b = Rc(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent);
    b !== null ? a.blockedOn = b : Ac.shift();
  }
  Bc !== null && Qc(Bc) && (Bc = null);
  Cc !== null && Qc(Cc) && (Cc = null);
  Dc !== null && Qc(Dc) && (Dc = null);
  Ec.forEach(Sc);
  Fc.forEach(Sc);
}
function Uc(a, b) {
  a.blockedOn === b && (a.blockedOn = null, zc || (zc = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, Tc)));
}
function Vc(a) {
  function b(b2) {
    return Uc(b2, a);
  }
  if (0 < Ac.length) {
    Uc(Ac[0], a);
    for (var c = 1; c < Ac.length; c++) {
      var d = Ac[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  Bc !== null && Uc(Bc, a);
  Cc !== null && Uc(Cc, a);
  Dc !== null && Uc(Dc, a);
  Ec.forEach(b);
  Fc.forEach(b);
  for (c = 0; c < Gc.length; c++)
    d = Gc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Gc.length && (c = Gc[0], c.blockedOn === null); )
    Pc(c), c.blockedOn === null && Gc.shift();
}
var Wc = {}, Yc = /* @__PURE__ */ new Map(), Zc = /* @__PURE__ */ new Map(), $c = [
  "abort",
  "abort",
  Xb,
  "animationEnd",
  Yb,
  "animationIteration",
  Zb,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  $b,
  "transitionEnd",
  "waiting",
  "waiting"
];
function ad(a, b) {
  for (var c = 0; c < a.length; c += 2) {
    var d = a[c], e = a[c + 1], f = "on" + (e[0].toUpperCase() + e.slice(1));
    f = { phasedRegistrationNames: { bubbled: f, captured: f + "Capture" }, dependencies: [d], eventPriority: b };
    Zc.set(d, b);
    Yc.set(d, f);
    Wc[e] = f;
  }
}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
ad($c, 2);
for (var bd = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), cd = 0; cd < bd.length; cd++)
  Zc.set(bd[cd], 0);
var dd = r.unstable_UserBlockingPriority, ed = r.unstable_runWithPriority, fd = true;
function F(a, b) {
  vc(b, a, false);
}
function vc(a, b, c) {
  var d = Zc.get(b);
  switch (d === void 0 ? 2 : d) {
    case 0:
      d = gd.bind(null, b, 1, a);
      break;
    case 1:
      d = hd.bind(null, b, 1, a);
      break;
    default:
      d = id.bind(null, b, 1, a);
  }
  c ? a.addEventListener(b, d, true) : a.addEventListener(b, d, false);
}
function gd(a, b, c, d) {
  Ja || Ha();
  var e = id, f = Ja;
  Ja = true;
  try {
    Ga(e, a, b, c, d);
  } finally {
    (Ja = f) || La();
  }
}
function hd(a, b, c, d) {
  ed(dd, id.bind(null, a, b, c, d));
}
function id(a, b, c, d) {
  if (fd)
    if (0 < Ac.length && -1 < Hc.indexOf(a))
      a = Kc(null, a, b, c, d), Ac.push(a);
    else {
      var e = Rc(a, b, c, d);
      if (e === null)
        Lc(a, d);
      else if (-1 < Hc.indexOf(a))
        a = Kc(e, a, b, c, d), Ac.push(a);
      else if (!Oc(e, a, b, c, d)) {
        Lc(a, d);
        a = rc(a, d, null, b);
        try {
          Ma(sc, a);
        } finally {
          qc(a);
        }
      }
    }
}
function Rc(a, b, c, d) {
  c = nc(d);
  c = tc(c);
  if (c !== null) {
    var e = dc(c);
    if (e === null)
      c = null;
    else {
      var f = e.tag;
      if (f === 13) {
        c = ec(e);
        if (c !== null)
          return c;
        c = null;
      } else if (f === 3) {
        if (e.stateNode.hydrate)
          return e.tag === 3 ? e.stateNode.containerInfo : null;
        c = null;
      } else
        e !== c && (c = null);
    }
  }
  a = rc(a, d, c, b);
  try {
    Ma(sc, a);
  } finally {
    qc(a);
  }
  return null;
}
var jd = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, kd = ["Webkit", "ms", "Moz", "O"];
Object.keys(jd).forEach(function(a) {
  kd.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    jd[b] = jd[a];
  });
});
function ld(a, b, c) {
  return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || jd.hasOwnProperty(a) && jd[a] ? ("" + b).trim() : b + "px";
}
function md(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = c.indexOf("--") === 0, e = ld(c, b[c], d);
      c === "float" && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var nd = n({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function od(a, b) {
  if (b) {
    if (nd[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
      throw Error(u(137, a, ""));
    if (b.dangerouslySetInnerHTML != null) {
      if (b.children != null)
        throw Error(u(60));
      if (!(typeof b.dangerouslySetInnerHTML === "object" && "__html" in b.dangerouslySetInnerHTML))
        throw Error(u(61));
    }
    if (b.style != null && typeof b.style !== "object")
      throw Error(u(62, ""));
  }
}
function pd(a, b) {
  if (a.indexOf("-") === -1)
    return typeof b.is === "string";
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var qd = Mb.html;
function rd(a, b) {
  a = a.nodeType === 9 || a.nodeType === 11 ? a : a.ownerDocument;
  var c = cc(a);
  b = wa[b];
  for (var d = 0; d < b.length; d++)
    uc(b[d], a, c);
}
function sd() {
}
function td(a) {
  a = a || (typeof document !== "undefined" ? document : void 0);
  if (typeof a === "undefined")
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function ud(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function vd(a, b) {
  var c = ud(a);
  a = 0;
  for (var d; c; ) {
    if (c.nodeType === 3) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = ud(c);
  }
}
function wd(a, b) {
  return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? wd(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function xd() {
  for (var a = window, b = td(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = typeof b.contentWindow.location.href === "string";
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = td(a.document);
  }
  return b;
}
function yd(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
}
var zd = "$", Ad = "/$", Bd = "$?", Cd = "$!", Dd = null, Ed = null;
function Fd(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }
  return false;
}
function Gd(a, b) {
  return a === "textarea" || a === "option" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
}
var Hd = typeof setTimeout === "function" ? setTimeout : void 0, Id = typeof clearTimeout === "function" ? clearTimeout : void 0;
function Jd(a) {
  for (; a != null; a = a.nextSibling) {
    var b = a.nodeType;
    if (b === 1 || b === 3)
      break;
  }
  return a;
}
function Kd(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (a.nodeType === 8) {
      var c = a.data;
      if (c === zd || c === Cd || c === Bd) {
        if (b === 0)
          return a;
        b--;
      } else
        c === Ad && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Ld = Math.random().toString(36).slice(2), Md = "__reactInternalInstance$" + Ld, Nd = "__reactEventHandlers$" + Ld, Od = "__reactContainere$" + Ld;
function tc(a) {
  var b = a[Md];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[Od] || c[Md]) {
      c = b.alternate;
      if (b.child !== null || c !== null && c.child !== null)
        for (a = Kd(a); a !== null; ) {
          if (c = a[Md])
            return c;
          a = Kd(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Nc(a) {
  a = a[Md] || a[Od];
  return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
}
function Pd(a) {
  if (a.tag === 5 || a.tag === 6)
    return a.stateNode;
  throw Error(u(33));
}
function Qd(a) {
  return a[Nd] || null;
}
function Rd(a) {
  do
    a = a.return;
  while (a && a.tag !== 5);
  return a ? a : null;
}
function Sd(a, b) {
  var c = a.stateNode;
  if (!c)
    return null;
  var d = la(c);
  if (!d)
    return null;
  c = d[b];
  a:
    switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && typeof c !== "function")
    throw Error(u(231, b, typeof c));
  return c;
}
function Td(a, b, c) {
  if (b = Sd(a, c.dispatchConfig.phasedRegistrationNames[b]))
    c._dispatchListeners = ic(c._dispatchListeners, b), c._dispatchInstances = ic(c._dispatchInstances, a);
}
function Ud(a) {
  if (a && a.dispatchConfig.phasedRegistrationNames) {
    for (var b = a._targetInst, c = []; b; )
      c.push(b), b = Rd(b);
    for (b = c.length; 0 < b--; )
      Td(c[b], "captured", a);
    for (b = 0; b < c.length; b++)
      Td(c[b], "bubbled", a);
  }
}
function Vd(a, b, c) {
  a && c && c.dispatchConfig.registrationName && (b = Sd(a, c.dispatchConfig.registrationName)) && (c._dispatchListeners = ic(c._dispatchListeners, b), c._dispatchInstances = ic(c._dispatchInstances, a));
}
function Wd(a) {
  a && a.dispatchConfig.registrationName && Vd(a._targetInst, null, a);
}
function Xd(a) {
  jc(a, Ud);
}
var Yd = null, Zd = null, $d = null;
function ae() {
  if ($d)
    return $d;
  var a, b = Zd, c = b.length, d, e = "value" in Yd ? Yd.value : Yd.textContent, f = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f - d]; d++)
    ;
  return $d = e.slice(a, 1 < d ? 1 - d : void 0);
}
function be() {
  return true;
}
function ce() {
  return false;
}
function G(a, b, c, d) {
  this.dispatchConfig = a;
  this._targetInst = b;
  this.nativeEvent = c;
  a = this.constructor.Interface;
  for (var e in a)
    a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c) : e === "target" ? this.target = d : this[e] = c[e]);
  this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === false) ? be : ce;
  this.isPropagationStopped = ce;
  return this;
}
n(G.prototype, { preventDefault: function() {
  this.defaultPrevented = true;
  var a = this.nativeEvent;
  a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue !== "unknown" && (a.returnValue = false), this.isDefaultPrevented = be);
}, stopPropagation: function() {
  var a = this.nativeEvent;
  a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble !== "unknown" && (a.cancelBubble = true), this.isPropagationStopped = be);
}, persist: function() {
  this.isPersistent = be;
}, isPersistent: ce, destructor: function() {
  var a = this.constructor.Interface, b;
  for (b in a)
    this[b] = null;
  this.nativeEvent = this._targetInst = this.dispatchConfig = null;
  this.isPropagationStopped = this.isDefaultPrevented = ce;
  this._dispatchInstances = this._dispatchListeners = null;
} });
G.Interface = { type: null, target: null, currentTarget: function() {
  return null;
}, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: null, isTrusted: null };
G.extend = function(a) {
  function b() {
  }
  function c() {
    return d.apply(this, arguments);
  }
  var d = this;
  b.prototype = d.prototype;
  var e = new b();
  n(e, c.prototype);
  c.prototype = e;
  c.prototype.constructor = c;
  c.Interface = n({}, d.Interface, a);
  c.extend = d.extend;
  de(c);
  return c;
};
de(G);
function ee(a, b, c, d) {
  if (this.eventPool.length) {
    var e = this.eventPool.pop();
    this.call(e, a, b, c, d);
    return e;
  }
  return new this(a, b, c, d);
}
function fe(a) {
  if (!(a instanceof this))
    throw Error(u(279));
  a.destructor();
  10 > this.eventPool.length && this.eventPool.push(a);
}
function de(a) {
  a.eventPool = [];
  a.getPooled = ee;
  a.release = fe;
}
var ge = G.extend({ data: null }), he = G.extend({ data: null }), ie = [9, 13, 27, 32], je = ya && "CompositionEvent" in window, ke = null;
ya && "documentMode" in document && (ke = document.documentMode);
var le = ya && "TextEvent" in window && !ke, me = ya && (!je || ke && 8 < ke && 11 >= ke), ne = String.fromCharCode(32), oe = { beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["compositionend", "keypress", "textInput", "paste"] }, compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ") }, compositionStart: { phasedRegistrationNames: {
  bubbled: "onCompositionStart",
  captured: "onCompositionStartCapture"
}, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ") }, compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ") } }, pe = false;
function qe(a, b) {
  switch (a) {
    case "keyup":
      return ie.indexOf(b.keyCode) !== -1;
    case "keydown":
      return b.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "blur":
      return true;
    default:
      return false;
  }
}
function re(a) {
  a = a.detail;
  return typeof a === "object" && "data" in a ? a.data : null;
}
var se = false;
function te(a, b) {
  switch (a) {
    case "compositionend":
      return re(b);
    case "keypress":
      if (b.which !== 32)
        return null;
      pe = true;
      return ne;
    case "textInput":
      return a = b.data, a === ne && pe ? null : a;
    default:
      return null;
  }
}
function ue(a, b) {
  if (se)
    return a === "compositionend" || !je && qe(a, b) ? (a = ae(), $d = Zd = Yd = null, se = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return me && b.locale !== "ko" ? null : b.data;
    default:
      return null;
  }
}
var ve = { eventTypes: oe, extractEvents: function(a, b, c, d) {
  var e;
  if (je)
    b: {
      switch (a) {
        case "compositionstart":
          var f = oe.compositionStart;
          break b;
        case "compositionend":
          f = oe.compositionEnd;
          break b;
        case "compositionupdate":
          f = oe.compositionUpdate;
          break b;
      }
      f = void 0;
    }
  else
    se ? qe(a, c) && (f = oe.compositionEnd) : a === "keydown" && c.keyCode === 229 && (f = oe.compositionStart);
  f ? (me && c.locale !== "ko" && (se || f !== oe.compositionStart ? f === oe.compositionEnd && se && (e = ae()) : (Yd = d, Zd = "value" in Yd ? Yd.value : Yd.textContent, se = true)), f = ge.getPooled(f, b, c, d), e ? f.data = e : (e = re(c), e !== null && (f.data = e)), Xd(f), e = f) : e = null;
  (a = le ? te(a, c) : ue(a, c)) ? (b = he.getPooled(oe.beforeInput, b, c, d), b.data = a, Xd(b)) : b = null;
  return e === null ? b : b === null ? e : [e, b];
} }, we = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function xe(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b === "input" ? !!we[a.type] : b === "textarea" ? true : false;
}
var ye = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "blur change click focus input keydown keyup selectionchange".split(" ") } };
function ze(a, b, c) {
  a = G.getPooled(ye.change, a, b, c);
  a.type = "change";
  Da(c);
  Xd(a);
  return a;
}
var Ae = null, Be = null;
function Ce(a) {
  mc(a);
}
function De(a) {
  var b = Pd(a);
  if (yb(b))
    return a;
}
function Ee(a, b) {
  if (a === "change")
    return b;
}
var Fe = false;
ya && (Fe = oc("input") && (!document.documentMode || 9 < document.documentMode));
function Ge() {
  Ae && (Ae.detachEvent("onpropertychange", He), Be = Ae = null);
}
function He(a) {
  if (a.propertyName === "value" && De(Be))
    if (a = ze(Be, a, nc(a)), Ja)
      mc(a);
    else {
      Ja = true;
      try {
        Fa(Ce, a);
      } finally {
        Ja = false, La();
      }
    }
}
function Ie(a, b, c) {
  a === "focus" ? (Ge(), Ae = b, Be = c, Ae.attachEvent("onpropertychange", He)) : a === "blur" && Ge();
}
function Je(a) {
  if (a === "selectionchange" || a === "keyup" || a === "keydown")
    return De(Be);
}
function Ke(a, b) {
  if (a === "click")
    return De(b);
}
function Le(a, b) {
  if (a === "input" || a === "change")
    return De(b);
}
var Me = { eventTypes: ye, _isInputEventSupported: Fe, extractEvents: function(a, b, c, d) {
  var e = b ? Pd(b) : window, f = e.nodeName && e.nodeName.toLowerCase();
  if (f === "select" || f === "input" && e.type === "file")
    var g = Ee;
  else if (xe(e))
    if (Fe)
      g = Le;
    else {
      g = Je;
      var h = Ie;
    }
  else
    (f = e.nodeName) && f.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio") && (g = Ke);
  if (g && (g = g(a, b)))
    return ze(g, c, d);
  h && h(a, e, b);
  a === "blur" && (a = e._wrapperState) && a.controlled && e.type === "number" && Db(e, "number", e.value);
} }, Ne = G.extend({ view: null, detail: null }), Oe = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pe(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Oe[a]) ? !!b[a] : false;
}
function Qe() {
  return Pe;
}
var Re = 0, Se = 0, Te = false, Ue = false, Ve = Ne.extend({ screenX: null, screenY: null, clientX: null, clientY: null, pageX: null, pageY: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, getModifierState: Qe, button: null, buttons: null, relatedTarget: function(a) {
  return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement);
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  var b = Re;
  Re = a.screenX;
  return Te ? a.type === "mousemove" ? a.screenX - b : 0 : (Te = true, 0);
}, movementY: function(a) {
  if ("movementY" in a)
    return a.movementY;
  var b = Se;
  Se = a.screenY;
  return Ue ? a.type === "mousemove" ? a.screenY - b : 0 : (Ue = true, 0);
} }), We = Ve.extend({ pointerId: null, width: null, height: null, pressure: null, tangentialPressure: null, tiltX: null, tiltY: null, twist: null, pointerType: null, isPrimary: null }), Xe = { mouseEnter: { registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"] }, mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] }, pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] }, pointerLeave: {
  registrationName: "onPointerLeave",
  dependencies: ["pointerout", "pointerover"]
} }, Ye = { eventTypes: Xe, extractEvents: function(a, b, c, d, e) {
  var f = a === "mouseover" || a === "pointerover", g = a === "mouseout" || a === "pointerout";
  if (f && (e & 32) === 0 && (c.relatedTarget || c.fromElement) || !g && !f)
    return null;
  f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window;
  if (g) {
    if (g = b, b = (b = c.relatedTarget || c.toElement) ? tc(b) : null, b !== null) {
      var h = dc(b);
      if (b !== h || b.tag !== 5 && b.tag !== 6)
        b = null;
    }
  } else
    g = null;
  if (g === b)
    return null;
  if (a === "mouseout" || a === "mouseover") {
    var k = Ve;
    var l2 = Xe.mouseLeave;
    var m = Xe.mouseEnter;
    var p2 = "mouse";
  } else if (a === "pointerout" || a === "pointerover")
    k = We, l2 = Xe.pointerLeave, m = Xe.pointerEnter, p2 = "pointer";
  a = g == null ? f : Pd(g);
  f = b == null ? f : Pd(b);
  l2 = k.getPooled(l2, g, c, d);
  l2.type = p2 + "leave";
  l2.target = a;
  l2.relatedTarget = f;
  c = k.getPooled(m, b, c, d);
  c.type = p2 + "enter";
  c.target = f;
  c.relatedTarget = a;
  d = g;
  p2 = b;
  if (d && p2)
    a: {
      k = d;
      m = p2;
      g = 0;
      for (a = k; a; a = Rd(a))
        g++;
      a = 0;
      for (b = m; b; b = Rd(b))
        a++;
      for (; 0 < g - a; )
        k = Rd(k), g--;
      for (; 0 < a - g; )
        m = Rd(m), a--;
      for (; g--; ) {
        if (k === m || k === m.alternate)
          break a;
        k = Rd(k);
        m = Rd(m);
      }
      k = null;
    }
  else
    k = null;
  m = k;
  for (k = []; d && d !== m; ) {
    g = d.alternate;
    if (g !== null && g === m)
      break;
    k.push(d);
    d = Rd(d);
  }
  for (d = []; p2 && p2 !== m; ) {
    g = p2.alternate;
    if (g !== null && g === m)
      break;
    d.push(p2);
    p2 = Rd(p2);
  }
  for (p2 = 0; p2 < k.length; p2++)
    Vd(k[p2], "bubbled", l2);
  for (p2 = d.length; 0 < p2--; )
    Vd(d[p2], "captured", c);
  return (e & 64) === 0 ? [l2] : [l2, c];
} };
function Ze(a, b) {
  return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
}
var $e = typeof Object.is === "function" ? Object.is : Ze, af = Object.prototype.hasOwnProperty;
function bf(a, b) {
  if ($e(a, b))
    return true;
  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++)
    if (!af.call(b, c[d]) || !$e(a[c[d]], b[c[d]]))
      return false;
  return true;
}
var cf = ya && "documentMode" in document && 11 >= document.documentMode, df = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ") } }, ef = null, ff = null, gf = null, hf = false;
function jf(a, b) {
  var c = b.window === b ? b.document : b.nodeType === 9 ? b : b.ownerDocument;
  if (hf || ef == null || ef !== td(c))
    return null;
  c = ef;
  "selectionStart" in c && yd(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset });
  return gf && bf(gf, c) ? null : (gf = c, a = G.getPooled(df.select, ff, a, b), a.type = "select", a.target = ef, Xd(a), a);
}
var kf = { eventTypes: df, extractEvents: function(a, b, c, d, e, f) {
  e = f || (d.window === d ? d.document : d.nodeType === 9 ? d : d.ownerDocument);
  if (!(f = !e)) {
    a: {
      e = cc(e);
      f = wa.onSelect;
      for (var g = 0; g < f.length; g++)
        if (!e.has(f[g])) {
          e = false;
          break a;
        }
      e = true;
    }
    f = !e;
  }
  if (f)
    return null;
  e = b ? Pd(b) : window;
  switch (a) {
    case "focus":
      if (xe(e) || e.contentEditable === "true")
        ef = e, ff = b, gf = null;
      break;
    case "blur":
      gf = ff = ef = null;
      break;
    case "mousedown":
      hf = true;
      break;
    case "contextmenu":
    case "mouseup":
    case "dragend":
      return hf = false, jf(c, d);
    case "selectionchange":
      if (cf)
        break;
    case "keydown":
    case "keyup":
      return jf(c, d);
  }
  return null;
} }, lf = G.extend({ animationName: null, elapsedTime: null, pseudoElement: null }), mf = G.extend({ clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), nf = Ne.extend({ relatedTarget: null });
function of(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
  a === 10 && (a = 13);
  return 32 <= a || a === 13 ? a : 0;
}
var pf = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, qf = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, rf = Ne.extend({ key: function(a) {
  if (a.key) {
    var b = pf[a.key] || a.key;
    if (b !== "Unidentified")
      return b;
  }
  return a.type === "keypress" ? (a = of(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? qf[a.keyCode] || "Unidentified" : "";
}, location: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, repeat: null, locale: null, getModifierState: Qe, charCode: function(a) {
  return a.type === "keypress" ? of(a) : 0;
}, keyCode: function(a) {
  return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}, which: function(a) {
  return a.type === "keypress" ? of(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
} }), sf = Ve.extend({ dataTransfer: null }), tf = Ne.extend({ touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: Qe }), uf = G.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }), vf = Ve.extend({ deltaX: function(a) {
  return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
}, deltaY: function(a) {
  return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
}, deltaZ: null, deltaMode: null }), wf = { eventTypes: Wc, extractEvents: function(a, b, c, d) {
  var e = Yc.get(a);
  if (!e)
    return null;
  switch (a) {
    case "keypress":
      if (of(c) === 0)
        return null;
    case "keydown":
    case "keyup":
      a = rf;
      break;
    case "blur":
    case "focus":
      a = nf;
      break;
    case "click":
      if (c.button === 2)
        return null;
    case "auxclick":
    case "dblclick":
    case "mousedown":
    case "mousemove":
    case "mouseup":
    case "mouseout":
    case "mouseover":
    case "contextmenu":
      a = Ve;
      break;
    case "drag":
    case "dragend":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "dragstart":
    case "drop":
      a = sf;
      break;
    case "touchcancel":
    case "touchend":
    case "touchmove":
    case "touchstart":
      a = tf;
      break;
    case Xb:
    case Yb:
    case Zb:
      a = lf;
      break;
    case $b:
      a = uf;
      break;
    case "scroll":
      a = Ne;
      break;
    case "wheel":
      a = vf;
      break;
    case "copy":
    case "cut":
    case "paste":
      a = mf;
      break;
    case "gotpointercapture":
    case "lostpointercapture":
    case "pointercancel":
    case "pointerdown":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "pointerup":
      a = We;
      break;
    default:
      a = G;
  }
  b = a.getPooled(e, b, c, d);
  Xd(b);
  return b;
} };
if (pa)
  throw Error(u(101));
pa = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
ra();
var xf = Nc;
la = Qd;
ma = xf;
na = Pd;
xa({ SimpleEventPlugin: wf, EnterLeaveEventPlugin: Ye, ChangeEventPlugin: Me, SelectEventPlugin: kf, BeforeInputEventPlugin: ve });
var yf = [], zf = -1;
function H(a) {
  0 > zf || (a.current = yf[zf], yf[zf] = null, zf--);
}
function I(a, b) {
  zf++;
  yf[zf] = a.current;
  a.current = b;
}
var Af = {}, J = { current: Af }, K = { current: false }, Bf = Af;
function Cf(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Af;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f;
  for (f in c)
    e[f] = b[f];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function L(a) {
  a = a.childContextTypes;
  return a !== null && a !== void 0;
}
function Df() {
  H(K);
  H(J);
}
function Ef(a, b, c) {
  if (J.current !== Af)
    throw Error(u(168));
  I(J, b);
  I(K, c);
}
function Ff(a, b, c) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if (typeof d.getChildContext !== "function")
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in a))
      throw Error(u(108, pb(b) || "Unknown", e));
  return n({}, c, {}, d);
}
function Gf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Af;
  Bf = J.current;
  I(J, a);
  I(K, K.current);
  return true;
}
function Hf(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(u(169));
  c ? (a = Ff(a, b, Bf), d.__reactInternalMemoizedMergedChildContext = a, H(K), H(J), I(J, a)) : H(K);
  I(K, c);
}
var If = r.unstable_runWithPriority, Jf = r.unstable_scheduleCallback, Kf = r.unstable_cancelCallback, Lf = r.unstable_requestPaint, Mf = r.unstable_now, Nf = r.unstable_getCurrentPriorityLevel, Of = r.unstable_ImmediatePriority, Pf = r.unstable_UserBlockingPriority, Qf = r.unstable_NormalPriority, Rf = r.unstable_LowPriority, Sf = r.unstable_IdlePriority, Tf = {}, Uf = r.unstable_shouldYield, Vf = Lf !== void 0 ? Lf : function() {
}, Wf = null, Xf = null, Yf = false, Zf = Mf(), $f = 1e4 > Zf ? Mf : function() {
  return Mf() - Zf;
};
function ag() {
  switch (Nf()) {
    case Of:
      return 99;
    case Pf:
      return 98;
    case Qf:
      return 97;
    case Rf:
      return 96;
    case Sf:
      return 95;
    default:
      throw Error(u(332));
  }
}
function bg(a) {
  switch (a) {
    case 99:
      return Of;
    case 98:
      return Pf;
    case 97:
      return Qf;
    case 96:
      return Rf;
    case 95:
      return Sf;
    default:
      throw Error(u(332));
  }
}
function cg(a, b) {
  a = bg(a);
  return If(a, b);
}
function dg(a, b, c) {
  a = bg(a);
  return Jf(a, b, c);
}
function eg(a) {
  Wf === null ? (Wf = [a], Xf = Jf(Of, fg)) : Wf.push(a);
  return Tf;
}
function gg() {
  if (Xf !== null) {
    var a = Xf;
    Xf = null;
    Kf(a);
  }
  fg();
}
function fg() {
  if (!Yf && Wf !== null) {
    Yf = true;
    var a = 0;
    try {
      var b = Wf;
      cg(99, function() {
        for (; a < b.length; a++) {
          var c = b[a];
          do
            c = c(true);
          while (c !== null);
        }
      });
      Wf = null;
    } catch (c) {
      throw Wf !== null && (Wf = Wf.slice(a + 1)), Jf(Of, gg), c;
    } finally {
      Yf = false;
    }
  }
}
function hg(a, b, c) {
  c /= 10;
  return 1073741821 - (((1073741821 - a + b / 10) / c | 0) + 1) * c;
}
function ig(a, b) {
  if (a && a.defaultProps) {
    b = n({}, b);
    a = a.defaultProps;
    for (var c in a)
      b[c] === void 0 && (b[c] = a[c]);
  }
  return b;
}
var jg = { current: null }, kg = null, lg = null, mg = null;
function ng() {
  mg = lg = kg = null;
}
function og(a) {
  var b = jg.current;
  H(jg);
  a.type._context._currentValue = b;
}
function pg(a, b) {
  for (; a !== null; ) {
    var c = a.alternate;
    if (a.childExpirationTime < b)
      a.childExpirationTime = b, c !== null && c.childExpirationTime < b && (c.childExpirationTime = b);
    else if (c !== null && c.childExpirationTime < b)
      c.childExpirationTime = b;
    else
      break;
    a = a.return;
  }
}
function qg(a, b) {
  kg = a;
  mg = lg = null;
  a = a.dependencies;
  a !== null && a.firstContext !== null && (a.expirationTime >= b && (rg = true), a.firstContext = null);
}
function sg(a, b) {
  if (mg !== a && b !== false && b !== 0) {
    if (typeof b !== "number" || b === 1073741823)
      mg = a, b = 1073741823;
    b = { context: a, observedBits: b, next: null };
    if (lg === null) {
      if (kg === null)
        throw Error(u(308));
      lg = b;
      kg.dependencies = { expirationTime: 0, firstContext: b, responders: null };
    } else
      lg = lg.next = b;
  }
  return a._currentValue;
}
var tg = false;
function ug(a) {
  a.updateQueue = { baseState: a.memoizedState, baseQueue: null, shared: { pending: null }, effects: null };
}
function vg(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, baseQueue: a.baseQueue, shared: a.shared, effects: a.effects });
}
function wg(a, b) {
  a = { expirationTime: a, suspenseConfig: b, tag: 0, payload: null, callback: null, next: null };
  return a.next = a;
}
function xg(a, b) {
  a = a.updateQueue;
  if (a !== null) {
    a = a.shared;
    var c = a.pending;
    c === null ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
}
function yg(a, b) {
  var c = a.alternate;
  c !== null && vg(c, a);
  a = a.updateQueue;
  c = a.baseQueue;
  c === null ? (a.baseQueue = b.next = b, b.next = b) : (b.next = c.next, c.next = b);
}
function zg(a, b, c, d) {
  var e = a.updateQueue;
  tg = false;
  var f = e.baseQueue, g = e.shared.pending;
  if (g !== null) {
    if (f !== null) {
      var h = f.next;
      f.next = g.next;
      g.next = h;
    }
    f = g;
    e.shared.pending = null;
    h = a.alternate;
    h !== null && (h = h.updateQueue, h !== null && (h.baseQueue = g));
  }
  if (f !== null) {
    h = f.next;
    var k = e.baseState, l2 = 0, m = null, p2 = null, x2 = null;
    if (h !== null) {
      var z2 = h;
      do {
        g = z2.expirationTime;
        if (g < d) {
          var ca = { expirationTime: z2.expirationTime, suspenseConfig: z2.suspenseConfig, tag: z2.tag, payload: z2.payload, callback: z2.callback, next: null };
          x2 === null ? (p2 = x2 = ca, m = k) : x2 = x2.next = ca;
          g > l2 && (l2 = g);
        } else {
          x2 !== null && (x2 = x2.next = { expirationTime: 1073741823, suspenseConfig: z2.suspenseConfig, tag: z2.tag, payload: z2.payload, callback: z2.callback, next: null });
          Ag(g, z2.suspenseConfig);
          a: {
            var D2 = a, t2 = z2;
            g = b;
            ca = c;
            switch (t2.tag) {
              case 1:
                D2 = t2.payload;
                if (typeof D2 === "function") {
                  k = D2.call(ca, k, g);
                  break a;
                }
                k = D2;
                break a;
              case 3:
                D2.effectTag = D2.effectTag & -4097 | 64;
              case 0:
                D2 = t2.payload;
                g = typeof D2 === "function" ? D2.call(ca, k, g) : D2;
                if (g === null || g === void 0)
                  break a;
                k = n({}, k, g);
                break a;
              case 2:
                tg = true;
            }
          }
          z2.callback !== null && (a.effectTag |= 32, g = e.effects, g === null ? e.effects = [z2] : g.push(z2));
        }
        z2 = z2.next;
        if (z2 === null || z2 === h)
          if (g = e.shared.pending, g === null)
            break;
          else
            z2 = f.next = g.next, g.next = h, e.baseQueue = f = g, e.shared.pending = null;
      } while (1);
    }
    x2 === null ? m = k : x2.next = p2;
    e.baseState = m;
    e.baseQueue = x2;
    Bg(l2);
    a.expirationTime = l2;
    a.memoizedState = k;
  }
}
function Cg(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (a !== null)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (e !== null) {
        d.callback = null;
        d = e;
        e = c;
        if (typeof d !== "function")
          throw Error(u(191, d));
        d.call(e);
      }
    }
}
var Dg = Wa.ReactCurrentBatchConfig, Eg = new aa.Component().refs;
function Fg(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = c === null || c === void 0 ? b : n({}, b, c);
  a.memoizedState = c;
  a.expirationTime === 0 && (a.updateQueue.baseState = c);
}
var Jg = { isMounted: function(a) {
  return (a = a._reactInternalFiber) ? dc(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternalFiber;
  var d = Gg(), e = Dg.suspense;
  d = Hg(d, a, e);
  e = wg(d, e);
  e.payload = b;
  c !== void 0 && c !== null && (e.callback = c);
  xg(a, e);
  Ig(a, d);
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternalFiber;
  var d = Gg(), e = Dg.suspense;
  d = Hg(d, a, e);
  e = wg(d, e);
  e.tag = 1;
  e.payload = b;
  c !== void 0 && c !== null && (e.callback = c);
  xg(a, e);
  Ig(a, d);
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternalFiber;
  var c = Gg(), d = Dg.suspense;
  c = Hg(c, a, d);
  d = wg(c, d);
  d.tag = 2;
  b !== void 0 && b !== null && (d.callback = b);
  xg(a, d);
  Ig(a, c);
} };
function Kg(a, b, c, d, e, f, g) {
  a = a.stateNode;
  return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !bf(c, d) || !bf(e, f) : true;
}
function Lg(a, b, c) {
  var d = false, e = Af;
  var f = b.contextType;
  typeof f === "object" && f !== null ? f = sg(f) : (e = L(b) ? Bf : J.current, d = b.contextTypes, f = (d = d !== null && d !== void 0) ? Cf(a, e) : Af);
  b = new b(c, f);
  a.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
  b.updater = Jg;
  a.stateNode = b;
  b._reactInternalFiber = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}
function Mg(a, b, c, d) {
  a = b.state;
  typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
  typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Jg.enqueueReplaceState(b, b.state, null);
}
function Ng(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = Eg;
  ug(a);
  var f = b.contextType;
  typeof f === "object" && f !== null ? e.context = sg(f) : (f = L(b) ? Bf : J.current, e.context = Cf(a, f));
  zg(a, c, e, d);
  e.state = a.memoizedState;
  f = b.getDerivedStateFromProps;
  typeof f === "function" && (Fg(a, b, f, c), e.state = a.memoizedState);
  typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && Jg.enqueueReplaceState(e, e.state, null), zg(a, c, e, d), e.state = a.memoizedState);
  typeof e.componentDidMount === "function" && (a.effectTag |= 4);
}
var Og = Array.isArray;
function Pg(a, b, c) {
  a = c.ref;
  if (a !== null && typeof a !== "function" && typeof a !== "object") {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (c.tag !== 1)
          throw Error(u(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(u(147, a));
      var e = "" + a;
      if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === e)
        return b.ref;
      b = function(a2) {
        var b2 = d.refs;
        b2 === Eg && (b2 = d.refs = {});
        a2 === null ? delete b2[e] : b2[e] = a2;
      };
      b._stringRef = e;
      return b;
    }
    if (typeof a !== "string")
      throw Error(u(284));
    if (!c._owner)
      throw Error(u(290, a));
  }
  return a;
}
function Qg(a, b) {
  if (a.type !== "textarea")
    throw Error(u(31, Object.prototype.toString.call(b) === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, ""));
}
function Rg(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.lastEffect;
      d2 !== null ? (d2.nextEffect = c2, b2.lastEffect = c2) : b2.firstEffect = b2.lastEffect = c2;
      c2.nextEffect = null;
      c2.effectTag = 8;
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; d2 !== null; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); b2 !== null; )
      b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = Sg(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return c2;
    d2 = b2.alternate;
    if (d2 !== null)
      return d2 = d2.index, d2 < c2 ? (b2.effectTag = 2, c2) : d2;
    b2.effectTag = 2;
    return c2;
  }
  function g(b2) {
    a && b2.alternate === null && (b2.effectTag = 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 6)
      return b2 = Tg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k(a2, b2, c2, d2) {
    if (b2 !== null && b2.elementType === c2.type)
      return d2 = e(b2, c2.props), d2.ref = Pg(a2, b2, c2), d2.return = a2, d2;
    d2 = Ug(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = Pg(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = Vg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function m(a2, b2, c2, d2, f2) {
    if (b2 === null || b2.tag !== 7)
      return b2 = Wg(c2, a2.mode, d2, f2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function p2(a2, b2, c2) {
    if (typeof b2 === "string" || typeof b2 === "number")
      return b2 = Tg("" + b2, a2.mode, c2), b2.return = a2, b2;
    if (typeof b2 === "object" && b2 !== null) {
      switch (b2.$$typeof) {
        case Za:
          return c2 = Ug(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Pg(a2, null, b2), c2.return = a2, c2;
        case $a:
          return b2 = Vg(b2, a2.mode, c2), b2.return = a2, b2;
      }
      if (Og(b2) || nb(b2))
        return b2 = Wg(b2, a2.mode, c2, null), b2.return = a2, b2;
      Qg(a2, b2);
    }
    return null;
  }
  function x2(a2, b2, c2, d2) {
    var e2 = b2 !== null ? b2.key : null;
    if (typeof c2 === "string" || typeof c2 === "number")
      return e2 !== null ? null : h(a2, b2, "" + c2, d2);
    if (typeof c2 === "object" && c2 !== null) {
      switch (c2.$$typeof) {
        case Za:
          return c2.key === e2 ? c2.type === ab ? m(a2, b2, c2.props.children, d2, e2) : k(a2, b2, c2, d2) : null;
        case $a:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
      }
      if (Og(c2) || nb(c2))
        return e2 !== null ? null : m(a2, b2, c2, d2, null);
      Qg(a2, c2);
    }
    return null;
  }
  function z2(a2, b2, c2, d2, e2) {
    if (typeof d2 === "string" || typeof d2 === "number")
      return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if (typeof d2 === "object" && d2 !== null) {
      switch (d2.$$typeof) {
        case Za:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, d2.type === ab ? m(b2, a2, d2.props.children, e2, d2.key) : k(b2, a2, d2, e2);
        case $a:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
      }
      if (Og(d2) || nb(d2))
        return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
      Qg(b2, d2);
    }
    return null;
  }
  function ca(e2, g2, h2, k2) {
    for (var l3 = null, t2 = null, m2 = g2, y2 = g2 = 0, A2 = null; m2 !== null && y2 < h2.length; y2++) {
      m2.index > y2 ? (A2 = m2, m2 = null) : A2 = m2.sibling;
      var q2 = x2(e2, m2, h2[y2], k2);
      if (q2 === null) {
        m2 === null && (m2 = A2);
        break;
      }
      a && m2 && q2.alternate === null && b(e2, m2);
      g2 = f(q2, g2, y2);
      t2 === null ? l3 = q2 : t2.sibling = q2;
      t2 = q2;
      m2 = A2;
    }
    if (y2 === h2.length)
      return c(e2, m2), l3;
    if (m2 === null) {
      for (; y2 < h2.length; y2++)
        m2 = p2(e2, h2[y2], k2), m2 !== null && (g2 = f(m2, g2, y2), t2 === null ? l3 = m2 : t2.sibling = m2, t2 = m2);
      return l3;
    }
    for (m2 = d(e2, m2); y2 < h2.length; y2++)
      A2 = z2(m2, e2, y2, h2[y2], k2), A2 !== null && (a && A2.alternate !== null && m2.delete(A2.key === null ? y2 : A2.key), g2 = f(A2, g2, y2), t2 === null ? l3 = A2 : t2.sibling = A2, t2 = A2);
    a && m2.forEach(function(a2) {
      return b(e2, a2);
    });
    return l3;
  }
  function D2(e2, g2, h2, l3) {
    var k2 = nb(h2);
    if (typeof k2 !== "function")
      throw Error(u(150));
    h2 = k2.call(h2);
    if (h2 == null)
      throw Error(u(151));
    for (var m2 = k2 = null, t2 = g2, y2 = g2 = 0, A2 = null, q2 = h2.next(); t2 !== null && !q2.done; y2++, q2 = h2.next()) {
      t2.index > y2 ? (A2 = t2, t2 = null) : A2 = t2.sibling;
      var D3 = x2(e2, t2, q2.value, l3);
      if (D3 === null) {
        t2 === null && (t2 = A2);
        break;
      }
      a && t2 && D3.alternate === null && b(e2, t2);
      g2 = f(D3, g2, y2);
      m2 === null ? k2 = D3 : m2.sibling = D3;
      m2 = D3;
      t2 = A2;
    }
    if (q2.done)
      return c(e2, t2), k2;
    if (t2 === null) {
      for (; !q2.done; y2++, q2 = h2.next())
        q2 = p2(e2, q2.value, l3), q2 !== null && (g2 = f(q2, g2, y2), m2 === null ? k2 = q2 : m2.sibling = q2, m2 = q2);
      return k2;
    }
    for (t2 = d(e2, t2); !q2.done; y2++, q2 = h2.next())
      q2 = z2(t2, e2, y2, q2.value, l3), q2 !== null && (a && q2.alternate !== null && t2.delete(q2.key === null ? y2 : q2.key), g2 = f(q2, g2, y2), m2 === null ? k2 = q2 : m2.sibling = q2, m2 = q2);
    a && t2.forEach(function(a2) {
      return b(e2, a2);
    });
    return k2;
  }
  return function(a2, d2, f2, h2) {
    var k2 = typeof f2 === "object" && f2 !== null && f2.type === ab && f2.key === null;
    k2 && (f2 = f2.props.children);
    var l3 = typeof f2 === "object" && f2 !== null;
    if (l3)
      switch (f2.$$typeof) {
        case Za:
          a: {
            l3 = f2.key;
            for (k2 = d2; k2 !== null; ) {
              if (k2.key === l3) {
                switch (k2.tag) {
                  case 7:
                    if (f2.type === ab) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f2.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    break;
                  default:
                    if (k2.elementType === f2.type) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f2.props);
                      d2.ref = Pg(a2, k2, f2);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                }
                c(a2, k2);
                break;
              } else
                b(a2, k2);
              k2 = k2.sibling;
            }
            f2.type === ab ? (d2 = Wg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Ug(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Pg(a2, d2, f2), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case $a:
          a: {
            for (k2 = f2.key; d2 !== null; ) {
              if (d2.key === k2)
                if (d2.tag === 4 && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f2.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Vg(f2, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
      }
    if (typeof f2 === "string" || typeof f2 === "number")
      return f2 = "" + f2, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Tg(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2);
    if (Og(f2))
      return ca(a2, d2, f2, h2);
    if (nb(f2))
      return D2(a2, d2, f2, h2);
    l3 && Qg(a2, f2);
    if (typeof f2 === "undefined" && !k2)
      switch (a2.tag) {
        case 1:
        case 0:
          throw a2 = a2.type, Error(u(152, a2.displayName || a2.name || "Component"));
      }
    return c(a2, d2);
  };
}
var Xg = Rg(true), Yg = Rg(false), Zg = {}, $g = { current: Zg }, ah = { current: Zg }, bh = { current: Zg };
function ch(a) {
  if (a === Zg)
    throw Error(u(174));
  return a;
}
function dh(a, b) {
  I(bh, b);
  I(ah, a);
  I($g, Zg);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : Ob(null, "");
      break;
    default:
      a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = Ob(b, a);
  }
  H($g);
  I($g, b);
}
function eh() {
  H($g);
  H(ah);
  H(bh);
}
function fh(a) {
  ch(bh.current);
  var b = ch($g.current);
  var c = Ob(b, a.type);
  b !== c && (I(ah, a), I($g, c));
}
function gh(a) {
  ah.current === a && (H($g), H(ah));
}
var M = { current: 0 };
function hh(a) {
  for (var b = a; b !== null; ) {
    if (b.tag === 13) {
      var c = b.memoizedState;
      if (c !== null && (c = c.dehydrated, c === null || c.data === Bd || c.data === Cd))
        return b;
    } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
      if ((b.effectTag & 64) !== 0)
        return b;
    } else if (b.child !== null) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; b.sibling === null; ) {
      if (b.return === null || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
function ih(a, b) {
  return { responder: a, props: b };
}
var jh = Wa.ReactCurrentDispatcher, kh = Wa.ReactCurrentBatchConfig, lh = 0, N = null, O = null, P = null, mh = false;
function Q() {
  throw Error(u(321));
}
function nh(a, b) {
  if (b === null)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!$e(a[c], b[c]))
      return false;
  return true;
}
function oh(a, b, c, d, e, f) {
  lh = f;
  N = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.expirationTime = 0;
  jh.current = a === null || a.memoizedState === null ? ph : qh;
  a = c(d, e);
  if (b.expirationTime === lh) {
    f = 0;
    do {
      b.expirationTime = 0;
      if (!(25 > f))
        throw Error(u(301));
      f += 1;
      P = O = null;
      b.updateQueue = null;
      jh.current = rh;
      a = c(d, e);
    } while (b.expirationTime === lh);
  }
  jh.current = sh;
  b = O !== null && O.next !== null;
  lh = 0;
  P = O = N = null;
  mh = false;
  if (b)
    throw Error(u(300));
  return a;
}
function th() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  P === null ? N.memoizedState = P = a : P = P.next = a;
  return P;
}
function uh() {
  if (O === null) {
    var a = N.alternate;
    a = a !== null ? a.memoizedState : null;
  } else
    a = O.next;
  var b = P === null ? N.memoizedState : P.next;
  if (b !== null)
    P = b, O = a;
  else {
    if (a === null)
      throw Error(u(310));
    O = a;
    a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
    P === null ? N.memoizedState = P = a : P = P.next = a;
  }
  return P;
}
function vh(a, b) {
  return typeof b === "function" ? b(a) : b;
}
function wh(a) {
  var b = uh(), c = b.queue;
  if (c === null)
    throw Error(u(311));
  c.lastRenderedReducer = a;
  var d = O, e = d.baseQueue, f = c.pending;
  if (f !== null) {
    if (e !== null) {
      var g = e.next;
      e.next = f.next;
      f.next = g;
    }
    d.baseQueue = e = f;
    c.pending = null;
  }
  if (e !== null) {
    e = e.next;
    d = d.baseState;
    var h = g = f = null, k = e;
    do {
      var l2 = k.expirationTime;
      if (l2 < lh) {
        var m = { expirationTime: k.expirationTime, suspenseConfig: k.suspenseConfig, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null };
        h === null ? (g = h = m, f = d) : h = h.next = m;
        l2 > N.expirationTime && (N.expirationTime = l2, Bg(l2));
      } else
        h !== null && (h = h.next = { expirationTime: 1073741823, suspenseConfig: k.suspenseConfig, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null }), Ag(l2, k.suspenseConfig), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
      k = k.next;
    } while (k !== null && k !== e);
    h === null ? f = d : h.next = g;
    $e(d, b.memoizedState) || (rg = true);
    b.memoizedState = d;
    b.baseState = f;
    b.baseQueue = h;
    c.lastRenderedState = d;
  }
  return [b.memoizedState, c.dispatch];
}
function xh(a) {
  var b = uh(), c = b.queue;
  if (c === null)
    throw Error(u(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f = b.memoizedState;
  if (e !== null) {
    c.pending = null;
    var g = e = e.next;
    do
      f = a(f, g.action), g = g.next;
    while (g !== e);
    $e(f, b.memoizedState) || (rg = true);
    b.memoizedState = f;
    b.baseQueue === null && (b.baseState = f);
    c.lastRenderedState = f;
  }
  return [f, d];
}
function yh(a) {
  var b = th();
  typeof a === "function" && (a = a());
  b.memoizedState = b.baseState = a;
  a = b.queue = { pending: null, dispatch: null, lastRenderedReducer: vh, lastRenderedState: a };
  a = a.dispatch = zh.bind(null, N, a);
  return [b.memoizedState, a];
}
function Ah(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = N.updateQueue;
  b === null ? (b = { lastEffect: null }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function Bh() {
  return uh().memoizedState;
}
function Ch(a, b, c, d) {
  var e = th();
  N.effectTag |= a;
  e.memoizedState = Ah(1 | b, c, void 0, d === void 0 ? null : d);
}
function Dh(a, b, c, d) {
  var e = uh();
  d = d === void 0 ? null : d;
  var f = void 0;
  if (O !== null) {
    var g = O.memoizedState;
    f = g.destroy;
    if (d !== null && nh(d, g.deps)) {
      Ah(b, c, f, d);
      return;
    }
  }
  N.effectTag |= a;
  e.memoizedState = Ah(1 | b, c, f, d);
}
function Eh(a, b) {
  return Ch(516, 4, a, b);
}
function Fh(a, b) {
  return Dh(516, 4, a, b);
}
function Gh(a, b) {
  return Dh(4, 2, a, b);
}
function Hh(a, b) {
  if (typeof b === "function")
    return a = a(), b(a), function() {
      b(null);
    };
  if (b !== null && b !== void 0)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function Ih(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return Dh(4, 2, Hh.bind(null, b, a), c);
}
function Jh() {
}
function Kh(a, b) {
  th().memoizedState = [a, b === void 0 ? null : b];
  return a;
}
function Lh(a, b) {
  var c = uh();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && nh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function Mh(a, b) {
  var c = uh();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && nh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function Nh(a, b, c) {
  var d = ag();
  cg(98 > d ? 98 : d, function() {
    a(true);
  });
  cg(97 < d ? 97 : d, function() {
    var d2 = kh.suspense;
    kh.suspense = b === void 0 ? null : b;
    try {
      a(false), c();
    } finally {
      kh.suspense = d2;
    }
  });
}
function zh(a, b, c) {
  var d = Gg(), e = Dg.suspense;
  d = Hg(d, a, e);
  e = { expirationTime: d, suspenseConfig: e, action: c, eagerReducer: null, eagerState: null, next: null };
  var f = b.pending;
  f === null ? e.next = e : (e.next = f.next, f.next = e);
  b.pending = e;
  f = a.alternate;
  if (a === N || f !== null && f === N)
    mh = true, e.expirationTime = lh, N.expirationTime = lh;
  else {
    if (a.expirationTime === 0 && (f === null || f.expirationTime === 0) && (f = b.lastRenderedReducer, f !== null))
      try {
        var g = b.lastRenderedState, h = f(g, c);
        e.eagerReducer = f;
        e.eagerState = h;
        if ($e(h, g))
          return;
      } catch (k) {
      } finally {
      }
    Ig(a, d);
  }
}
var sh = { readContext: sg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useResponder: Q, useDeferredValue: Q, useTransition: Q }, ph = { readContext: sg, useCallback: Kh, useContext: sg, useEffect: Eh, useImperativeHandle: function(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return Ch(4, 2, Hh.bind(null, b, a), c);
}, useLayoutEffect: function(a, b) {
  return Ch(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = th();
  b = b === void 0 ? null : b;
  a = a();
  c.memoizedState = [
    a,
    b
  ];
  return a;
}, useReducer: function(a, b, c) {
  var d = th();
  b = c !== void 0 ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = d.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  a = a.dispatch = zh.bind(null, N, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = th();
  a = { current: a };
  return b.memoizedState = a;
}, useState: yh, useDebugValue: Jh, useResponder: ih, useDeferredValue: function(a, b) {
  var c = yh(a), d = c[0], e = c[1];
  Eh(function() {
    var c2 = kh.suspense;
    kh.suspense = b === void 0 ? null : b;
    try {
      e(a);
    } finally {
      kh.suspense = c2;
    }
  }, [a, b]);
  return d;
}, useTransition: function(a) {
  var b = yh(false), c = b[0];
  b = b[1];
  return [Kh(Nh.bind(null, b, a), [b, a]), c];
} }, qh = { readContext: sg, useCallback: Lh, useContext: sg, useEffect: Fh, useImperativeHandle: Ih, useLayoutEffect: Gh, useMemo: Mh, useReducer: wh, useRef: Bh, useState: function() {
  return wh(vh);
}, useDebugValue: Jh, useResponder: ih, useDeferredValue: function(a, b) {
  var c = wh(vh), d = c[0], e = c[1];
  Fh(function() {
    var c2 = kh.suspense;
    kh.suspense = b === void 0 ? null : b;
    try {
      e(a);
    } finally {
      kh.suspense = c2;
    }
  }, [a, b]);
  return d;
}, useTransition: function(a) {
  var b = wh(vh), c = b[0];
  b = b[1];
  return [Lh(Nh.bind(null, b, a), [b, a]), c];
} }, rh = { readContext: sg, useCallback: Lh, useContext: sg, useEffect: Fh, useImperativeHandle: Ih, useLayoutEffect: Gh, useMemo: Mh, useReducer: xh, useRef: Bh, useState: function() {
  return xh(vh);
}, useDebugValue: Jh, useResponder: ih, useDeferredValue: function(a, b) {
  var c = xh(vh), d = c[0], e = c[1];
  Fh(function() {
    var c2 = kh.suspense;
    kh.suspense = b === void 0 ? null : b;
    try {
      e(a);
    } finally {
      kh.suspense = c2;
    }
  }, [a, b]);
  return d;
}, useTransition: function(a) {
  var b = xh(vh), c = b[0];
  b = b[1];
  return [Lh(Nh.bind(null, b, a), [b, a]), c];
} }, Oh = null, Ph = null, Qh = false;
function Rh(a, b) {
  var c = Sh(5, null, null, 0);
  c.elementType = "DELETED";
  c.type = "DELETED";
  c.stateNode = b;
  c.return = a;
  c.effectTag = 8;
  a.lastEffect !== null ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}
function Th(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return b !== null ? (a.stateNode = b, true) : false;
    case 6:
      return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function Uh(a) {
  if (Qh) {
    var b = Ph;
    if (b) {
      var c = b;
      if (!Th(a, b)) {
        b = Jd(c.nextSibling);
        if (!b || !Th(a, b)) {
          a.effectTag = a.effectTag & -1025 | 2;
          Qh = false;
          Oh = a;
          return;
        }
        Rh(Oh, c);
      }
      Oh = a;
      Ph = Jd(b.firstChild);
    } else
      a.effectTag = a.effectTag & -1025 | 2, Qh = false, Oh = a;
  }
}
function Vh(a) {
  for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
    a = a.return;
  Oh = a;
}
function Wh(a) {
  if (a !== Oh)
    return false;
  if (!Qh)
    return Vh(a), Qh = true, false;
  var b = a.type;
  if (a.tag !== 5 || b !== "head" && b !== "body" && !Gd(b, a.memoizedProps))
    for (b = Ph; b; )
      Rh(a, b), b = Jd(b.nextSibling);
  Vh(a);
  if (a.tag === 13) {
    a = a.memoizedState;
    a = a !== null ? a.dehydrated : null;
    if (!a)
      throw Error(u(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (a.nodeType === 8) {
          var c = a.data;
          if (c === Ad) {
            if (b === 0) {
              Ph = Jd(a.nextSibling);
              break a;
            }
            b--;
          } else
            c !== zd && c !== Cd && c !== Bd || b++;
        }
        a = a.nextSibling;
      }
      Ph = null;
    }
  } else
    Ph = Oh ? Jd(a.stateNode.nextSibling) : null;
  return true;
}
function Xh() {
  Ph = Oh = null;
  Qh = false;
}
var Yh = Wa.ReactCurrentOwner, rg = false;
function R(a, b, c, d) {
  b.child = a === null ? Yg(b, null, c, d) : Xg(b, a.child, c, d);
}
function Zh(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  qg(b, e);
  d = oh(a, b, c, d, f, e);
  if (a !== null && !rg)
    return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e);
  b.effectTag |= 1;
  R(a, b, d, e);
  return b.child;
}
function ai(a, b, c, d, e, f) {
  if (a === null) {
    var g = c.type;
    if (typeof g === "function" && !bi(g) && g.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
      return b.tag = 15, b.type = g, ci(a, b, g, d, e, f);
    a = Ug(c.type, null, d, null, b.mode, f);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  g = a.child;
  if (e < f && (e = g.memoizedProps, c = c.compare, c = c !== null ? c : bf, c(e, d) && a.ref === b.ref))
    return $h(a, b, f);
  b.effectTag |= 1;
  a = Sg(g, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function ci(a, b, c, d, e, f) {
  return a !== null && bf(a.memoizedProps, d) && a.ref === b.ref && (rg = false, e < f) ? (b.expirationTime = a.expirationTime, $h(a, b, f)) : di(a, b, c, d, f);
}
function ei(a, b) {
  var c = b.ref;
  if (a === null && c !== null || a !== null && a.ref !== c)
    b.effectTag |= 128;
}
function di(a, b, c, d, e) {
  var f = L(c) ? Bf : J.current;
  f = Cf(b, f);
  qg(b, e);
  c = oh(a, b, c, d, f, e);
  if (a !== null && !rg)
    return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e);
  b.effectTag |= 1;
  R(a, b, c, e);
  return b.child;
}
function fi(a, b, c, d, e) {
  if (L(c)) {
    var f = true;
    Gf(b);
  } else
    f = false;
  qg(b, e);
  if (b.stateNode === null)
    a !== null && (a.alternate = null, b.alternate = null, b.effectTag |= 2), Lg(b, c, d), Ng(b, c, d, e), d = true;
  else if (a === null) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k = g.context, l2 = c.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = sg(l2) : (l2 = L(c) ? Bf : J.current, l2 = Cf(b, l2));
    var m = c.getDerivedStateFromProps, p2 = typeof m === "function" || typeof g.getSnapshotBeforeUpdate === "function";
    p2 || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== d || k !== l2) && Mg(b, g, d, l2);
    tg = false;
    var x2 = b.memoizedState;
    g.state = x2;
    zg(b, d, g, e);
    k = b.memoizedState;
    h !== d || x2 !== k || K.current || tg ? (typeof m === "function" && (Fg(b, c, m, d), k = b.memoizedState), (h = tg || Kg(b, c, h, d, x2, k, l2)) ? (p2 || typeof g.UNSAFE_componentWillMount !== "function" && typeof g.componentWillMount !== "function" || (typeof g.componentWillMount === "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount === "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount === "function" && (b.effectTag |= 4)) : (typeof g.componentDidMount === "function" && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l2, d = h) : (typeof g.componentDidMount === "function" && (b.effectTag |= 4), d = false);
  } else
    g = b.stateNode, vg(a, b), h = b.memoizedProps, g.props = b.type === b.elementType ? h : ig(b.type, h), k = g.context, l2 = c.contextType, typeof l2 === "object" && l2 !== null ? l2 = sg(l2) : (l2 = L(c) ? Bf : J.current, l2 = Cf(b, l2)), m = c.getDerivedStateFromProps, (p2 = typeof m === "function" || typeof g.getSnapshotBeforeUpdate === "function") || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== d || k !== l2) && Mg(b, g, d, l2), tg = false, k = b.memoizedState, g.state = k, zg(b, d, g, e), x2 = b.memoizedState, h !== d || k !== x2 || K.current || tg ? (typeof m === "function" && (Fg(b, c, m, d), x2 = b.memoizedState), (m = tg || Kg(b, c, h, d, k, x2, l2)) ? (p2 || typeof g.UNSAFE_componentWillUpdate !== "function" && typeof g.componentWillUpdate !== "function" || (typeof g.componentWillUpdate === "function" && g.componentWillUpdate(d, x2, l2), typeof g.UNSAFE_componentWillUpdate === "function" && g.UNSAFE_componentWillUpdate(d, x2, l2)), typeof g.componentDidUpdate === "function" && (b.effectTag |= 4), typeof g.getSnapshotBeforeUpdate === "function" && (b.effectTag |= 256)) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = x2), g.props = d, g.state = x2, g.context = l2, d = m) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), d = false);
  return gi(a, b, c, d, f, e);
}
function gi(a, b, c, d, e, f) {
  ei(a, b);
  var g = (b.effectTag & 64) !== 0;
  if (!d && !g)
    return e && Hf(b, c, false), $h(a, b, f);
  d = b.stateNode;
  Yh.current = b;
  var h = g && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
  b.effectTag |= 1;
  a !== null && g ? (b.child = Xg(b, a.child, null, f), b.child = Xg(b, null, h, f)) : R(a, b, h, f);
  b.memoizedState = d.state;
  e && Hf(b, c, true);
  return b.child;
}
function hi(a) {
  var b = a.stateNode;
  b.pendingContext ? Ef(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Ef(a, b.context, false);
  dh(a, b.containerInfo);
}
var ii = { dehydrated: null, retryTime: 0 };
function ji(a, b, c) {
  var d = b.mode, e = b.pendingProps, f = M.current, g = false, h;
  (h = (b.effectTag & 64) !== 0) || (h = (f & 2) !== 0 && (a === null || a.memoizedState !== null));
  h ? (g = true, b.effectTag &= -65) : a !== null && a.memoizedState === null || e.fallback === void 0 || e.unstable_avoidThisFallback === true || (f |= 1);
  I(M, f & 1);
  if (a === null) {
    e.fallback !== void 0 && Uh(b);
    if (g) {
      g = e.fallback;
      e = Wg(null, d, 0, null);
      e.return = b;
      if ((b.mode & 2) === 0)
        for (a = b.memoizedState !== null ? b.child.child : b.child, e.child = a; a !== null; )
          a.return = e, a = a.sibling;
      c = Wg(g, d, c, null);
      c.return = b;
      e.sibling = c;
      b.memoizedState = ii;
      b.child = e;
      return c;
    }
    d = e.children;
    b.memoizedState = null;
    return b.child = Yg(b, null, d, c);
  }
  if (a.memoizedState !== null) {
    a = a.child;
    d = a.sibling;
    if (g) {
      e = e.fallback;
      c = Sg(a, a.pendingProps);
      c.return = b;
      if ((b.mode & 2) === 0 && (g = b.memoizedState !== null ? b.child.child : b.child, g !== a.child))
        for (c.child = g; g !== null; )
          g.return = c, g = g.sibling;
      d = Sg(d, e);
      d.return = b;
      c.sibling = d;
      c.childExpirationTime = 0;
      b.memoizedState = ii;
      b.child = c;
      return d;
    }
    c = Xg(b, a.child, e.children, c);
    b.memoizedState = null;
    return b.child = c;
  }
  a = a.child;
  if (g) {
    g = e.fallback;
    e = Wg(null, d, 0, null);
    e.return = b;
    e.child = a;
    a !== null && (a.return = e);
    if ((b.mode & 2) === 0)
      for (a = b.memoizedState !== null ? b.child.child : b.child, e.child = a; a !== null; )
        a.return = e, a = a.sibling;
    c = Wg(g, d, c, null);
    c.return = b;
    e.sibling = c;
    c.effectTag |= 2;
    e.childExpirationTime = 0;
    b.memoizedState = ii;
    b.child = e;
    return c;
  }
  b.memoizedState = null;
  return b.child = Xg(b, a, e.children, c);
}
function ki(a, b) {
  a.expirationTime < b && (a.expirationTime = b);
  var c = a.alternate;
  c !== null && c.expirationTime < b && (c.expirationTime = b);
  pg(a.return, b);
}
function li(a, b, c, d, e, f) {
  var g = a.memoizedState;
  g === null ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailExpiration: 0, tailMode: e, lastEffect: f } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailExpiration = 0, g.tailMode = e, g.lastEffect = f);
}
function mi(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f = d.tail;
  R(a, b, d.children, c);
  d = M.current;
  if ((d & 2) !== 0)
    d = d & 1 | 2, b.effectTag |= 64;
  else {
    if (a !== null && (a.effectTag & 64) !== 0)
      a:
        for (a = b.child; a !== null; ) {
          if (a.tag === 13)
            a.memoizedState !== null && ki(a, c);
          else if (a.tag === 19)
            ki(a, c);
          else if (a.child !== null) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  I(M, d);
  if ((b.mode & 2) === 0)
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; c !== null; )
          a = c.alternate, a !== null && hh(a) === null && (e = c), c = c.sibling;
        c = e;
        c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        li(b, false, e, c, f, b.lastEffect);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; e !== null; ) {
          a = e.alternate;
          if (a !== null && hh(a) === null) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        li(b, true, c, null, f, b.lastEffect);
        break;
      case "together":
        li(b, false, null, null, void 0, b.lastEffect);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function $h(a, b, c) {
  a !== null && (b.dependencies = a.dependencies);
  var d = b.expirationTime;
  d !== 0 && Bg(d);
  if (b.childExpirationTime < c)
    return null;
  if (a !== null && b.child !== a.child)
    throw Error(u(153));
  if (b.child !== null) {
    a = b.child;
    c = Sg(a, a.pendingProps);
    b.child = c;
    for (c.return = b; a.sibling !== null; )
      a = a.sibling, c = c.sibling = Sg(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
var ni, oi, pi, qi;
ni = function(a, b) {
  for (var c = b.child; c !== null; ) {
    if (c.tag === 5 || c.tag === 6)
      a.appendChild(c.stateNode);
    else if (c.tag !== 4 && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
oi = function() {
};
pi = function(a, b, c, d, e) {
  var f = a.memoizedProps;
  if (f !== d) {
    var g = b.stateNode;
    ch($g.current);
    a = null;
    switch (c) {
      case "input":
        f = zb(g, f);
        d = zb(g, d);
        a = [];
        break;
      case "option":
        f = Gb(g, f);
        d = Gb(g, d);
        a = [];
        break;
      case "select":
        f = n({}, f, { value: void 0 });
        d = n({}, d, { value: void 0 });
        a = [];
        break;
      case "textarea":
        f = Ib(g, f);
        d = Ib(g, d);
        a = [];
        break;
      default:
        typeof f.onClick !== "function" && typeof d.onClick === "function" && (g.onclick = sd);
    }
    od(c, d);
    var h, k;
    c = null;
    for (h in f)
      if (!d.hasOwnProperty(h) && f.hasOwnProperty(h) && f[h] != null)
        if (h === "style")
          for (k in g = f[h], g)
            g.hasOwnProperty(k) && (c || (c = {}), c[k] = "");
        else
          h !== "dangerouslySetInnerHTML" && h !== "children" && h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (va.hasOwnProperty(h) ? a || (a = []) : (a = a || []).push(h, null));
    for (h in d) {
      var l2 = d[h];
      g = f != null ? f[h] : void 0;
      if (d.hasOwnProperty(h) && l2 !== g && (l2 != null || g != null))
        if (h === "style")
          if (g) {
            for (k in g)
              !g.hasOwnProperty(k) || l2 && l2.hasOwnProperty(k) || (c || (c = {}), c[k] = "");
            for (k in l2)
              l2.hasOwnProperty(k) && g[k] !== l2[k] && (c || (c = {}), c[k] = l2[k]);
          } else
            c || (a || (a = []), a.push(h, c)), c = l2;
        else
          h === "dangerouslySetInnerHTML" ? (l2 = l2 ? l2.__html : void 0, g = g ? g.__html : void 0, l2 != null && g !== l2 && (a = a || []).push(h, l2)) : h === "children" ? g === l2 || typeof l2 !== "string" && typeof l2 !== "number" || (a = a || []).push(h, "" + l2) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && (va.hasOwnProperty(h) ? (l2 != null && rd(e, h), a || g === l2 || (a = [])) : (a = a || []).push(h, l2));
    }
    c && (a = a || []).push("style", c);
    e = a;
    if (b.updateQueue = e)
      b.effectTag |= 4;
  }
};
qi = function(a, b, c, d) {
  c !== d && (b.effectTag |= 4);
};
function ri(a, b) {
  switch (a.tailMode) {
    case "hidden":
      b = a.tail;
      for (var c = null; b !== null; )
        b.alternate !== null && (c = b), b = b.sibling;
      c === null ? a.tail = null : c.sibling = null;
      break;
    case "collapsed":
      c = a.tail;
      for (var d = null; c !== null; )
        c.alternate !== null && (d = c), c = c.sibling;
      d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
  }
}
function si(a, b, c) {
  var d = b.pendingProps;
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return L(b.type) && Df(), null;
    case 3:
      return eh(), H(K), H(J), c = b.stateNode, c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), a !== null && a.child !== null || !Wh(b) || (b.effectTag |= 4), oi(b), null;
    case 5:
      gh(b);
      c = ch(bh.current);
      var e = b.type;
      if (a !== null && b.stateNode != null)
        pi(a, b, e, d, c), a.ref !== b.ref && (b.effectTag |= 128);
      else {
        if (!d) {
          if (b.stateNode === null)
            throw Error(u(166));
          return null;
        }
        a = ch($g.current);
        if (Wh(b)) {
          d = b.stateNode;
          e = b.type;
          var f = b.memoizedProps;
          d[Md] = b;
          d[Nd] = f;
          switch (e) {
            case "iframe":
            case "object":
            case "embed":
              F("load", d);
              break;
            case "video":
            case "audio":
              for (a = 0; a < ac.length; a++)
                F(ac[a], d);
              break;
            case "source":
              F("error", d);
              break;
            case "img":
            case "image":
            case "link":
              F("error", d);
              F("load", d);
              break;
            case "form":
              F("reset", d);
              F("submit", d);
              break;
            case "details":
              F("toggle", d);
              break;
            case "input":
              Ab(d, f);
              F("invalid", d);
              rd(c, "onChange");
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f.multiple };
              F("invalid", d);
              rd(c, "onChange");
              break;
            case "textarea":
              Jb(d, f), F("invalid", d), rd(c, "onChange");
          }
          od(e, f);
          a = null;
          for (var g in f)
            if (f.hasOwnProperty(g)) {
              var h = f[g];
              g === "children" ? typeof h === "string" ? d.textContent !== h && (a = ["children", h]) : typeof h === "number" && d.textContent !== "" + h && (a = ["children", "" + h]) : va.hasOwnProperty(g) && h != null && rd(c, g);
            }
          switch (e) {
            case "input":
              xb(d);
              Eb(d, f, true);
              break;
            case "textarea":
              xb(d);
              Lb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f.onClick === "function" && (d.onclick = sd);
          }
          c = a;
          b.updateQueue = c;
          c !== null && (b.effectTag |= 4);
        } else {
          g = c.nodeType === 9 ? c : c.ownerDocument;
          a === qd && (a = Nb(e));
          a === qd ? e === "script" ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g.createElement(e, { is: d.is }) : (a = g.createElement(e), e === "select" && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, e);
          a[Md] = b;
          a[Nd] = d;
          ni(a, b, false, false);
          b.stateNode = a;
          g = pd(e, d);
          switch (e) {
            case "iframe":
            case "object":
            case "embed":
              F("load", a);
              h = d;
              break;
            case "video":
            case "audio":
              for (h = 0; h < ac.length; h++)
                F(ac[h], a);
              h = d;
              break;
            case "source":
              F("error", a);
              h = d;
              break;
            case "img":
            case "image":
            case "link":
              F("error", a);
              F("load", a);
              h = d;
              break;
            case "form":
              F("reset", a);
              F("submit", a);
              h = d;
              break;
            case "details":
              F("toggle", a);
              h = d;
              break;
            case "input":
              Ab(a, d);
              h = zb(a, d);
              F("invalid", a);
              rd(c, "onChange");
              break;
            case "option":
              h = Gb(a, d);
              break;
            case "select":
              a._wrapperState = { wasMultiple: !!d.multiple };
              h = n({}, d, { value: void 0 });
              F("invalid", a);
              rd(c, "onChange");
              break;
            case "textarea":
              Jb(a, d);
              h = Ib(a, d);
              F("invalid", a);
              rd(c, "onChange");
              break;
            default:
              h = d;
          }
          od(e, h);
          var k = h;
          for (f in k)
            if (k.hasOwnProperty(f)) {
              var l2 = k[f];
              f === "style" ? md(a, l2) : f === "dangerouslySetInnerHTML" ? (l2 = l2 ? l2.__html : void 0, l2 != null && Qb(a, l2)) : f === "children" ? typeof l2 === "string" ? (e !== "textarea" || l2 !== "") && Rb(a, l2) : typeof l2 === "number" && Rb(a, "" + l2) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (va.hasOwnProperty(f) ? l2 != null && rd(c, f) : l2 != null && Xa(a, f, l2, g));
            }
          switch (e) {
            case "input":
              xb(a);
              Eb(a, d, false);
              break;
            case "textarea":
              xb(a);
              Lb(a);
              break;
            case "option":
              d.value != null && a.setAttribute("value", "" + rb(d.value));
              break;
            case "select":
              a.multiple = !!d.multiple;
              c = d.value;
              c != null ? Hb(a, !!d.multiple, c, false) : d.defaultValue != null && Hb(a, !!d.multiple, d.defaultValue, true);
              break;
            default:
              typeof h.onClick === "function" && (a.onclick = sd);
          }
          Fd(e, d) && (b.effectTag |= 4);
        }
        b.ref !== null && (b.effectTag |= 128);
      }
      return null;
    case 6:
      if (a && b.stateNode != null)
        qi(a, b, a.memoizedProps, d);
      else {
        if (typeof d !== "string" && b.stateNode === null)
          throw Error(u(166));
        c = ch(bh.current);
        ch($g.current);
        Wh(b) ? (c = b.stateNode, d = b.memoizedProps, c[Md] = b, c.nodeValue !== d && (b.effectTag |= 4)) : (c = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), c[Md] = b, b.stateNode = c);
      }
      return null;
    case 13:
      H(M);
      d = b.memoizedState;
      if ((b.effectTag & 64) !== 0)
        return b.expirationTime = c, b;
      c = d !== null;
      d = false;
      a === null ? b.memoizedProps.fallback !== void 0 && Wh(b) : (e = a.memoizedState, d = e !== null, c || e === null || (e = a.child.sibling, e !== null && (f = b.firstEffect, f !== null ? (b.firstEffect = e, e.nextEffect = f) : (b.firstEffect = b.lastEffect = e, e.nextEffect = null), e.effectTag = 8)));
      if (c && !d && (b.mode & 2) !== 0)
        if (a === null && b.memoizedProps.unstable_avoidThisFallback !== true || (M.current & 1) !== 0)
          S === ti && (S = ui);
        else {
          if (S === ti || S === ui)
            S = vi;
          wi !== 0 && T !== null && (xi(T, U), yi(T, wi));
        }
      if (c || d)
        b.effectTag |= 4;
      return null;
    case 4:
      return eh(), oi(b), null;
    case 10:
      return og(b), null;
    case 17:
      return L(b.type) && Df(), null;
    case 19:
      H(M);
      d = b.memoizedState;
      if (d === null)
        return null;
      e = (b.effectTag & 64) !== 0;
      f = d.rendering;
      if (f === null)
        if (e)
          ri(d, false);
        else {
          if (S !== ti || a !== null && (a.effectTag & 64) !== 0)
            for (f = b.child; f !== null; ) {
              a = hh(f);
              if (a !== null) {
                b.effectTag |= 64;
                ri(d, false);
                e = a.updateQueue;
                e !== null && (b.updateQueue = e, b.effectTag |= 4);
                d.lastEffect === null && (b.firstEffect = null);
                b.lastEffect = d.lastEffect;
                for (d = b.child; d !== null; )
                  e = d, f = c, e.effectTag &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null, a = e.alternate, a === null ? (e.childExpirationTime = 0, e.expirationTime = f, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null) : (e.childExpirationTime = a.childExpirationTime, e.expirationTime = a.expirationTime, e.child = a.child, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, f = a.dependencies, e.dependencies = f === null ? null : { expirationTime: f.expirationTime, firstContext: f.firstContext, responders: f.responders }), d = d.sibling;
                I(M, M.current & 1 | 2);
                return b.child;
              }
              f = f.sibling;
            }
        }
      else {
        if (!e)
          if (a = hh(f), a !== null) {
            if (b.effectTag |= 64, e = true, c = a.updateQueue, c !== null && (b.updateQueue = c, b.effectTag |= 4), ri(d, true), d.tail === null && d.tailMode === "hidden" && !f.alternate)
              return b = b.lastEffect = d.lastEffect, b !== null && (b.nextEffect = null), null;
          } else
            2 * $f() - d.renderingStartTime > d.tailExpiration && 1 < c && (b.effectTag |= 64, e = true, ri(d, false), b.expirationTime = b.childExpirationTime = c - 1);
        d.isBackwards ? (f.sibling = b.child, b.child = f) : (c = d.last, c !== null ? c.sibling = f : b.child = f, d.last = f);
      }
      return d.tail !== null ? (d.tailExpiration === 0 && (d.tailExpiration = $f() + 500), c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = $f(), c.sibling = null, b = M.current, I(M, e ? b & 1 | 2 : b & 1), c) : null;
  }
  throw Error(u(156, b.tag));
}
function zi(a) {
  switch (a.tag) {
    case 1:
      L(a.type) && Df();
      var b = a.effectTag;
      return b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;
    case 3:
      eh();
      H(K);
      H(J);
      b = a.effectTag;
      if ((b & 64) !== 0)
        throw Error(u(285));
      a.effectTag = b & -4097 | 64;
      return a;
    case 5:
      return gh(a), null;
    case 13:
      return H(M), b = a.effectTag, b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;
    case 19:
      return H(M), null;
    case 4:
      return eh(), null;
    case 10:
      return og(a), null;
    default:
      return null;
  }
}
function Ai(a, b) {
  return { value: a, source: b, stack: qb(b) };
}
var Bi = typeof WeakSet === "function" ? WeakSet : Set;
function Ci(a, b) {
  var c = b.source, d = b.stack;
  d === null && c !== null && (d = qb(c));
  c !== null && pb(c.type);
  b = b.value;
  a !== null && a.tag === 1 && pb(a.type);
  try {
    console.error(b);
  } catch (e) {
    setTimeout(function() {
      throw e;
    });
  }
}
function Di(a, b) {
  try {
    b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
  } catch (c) {
    Ei(a, c);
  }
}
function Fi(a) {
  var b = a.ref;
  if (b !== null)
    if (typeof b === "function")
      try {
        b(null);
      } catch (c) {
        Ei(a, c);
      }
    else
      b.current = null;
}
function Gi(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b.effectTag & 256 && a !== null) {
        var c = a.memoizedProps, d = a.memoizedState;
        a = b.stateNode;
        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : ig(b.type, c), d);
        a.__reactInternalSnapshotBeforeUpdate = b;
      }
      return;
    case 3:
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(u(163));
}
function Hi(a, b) {
  b = b.updateQueue;
  b = b !== null ? b.lastEffect : null;
  if (b !== null) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.destroy;
        c.destroy = void 0;
        d !== void 0 && d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Ii(a, b) {
  b = b.updateQueue;
  b = b !== null ? b.lastEffect : null;
  if (b !== null) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Ji(a, b, c) {
  switch (c.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      Ii(3, c);
      return;
    case 1:
      a = c.stateNode;
      if (c.effectTag & 4)
        if (b === null)
          a.componentDidMount();
        else {
          var d = c.elementType === c.type ? b.memoizedProps : ig(c.type, b.memoizedProps);
          a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
        }
      b = c.updateQueue;
      b !== null && Cg(c, b, a);
      return;
    case 3:
      b = c.updateQueue;
      if (b !== null) {
        a = null;
        if (c.child !== null)
          switch (c.child.tag) {
            case 5:
              a = c.child.stateNode;
              break;
            case 1:
              a = c.child.stateNode;
          }
        Cg(c, b, a);
      }
      return;
    case 5:
      a = c.stateNode;
      b === null && c.effectTag & 4 && Fd(c.type, c.memoizedProps) && a.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c.memoizedState === null && (c = c.alternate, c !== null && (c = c.memoizedState, c !== null && (c = c.dehydrated, c !== null && Vc(c))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
      return;
  }
  throw Error(u(163));
}
function Ki(a, b, c) {
  typeof Li === "function" && Li(b);
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b.updateQueue;
      if (a !== null && (a = a.lastEffect, a !== null)) {
        var d = a.next;
        cg(97 < c ? 97 : c, function() {
          var a2 = d;
          do {
            var c2 = a2.destroy;
            if (c2 !== void 0) {
              var g = b;
              try {
                c2();
              } catch (h) {
                Ei(g, h);
              }
            }
            a2 = a2.next;
          } while (a2 !== d);
        });
      }
      break;
    case 1:
      Fi(b);
      c = b.stateNode;
      typeof c.componentWillUnmount === "function" && Di(b, c);
      break;
    case 5:
      Fi(b);
      break;
    case 4:
      Mi(a, b, c);
  }
}
function Ni(a) {
  var b = a.alternate;
  a.return = null;
  a.child = null;
  a.memoizedState = null;
  a.updateQueue = null;
  a.dependencies = null;
  a.alternate = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.pendingProps = null;
  a.memoizedProps = null;
  a.stateNode = null;
  b !== null && Ni(b);
}
function Oi(a) {
  return a.tag === 5 || a.tag === 3 || a.tag === 4;
}
function Pi(a) {
  a: {
    for (var b = a.return; b !== null; ) {
      if (Oi(b)) {
        var c = b;
        break a;
      }
      b = b.return;
    }
    throw Error(u(160));
  }
  b = c.stateNode;
  switch (c.tag) {
    case 5:
      var d = false;
      break;
    case 3:
      b = b.containerInfo;
      d = true;
      break;
    case 4:
      b = b.containerInfo;
      d = true;
      break;
    default:
      throw Error(u(161));
  }
  c.effectTag & 16 && (Rb(b, ""), c.effectTag &= -17);
  a:
    b:
      for (c = a; ; ) {
        for (; c.sibling === null; ) {
          if (c.return === null || Oi(c.return)) {
            c = null;
            break a;
          }
          c = c.return;
        }
        c.sibling.return = c.return;
        for (c = c.sibling; c.tag !== 5 && c.tag !== 6 && c.tag !== 18; ) {
          if (c.effectTag & 2)
            continue b;
          if (c.child === null || c.tag === 4)
            continue b;
          else
            c.child.return = c, c = c.child;
        }
        if (!(c.effectTag & 2)) {
          c = c.stateNode;
          break a;
        }
      }
  d ? Qi(a, c, b) : Ri(a, c, b);
}
function Qi(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, c !== null && c !== void 0 || b.onclick !== null || (b.onclick = sd));
  else if (d !== 4 && (a = a.child, a !== null))
    for (Qi(a, b, c), a = a.sibling; a !== null; )
      Qi(a, b, c), a = a.sibling;
}
function Ri(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (d !== 4 && (a = a.child, a !== null))
    for (Ri(a, b, c), a = a.sibling; a !== null; )
      Ri(a, b, c), a = a.sibling;
}
function Mi(a, b, c) {
  for (var d = b, e = false, f, g; ; ) {
    if (!e) {
      e = d.return;
      a:
        for (; ; ) {
          if (e === null)
            throw Error(u(160));
          f = e.stateNode;
          switch (e.tag) {
            case 5:
              g = false;
              break a;
            case 3:
              f = f.containerInfo;
              g = true;
              break a;
            case 4:
              f = f.containerInfo;
              g = true;
              break a;
          }
          e = e.return;
        }
      e = true;
    }
    if (d.tag === 5 || d.tag === 6) {
      a:
        for (var h = a, k = d, l2 = c, m = k; ; )
          if (Ki(h, m, l2), m.child !== null && m.tag !== 4)
            m.child.return = m, m = m.child;
          else {
            if (m === k)
              break a;
            for (; m.sibling === null; ) {
              if (m.return === null || m.return === k)
                break a;
              m = m.return;
            }
            m.sibling.return = m.return;
            m = m.sibling;
          }
      g ? (h = f, k = d.stateNode, h.nodeType === 8 ? h.parentNode.removeChild(k) : h.removeChild(k)) : f.removeChild(d.stateNode);
    } else if (d.tag === 4) {
      if (d.child !== null) {
        f = d.stateNode.containerInfo;
        g = true;
        d.child.return = d;
        d = d.child;
        continue;
      }
    } else if (Ki(a, d, c), d.child !== null) {
      d.child.return = d;
      d = d.child;
      continue;
    }
    if (d === b)
      break;
    for (; d.sibling === null; ) {
      if (d.return === null || d.return === b)
        return;
      d = d.return;
      d.tag === 4 && (e = false);
    }
    d.sibling.return = d.return;
    d = d.sibling;
  }
}
function Si(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      Hi(3, b);
      return;
    case 1:
      return;
    case 5:
      var c = b.stateNode;
      if (c != null) {
        var d = b.memoizedProps, e = a !== null ? a.memoizedProps : d;
        a = b.type;
        var f = b.updateQueue;
        b.updateQueue = null;
        if (f !== null) {
          c[Nd] = d;
          a === "input" && d.type === "radio" && d.name != null && Bb(c, d);
          pd(a, e);
          b = pd(a, d);
          for (e = 0; e < f.length; e += 2) {
            var g = f[e], h = f[e + 1];
            g === "style" ? md(c, h) : g === "dangerouslySetInnerHTML" ? Qb(c, h) : g === "children" ? Rb(c, h) : Xa(c, g, h, b);
          }
          switch (a) {
            case "input":
              Cb(c, d);
              break;
            case "textarea":
              Kb(c, d);
              break;
            case "select":
              b = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, a = d.value, a != null ? Hb(c, !!d.multiple, a, false) : b !== !!d.multiple && (d.defaultValue != null ? Hb(c, !!d.multiple, d.defaultValue, true) : Hb(c, !!d.multiple, d.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b.stateNode === null)
        throw Error(u(162));
      b.stateNode.nodeValue = b.memoizedProps;
      return;
    case 3:
      b = b.stateNode;
      b.hydrate && (b.hydrate = false, Vc(b.containerInfo));
      return;
    case 12:
      return;
    case 13:
      c = b;
      b.memoizedState === null ? d = false : (d = true, c = b.child, Ti = $f());
      if (c !== null)
        a:
          for (a = c; ; ) {
            if (a.tag === 5)
              f = a.stateNode, d ? (f = f.style, typeof f.setProperty === "function" ? f.setProperty("display", "none", "important") : f.display = "none") : (f = a.stateNode, e = a.memoizedProps.style, e = e !== void 0 && e !== null && e.hasOwnProperty("display") ? e.display : null, f.style.display = ld("display", e));
            else if (a.tag === 6)
              a.stateNode.nodeValue = d ? "" : a.memoizedProps;
            else if (a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null) {
              f = a.child.sibling;
              f.return = a;
              a = f;
              continue;
            } else if (a.child !== null) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === c)
              break;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === c)
                break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
      Ui(b);
      return;
    case 19:
      Ui(b);
      return;
    case 17:
      return;
  }
  throw Error(u(163));
}
function Ui(a) {
  var b = a.updateQueue;
  if (b !== null) {
    a.updateQueue = null;
    var c = a.stateNode;
    c === null && (c = a.stateNode = new Bi());
    b.forEach(function(b2) {
      var d = Vi.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
var Wi = typeof WeakMap === "function" ? WeakMap : Map;
function Xi(a, b, c) {
  c = wg(c, null);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Yi || (Yi = true, Zi = d);
    Ci(a, b);
  };
  return c;
}
function $i(a, b, c) {
  c = wg(c, null);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if (typeof d === "function") {
    var e = b.value;
    c.payload = function() {
      Ci(a, b);
      return d(e);
    };
  }
  var f = a.stateNode;
  f !== null && typeof f.componentDidCatch === "function" && (c.callback = function() {
    typeof d !== "function" && (aj === null ? aj = /* @__PURE__ */ new Set([this]) : aj.add(this), Ci(a, b));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: c2 !== null ? c2 : "" });
  });
  return c;
}
var bj = Math.ceil, cj = Wa.ReactCurrentDispatcher, dj = Wa.ReactCurrentOwner, V = 0, ej = 8, fj = 16, gj = 32, ti = 0, hj = 1, ij = 2, ui = 3, vi = 4, jj = 5, W = V, T = null, X = null, U = 0, S = ti, kj = null, lj = 1073741823, mj = 1073741823, nj = null, wi = 0, oj = false, Ti = 0, pj = 500, Y = null, Yi = false, Zi = null, aj = null, qj = false, rj = null, sj = 90, tj = null, uj = 0, vj = null, wj = 0;
function Gg() {
  return (W & (fj | gj)) !== V ? 1073741821 - ($f() / 10 | 0) : wj !== 0 ? wj : wj = 1073741821 - ($f() / 10 | 0);
}
function Hg(a, b, c) {
  b = b.mode;
  if ((b & 2) === 0)
    return 1073741823;
  var d = ag();
  if ((b & 4) === 0)
    return d === 99 ? 1073741823 : 1073741822;
  if ((W & fj) !== V)
    return U;
  if (c !== null)
    a = hg(a, c.timeoutMs | 0 || 5e3, 250);
  else
    switch (d) {
      case 99:
        a = 1073741823;
        break;
      case 98:
        a = hg(a, 150, 100);
        break;
      case 97:
      case 96:
        a = hg(a, 5e3, 250);
        break;
      case 95:
        a = 2;
        break;
      default:
        throw Error(u(326));
    }
  T !== null && a === U && --a;
  return a;
}
function Ig(a, b) {
  if (50 < uj)
    throw uj = 0, vj = null, Error(u(185));
  a = xj(a, b);
  if (a !== null) {
    var c = ag();
    b === 1073741823 ? (W & ej) !== V && (W & (fj | gj)) === V ? yj(a) : (Z(a), W === V && gg()) : Z(a);
    (W & 4) === V || c !== 98 && c !== 99 || (tj === null ? tj = /* @__PURE__ */ new Map([[a, b]]) : (c = tj.get(a), (c === void 0 || c > b) && tj.set(a, b)));
  }
}
function xj(a, b) {
  a.expirationTime < b && (a.expirationTime = b);
  var c = a.alternate;
  c !== null && c.expirationTime < b && (c.expirationTime = b);
  var d = a.return, e = null;
  if (d === null && a.tag === 3)
    e = a.stateNode;
  else
    for (; d !== null; ) {
      c = d.alternate;
      d.childExpirationTime < b && (d.childExpirationTime = b);
      c !== null && c.childExpirationTime < b && (c.childExpirationTime = b);
      if (d.return === null && d.tag === 3) {
        e = d.stateNode;
        break;
      }
      d = d.return;
    }
  e !== null && (T === e && (Bg(b), S === vi && xi(e, U)), yi(e, b));
  return e;
}
function zj(a) {
  var b = a.lastExpiredTime;
  if (b !== 0)
    return b;
  b = a.firstPendingTime;
  if (!Aj(a, b))
    return b;
  var c = a.lastPingedTime;
  a = a.nextKnownPendingLevel;
  a = c > a ? c : a;
  return 2 >= a && b !== a ? 0 : a;
}
function Z(a) {
  if (a.lastExpiredTime !== 0)
    a.callbackExpirationTime = 1073741823, a.callbackPriority = 99, a.callbackNode = eg(yj.bind(null, a));
  else {
    var b = zj(a), c = a.callbackNode;
    if (b === 0)
      c !== null && (a.callbackNode = null, a.callbackExpirationTime = 0, a.callbackPriority = 90);
    else {
      var d = Gg();
      b === 1073741823 ? d = 99 : b === 1 || b === 2 ? d = 95 : (d = 10 * (1073741821 - b) - 10 * (1073741821 - d), d = 0 >= d ? 99 : 250 >= d ? 98 : 5250 >= d ? 97 : 95);
      if (c !== null) {
        var e = a.callbackPriority;
        if (a.callbackExpirationTime === b && e >= d)
          return;
        c !== Tf && Kf(c);
      }
      a.callbackExpirationTime = b;
      a.callbackPriority = d;
      b = b === 1073741823 ? eg(yj.bind(null, a)) : dg(d, Bj.bind(null, a), { timeout: 10 * (1073741821 - b) - $f() });
      a.callbackNode = b;
    }
  }
}
function Bj(a, b) {
  wj = 0;
  if (b)
    return b = Gg(), Cj(a, b), Z(a), null;
  var c = zj(a);
  if (c !== 0) {
    b = a.callbackNode;
    if ((W & (fj | gj)) !== V)
      throw Error(u(327));
    Dj();
    a === T && c === U || Ej(a, c);
    if (X !== null) {
      var d = W;
      W |= fj;
      var e = Fj();
      do
        try {
          Gj();
          break;
        } catch (h) {
          Hj(a, h);
        }
      while (1);
      ng();
      W = d;
      cj.current = e;
      if (S === hj)
        throw b = kj, Ej(a, c), xi(a, c), Z(a), b;
      if (X === null)
        switch (e = a.finishedWork = a.current.alternate, a.finishedExpirationTime = c, d = S, T = null, d) {
          case ti:
          case hj:
            throw Error(u(345));
          case ij:
            Cj(a, 2 < c ? 2 : c);
            break;
          case ui:
            xi(a, c);
            d = a.lastSuspendedTime;
            c === d && (a.nextKnownPendingLevel = Ij(e));
            if (lj === 1073741823 && (e = Ti + pj - $f(), 10 < e)) {
              if (oj) {
                var f = a.lastPingedTime;
                if (f === 0 || f >= c) {
                  a.lastPingedTime = c;
                  Ej(a, c);
                  break;
                }
              }
              f = zj(a);
              if (f !== 0 && f !== c)
                break;
              if (d !== 0 && d !== c) {
                a.lastPingedTime = d;
                break;
              }
              a.timeoutHandle = Hd(Jj.bind(null, a), e);
              break;
            }
            Jj(a);
            break;
          case vi:
            xi(a, c);
            d = a.lastSuspendedTime;
            c === d && (a.nextKnownPendingLevel = Ij(e));
            if (oj && (e = a.lastPingedTime, e === 0 || e >= c)) {
              a.lastPingedTime = c;
              Ej(a, c);
              break;
            }
            e = zj(a);
            if (e !== 0 && e !== c)
              break;
            if (d !== 0 && d !== c) {
              a.lastPingedTime = d;
              break;
            }
            mj !== 1073741823 ? d = 10 * (1073741821 - mj) - $f() : lj === 1073741823 ? d = 0 : (d = 10 * (1073741821 - lj) - 5e3, e = $f(), c = 10 * (1073741821 - c) - e, d = e - d, 0 > d && (d = 0), d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * bj(d / 1960)) - d, c < d && (d = c));
            if (10 < d) {
              a.timeoutHandle = Hd(Jj.bind(null, a), d);
              break;
            }
            Jj(a);
            break;
          case jj:
            if (lj !== 1073741823 && nj !== null) {
              f = lj;
              var g = nj;
              d = g.busyMinDurationMs | 0;
              0 >= d ? d = 0 : (e = g.busyDelayMs | 0, f = $f() - (10 * (1073741821 - f) - (g.timeoutMs | 0 || 5e3)), d = f <= e ? 0 : e + d - f);
              if (10 < d) {
                xi(a, c);
                a.timeoutHandle = Hd(Jj.bind(null, a), d);
                break;
              }
            }
            Jj(a);
            break;
          default:
            throw Error(u(329));
        }
      Z(a);
      if (a.callbackNode === b)
        return Bj.bind(null, a);
    }
  }
  return null;
}
function yj(a) {
  var b = a.lastExpiredTime;
  b = b !== 0 ? b : 1073741823;
  if ((W & (fj | gj)) !== V)
    throw Error(u(327));
  Dj();
  a === T && b === U || Ej(a, b);
  if (X !== null) {
    var c = W;
    W |= fj;
    var d = Fj();
    do
      try {
        Kj();
        break;
      } catch (e) {
        Hj(a, e);
      }
    while (1);
    ng();
    W = c;
    cj.current = d;
    if (S === hj)
      throw c = kj, Ej(a, b), xi(a, b), Z(a), c;
    if (X !== null)
      throw Error(u(261));
    a.finishedWork = a.current.alternate;
    a.finishedExpirationTime = b;
    T = null;
    Jj(a);
    Z(a);
  }
  return null;
}
function Lj() {
  if (tj !== null) {
    var a = tj;
    tj = null;
    a.forEach(function(a2, c) {
      Cj(c, a2);
      Z(c);
    });
    gg();
  }
}
function Mj(a, b) {
  var c = W;
  W |= 1;
  try {
    return a(b);
  } finally {
    W = c, W === V && gg();
  }
}
function Nj(a, b) {
  var c = W;
  W &= -2;
  W |= ej;
  try {
    return a(b);
  } finally {
    W = c, W === V && gg();
  }
}
function Ej(a, b) {
  a.finishedWork = null;
  a.finishedExpirationTime = 0;
  var c = a.timeoutHandle;
  c !== -1 && (a.timeoutHandle = -1, Id(c));
  if (X !== null)
    for (c = X.return; c !== null; ) {
      var d = c;
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          d !== null && d !== void 0 && Df();
          break;
        case 3:
          eh();
          H(K);
          H(J);
          break;
        case 5:
          gh(d);
          break;
        case 4:
          eh();
          break;
        case 13:
          H(M);
          break;
        case 19:
          H(M);
          break;
        case 10:
          og(d);
      }
      c = c.return;
    }
  T = a;
  X = Sg(a.current, null);
  U = b;
  S = ti;
  kj = null;
  mj = lj = 1073741823;
  nj = null;
  wi = 0;
  oj = false;
}
function Hj(a, b) {
  do {
    try {
      ng();
      jh.current = sh;
      if (mh)
        for (var c = N.memoizedState; c !== null; ) {
          var d = c.queue;
          d !== null && (d.pending = null);
          c = c.next;
        }
      lh = 0;
      P = O = N = null;
      mh = false;
      if (X === null || X.return === null)
        return S = hj, kj = b, X = null;
      a: {
        var e = a, f = X.return, g = X, h = b;
        b = U;
        g.effectTag |= 2048;
        g.firstEffect = g.lastEffect = null;
        if (h !== null && typeof h === "object" && typeof h.then === "function") {
          var k = h;
          if ((g.mode & 2) === 0) {
            var l2 = g.alternate;
            l2 ? (g.updateQueue = l2.updateQueue, g.memoizedState = l2.memoizedState, g.expirationTime = l2.expirationTime) : (g.updateQueue = null, g.memoizedState = null);
          }
          var m = (M.current & 1) !== 0, p2 = f;
          do {
            var x2;
            if (x2 = p2.tag === 13) {
              var z2 = p2.memoizedState;
              if (z2 !== null)
                x2 = z2.dehydrated !== null ? true : false;
              else {
                var ca = p2.memoizedProps;
                x2 = ca.fallback === void 0 ? false : ca.unstable_avoidThisFallback !== true ? true : m ? false : true;
              }
            }
            if (x2) {
              var D2 = p2.updateQueue;
              if (D2 === null) {
                var t2 = /* @__PURE__ */ new Set();
                t2.add(k);
                p2.updateQueue = t2;
              } else
                D2.add(k);
              if ((p2.mode & 2) === 0) {
                p2.effectTag |= 64;
                g.effectTag &= -2981;
                if (g.tag === 1)
                  if (g.alternate === null)
                    g.tag = 17;
                  else {
                    var y2 = wg(1073741823, null);
                    y2.tag = 2;
                    xg(g, y2);
                  }
                g.expirationTime = 1073741823;
                break a;
              }
              h = void 0;
              g = b;
              var A2 = e.pingCache;
              A2 === null ? (A2 = e.pingCache = new Wi(), h = /* @__PURE__ */ new Set(), A2.set(k, h)) : (h = A2.get(k), h === void 0 && (h = /* @__PURE__ */ new Set(), A2.set(k, h)));
              if (!h.has(g)) {
                h.add(g);
                var q2 = Oj.bind(null, e, k, g);
                k.then(q2, q2);
              }
              p2.effectTag |= 4096;
              p2.expirationTime = b;
              break a;
            }
            p2 = p2.return;
          } while (p2 !== null);
          h = Error((pb(g.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + qb(g));
        }
        S !== jj && (S = ij);
        h = Ai(h, g);
        p2 = f;
        do {
          switch (p2.tag) {
            case 3:
              k = h;
              p2.effectTag |= 4096;
              p2.expirationTime = b;
              var B2 = Xi(p2, k, b);
              yg(p2, B2);
              break a;
            case 1:
              k = h;
              var w2 = p2.type, ub = p2.stateNode;
              if ((p2.effectTag & 64) === 0 && (typeof w2.getDerivedStateFromError === "function" || ub !== null && typeof ub.componentDidCatch === "function" && (aj === null || !aj.has(ub)))) {
                p2.effectTag |= 4096;
                p2.expirationTime = b;
                var vb = $i(p2, k, b);
                yg(p2, vb);
                break a;
              }
          }
          p2 = p2.return;
        } while (p2 !== null);
      }
      X = Pj(X);
    } catch (Xc) {
      b = Xc;
      continue;
    }
    break;
  } while (1);
}
function Fj() {
  var a = cj.current;
  cj.current = sh;
  return a === null ? sh : a;
}
function Ag(a, b) {
  a < lj && 2 < a && (lj = a);
  b !== null && a < mj && 2 < a && (mj = a, nj = b);
}
function Bg(a) {
  a > wi && (wi = a);
}
function Kj() {
  for (; X !== null; )
    X = Qj(X);
}
function Gj() {
  for (; X !== null && !Uf(); )
    X = Qj(X);
}
function Qj(a) {
  var b = Rj(a.alternate, a, U);
  a.memoizedProps = a.pendingProps;
  b === null && (b = Pj(a));
  dj.current = null;
  return b;
}
function Pj(a) {
  X = a;
  do {
    var b = X.alternate;
    a = X.return;
    if ((X.effectTag & 2048) === 0) {
      b = si(b, X, U);
      if (U === 1 || X.childExpirationTime !== 1) {
        for (var c = 0, d = X.child; d !== null; ) {
          var e = d.expirationTime, f = d.childExpirationTime;
          e > c && (c = e);
          f > c && (c = f);
          d = d.sibling;
        }
        X.childExpirationTime = c;
      }
      if (b !== null)
        return b;
      a !== null && (a.effectTag & 2048) === 0 && (a.firstEffect === null && (a.firstEffect = X.firstEffect), X.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = X.firstEffect), a.lastEffect = X.lastEffect), 1 < X.effectTag && (a.lastEffect !== null ? a.lastEffect.nextEffect = X : a.firstEffect = X, a.lastEffect = X));
    } else {
      b = zi(X);
      if (b !== null)
        return b.effectTag &= 2047, b;
      a !== null && (a.firstEffect = a.lastEffect = null, a.effectTag |= 2048);
    }
    b = X.sibling;
    if (b !== null)
      return b;
    X = a;
  } while (X !== null);
  S === ti && (S = jj);
  return null;
}
function Ij(a) {
  var b = a.expirationTime;
  a = a.childExpirationTime;
  return b > a ? b : a;
}
function Jj(a) {
  var b = ag();
  cg(99, Sj.bind(null, a, b));
  return null;
}
function Sj(a, b) {
  do
    Dj();
  while (rj !== null);
  if ((W & (fj | gj)) !== V)
    throw Error(u(327));
  var c = a.finishedWork, d = a.finishedExpirationTime;
  if (c === null)
    return null;
  a.finishedWork = null;
  a.finishedExpirationTime = 0;
  if (c === a.current)
    throw Error(u(177));
  a.callbackNode = null;
  a.callbackExpirationTime = 0;
  a.callbackPriority = 90;
  a.nextKnownPendingLevel = 0;
  var e = Ij(c);
  a.firstPendingTime = e;
  d <= a.lastSuspendedTime ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : d <= a.firstSuspendedTime && (a.firstSuspendedTime = d - 1);
  d <= a.lastPingedTime && (a.lastPingedTime = 0);
  d <= a.lastExpiredTime && (a.lastExpiredTime = 0);
  a === T && (X = T = null, U = 0);
  1 < c.effectTag ? c.lastEffect !== null ? (c.lastEffect.nextEffect = c, e = c.firstEffect) : e = c : e = c.firstEffect;
  if (e !== null) {
    var f = W;
    W |= gj;
    dj.current = null;
    Dd = fd;
    var g = xd();
    if (yd(g)) {
      if ("selectionStart" in g)
        var h = { start: g.selectionStart, end: g.selectionEnd };
      else
        a: {
          h = (h = g.ownerDocument) && h.defaultView || window;
          var k = h.getSelection && h.getSelection();
          if (k && k.rangeCount !== 0) {
            h = k.anchorNode;
            var l2 = k.anchorOffset, m = k.focusNode;
            k = k.focusOffset;
            try {
              h.nodeType, m.nodeType;
            } catch (wb) {
              h = null;
              break a;
            }
            var p2 = 0, x2 = -1, z2 = -1, ca = 0, D2 = 0, t2 = g, y2 = null;
            b:
              for (; ; ) {
                for (var A2; ; ) {
                  t2 !== h || l2 !== 0 && t2.nodeType !== 3 || (x2 = p2 + l2);
                  t2 !== m || k !== 0 && t2.nodeType !== 3 || (z2 = p2 + k);
                  t2.nodeType === 3 && (p2 += t2.nodeValue.length);
                  if ((A2 = t2.firstChild) === null)
                    break;
                  y2 = t2;
                  t2 = A2;
                }
                for (; ; ) {
                  if (t2 === g)
                    break b;
                  y2 === h && ++ca === l2 && (x2 = p2);
                  y2 === m && ++D2 === k && (z2 = p2);
                  if ((A2 = t2.nextSibling) !== null)
                    break;
                  t2 = y2;
                  y2 = t2.parentNode;
                }
                t2 = A2;
              }
            h = x2 === -1 || z2 === -1 ? null : { start: x2, end: z2 };
          } else
            h = null;
        }
      h = h || { start: 0, end: 0 };
    } else
      h = null;
    Ed = { activeElementDetached: null, focusedElem: g, selectionRange: h };
    fd = false;
    Y = e;
    do
      try {
        Tj();
      } catch (wb) {
        if (Y === null)
          throw Error(u(330));
        Ei(Y, wb);
        Y = Y.nextEffect;
      }
    while (Y !== null);
    Y = e;
    do
      try {
        for (g = a, h = b; Y !== null; ) {
          var q2 = Y.effectTag;
          q2 & 16 && Rb(Y.stateNode, "");
          if (q2 & 128) {
            var B2 = Y.alternate;
            if (B2 !== null) {
              var w2 = B2.ref;
              w2 !== null && (typeof w2 === "function" ? w2(null) : w2.current = null);
            }
          }
          switch (q2 & 1038) {
            case 2:
              Pi(Y);
              Y.effectTag &= -3;
              break;
            case 6:
              Pi(Y);
              Y.effectTag &= -3;
              Si(Y.alternate, Y);
              break;
            case 1024:
              Y.effectTag &= -1025;
              break;
            case 1028:
              Y.effectTag &= -1025;
              Si(Y.alternate, Y);
              break;
            case 4:
              Si(Y.alternate, Y);
              break;
            case 8:
              l2 = Y, Mi(g, l2, h), Ni(l2);
          }
          Y = Y.nextEffect;
        }
      } catch (wb) {
        if (Y === null)
          throw Error(u(330));
        Ei(Y, wb);
        Y = Y.nextEffect;
      }
    while (Y !== null);
    w2 = Ed;
    B2 = xd();
    q2 = w2.focusedElem;
    h = w2.selectionRange;
    if (B2 !== q2 && q2 && q2.ownerDocument && wd(q2.ownerDocument.documentElement, q2)) {
      h !== null && yd(q2) && (B2 = h.start, w2 = h.end, w2 === void 0 && (w2 = B2), "selectionStart" in q2 ? (q2.selectionStart = B2, q2.selectionEnd = Math.min(w2, q2.value.length)) : (w2 = (B2 = q2.ownerDocument || document) && B2.defaultView || window, w2.getSelection && (w2 = w2.getSelection(), l2 = q2.textContent.length, g = Math.min(h.start, l2), h = h.end === void 0 ? g : Math.min(h.end, l2), !w2.extend && g > h && (l2 = h, h = g, g = l2), l2 = vd(q2, g), m = vd(q2, h), l2 && m && (w2.rangeCount !== 1 || w2.anchorNode !== l2.node || w2.anchorOffset !== l2.offset || w2.focusNode !== m.node || w2.focusOffset !== m.offset) && (B2 = B2.createRange(), B2.setStart(l2.node, l2.offset), w2.removeAllRanges(), g > h ? (w2.addRange(B2), w2.extend(m.node, m.offset)) : (B2.setEnd(m.node, m.offset), w2.addRange(B2))))));
      B2 = [];
      for (w2 = q2; w2 = w2.parentNode; )
        w2.nodeType === 1 && B2.push({
          element: w2,
          left: w2.scrollLeft,
          top: w2.scrollTop
        });
      typeof q2.focus === "function" && q2.focus();
      for (q2 = 0; q2 < B2.length; q2++)
        w2 = B2[q2], w2.element.scrollLeft = w2.left, w2.element.scrollTop = w2.top;
    }
    fd = !!Dd;
    Ed = Dd = null;
    a.current = c;
    Y = e;
    do
      try {
        for (q2 = a; Y !== null; ) {
          var ub = Y.effectTag;
          ub & 36 && Ji(q2, Y.alternate, Y);
          if (ub & 128) {
            B2 = void 0;
            var vb = Y.ref;
            if (vb !== null) {
              var Xc = Y.stateNode;
              switch (Y.tag) {
                case 5:
                  B2 = Xc;
                  break;
                default:
                  B2 = Xc;
              }
              typeof vb === "function" ? vb(B2) : vb.current = B2;
            }
          }
          Y = Y.nextEffect;
        }
      } catch (wb) {
        if (Y === null)
          throw Error(u(330));
        Ei(Y, wb);
        Y = Y.nextEffect;
      }
    while (Y !== null);
    Y = null;
    Vf();
    W = f;
  } else
    a.current = c;
  if (qj)
    qj = false, rj = a, sj = b;
  else
    for (Y = e; Y !== null; )
      b = Y.nextEffect, Y.nextEffect = null, Y = b;
  b = a.firstPendingTime;
  b === 0 && (aj = null);
  b === 1073741823 ? a === vj ? uj++ : (uj = 0, vj = a) : uj = 0;
  typeof Uj === "function" && Uj(c.stateNode, d);
  Z(a);
  if (Yi)
    throw Yi = false, a = Zi, Zi = null, a;
  if ((W & ej) !== V)
    return null;
  gg();
  return null;
}
function Tj() {
  for (; Y !== null; ) {
    var a = Y.effectTag;
    (a & 256) !== 0 && Gi(Y.alternate, Y);
    (a & 512) === 0 || qj || (qj = true, dg(97, function() {
      Dj();
      return null;
    }));
    Y = Y.nextEffect;
  }
}
function Dj() {
  if (sj !== 90) {
    var a = 97 < sj ? 97 : sj;
    sj = 90;
    return cg(a, Vj);
  }
}
function Vj() {
  if (rj === null)
    return false;
  var a = rj;
  rj = null;
  if ((W & (fj | gj)) !== V)
    throw Error(u(331));
  var b = W;
  W |= gj;
  for (a = a.current.firstEffect; a !== null; ) {
    try {
      var c = a;
      if ((c.effectTag & 512) !== 0)
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            Hi(5, c), Ii(5, c);
        }
    } catch (d) {
      if (a === null)
        throw Error(u(330));
      Ei(a, d);
    }
    c = a.nextEffect;
    a.nextEffect = null;
    a = c;
  }
  W = b;
  gg();
  return true;
}
function Wj(a, b, c) {
  b = Ai(c, b);
  b = Xi(a, b, 1073741823);
  xg(a, b);
  a = xj(a, 1073741823);
  a !== null && Z(a);
}
function Ei(a, b) {
  if (a.tag === 3)
    Wj(a, a, b);
  else
    for (var c = a.return; c !== null; ) {
      if (c.tag === 3) {
        Wj(c, a, b);
        break;
      } else if (c.tag === 1) {
        var d = c.stateNode;
        if (typeof c.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (aj === null || !aj.has(d))) {
          a = Ai(b, a);
          a = $i(c, a, 1073741823);
          xg(c, a);
          c = xj(c, 1073741823);
          c !== null && Z(c);
          break;
        }
      }
      c = c.return;
    }
}
function Oj(a, b, c) {
  var d = a.pingCache;
  d !== null && d.delete(b);
  T === a && U === c ? S === vi || S === ui && lj === 1073741823 && $f() - Ti < pj ? Ej(a, U) : oj = true : Aj(a, c) && (b = a.lastPingedTime, b !== 0 && b < c || (a.lastPingedTime = c, Z(a)));
}
function Vi(a, b) {
  var c = a.stateNode;
  c !== null && c.delete(b);
  b = 0;
  b === 0 && (b = Gg(), b = Hg(b, a, null));
  a = xj(a, b);
  a !== null && Z(a);
}
var Rj;
Rj = function(a, b, c) {
  var d = b.expirationTime;
  if (a !== null) {
    var e = b.pendingProps;
    if (a.memoizedProps !== e || K.current)
      rg = true;
    else {
      if (d < c) {
        rg = false;
        switch (b.tag) {
          case 3:
            hi(b);
            Xh();
            break;
          case 5:
            fh(b);
            if (b.mode & 4 && c !== 1 && e.hidden)
              return b.expirationTime = b.childExpirationTime = 1, null;
            break;
          case 1:
            L(b.type) && Gf(b);
            break;
          case 4:
            dh(b, b.stateNode.containerInfo);
            break;
          case 10:
            d = b.memoizedProps.value;
            e = b.type._context;
            I(jg, e._currentValue);
            e._currentValue = d;
            break;
          case 13:
            if (b.memoizedState !== null) {
              d = b.child.childExpirationTime;
              if (d !== 0 && d >= c)
                return ji(a, b, c);
              I(M, M.current & 1);
              b = $h(a, b, c);
              return b !== null ? b.sibling : null;
            }
            I(M, M.current & 1);
            break;
          case 19:
            d = b.childExpirationTime >= c;
            if ((a.effectTag & 64) !== 0) {
              if (d)
                return mi(a, b, c);
              b.effectTag |= 64;
            }
            e = b.memoizedState;
            e !== null && (e.rendering = null, e.tail = null);
            I(M, M.current);
            if (!d)
              return null;
        }
        return $h(a, b, c);
      }
      rg = false;
    }
  } else
    rg = false;
  b.expirationTime = 0;
  switch (b.tag) {
    case 2:
      d = b.type;
      a !== null && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
      a = b.pendingProps;
      e = Cf(b, J.current);
      qg(b, c);
      e = oh(null, b, d, a, e, c);
      b.effectTag |= 1;
      if (typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0) {
        b.tag = 1;
        b.memoizedState = null;
        b.updateQueue = null;
        if (L(d)) {
          var f = true;
          Gf(b);
        } else
          f = false;
        b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null;
        ug(b);
        var g = d.getDerivedStateFromProps;
        typeof g === "function" && Fg(b, d, g, a);
        e.updater = Jg;
        b.stateNode = e;
        e._reactInternalFiber = b;
        Ng(b, d, a, c);
        b = gi(null, b, d, true, f, c);
      } else
        b.tag = 0, R(null, b, e, c), b = b.child;
      return b;
    case 16:
      a: {
        e = b.elementType;
        a !== null && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
        a = b.pendingProps;
        ob(e);
        if (e._status !== 1)
          throw e._result;
        e = e._result;
        b.type = e;
        f = b.tag = Xj(e);
        a = ig(e, a);
        switch (f) {
          case 0:
            b = di(null, b, e, a, c);
            break a;
          case 1:
            b = fi(null, b, e, a, c);
            break a;
          case 11:
            b = Zh(null, b, e, a, c);
            break a;
          case 14:
            b = ai(null, b, e, ig(e.type, a), d, c);
            break a;
        }
        throw Error(u(306, e, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), di(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), fi(a, b, d, e, c);
    case 3:
      hi(b);
      d = b.updateQueue;
      if (a === null || d === null)
        throw Error(u(282));
      d = b.pendingProps;
      e = b.memoizedState;
      e = e !== null ? e.element : null;
      vg(a, b);
      zg(b, d, null, c);
      d = b.memoizedState.element;
      if (d === e)
        Xh(), b = $h(a, b, c);
      else {
        if (e = b.stateNode.hydrate)
          Ph = Jd(b.stateNode.containerInfo.firstChild), Oh = b, e = Qh = true;
        if (e)
          for (c = Yg(b, null, d, c), b.child = c; c; )
            c.effectTag = c.effectTag & -3 | 1024, c = c.sibling;
        else
          R(a, b, d, c), Xh();
        b = b.child;
      }
      return b;
    case 5:
      return fh(b), a === null && Uh(b), d = b.type, e = b.pendingProps, f = a !== null ? a.memoizedProps : null, g = e.children, Gd(d, e) ? g = null : f !== null && Gd(d, f) && (b.effectTag |= 16), ei(a, b), b.mode & 4 && c !== 1 && e.hidden ? (b.expirationTime = b.childExpirationTime = 1, b = null) : (R(a, b, g, c), b = b.child), b;
    case 6:
      return a === null && Uh(b), null;
    case 13:
      return ji(a, b, c);
    case 4:
      return dh(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Xg(b, null, d, c) : R(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), Zh(a, b, d, e, c);
    case 7:
      return R(a, b, b.pendingProps, c), b.child;
    case 8:
      return R(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return R(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        g = b.memoizedProps;
        f = e.value;
        var h = b.type._context;
        I(jg, h._currentValue);
        h._currentValue = f;
        if (g !== null)
          if (h = g.value, f = $e(h, f) ? 0 : (typeof d._calculateChangedBits === "function" ? d._calculateChangedBits(h, f) : 1073741823) | 0, f === 0) {
            if (g.children === e.children && !K.current) {
              b = $h(a, b, c);
              break a;
            }
          } else
            for (h = b.child, h !== null && (h.return = b); h !== null; ) {
              var k = h.dependencies;
              if (k !== null) {
                g = h.child;
                for (var l2 = k.firstContext; l2 !== null; ) {
                  if (l2.context === d && (l2.observedBits & f) !== 0) {
                    h.tag === 1 && (l2 = wg(c, null), l2.tag = 2, xg(h, l2));
                    h.expirationTime < c && (h.expirationTime = c);
                    l2 = h.alternate;
                    l2 !== null && l2.expirationTime < c && (l2.expirationTime = c);
                    pg(h.return, c);
                    k.expirationTime < c && (k.expirationTime = c);
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g = h.tag === 10 ? h.type === b.type ? null : h.child : h.child;
              if (g !== null)
                g.return = h;
              else
                for (g = h; g !== null; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  h = g.sibling;
                  if (h !== null) {
                    h.return = g.return;
                    g = h;
                    break;
                  }
                  g = g.return;
                }
              h = g;
            }
        R(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, f = b.pendingProps, d = f.children, qg(b, c), e = sg(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, R(a, b, d, c), b.child;
    case 14:
      return e = b.type, f = ig(e, b.pendingProps), f = ig(e.type, f), ai(a, b, e, f, d, c);
    case 15:
      return ci(a, b, b.type, b.pendingProps, d, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), a !== null && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, L(d) ? (a = true, Gf(b)) : a = false, qg(b, c), Lg(b, d, e), Ng(b, d, e, c), gi(null, b, d, true, a, c);
    case 19:
      return mi(a, b, c);
  }
  throw Error(u(156, b.tag));
};
var Uj = null, Li = null;
function Yj(a) {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined")
    return false;
  var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (b.isDisabled || !b.supportsFiber)
    return true;
  try {
    var c = b.inject(a);
    Uj = function(a2) {
      try {
        b.onCommitFiberRoot(c, a2, void 0, (a2.current.effectTag & 64) === 64);
      } catch (e) {
      }
    };
    Li = function(a2) {
      try {
        b.onCommitFiberUnmount(c, a2);
      } catch (e) {
      }
    };
  } catch (d) {
  }
  return true;
}
function Zj(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.effectTag = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childExpirationTime = this.expirationTime = 0;
  this.alternate = null;
}
function Sh(a, b, c, d) {
  return new Zj(a, b, c, d);
}
function bi(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function Xj(a) {
  if (typeof a === "function")
    return bi(a) ? 1 : 0;
  if (a !== void 0 && a !== null) {
    a = a.$$typeof;
    if (a === gb)
      return 11;
    if (a === jb)
      return 14;
  }
  return 2;
}
function Sg(a, b) {
  var c = a.alternate;
  c === null ? (c = Sh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.effectTag = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
  c.childExpirationTime = a.childExpirationTime;
  c.expirationTime = a.expirationTime;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = b === null ? null : {
    expirationTime: b.expirationTime,
    firstContext: b.firstContext,
    responders: b.responders
  };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Ug(a, b, c, d, e, f) {
  var g = 2;
  d = a;
  if (typeof a === "function")
    bi(a) && (g = 1);
  else if (typeof a === "string")
    g = 5;
  else
    a:
      switch (a) {
        case ab:
          return Wg(c.children, e, f, b);
        case fb:
          g = 8;
          e |= 7;
          break;
        case bb:
          g = 8;
          e |= 1;
          break;
        case cb:
          return a = Sh(12, c, b, e | 8), a.elementType = cb, a.type = cb, a.expirationTime = f, a;
        case hb:
          return a = Sh(13, c, b, e), a.type = hb, a.elementType = hb, a.expirationTime = f, a;
        case ib:
          return a = Sh(19, c, b, e), a.elementType = ib, a.expirationTime = f, a;
        default:
          if (typeof a === "object" && a !== null)
            switch (a.$$typeof) {
              case db:
                g = 10;
                break a;
              case eb:
                g = 9;
                break a;
              case gb:
                g = 11;
                break a;
              case jb:
                g = 14;
                break a;
              case kb:
                g = 16;
                d = null;
                break a;
              case lb:
                g = 22;
                break a;
            }
          throw Error(u(130, a == null ? a : typeof a, ""));
      }
  b = Sh(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.expirationTime = f;
  return b;
}
function Wg(a, b, c, d) {
  a = Sh(7, a, d, b);
  a.expirationTime = c;
  return a;
}
function Tg(a, b, c) {
  a = Sh(6, a, null, b);
  a.expirationTime = c;
  return a;
}
function Vg(a, b, c) {
  b = Sh(4, a.children !== null ? a.children : [], a.key, b);
  b.expirationTime = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function ak(a, b, c) {
  this.tag = b;
  this.current = null;
  this.containerInfo = a;
  this.pingCache = this.pendingChildren = null;
  this.finishedExpirationTime = 0;
  this.finishedWork = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c;
  this.callbackNode = null;
  this.callbackPriority = 90;
  this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
}
function Aj(a, b) {
  var c = a.firstSuspendedTime;
  a = a.lastSuspendedTime;
  return c !== 0 && c >= b && a <= b;
}
function xi(a, b) {
  var c = a.firstSuspendedTime, d = a.lastSuspendedTime;
  c < b && (a.firstSuspendedTime = b);
  if (d > b || c === 0)
    a.lastSuspendedTime = b;
  b <= a.lastPingedTime && (a.lastPingedTime = 0);
  b <= a.lastExpiredTime && (a.lastExpiredTime = 0);
}
function yi(a, b) {
  b > a.firstPendingTime && (a.firstPendingTime = b);
  var c = a.firstSuspendedTime;
  c !== 0 && (b >= c ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : b >= a.lastSuspendedTime && (a.lastSuspendedTime = b + 1), b > a.nextKnownPendingLevel && (a.nextKnownPendingLevel = b));
}
function Cj(a, b) {
  var c = a.lastExpiredTime;
  if (c === 0 || c > b)
    a.lastExpiredTime = b;
}
function bk(a, b, c, d) {
  var e = b.current, f = Gg(), g = Dg.suspense;
  f = Hg(f, e, g);
  a:
    if (c) {
      c = c._reactInternalFiber;
      b: {
        if (dc(c) !== c || c.tag !== 1)
          throw Error(u(170));
        var h = c;
        do {
          switch (h.tag) {
            case 3:
              h = h.stateNode.context;
              break b;
            case 1:
              if (L(h.type)) {
                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h = h.return;
        } while (h !== null);
        throw Error(u(171));
      }
      if (c.tag === 1) {
        var k = c.type;
        if (L(k)) {
          c = Ff(c, k, h);
          break a;
        }
      }
      c = h;
    } else
      c = Af;
  b.context === null ? b.context = c : b.pendingContext = c;
  b = wg(f, g);
  b.payload = { element: a };
  d = d === void 0 ? null : d;
  d !== null && (b.callback = d);
  xg(e, b);
  Ig(e, f);
  return f;
}
function ck(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function dk(a, b) {
  a = a.memoizedState;
  a !== null && a.dehydrated !== null && a.retryTime < b && (a.retryTime = b);
}
function ek(a, b) {
  dk(a, b);
  (a = a.alternate) && dk(a, b);
}
function fk(a, b, c) {
  c = c != null && c.hydrate === true;
  var d = new ak(a, b, c), e = Sh(3, null, null, b === 2 ? 7 : b === 1 ? 3 : 0);
  d.current = e;
  e.stateNode = d;
  ug(e);
  a[Od] = d.current;
  c && b !== 0 && Jc(a, a.nodeType === 9 ? a : a.ownerDocument);
  this._internalRoot = d;
}
fk.prototype.render = function(a) {
  bk(a, this._internalRoot, null, null);
};
fk.prototype.unmount = function() {
  var a = this._internalRoot, b = a.containerInfo;
  bk(null, a, null, function() {
    b[Od] = null;
  });
};
function gk(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
}
function hk(a, b) {
  b || (b = a ? a.nodeType === 9 ? a.documentElement : a.firstChild : null, b = !(!b || b.nodeType !== 1 || !b.hasAttribute("data-reactroot")));
  if (!b)
    for (var c; c = a.lastChild; )
      a.removeChild(c);
  return new fk(a, 0, b ? { hydrate: true } : void 0);
}
function ik(a, b, c, d, e) {
  var f = c._reactRootContainer;
  if (f) {
    var g = f._internalRoot;
    if (typeof e === "function") {
      var h = e;
      e = function() {
        var a2 = ck(g);
        h.call(a2);
      };
    }
    bk(b, g, a, e);
  } else {
    f = c._reactRootContainer = hk(c, d);
    g = f._internalRoot;
    if (typeof e === "function") {
      var k = e;
      e = function() {
        var a2 = ck(g);
        k.call(a2);
      };
    }
    Nj(function() {
      bk(b, g, a, e);
    });
  }
  return ck(g);
}
function jk(a, b, c) {
  var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: $a, key: d == null ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
wc = function(a) {
  if (a.tag === 13) {
    var b = hg(Gg(), 150, 100);
    Ig(a, b);
    ek(a, b);
  }
};
xc = function(a) {
  a.tag === 13 && (Ig(a, 3), ek(a, 3));
};
yc = function(a) {
  if (a.tag === 13) {
    var b = Gg();
    b = Hg(b, a, null);
    Ig(a, b);
    ek(a, b);
  }
};
za = function(a, b, c) {
  switch (b) {
    case "input":
      Cb(a, c);
      b = c.name;
      if (c.type === "radio" && b != null) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Qd(d);
            if (!e)
              throw Error(u(90));
            yb(d);
            Cb(d, e);
          }
        }
      }
      break;
    case "textarea":
      Kb(a, c);
      break;
    case "select":
      b = c.value, b != null && Hb(a, !!c.multiple, b, false);
  }
};
Fa = Mj;
Ga = function(a, b, c, d, e) {
  var f = W;
  W |= 4;
  try {
    return cg(98, a.bind(null, b, c, d, e));
  } finally {
    W = f, W === V && gg();
  }
};
Ha = function() {
  (W & (1 | fj | gj)) === V && (Lj(), Dj());
};
Ia = function(a, b) {
  var c = W;
  W |= 2;
  try {
    return a(b);
  } finally {
    W = c, W === V && gg();
  }
};
function kk(a, b) {
  var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!gk(b))
    throw Error(u(200));
  return jk(a, b, null, c);
}
var lk = { Events: [Nc, Pd, Qd, xa, ta, Xd, function(a) {
  jc(a, Wd);
}, Da, Ea, id, mc, Dj, { current: false }] };
(function(a) {
  var b = a.findFiberByHostInstance;
  return Yj(n({}, a, { overrideHookState: null, overrideProps: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Wa.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
    a2 = hc(a2);
    return a2 === null ? null : a2.stateNode;
  }, findFiberByHostInstance: function(a2) {
    return b ? b(a2) : null;
  }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null }));
})({
  findFiberByHostInstance: tc,
  bundleType: 0,
  version: "16.14.0",
  rendererPackageName: "react-dom"
});
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lk;
reactDom_production_min.createPortal = kk;
reactDom_production_min.findDOMNode = function(a) {
  if (a == null)
    return null;
  if (a.nodeType === 1)
    return a;
  var b = a._reactInternalFiber;
  if (b === void 0) {
    if (typeof a.render === "function")
      throw Error(u(188));
    throw Error(u(268, Object.keys(a)));
  }
  a = hc(b);
  a = a === null ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a, b) {
  if ((W & (fj | gj)) !== V)
    throw Error(u(187));
  var c = W;
  W |= 1;
  try {
    return cg(99, a.bind(null, b));
  } finally {
    W = c, gg();
  }
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!gk(b))
    throw Error(u(200));
  return ik(null, a, b, true, c);
};
reactDom_production_min.render = function(a, b, c) {
  if (!gk(b))
    throw Error(u(200));
  return ik(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!gk(a))
    throw Error(u(40));
  return a._reactRootContainer ? (Nj(function() {
    ik(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[Od] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Mj;
reactDom_production_min.unstable_createPortal = function(a, b) {
  return kk(a, b, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!gk(c))
    throw Error(u(200));
  if (a == null || a._reactInternalFiber === void 0)
    throw Error(u(38));
  return ik(a, b, c, false, d);
};
reactDom_production_min.version = "16.14.0";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function isNodeFound(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  }
  if (current.correspondingElement) {
    return current.correspondingElement.classList.contains(ignoreClass);
  }
  return current.classList.contains(ignoreClass);
}
function findHighest(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  }
  while (current.parentNode || current.host) {
    if (current.parentNode && isNodeFound(current, componentNode, ignoreClass)) {
      return true;
    }
    current = current.parentNode || current.host;
  }
  return current;
}
function clickedScrollbar(evt) {
  return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
}
var testPassiveEventSupport = function testPassiveEventSupport2() {
  if (typeof window === "undefined" || typeof window.addEventListener !== "function") {
    return;
  }
  var passive = false;
  var options = Object.defineProperty({}, "passive", {
    get: function get() {
      passive = true;
    }
  });
  var noop = function noop2() {
  };
  window.addEventListener("testPassiveEventSupport", noop, options);
  window.removeEventListener("testPassiveEventSupport", noop, options);
  return passive;
};
function autoInc(seed) {
  if (seed === void 0) {
    seed = 0;
  }
  return function() {
    return ++seed;
  };
}
var uid = autoInc();
var passiveEventSupport;
var handlersMap = {};
var enabledInstances = {};
var touchEvents = ["touchstart", "touchmove"];
var IGNORE_CLASS_NAME = "ignore-react-onclickoutside";
function getEventHandlerOptions(instance, eventName) {
  var handlerOptions = null;
  var isTouchEvent = touchEvents.indexOf(eventName) !== -1;
  if (isTouchEvent && passiveEventSupport) {
    handlerOptions = {
      passive: !instance.props.preventDefault
    };
  }
  return handlerOptions;
}
function onClickOutsideHOC(WrappedComponent, config) {
  var _class, _temp;
  var componentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
  return _temp = _class = /* @__PURE__ */ function(_Component) {
    _inheritsLoose(onClickOutside, _Component);
    function onClickOutside(props) {
      var _this;
      _this = _Component.call(this, props) || this;
      _this.__outsideClickHandler = function(event) {
        if (typeof _this.__clickOutsideHandlerProp === "function") {
          _this.__clickOutsideHandlerProp(event);
          return;
        }
        var instance = _this.getInstance();
        if (typeof instance.props.handleClickOutside === "function") {
          instance.props.handleClickOutside(event);
          return;
        }
        if (typeof instance.handleClickOutside === "function") {
          instance.handleClickOutside(event);
          return;
        }
        throw new Error("WrappedComponent: " + componentName + " lacks a handleClickOutside(event) function for processing outside click events.");
      };
      _this.__getComponentNode = function() {
        var instance = _this.getInstance();
        if (config && typeof config.setClickOutsideRef === "function") {
          return config.setClickOutsideRef()(instance);
        }
        if (typeof instance.setClickOutsideRef === "function") {
          return instance.setClickOutsideRef();
        }
        return reactDom.exports.findDOMNode(instance);
      };
      _this.enableOnClickOutside = function() {
        if (typeof document === "undefined" || enabledInstances[_this._uid]) {
          return;
        }
        if (typeof passiveEventSupport === "undefined") {
          passiveEventSupport = testPassiveEventSupport();
        }
        enabledInstances[_this._uid] = true;
        var events = _this.props.eventTypes;
        if (!events.forEach) {
          events = [events];
        }
        handlersMap[_this._uid] = function(event) {
          if (_this.componentNode === null)
            return;
          if (_this.props.preventDefault) {
            event.preventDefault();
          }
          if (_this.props.stopPropagation) {
            event.stopPropagation();
          }
          if (_this.props.excludeScrollbar && clickedScrollbar(event))
            return;
          var current = event.composed && event.composedPath && event.composedPath().shift() || event.target;
          if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
            return;
          }
          _this.__outsideClickHandler(event);
        };
        events.forEach(function(eventName) {
          document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_assertThisInitialized(_this), eventName));
        });
      };
      _this.disableOnClickOutside = function() {
        delete enabledInstances[_this._uid];
        var fn = handlersMap[_this._uid];
        if (fn && typeof document !== "undefined") {
          var events = _this.props.eventTypes;
          if (!events.forEach) {
            events = [events];
          }
          events.forEach(function(eventName) {
            return document.removeEventListener(eventName, fn, getEventHandlerOptions(_assertThisInitialized(_this), eventName));
          });
          delete handlersMap[_this._uid];
        }
      };
      _this.getRef = function(ref) {
        return _this.instanceRef = ref;
      };
      _this._uid = uid();
      return _this;
    }
    var _proto = onClickOutside.prototype;
    _proto.getInstance = function getInstance() {
      if (WrappedComponent.prototype && !WrappedComponent.prototype.isReactComponent) {
        return this;
      }
      var ref = this.instanceRef;
      return ref.getInstance ? ref.getInstance() : ref;
    };
    _proto.componentDidMount = function componentDidMount() {
      if (typeof document === "undefined" || !document.createElement) {
        return;
      }
      var instance = this.getInstance();
      if (config && typeof config.handleClickOutside === "function") {
        this.__clickOutsideHandlerProp = config.handleClickOutside(instance);
        if (typeof this.__clickOutsideHandlerProp !== "function") {
          throw new Error("WrappedComponent: " + componentName + " lacks a function for processing outside click events specified by the handleClickOutside config option.");
        }
      }
      this.componentNode = this.__getComponentNode();
      if (this.props.disableOnClickOutside)
        return;
      this.enableOnClickOutside();
    };
    _proto.componentDidUpdate = function componentDidUpdate() {
      this.componentNode = this.__getComponentNode();
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.disableOnClickOutside();
    };
    _proto.render = function render() {
      var _this$props = this.props;
      _this$props.excludeScrollbar;
      var props = _objectWithoutPropertiesLoose(_this$props, ["excludeScrollbar"]);
      if (WrappedComponent.prototype && WrappedComponent.prototype.isReactComponent) {
        props.ref = this.getRef;
      } else {
        props.wrappedRef = this.getRef;
      }
      props.disableOnClickOutside = this.disableOnClickOutside;
      props.enableOnClickOutside = this.enableOnClickOutside;
      return react.exports.createElement(WrappedComponent, props);
    };
    return onClickOutside;
  }(react.exports.Component), _class.displayName = "OnClickOutside(" + componentName + ")", _class.defaultProps = {
    eventTypes: ["mousedown", "touchstart"],
    excludeScrollbar: config && config.excludeScrollbar || false,
    outsideClickIgnoreClass: IGNORE_CLASS_NAME,
    preventDefault: false,
    stopPropagation: false
  }, _class.getClass = function() {
    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
  }, _temp;
}
const viewModes = {
  YEARS: "years",
  MONTHS: "months",
  DAYS: "days",
  TIME: "time"
};
const TYPES = PropTypes;
const nofn = function() {
};
const datetype = TYPES.oneOfType([TYPES.instanceOf(moment), TYPES.instanceOf(Date), TYPES.string]);
class Datetime extends React.Component {
  constructor(props) {
    super(props);
    __publicField(this, "_renderCalendar", () => {
      const props = this.props;
      const state = this.state;
      let viewProps = {
        viewDate: state.viewDate.clone(),
        selectedDate: this.getSelectedDate(),
        isValidDate: props.isValidDate,
        updateDate: this._updateDate,
        navigate: this._viewNavigate,
        moment,
        showView: this._showView
      };
      switch (state.currentView) {
        case viewModes.YEARS:
          viewProps.renderYear = props.renderYear;
          return /* @__PURE__ */ React.createElement(YearsView, __spreadValues({}, viewProps));
        case viewModes.MONTHS:
          viewProps.renderMonth = props.renderMonth;
          return /* @__PURE__ */ React.createElement(MonthsView, __spreadValues({}, viewProps));
        case viewModes.DAYS:
          viewProps.renderDay = props.renderDay;
          viewProps.timeFormat = this.getFormat("time");
          return /* @__PURE__ */ React.createElement(DaysView, __spreadValues({}, viewProps));
        default:
          viewProps.dateFormat = this.getFormat("date");
          viewProps.timeFormat = this.getFormat("time");
          viewProps.timeConstraints = props.timeConstraints;
          viewProps.setTime = this._setTime;
          return /* @__PURE__ */ React.createElement(TimeView, __spreadValues({}, viewProps));
      }
    });
    __publicField(this, "_showView", (view, date) => {
      const d = (date || this.state.viewDate).clone();
      const nextView = this.props.onBeforeNavigate(view, this.state.currentView, d);
      if (nextView && this.state.currentView !== nextView) {
        this.props.onNavigate(nextView);
        this.setState({ currentView: nextView });
      }
    });
    __publicField(this, "viewToMethod", { days: "date", months: "month", years: "year" });
    __publicField(this, "nextView", { days: "time", months: "days", years: "months" });
    __publicField(this, "_updateDate", (e) => {
      let state = this.state;
      let currentView = state.currentView;
      let updateOnView = this.getUpdateOn(this.getFormat("date"));
      let viewDate = this.state.viewDate.clone();
      viewDate[this.viewToMethod[currentView]](parseInt(e.target.getAttribute("data-value"), 10));
      if (currentView === "days") {
        viewDate.month(parseInt(e.target.getAttribute("data-month"), 10));
        viewDate.year(parseInt(e.target.getAttribute("data-year"), 10));
      }
      let update = { viewDate };
      if (currentView === updateOnView) {
        update.selectedDate = viewDate.clone();
        update.inputValue = viewDate.format(this.getFormat("datetime"));
        if (this.props.open === void 0 && this.props.input && this.props.closeOnSelect) {
          this._closeCalendar();
        }
        this.props.onChange(viewDate.clone());
      } else {
        this._showView(this.nextView[currentView], viewDate);
      }
      this.setState(update);
    });
    __publicField(this, "_viewNavigate", (modifier, unit) => {
      let viewDate = this.state.viewDate.clone();
      viewDate.add(modifier, unit);
      if (modifier > 0) {
        this.props.onNavigateForward(modifier, unit);
      } else {
        this.props.onNavigateBack(-modifier, unit);
      }
      this.setState({ viewDate });
    });
    __publicField(this, "_setTime", (type, value) => {
      let date = (this.getSelectedDate() || this.state.viewDate).clone();
      date[type](value);
      if (!this.props.value) {
        this.setState({
          selectedDate: date,
          viewDate: date.clone(),
          inputValue: date.format(this.getFormat("datetime"))
        });
      }
      this.props.onChange(date);
    });
    __publicField(this, "_openCalendar", () => {
      if (this.isOpen())
        return;
      this.setState({ open: true }, this.props.onOpen);
    });
    __publicField(this, "_closeCalendar", () => {
      if (!this.isOpen())
        return;
      this.setState({ open: false }, () => {
        this.props.onClose(this.state.selectedDate || this.state.inputValue);
      });
    });
    __publicField(this, "_handleClickOutside", () => {
      let props = this.props;
      if (props.input && this.state.open && props.open === void 0 && props.closeOnClickOutside) {
        this._closeCalendar();
      }
    });
    __publicField(this, "_onInputFocus", (e) => {
      if (!this.callHandler(this.props.inputProps.onFocus, e))
        return;
      this._openCalendar();
    });
    __publicField(this, "_onInputChange", (e) => {
      if (!this.callHandler(this.props.inputProps.onChange, e))
        return;
      const value = e.target ? e.target.value : e;
      const localMoment = this.localMoment(value, this.getFormat("datetime"));
      let update = { inputValue: value };
      if (localMoment.isValid()) {
        update.selectedDate = localMoment;
        update.viewDate = localMoment.clone().startOf("month");
      } else {
        update.selectedDate = null;
      }
      this.setState(update, () => {
        this.props.onChange(localMoment.isValid() ? localMoment : this.state.inputValue);
      });
    });
    __publicField(this, "_onInputKeyDown", (e) => {
      if (!this.callHandler(this.props.inputProps.onKeyDown, e))
        return;
      if (e.which === 9 && this.props.closeOnTab) {
        this._closeCalendar();
      }
    });
    __publicField(this, "_onInputClick", (e) => {
      if (!this.callHandler(this.props.inputProps.onClick, e))
        return;
      this._openCalendar();
    });
    this.state = this.getInitialState();
  }
  render() {
    return /* @__PURE__ */ React.createElement(ClickableWrapper, {
      className: this.getClassName(),
      onClickOut: this._handleClickOutside
    }, this.renderInput(), /* @__PURE__ */ React.createElement("div", {
      className: "rdtPicker"
    }, this.renderView()));
  }
  renderInput() {
    if (!this.props.input)
      return;
    const finalInputProps = __spreadProps(__spreadValues({
      type: "text",
      className: "form-control",
      value: this.getInputValue()
    }, this.props.inputProps), {
      onFocus: this._onInputFocus,
      onChange: this._onInputChange,
      onKeyDown: this._onInputKeyDown,
      onClick: this._onInputClick
    });
    if (this.props.renderInput) {
      return /* @__PURE__ */ React.createElement("div", null, this.props.renderInput(finalInputProps, this._openCalendar, this._closeCalendar));
    }
    return /* @__PURE__ */ React.createElement("input", __spreadValues({}, finalInputProps));
  }
  renderView() {
    return this.props.renderView(this.state.currentView, this._renderCalendar);
  }
  getInitialState() {
    let props = this.props;
    let inputFormat = this.getFormat("datetime");
    let selectedDate = this.parseDate(props.value || props.initialValue, inputFormat);
    this.checkTZ();
    return {
      open: !props.input,
      currentView: props.initialViewMode || this.getInitialView(),
      viewDate: this.getInitialViewDate(selectedDate),
      selectedDate: selectedDate && selectedDate.isValid() ? selectedDate : void 0,
      inputValue: this.getInitialInputValue(selectedDate)
    };
  }
  getInitialViewDate(selectedDate) {
    const propDate = this.props.initialViewDate;
    let viewDate;
    if (propDate) {
      viewDate = this.parseDate(propDate, this.getFormat("datetime"));
      if (viewDate && viewDate.isValid()) {
        return viewDate;
      } else {
        log('The initialViewDated given "' + propDate + '" is not valid. Using current date instead.');
      }
    } else if (selectedDate && selectedDate.isValid()) {
      return selectedDate.clone();
    }
    return this.getInitialDate();
  }
  getInitialDate() {
    let m = this.localMoment();
    m.hour(0).minute(0).second(0).millisecond(0);
    return m;
  }
  getInitialView() {
    const dateFormat = this.getFormat("date");
    return dateFormat ? this.getUpdateOn(dateFormat) : viewModes.TIME;
  }
  parseDate(date, dateFormat) {
    let parsedDate;
    if (date && typeof date === "string")
      parsedDate = this.localMoment(date, dateFormat);
    else if (date)
      parsedDate = this.localMoment(date);
    if (parsedDate && !parsedDate.isValid())
      parsedDate = null;
    return parsedDate;
  }
  getClassName() {
    let cn = "rdt";
    let props = this.props;
    let propCn = props.className;
    if (Array.isArray(propCn)) {
      cn += " " + propCn.join(" ");
    } else if (propCn) {
      cn += " " + propCn;
    }
    if (!props.input) {
      cn += " rdtStatic";
    }
    if (this.isOpen()) {
      cn += " rdtOpen";
    }
    return cn;
  }
  isOpen() {
    return !this.props.input || (this.props.open === void 0 ? this.state.open : this.props.open);
  }
  getUpdateOn(dateFormat) {
    if (this.props.updateOnView) {
      return this.props.updateOnView;
    }
    if (dateFormat.match(/[lLD]/)) {
      return viewModes.DAYS;
    }
    if (dateFormat.indexOf("M") !== -1) {
      return viewModes.MONTHS;
    }
    if (dateFormat.indexOf("Y") !== -1) {
      return viewModes.YEARS;
    }
    return viewModes.DAYS;
  }
  getLocaleData() {
    let p2 = this.props;
    return this.localMoment(p2.value || p2.defaultValue || new Date()).localeData();
  }
  getDateFormat() {
    const locale = this.getLocaleData();
    let format = this.props.dateFormat;
    if (format === true)
      return locale.longDateFormat("L");
    if (format)
      return format;
    return "";
  }
  getTimeFormat() {
    const locale = this.getLocaleData();
    let format = this.props.timeFormat;
    if (format === true) {
      return locale.longDateFormat("LT");
    }
    return format || "";
  }
  getFormat(type) {
    if (type === "date") {
      return this.getDateFormat();
    } else if (type === "time") {
      return this.getTimeFormat();
    }
    let dateFormat = this.getDateFormat();
    let timeFormat = this.getTimeFormat();
    return dateFormat && timeFormat ? dateFormat + " " + timeFormat : dateFormat || timeFormat;
  }
  updateTime(op, amount, type, toSelected) {
    let update = {};
    const date = toSelected ? "selectedDate" : "viewDate";
    update[date] = this.state[date].clone()[op](amount, type);
    this.setState(update);
  }
  localMoment(date, format, props) {
    props = props || this.props;
    let m = null;
    if (props.utc) {
      m = moment.utc(date, format, props.strictParsing);
    } else if (props.displayTimeZone) {
      m = moment.tz(date, format, props.displayTimeZone);
    } else {
      m = moment(date, format, props.strictParsing);
    }
    if (props.locale)
      m.locale(props.locale);
    return m;
  }
  checkTZ() {
    const { displayTimeZone } = this.props;
    if (displayTimeZone && !this.tzWarning && !moment.tz) {
      this.tzWarning = true;
      log('displayTimeZone prop with value "' + displayTimeZone + '" is used but moment.js timezone is not loaded.', "error");
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps === this.props)
      return;
    let needsUpdate = false;
    let thisProps = this.props;
    ["locale", "utc", "displayZone", "dateFormat", "timeFormat"].forEach(function(p2) {
      prevProps[p2] !== thisProps[p2] && (needsUpdate = true);
    });
    if (needsUpdate) {
      this.regenerateDates();
    }
    if (thisProps.value && thisProps.value !== prevProps.value) {
      this.setViewDate(thisProps.value);
    }
    this.checkTZ();
  }
  regenerateDates() {
    const props = this.props;
    let viewDate = this.state.viewDate.clone();
    let selectedDate = this.state.selectedDate && this.state.selectedDate.clone();
    if (props.locale) {
      viewDate.locale(props.locale);
      selectedDate && selectedDate.locale(props.locale);
    }
    if (props.utc) {
      viewDate.utc();
      selectedDate && selectedDate.utc();
    } else if (props.displayTimeZone) {
      viewDate.tz(props.displayTimeZone);
      selectedDate && selectedDate.tz(props.displayTimeZone);
    } else {
      viewDate.locale();
      selectedDate && selectedDate.locale();
    }
    let update = { viewDate, selectedDate };
    if (selectedDate && selectedDate.isValid()) {
      update.inputValue = selectedDate.format(this.getFormat("datetime"));
    }
    this.setState(update);
  }
  getSelectedDate() {
    if (this.props.value === void 0)
      return this.state.selectedDate;
    let selectedDate = this.parseDate(this.props.value, this.getFormat("datetime"));
    return selectedDate && selectedDate.isValid() ? selectedDate : false;
  }
  getInitialInputValue(selectedDate) {
    const props = this.props;
    if (props.inputProps.value)
      return props.inputProps.value;
    if (selectedDate && selectedDate.isValid())
      return selectedDate.format(this.getFormat("datetime"));
    if (props.value && typeof props.value === "string")
      return props.value;
    if (props.initialValue && typeof props.initialValue === "string")
      return props.initialValue;
    return "";
  }
  getInputValue() {
    let selectedDate = this.getSelectedDate();
    return selectedDate ? selectedDate.format(this.getFormat("datetime")) : this.state.inputValue;
  }
  setViewDate(date) {
    let logError = function() {
      return log("Invalid date passed to the `setViewDate` method: " + date);
    };
    if (!date)
      return logError();
    let viewDate;
    if (typeof date === "string") {
      viewDate = this.localMoment(date, this.getFormat("datetime"));
    } else {
      viewDate = this.localMoment(date);
    }
    if (!viewDate || !viewDate.isValid())
      return logError();
    this.setState({ viewDate });
  }
  navigate(mode) {
    this._showView(mode);
  }
  callHandler(method, e) {
    if (!method)
      return true;
    return method(e) !== false;
  }
}
__publicField(Datetime, "propTypes", {
  value: datetype,
  initialValue: datetype,
  initialViewDate: datetype,
  initialViewMode: TYPES.oneOf([viewModes.YEARS, viewModes.MONTHS, viewModes.DAYS, viewModes.TIME]),
  onOpen: TYPES.func,
  onClose: TYPES.func,
  onChange: TYPES.func,
  onNavigate: TYPES.func,
  onBeforeNavigate: TYPES.func,
  onNavigateBack: TYPES.func,
  onNavigateForward: TYPES.func,
  updateOnView: TYPES.string,
  locale: TYPES.string,
  utc: TYPES.bool,
  displayTimeZone: TYPES.string,
  input: TYPES.bool,
  dateFormat: TYPES.oneOfType([TYPES.string, TYPES.bool]),
  timeFormat: TYPES.oneOfType([TYPES.string, TYPES.bool]),
  inputProps: TYPES.object,
  timeConstraints: TYPES.object,
  isValidDate: TYPES.func,
  open: TYPES.bool,
  strictParsing: TYPES.bool,
  closeOnSelect: TYPES.bool,
  closeOnTab: TYPES.bool,
  renderView: TYPES.func,
  renderInput: TYPES.func,
  renderDay: TYPES.func,
  renderMonth: TYPES.func,
  renderYear: TYPES.func
});
__publicField(Datetime, "defaultProps", {
  onOpen: nofn,
  onClose: nofn,
  onCalendarOpen: nofn,
  onCalendarClose: nofn,
  onChange: nofn,
  onNavigate: nofn,
  onBeforeNavigate: function(next) {
    return next;
  },
  onNavigateBack: nofn,
  onNavigateForward: nofn,
  dateFormat: true,
  timeFormat: true,
  utc: false,
  className: "",
  input: true,
  inputProps: {},
  timeConstraints: {},
  isValidDate: function() {
    return true;
  },
  strictParsing: true,
  closeOnSelect: false,
  closeOnTab: true,
  closeOnClickOutside: true,
  renderView: (_, renderFunc) => renderFunc()
});
__publicField(Datetime, "moment", moment);
function log(message, method) {
  let con = typeof window !== "undefined" && window.console;
  if (!con)
    return;
  if (!method) {
    method = "warn";
  }
  con[method]("***react-datetime:" + message);
}
class ClickOutBase extends React.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "container", React.createRef());
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: this.props.className,
      ref: this.container
    }, this.props.children);
  }
  handleClickOutside(e) {
    this.props.onClickOut(e);
  }
  setClickOutsideRef() {
    return this.container.current;
  }
}
const ClickableWrapper = onClickOutsideHOC(ClickOutBase);
export { Datetime as default };
