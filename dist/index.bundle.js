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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  text-decoration: none;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n\n  /* outline: 2px solid red; */\n  font-size: 20px;\n}\n\n:root {\n  --color-primary: #fa3496;\n  --color-secondary: #f6f6f6;\n  --color-third: #1c1e29;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background-image: linear-gradient(180deg, #040506, #0c0d12, #1c1e29, #34384c);\n  background-blend-mode: soft-light;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  backdrop-filter: blur(10px);\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\n#page-header {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 2% 8%;\n  position: fixed;\n  background-color: #080a0e;\n  box-shadow: 25px 40px 214px -20px rgba(250, 52, 151, 0.507), 25px 40px 214px -20px rgba(250, 52, 151, 0.507);\n}\n\n#logo {\n  display: flex;\n}\n\n#log-icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 100%;\n  width: 65px;\n}\n\n#logo h1 {\n  font-family: 'Montserrat Alternates', sans-serif;\n  font-size: 2rem;\n  color: var(--color-secondary);\n  font-style: italic;\n}\n\n#navbar {\n  display: flex;\n}\n\n#nav-links {\n  display: flex;\n  gap: 2rem;\n  font-size: 2rem;\n}\n\n#nav-links li {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n}\n\n#nav-links li a {\n  text-decoration: none;\n  color: var(--color-secondary);\n  font-weight: bold;\n  font-size: 1.3rem;\n}\n\n#nav-links li + li + li a {\n  color: var(--color-primary);\n  font-size: 1rem;\n}\n\n#home-btn {\n  color: #fff;\n  display: flex;\n  gap: 0.3rem;\n  font-weight: 600;\n}\n\n#artist-counter {\n  order: 1;\n  font-size: 1.3rem;\n  color: var(--color-primary);\n}\n\n#page-footer {\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  background-color: var(--color-third);\n  padding: 2% 8%;\n  color: #fff;\n}\n\n#artist-list {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 3rem;\n}\n\n#list {\n  margin: 15rem 0 8rem;\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\n\n#list h2 {\n  color: var(--color-secondary);\n  font-size: 2.5rem;\n  font-family: 'Montserrat Alternates', sans-serif;\n}\n\n.artist {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  background-color: #1c1e29;\n  padding: 0.8rem 1rem 2rem;\n  border-radius: 10px 160px 10px 10px;\n  color: var(--color-secondary);\n  width: 85%;\n}\n\n.artist-img {\n  box-shadow: 0 0 80px -10px var(--color-primary);\n  border-radius: 0 167px 10px 10px;\n}\n\n.artist-info {\n  display: flex;\n  flex-direction: column;\n}\n\n.top-info {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n  font-size: 2.5rem;\n}\n\n.top-info h3 {\n  font-size: 1.3rem;\n}\n\n.likes-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.fa-heart {\n  justify-self: end;\n  font-size: 27px;\n  cursor: pointer;\n}\n\n.fa-heart.liked {\n  color: #fcb424;\n}\n\n.likes {\n  flex: 80%;\n  text-align: right;\n}\n\n/* comment pop up styles */\n.comment-popup {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  height: 100%;\n  width: 100vw;\n  position: absolute;\n  align-self: center;\n  background-color: #040506;\n  backdrop-filter: blur(20px);\n  opacity: 95%;\n  z-index: 2;\n  padding-top: 5rem;\n}\n\n.comment-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1.8rem;\n  color: var(--color-secondary);\n  background-color: #1c1e29;\n  outline: 2px solid pink;\n  border-radius: 10px 10px 160px 10px;\n  mix-blend-mode: screen;\n  padding: 1rem 1rem 4rem;\n  position: fixed;\n  width: 40%;\n  box-shadow: 14px 16px 69px 7px rgba(250, 52, 150, 1);\n}\n\n#comment-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 60%;\n}\n\n/* div grouping image & title */\n#grpImgH1 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  text-align: center;\n  color: white;\n  order: 1;\n  width: 100%;\n}\n\n#comment-page-title {\n  font-size: 2rem;\n}\n\n#close-modal {\n  all: unset;\n  height: 40px;\n  color: white;\n  cursor: pointer;\n  font-size: 2em;\n  order: 0;\n  width: 90%;\n  text-align: end;\n}\n\n.artist-image {\n  display: flex;\n  gap: 1.5rem;\n  flex-direction: column;\n  align-items: center;\n}\n\n#artist-facts {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  gap: 0.8rem;\n  background-color: #34384c;\n  margin: 0 2rem;\n  padding: 1rem 0;\n}\n\n#commet-image {\n  border-radius: 5px;\n  width: 85%;\n}\n\n#commets-count,\n#display-comments,\n#comment-form {\n  padding-left: 2.5rem;\n}\n\n#display-comments {\n  overflow: hidden;\n  overflow-y: scroll;\n  height: 80px;\n}\n\ndiv.hide {\n  display: none;\n}\n\ndiv.show {\n  display: flex;\n}\n\n.more,\n#subscribe-btn,\n#submit-comment {\n  width: 120px;\n  background-color: transparent;\n  border: none;\n  border: 2px solid var(--color-primary);\n  padding: 0.5rem 0.8rem;\n  border-radius: 30px;\n  align-items: flex-start;\n  font-family: inherit;\n  font-weight: 600;\n  color: var(--color-primary);\n  cursor: pointer;\n}\n\n#subscribe-btn,\n#submit-comment {\n  width: 120px;\n}\n\n#submit-comment {\n  color: var(--color-secondary);\n  background-image: linear-gradient(180deg, #dc0570, #fb66b0);\n}\n\n#name-field,\n#textarea-field {\n  font-family: 'Source Sans Pro', sans-serif;\n  padding: 0.8rem 1rem;\n  background-color: transparent;\n  border: 2px solid var(--color-primary);\n  color: var(--color-primary);\n  border-radius: 8px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;0,800;0,900;1,800;1,900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');\n\n* {\n  text-decoration: none;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n\n  /* outline: 2px solid red; */\n  font-size: 20px;\n}\n\n:root {\n  --color-primary: #fa3496;\n  --color-secondary: #f6f6f6;\n  --color-third: #1c1e29;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background-image: linear-gradient(180deg, #040506, #0c0d12, #1c1e29, #34384c);\n  background-blend-mode: soft-light;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  backdrop-filter: blur(10px);\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\n#page-header {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 2% 8%;\n  position: fixed;\n  background-color: #080a0e;\n  box-shadow: 25px 40px 214px -20px rgba(250, 52, 151, 0.507), 25px 40px 214px -20px rgba(250, 52, 151, 0.507);\n}\n\n#logo {\n  display: flex;\n}\n\n#log-icon {\n  background-image: url('./wave.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 100%;\n  width: 65px;\n}\n\n#logo h1 {\n  font-family: 'Montserrat Alternates', sans-serif;\n  font-size: 2rem;\n  color: var(--color-secondary);\n  font-style: italic;\n}\n\n#navbar {\n  display: flex;\n}\n\n#nav-links {\n  display: flex;\n  gap: 2rem;\n  font-size: 2rem;\n}\n\n#nav-links li {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n}\n\n#nav-links li a {\n  text-decoration: none;\n  color: var(--color-secondary);\n  font-weight: bold;\n  font-size: 1.3rem;\n}\n\n#nav-links li + li + li a {\n  color: var(--color-primary);\n  font-size: 1rem;\n}\n\n#home-btn {\n  color: #fff;\n  display: flex;\n  gap: 0.3rem;\n  font-weight: 600;\n}\n\n#artist-counter {\n  order: 1;\n  font-size: 1.3rem;\n  color: var(--color-primary);\n}\n\n#page-footer {\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  background-color: var(--color-third);\n  padding: 2% 8%;\n  color: #fff;\n}\n\n#artist-list {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 3rem;\n}\n\n#list {\n  margin: 15rem 0 8rem;\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\n\n#list h2 {\n  color: var(--color-secondary);\n  font-size: 2.5rem;\n  font-family: 'Montserrat Alternates', sans-serif;\n}\n\n.artist {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  background-color: #1c1e29;\n  padding: 0.8rem 1rem 2rem;\n  border-radius: 10px 160px 10px 10px;\n  color: var(--color-secondary);\n  width: 85%;\n}\n\n.artist-img {\n  box-shadow: 0 0 80px -10px var(--color-primary);\n  border-radius: 0 167px 10px 10px;\n}\n\n.artist-info {\n  display: flex;\n  flex-direction: column;\n}\n\n.top-info {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n  font-size: 2.5rem;\n}\n\n.top-info h3 {\n  font-size: 1.3rem;\n}\n\n.likes-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.fa-heart {\n  justify-self: end;\n  font-size: 27px;\n  cursor: pointer;\n}\n\n.fa-heart.liked {\n  color: #fcb424;\n}\n\n.likes {\n  flex: 80%;\n  text-align: right;\n}\n\n/* comment pop up styles */\n.comment-popup {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  height: 100%;\n  width: 100vw;\n  position: absolute;\n  align-self: center;\n  background-color: #040506;\n  backdrop-filter: blur(20px);\n  opacity: 95%;\n  z-index: 2;\n  padding-top: 5rem;\n}\n\n.comment-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1.8rem;\n  color: var(--color-secondary);\n  background-color: #1c1e29;\n  outline: 2px solid pink;\n  border-radius: 10px 10px 160px 10px;\n  mix-blend-mode: screen;\n  padding: 1rem 1rem 4rem;\n  position: fixed;\n  width: 40%;\n  box-shadow: 14px 16px 69px 7px rgba(250, 52, 150, 1);\n}\n\n#comment-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 60%;\n}\n\n/* div grouping image & title */\n#grpImgH1 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  text-align: center;\n  color: white;\n  order: 1;\n  width: 100%;\n}\n\n#comment-page-title {\n  font-size: 2rem;\n}\n\n#close-modal {\n  all: unset;\n  height: 40px;\n  color: white;\n  cursor: pointer;\n  font-size: 2em;\n  order: 0;\n  width: 90%;\n  text-align: end;\n}\n\n.artist-image {\n  display: flex;\n  gap: 1.5rem;\n  flex-direction: column;\n  align-items: center;\n}\n\n#artist-facts {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  gap: 0.8rem;\n  background-color: #34384c;\n  margin: 0 2rem;\n  padding: 1rem 0;\n}\n\n#commet-image {\n  border-radius: 5px;\n  width: 85%;\n}\n\n#commets-count,\n#display-comments,\n#comment-form {\n  padding-left: 2.5rem;\n}\n\n#display-comments {\n  overflow: hidden;\n  overflow-y: scroll;\n  height: 80px;\n}\n\ndiv.hide {\n  display: none;\n}\n\ndiv.show {\n  display: flex;\n}\n\n.more,\n#subscribe-btn,\n#submit-comment {\n  width: 120px;\n  background-color: transparent;\n  border: none;\n  border: 2px solid var(--color-primary);\n  padding: 0.5rem 0.8rem;\n  border-radius: 30px;\n  align-items: flex-start;\n  font-family: inherit;\n  font-weight: 600;\n  color: var(--color-primary);\n  cursor: pointer;\n}\n\n#subscribe-btn,\n#submit-comment {\n  width: 120px;\n}\n\n#submit-comment {\n  color: var(--color-secondary);\n  background-image: linear-gradient(180deg, #dc0570, #fb66b0);\n}\n\n#name-field,\n#textarea-field {\n  font-family: 'Source Sans Pro', sans-serif;\n  padding: 0.8rem 1rem;\n  background-color: transparent;\n  border: 2px solid var(--color-primary);\n  color: var(--color-primary);\n  border-radius: 8px;\n}\n"],"sourceRoot":""}]);
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
    const commentCount = document.getElementById('commets-count');
    commetImage.src = '';
    commentPageTitle.textContent = '';
    commentCount.textContent = '';
    commentList.textContent = '';

    // get artist id
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

    commentCount.innerHTML = `Comments (${_modules_comment_js__WEBPACK_IMPORTED_MODULE_3__["default"].commentCounter(result)})`;

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
  const commentList = document.getElementById('display-comments');
  const date = new Date();
  const dateString = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  commentList.appendChild(
    _modules_commentUI_js__WEBPACK_IMPORTED_MODULE_2__["default"].addComments(commentList, {
      creation_date: dateString,
      comment: message,
      username: name,
    }),
  );

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
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DDR3QxgE4QHuteJe2GL7/comments?item_id=${artistId}`,
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

  static commentCounter = (commentsArray) => {
    if (commentsArray.length) return commentsArray.length;
    return 0;
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
    // [type, shortcut, author]
    const fact1 = document.createElement('p');
    fact1.textContent = `Type: ${facts[0]}`;
    const fact3 = document.createElement('p');
    fact3.textContent = `Shortcut: ${facts[2]}`;
    const fact4 = document.createElement('p');
    fact4.textContent = `Author: ${facts[3]}`;

    parentElement.appendChild(fact1);
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

  static addComments = (ele, { creation_date: date, comment: message, username: name }) => {
    this.showComments(ele, { creation_date: date, comment: message, username: name });
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
      'https://api.napster.com/v2.2/artists/top?apikey=ZjA0ZmYxZmItOTI1Ni00YTdjLWEzMTYtMjAyZDc1OTc3NzBh&limit=12&offset=22',
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
  nameField.setAttribute('value', 'Your name');
  nameField.setAttribute('id', 'name-field');

  const textArea = document.createElement('textarea');
  textArea.textContent = 'Add your comment here';
  textArea.setAttribute('id', 'textarea-field');

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'button');
  submitBtn.setAttribute('id', 'submit-comment');
  submitBtn.textContent = 'Send';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsK0JBQStCO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvY29tbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvY29tbWVudFVJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9jcmVhdGVMaWtlLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9nZXRBcnRpc3RBUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL2hvbWVVSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvbW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vd2F2ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQrQWx0ZXJuYXRlczppdGFsLHdnaHRAMCw0MDA7MCw4MDA7MCw5MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U291cmNlK1NhbnMrUHJvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcblxcbiAgLyogb3V0bGluZTogMnB4IHNvbGlkIHJlZDsgKi9cXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jb2xvci1wcmltYXJ5OiAjZmEzNDk2O1xcbiAgLS1jb2xvci1zZWNvbmRhcnk6ICNmNmY2ZjY7XFxuICAtLWNvbG9yLXRoaXJkOiAjMWMxZTI5O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwNDA1MDYsICMwYzBkMTIsICMxYzFlMjksICMzNDM4NGMpO1xcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzb2Z0LWxpZ2h0O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNwYWdlLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyJSA4JTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODBhMGU7XFxuICBib3gtc2hhZG93OiAyNXB4IDQwcHggMjE0cHggLTIwcHggcmdiYSgyNTAsIDUyLCAxNTEsIDAuNTA3KSwgMjVweCA0MHB4IDIxNHB4IC0yMHB4IHJnYmEoMjUwLCA1MiwgMTUxLCAwLjUwNyk7XFxufVxcblxcbiNsb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNsb2ctaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA2NXB4O1xcbn1cXG5cXG4jbG9nbyBoMSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQgQWx0ZXJuYXRlcycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuI25hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbmF2LWxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNuYXYtbGlua3MgbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuYXYtbGlua3MgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbiNuYXYtbGlua3MgbGkgKyBsaSArIGxpIGEge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jaG9tZS1idG4ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjNyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jYXJ0aXN0LWNvdW50ZXIge1xcbiAgb3JkZXI6IDE7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxuI3BhZ2UtZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRoaXJkKTtcXG4gIHBhZGRpbmc6IDIlIDglO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbiNhcnRpc3QtbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuI2xpc3Qge1xcbiAgbWFyZ2luOiAxNXJlbSAwIDhyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXJlbTtcXG59XFxuXFxuI2xpc3QgaDIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCBBbHRlcm5hdGVzJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmFydGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWUyOTtcXG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtIDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDE2MHB4IDEwcHggMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgd2lkdGg6IDg1JTtcXG59XFxuXFxuLmFydGlzdC1pbWcge1xcbiAgYm94LXNoYWRvdzogMCAwIDgwcHggLTEwcHggdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICBib3JkZXItcmFkaXVzOiAwIDE2N3B4IDEwcHggMTBweDtcXG59XFxuXFxuLmFydGlzdC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9wLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLnRvcC1pbmZvIGgzIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubGlrZXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZmEtaGVhcnQge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBmb250LXNpemU6IDI3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYS1oZWFydC5saWtlZCB7XFxuICBjb2xvcjogI2ZjYjQyNDtcXG59XFxuXFxuLmxpa2VzIHtcXG4gIGZsZXg6IDgwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4vKiBjb21tZW50IHBvcCB1cCBzdHlsZXMgKi9cXG4uY29tbWVudC1wb3B1cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDA1MDY7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxuICBvcGFjaXR5OiA5NSU7XFxuICB6LWluZGV4OiAyO1xcbiAgcGFkZGluZy10b3A6IDVyZW07XFxufVxcblxcbi5jb21tZW50LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMS44cmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxZTI5O1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHBpbms7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTYwcHggMTBweDtcXG4gIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XFxuICBwYWRkaW5nOiAxcmVtIDFyZW0gNHJlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiA0MCU7XFxuICBib3gtc2hhZG93OiAxNHB4IDE2cHggNjlweCA3cHggcmdiYSgyNTAsIDUyLCAxNTAsIDEpO1xcbn1cXG5cXG4jY29tbWVudC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLyogZGl2IGdyb3VwaW5nIGltYWdlICYgdGl0bGUgKi9cXG4jZ3JwSW1nSDEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3JkZXI6IDE7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2NvbW1lbnQtcGFnZS10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNjbG9zZS1tb2RhbCB7XFxuICBhbGw6IHVuc2V0O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBvcmRlcjogMDtcXG4gIHdpZHRoOiA5MCU7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5hcnRpc3QtaW1hZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS41cmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhcnRpc3QtZmFjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBnYXA6IDAuOHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM4NGM7XFxuICBtYXJnaW46IDAgMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuI2NvbW1ldC1pbWFnZSB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogODUlO1xcbn1cXG5cXG4jY29tbWV0cy1jb3VudCxcXG4jZGlzcGxheS1jb21tZW50cyxcXG4jY29tbWVudC1mb3JtIHtcXG4gIHBhZGRpbmctbGVmdDogMi41cmVtO1xcbn1cXG5cXG4jZGlzcGxheS1jb21tZW50cyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG5kaXYuaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5kaXYuc2hvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9yZSxcXG4jc3Vic2NyaWJlLWJ0bixcXG4jc3VibWl0LWNvbW1lbnQge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzdWJzY3JpYmUtYnRuLFxcbiNzdWJtaXQtY29tbWVudCB7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcblxcbiNzdWJtaXQtY29tbWVudCB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNkYzA1NzAsICNmYjY2YjApO1xcbn1cXG5cXG4jbmFtZS1maWVsZCxcXG4jdGV4dGFyZWEtZmllbGQge1xcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMC44cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUzs7RUFFVCw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDZFQUE2RTtFQUM3RSxpQ0FBaUM7RUFDakMsNEJB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QVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOzs7RUFHRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7O0VBR0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDJEQUEyRDtBQUM3RDs7QUFFQTs7RUFFRSwwQ0FBMEM7RUFDMUMsb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3QixzQ0FBc0M7RUFDdEMsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0K0FsdGVybmF0ZXM6aXRhbCx3Z2h0QDAsNDAwOzAsODAwOzAsOTAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvdXJjZStTYW5zK1BybyZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcblxcbiAgLyogb3V0bGluZTogMnB4IHNvbGlkIHJlZDsgKi9cXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jb2xvci1wcmltYXJ5OiAjZmEzNDk2O1xcbiAgLS1jb2xvci1zZWNvbmRhcnk6ICNmNmY2ZjY7XFxuICAtLWNvbG9yLXRoaXJkOiAjMWMxZTI5O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwNDA1MDYsICMwYzBkMTIsICMxYzFlMjksICMzNDM4NGMpO1xcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzb2Z0LWxpZ2h0O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNwYWdlLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyJSA4JTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODBhMGU7XFxuICBib3gtc2hhZG93OiAyNXB4IDQwcHggMjE0cHggLTIwcHggcmdiYSgyNTAsIDUyLCAxNTEsIDAuNTA3KSwgMjVweCA0MHB4IDIxNHB4IC0yMHB4IHJnYmEoMjUwLCA1MiwgMTUxLCAwLjUwNyk7XFxufVxcblxcbiNsb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNsb2ctaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vd2F2ZS5wbmcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNjVweDtcXG59XFxuXFxuI2xvZ28gaDEge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0IEFsdGVybmF0ZXMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbiNuYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI25hdi1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4jbmF2LWxpbmtzIGxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmF2LWxpbmtzIGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4jbmF2LWxpbmtzIGxpICsgbGkgKyBsaSBhIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI2hvbWUtYnRuIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI2FydGlzdC1jb3VudGVyIHtcXG4gIG9yZGVyOiAxO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbiNwYWdlLWZvb3RlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10aGlyZCk7XFxuICBwYWRkaW5nOiAyJSA4JTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jYXJ0aXN0LWxpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBnYXA6IDNyZW07XFxufVxcblxcbiNsaXN0IHtcXG4gIG1hcmdpbjogMTVyZW0gMCA4cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVyZW07XFxufVxcblxcbiNsaXN0IGgyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQgQWx0ZXJuYXRlcycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5hcnRpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzFlMjk7XFxuICBwYWRkaW5nOiAwLjhyZW0gMXJlbSAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxNjBweCAxMHB4IDEwcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIHdpZHRoOiA4NSU7XFxufVxcblxcbi5hcnRpc3QtaW1nIHtcXG4gIGJveC1zaGFkb3c6IDAgMCA4MHB4IC0xMHB4IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAxNjdweCAxMHB4IDEwcHg7XFxufVxcblxcbi5hcnRpc3QtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvcC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi50b3AtaW5mbyBoMyB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmxpa2VzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmZhLWhlYXJ0IHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgZm9udC1zaXplOiAyN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmEtaGVhcnQubGlrZWQge1xcbiAgY29sb3I6ICNmY2I0MjQ7XFxufVxcblxcbi5saWtlcyB7XFxuICBmbGV4OiA4MCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLyogY29tbWVudCBwb3AgdXAgc3R5bGVzICovXFxuLmNvbW1lbnQtcG9wdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwNTA2O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcbiAgb3BhY2l0eTogOTUlO1xcbiAgei1pbmRleDogMjtcXG4gIHBhZGRpbmctdG9wOiA1cmVtO1xcbn1cXG5cXG4uY29tbWVudC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEuOHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWUyOTtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCBwaW5rO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDE2MHB4IDEwcHg7XFxuICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xcbiAgcGFkZGluZzogMXJlbSAxcmVtIDRyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogNDAlO1xcbiAgYm94LXNoYWRvdzogMTRweCAxNnB4IDY5cHggN3B4IHJnYmEoMjUwLCA1MiwgMTUwLCAxKTtcXG59XFxuXFxuI2NvbW1lbnQtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbi8qIGRpdiBncm91cGluZyBpbWFnZSAmIHRpdGxlICovXFxuI2dycEltZ0gxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG9yZGVyOiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNjb21tZW50LXBhZ2UtdGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4jY2xvc2UtbW9kYWwge1xcbiAgYWxsOiB1bnNldDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgb3JkZXI6IDA7XFxuICB3aWR0aDogOTAlO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4uYXJ0aXN0LWltYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuNXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYXJ0aXN0LWZhY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZ2FwOiAwLjhyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzODRjO1xcbiAgbWFyZ2luOiAwIDJyZW07XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbiNjb21tZXQtaW1hZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDg1JTtcXG59XFxuXFxuI2NvbW1ldHMtY291bnQsXFxuI2Rpc3BsYXktY29tbWVudHMsXFxuI2NvbW1lbnQtZm9ybSB7XFxuICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcXG59XFxuXFxuI2Rpc3BsYXktY29tbWVudHMge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGhlaWdodDogODBweDtcXG59XFxuXFxuZGl2LmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGl2LnNob3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vcmUsXFxuI3N1YnNjcmliZS1idG4sXFxuI3N1Ym1pdC1jb21tZW50IHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc3Vic2NyaWJlLWJ0bixcXG4jc3VibWl0LWNvbW1lbnQge1xcbiAgd2lkdGg6IDEyMHB4O1xcbn1cXG5cXG4jc3VibWl0LWNvbW1lbnQge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZGMwNTcwLCAjZmI2NmIwKTtcXG59XFxuXFxuI25hbWUtZmllbGQsXFxuI3RleHRhcmVhLWZpZWxkIHtcXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBhcnRpc3RzQVBJIGZyb20gJy4vbW9kdWxlcy9nZXRBcnRpc3RBUEkuanMnO1xuaW1wb3J0IGNyZWF0ZUNhcmQgZnJvbSAnLi9tb2R1bGVzL2hvbWVVSS5qcyc7XG5pbXBvcnQgQ29tbWVudFVJIGZyb20gJy4vbW9kdWxlcy9jb21tZW50VUkuanMnO1xuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnQuanMnO1xuaW1wb3J0IG1vZGFsV2luZG93IGZyb20gJy4vbW9kdWxlcy9tb2RhbC5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgYXJ0aXN0Q291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJ0aXN0LWNvdW50ZXInKTtcblxuY29uc3QgY29tbWVudFBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRfcG9wdXAnKTtcbmNvbnN0IGFydGlzdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJ0aXN0LWxpc3QnKTtcblxuYXJ0aXN0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gIGNvbnN0IGFydGlzdElkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkO1xuICBjb21tZW50UG9wdXAuaW5uZXJIVE1MID0gJyc7XG4gIGNvbW1lbnRQb3B1cC5hcHBlbmRDaGlsZChtb2RhbFdpbmRvdyhhcnRpc3RJZCkpO1xuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbW9yZScpIHtcbiAgICBjb25zdCBjb21tZXRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZXQtaW1hZ2UnKTtcbiAgICBjb25zdCBjb21tZW50UGFnZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtcGFnZS10aXRsZScpO1xuICAgIGNvbnN0IGFydGlzdEZhY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FydGlzdC1mYWN0cycpO1xuICAgIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktY29tbWVudHMnKTtcbiAgICBjb25zdCBjb21tZW50Q291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWV0cy1jb3VudCcpO1xuICAgIGNvbW1ldEltYWdlLnNyYyA9ICcnO1xuICAgIGNvbW1lbnRQYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb21tZW50Q291bnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb21tZW50TGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgLy8gZ2V0IGFydGlzdCBpZFxuICAgIGNvbnN0IGFydGlzdElkID0gZS5wYXRoWzJdLmlkO1xuICAgIGNvbW1lbnRQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgY29tbWVudFBvcHVwLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICBjb25zdCB7XG4gICAgICB0eXBlLFxuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgc2hvcnRjdXQsXG4gICAgICBiaW9zOiBbeyBhdXRob3IgfV0sXG4gICAgfSA9IGF3YWl0IGFydGlzdHNBUEkuZ2V0QXJ0aXN0QnlJZChhcnRpc3RJZCk7XG4gICAgY29tbWV0SW1hZ2Uuc3JjID0gYGh0dHBzOi8vYXBpLm5hcHN0ZXIuY29tL2ltYWdlc2VydmVyL3YyL2FydGlzdHMvJHthcnRpc3RJZH0vaW1hZ2VzLzM1NngyMzcuanBnYDtcbiAgICBjb21tZW50UGFnZVRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBDb21tZW50VUkuYWRkRmFjdHMoYXJ0aXN0RmFjdHMsIFt0eXBlLCBuYW1lLCBzaG9ydGN1dCwgYXV0aG9yXSk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQ29tbWVudC5nZXRDb21tZW50cyhpZCk7XG5cbiAgICBjb21tZW50Q291bnQuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke0NvbW1lbnQuY29tbWVudENvdW50ZXIocmVzdWx0KX0pYDtcblxuICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgcmVzdWx0LmZvckVhY2goKGNvbW1lbnQpID0+IENvbW1lbnRVSS5zaG93Q29tbWVudHMoY29tbWVudExpc3QsIGNvbW1lbnQpKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5jb21tZW50UG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuaWQgPT09ICdjbG9zZS1tb2RhbCcpIHtcbiAgICBjb21tZW50UG9wdXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIGNvbW1lbnRQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIH1cbn0pO1xuXG5jb21tZW50UG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBjb21tZW50Rm9ybSA9IGUudGFyZ2V0O1xuICBjb25zdCBuYW1lID0gY29tbWVudEZvcm0uZWxlbWVudHNbMF0udmFsdWU7XG4gIGNvbnN0IG1lc3NhZ2UgPSBjb21tZW50Rm9ybS5lbGVtZW50c1sxXS52YWx1ZTtcbiAgY29uc3QgYXJ0aXN0SWQgPSBjb21tZW50Rm9ybS5jbGFzc05hbWU7XG4gIGNvbW1lbnRGb3JtLmVsZW1lbnRzWzBdLnZhbHVlID0gJyc7XG4gIGNvbW1lbnRGb3JtLmVsZW1lbnRzWzFdLnZhbHVlID0gJyc7XG4gIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktY29tbWVudHMnKTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRhdGVTdHJpbmcgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7XG4gICAgZGF0ZS5nZXRNb250aCgpICsgMVxuICB9LSR7ZGF0ZS5nZXREYXRlKCl9YDtcblxuICBjb21tZW50TGlzdC5hcHBlbmRDaGlsZChcbiAgICBDb21tZW50VUkuYWRkQ29tbWVudHMoY29tbWVudExpc3QsIHtcbiAgICAgIGNyZWF0aW9uX2RhdGU6IGRhdGVTdHJpbmcsXG4gICAgICBjb21tZW50OiBtZXNzYWdlLFxuICAgICAgdXNlcm5hbWU6IG5hbWUsXG4gICAgfSksXG4gICk7XG5cbiAgQ29tbWVudC5wb3N0Q29tbWVudHMoYXJ0aXN0SWQsIG5hbWUsIG1lc3NhZ2UpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFydGlzdHMgPSBhd2FpdCBhcnRpc3RzQVBJLmdldEFydGlzdCgpO1xuICBhcnRpc3RDb3VudC50ZXh0Q29udGVudCA9IGAoJHthcnRpc3RzLmxlbmd0aH0pYDtcbiAgYXJ0aXN0cy5mb3JFYWNoKGNyZWF0ZUNhcmQpO1xufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50IHtcbiAgc3RhdGljIHBvc3RDb21tZW50cyA9IGFzeW5jIChhcnRpc3RJZCwgdXNlcm5hbWUsIGNvbW1lbnQpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0REUjNReGdFNFFIdXRlSmUyR0w3L2NvbW1lbnRzJyxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaXRlbV9pZDogYXJ0aXN0SWQsXG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgY29tbWVudCxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBzdGF0aWMgZ2V0Q29tbWVudHMgPSBhc3luYyAoYXJ0aXN0SWQpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0REUjNReGdFNFFIdXRlSmUyR0w3L2NvbW1lbnRzP2l0ZW1faWQ9JHthcnRpc3RJZH1gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gIH07XG5cbiAgc3RhdGljIGNvbW1lbnRDb3VudGVyID0gKGNvbW1lbnRzQXJyYXkpID0+IHtcbiAgICBpZiAoY29tbWVudHNBcnJheS5sZW5ndGgpIHJldHVybiBjb21tZW50c0FycmF5Lmxlbmd0aDtcbiAgICByZXR1cm4gMDtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnRVSSB7XG4gIHN0YXRpYyBhZGRGYWN0cyA9IGFzeW5jIChwYXJlbnRFbGVtZW50LCBmYWN0cykgPT4ge1xuICAgIC8vIGNsZWFyIG9sZCBlbnRyaWVzXG4gICAgcGFyZW50RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAvLyBbdHlwZSwgc2hvcnRjdXQsIGF1dGhvcl1cbiAgICBjb25zdCBmYWN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmYWN0MS50ZXh0Q29udGVudCA9IGBUeXBlOiAke2ZhY3RzWzBdfWA7XG4gICAgY29uc3QgZmFjdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZmFjdDMudGV4dENvbnRlbnQgPSBgU2hvcnRjdXQ6ICR7ZmFjdHNbMl19YDtcbiAgICBjb25zdCBmYWN0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmYWN0NC50ZXh0Q29udGVudCA9IGBBdXRob3I6ICR7ZmFjdHNbM119YDtcblxuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFjdDEpO1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFjdDMpO1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFjdDQpO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gIH07XG5cbiAgc3RhdGljIHNob3dDb21tZW50cyA9IChcbiAgICBlbGUsXG4gICAgeyBjcmVhdGlvbl9kYXRlOiBkYXRlLCBjb21tZW50OiBtZXNzYWdlLCB1c2VybmFtZTogbmFtZSB9LFxuICApID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjcmVhdGlvbl9kYXRlOiBjcmVhdGlvbkRhdGUsXG4gICAgICBjb21tZW50LFxuICAgICAgdXNlcm5hbWUsXG4gICAgfSA9IHsgY3JlYXRpb25fZGF0ZTogZGF0ZSwgY29tbWVudDogbWVzc2FnZSwgdXNlcm5hbWU6IG5hbWUgfTtcbiAgICBjb25zdCBjb21FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb21FbC5pbm5lclRleHQgPSBgJHtjcmVhdGlvbkRhdGV9ICR7dXNlcm5hbWV9ICR7Y29tbWVudH0gYDtcbiAgICAvLyBjb25zb2xlLmxvZyhjb21FbCk7XG4gICAgZWxlLmFwcGVuZENoaWxkKGNvbUVsKTtcbiAgICByZXR1cm4gY29tRWw7XG4gIH07XG5cbiAgc3RhdGljIGFkZENvbW1lbnRzID0gKGVsZSwgeyBjcmVhdGlvbl9kYXRlOiBkYXRlLCBjb21tZW50OiBtZXNzYWdlLCB1c2VybmFtZTogbmFtZSB9KSA9PiB7XG4gICAgdGhpcy5zaG93Q29tbWVudHMoZWxlLCB7IGNyZWF0aW9uX2RhdGU6IGRhdGUsIGNvbW1lbnQ6IG1lc3NhZ2UsIHVzZXJuYW1lOiBuYW1lIH0pO1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52b2x2ZW1lbnRBUEkge1xuICBzdGF0aWMgYXN5bmMgcmVjb3JkTGlrZShpZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9xMkVlY0lEb2x5aURndVFta0ZJai9saWtlcy8nLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBpZCxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzdWx0LnRleHQoKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0TGlrZXMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3EyRWVjSURvbHlpRGd1UW1rRklqL2xpa2VzLycpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZGlzcGxheUxpa2VzKGlkKSB7XG4gICAgY29uc3QgbGlrZXMgPSBhd2FpdCBJbnZvbHZlbWVudEFQSS5nZXRMaWtlcygpO1xuICAgIGNvbnN0IGFydGlzdExpa2VzID0gbGlrZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLml0ZW1faWQgPT09IGlkKTtcbiAgICBpZiAoYXJ0aXN0TGlrZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCBuTGlrZXMgPSBhcnRpc3RMaWtlc1swXS5saWtlcztcbiAgICByZXR1cm4gbkxpa2VzO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBhcnRpc3RzQVBJIHtcbiAgc3RhdGljIGFzeW5jIGdldEFydGlzdCgpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgJ2h0dHBzOi8vYXBpLm5hcHN0ZXIuY29tL3YyLjIvYXJ0aXN0cy90b3A/YXBpa2V5PVpqQTBabVl4Wm1JdE9USTFOaTAwWVRkakxXRXpNVFl0TWpBeVpEYzFPVGMzTnpCaCZsaW1pdD0xMiZvZmZzZXQ9MjInLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhLmFydGlzdHM7XG4gIH1cblxuICBzdGF0aWMgZ2V0QXJ0aXN0QnlJZCA9IGFzeW5jIChhcnRpc3RJZCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkubmFwc3Rlci5jb20vdjIuMi9hcnRpc3RzLyR7YXJ0aXN0SWR9P2FwaWtleT1aakEwWm1ZeFptSXRPVEkxTmkwMFlUZGpMV0V6TVRZdE1qQXlaRGMxT1RjM056QmhgLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhLmFydGlzdHNbMF07XG4gIH07XG59XG4iLCJpbXBvcnQgSW52b2x2ZW1lbnRBUEkgZnJvbSAnLi9jcmVhdGVMaWtlLmpzJztcblxuY29uc3QgYXJ0aXN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJ0aXN0LWxpc3QnKTtcblxuY29uc3QgY3JlYXRlQ2FyZCA9IGFzeW5jIChhcnRpc3QpID0+IHtcbiAgY29uc3QgYXJ0aXN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhcnRpc3RDYXJkLmNsYXNzTmFtZSA9ICdhcnRpc3QnO1xuICBhcnRpc3RDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCBhcnRpc3QuaWQpO1xuICBhcnRpc3RzTGlzdC5hcHBlbmRDaGlsZChhcnRpc3RDYXJkKTtcblxuICBjb25zdCBhcnRpc3RJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgYXJ0aXN0SW1nLmNsYXNzTmFtZSA9ICdhcnRpc3QtaW1nJztcbiAgYXJ0aXN0SW1nLnNyYyA9IGBodHRwczovL2FwaS5uYXBzdGVyLmNvbS9pbWFnZXNlcnZlci92Mi9hcnRpc3RzLyR7YXJ0aXN0LmlkfS9pbWFnZXMvMzU2eDIzNy5qcGdgO1xuICBhcnRpc3RDYXJkLmFwcGVuZENoaWxkKGFydGlzdEltZyk7XG5cbiAgY29uc3QgYXJ0aXN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhcnRpc3RJbmZvLmNsYXNzTmFtZSA9ICdhcnRpc3QtaW5mbyc7XG4gIGFydGlzdENhcmQuYXBwZW5kQ2hpbGQoYXJ0aXN0SW5mbyk7XG5cbiAgY29uc3QgdG9wSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b3BJbmZvLmNsYXNzTmFtZSA9ICd0b3AtaW5mbyc7XG4gIGFydGlzdEluZm8uYXBwZW5kQ2hpbGQodG9wSW5mbyk7XG5cbiAgY29uc3QgYXJ0aXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGFydGlzdE5hbWUudGV4dENvbnRlbnQgPSBhcnRpc3QubmFtZTtcbiAgdG9wSW5mby5hcHBlbmRDaGlsZChhcnRpc3ROYW1lKTtcblxuICBjb25zdCBsaWtlc0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGlrZXNDb250LmNsYXNzTmFtZSA9ICdsaWtlcy1jb250YWluZXInO1xuICB0b3BJbmZvLmFwcGVuZENoaWxkKGxpa2VzQ29udCk7XG5cbiAgY29uc3QgbGlrZXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBsaWtlc0ljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtaGVhcnQnKTtcbiAgbGlrZXNDb250LmFwcGVuZENoaWxkKGxpa2VzSWNvbik7XG5cbiAgbGV0IGNsaWNrcyA9IDA7XG5cbiAgbGlrZXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsaWNrcyArPSAxO1xuICAgIGxpa2VzSWNvbi5jbGFzc0xpc3QuYWRkKCdsaWtlZCcpO1xuICAgIGNvbnN0IGlzTGlrZWQgPSAobnVtKSA9PiB7XG4gICAgICBpZiAobnVtICUgMiAhPT0gMCkge1xuICAgICAgICBJbnZvbHZlbWVudEFQSS5yZWNvcmRMaWtlKGFydGlzdC5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWtlc0ljb24uY2xhc3NMaXN0LnJlbW92ZSgnbGlrZWQnKTtcbiAgICAgICAgSW52b2x2ZW1lbnRBUEkuZGlzcGxheUxpa2VzKGFydGlzdC5pZCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpc0xpa2VkKGNsaWNrcyk7XG4gIH0pO1xuXG4gIGNvbnN0IGxpa2VzQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGxpa2VzQ291bnQuY2xhc3NOYW1lID0gJ2xpa2VzJztcbiAgbGlrZXNDb3VudC50ZXh0Q29udGVudCA9IGF3YWl0IEludm9sdmVtZW50QVBJLmRpc3BsYXlMaWtlcyhhcnRpc3QuaWQpO1xuICBsaWtlc0NvbnQuYXBwZW5kQ2hpbGQobGlrZXNDb3VudCk7XG5cbiAgY29uc3QgY29tbWVudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb21tZW50QnRuLmNsYXNzTmFtZSA9ICdtb3JlJztcbiAgY29tbWVudEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIGNvbW1lbnRCdG4udGV4dENvbnRlbnQgPSAnKyBNb3JlJztcbiAgYXJ0aXN0SW5mby5hcHBlbmRDaGlsZChjb21tZW50QnRuKTtcblxuICBJbnZvbHZlbWVudEFQSS5nZXRMaWtlcygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2FyZDsiLCJjb25zdCBjcmVhdGVGb3JtID0gKGFydGlzdElkKSA9PiB7XG4gIGNvbnN0IHRoZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIHRoZUZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnUE9TVCcpO1xuICB0aGVGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tbWVudC1mb3JtJyk7XG4gIHRoZUZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnIycpO1xuICB0aGVGb3JtLmNsYXNzTmFtZSA9IGFydGlzdElkO1xuXG4gIGNvbnN0IG5hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdZb3VyIG5hbWUnKTtcbiAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZS1maWVsZCcpO1xuXG4gIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGV4dEFyZWEudGV4dENvbnRlbnQgPSAnQWRkIHlvdXIgY29tbWVudCBoZXJlJztcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsICd0ZXh0YXJlYS1maWVsZCcpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtY29tbWVudCcpO1xuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU2VuZCc7XG5cbiAgdGhlRm9ybS5hcHBlbmRDaGlsZChuYW1lRmllbGQpO1xuICB0aGVGb3JtLmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgdGhlRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gIHJldHVybiB0aGVGb3JtO1xufTtcblxuY29uc3QgY3JlYXRlRGl2ID0gKGNsYXNzQXJyKSA9PiB7XG4gIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzQXJyKTtcbiAgcmV0dXJuIGRpdmlkZXI7XG59O1xuXG5jb25zdCBjcmVhdGVJZERpdiA9IChpZCkgPT4ge1xuICBjb25zdCBpZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpZERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICByZXR1cm4gaWREaXY7XG59O1xuXG5jb25zdCBjcmVhdGVJbWFnZSA9ICgpID0+IHtcbiAgY29uc3QgaW1hZ2VUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1hZ2VUYWcuc2V0QXR0cmlidXRlKCdpZCcsICdjb21tZXQtaW1hZ2UnKTtcbiAgaW1hZ2VUYWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnY2xvc2UtbW9kYWwnKTtcbiAgcmV0dXJuIGltYWdlVGFnO1xufTtcblxuY29uc3QgY3JlYXRlTW9kYWxCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1vZGFsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgbW9kYWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZS1tb2RhbCcpO1xuICBtb2RhbEJ0bi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XG4gIHJldHVybiBtb2RhbEJ0bjtcbn07XG5cbmNvbnN0IG1haW5UaXRsZSA9ICh0YWcsIGlkKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5jb25zdCBjcmVhdGVNb2RhbCA9IChhcnRpc3RJZCkgPT4ge1xuICBjb25zdCBjb21tZW50V3JhcHBlciA9IGNyZWF0ZURpdihbJ2NvbW1lbnQtd3JhcHBlciddKTtcblxuICBjb25zdCBhcnRpc3RJbWFnZSA9IGNyZWF0ZURpdihbJ2FydGlzdC1pbWFnZSddKTtcbiAgY29uc3QgZ3JwSW1naDEgPSBjcmVhdGVJZERpdignZ3JwSW1nSDEnKTtcblxuICBjb25zdCBJbWFnZVRhZyA9IGNyZWF0ZUltYWdlKCk7XG4gIGNvbnN0IGgxVGl0bGUgPSBtYWluVGl0bGUoJ2gxJywgJ2NvbW1lbnQtcGFnZS10aXRsZScpO1xuXG4gIGdycEltZ2gxLmFwcGVuZENoaWxkKEltYWdlVGFnKTtcbiAgZ3JwSW1naDEuYXBwZW5kQ2hpbGQoaDFUaXRsZSk7XG5cbiAgY29uc3QgbW9kYWxCdG4gPSBjcmVhdGVNb2RhbEJ0bigpO1xuXG4gIGFydGlzdEltYWdlLmFwcGVuZENoaWxkKGdycEltZ2gxKTtcbiAgYXJ0aXN0SW1hZ2UuYXBwZW5kQ2hpbGQobW9kYWxCdG4pO1xuXG4gIGNvbnN0IGFydGlzdEZhY3QgPSBjcmVhdGVJZERpdignYXJ0aXN0LWZhY3RzJyk7XG5cbiAgY29uc3QgaDJUaXRsZSA9IG1haW5UaXRsZSgnaDInLCAnY29tbWV0cy1jb3VudCcpO1xuXG4gIGNvbnN0IGRpc3BsYXlDb21tZW50cyA9IGNyZWF0ZUlkRGl2KCdkaXNwbGF5LWNvbW1lbnRzJyk7XG5cbiAgY29uc3QgdGhlRm9ybSA9IGNyZWF0ZUZvcm0oYXJ0aXN0SWQpO1xuXG4gIGNvbW1lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGFydGlzdEltYWdlKTtcbiAgY29tbWVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoYXJ0aXN0RmFjdCk7XG4gIGNvbW1lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGgyVGl0bGUpO1xuICBjb21tZW50V3JhcHBlci5hcHBlbmRDaGlsZChkaXNwbGF5Q29tbWVudHMpO1xuICBjb21tZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0aGVGb3JtKTtcblxuICByZXR1cm4gY29tbWVudFdyYXBwZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNb2RhbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==