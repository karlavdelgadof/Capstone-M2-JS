"use strict";
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./wave.png */ "./src/wave.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;0,800;0,900;1,800;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  text-decoration: none;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n\n  /* outline: 2px solid red; */\n  font-size: 20px;\n}\n\n:root {\n  --color-primary: #fa3496;\n  --color-secondary: #f6f6f6;\n  --color-third: #1c1e29;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background-image: linear-gradient(180deg, #040506, #0c0d12, #1c1e29, #34384c);\n  background-blend-mode: soft-light;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  backdrop-filter: blur(10px);\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\n#page-header {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 2% 8%;\n  position: fixed;\n  background-color: #080a0e;\n  box-shadow: 25px 40px 214px -20px rgba(250, 52, 151, 0.507), 25px 40px 214px -20px rgba(250, 52, 151, 0.507);\n}\n\n#logo {\n  display: flex;\n}\n\n#log-icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 100%;\n  width: 65px;\n}\n\n#logo h1 {\n  font-family: 'Montserrat Alternates', sans-serif;\n  font-size: 2rem;\n  color: var(--color-secondary);\n  font-style: italic;\n}\n\n#navbar {\n  display: flex;\n}\n\n#nav-links {\n  display: flex;\n  gap: 2rem;\n  font-size: 2rem;\n}\n\n#nav-links li {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n}\n\n#nav-links li a {\n  text-decoration: none;\n  color: var(--color-secondary);\n  font-weight: bold;\n  font-size: 1.3rem;\n}\n\n#nav-links li + li + li a {\n  color: var(--color-primary);\n  font-size: 1rem;\n}\n\n#home-btn {\n  color: #fff;\n  display: flex;\n  gap: 0.3rem;\n  font-weight: 600;\n}\n\n#artist-counter {\n  order: 1;\n  font-size: 1.3rem;\n  color: var(--color-primary);\n}\n\n#page-footer {\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  background-color: var(--color-third);\n  padding: 2% 8%;\n  color: #fff;\n}\n\n#artist-list {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 3rem;\n}\n\n#list {\n  margin: 15rem 0 8rem;\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\n\n#list h2 {\n  color: var(--color-secondary);\n  font-size: 2.5rem;\n  font-family: 'Montserrat Alternates', sans-serif;\n}\n\n.artist {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  background-color: #1c1e29;\n  padding: 0.8rem 1rem 2rem;\n  border-radius: 10px 160px 10px 10px;\n  color: var(--color-secondary);\n  width: 85%;\n}\n\n.artist-img {\n  box-shadow: 0 0 80px -10px var(--color-primary);\n  border-radius: 0 167px 10px 10px;\n}\n\n.artist-info {\n  display: flex;\n  flex-direction: column;\n}\n\n.top-info {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n  font-size: 2.5rem;\n}\n\n.top-info h3 {\n  font-size: 1.3rem;\n}\n\n.likes-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.fa-heart {\n  justify-self: end;\n  font-size: 27px;\n  cursor: pointer;\n}\n\n.fa-heart.liked {\n  color: #fcb424;\n}\n\n.likes {\n  flex: 80%;\n  text-align: right;\n}\n\n/* comment pop up styles */\n.comment-popup {\n  height: calc(100vh - 50px);\n  background-color: var(--color-third);\n  border-radius: 5px;\n  margin: 10px 20px;\n  position: absolute;\n  top: 0;\n  z-index: 2;\n  width: 90%;\n  box-sizing: border-box;\n  padding: 10px 20px;\n}\n\n.comment-wrapper {\n  outline: 2px solid pink;\n  border-radius: 5px;\n  padding: 5px 10px;\n  width: 100%;\n}\n\n/* div grouping image & title */\n#grpImgH1 {\n  text-align: center;\n  color: white;\n}\n\n#close-modal {\n  all: unset;\n  height: 40px;\n  width: 40px;\n  color: white;\n  cursor: pointer;\n  font-size: 2em;\n}\n\n.artist-image {\n  /* outline:1px solid red; */\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n\n#commet-image {\n  border-radius: 5px;\n}\n\ndiv.hide {\n  display: none;\n}\n\ndiv.show {\n  display: flex;\n}\n\n.more,\n#subscribe-btn {\n  width: 120px;\n  background-color: transparent;\n  border: none;\n  border: 2px solid var(--color-primary);\n  padding: 0.5rem 0.8rem;\n  border-radius: 30px;\n  align-items: flex-start;\n  font-family: inherit;\n  font-weight: 600;\n  color: var(--color-primary);\n}\n\n#subscribe-btn {\n  width: 120px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;0,800;0,900;1,800;1,900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');\n\n* {\n  text-decoration: none;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n\n  /* outline: 2px solid red; */\n  font-size: 20px;\n}\n\n:root {\n  --color-primary: #fa3496;\n  --color-secondary: #f6f6f6;\n  --color-third: #1c1e29;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background-image: linear-gradient(180deg, #040506, #0c0d12, #1c1e29, #34384c);\n  background-blend-mode: soft-light;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  backdrop-filter: blur(10px);\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\n#page-header {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 2% 8%;\n  position: fixed;\n  background-color: #080a0e;\n  box-shadow: 25px 40px 214px -20px rgba(250, 52, 151, 0.507), 25px 40px 214px -20px rgba(250, 52, 151, 0.507);\n}\n\n#logo {\n  display: flex;\n}\n\n#log-icon {\n  background-image: url('./wave.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 100%;\n  width: 65px;\n}\n\n#logo h1 {\n  font-family: 'Montserrat Alternates', sans-serif;\n  font-size: 2rem;\n  color: var(--color-secondary);\n  font-style: italic;\n}\n\n#navbar {\n  display: flex;\n}\n\n#nav-links {\n  display: flex;\n  gap: 2rem;\n  font-size: 2rem;\n}\n\n#nav-links li {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n}\n\n#nav-links li a {\n  text-decoration: none;\n  color: var(--color-secondary);\n  font-weight: bold;\n  font-size: 1.3rem;\n}\n\n#nav-links li + li + li a {\n  color: var(--color-primary);\n  font-size: 1rem;\n}\n\n#home-btn {\n  color: #fff;\n  display: flex;\n  gap: 0.3rem;\n  font-weight: 600;\n}\n\n#artist-counter {\n  order: 1;\n  font-size: 1.3rem;\n  color: var(--color-primary);\n}\n\n#page-footer {\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  background-color: var(--color-third);\n  padding: 2% 8%;\n  color: #fff;\n}\n\n#artist-list {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 3rem;\n}\n\n#list {\n  margin: 15rem 0 8rem;\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\n\n#list h2 {\n  color: var(--color-secondary);\n  font-size: 2.5rem;\n  font-family: 'Montserrat Alternates', sans-serif;\n}\n\n.artist {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  background-color: #1c1e29;\n  padding: 0.8rem 1rem 2rem;\n  border-radius: 10px 160px 10px 10px;\n  color: var(--color-secondary);\n  width: 85%;\n}\n\n.artist-img {\n  box-shadow: 0 0 80px -10px var(--color-primary);\n  border-radius: 0 167px 10px 10px;\n}\n\n.artist-info {\n  display: flex;\n  flex-direction: column;\n}\n\n.top-info {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n  font-size: 2.5rem;\n}\n\n.top-info h3 {\n  font-size: 1.3rem;\n}\n\n.likes-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.fa-heart {\n  justify-self: end;\n  font-size: 27px;\n  cursor: pointer;\n}\n\n.fa-heart.liked {\n  color: #fcb424;\n}\n\n.likes {\n  flex: 80%;\n  text-align: right;\n}\n\n/* comment pop up styles */\n.comment-popup {\n  height: calc(100vh - 50px);\n  background-color: var(--color-third);\n  border-radius: 5px;\n  margin: 10px 20px;\n  position: absolute;\n  top: 0;\n  z-index: 2;\n  width: 90%;\n  box-sizing: border-box;\n  padding: 10px 20px;\n}\n\n.comment-wrapper {\n  outline: 2px solid pink;\n  border-radius: 5px;\n  padding: 5px 10px;\n  width: 100%;\n}\n\n/* div grouping image & title */\n#grpImgH1 {\n  text-align: center;\n  color: white;\n}\n\n#close-modal {\n  all: unset;\n  height: 40px;\n  width: 40px;\n  color: white;\n  cursor: pointer;\n  font-size: 2em;\n}\n\n.artist-image {\n  /* outline:1px solid red; */\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n\n#commet-image {\n  border-radius: 5px;\n}\n\ndiv.hide {\n  display: none;\n}\n\ndiv.show {\n  display: flex;\n}\n\n.more,\n#subscribe-btn {\n  width: 120px;\n  background-color: transparent;\n  border: none;\n  border: 2px solid var(--color-primary);\n  padding: 0.5rem 0.8rem;\n  border-radius: 30px;\n  align-items: flex-start;\n  font-family: inherit;\n  font-weight: 600;\n  color: var(--color-primary);\n}\n\n#subscribe-btn {\n  width: 120px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_getArtistAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getArtistAPI.js */ "./src/modules/getArtistAPI.js");
/* harmony import */ var _modules_homeUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/homeUI.js */ "./src/modules/homeUI.js");
/* harmony import */ var _modules_commentUI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/commentUI.js */ "./src/modules/commentUI.js");
/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/comment.js */ "./src/modules/comment.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ "./src/modules/modal.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







const artistCount = document.getElementById('artist-counter');

const commentPopup = document.getElementById('comment_popup');
const artistList = document.getElementById('artist-list');

artistList.addEventListener('click', async (e) => {
  const artistId = e.target.parentElement.parentElement.id;
  commentPopup.innerHTML = '';
  commentPopup.appendChild((0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__["default"])(artistId));
  if (e.target.className === 'more') {
    const commetImage = document.getElementById('commet-image');
    const commentPageTitle = document.getElementById('comment-page-title');
    const artistFacts = document.getElementById('artist-facts');
    const commentList = document.getElementById('display-comments');
    commetImage.src = '';
    commentPageTitle.textContent = '';
    const artistId = e.path[2].id;
    commentPopup.classList.remove('hide');
    commentPopup.classList.add('show');
    const {
      type,
      id,
      name,
      shortcut,
      bios: [{ author }],
    } = await _modules_getArtistAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].getArtistById(artistId);
    commetImage.src = `https://api.napster.com/imageserver/v2/artists/${artistId}/images/356x237.jpg`;
    commentPageTitle.textContent = name;
    _modules_commentUI_js__WEBPACK_IMPORTED_MODULE_2__["default"].addFacts(artistFacts, [type, name, shortcut, author]);

    const result = await _modules_comment_js__WEBPACK_IMPORTED_MODULE_3__["default"].getComments(id);
    if (result.length > 0) {
      result.forEach((comment) => _modules_commentUI_js__WEBPACK_IMPORTED_MODULE_2__["default"].showComments(commentList, comment));
    }
  }
});

commentPopup.addEventListener('click', (e) => {
  if (e.target.id === 'close-modal') {
    commentPopup.classList.add('hide');
    commentPopup.classList.remove('show');
  }
});

commentPopup.addEventListener('submit', async (e) => {
  e.preventDefault();
  const commentForm = e.target;
  const name = commentForm.elements[0].value;
  const message = commentForm.elements[1].value;
  const artistId = commentForm.className;
  commentForm.elements[0].value = '';
  commentForm.elements[1].value = '';
  _modules_comment_js__WEBPACK_IMPORTED_MODULE_3__["default"].postComments(artistId, name, message);
});

document.addEventListener('DOMContentLoaded', async () => {
  const artists = await _modules_getArtistAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].getArtist();
  artistCount.textContent = `(${artists.length})`;
  artists.forEach(_modules_homeUI_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
});


/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Comment)
/* harmony export */ });
class Comment {
  static postComments = async (artistId, username, comment) => {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DDR3QxgE4QHuteJe2GL7/comments',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: artistId,
          username,
          comment,
        }),
      },
    );
    const data = await response.json();
    return data;
  };

  static getComments = async (artistId) => {
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DDR3QxgE4QHuteJe2GL7/comments?item_id=${
        artistId}`,
      {
        method: 'GET',
        header: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
    const data = await response.text();
    return JSON.parse(data);
  };
}


/***/ }),

/***/ "./src/modules/commentUI.js":
/*!**********************************!*\
  !*** ./src/modules/commentUI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommentUI)
/* harmony export */ });
class CommentUI {
  static addFacts = async (parentElement, facts) => {
    // clear old entries
    parentElement.innerHTML = '';
    const fact1 = document.createElement('p'); // [type, name, shortcut, author]
    fact1.textContent = `Name: ${facts[1]}`;
    const fact2 = document.createElement('p');
    fact2.textContent = `Type: ${facts[0]}`;
    const fact3 = document.createElement('p');
    fact3.textContent = `Shortcut: ${facts[2]}`;
    const fact4 = document.createElement('p');
    fact4.textContent = `Author: ${facts[3]}`;

    parentElement.appendChild(fact1);
    parentElement.appendChild(fact2);
    parentElement.appendChild(fact3);
    parentElement.appendChild(fact4);

    return parentElement;
  };

  static showComments = (
    ele,
    { creation_date: date, comment: message, username: name },
  ) => {
    const {
      creation_date: creationDate,
      comment,
      username,
    } = { creation_date: date, comment: message, username: name };
    const comEl = document.createElement('p');
    comEl.innerText = `${creationDate} ${username} ${comment} `;
    // console.log(comEl);
    ele.appendChild(comEl);
    return comEl;
  };
}


/***/ }),

/***/ "./src/modules/createLike.js":
/*!***********************************!*\
  !*** ./src/modules/createLike.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvolvementAPI)
/* harmony export */ });
class InvolvementAPI {
  static async recordLike(id) {
    const result = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q2EecIDolyiDguQmkFIj/likes/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: id,
      }),
    });
    const response = await result.text();
    return response;
  }

  static async getLikes() {
    const result = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q2EecIDolyiDguQmkFIj/likes/');
    const data = await result.json();

    return data;
  }

  static async displayLikes(id) {
    const likes = await InvolvementAPI.getLikes();
    const artistLikes = likes.filter((item) => item.item_id === id);
    if (artistLikes.length <= 0) {
      return 0;
    }
    const nLikes = artistLikes[0].likes;
    return nLikes;
  }
}


/***/ }),

/***/ "./src/modules/getArtistAPI.js":
/*!*************************************!*\
  !*** ./src/modules/getArtistAPI.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ artistsAPI)
/* harmony export */ });
class artistsAPI {
  static async getArtist() {
    const response = await fetch(
      'https://api.napster.com/v2.2/artists/top?apikey=ZjA0ZmYxZmItOTI1Ni00YTdjLWEzMTYtMjAyZDc1OTc3NzBh&limit=30&offset=22',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    return data.artists;
  }

  static getArtistById = async (artistId) => {
    const response = await fetch(
      `https://api.napster.com/v2.2/artists/${artistId}?apikey=ZjA0ZmYxZmItOTI1Ni00YTdjLWEzMTYtMjAyZDc1OTc3NzBh`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    return data.artists[0];
  };
}


/***/ }),

/***/ "./src/modules/homeUI.js":
/*!*******************************!*\
  !*** ./src/modules/homeUI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createLike.js */ "./src/modules/createLike.js");


const artistsList = document.getElementById('artist-list');

const createCard = async (artist) => {
  const artistCard = document.createElement('div');
  artistCard.className = 'artist';
  artistCard.setAttribute('id', artist.id);
  artistsList.appendChild(artistCard);

  const artistImg = document.createElement('img');
  artistImg.className = 'artist-img';
  artistImg.src = `https://api.napster.com/imageserver/v2/artists/${artist.id}/images/356x237.jpg`;
  artistCard.appendChild(artistImg);

  const artistInfo = document.createElement('div');
  artistInfo.className = 'artist-info';
  artistCard.appendChild(artistInfo);

  const topInfo = document.createElement('div');
  topInfo.className = 'top-info';
  artistInfo.appendChild(topInfo);

  const artistName = document.createElement('h3');
  artistName.textContent = artist.name;
  topInfo.appendChild(artistName);

  const likesCont = document.createElement('div');
  likesCont.className = 'likes-container';
  topInfo.appendChild(likesCont);

  const likesIcon = document.createElement('i');
  likesIcon.classList.add('fa-solid', 'fa-heart');
  likesCont.appendChild(likesIcon);

  let clicks = 0;

  likesIcon.addEventListener('click', () => {
    clicks += 1;
    likesIcon.classList.add('liked');
    const isLiked = (num) => {
      if (num % 2 !== 0) {
        _createLike_js__WEBPACK_IMPORTED_MODULE_0__["default"].recordLike(artist.id);
      } else {
        likesIcon.classList.remove('liked');
        _createLike_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayLikes(artist.id);
      }
    };
    isLiked(clicks);
  });

  const likesCount = document.createElement('span');
  likesCount.className = 'likes';
  likesCount.textContent = await _createLike_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayLikes(artist.id);
  likesCont.appendChild(likesCount);

  const commentBtn = document.createElement('button');
  commentBtn.className = 'more';
  commentBtn.setAttribute('type', 'button');
  commentBtn.textContent = '+ More';
  artistInfo.appendChild(commentBtn);

  _createLike_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLikes();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCard);

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createForm = (artistId) => {
  const theForm = document.createElement('form');
  theForm.setAttribute('method', 'POST');
  theForm.setAttribute('id', 'comment-form');
  theForm.setAttribute('action', '#');
  theForm.className = artistId;

  const nameField = document.createElement('input');
  nameField.setAttribute('type', 'text');
  nameField.setAttribute('placeholder', 'Your name ...');
  nameField.setAttribute('id', 'name-field');

  const textArea = document.createElement('textarea');
  textArea.setAttribute('placeholder', 'Type your comment here ...');
  textArea.setAttribute('id', 'textarea-field');

  const submitBtn = document.createElement('input');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('id', 'submit-comment');
  submitBtn.setAttribute('value', 'Submit');

  theForm.appendChild(nameField);
  theForm.appendChild(textArea);
  theForm.appendChild(submitBtn);

  return theForm;
};

const createDiv = (classArr) => {
  const divider = document.createElement('div');
  divider.classList.add(...classArr);
  return divider;
};

const createIdDiv = (id) => {
  const idDiv = document.createElement('div');
  idDiv.setAttribute('id', id);
  return idDiv;
};

const createImage = () => {
  const imageTag = document.createElement('img');
  imageTag.setAttribute('id', 'commet-image');
  imageTag.setAttribute('src', 'close-modal');
  return imageTag;
};

const createModalBtn = () => {
  const modalBtn = document.createElement('button');
  modalBtn.setAttribute('type', 'button');
  modalBtn.setAttribute('id', 'close-modal');
  modalBtn.innerHTML = '&times;';
  return modalBtn;
};

const mainTitle = (tag, id) => {
  const header = document.createElement(tag);
  header.setAttribute('id', id);
  return header;
};

const createModal = (artistId) => {
  const commentWrapper = createDiv(['comment-wrapper']);

  const artistImage = createDiv(['artist-image']);
  const grpImgh1 = createIdDiv('grpImgH1');

  const ImageTag = createImage();
  const h1Title = mainTitle('h1', 'comment-page-title');

  grpImgh1.appendChild(ImageTag);
  grpImgh1.appendChild(h1Title);

  const modalBtn = createModalBtn();

  artistImage.appendChild(grpImgh1);
  artistImage.appendChild(modalBtn);

  const artistFact = createIdDiv('artist-facts');

  const h2Title = mainTitle('h2', 'commets-count');

  const displayComments = createIdDiv('display-comments');

  const theForm = createForm(artistId);

  commentWrapper.appendChild(artistImage);
  commentWrapper.appendChild(artistFact);
  commentWrapper.appendChild(h2Title);
  commentWrapper.appendChild(displayComments);
  commentWrapper.appendChild(theForm);

  return commentWrapper;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createModal);


/***/ }),

/***/ "./src/wave.png":
/*!**********************!*\
  !*** ./src/wave.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d451f1a2c277459b6ee.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEs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O0FBQ0E7QUFDQSxvRUFBb0UsVUFBVTtBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUF5QjtBQUNqQyxRQUFRO0FBQ1I7QUFDQSxRQUFRLG1FQUEyQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxpQ0FBaUMsbUVBQTJCO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSwrREFBdUI7QUFDekI7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUNqRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRVSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvY3JlYXRlTGlrZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvZ2V0QXJ0aXN0QVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9ob21lVUkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL21vZGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3dhdmUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0K0FsdGVybmF0ZXM6aXRhbCx3Z2h0QDAsNDAwOzAsODAwOzAsOTAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvdXJjZStTYW5zK1BybyZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG5cXG4gIC8qIG91dGxpbmU6IDJweCBzb2xpZCByZWQ7ICovXFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY29sb3ItcHJpbWFyeTogI2ZhMzQ5NjtcXG4gIC0tY29sb3Itc2Vjb25kYXJ5OiAjZjZmNmY2O1xcbiAgLS1jb2xvci10aGlyZDogIzFjMWUyOTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwNDA1MDYsICMwYzBkMTIsICMxYzFlMjksICMzNDM4NGMpO1xcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzb2Z0LWxpZ2h0O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNwYWdlLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyJSA4JTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODBhMGU7XFxuICBib3gtc2hhZG93OiAyNXB4IDQwcHggMjE0cHggLTIwcHggcmdiYSgyNTAsIDUyLCAxNTEsIDAuNTA3KSwgMjVweCA0MHB4IDIxNHB4IC0yMHB4IHJnYmEoMjUwLCA1MiwgMTUxLCAwLjUwNyk7XFxufVxcblxcbiNsb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNsb2ctaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA2NXB4O1xcbn1cXG5cXG4jbG9nbyBoMSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQgQWx0ZXJuYXRlcycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuI25hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbmF2LWxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNuYXYtbGlua3MgbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuYXYtbGlua3MgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbiNuYXYtbGlua3MgbGkgKyBsaSArIGxpIGEge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jaG9tZS1idG4ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjNyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jYXJ0aXN0LWNvdW50ZXIge1xcbiAgb3JkZXI6IDE7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxuI3BhZ2UtZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRoaXJkKTtcXG4gIHBhZGRpbmc6IDIlIDglO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbiNhcnRpc3QtbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuI2xpc3Qge1xcbiAgbWFyZ2luOiAxNXJlbSAwIDhyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXJlbTtcXG59XFxuXFxuI2xpc3QgaDIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCBBbHRlcm5hdGVzJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmFydGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWUyOTtcXG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtIDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDE2MHB4IDEwcHggMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgd2lkdGg6IDg1JTtcXG59XFxuXFxuLmFydGlzdC1pbWcge1xcbiAgYm94LXNoYWRvdzogMCAwIDgwcHggLTEwcHggdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICBib3JkZXItcmFkaXVzOiAwIDE2N3B4IDEwcHggMTBweDtcXG59XFxuXFxuLmFydGlzdC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9wLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLnRvcC1pbmZvIGgzIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubGlrZXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZmEtaGVhcnQge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBmb250LXNpemU6IDI3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYS1oZWFydC5saWtlZCB7XFxuICBjb2xvcjogI2ZjYjQyNDtcXG59XFxuXFxuLmxpa2VzIHtcXG4gIGZsZXg6IDgwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4vKiBjb21tZW50IHBvcCB1cCBzdHlsZXMgKi9cXG4uY29tbWVudC1wb3B1cCB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRoaXJkKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMTBweCAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMjtcXG4gIHdpZHRoOiA5MCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4uY29tbWVudC13cmFwcGVyIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCBwaW5rO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogZGl2IGdyb3VwaW5nIGltYWdlICYgdGl0bGUgKi9cXG4jZ3JwSW1nSDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY2xvc2UtbW9kYWwge1xcbiAgYWxsOiB1bnNldDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5hcnRpc3QtaW1hZ2Uge1xcbiAgLyogb3V0bGluZToxcHggc29saWQgcmVkOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jY29tbWV0LWltYWdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuZGl2LmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGl2LnNob3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vcmUsXFxuI3N1YnNjcmliZS1idG4ge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbiNzdWJzY3JpYmUtYnRuIHtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7O0VBRVQsNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RC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QUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCtBbHRlcm5hdGVzOml0YWwsd2dodEAwLDQwMDswLDgwMDswLDkwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Tb3VyY2UrU2FucytQcm8mZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG5cXG4gIC8qIG91dGxpbmU6IDJweCBzb2xpZCByZWQ7ICovXFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY29sb3ItcHJpbWFyeTogI2ZhMzQ5NjtcXG4gIC0tY29sb3Itc2Vjb25kYXJ5OiAjZjZmNmY2O1xcbiAgLS1jb2xvci10aGlyZDogIzFjMWUyOTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwNDA1MDYsICMwYzBkMTIsICMxYzFlMjksICMzNDM4NGMpO1xcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzb2Z0LWxpZ2h0O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNwYWdlLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyJSA4JTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODBhMGU7XFxuICBib3gtc2hhZG93OiAyNXB4IDQwcHggMjE0cHggLTIwcHggcmdiYSgyNTAsIDUyLCAxNTEsIDAuNTA3KSwgMjVweCA0MHB4IDIxNHB4IC0yMHB4IHJnYmEoMjUwLCA1MiwgMTUxLCAwLjUwNyk7XFxufVxcblxcbiNsb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNsb2ctaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vd2F2ZS5wbmcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNjVweDtcXG59XFxuXFxuI2xvZ28gaDEge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0IEFsdGVybmF0ZXMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbiNuYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI25hdi1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4jbmF2LWxpbmtzIGxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmF2LWxpbmtzIGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4jbmF2LWxpbmtzIGxpICsgbGkgKyBsaSBhIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI2hvbWUtYnRuIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI2FydGlzdC1jb3VudGVyIHtcXG4gIG9yZGVyOiAxO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbiNwYWdlLWZvb3RlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10aGlyZCk7XFxuICBwYWRkaW5nOiAyJSA4JTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jYXJ0aXN0LWxpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBnYXA6IDNyZW07XFxufVxcblxcbiNsaXN0IHtcXG4gIG1hcmdpbjogMTVyZW0gMCA4cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVyZW07XFxufVxcblxcbiNsaXN0IGgyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQgQWx0ZXJuYXRlcycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5hcnRpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzFlMjk7XFxuICBwYWRkaW5nOiAwLjhyZW0gMXJlbSAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxNjBweCAxMHB4IDEwcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIHdpZHRoOiA4NSU7XFxufVxcblxcbi5hcnRpc3QtaW1nIHtcXG4gIGJveC1zaGFkb3c6IDAgMCA4MHB4IC0xMHB4IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAxNjdweCAxMHB4IDEwcHg7XFxufVxcblxcbi5hcnRpc3QtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvcC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi50b3AtaW5mbyBoMyB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmxpa2VzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmZhLWhlYXJ0IHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgZm9udC1zaXplOiAyN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmEtaGVhcnQubGlrZWQge1xcbiAgY29sb3I6ICNmY2I0MjQ7XFxufVxcblxcbi5saWtlcyB7XFxuICBmbGV4OiA4MCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLyogY29tbWVudCBwb3AgdXAgc3R5bGVzICovXFxuLmNvbW1lbnQtcG9wdXAge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10aGlyZCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDEwcHggMjBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDI7XFxuICB3aWR0aDogOTAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLmNvbW1lbnQtd3JhcHBlciB7XFxuICBvdXRsaW5lOiAycHggc29saWQgcGluaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIGRpdiBncm91cGluZyBpbWFnZSAmIHRpdGxlICovXFxuI2dycEltZ0gxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2Nsb3NlLW1vZGFsIHtcXG4gIGFsbDogdW5zZXQ7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4uYXJ0aXN0LWltYWdlIHtcXG4gIC8qIG91dGxpbmU6MXB4IHNvbGlkIHJlZDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2NvbW1ldC1pbWFnZSB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmRpdi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmRpdi5zaG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tb3JlLFxcbiNzdWJzY3JpYmUtYnRuIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbn1cXG5cXG4jc3Vic2NyaWJlLWJ0biB7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYXJ0aXN0c0FQSSBmcm9tICcuL21vZHVsZXMvZ2V0QXJ0aXN0QVBJLmpzJztcbmltcG9ydCBjcmVhdGVDYXJkIGZyb20gJy4vbW9kdWxlcy9ob21lVUkuanMnO1xuaW1wb3J0IENvbW1lbnRVSSBmcm9tICcuL21vZHVsZXMvY29tbWVudFVJLmpzJztcbmltcG9ydCBDb21tZW50IGZyb20gJy4vbW9kdWxlcy9jb21tZW50LmpzJztcbmltcG9ydCBtb2RhbFdpbmRvdyBmcm9tICcuL21vZHVsZXMvbW9kYWwuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGFydGlzdENvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FydGlzdC1jb3VudGVyJyk7XG5cbmNvbnN0IGNvbW1lbnRQb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50X3BvcHVwJyk7XG5jb25zdCBhcnRpc3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FydGlzdC1saXN0Jyk7XG5cbmFydGlzdExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICBjb25zdCBhcnRpc3RJZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcbiAgY29tbWVudFBvcHVwLmlubmVySFRNTCA9ICcnO1xuICBjb21tZW50UG9wdXAuYXBwZW5kQ2hpbGQobW9kYWxXaW5kb3coYXJ0aXN0SWQpKTtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ21vcmUnKSB7XG4gICAgY29uc3QgY29tbWV0SW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWV0LWltYWdlJyk7XG4gICAgY29uc3QgY29tbWVudFBhZ2VUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LXBhZ2UtdGl0bGUnKTtcbiAgICBjb25zdCBhcnRpc3RGYWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnRpc3QtZmFjdHMnKTtcbiAgICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5LWNvbW1lbnRzJyk7XG4gICAgY29tbWV0SW1hZ2Uuc3JjID0gJyc7XG4gICAgY29tbWVudFBhZ2VUaXRsZS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnN0IGFydGlzdElkID0gZS5wYXRoWzJdLmlkO1xuICAgIGNvbW1lbnRQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgY29tbWVudFBvcHVwLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICBjb25zdCB7XG4gICAgICB0eXBlLFxuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgc2hvcnRjdXQsXG4gICAgICBiaW9zOiBbeyBhdXRob3IgfV0sXG4gICAgfSA9IGF3YWl0IGFydGlzdHNBUEkuZ2V0QXJ0aXN0QnlJZChhcnRpc3RJZCk7XG4gICAgY29tbWV0SW1hZ2Uuc3JjID0gYGh0dHBzOi8vYXBpLm5hcHN0ZXIuY29tL2ltYWdlc2VydmVyL3YyL2FydGlzdHMvJHthcnRpc3RJZH0vaW1hZ2VzLzM1NngyMzcuanBnYDtcbiAgICBjb21tZW50UGFnZVRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBDb21tZW50VUkuYWRkRmFjdHMoYXJ0aXN0RmFjdHMsIFt0eXBlLCBuYW1lLCBzaG9ydGN1dCwgYXV0aG9yXSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBDb21tZW50LmdldENvbW1lbnRzKGlkKTtcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJlc3VsdC5mb3JFYWNoKChjb21tZW50KSA9PiBDb21tZW50VUkuc2hvd0NvbW1lbnRzKGNvbW1lbnRMaXN0LCBjb21tZW50KSk7XG4gICAgfVxuICB9XG59KTtcblxuY29tbWVudFBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmlkID09PSAnY2xvc2UtbW9kYWwnKSB7XG4gICAgY29tbWVudFBvcHVwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBjb21tZW50UG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICB9XG59KTtcblxuY29tbWVudFBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgY29tbWVudEZvcm0gPSBlLnRhcmdldDtcbiAgY29uc3QgbmFtZSA9IGNvbW1lbnRGb3JtLmVsZW1lbnRzWzBdLnZhbHVlO1xuICBjb25zdCBtZXNzYWdlID0gY29tbWVudEZvcm0uZWxlbWVudHNbMV0udmFsdWU7XG4gIGNvbnN0IGFydGlzdElkID0gY29tbWVudEZvcm0uY2xhc3NOYW1lO1xuICBjb21tZW50Rm9ybS5lbGVtZW50c1swXS52YWx1ZSA9ICcnO1xuICBjb21tZW50Rm9ybS5lbGVtZW50c1sxXS52YWx1ZSA9ICcnO1xuICBDb21tZW50LnBvc3RDb21tZW50cyhhcnRpc3RJZCwgbmFtZSwgbWVzc2FnZSk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcbiAgY29uc3QgYXJ0aXN0cyA9IGF3YWl0IGFydGlzdHNBUEkuZ2V0QXJ0aXN0KCk7XG4gIGFydGlzdENvdW50LnRleHRDb250ZW50ID0gYCgke2FydGlzdHMubGVuZ3RofSlgO1xuICBhcnRpc3RzLmZvckVhY2goY3JlYXRlQ2FyZCk7XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnQge1xuICBzdGF0aWMgcG9zdENvbW1lbnRzID0gYXN5bmMgKGFydGlzdElkLCB1c2VybmFtZSwgY29tbWVudCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvRERSM1F4Z0U0UUh1dGVKZTJHTDcvY29tbWVudHMnLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpdGVtX2lkOiBhcnRpc3RJZCxcbiAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICBjb21tZW50LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHN0YXRpYyBnZXRDb21tZW50cyA9IGFzeW5jIChhcnRpc3RJZCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvRERSM1F4Z0U0UUh1dGVKZTJHTDcvY29tbWVudHM/aXRlbV9pZD0ke1xuICAgICAgICBhcnRpc3RJZH1gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50VUkge1xuICBzdGF0aWMgYWRkRmFjdHMgPSBhc3luYyAocGFyZW50RWxlbWVudCwgZmFjdHMpID0+IHtcbiAgICAvLyBjbGVhciBvbGQgZW50cmllc1xuICAgIHBhcmVudEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgZmFjdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7IC8vIFt0eXBlLCBuYW1lLCBzaG9ydGN1dCwgYXV0aG9yXVxuICAgIGZhY3QxLnRleHRDb250ZW50ID0gYE5hbWU6ICR7ZmFjdHNbMV19YDtcbiAgICBjb25zdCBmYWN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmYWN0Mi50ZXh0Q29udGVudCA9IGBUeXBlOiAke2ZhY3RzWzBdfWA7XG4gICAgY29uc3QgZmFjdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZmFjdDMudGV4dENvbnRlbnQgPSBgU2hvcnRjdXQ6ICR7ZmFjdHNbMl19YDtcbiAgICBjb25zdCBmYWN0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmYWN0NC50ZXh0Q29udGVudCA9IGBBdXRob3I6ICR7ZmFjdHNbM119YDtcblxuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFjdDEpO1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFjdDIpO1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFjdDMpO1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFjdDQpO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gIH07XG5cbiAgc3RhdGljIHNob3dDb21tZW50cyA9IChcbiAgICBlbGUsXG4gICAgeyBjcmVhdGlvbl9kYXRlOiBkYXRlLCBjb21tZW50OiBtZXNzYWdlLCB1c2VybmFtZTogbmFtZSB9LFxuICApID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjcmVhdGlvbl9kYXRlOiBjcmVhdGlvbkRhdGUsXG4gICAgICBjb21tZW50LFxuICAgICAgdXNlcm5hbWUsXG4gICAgfSA9IHsgY3JlYXRpb25fZGF0ZTogZGF0ZSwgY29tbWVudDogbWVzc2FnZSwgdXNlcm5hbWU6IG5hbWUgfTtcbiAgICBjb25zdCBjb21FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb21FbC5pbm5lclRleHQgPSBgJHtjcmVhdGlvbkRhdGV9ICR7dXNlcm5hbWV9ICR7Y29tbWVudH0gYDtcbiAgICAvLyBjb25zb2xlLmxvZyhjb21FbCk7XG4gICAgZWxlLmFwcGVuZENoaWxkKGNvbUVsKTtcbiAgICByZXR1cm4gY29tRWw7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZvbHZlbWVudEFQSSB7XG4gIHN0YXRpYyBhc3luYyByZWNvcmRMaWtlKGlkKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3EyRWVjSURvbHlpRGd1UW1rRklqL2xpa2VzLycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXN1bHQudGV4dCgpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRMaWtlcygpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvcTJFZWNJRG9seWlEZ3VRbWtGSWovbGlrZXMvJyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBkaXNwbGF5TGlrZXMoaWQpIHtcbiAgICBjb25zdCBsaWtlcyA9IGF3YWl0IEludm9sdmVtZW50QVBJLmdldExpa2VzKCk7XG4gICAgY29uc3QgYXJ0aXN0TGlrZXMgPSBsaWtlcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaXRlbV9pZCA9PT0gaWQpO1xuICAgIGlmIChhcnRpc3RMaWtlcy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IG5MaWtlcyA9IGFydGlzdExpa2VzWzBdLmxpa2VzO1xuICAgIHJldHVybiBuTGlrZXM7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGFydGlzdHNBUEkge1xuICBzdGF0aWMgYXN5bmMgZ2V0QXJ0aXN0KCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAnaHR0cHM6Ly9hcGkubmFwc3Rlci5jb20vdjIuMi9hcnRpc3RzL3RvcD9hcGlrZXk9WmpBMFptWXhabUl0T1RJMU5pMDBZVGRqTFdFek1UWXRNakF5WkRjMU9UYzNOekJoJmxpbWl0PTMwJm9mZnNldD0yMicsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGEuYXJ0aXN0cztcbiAgfVxuXG4gIHN0YXRpYyBnZXRBcnRpc3RCeUlkID0gYXN5bmMgKGFydGlzdElkKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5uYXBzdGVyLmNvbS92Mi4yL2FydGlzdHMvJHthcnRpc3RJZH0/YXBpa2V5PVpqQTBabVl4Wm1JdE9USTFOaTAwWVRkakxXRXpNVFl0TWpBeVpEYzFPVGMzTnpCaGAsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGEuYXJ0aXN0c1swXTtcbiAgfTtcbn1cbiIsImltcG9ydCBJbnZvbHZlbWVudEFQSSBmcm9tICcuL2NyZWF0ZUxpa2UuanMnO1xuXG5jb25zdCBhcnRpc3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnRpc3QtbGlzdCcpO1xuXG5jb25zdCBjcmVhdGVDYXJkID0gYXN5bmMgKGFydGlzdCkgPT4ge1xuICBjb25zdCBhcnRpc3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFydGlzdENhcmQuY2xhc3NOYW1lID0gJ2FydGlzdCc7XG4gIGFydGlzdENhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGFydGlzdC5pZCk7XG4gIGFydGlzdHNMaXN0LmFwcGVuZENoaWxkKGFydGlzdENhcmQpO1xuXG4gIGNvbnN0IGFydGlzdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBhcnRpc3RJbWcuY2xhc3NOYW1lID0gJ2FydGlzdC1pbWcnO1xuICBhcnRpc3RJbWcuc3JjID0gYGh0dHBzOi8vYXBpLm5hcHN0ZXIuY29tL2ltYWdlc2VydmVyL3YyL2FydGlzdHMvJHthcnRpc3QuaWR9L2ltYWdlcy8zNTZ4MjM3LmpwZ2A7XG4gIGFydGlzdENhcmQuYXBwZW5kQ2hpbGQoYXJ0aXN0SW1nKTtcblxuICBjb25zdCBhcnRpc3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFydGlzdEluZm8uY2xhc3NOYW1lID0gJ2FydGlzdC1pbmZvJztcbiAgYXJ0aXN0Q2FyZC5hcHBlbmRDaGlsZChhcnRpc3RJbmZvKTtcblxuICBjb25zdCB0b3BJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvcEluZm8uY2xhc3NOYW1lID0gJ3RvcC1pbmZvJztcbiAgYXJ0aXN0SW5mby5hcHBlbmRDaGlsZCh0b3BJbmZvKTtcblxuICBjb25zdCBhcnRpc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgYXJ0aXN0TmFtZS50ZXh0Q29udGVudCA9IGFydGlzdC5uYW1lO1xuICB0b3BJbmZvLmFwcGVuZENoaWxkKGFydGlzdE5hbWUpO1xuXG4gIGNvbnN0IGxpa2VzQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaWtlc0NvbnQuY2xhc3NOYW1lID0gJ2xpa2VzLWNvbnRhaW5lcic7XG4gIHRvcEluZm8uYXBwZW5kQ2hpbGQobGlrZXNDb250KTtcblxuICBjb25zdCBsaWtlc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGxpa2VzSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1oZWFydCcpO1xuICBsaWtlc0NvbnQuYXBwZW5kQ2hpbGQobGlrZXNJY29uKTtcblxuICBsZXQgY2xpY2tzID0gMDtcblxuICBsaWtlc0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xpY2tzICs9IDE7XG4gICAgbGlrZXNJY29uLmNsYXNzTGlzdC5hZGQoJ2xpa2VkJyk7XG4gICAgY29uc3QgaXNMaWtlZCA9IChudW0pID0+IHtcbiAgICAgIGlmIChudW0gJSAyICE9PSAwKSB7XG4gICAgICAgIEludm9sdmVtZW50QVBJLnJlY29yZExpa2UoYXJ0aXN0LmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpa2VzSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdsaWtlZCcpO1xuICAgICAgICBJbnZvbHZlbWVudEFQSS5kaXNwbGF5TGlrZXMoYXJ0aXN0LmlkKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlzTGlrZWQoY2xpY2tzKTtcbiAgfSk7XG5cbiAgY29uc3QgbGlrZXNDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgbGlrZXNDb3VudC5jbGFzc05hbWUgPSAnbGlrZXMnO1xuICBsaWtlc0NvdW50LnRleHRDb250ZW50ID0gYXdhaXQgSW52b2x2ZW1lbnRBUEkuZGlzcGxheUxpa2VzKGFydGlzdC5pZCk7XG4gIGxpa2VzQ29udC5hcHBlbmRDaGlsZChsaWtlc0NvdW50KTtcblxuICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbW1lbnRCdG4uY2xhc3NOYW1lID0gJ21vcmUnO1xuICBjb21tZW50QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgY29tbWVudEJ0bi50ZXh0Q29udGVudCA9ICcrIE1vcmUnO1xuICBhcnRpc3RJbmZvLmFwcGVuZENoaWxkKGNvbW1lbnRCdG4pO1xuXG4gIEludm9sdmVtZW50QVBJLmdldExpa2VzKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXJkOyIsImNvbnN0IGNyZWF0ZUZvcm0gPSAoYXJ0aXN0SWQpID0+IHtcbiAgY29uc3QgdGhlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgdGhlRm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdQT1NUJyk7XG4gIHRoZUZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdjb21tZW50LWZvcm0nKTtcbiAgdGhlRm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7XG4gIHRoZUZvcm0uY2xhc3NOYW1lID0gYXJ0aXN0SWQ7XG5cbiAgY29uc3QgbmFtZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgbmFtZSAuLi4nKTtcbiAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZS1maWVsZCcpO1xuXG4gIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUeXBlIHlvdXIgY29tbWVudCBoZXJlIC4uLicpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RleHRhcmVhLWZpZWxkJyk7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LWNvbW1lbnQnKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnU3VibWl0Jyk7XG5cbiAgdGhlRm9ybS5hcHBlbmRDaGlsZChuYW1lRmllbGQpO1xuICB0aGVGb3JtLmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgdGhlRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gIHJldHVybiB0aGVGb3JtO1xufTtcblxuY29uc3QgY3JlYXRlRGl2ID0gKGNsYXNzQXJyKSA9PiB7XG4gIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzQXJyKTtcbiAgcmV0dXJuIGRpdmlkZXI7XG59O1xuXG5jb25zdCBjcmVhdGVJZERpdiA9IChpZCkgPT4ge1xuICBjb25zdCBpZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpZERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICByZXR1cm4gaWREaXY7XG59O1xuXG5jb25zdCBjcmVhdGVJbWFnZSA9ICgpID0+IHtcbiAgY29uc3QgaW1hZ2VUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1hZ2VUYWcuc2V0QXR0cmlidXRlKCdpZCcsICdjb21tZXQtaW1hZ2UnKTtcbiAgaW1hZ2VUYWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnY2xvc2UtbW9kYWwnKTtcbiAgcmV0dXJuIGltYWdlVGFnO1xufTtcblxuY29uc3QgY3JlYXRlTW9kYWxCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1vZGFsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgbW9kYWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZS1tb2RhbCcpO1xuICBtb2RhbEJ0bi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XG4gIHJldHVybiBtb2RhbEJ0bjtcbn07XG5cbmNvbnN0IG1haW5UaXRsZSA9ICh0YWcsIGlkKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5jb25zdCBjcmVhdGVNb2RhbCA9IChhcnRpc3RJZCkgPT4ge1xuICBjb25zdCBjb21tZW50V3JhcHBlciA9IGNyZWF0ZURpdihbJ2NvbW1lbnQtd3JhcHBlciddKTtcblxuICBjb25zdCBhcnRpc3RJbWFnZSA9IGNyZWF0ZURpdihbJ2FydGlzdC1pbWFnZSddKTtcbiAgY29uc3QgZ3JwSW1naDEgPSBjcmVhdGVJZERpdignZ3JwSW1nSDEnKTtcblxuICBjb25zdCBJbWFnZVRhZyA9IGNyZWF0ZUltYWdlKCk7XG4gIGNvbnN0IGgxVGl0bGUgPSBtYWluVGl0bGUoJ2gxJywgJ2NvbW1lbnQtcGFnZS10aXRsZScpO1xuXG4gIGdycEltZ2gxLmFwcGVuZENoaWxkKEltYWdlVGFnKTtcbiAgZ3JwSW1naDEuYXBwZW5kQ2hpbGQoaDFUaXRsZSk7XG5cbiAgY29uc3QgbW9kYWxCdG4gPSBjcmVhdGVNb2RhbEJ0bigpO1xuXG4gIGFydGlzdEltYWdlLmFwcGVuZENoaWxkKGdycEltZ2gxKTtcbiAgYXJ0aXN0SW1hZ2UuYXBwZW5kQ2hpbGQobW9kYWxCdG4pO1xuXG4gIGNvbnN0IGFydGlzdEZhY3QgPSBjcmVhdGVJZERpdignYXJ0aXN0LWZhY3RzJyk7XG5cbiAgY29uc3QgaDJUaXRsZSA9IG1haW5UaXRsZSgnaDInLCAnY29tbWV0cy1jb3VudCcpO1xuXG4gIGNvbnN0IGRpc3BsYXlDb21tZW50cyA9IGNyZWF0ZUlkRGl2KCdkaXNwbGF5LWNvbW1lbnRzJyk7XG5cbiAgY29uc3QgdGhlRm9ybSA9IGNyZWF0ZUZvcm0oYXJ0aXN0SWQpO1xuXG4gIGNvbW1lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGFydGlzdEltYWdlKTtcbiAgY29tbWVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoYXJ0aXN0RmFjdCk7XG4gIGNvbW1lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGgyVGl0bGUpO1xuICBjb21tZW50V3JhcHBlci5hcHBlbmRDaGlsZChkaXNwbGF5Q29tbWVudHMpO1xuICBjb21tZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0aGVGb3JtKTtcblxuICByZXR1cm4gY29tbWVudFdyYXBwZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNb2RhbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==