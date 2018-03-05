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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(7)
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
__vue_options__.__file = "/Users/lzackx/Work/Repositories/SugoWeexDemo/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-46d3a3f9"
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
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "alignItems": "center"
  },
  "scroller": {
    "width": "720",
    "height": "1080",
    "alignItems": "center"
  },
  "logo": {
    "width": "424",
    "height": "200",
    "marginTop": "24"
  },
  "button": {
    "width": "450",
    "marginTop": "24",
    "paddingTop": "24",
    "paddingBottom": "24",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#dddddd",
    "backgroundColor": "#f5f5f5"
  },
  "text": {
    "fontSize": "48",
    "color": "#666666",
    "textAlign": "center"
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var navigator = weex.requireModule("navigator");
var modal = weex.requireModule("modal");

exports.default = {
  data: function data() {
    return {
      logo: "https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png"
    };
  },

  methods: {
    listClicked: function listClicked(event) {
      console.log("click list");
      var url = this.$getConfig().bundleUrl;
      url = url.split("/").slice(0, -1).join("/") + "/list.js";
      navigator.push({
        url: url,
        animated: "true"
      }, function (event) {
        // modal.toast({ message: 'callback: ' + event })
        console.log(event);
      });
    },
    scrollerClicked: function scrollerClicked(event) {
      console.log("click scroller");
      var url = this.$getConfig().bundleUrl;
      url = url.split("/").slice(0, -1).join("/") + "/scroller.js";
      navigator.push({
        url: url,
        animated: "true"
      }, function (event) {
        // modal.toast({ message: 'callback: ' + event })
        console.log(event);
      });
    },
    webClicked: function webClicked(event) {
      console.log("click web");
      var url = this.$getConfig().bundleUrl;
      url = url.split("/").slice(0, -1).join("/") + "/web.js";
      navigator.push({
        url: url,
        animated: "true"
      }, function (event) {
        console.log(event);
      });
    },
    textClicked: function textClicked(event) {
      console.log("click text");
      var url = this.$getConfig().bundleUrl;
      url = url.split("/").slice(0, -1).join("/") + "/text.js";
      navigator.push({
        url: url,
        animated: "true"
      }, function (event) {
        console.log(event);
      });
    },
    imageClicked: function imageClicked(event) {
      console.log("click image");
      var url = this.$getConfig().bundleUrl;
      url = url.split("/").slice(0, -1).join("/") + "/image.js";
      navigator.push({
        url: url,
        animated: "true"
      }, function (event) {
        console.log(event);
      });
    },
    sliderClicked: function sliderClicked(event) {
      console.log("click slider");
      var url = this.$getConfig().bundleUrl;
      url = url.split("/").slice(0, -1).join("/") + "/slider.js";
      navigator.push({
        url: url,
        animated: "true"
      }, function (event) {
        console.log(event);
      });
    },
    switchClicked: function switchClicked(event) {
      console.log("click switch");
      var url = this.$getConfig().bundleUrl;
      url = url.split("/").slice(0, -1).join("/") + "/switch.js";
      navigator.push({
        url: url,
        animated: "true"
      }, function (event) {
        console.log(event);
      });
    },
    textAreaClicked: function textAreaClicked(event) {
      console.log("click textArea");
      var url = this.$getConfig().bundleUrl;
      url = url.split("/").slice(0, -1).join("/") + "/textarea.js";
      navigator.push({
        url: url,
        animated: "true"
      }, function (event) {
        console.log(event);
      });
    },
    videoClicked: function videoClicked(event) {
      console.log("click video");
      var url = this.$getConfig().bundleUrl;
      url = url.split("/").slice(0, -1).join("/") + "/video.js";
      navigator.push({
        url: url,
        animated: "true"
      }, function (event) {
        console.log(event);
      });
    },
    recyclelistClicked: function recyclelistClicked(event) {
      var url = this.$getConfig().bundleUrl;
      url = url.split("/").slice(0, -1).join("/") + "/recycle_list.js";
      navigator.push({
        url: url,
        animated: "true"
      }, function (event) {
        // modal.toast({ message: 'callback: ' + event })
        console.log(event);
      });
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('scroller', {
    staticClass: ["scroller"]
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": _vm.logo
    }
  }), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.scrollerClicked
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("综合")])]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.webClicked
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("web")])]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.listClicked
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("list")])]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.textClicked
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("text")])]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.imageClicked
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("image")])]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.sliderClicked
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("slider")])]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.switchClicked
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("switch")])]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.textAreaClicked
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("textarea")])]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.videoClicked
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("video")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);