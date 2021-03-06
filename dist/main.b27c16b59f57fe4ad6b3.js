/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(18);
var IE8_DOM_DEFINE = __webpack_require__(19);
var toPrimitive = __webpack_require__(21);
var dP = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _application = __webpack_require__(7);

document.addEventListener('DOMContentLoaded', function () {
  (0, _application.render)(_application.Application, document.getElementById('app'));
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(8);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
exports.Application = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(9));

var _createClass2 = _interopRequireDefault(__webpack_require__(10));

var Application =
/*#__PURE__*/
function () {
  function Application() {
    var _this = this;

    (0, _classCallCheck2.default)(this, Application);
    Object.defineProperty(this, "root", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "title", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 'Web Components'
    });
    Object.defineProperty(this, "container", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "errorMode", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "loadedApp", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "handleInputChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        if (event.target.id === 'title') {
          _this.title = event.target.value;

          _this.updateLoadedApp();

          return;
        }

        if (event.target.name !== 'errorMode') {
          return false;
        }

        _this.errorMode = event.target.value === '1';

        _this.updateLoadedApp();
      }
    });
    Object.defineProperty(this, "handleButtonClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        if (event.target.nodeName !== 'BUTTON') {
          return;
        }

        _this.loadApp(event.target.dataset.app);
      }
    });
  }

  (0, _createClass2.default)(Application, [{
    key: "bootstrap",
    value: function bootstrap(root) {
      this.root = root;
      this.root.innerHTML = "\n            <h1>Micro Frontends & Web Components</h1>\n            <div class=\"row\">\n                <div class=\"col-sm\">\n                    <h2>Separately Running Multiple Apps</h2>\n                    <angular-app title=\"Angular Separate Running App\"></angular-app>\n                    <react-app title=\"React 15 Separate Running App\"></react-app>\n                    <react-app-old title=\"React 0.14 Separate Running App\"></react-app-old>\n                </div>\n                <div class=\"col-sm\">\n                    <h2>Rendering Apps in Same Container</h2>\n                    <label for=\"title\">Title:</label>\n                    <input class=\"form-control\" id=\"title\" name=\"title\" value=\"".concat(this.title, "\">\n                    <div>\n                        <p>Error Mode</p>\n                        <input type=\"radio\" name=\"errorMode\" value=\"0\" checked> Disabled\n                        <input type=\"radio\" name=\"errorMode\" value=\"1\"> Enabled\n                    </div>\n\n                    <div>\n                        <button class=\"btn btn-default\" data-app=\"angular-app\">Load Angular App</button>\n                        <button class=\"btn btn-default\" data-app=\"react-app\">Load React 15 App</button>\n                        <button class=\"btn btn-default\" data-app=\"react-app-old\">Load React 0.14 App</button>\n                    </div>\n                    <div id=\"main\"></div>\n                </div>\n            </div>\n            ");
      this.container = this.root.querySelector('#main');
      this.root.addEventListener('keyup', this.handleInputChange);
      this.root.addEventListener('change', this.handleInputChange);
      this.root.addEventListener('click', this.handleButtonClick);
    }
  }, {
    key: "updateLoadedApp",
    value: function updateLoadedApp() {
      if (this.loadedApp) {
        this.loadedApp.setAttribute('title', this.title);

        if (this.errorMode) {
          this.loadedApp.setAttribute('error-mode', '');
        } else {
          this.loadedApp.removeAttribute('error-mode');
        }
      }
    }
  }, {
    key: "loadApp",
    value: function loadApp(app) {
      var _this2 = this;

      this.container.innerHTML = '';
      this.loadedApp = document.createElement(app);

      if (this.errorMode) {
        this.loadedApp.setAttribute('error-mode', '');
      }

      this.loadedApp.setAttribute('title', this.title);
      this.loadedApp.addEventListener('load', function (load) {
        console.log('loaded', load);
      });
      this.loadedApp.addEventListener('error', function (err) {
        console.error('error', err);

        _this2.loadedApp.parentNode.removeChild(_this2.loadedApp);

        _this2.loadedApp = null;

        _this2.container.appendChild(_this2.getError(err.detail));
      });
      this.container.appendChild(this.loadedApp);
    }
  }, {
    key: "getError",
    value: function getError(err) {
      var message = document.createElement('p');
      message.innerHTML = err.stack.split('\n').join('<br/>');
      return message;
    }
  }]);
  return Application;
}();

exports.Application = Application;

function render(Component, element) {
  var component = new Component();
  component.bootstrap(element);
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(11);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(13);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(0), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(3);
var ctx = __webpack_require__(15);
var hide = __webpack_require__(17);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(16);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(22);
module.exports = __webpack_require__(0) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(5)(function () {
  return Object.defineProperty(__webpack_require__(20)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(1);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ })
/******/ ]);
//# sourceMappingURL=main.b27c16b59f57fe4ad6b3.js.map