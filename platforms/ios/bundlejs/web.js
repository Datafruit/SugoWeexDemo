// { "framework": "Vue"} 

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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ({

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(37)
)

/* script */
__vue_exports__ = __webpack_require__(38)

/* template */
var __vue_template__ = __webpack_require__(39)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/lzackx/Work/Repositories/SugoWeexDemo/src/web.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-43624d3b"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof weex === "object" && weex && weex.document) {
  try {
    weex.document.registerStyleSheets(__vue_options__._scopeId, __vue_styles__)
  } catch (e) {}
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "flexDirection": "column",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  },
  "row": {
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "button": {
    "color": "#ffffff",
    "backgroundColor": "#337ab7",
    "borderColor": "#2e6da4",
    "borderRadius": "12",
    "paddingTop": "20",
    "paddingLeft": "36",
    "paddingBottom": "20",
    "paddingRight": "36",
    "fontSize": "36",
    "textAlign": "center",
    "fontWeight": "500",
    "marginBottom": "10"
  },
  "button-enabled": {
    "opacity": 1
  },
  "button-disabled": {
    "opacity": 0.65
  }
}

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var sugo = weex.requireModule("sugo");

module.exports = {
  data: {
    url: "",
    pagestart: "",
    pagefinish: "",
    title: "",
    error: "",
    canGoBack: false,
    canGoForward: false
  },
  mounted: function mounted() {
    if (weex.config.env.platform.toLowerCase() == "android") {
      console.log("sugo.initWebView");
      sugo.track("test", { aaa: "bbb" });
      sugo.initWebView(this.$refs.webview);
    }
  },

  methods: {
    goBack: function goBack() {
      var webview = weex.requireModule("webview");
      webview.goBack(this.$refs.webview);
    },
    goForward: function goForward() {
      var webview = weex.requireModule("webview");
      webview.goForward(this.$refs.webview);
    },
    reload: function reload() {
      var webview = weex.requireModule("webview");
      webview.reload(this.$refs.webview);
    },
    onPageStart: function onPageStart(e) {
      this.pagestart = e.url;
    },
    onPageFinish: function onPageFinish(e) {
      if (weex.config.env.platform.toLowerCase() == "android") {
        console.log("sugo.handleWebView");
        sugo.handleWebView(e.url, this.$refs.webview);
      }
      if (e.url) {
        this.pagefinish = e.url;
      }
      this.canGoBack = e.canGoBack;
      this.canGoForward = e.canGoForward;
      if (e.title) {
        this.title = e.title;
      }
    },
    onError: function onError(e) {
      this.error = url;
    },
    onReceivedTitle: function onReceivedTitle(e) {
      this.title = e.title;
    }
  }
};

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('web', {
    ref: "webview",
    staticStyle: {
      width: "720px",
      height: "720px"
    },
    attrs: {
      "src": "https://www.jd.com/"
    },
    on: {
      "pagestart": _vm.onPageStart,
      "pagefinish": _vm.onPageFinish,
      "error": _vm.onError,
      "receivedtitle": _vm.onReceivedTitle
    }
  }), _c('div', {
    staticClass: ["row"],
    staticStyle: {
      paddingTop: "10px"
    }
  }, [_c('text', {
    staticClass: ["button"],
    class: [_vm.canGoBack ? 'button-enabled' : 'button-disabled'],
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v("←")]), _c('text', {
    staticClass: ["button"],
    class: [_vm.canGoForward ? 'button-enabled' : 'button-disabled'],
    on: {
      "click": _vm.goForward
    }
  }, [_vm._v("→")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.reload
    }
  }, [_vm._v("reload")])]), _c('text', {
    attrs: {
      "testId": "pagestart"
    }
  }, [_vm._v("pagestart: " + _vm._s(_vm.pagestart))]), _c('text', {
    attrs: {
      "testId": "pagefinish"
    }
  }, [_vm._v("pagefinish: " + _vm._s(_vm.pagefinish))]), _c('text', {
    attrs: {
      "testId": "title"
    }
  }, [_vm._v("title: " + _vm._s(_vm.title))]), _c('text', {
    attrs: {
      "testId": "error"
    }
  }, [_vm._v("error: " + _vm._s(_vm.error))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });