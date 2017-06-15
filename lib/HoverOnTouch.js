(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("HoverOnTouch", [], factory);
	else if(typeof exports === 'object')
		exports["HoverOnTouch"] = factory();
	else
		root["HoverOnTouch"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  /**
   * Get closest DOM element up the tree that contains a class, ID, or data attribute
   * @param  {Node} elem The base element
   * @param  {String} selector The class, id, data attribute, or tag to look for
   * @return {Node} Null if no match
   */
  getClosest: function getClosest(elem, selector) {
    var firstChar = selector.charAt(0);

    // Get closest match
    for (; elem && elem !== document; elem = elem.parentNode) {

      // If selector is a class
      if (firstChar === '.') {
        if (elem.classList.contains(selector.substr(1))) {
          return elem;
        }
      }

      // If selector is an ID
      if (firstChar === '#') {
        if (elem.id === selector.substr(1)) {
          return elem;
        }
      }

      // If selector is a data attribute
      if (firstChar === '[') {
        if (elem.hasAttribute(selector.substr(1, selector.length - 2))) {
          return elem;
        }
      }

      // If selector is a tag
      if (elem.tagName.toLowerCase() === selector) {
        return elem;
      }
    }

    return false;
  },


  /**
   * Return an array of gifs from an array of files
   */
  getGifs: function getGifs(imgs) {
    var gifs = [];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = imgs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var img = _step.value;

        var ext = img.src.split('.').pop();

        ext === 'gif' && gifs.push(img);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return gifs.length > 0 ? gifs : false;
  },


  /**
   * Restart gifs
   */
  restartGifs: function restartGifs(imgs) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {

      for (var _iterator2 = imgs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var img = _step2.value;

        var url = img.src;

        img.src = '#/';
        img.src = url;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HoverOnTouch = function () {
  function HoverOnTouch() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, HoverOnTouch);

    this.name = 'hoverontouch';
    this.className = '.' + this.name;
    /**
     * Default values
     * Options available :
     * - activeClass: class added on hover/touch
     * - global: if true, we apply the hoverontouch on every links
     * - disableClass: if global option is true, we don't apply hoverontouch on element with the disableClass
     */
    this.opts = {
      activeClass: this.name + '--aktiv',
      global: false,
      disableClass: this.name + '--disable',
      disableGifRestart: false
    };
    Object.assign(this.opts, opts);

    this.device = {
      isTouch: 'ontouchstart' in window || navigator.maxTouchPoints
    };

    // set variables
    this.vars = {
      currentHoveredElement: null,
      pressTimer: null,
      longpress: false,
      scrollStartX: 0,
      scrollStartY: 0,
      multipleTouchAmount: 0,
      multiTouchGesture: false
    };

    // gather all elements
    this.domElements = this.opts.global ? document.querySelectorAll('a:not(.' + this.opts.disableClass + ')') : document.querySelectorAll(this.className);

    this.init();
  }

  _createClass(HoverOnTouch, [{
    key: 'init',
    value: function init() {
      this.bindAll();
      this.parseElements();
    }
  }, {
    key: 'bindAll',
    value: function bindAll() {
      var _this = this;

      ['mouseenterHoverontouch', 'mouseeoutHoverontouch', 'mouseupHoverontouch', 'touchstartHoverontouch', 'touchendHoverontouch'].forEach(function (fn) {
        return _this[fn] = _this[fn].bind(_this);
      });
    }
  }, {
    key: 'parseElements',
    value: function parseElements() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {

        for (var _iterator = this.domElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;

          el.classList.add(this.name);

          el.imgs = el.querySelectorAll('img');
          el.gifs = _utils2.default.getGifs(el.imgs);

          el.style.cssText = '-webkit-tap-highlight-color: rgba(0,0,0,0); \n                          -webkit-user-select: none; \n                          -webkit-touch-callout: none;';

          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = el.imgs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var img = _step2.value;

              img.style.cssText = 'pointer-events: none;';
            }

            // rewrite link if mobile
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          if (el.tagName === 'A' && this.device.isTouch) {
            var link = el.getAttribute('href');

            if (link) {
              // only rewrite if not already done
              el.setAttribute('data-link', link);
              el.removeAttribute('href');
            }
          }

          this.addElementListeners(el);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'addElementListeners',
    value: function addElementListeners(el) {
      el.addEventListener('mouseenter', this.mouseenterHoverontouch);
      el.addEventListener('mouseout', this.mouseeoutHoverontouch);
      el.addEventListener('mouseup', this.mouseupHoverontouch);

      if (this.device.isTouch) {
        el.addEventListener('touchstart', this.touchstartHoverontouch);
        el.addEventListener('touchend', this.touchendHoverontouch);
      }
    }
  }, {
    key: 'removeElementListeners',
    value: function removeElementListeners(el) {
      el.removeEventListener('mouseenter', this.mouseenterHoverontouch);
      el.removeEventListener('mouseout', this.mouseeoutHoverontouch);
      el.removeEventListener('mouseup', this.mouseupHoverontouch);

      if (this.device.isTouch) {
        el.removeEventListener('touchstart', this.touchstartHoverontouch);
        el.removeEventListener('touchend', this.touchendHoverontouch);
      }
    }

    /**
     * Mouse & Touch handlers
     */

  }, {
    key: 'mouseenterHoverontouch',
    value: function mouseenterHoverontouch(e) {
      if (this.currentHoveredElement) return;

      this.currentHoveredElement = _utils2.default.getClosest(e.target, this.className);

      this.currentHoveredElement.gifs && !this.opts.disableGifRestart && _utils2.default.restartGifs(this.currentHoveredElement.gifs);

      this.currentHoveredElement.classList.add(this.opts.activeClass);
    }
  }, {
    key: 'mouseeoutHoverontouch',
    value: function mouseeoutHoverontouch() {
      if (!this.currentHoveredElement) return;

      this.currentHoveredElement.classList.remove(this.opts.activeClass);
      this.currentHoveredElement = null;
    }
  }, {
    key: 'mouseupHoverontouch',
    value: function mouseupHoverontouch() {}
  }, {
    key: 'touchstartHoverontouch',
    value: function touchstartHoverontouch(e) {
      var _this2 = this;

      if (this.currentHoveredElement) return;
      console.log('what', this.currentHoveredElement);
      this.currentHoveredElement = _utils2.default.getClosest(e.target, this.className);

      this.vars.multipleTouchAmount = this.vars.multipleTouchAmount + 1;
      if (this.vars.multipleTouchAmount > 1) {
        this.vars.multiTouchGesture = true;
      }

      this.currentHoveredElement.gifs && !this.opts.disableGifRestart && _utils2.default.restartGifs(this.currentHoveredElement.gifs);

      this.currentHoveredElement.classList.add(this.opts.activeClass);

      // get entry coordinates for scroll block (needs to go into changedTouches because of the handler)
      this.vars.scrollStartX = e.changedTouches[0].pageX;
      this.vars.scrollStartY = e.changedTouches[0].pageY;

      this.vars.pressTimer = window.setTimeout(function () {
        _this2.vars.longpress = true;
      }, 250);
    }
  }, {
    key: 'touchendHoverontouch',
    value: function touchendHoverontouch(e) {
      if (!this.currentHoveredElement) return;

      this.currentHoveredElement.classList.remove(this.opts.activeClass);

      window.clearTimeout(this.vars.pressTimer);

      this.vars.multipleTouchAmount = Math.max(this.vars.multipleTouchAmount - 1, 0);

      console.log('longpress : ' + this.vars.longpress, this.vars.multiTouchGesture, this.vars.multipleTouchAmount);
      if (!this.vars.longpress && !this.vars.multiTouchGesture && !this.vars.multipleTouchAmount) {
        // this is a click, so go to the data-link, but only if data link exists and not more scrolling than 10px
        // calculate Distance
        var XOriginal = this.vars.scrollStartX;
        var XEnd = e.changedTouches[0].pageX;
        var distanceX = Math.abs(XOriginal - XEnd);

        var YEnd = e.changedTouches[0].pageY;
        var YOriginal = this.vars.scrollStartY;
        var distanceY = Math.abs(YOriginal - YEnd);

        this.vars.longpress = false;

        if (this.currentHoveredElement.getAttribute('data-link') && distanceY <= 5 && distanceX <= 5) {
          var location = this.currentHoveredElement.getAttribute('data-link');

          window.location.href = location;
        };
      }

      this.vars.longpress = false;

      // set back multiTouchGesture to false if multi touch end
      if (this.multipleTouchAmount === 0) {
        this.multiTouchGesture = false;
      };

      this.currentHoveredElement = null;

      e.preventDefault();
      e.stopPropagation();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.domElements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var el = _step3.value;

          this.removeElementListeners(el);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }]);

  return HoverOnTouch;
}();

exports.default = HoverOnTouch;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=HoverOnTouch.js.map