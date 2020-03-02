/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "/KVF":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en": "7dT6",
	"./en.json": "7dT6",
	"./fr": "9pOX",
	"./fr.json": "9pOX"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "/KVF";

/***/ }),

/***/ "/YK7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensionStatuses", function() { return extensionStatuses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useExtensionStatus", function() { return useExtensionStatus; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kdbL");
/* harmony import */ var cozy_flags__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cozy_flags__WEBPACK_IMPORTED_MODULE_2__);



var extensionStatuses = {
  checking: 'checking',
  installed: 'installed',
  notInstalled: 'not-installed',
  connected: 'connected'
};
/*
 * See https://github.com/cozy/cozy-keys-browser/blob/master/docs/extension-status.md
 * to learn more about how the extension can give us its current status
 */

var useExtensionStatus = function useExtensionStatus() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(extensionStatuses.notInstalled),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var extensionCheckDisabled = Object(cozy_flags__WEBPACK_IMPORTED_MODULE_2__["useFlag"])('extension-check-disabled');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (extensionCheckDisabled) {
      return;
    }

    var checkExtensionStatus = function checkExtensionStatus() {
      var event = document.createEvent('Event');
      event.initEvent('cozy.passwordextension.check-status');
      document.dispatchEvent(event);
    };

    var handleExtensionInstalled = function handleExtensionInstalled() {
      setStatus(extensionStatuses.installed);
    };

    var handleExtensionConnected = function handleExtensionConnected() {
      setStatus(extensionStatuses.connected);
      cleanup();
    };

    document.addEventListener('cozy.passwordextension.installed', handleExtensionInstalled);
    document.addEventListener('cozy.passwordextension.connected', handleExtensionConnected);
    checkExtensionStatus();
    var interval = setInterval(checkExtensionStatus, 1000);

    var cleanup = function cleanup() {
      clearInterval(interval);
      document.removeEventListener('extensioninstalled', handleExtensionInstalled);
      document.removeEventListener('extensionconnected', handleExtensionConnected);
    };

    return cleanup;
  }, []);
  return status;
};

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("201c");
__webpack_require__("7NIr");
module.exports = __webpack_require__("LiWt");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1WAn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kyGY");
/* harmony import */ var cozy_ui_transpiled_react_Media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("PYF2");
/* harmony import */ var components_CloudIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TAHb");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("wIVe");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);







var WithCozyIcon = function WithCozyIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Media__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    className: "u-inline-flex"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Media__WEBPACK_IMPORTED_MODULE_3__["Img"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CloudIcon__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Media__WEBPACK_IMPORTED_MODULE_3__["Bd"], {
    className: "u-ml-half"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_2__["Bold"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    tag: "strong"
  }, props, {
    className: "WithCozyIcon__text"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (WithCozyIcon);

/***/ }),

/***/ "2OfN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var detect_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("SjWX");
/* harmony import */ var detect_browser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(detect_browser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("v5lq");
/* harmony import */ var cozy_ui_transpiled_react_NarrowContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("AXZd");
/* harmony import */ var assets_browser_extension_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8uY4");
/* harmony import */ var assets_browser_extension_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_browser_extension_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("X+Uv");
/* harmony import */ var cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("kyGY");
/* harmony import */ var cozy_ui_transpiled_react_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("xrMM");
/* harmony import */ var cozy_ui_transpiled_react_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("KXWi");
/* harmony import */ var cozy_ui_transpiled_react_OrderedList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("vA17");
/* harmony import */ var cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("buk/");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("SH7X");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var snarkdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("7N6H");
/* harmony import */ var components_WithCozyIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("1WAn");
/* harmony import */ var supportedPlatforms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("q9Zg");
/* harmony import */ var _VerticallyCentered__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("UZQi");
















var browser = Object(detect_browser__WEBPACK_IMPORTED_MODULE_1__["detect"])();

var DumbInstallationPage = function DumbInstallationPage(props) {
  var client = props.client;

  var _useI18n = Object(cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_10__["useI18n"])(),
      t = _useI18n.t;

  var cozyURL = new URL(client.getStackClient().uri);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VerticallyCentered__WEBPACK_IMPORTED_MODULE_15__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Wrapper__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_NarrowContent__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_5__["default"], {
    spacing: "xxl"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_5__["default"], {
    spacing: "m"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_browser_extension_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_6__["MainTitle"], null, t('InstallationPage.title')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: Object(snarkdown__WEBPACK_IMPORTED_MODULE_12__["default"])(t('InstallationPage.descriptionStart', {
        address: cozyURL.host
      }))
    }
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_WithCozyIcon__WEBPACK_IMPORTED_MODULE_13__["default"], null, t('InstallationPage.cozyExtension')), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: Object(snarkdown__WEBPACK_IMPORTED_MODULE_12__["default"])(t('InstallationPage.descriptionEnd', {
        address: cozyURL.host
      }))
    }
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "u-ta-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_OrderedList__WEBPACK_IMPORTED_MODULE_9__["OrderedList"], {
    className: "u-mv-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_OrderedList__WEBPACK_IMPORTED_MODULE_9__["ListItem"], null, t("InstallationPage.step1.".concat(browser.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_OrderedList__WEBPACK_IMPORTED_MODULE_9__["ListItem"], {
    dangerouslySetInnerHTML: {
      __html: Object(snarkdown__WEBPACK_IMPORTED_MODULE_12__["default"])(t("InstallationPage.step2.".concat(browser.name)))
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_OrderedList__WEBPACK_IMPORTED_MODULE_9__["ListItem"], {
    dangerouslySetInnerHTML: {
      __html: Object(snarkdown__WEBPACK_IMPORTED_MODULE_12__["default"])(t('InstallationPage.step3', {
        address: cozyURL.host
      }))
    }
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Button__WEBPACK_IMPORTED_MODULE_8__["ButtonLink"], {
    href: supportedPlatforms__WEBPACK_IMPORTED_MODULE_14__["default"][browser.name].storeUrl,
    target: "_blank",
    label: t('InstallationPage.cta'),
    extension: "full",
    className: "u-mt-2-half"
  })))));
};

var InstallationPage = Object(cozy_client__WEBPACK_IMPORTED_MODULE_11__["withClient"])(DumbInstallationPage);
/* harmony default export */ __webpack_exports__["default"] = (InstallationPage);

/***/ }),

/***/ "2QGq":
/***/ (function(module, exports) {

module.exports = "/img/no-app.svg";

/***/ }),

/***/ "4gMP":
/***/ (function(module, exports) {

module.exports = "/img/extension-connected-firefox.svg";

/***/ }),

/***/ "59SX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("v5lq");
/* harmony import */ var cozy_ui_transpiled_react_NarrowContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("AXZd");
/* harmony import */ var cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("X+Uv");
/* harmony import */ var cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("y6ex");
/* harmony import */ var cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("kyGY");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("SH7X");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("buk/");
/* harmony import */ var snarkdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("7N6H");
/* harmony import */ var components_CloudIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("TAHb");
/* harmony import */ var assets_setup_tutorial_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("iH5P");
/* harmony import */ var assets_setup_tutorial_gif__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_setup_tutorial_gif__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _VerticallyCentered__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("UZQi");
/* harmony import */ var _Help__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("JenM");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("ML6N");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_13__);















var DumbInstalledPage = function DumbInstalledPage(props) {
  var client = props.client;

  var _useI18n = Object(cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_7__["useI18n"])(),
      t = _useI18n.t;

  var cozyURL = new URL(client.getStackClient().uri);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VerticallyCentered__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_NarrowContent__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    spacing: "xxl"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "InstalledPage__illustration"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_setup_tutorial_gif__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "",
    width: "512",
    height: "220"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: "drawing-arrow-up",
    width: 96,
    height: 86
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    spacing: "m"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_5__["MainTitle"], {
    className: "InstalledPage__title"
  }, t('InstalledPage.title')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "InstalledPage__description"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: Object(snarkdown__WEBPACK_IMPORTED_MODULE_8__["default"])(t('InstalledPage.descriptionStart', {
        address: cozyURL.host
      }))
    }
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CloudIcon__WEBPACK_IMPORTED_MODULE_9__["default"], null), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: Object(snarkdown__WEBPACK_IMPORTED_MODULE_8__["default"])(t('InstalledPage.descriptionEnd', {
        address: cozyURL.host
      }))
    }
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Help__WEBPACK_IMPORTED_MODULE_12__["default"], null)))));
};

var InstalledPage = Object(cozy_client__WEBPACK_IMPORTED_MODULE_6__["withClient"])(DumbInstalledPage);
/* harmony default export */ __webpack_exports__["default"] = (InstalledPage);

/***/ }),

/***/ "5coA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("v5lq");
/* harmony import */ var cozy_ui_transpiled_react_NarrowContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("AXZd");
/* harmony import */ var cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("X+Uv");
/* harmony import */ var cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("kyGY");
/* harmony import */ var cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("buk/");
/* harmony import */ var _currentBrowser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("NPAx");
/* harmony import */ var assets_extension_connected_chrome_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Pmq3");
/* harmony import */ var assets_extension_connected_chrome_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_extension_connected_chrome_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_extension_connected_firefox_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4gMP");
/* harmony import */ var assets_extension_connected_firefox_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_extension_connected_firefox_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Help__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("JenM");










var illustrations = {
  chrome: assets_extension_connected_chrome_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  firefox: assets_extension_connected_firefox_svg__WEBPACK_IMPORTED_MODULE_8___default.a
};

var ConnectedPage = function ConnectedPage() {
  var _useI18n = Object(cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_5__["useI18n"])(),
      t = _useI18n.t;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_NarrowContent__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    spacing: "xxl"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: illustrations[_currentBrowser__WEBPACK_IMPORTED_MODULE_6__["currentBrowser"].name],
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    spacing: "m"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_4__["MainTitle"], null, t('ConnectedPage.title')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], null, t('ConnectedPage.description'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Help__WEBPACK_IMPORTED_MODULE_9__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (ConnectedPage);

/***/ }),

/***/ "67xI":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7dT6":
/***/ (function(module) {

module.exports = JSON.parse("{\"Nav\":{\"presentation\":\"Presentation\",\"security\":\"Security\",\"installation\":\"Installation\"},\"PresentationPage\":{\"title\":\"Stop losing your passwords\",\"description\":\"Keep your passwords safe in your Cozy\",\"item1\":\"Your passwords will be saved once and for all in your 100% personal and secured safe.\",\"item2\":\"Your cozy will allow you to instantly fill in the forms of websites, for easy connection to all your services.\",\"item3\":\"You can connect your brands to your Cozy to recover your data in the blink of an eye.\",\"cta\":\"Let's go!\",\"notSupportedInfos\":{\"title\":\"Not available on %{browser}\",\"description\":\"The feature is currently not available on %{browser}. You can however take advantage of it on the following browsers:\"}},\"SecurityPage\":{\"title\":\"Improve your cozy password\",\"description\":\"The password of your Cozy becomes the unique key to decrypt your securely stored passwords\",\"advices\":{\"strong_passphrase\":\"**Privilege a strong password:** A long password with numbers and special characters will be impossible to break.\",\"memorize\":\"**Memorize it well:** In case of loss, you will not be able to recover the encrypted passwords in your cozy.\",\"our_tip\":\"**Our tip:** Find a short phrase that suits you, for example: \"},\"enhance-password\":\"Improve my password\",\"keep-password\":\"Keep my current password\"},\"HintPage\":{\"title\":\"Leave a password hint\",\"description\":\"The hint will be sent to you by email in case you forgot your password, choose a hint that only you can understand\",\"placeholder\":\"Hint (required)\",\"submit\":\"Save the hint\",\"error\":\"Error while updating hint\"},\"InstallationPage\":{\"title\":\"Install Cozy extension\",\"descriptionStart\":\"Add the\",\"descriptionEnd\":\"to your browser. This installation is necessary to allow you to automatically fill in and save your passwords while browsing.\",\"cozyExtension\":\"Cozy extension\",\"step1\":{\"chrome\":\"Click below to open the Chrome Web Store\",\"firefox\":\"Click below to open Firefox Add-ons\"},\"step2\":{\"chrome\":\"Then click on **Add to Chrome**\",\"firefox\":\"Then click on **Add to Firefox**\"},\"step3\":\"Log in with your address **%{address}** and your password!\",\"cta\":\"Install Cozy extension\"},\"InstalledPage\":{\"title\":\"It's almost finished!\",\"descriptionStart\":\"Click on the \",\"descriptionEnd\":\" icon on the top right corner of your screen to log in with your address **%{address}** and your Cozy password.\"},\"ConnectedPage\":{\"title\":\"Your password manager is configured!\",\"description\":\"Go to your Cozy browser extension to manage your passwords\"},\"NotAvailablePage\":{\"title\":\"Cozy doesn't have mobile applications to manage your passwords yet\",\"description\":\"Meanwhile, you can already manage your passwords with the cozy extension available on the following platforms:\"},\"Help\":{\"faq\":\"<a href='https://help.cozy.io/article/405-how-to-configure-your-password-manager' target='_blank' rel='noopener noreferrer'>__Help:__ I can't connect</a>\",\"import\":\"Import my credentials from another manager\"},\"AvailablePlatforms\":{\"text\":\"Find the Cozy extension on the following platforms:\",\"smartphone\":\"Smartphone (available soon)\"},\"ImportPage\":{\"title\":\"Import your credentials\",\"options\":{\"label\":\"1. Select the source format\",\"placeholder\":\"Select a format\"},\"file\":{\"label\":\"2. Select the file to import\"},\"submit\":\"Import\",\"modal\":{\"importing\":{\"title\":\"Importing your credentials\"},\"imported\":{\"title\":\"Credentials imported\",\"content\":\"You can now find your credentials in your cozy vault.\"},\"errored\":{\"title\":\"Error while importing your credentials\",\"content\":\"There was an error while importing your credentials. Please try again.\"},\"close\":\"OK\"}},\"manifest\":{\"short_description\":\"Stop losing your passwords\",\"long_description\":\"Keep your passwords safe in your Cozy.\\n\\nYour passwords are saved once and for all in your 100% personal and secured safe.\\n\\nYour Cozy allows you to instantly fill in the forms of websites, for easy connection to all your services.\\n\\nConnect your brands to your Cozy to recover your data in the blink of an eye.\"}}");

/***/ }),

/***/ "8uY4":
/***/ (function(module, exports) {

module.exports = "/img/browser-extension.svg";

/***/ }),

/***/ "9pOX":
/***/ (function(module) {

module.exports = JSON.parse("{\"Nav\":{\"presentation\":\"Présentation\",\"security\":\"Sécurité\",\"installation\":\"Installation\"},\"PresentationPage\":{\"title\":\"Ne perdez plus vos mots de passe\",\"description\":\"Conservez vos mots de passe en sécurité dans votre Cozy\",\"item1\":\"Vos mots de passe seront enregistrés une bonne fois pour toute dans votre coffre 100% personnel et sécurisé.\",\"item2\":\"Votre cozy vous permettra un remplissage instantané des formulaires des sites internet, pour une connexion facilitée à tous vos services.\",\"item3\":\"Vous pourrez connecter vos marques à votre Cozy pour récupérer vos données en un clin d'oeil.\",\"cta\":\"C'est parti !\",\"notSupportedInfos\":{\"title\":\"Indisponible sur %{browser}\",\"description\":\"La fonctionnalité n'est actuellement pas proposée sur %{browser}. Vous pouvez toutefois en profiter sur les navigateurs suivants :\"}},\"SecurityPage\":{\"title\":\"Améliorer votre mot de passe Cozy\",\"description\":\"Le mot de passe de votre Cozy devient l'unique clé pour décoder vos mots de passe sauvegardés de manière sécurisée\",\"advices\":{\"strong_passphrase\":\"**Privilégiez un mot de passe fort :** Un mot de passe long avec des chiffres et des caractères spéciaux sera impossible à casser.\",\"memorize\":\"**Mémorisez-le bien :** En cas de perte, il vous sera impossible de récupérer les mots de passe chiffrés dans votre Cozy.\",\"our_tip\":\"**Notre conseil :** Trouvez une phrase courte qui vous corresponde, par exemple : \"},\"enhance-password\":\"Améliorer mon mot de passe\",\"keep-password\":\"Garder mon mot de passe actuel\"},\"HintPage\":{\"title\":\"Laisser un indice de mot de passe\",\"description\":\"L'indice vous sera envoyé par email en cas d'oubli de votre mot de passe, choisissez un indice que vous-seul pouvez comprendre\",\"placeholder\":\"Indice (obligatoire)\",\"submit\":\"Enregistrer l'indice\",\"error\":\"Erreur lors de la mise à jour de l'indice\"},\"InstallationPage\":{\"title\":\"Installer l'extension Cozy\",\"descriptionStart\":\"Ajoutez\",\"descriptionEnd\":\"à votre navigateur. Cette installation est nécessaire pour vous permettre de remplir et enregistrer automatiquement vos mots de passe lors de votre navigation.\",\"cozyExtension\":\"l'extension Cozy\",\"step1\":{\"chrome\":\"Cliquez ci-dessous pour ouvrir le Chrome Web Store\",\"firefox\":\"Cliquez ci-dessous pour ouvrir Firefox Add-ons\"},\"step2\":{\"chrome\":\"Cliquez ensuite sur **Ajouter à Chrome**\",\"firefox\":\"Cliquez ensuite sur **Ajouter à Firefox**\"},\"step3\":\"Connectez-vous avec votre adresse **%{address}** et votre mot de passe !\",\"cta\":\"Installer l'extension Cozy\"},\"InstalledPage\":{\"title\":\"C'est presque fini !\",\"descriptionStart\":\"Cliquez sur l'icône\",\"descriptionEnd\":\"en haut à droite de votre écran pour vous connecter à l'aide de votre addresse **%{address}** et de votre mot de passe Cozy.\"},\"ConnectedPage\":{\"title\":\"Votre gestionnaire de mots de passe est configuré !\",\"description\":\"Rendez vous sur votre extension navigateur Cozy pour gérer vos mots de passe\"},\"NotAvailablePage\":{\"title\":\"Cozy ne dispose pas encore d'application mobile pour gérer vos mots de passe\",\"description\":\"En attendant, il vous est déjà possible de gérer vos mots de passe avec l'extension cozy sur les plateformes suivantes :\"},\"Help\":{\"faq\":\"<a href='https://support.cozy.io/article/394-comment-puis-je-parametrer-mon-gestionnaire-de-mot-de-passe' target='_blank' rel='noopener noreferrer'>__Aide :__ Je ne parviens pas à me connecter</a>\",\"import\":\"Importer mes identifiants à partir d'un autre gestionnaire\"},\"AvailablePlatforms\":{\"text\":\"Retrouvez l'extension Cozy sur les plateformes suivantes :\",\"smartphone\":\"Smartphone (bientôt disponible)\"},\"ImportPage\":{\"title\":\"Importez vos identifiants\",\"options\":{\"label\":\"1. Sélectionnez le format source\",\"placeholder\":\"Sélectionner un format\"},\"file\":{\"label\":\"2. Sélectionnez le fichier à importer\"},\"submit\":\"Importer\",\"modal\":{\"importing\":{\"title\":\"Import de vos identifiants en cours\"},\"imported\":{\"title\":\"Vos identifiants ont été importés\",\"content\":\"Vous pouvez maintenant trouver vos identifiants dans votre gestionnaire de mots de passe cozy.\"},\"errored\":{\"title\":\"Erreur lors de l'import de vos identifiants\",\"content\":\"Une erreur est survenue lors de l'import de vos identifiants. Veuillez réessayer.\"},\"close\":\"OK\"}},\"manifest\":{\"short_description\":\"Ne perdez plus vos mots de passe\",\"long_description\":\"Conservez vos mots de passe en sécurité dans votre Cozy.\\n\\nVos mots de passe sont enregistrés une bonne fois pour toute dans votre coffre 100% personnel et sécurisé.\\n\\nVotre Cozy vous permet un remplissage instantané des formulaires des sites Internet, pour une connexion facilitée à tous vos services.\\n\\nConnectez vos marques à votre Cozy pour récupérer vos données en un clin d'oeil.\"}}");

/***/ }),

/***/ "HC3o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("v5lq");
/* harmony import */ var cozy_ui_transpiled_react_NarrowContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("AXZd");
/* harmony import */ var cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("X+Uv");
/* harmony import */ var cozy_ui_transpiled_react_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xrMM");
/* harmony import */ var cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("kyGY");
/* harmony import */ var cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("buk/");
/* harmony import */ var cozy_ui_transpiled_react_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("KXWi");
/* harmony import */ var cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("y6ex");
/* harmony import */ var assets_no_app_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("2QGq");
/* harmony import */ var assets_no_app_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_no_app_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var supportedPlatforms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("q9Zg");













var NotAvailablePage = function NotAvailablePage() {
  var _useI18n = Object(cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_7__["useI18n"])(),
      t = _useI18n.t;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Wrapper__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_NarrowContent__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_4__["default"], {
    spacing: "xl"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_4__["default"], {
    spacing: "m"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: assets_no_app_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_6__["MainTitle"], null, t('NotAvailablePage.title'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Card__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, t('NotAvailablePage.description')), Object.entries(supportedPlatforms__WEBPACK_IMPORTED_MODULE_11__["default"]).map(function (_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
        platform = _ref2[0],
        infos = _ref2[1];

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Button__WEBPACK_IMPORTED_MODULE_8__["ButtonLink"], {
      key: platform,
      href: infos.storeUrl,
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
        icon: "browser-".concat(platform),
        size: 16,
        color: "var(--slateGrey)"
      }),
      theme: "secondary",
      label: infos.label,
      extension: "full",
      className: "u-mt-1"
    });
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (NotAvailablePage);

/***/ }),

/***/ "JenM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var snarkdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7N6H");
/* harmony import */ var cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("X+Uv");
/* harmony import */ var _AvailablePlatforms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Map/");
/* harmony import */ var cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("buk/");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("55Ip");
/* harmony import */ var cozy_flags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("kdbL");
/* harmony import */ var cozy_flags__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cozy_flags__WEBPACK_IMPORTED_MODULE_6__);






 // eslint-disable-next-line no-unused-vars

var Help = function Help(props) {
  var _useI18n = Object(cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_4__["useI18n"])(),
      t = _useI18n.t;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_2__["default"], {
    spacing: "l"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: Object(snarkdown__WEBPACK_IMPORTED_MODULE_1__["default"])(t('Help.faq'))
    }
  }), cozy_flags__WEBPACK_IMPORTED_MODULE_6___default()('import-page') ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/installation/import"
  }, t('Help.import'))) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AvailablePlatforms__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Help);

/***/ }),

/***/ "LiWt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("VxdY");
/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("SH7X");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cozy_keys_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Bkvo");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("buk/");
/* global cozy */






var appLocale;

var renderApp = function renderApp(client) {
  var App = __webpack_require__("xYwX").default;

  Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["render"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_5__["I18n"], {
    lang: appLocale,
    dictRequire: function dictRequire(appLocale) {
      return __webpack_require__("/KVF")("./".concat(appLocale));
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_client__WEBPACK_IMPORTED_MODULE_2__["CozyProvider"], {
    client: client
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_keys_lib__WEBPACK_IMPORTED_MODULE_3__["VaultProvider"], {
    instance: client.getStackClient().uri
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, null)))), document.querySelector('[role=application]'));
}; // return a defaultData if the template hasn't been replaced by cozy-stack


var getDataOrDefault = function getDataOrDefault(toTest, defaultData) {
  var templateRegex = /^\{\{\.[a-zA-Z]*\}\}$/; // {{.Example}}

  return templateRegex.test(toTest) ? defaultData : toTest;
}; // initial rendering of the application


document.addEventListener('DOMContentLoaded', function () {
  var root = document.querySelector('[role=application]');
  var data = root.dataset;
  var appIcon = getDataOrDefault(data.cozyIconPath, __webpack_require__("ZAKO"));
  var appNamePrefix = getDataOrDefault(data.cozyAppNamePrefix || __webpack_require__("pZg0").name_prefix, '');
  var appName = getDataOrDefault(data.cozyAppName, __webpack_require__("pZg0").name);
  appLocale = getDataOrDefault(data.cozyLocale, 'en');
  var protocol = window.location ? window.location.protocol : 'https:'; // initialize the client to interact with the cozy stack

  var client = new cozy_client__WEBPACK_IMPORTED_MODULE_2___default.a({
    uri: "".concat(protocol, "//").concat(data.cozyDomain),
    token: data.cozyToken
  }); // initialize the bar, common of all applications, it allows
  // platform features like apps navigation without doing anything

  cozy.bar.init({
    appName: appName,
    appNamePrefix: appNamePrefix,
    iconPath: appIcon,
    lang: appLocale,
    replaceTitleOnMobile: true
  });
  renderApp(client);
});

/***/ }),

/***/ "ML6N":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Map/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QILm");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cozy_ui_transpiled_react_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("xrMM");
/* harmony import */ var cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("y6ex");
/* harmony import */ var cozy_ui_transpiled_react_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("KXWi");
/* harmony import */ var supportedPlatforms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("q9Zg");
/* harmony import */ var cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("X+Uv");
/* harmony import */ var cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("kyGY");
/* harmony import */ var cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("buk/");












var PlatformButton = function PlatformButton(props) {
  var icon = props.icon,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(props, ["icon"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Button__WEBPACK_IMPORTED_MODULE_6__["ButtonLink"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, rest, {
    icon: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      icon: icon,
      size: 16,
      color: "var(--slateGrey)"
    }),
    theme: "secondary",
    className: "u-mb-half"
  }));
};

var AvailablePlatforms = function AvailablePlatforms(props) {
  var _useI18n = Object(cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_10__["useI18n"])(),
      t = _useI18n.t;

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Card__WEBPACK_IMPORTED_MODULE_4__["default"], props, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: "m"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_9__["Text"], null, t('AvailablePlatforms.text')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, Object.entries(supportedPlatforms__WEBPACK_IMPORTED_MODULE_7__["default"]).map(function (_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
        platform = _ref2[0],
        infos = _ref2[1];

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(PlatformButton, {
      key: platform,
      href: infos.storeUrl,
      icon: "browser-".concat(platform),
      label: infos.label
    });
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(PlatformButton, {
    disabled: true,
    icon: "phone",
    label: t('AvailablePlatforms.smartphone')
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (AvailablePlatforms);

/***/ }),

/***/ "N/Rj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_ui_transpiled_react_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KXWi");
/* harmony import */ var cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("X+Uv");
/* harmony import */ var cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("kyGY");
/* harmony import */ var cozy_ui_transpiled_react_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xrMM");
/* harmony import */ var cozy_ui_transpiled_react_Infos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("M2p0");
/* harmony import */ var cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("y6ex");
/* harmony import */ var cozy_ui_transpiled_react_MuiCozyTheme_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("COzu");
/* harmony import */ var cozy_ui_transpiled_react_NarrowContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("AXZd");
/* harmony import */ var cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("buk/");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("55Ip");
/* harmony import */ var assets_import_passwords_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("nbNg");
/* harmony import */ var assets_import_passwords_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_import_passwords_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var components_CircleIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("fH2f");
/* harmony import */ var components_Wrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("v5lq");
/* harmony import */ var supportedPlatforms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("q9Zg");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var currentBrowser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("NPAx");
/* harmony import */ var _VerticallyCentered__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("UZQi");




















var PresentationPage = function PresentationPage() {
  var _useI18n = Object(cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_10__["useI18n"])(),
      t = _useI18n.t;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_VerticallyCentered__WEBPACK_IMPORTED_MODULE_18__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Wrapper__WEBPACK_IMPORTED_MODULE_14__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: assets_import_passwords_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_4__["MainTitle"], null, t('PresentationPage.title')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    spacing: "xxl"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    tag: "p"
  }, t('PresentationPage.description')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    spacing: "m"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Card__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_MuiCozyTheme_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    spacing: 24
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_MuiCozyTheme_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    spacing: "s"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CircleIcon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    icon: "lock",
    size: 32,
    color: "var(--slateGrey)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    tag: "p"
  }, t('PresentationPage.item1')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_MuiCozyTheme_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    spacing: "s"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CircleIcon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    icon: "password",
    size: 32,
    color: "var(--slateGrey)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    tag: "p"
  }, t('PresentationPage.item2')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_MuiCozyTheme_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    spacing: "s"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CircleIcon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    icon: "to-the-cloud",
    size: 32,
    color: "var(--slateGrey)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    tag: "p"
  }, t('PresentationPage.item3')))))), !currentBrowser__WEBPACK_IMPORTED_MODULE_17__["isSupportedBrowser"] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Infos__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "u-ta-left",
    theme: "danger",
    description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_4__["SubTitle"], {
      className: "u-pomegranate"
    }, t('PresentationPage.notSupportedInfos.title', {
      browser: currentBrowser__WEBPACK_IMPORTED_MODULE_17__["browserName"]
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], null, t('PresentationPage.notSupportedInfos.description', {
      browser: currentBrowser__WEBPACK_IMPORTED_MODULE_17__["browserName"]
    }))),
    action: Object.entries(supportedPlatforms__WEBPACK_IMPORTED_MODULE_15__["default"]).map(function (_ref, index) {
      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
          platform = _ref2[0],
          infos = _ref2[1];

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Button__WEBPACK_IMPORTED_MODULE_2__["ButtonLink"], {
        key: platform,
        href: infos.storeUrl,
        icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
          icon: "browser-".concat(platform),
          size: 16,
          color: "var(--slateGrey)"
        }),
        theme: "secondary",
        label: infos.label,
        className: classnames__WEBPACK_IMPORTED_MODULE_16___default()({
          'u-ml-0': index === 0
        })
      });
    })
  }) : null), currentBrowser__WEBPACK_IMPORTED_MODULE_17__["isSupportedBrowser"] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_NarrowContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "u-mh-auto"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "/security",
    label: t('PresentationPage.cta'),
    tag: react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"],
    extension: "full"
  })) : null))));
};

/* harmony default export */ __webpack_exports__["default"] = (PresentationPage);

/***/ }),

/***/ "N5f3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileContent", function() { return getFileContent; });
/**
 * Taken from https://github.com/bitwarden/web/blob/e968d5a2a5b1b6921a8df3ec9da38b71c4c92b8f/src/app/tools/import.component.ts#L125-L148
 * Read a File content and returns it as a string. It handles specific cases like
 * Lastpass CSV files that needs specific parsing with a DOMParser
 *
 * @param {File} file - the file to read
 * @param {string} format - the expected format of the file (see ImportService
 * from bitwarden jslib to get all possible formats)
 * @return {string} the content of the file
 */
var getFileContent = function getFileContent(file, format) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsText(file, 'utf-8');

    reader.onload = function (e) {
      if (format === 'lastpasscsv' && file.type === 'text/html') {
        var parser = new DOMParser();
        var doc = parser.parseFromString(e.target.result, 'text/html');
        var pre = doc.querySelector('pre');

        if (pre != null) {
          resolve(pre.textContent);
          return;
        }

        reject();
        return;
      }

      resolve(e.target.result);
    };

    reader.onerror = function () {
      reject();
    };
  });
};

/***/ }),

/***/ "NPAx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentBrowser", function() { return currentBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSupportedBrowser", function() { return isSupportedBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserName", function() { return browserName; });
/* harmony import */ var detect_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SjWX");
/* harmony import */ var detect_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(detect_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6acW");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var supportedPlatforms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q9Zg");



var currentBrowser = Object(detect_browser__WEBPACK_IMPORTED_MODULE_0__["detect"])();
var isSupportedBrowser = Object(supportedPlatforms__WEBPACK_IMPORTED_MODULE_2__["isSupportedPlatform"])(currentBrowser.name);
var normalizedBrowserNames = {
  ios: 'iOS'
};
var browserName = normalizedBrowserNames[currentBrowser.name] || lodash_capitalize__WEBPACK_IMPORTED_MODULE_1___default()(currentBrowser.name);

/***/ }),

/***/ "Pmq3":
/***/ (function(module, exports) {

module.exports = "/img/extension-connected-chrome.svg";

/***/ }),

/***/ "TAHb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("y6ex");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nvt4");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);





var CloudIcon = function CloudIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    icon: "cloud",
    size: 16,
    color: "var(--charcoalGrey)",
    className: "CloudIcon"
  }, props));
};

/* harmony default export */ __webpack_exports__["default"] = (CloudIcon);

/***/ }),

/***/ "UZQi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QILm");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





var VerticallyCentered = function VerticallyCentered(_ref) {
  var className = _ref.className,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('u-pv-2', 'u-mt-auto', 'u-mb-auto', className)
  }, props));
};

/* harmony default export */ __webpack_exports__["default"] = (VerticallyCentered);

/***/ }),

/***/ "VxdY":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "X87T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cozy_ui_transpiled_react_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("KXWi");
/* harmony import */ var cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("buk/");
/* harmony import */ var cozy_ui_transpiled_react_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("zA8p");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("SH7X");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var cozy_ui_transpiled_react_Alerter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("67rm");
/* harmony import */ var components_Wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("v5lq");
/* harmony import */ var cozy_ui_transpiled_react_NarrowContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("AXZd");
/* harmony import */ var assets_password_clue_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("tTfR");
/* harmony import */ var assets_password_clue_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_password_clue_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("kyGY");
/* harmony import */ var cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("X+Uv");
/* harmony import */ var cozy_ui_transpiled_react_Spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("V2U0");
/* harmony import */ var _VerticallyCentered__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("UZQi");

















var DumbHintPage = function DumbHintPage(props) {
  var client = props.client,
      history = props.history;

  var _useI18n = Object(cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_5__["useI18n"])(),
      t = _useI18n.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      hint = _useState2[0],
      setHint = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      saving = _useState4[0],
      setSaving = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var goToNextStep = function goToNextStep() {
    return history.push('/installation');
  };

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setSaving(true);
              _context.prev = 2;
              _context.next = 5;
              return client.getStackClient().fetchJSON('PUT', '/settings/hint', {
                hint: hint
              });

            case 5:
              goToNextStep();
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](2);
              cozy_ui_transpiled_react_Alerter__WEBPACK_IMPORTED_MODULE_8__["default"].error(t('HintPage.error')); // eslint-disable-next-line no-console

              console.error(_context.t0);

            case 12:
              _context.prev = 12;
              setSaving(false);
              return _context.finish(12);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 8, 12, 15]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var checkExistingHint =
    /*#__PURE__*/
    function () {
      var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return client.getStackClient().collection('io.cozy.settings').get('hint');

              case 3:
                // If the user has already defined a hint, bypass this step
                goToNextStep();
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                // In case of any error, the user should enter a hint
                setLoading(false);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      return function checkExistingHint() {
        return _ref2.apply(this, arguments);
      };
    }();

    checkExistingHint();
  }, []);

  if (loading) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Spinner__WEBPACK_IMPORTED_MODULE_14__["default"], {
      size: "xxlarge",
      middle: true
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_VerticallyCentered__WEBPACK_IMPORTED_MODULE_15__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_Wrapper__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_NarrowContent__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], {
    spacing: "xxl",
    tag: "form",
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], {
    spacing: "m"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: assets_password_clue_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_12__["MainTitle"], null, t('HintPage.title'))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], {
    spacing: "m"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    placeholder: t('HintPage.placeholder'),
    value: hint,
    onChange: function onChange(e) {
      return setHint(e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_12__["Text"], null, t('HintPage.description'))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: t('HintPage.submit'),
    disabled: saving || hint === '',
    busy: saving,
    extension: "full",
    className: "u-mt-2"
  })))));
};

var HintPage = Object(cozy_client__WEBPACK_IMPORTED_MODULE_7__["withClient"])(DumbHintPage);
/* harmony default export */ __webpack_exports__["default"] = (HintPage);

/***/ }),

/***/ "XCeU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cozy_ui_transpiled_react_AppLinker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("sCMN");


var generateWebAppLink = function generateWebAppLink(slug, client) {
  var cozyURL = new URL(client.getStackClient().uri);

  var _client$getInstanceOp = client.getInstanceOptions(),
      cozySubdomainType = _client$getInstanceOp.cozySubdomainType;

  var link = Object(cozy_ui_transpiled_react_AppLinker__WEBPACK_IMPORTED_MODULE_0__["generateWebLink"])({
    cozyUrl: cozyURL.origin,
    slug: slug,
    subDomainType: cozySubdomainType
  });
  return link;
};

/* harmony default export */ __webpack_exports__["default"] = (generateWebAppLink);

/***/ }),

/***/ "ZAKO":
/***/ (function(module, exports) {

module.exports = "/img/icon.svg";

/***/ }),

/***/ "Zibr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QILm");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cozy_ui_transpiled_react_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KXWi");
/* harmony import */ var cozy_ui_transpiled_react_AppLinker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("sCMN");
/* harmony import */ var cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("buk/");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("SH7X");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("55Ip");
/* harmony import */ var components_Wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("v5lq");
/* harmony import */ var cozy_ui_transpiled_react_NarrowContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("AXZd");
/* harmony import */ var cozy_ui_transpiled_react_PasswordExample__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("edgH");
/* harmony import */ var assets_strong_password_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("unx8");
/* harmony import */ var assets_strong_password_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_strong_password_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("X+Uv");
/* harmony import */ var cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("kyGY");
/* harmony import */ var cozy_ui_transpiled_react_Card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("xrMM");
/* harmony import */ var cozy_ui_transpiled_react_UnorderedList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("dfR0");
/* harmony import */ var snarkdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("7N6H");
/* harmony import */ var helpers_generateWebAppLink__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("XCeU");
/* harmony import */ var _VerticallyCentered__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("UZQi");



















var DumbLinkToSettings = Object(cozy_client__WEBPACK_IMPORTED_MODULE_6__["withClient"])(function (props) {
  var client = props.client,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(props, ["client"]);

  var _useI18n = Object(cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_5__["useI18n"])(),
      t = _useI18n.t;

  var settingsAppSlug = 'settings';
  var rawSettingsAppHref = Object(helpers_generateWebAppLink__WEBPACK_IMPORTED_MODULE_17__["default"])(settingsAppSlug, client);
  var passwordsUrl = Object(helpers_generateWebAppLink__WEBPACK_IMPORTED_MODULE_17__["default"])('passwords', client);
  var successUrl = new URL('#/installation', passwordsUrl).href;
  var cancelUrl = new URL('#/security/hint', passwordsUrl).href;
  var settingsPath = '#/profile/password';
  var settingsQuery = "?redirect_success=".concat(encodeURIComponent(successUrl), "&redirect_cancel=").concat(encodeURIComponent(cancelUrl));
  var settingsAppHref = new URL(settingsPath + settingsQuery, rawSettingsAppHref).href;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_transpiled_react_AppLinker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    slug: settingsAppSlug,
    href: settingsAppHref
  }, function (_ref) {
    var onClick = _ref.onClick,
        href = _ref.href;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_transpiled_react_Button__WEBPACK_IMPORTED_MODULE_3__["ButtonLink"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      href: href,
      onClick: onClick,
      label: t('SecurityPage.enhance-password')
    }, rest));
  });
});
var LinkToSettings = Object(cozy_client__WEBPACK_IMPORTED_MODULE_6__["withClient"])(DumbLinkToSettings);

var SecurityPage = function SecurityPage() {
  var _useI18n2 = Object(cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_5__["useI18n"])(),
      t = _useI18n2.t;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_VerticallyCentered__WEBPACK_IMPORTED_MODULE_18__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Wrapper__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_transpiled_react_NarrowContent__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: assets_strong_password_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "",
    width: "204"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_13__["MainTitle"], null, t('SecurityPage.title')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_12__["default"], {
    spacing: "xxl"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_13__["Text"], null, t('SecurityPage.description')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_transpiled_react_Card__WEBPACK_IMPORTED_MODULE_14__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_transpiled_react_UnorderedList__WEBPACK_IMPORTED_MODULE_15__["UnorderedList"], {
    className: "u-ta-left u-mv-0"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_transpiled_react_UnorderedList__WEBPACK_IMPORTED_MODULE_15__["ListItem"], {
    dangerouslySetInnerHTML: {
      __html: Object(snarkdown__WEBPACK_IMPORTED_MODULE_16__["default"])(t('SecurityPage.advices.strong_passphrase'))
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_transpiled_react_UnorderedList__WEBPACK_IMPORTED_MODULE_15__["ListItem"], {
    dangerouslySetInnerHTML: {
      __html: Object(snarkdown__WEBPACK_IMPORTED_MODULE_16__["default"])(t('SecurityPage.advices.memorize'))
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_transpiled_react_UnorderedList__WEBPACK_IMPORTED_MODULE_15__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: Object(snarkdown__WEBPACK_IMPORTED_MODULE_16__["default"])(t('SecurityPage.advices.our_tip'))
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_transpiled_react_PasswordExample__WEBPACK_IMPORTED_MODULE_10__["default"], {
    password: "Cl4ude\u20ACst1Nu@ge"
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_12__["default"], {
    spacing: "xs"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LinkToSettings, {
    extension: "full"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_transpiled_react_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tag: react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
    to: "/security/hint",
    label: t('SecurityPage.keep-password'),
    theme: "secondary",
    className: "u-mt-half",
    extension: "full"
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SecurityPage);

/***/ }),

/***/ "fH2f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QILm");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("y6ex");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("67xI");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);






var CircleIcon = function CircleIcon(props) {
  var className = props.className,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(props, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('CircleIcon', className)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], rest));
};

/* harmony default export */ __webpack_exports__["default"] = (CircleIcon);

/***/ }),

/***/ "fH6n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("buk/");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("55Ip");



var Sidebar = function Sidebar() {
  var _useI18n = Object(cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_1__["useI18n"])(),
      t = _useI18n.t;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", {
    className: "o-sidebar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "c-nav"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "c-nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/presentation",
    className: "c-nav-link",
    activeClassName: "is-active"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-nav-number"
  }, "1."), t('Nav.presentation'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "c-nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/security",
    className: "c-nav-link",
    activeClassName: "is-active"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-nav-number"
  }, "2."), t('Nav.security'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "c-nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/installation",
    className: "c-nav-link",
    activeClassName: "is-active"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-nav-number"
  }, "3."), t('Nav.installation'))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "iH5P":
/***/ (function(module, exports) {

module.exports = "/img/setup-tutorial.gif";

/***/ }),

/***/ "isux":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cozy_keys_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Bkvo");
/* harmony import */ var cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("buk/");
/* harmony import */ var cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("X+Uv");
/* harmony import */ var cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("kyGY");
/* harmony import */ var _VerticallyCentered__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("UZQi");
/* harmony import */ var components_Wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("v5lq");
/* harmony import */ var cozy_ui_transpiled_react_Label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("w7SU");
/* harmony import */ var cozy_ui_transpiled_react_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("KXWi");
/* harmony import */ var cozy_ui_transpiled_react_Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("cLsY");
/* harmony import */ var cozy_ui_transpiled_react_Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("V2U0");
/* harmony import */ var _ImportOptionsField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("kt1G");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("N5f3");

















var ImportPage = function ImportPage(_ref) {
  var vaultClient = _ref.vaultClient;

  var _useI18n = Object(cozy_ui_transpiled_react_I18n__WEBPACK_IMPORTED_MODULE_5__["useI18n"])(),
      t = _useI18n.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      selectedFormat = _useState2[0],
      setSelectedFormat = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('waiting'),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      importStatus = _useState4[0],
      setImportStatus = _useState4[1];

  var fileInput = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var importFile =
  /*#__PURE__*/
  function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var fileContent;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_helpers__WEBPACK_IMPORTED_MODULE_15__["getFileContent"])(fileInput.current.files[0]);

            case 3:
              fileContent = _context.sent;
              _context.next = 10;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              setImportStatus('errored');
              return _context.abrupt("return");

            case 10:
              _context.prev = 10;
              _context.next = 13;
              return vaultClient.import(fileContent, selectedFormat.value);

            case 13:
              setImportStatus('imported');
              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t1 = _context["catch"](10);
              setImportStatus('errored');
              return _context.abrupt("return");

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6], [10, 16]]);
    }));

    return function importFile() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
      var isLocked;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              setImportStatus('importing');
              _context2.next = 4;
              return vaultClient.isLocked();

            case 4:
              isLocked = _context2.sent;

              if (isLocked) {
                _context2.next = 8;
                break;
              }

              _context2.next = 8;
              return importFile();

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var reset = function reset() {
    if (fileInput.current) {
      fileInput.current.value = '';
    }

    setImportStatus('waiting');
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_VerticallyCentered__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_Wrapper__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Stack__WEBPACK_IMPORTED_MODULE_6__["default"], {
    spacing: "l"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_7__["MainTitle"], null, t('ImportPage.title')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ImportOptionsField__WEBPACK_IMPORTED_MODULE_14__["default"], {
    vaultClient: vaultClient,
    value: selectedFormat,
    onChange: setSelectedFormat,
    label: t('ImportPage.options.label'),
    placeholder: t('ImportPage.options.placeholder')
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Label__WEBPACK_IMPORTED_MODULE_10__["default"], {
    htmlFor: "file"
  }, t('ImportPage.file.label')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "file",
    ref: fileInput,
    id: "file"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "submit",
    label: t('ImportPage.submit'),
    extension: "full",
    className: "u-mt-1"
  }))))), importStatus !== 'waiting' ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Modal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    closable: false
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Modal__WEBPACK_IMPORTED_MODULE_12__["ModalHeader"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Text__WEBPACK_IMPORTED_MODULE_7__["MainTitle"], null, importStatus === 'importing' ? t('ImportPage.modal.importing.title') : null, importStatus === 'imported' ? t('ImportPage.modal.imported.title') : null, importStatus === 'errored' ? t('ImportPage.modal.errored.title') : null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Modal__WEBPACK_IMPORTED_MODULE_12__["ModalDescription"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_keys_lib__WEBPACK_IMPORTED_MODULE_4__["VaultUnlocker"], {
    onUnlock: importFile,
    closable: true,
    onDismiss: function onDismiss() {
      return setImportStatus('waiting');
    }
  }, importStatus === 'importing' ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "u-flex"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Spinner__WEBPACK_IMPORTED_MODULE_13__["default"], {
    size: "xxlarge",
    className: "u-mh-auto"
  })) : null, importStatus === 'imported' ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, t('ImportPage.modal.imported.content')) : null, importStatus === 'errored' ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, t('ImportPage.modal.errored.content')) : null, importStatus === 'imported' || importStatus === 'errored' ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    extension: "full",
    onClick: reset,
    label: t('ImportPage.modal.close')
  }) : null))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_keys_lib__WEBPACK_IMPORTED_MODULE_4__["withVaultClient"])(ImportPage));

/***/ }),

/***/ "jEuI":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "kt1G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("RIqP");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QILm");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cozy_ui_transpiled_react_Field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("jLsa");







var ImportOptionsField = function ImportOptionsField(_ref) {
  var vaultClient = _ref.vaultClient,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["vaultClient"]);

  var importOptions = vaultClient.getImportOptions();
  var options = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(importOptions.featured), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(importOptions.regular)).map(function (option) {
    return {
      value: option.id,
      label: option.name
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_transpiled_react_Field__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    type: "select"
  }, props, {
    options: options
  }));
};

ImportOptionsField.propTypes = {
  vaultClient: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    getImportOptions: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImportOptionsField);

/***/ }),

/***/ "nbNg":
/***/ (function(module, exports) {

module.exports = "/img/import-passwords.svg";

/***/ }),

/***/ "nvt4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "nw0P":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./_lib/build_formatting_tokens_reg_exp/index.js": "kOWh",
	"./ar/build_distance_in_words_locale/index.js": "XxX6",
	"./ar/build_format_locale/index.js": "alis",
	"./ar/index.js": "EDRf",
	"./be/build_distance_in_words_locale/index.js": "LQ09",
	"./be/build_format_locale/index.js": "kj7F",
	"./be/index.js": "YEhR",
	"./bg/build_distance_in_words_locale/index.js": "7K3h",
	"./bg/build_format_locale/index.js": "RrdL",
	"./bg/index.js": "isx8",
	"./ca/build_distance_in_words_locale/index.js": "wqqj",
	"./ca/build_format_locale/index.js": "qcV0",
	"./ca/index.js": "Vwa+",
	"./cs/build_distance_in_words_locale/index.js": "ZKDM",
	"./cs/build_format_locale/index.js": "ipyF",
	"./cs/index.js": "dvhP",
	"./da/build_distance_in_words_locale/index.js": "2Mgc",
	"./da/build_format_locale/index.js": "Gned",
	"./da/index.js": "7ur/",
	"./de/build_distance_in_words_locale/index.js": "5IWf",
	"./de/build_format_locale/index.js": "THCn",
	"./de/index.js": "bgw5",
	"./el/build_distance_in_words_locale/index.js": "o/GB",
	"./el/build_format_locale/index.js": "8T9h",
	"./el/index.js": "dH0v",
	"./en/build_distance_in_words_locale/index.js": "LZbM",
	"./en/build_format_locale/index.js": "6DAA",
	"./en/index.js": "Us+F",
	"./eo/build_distance_in_words_locale/index.js": "qrnn",
	"./eo/build_format_locale/index.js": "Bl15",
	"./eo/index.js": "UB7v",
	"./es/build_distance_in_words_locale/index.js": "GEfZ",
	"./es/build_format_locale/index.js": "O+zC",
	"./es/index.js": "/S0t",
	"./fi/build_distance_in_words_locale/index.js": "VHtQ",
	"./fi/build_format_locale/index.js": "Oydx",
	"./fi/index.js": "ndVD",
	"./fil/build_distance_in_words_locale/index.js": "uq4p",
	"./fil/build_format_locale/index.js": "d7hw",
	"./fil/index.js": "pNfm",
	"./fr/build_distance_in_words_locale/index.js": "IzMR",
	"./fr/build_format_locale/index.js": "I3Zg",
	"./fr/index.js": "LKA2",
	"./hr/build_distance_in_words_locale/index.js": "DPvn",
	"./hr/build_format_locale/index.js": "puw3",
	"./hr/index.js": "L9Jq",
	"./hu/build_distance_in_words_locale/index.js": "w2RQ",
	"./hu/build_format_locale/index.js": "/0iD",
	"./hu/index.js": "Nm+E",
	"./id/build_distance_in_words_locale/index.js": "JbvB",
	"./id/build_format_locale/index.js": "0wlw",
	"./id/index.js": "A6C3",
	"./is/build_distance_in_words_locale/index.js": "qzMC",
	"./is/build_format_locale/index.js": "S3yD",
	"./is/index.js": "N4bE",
	"./it/build_distance_in_words_locale/index.js": "MDEp",
	"./it/build_format_locale/index.js": "aUJd",
	"./it/index.js": "hmb4",
	"./ja/build_distance_in_words_locale/index.js": "nNvt",
	"./ja/build_format_locale/index.js": "buui",
	"./ja/index.js": "uAXs",
	"./ko/build_distance_in_words_locale/index.js": "oEw+",
	"./ko/build_format_locale/index.js": "9SQf",
	"./ko/index.js": "iW8+",
	"./mk/build_distance_in_words_locale/index.js": "nmwZ",
	"./mk/build_format_locale/index.js": "htxJ",
	"./mk/index.js": "GzBU",
	"./nb/build_distance_in_words_locale/index.js": "SL1f",
	"./nb/build_format_locale/index.js": "CJ5F",
	"./nb/index.js": "73vv",
	"./nl/build_distance_in_words_locale/index.js": "Uyu0",
	"./nl/build_format_locale/index.js": "doCD",
	"./nl/index.js": "hCQt",
	"./pl/build_distance_in_words_locale/index.js": "FUBD",
	"./pl/build_format_locale/index.js": "nOYf",
	"./pl/index.js": "B6yL",
	"./pt/build_distance_in_words_locale/index.js": "aTPA",
	"./pt/build_format_locale/index.js": "TTT0",
	"./pt/index.js": "gdks",
	"./ro/build_distance_in_words_locale/index.js": "gI+A",
	"./ro/build_format_locale/index.js": "njjO",
	"./ro/index.js": "r2yp",
	"./ru/build_distance_in_words_locale/index.js": "KmPx",
	"./ru/build_format_locale/index.js": "UUBw",
	"./ru/index.js": "nz/o",
	"./sk/build_distance_in_words_locale/index.js": "q2Bs",
	"./sk/build_format_locale/index.js": "9sxn",
	"./sk/index.js": "Wqan",
	"./sl/build_distance_in_words_locale/index.js": "mlv2",
	"./sl/build_format_locale/index.js": "vHkZ",
	"./sl/index.js": "KYSo",
	"./sr/build_distance_in_words_locale/index.js": "LlkS",
	"./sr/build_format_locale/index.js": "RhjJ",
	"./sr/index.js": "7mU3",
	"./sv/build_distance_in_words_locale/index.js": "UNBN",
	"./sv/build_format_locale/index.js": "zTNB",
	"./sv/index.js": "hxgj",
	"./th/build_distance_in_words_locale/index.js": "XAGa",
	"./th/build_format_locale/index.js": "We2s",
	"./th/index.js": "Pk+z",
	"./tr/build_distance_in_words_locale/index.js": "aFZF",
	"./tr/build_format_locale/index.js": "jh7A",
	"./tr/index.js": "3ZWG",
	"./zh_cn/build_distance_in_words_locale/index.js": "KdB7",
	"./zh_cn/build_format_locale/index.js": "l4EP",
	"./zh_cn/index.js": "8tMq",
	"./zh_tw/build_distance_in_words_locale/index.js": "vyyr",
	"./zh_tw/build_format_locale/index.js": "uYH7",
	"./zh_tw/index.js": "QPlQ"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "nw0P";

/***/ }),

/***/ "pZg0":
/***/ (function(module, exports) {

module.exports = {"name":"Pass","name_prefix":"Cozy","slug":"passwords","icon":"icon.svg","categories":["cozy"],"version":"0.3.4","licence":"AGPL-3.0","editor":"cozy","source":"registry://passwords/stable","developer":{"name":"Cozy Cloud","url":"https://cozy.io"},"default_locale":"en","langs":["en","fr"],"routes":{"/":{"folder":"/","index":"index.html","public":false}},"permissions":{"apps":{"description":"Required by the cozy-bar to display the icons of the apps","type":"io.cozy.apps","verbs":["GET"]},"settings":{"description":"Required to check the existence of and update the password hint","type":"io.cozy.settings","verbs":["GET","PUT"]}}}

/***/ }),

/***/ "q9Zg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSupportedPlatform", function() { return isSupportedPlatform; });
var supportedPlatforms = {
  chrome: {
    label: 'Google Chrome',
    storeUrl: 'https://chrome.google.com/webstore/detail/cozy-personal-cloud/jplochopoaajoochpoccajmgelpfbbic'
  },
  firefox: {
    label: 'Mozilla Firefox',
    storeUrl: 'https://addons.mozilla.org/en-US/firefox/addon/cozy-personal-cloud'
  }
};
var isSupportedPlatform = function isSupportedPlatform(platformName) {
  var normalizedPlatformName = platformName.trim().toLowerCase();
  return Object.keys(supportedPlatforms).includes(normalizedPlatformName);
};
/* harmony default export */ __webpack_exports__["default"] = (supportedPlatforms);

/***/ }),

/***/ "tTfR":
/***/ (function(module, exports) {

module.exports = "/img/password-clue.svg";

/***/ }),

/***/ "unx8":
/***/ (function(module, exports) {

module.exports = "/img/strong-password.svg";

/***/ }),

/***/ "v5lq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QILm");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("jEuI");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);






var Wrapper = function Wrapper(props) {
  var className = props.className,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(props, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('Wrapper', className)
  }, rest));
};

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "wIVe":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "xYwX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DumbApp", function() { return DumbApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0cfB");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("55Ip");
/* harmony import */ var cozy_ui_transpiled_react_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Bh3+");
/* harmony import */ var cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("y6ex");
/* harmony import */ var cozy_ui_transpiled_react_Alerter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("67rm");
/* harmony import */ var cozy_ui_transpiled_react_MuiCozyTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xIbs");
/* harmony import */ var cozy_ui_transpiled_react_helpers_withBreakpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ufaa");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("fH6n");
/* harmony import */ var _PresentationPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("N/Rj");
/* harmony import */ var _SecurityPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Zibr");
/* harmony import */ var _HintPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("X87T");
/* harmony import */ var _InstallationPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("2OfN");
/* harmony import */ var _InstalledPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("59SX");
/* harmony import */ var _NotAvailablePage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("HC3o");
/* harmony import */ var _ConnectedPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("5coA");
/* harmony import */ var _ImportPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("isux");
/* harmony import */ var _helpers_extensionStatus__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("/YK7");
/* harmony import */ var cozy_flags__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("kdbL");
/* harmony import */ var cozy_flags__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(cozy_flags__WEBPACK_IMPORTED_MODULE_18__);




















var RedirectIfExtensionInstalledOrConnected = function RedirectIfExtensionInstalledOrConnected(props) {
  var extensionStatus = Object(_helpers_extensionStatus__WEBPACK_IMPORTED_MODULE_17__["useExtensionStatus"])();

  if (extensionStatus === _helpers_extensionStatus__WEBPACK_IMPORTED_MODULE_17__["extensionStatuses"].checking) {
    return null;
  }

  if (extensionStatus === _helpers_extensionStatus__WEBPACK_IMPORTED_MODULE_17__["extensionStatuses"].installed) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: "/installation/installed"
    });
  }

  if (extensionStatus === _helpers_extensionStatus__WEBPACK_IMPORTED_MODULE_17__["extensionStatuses"].connected) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: "/installation/connected"
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], props);
};
/*
 * This is not very DRY to have RedirectIfExtensionInstalledOrConnected and
 * RedirectIfExtensionConnected, but the problem is that on
 * /installation/installed route we can't listen for the installed status or we
 * will have an infinite redirection loop. So in this case we just want to
 * listen for connection.
 */


var RedirectIfExtensionConnected = function RedirectIfExtensionConnected(props) {
  var extensionStatus = Object(_helpers_extensionStatus__WEBPACK_IMPORTED_MODULE_17__["useExtensionStatus"])();

  if (extensionStatus === _helpers_extensionStatus__WEBPACK_IMPORTED_MODULE_17__["extensionStatuses"].checking) {
    return null;
  }

  if (extensionStatus === _helpers_extensionStatus__WEBPACK_IMPORTED_MODULE_17__["extensionStatuses"].connected) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: "/installation/connected"
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], props);
};

var DumbApp = function DumbApp(_ref) {
  var isDesktop = _ref.breakpoints.isDesktop;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (true) {
      cozy_flags__WEBPACK_IMPORTED_MODULE_18___default()('switcher', true);
    }
  }, []);

  if (isDesktop) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_MuiCozyTheme__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["HashRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Layout__WEBPACK_IMPORTED_MODULE_3__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Layout__WEBPACK_IMPORTED_MODULE_3__["Main"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Layout__WEBPACK_IMPORTED_MODULE_3__["Content"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RedirectIfExtensionInstalledOrConnected, {
      path: "/presentation",
      component: _PresentationPage__WEBPACK_IMPORTED_MODULE_9__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RedirectIfExtensionInstalledOrConnected, {
      path: "/security",
      exact: true,
      component: _SecurityPage__WEBPACK_IMPORTED_MODULE_10__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RedirectIfExtensionInstalledOrConnected, {
      path: "/security/hint",
      exact: true,
      component: _HintPage__WEBPACK_IMPORTED_MODULE_11__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RedirectIfExtensionInstalledOrConnected, {
      path: "/installation",
      exact: true,
      component: _InstallationPage__WEBPACK_IMPORTED_MODULE_12__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RedirectIfExtensionConnected, {
      path: "/installation/installed",
      exact: true,
      component: _InstalledPage__WEBPACK_IMPORTED_MODULE_13__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/installation/connected",
      exact: true,
      component: _ConnectedPage__WEBPACK_IMPORTED_MODULE_15__["default"]
    }), cozy_flags__WEBPACK_IMPORTED_MODULE_18___default()('import-page') ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/installation/import",
      exact: true,
      component: _ImportPage__WEBPACK_IMPORTED_MODULE_16__["default"]
    }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      from: "/",
      to: "/presentation"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      from: "*",
      to: "/presentation"
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_4__["Sprite"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Alerter__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_flags__WEBPACK_IMPORTED_MODULE_18__["FlagSwitcher"], null))));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NotAvailablePage__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_4__["Sprite"], null));
};
var App = Object(cozy_ui_transpiled_react_helpers_withBreakpoints__WEBPACK_IMPORTED_MODULE_7__["default"])()(DumbApp);
/*
  Enable Hot Module Reload using `react-hot-loader` here
  We enable it here since App is the main root component
  No need to use it anywhere else, it sould work for all
  child components
*/

/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__["hot"])(module)(App));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("3UD+")(module)))

/***/ })

/******/ });
//# sourceMappingURL=passwords.js.map