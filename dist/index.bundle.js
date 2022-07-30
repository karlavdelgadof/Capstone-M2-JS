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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  text-decoration: none;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n\n  /* outline: 2px solid red; */\n  font-size: 20px;\n}\n\n:root {\n  --color-primary: #fa3496;\n  --color-secondary: #f6f6f6;\n  --color-third: #1c1e29;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background-image: linear-gradient(180deg, #040506, #0c0d12, #1c1e29, #34384c);\n  background-blend-mode: soft-light;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  backdrop-filter: blur(10px);\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\nbody.active {\n  height: fit-content;\n  overflow-y: hidden;\n}\n\n#page-header {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 2% 8%;\n  position: fixed;\n  background-color: #080a0e;\n  box-shadow: 25px 40px 214px -20px rgba(250, 52, 151, 0.507), 25px 40px 214px -20px rgba(250, 52, 151, 0.507);\n}\n\n#logo {\n  display: flex;\n}\n\n#log-icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 100%;\n  width: 65px;\n}\n\n#logo h1 {\n  font-family: 'Montserrat Alternates', sans-serif;\n  font-size: 2rem;\n  color: var(--color-secondary);\n  font-style: italic;\n}\n\n#navbar {\n  display: flex;\n}\n\n#nav-links {\n  display: flex;\n  gap: 2rem;\n  font-size: 2rem;\n}\n\n#nav-links li {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n}\n\n#nav-links li a {\n  text-decoration: none;\n  color: var(--color-secondary);\n  font-weight: bold;\n  font-size: 1.3rem;\n}\n\n#nav-links li + li + li a {\n  color: var(--color-primary);\n  font-size: 1rem;\n}\n\n#home-btn {\n  color: #fff;\n  display: flex;\n  gap: 0.3rem;\n  font-weight: 600;\n}\n\n#artist-counter {\n  order: 1;\n  font-size: 1.3rem;\n  color: var(--color-primary);\n}\n\n#page-footer {\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  background-color: var(--color-third);\n  padding: 2% 8%;\n  color: #fff;\n}\n\n#artist-list {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 3rem;\n}\n\n#list {\n  margin: 15rem 0 8rem;\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\n\n#list h2 {\n  color: var(--color-secondary);\n  font-size: 2.5rem;\n  font-family: 'Montserrat Alternates', sans-serif;\n}\n\n.artist {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  background-color: #1c1e29;\n  padding: 0.8rem 1rem 2rem;\n  border-radius: 10px 160px 10px 10px;\n  color: var(--color-secondary);\n  width: 85%;\n}\n\n.artist-img {\n  box-shadow: 0 0 80px -10px var(--color-primary);\n  border-radius: 0 167px 10px 10px;\n}\n\n.artist-info {\n  display: flex;\n  flex-direction: column;\n}\n\n.top-info {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n  font-size: 2.5rem;\n}\n\n.top-info h3 {\n  font-size: 1.3rem;\n}\n\n.likes-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.fa-heart {\n  justify-self: end;\n  font-size: 27px;\n  cursor: pointer;\n}\n\n.fa-heart.liked {\n  color: #fcb424;\n}\n\n.likes {\n  flex: 80%;\n  text-align: right;\n}\n\n/* comment pop up styles */\n.comment-popup {\n  min-height: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  align-self: center;\n  background-color: #040506;\n  backdrop-filter: blur(20px);\n  opacity: 95%;\n  position: absolute;\n  top: 0;\n  z-index: 2;\n  padding: 10px 20px;\n}\n\n.comment-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1.8rem;\n  color: var(--color-secondary);\n  background-color: #1c1e29;\n  outline: 2px solid pink;\n  border-radius: 10px 10px 160px 10px;\n  mix-blend-mode: screen;\n  padding: 1rem 1rem 4rem;\n  width: 40%;\n  box-shadow: 14px 16px 69px 7px rgba(250, 52, 150, 1);\n}\n\n#comment-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 60%;\n}\n\n/* div grouping image & title */\n#grpImgH1 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  text-align: center;\n  color: white;\n  order: 1;\n  width: 100%;\n}\n\n#comment-page-title {\n  font-size: 2rem;\n}\n\n#comment-page-title::after {\n  content: \"\";\n  width: 5px;\n  height: 2px;\n  background-color: var(--color-primary);\n}\n\n#close-modal {\n  all: unset;\n  height: 40px;\n  color: white;\n  cursor: pointer;\n  font-size: 2em;\n  order: 0;\n  width: 90%;\n  text-align: end;\n}\n\n.artist-image {\n  display: flex;\n  gap: 1.5rem;\n  flex-direction: column;\n  align-items: center;\n}\n\n#artist-facts {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  gap: 0.8rem;\n  background-color: #34384c;\n  margin: 0 2rem;\n  padding: 1rem 0;\n}\n\n#commet-image {\n  border-radius: 5px;\n  width: 85%;\n}\n\n#commets-count,\n#display-comments,\n#comment-form {\n  padding-left: 2.5rem;\n}\n\n#display-comments {\n  overflow: hidden;\n  overflow-y: scroll;\n  height: 80px;\n}\n\ndiv.hide {\n  display: none;\n}\n\ndiv.show {\n  display: flex;\n}\n\n.more,\n#subscribe-btn,\n#submit-comment {\n  width: 120px;\n  background-color: transparent;\n  border: none;\n  border: 2px solid var(--color-primary);\n  padding: 0.5rem 0.8rem;\n  border-radius: 30px;\n  align-items: flex-start;\n  font-family: inherit;\n  font-weight: 600;\n  color: var(--color-primary);\n  cursor: pointer;\n}\n\n#subscribe-btn,\n#submit-comment {\n  width: 120px;\n}\n\n#submit-comment {\n  color: var(--color-secondary);\n  background-image: linear-gradient(180deg, #dc0570, #fb66b0);\n}\n\n#name-field,\n#textarea-field {\n  font-family: 'Source Sans Pro', sans-serif;\n  padding: 0.8rem 1rem;\n  background-color: transparent;\n  border: 2px solid var(--color-primary);\n  color: var(--color-primary);\n  border-radius: 8px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;0,800;0,900;1,800;1,900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');\n\n* {\n  text-decoration: none;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n\n  /* outline: 2px solid red; */\n  font-size: 20px;\n}\n\n:root {\n  --color-primary: #fa3496;\n  --color-secondary: #f6f6f6;\n  --color-third: #1c1e29;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background-image: linear-gradient(180deg, #040506, #0c0d12, #1c1e29, #34384c);\n  background-blend-mode: soft-light;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  backdrop-filter: blur(10px);\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\nbody.active {\n  height: fit-content;\n  overflow-y: hidden;\n}\n\n#page-header {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 2% 8%;\n  position: fixed;\n  background-color: #080a0e;\n  box-shadow: 25px 40px 214px -20px rgba(250, 52, 151, 0.507), 25px 40px 214px -20px rgba(250, 52, 151, 0.507);\n}\n\n#logo {\n  display: flex;\n}\n\n#log-icon {\n  background-image: url('./wave.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 100%;\n  width: 65px;\n}\n\n#logo h1 {\n  font-family: 'Montserrat Alternates', sans-serif;\n  font-size: 2rem;\n  color: var(--color-secondary);\n  font-style: italic;\n}\n\n#navbar {\n  display: flex;\n}\n\n#nav-links {\n  display: flex;\n  gap: 2rem;\n  font-size: 2rem;\n}\n\n#nav-links li {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n}\n\n#nav-links li a {\n  text-decoration: none;\n  color: var(--color-secondary);\n  font-weight: bold;\n  font-size: 1.3rem;\n}\n\n#nav-links li + li + li a {\n  color: var(--color-primary);\n  font-size: 1rem;\n}\n\n#home-btn {\n  color: #fff;\n  display: flex;\n  gap: 0.3rem;\n  font-weight: 600;\n}\n\n#artist-counter {\n  order: 1;\n  font-size: 1.3rem;\n  color: var(--color-primary);\n}\n\n#page-footer {\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  background-color: var(--color-third);\n  padding: 2% 8%;\n  color: #fff;\n}\n\n#artist-list {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 3rem;\n}\n\n#list {\n  margin: 15rem 0 8rem;\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\n\n#list h2 {\n  color: var(--color-secondary);\n  font-size: 2.5rem;\n  font-family: 'Montserrat Alternates', sans-serif;\n}\n\n.artist {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  background-color: #1c1e29;\n  padding: 0.8rem 1rem 2rem;\n  border-radius: 10px 160px 10px 10px;\n  color: var(--color-secondary);\n  width: 85%;\n}\n\n.artist-img {\n  box-shadow: 0 0 80px -10px var(--color-primary);\n  border-radius: 0 167px 10px 10px;\n}\n\n.artist-info {\n  display: flex;\n  flex-direction: column;\n}\n\n.top-info {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n  font-size: 2.5rem;\n}\n\n.top-info h3 {\n  font-size: 1.3rem;\n}\n\n.likes-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.fa-heart {\n  justify-self: end;\n  font-size: 27px;\n  cursor: pointer;\n}\n\n.fa-heart.liked {\n  color: #fcb424;\n}\n\n.likes {\n  flex: 80%;\n  text-align: right;\n}\n\n/* comment pop up styles */\n.comment-popup {\n  min-height: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  align-self: center;\n  background-color: #040506;\n  backdrop-filter: blur(20px);\n  opacity: 95%;\n  position: absolute;\n  top: 0;\n  z-index: 2;\n  padding: 10px 20px;\n}\n\n.comment-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1.8rem;\n  color: var(--color-secondary);\n  background-color: #1c1e29;\n  outline: 2px solid pink;\n  border-radius: 10px 10px 160px 10px;\n  mix-blend-mode: screen;\n  padding: 1rem 1rem 4rem;\n  width: 40%;\n  box-shadow: 14px 16px 69px 7px rgba(250, 52, 150, 1);\n}\n\n#comment-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 60%;\n}\n\n/* div grouping image & title */\n#grpImgH1 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  text-align: center;\n  color: white;\n  order: 1;\n  width: 100%;\n}\n\n#comment-page-title {\n  font-size: 2rem;\n}\n\n#comment-page-title::after {\n  content: \"\";\n  width: 5px;\n  height: 2px;\n  background-color: var(--color-primary);\n}\n\n#close-modal {\n  all: unset;\n  height: 40px;\n  color: white;\n  cursor: pointer;\n  font-size: 2em;\n  order: 0;\n  width: 90%;\n  text-align: end;\n}\n\n.artist-image {\n  display: flex;\n  gap: 1.5rem;\n  flex-direction: column;\n  align-items: center;\n}\n\n#artist-facts {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  gap: 0.8rem;\n  background-color: #34384c;\n  margin: 0 2rem;\n  padding: 1rem 0;\n}\n\n#commet-image {\n  border-radius: 5px;\n  width: 85%;\n}\n\n#commets-count,\n#display-comments,\n#comment-form {\n  padding-left: 2.5rem;\n}\n\n#display-comments {\n  overflow: hidden;\n  overflow-y: scroll;\n  height: 80px;\n}\n\ndiv.hide {\n  display: none;\n}\n\ndiv.show {\n  display: flex;\n}\n\n.more,\n#subscribe-btn,\n#submit-comment {\n  width: 120px;\n  background-color: transparent;\n  border: none;\n  border: 2px solid var(--color-primary);\n  padding: 0.5rem 0.8rem;\n  border-radius: 30px;\n  align-items: flex-start;\n  font-family: inherit;\n  font-weight: 600;\n  color: var(--color-primary);\n  cursor: pointer;\n}\n\n#subscribe-btn,\n#submit-comment {\n  width: 120px;\n}\n\n#submit-comment {\n  color: var(--color-secondary);\n  background-image: linear-gradient(180deg, #dc0570, #fb66b0);\n}\n\n#name-field,\n#textarea-field {\n  font-family: 'Source Sans Pro', sans-serif;\n  padding: 0.8rem 1rem;\n  background-color: transparent;\n  border: 2px solid var(--color-primary);\n  color: var(--color-primary);\n  border-radius: 8px;\n}\n"],"sourceRoot":""}]);
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
const body = document.querySelector('body');

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
  body.classList.add('active');
  if (e.target.id === 'close-modal') {
    commentPopup.classList.add('hide');
    commentPopup.classList.remove('show') 
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
  nameField.setAttribute('value', 'Your name');
  nameField.setAttribute('id', 'name-field');

  const textArea = document.createElement('textarea');
  textArea.textContent = 'Add your comment here'
  textArea.setAttribute('id', 'textarea-field');

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'button');
  submitBtn.setAttribute('id', 'submit-comment');
  submitBtn.textContent = 'Send'

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRVSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvY3JlYXRlTGlrZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvZ2V0QXJ0aXN0QVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9ob21lVUkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL21vZGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3dhdmUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0K0FsdGVybmF0ZXM6aXRhbCx3Z2h0QDAsNDAwOzAsODAwOzAsOTAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvdXJjZStTYW5zK1BybyZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG5cXG4gIC8qIG91dGxpbmU6IDJweCBzb2xpZCByZWQ7ICovXFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY29sb3ItcHJpbWFyeTogI2ZhMzQ5NjtcXG4gIC0tY29sb3Itc2Vjb25kYXJ5OiAjZjZmNmY2O1xcbiAgLS1jb2xvci10aGlyZDogIzFjMWUyOTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwNDA1MDYsICMwYzBkMTIsICMxYzFlMjksICMzNDM4NGMpO1xcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzb2Z0LWxpZ2h0O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkuYWN0aXZlIHtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbiNwYWdlLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyJSA4JTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODBhMGU7XFxuICBib3gtc2hhZG93OiAyNXB4IDQwcHggMjE0cHggLTIwcHggcmdiYSgyNTAsIDUyLCAxNTEsIDAuNTA3KSwgMjVweCA0MHB4IDIxNHB4IC0yMHB4IHJnYmEoMjUwLCA1MiwgMTUxLCAwLjUwNyk7XFxufVxcblxcbiNsb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNsb2ctaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA2NXB4O1xcbn1cXG5cXG4jbG9nbyBoMSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQgQWx0ZXJuYXRlcycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuI25hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbmF2LWxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNuYXYtbGlua3MgbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuYXYtbGlua3MgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbiNuYXYtbGlua3MgbGkgKyBsaSArIGxpIGEge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jaG9tZS1idG4ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjNyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jYXJ0aXN0LWNvdW50ZXIge1xcbiAgb3JkZXI6IDE7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxuI3BhZ2UtZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRoaXJkKTtcXG4gIHBhZGRpbmc6IDIlIDglO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbiNhcnRpc3QtbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuI2xpc3Qge1xcbiAgbWFyZ2luOiAxNXJlbSAwIDhyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXJlbTtcXG59XFxuXFxuI2xpc3QgaDIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCBBbHRlcm5hdGVzJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmFydGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWUyOTtcXG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtIDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDE2MHB4IDEwcHggMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgd2lkdGg6IDg1JTtcXG59XFxuXFxuLmFydGlzdC1pbWcge1xcbiAgYm94LXNoYWRvdzogMCAwIDgwcHggLTEwcHggdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICBib3JkZXItcmFkaXVzOiAwIDE2N3B4IDEwcHggMTBweDtcXG59XFxuXFxuLmFydGlzdC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9wLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLnRvcC1pbmZvIGgzIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubGlrZXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZmEtaGVhcnQge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBmb250LXNpemU6IDI3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYS1oZWFydC5saWtlZCB7XFxuICBjb2xvcjogI2ZjYjQyNDtcXG59XFxuXFxuLmxpa2VzIHtcXG4gIGZsZXg6IDgwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4vKiBjb21tZW50IHBvcCB1cCBzdHlsZXMgKi9cXG4uY29tbWVudC1wb3B1cCB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MDUwNjtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcXG4gIG9wYWNpdHk6IDk1JTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDI7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi5jb21tZW50LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMS44cmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxZTI5O1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHBpbms7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTYwcHggMTBweDtcXG4gIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XFxuICBwYWRkaW5nOiAxcmVtIDFyZW0gNHJlbTtcXG4gIHdpZHRoOiA0MCU7XFxuICBib3gtc2hhZG93OiAxNHB4IDE2cHggNjlweCA3cHggcmdiYSgyNTAsIDUyLCAxNTAsIDEpO1xcbn1cXG5cXG4jY29tbWVudC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLyogZGl2IGdyb3VwaW5nIGltYWdlICYgdGl0bGUgKi9cXG4jZ3JwSW1nSDEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3JkZXI6IDE7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2NvbW1lbnQtcGFnZS10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNjb21tZW50LXBhZ2UtdGl0bGU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDVweDtcXG4gIGhlaWdodDogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbiNjbG9zZS1tb2RhbCB7XFxuICBhbGw6IHVuc2V0O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBvcmRlcjogMDtcXG4gIHdpZHRoOiA5MCU7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5hcnRpc3QtaW1hZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS41cmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhcnRpc3QtZmFjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBnYXA6IDAuOHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM4NGM7XFxuICBtYXJnaW46IDAgMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuI2NvbW1ldC1pbWFnZSB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogODUlO1xcbn1cXG5cXG4jY29tbWV0cy1jb3VudCxcXG4jZGlzcGxheS1jb21tZW50cyxcXG4jY29tbWVudC1mb3JtIHtcXG4gIHBhZGRpbmctbGVmdDogMi41cmVtO1xcbn1cXG5cXG4jZGlzcGxheS1jb21tZW50cyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG5kaXYuaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5kaXYuc2hvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9yZSxcXG4jc3Vic2NyaWJlLWJ0bixcXG4jc3VibWl0LWNvbW1lbnQge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzdWJzY3JpYmUtYnRuLFxcbiNzdWJtaXQtY29tbWVudCB7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcblxcbiNzdWJtaXQtY29tbWVudCB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNkYzA1NzAsICNmYjY2YjApO1xcbn1cXG5cXG4jbmFtZS1maWVsZCxcXG4jdGV4dGFyZWEtZmllbGQge1xcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMC44cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUzs7RUFFVCw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiw2RUFBNkU7RUFDN0UsaUNBQWlDO0VBQ2pDLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsNEdBQTRHO0FBQzlHOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseURBQW1DO0VBQ25DLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFC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RUFHRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7O0VBR0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDJEQUEyRDtBQUM3RDs7QUFFQTs7RUFFRSwwQ0FBMEM7RUFDMUMsb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3QixzQ0FBc0M7RUFDdEMsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0K0FsdGVybmF0ZXM6aXRhbCx3Z2h0QDAsNDAwOzAsODAwOzAsOTAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvdXJjZStTYW5zK1BybyZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcblxcbiAgLyogb3V0bGluZTogMnB4IHNvbGlkIHJlZDsgKi9cXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jb2xvci1wcmltYXJ5OiAjZmEzNDk2O1xcbiAgLS1jb2xvci1zZWNvbmRhcnk6ICNmNmY2ZjY7XFxuICAtLWNvbG9yLXRoaXJkOiAjMWMxZTI5O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzA0MDUwNiwgIzBjMGQxMiwgIzFjMWUyOSwgIzM0Mzg0Yyk7XFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNvZnQtbGlnaHQ7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keS5hY3RpdmUge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuI3BhZ2UtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDIlIDglO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MGEwZTtcXG4gIGJveC1zaGFkb3c6IDI1cHggNDBweCAyMTRweCAtMjBweCByZ2JhKDI1MCwgNTIsIDE1MSwgMC41MDcpLCAyNXB4IDQwcHggMjE0cHggLTIwcHggcmdiYSgyNTAsIDUyLCAxNTEsIDAuNTA3KTtcXG59XFxuXFxuI2xvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2xvZy1pY29uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi93YXZlLnBuZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA2NXB4O1xcbn1cXG5cXG4jbG9nbyBoMSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQgQWx0ZXJuYXRlcycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuI25hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbmF2LWxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNuYXYtbGlua3MgbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuYXYtbGlua3MgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbiNuYXYtbGlua3MgbGkgKyBsaSArIGxpIGEge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jaG9tZS1idG4ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjNyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jYXJ0aXN0LWNvdW50ZXIge1xcbiAgb3JkZXI6IDE7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxuI3BhZ2UtZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRoaXJkKTtcXG4gIHBhZGRpbmc6IDIlIDglO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbiNhcnRpc3QtbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuI2xpc3Qge1xcbiAgbWFyZ2luOiAxNXJlbSAwIDhyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXJlbTtcXG59XFxuXFxuI2xpc3QgaDIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCBBbHRlcm5hdGVzJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmFydGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWUyOTtcXG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtIDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDE2MHB4IDEwcHggMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgd2lkdGg6IDg1JTtcXG59XFxuXFxuLmFydGlzdC1pbWcge1xcbiAgYm94LXNoYWRvdzogMCAwIDgwcHggLTEwcHggdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICBib3JkZXItcmFkaXVzOiAwIDE2N3B4IDEwcHggMTBweDtcXG59XFxuXFxuLmFydGlzdC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9wLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLnRvcC1pbmZvIGgzIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubGlrZXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZmEtaGVhcnQge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBmb250LXNpemU6IDI3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYS1oZWFydC5saWtlZCB7XFxuICBjb2xvcjogI2ZjYjQyNDtcXG59XFxuXFxuLmxpa2VzIHtcXG4gIGZsZXg6IDgwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4vKiBjb21tZW50IHBvcCB1cCBzdHlsZXMgKi9cXG4uY29tbWVudC1wb3B1cCB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MDUwNjtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcXG4gIG9wYWNpdHk6IDk1JTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDI7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi5jb21tZW50LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMS44cmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxZTI5O1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHBpbms7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTYwcHggMTBweDtcXG4gIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XFxuICBwYWRkaW5nOiAxcmVtIDFyZW0gNHJlbTtcXG4gIHdpZHRoOiA0MCU7XFxuICBib3gtc2hhZG93OiAxNHB4IDE2cHggNjlweCA3cHggcmdiYSgyNTAsIDUyLCAxNTAsIDEpO1xcbn1cXG5cXG4jY29tbWVudC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLyogZGl2IGdyb3VwaW5nIGltYWdlICYgdGl0bGUgKi9cXG4jZ3JwSW1nSDEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3JkZXI6IDE7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2NvbW1lbnQtcGFnZS10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNjb21tZW50LXBhZ2UtdGl0bGU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDVweDtcXG4gIGhlaWdodDogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbiNjbG9zZS1tb2RhbCB7XFxuICBhbGw6IHVuc2V0O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBvcmRlcjogMDtcXG4gIHdpZHRoOiA5MCU7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5hcnRpc3QtaW1hZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS41cmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhcnRpc3QtZmFjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBnYXA6IDAuOHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM4NGM7XFxuICBtYXJnaW46IDAgMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuI2NvbW1ldC1pbWFnZSB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogODUlO1xcbn1cXG5cXG4jY29tbWV0cy1jb3VudCxcXG4jZGlzcGxheS1jb21tZW50cyxcXG4jY29tbWVudC1mb3JtIHtcXG4gIHBhZGRpbmctbGVmdDogMi41cmVtO1xcbn1cXG5cXG4jZGlzcGxheS1jb21tZW50cyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG5kaXYuaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5kaXYuc2hvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9yZSxcXG4jc3Vic2NyaWJlLWJ0bixcXG4jc3VibWl0LWNvbW1lbnQge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzdWJzY3JpYmUtYnRuLFxcbiNzdWJtaXQtY29tbWVudCB7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcblxcbiNzdWJtaXQtY29tbWVudCB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNkYzA1NzAsICNmYjY2YjApO1xcbn1cXG5cXG4jbmFtZS1maWVsZCxcXG4jdGV4dGFyZWEtZmllbGQge1xcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMC44cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFydGlzdHNBUEkgZnJvbSAnLi9tb2R1bGVzL2dldEFydGlzdEFQSS5qcyc7XG5pbXBvcnQgY3JlYXRlQ2FyZCBmcm9tICcuL21vZHVsZXMvaG9tZVVJLmpzJztcbmltcG9ydCBDb21tZW50VUkgZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnRVSS5qcyc7XG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL21vZHVsZXMvY29tbWVudC5qcyc7XG5pbXBvcnQgbW9kYWxXaW5kb3cgZnJvbSAnLi9tb2R1bGVzL21vZGFsLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBhcnRpc3RDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnRpc3QtY291bnRlcicpO1xuXG5jb25zdCBjb21tZW50UG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudF9wb3B1cCcpO1xuY29uc3QgYXJ0aXN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnRpc3QtbGlzdCcpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuYXJ0aXN0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gIGNvbnN0IGFydGlzdElkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkO1xuICBjb21tZW50UG9wdXAuaW5uZXJIVE1MID0gJyc7XG4gIGNvbW1lbnRQb3B1cC5hcHBlbmRDaGlsZChtb2RhbFdpbmRvdyhhcnRpc3RJZCkpO1xuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbW9yZScpIHtcbiAgICBjb25zdCBjb21tZXRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZXQtaW1hZ2UnKTtcbiAgICBjb25zdCBjb21tZW50UGFnZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtcGFnZS10aXRsZScpO1xuICAgIGNvbnN0IGFydGlzdEZhY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FydGlzdC1mYWN0cycpO1xuICAgIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktY29tbWVudHMnKTtcbiAgICBjb25zdCBjb21tZW50Q291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWV0cy1jb3VudCcpO1xuICAgIGNvbW1ldEltYWdlLnNyYyA9ICcnO1xuICAgIGNvbW1lbnRQYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb21tZW50Q291bnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb21tZW50TGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgLy8gZ2V0IGFydGlzdCBpZFxuICAgIGNvbnN0IGFydGlzdElkID0gZS5wYXRoWzJdLmlkO1xuICAgIGNvbW1lbnRQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgY29tbWVudFBvcHVwLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICBjb25zdCB7XG4gICAgICB0eXBlLFxuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgc2hvcnRjdXQsXG4gICAgICBiaW9zOiBbeyBhdXRob3IgfV0sXG4gICAgfSA9IGF3YWl0IGFydGlzdHNBUEkuZ2V0QXJ0aXN0QnlJZChhcnRpc3RJZCk7XG4gICAgY29tbWV0SW1hZ2Uuc3JjID0gYGh0dHBzOi8vYXBpLm5hcHN0ZXIuY29tL2ltYWdlc2VydmVyL3YyL2FydGlzdHMvJHthcnRpc3RJZH0vaW1hZ2VzLzM1NngyMzcuanBnYDtcbiAgICBjb21tZW50UGFnZVRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBDb21tZW50VUkuYWRkRmFjdHMoYXJ0aXN0RmFjdHMsIFt0eXBlLCBuYW1lLCBzaG9ydGN1dCwgYXV0aG9yXSk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQ29tbWVudC5nZXRDb21tZW50cyhpZCk7XG5cbiAgICBjb21tZW50Q291bnQuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke0NvbW1lbnQuY29tbWVudENvdW50ZXIocmVzdWx0KX0pYDtcblxuICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgcmVzdWx0LmZvckVhY2goKGNvbW1lbnQpID0+IENvbW1lbnRVSS5zaG93Q29tbWVudHMoY29tbWVudExpc3QsIGNvbW1lbnQpKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5jb21tZW50UG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBib2R5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBpZiAoZS50YXJnZXQuaWQgPT09ICdjbG9zZS1tb2RhbCcpIHtcbiAgICBjb21tZW50UG9wdXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIGNvbW1lbnRQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JykgXG4gIH1cbn0pO1xuXG5jb21tZW50UG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBjb21tZW50Rm9ybSA9IGUudGFyZ2V0O1xuICBjb25zdCBuYW1lID0gY29tbWVudEZvcm0uZWxlbWVudHNbMF0udmFsdWU7XG4gIGNvbnN0IG1lc3NhZ2UgPSBjb21tZW50Rm9ybS5lbGVtZW50c1sxXS52YWx1ZTtcbiAgY29uc3QgYXJ0aXN0SWQgPSBjb21tZW50Rm9ybS5jbGFzc05hbWU7XG4gIGNvbW1lbnRGb3JtLmVsZW1lbnRzWzBdLnZhbHVlID0gJyc7XG4gIGNvbW1lbnRGb3JtLmVsZW1lbnRzWzFdLnZhbHVlID0gJyc7XG4gIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktY29tbWVudHMnKTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRhdGVTdHJpbmcgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7XG4gICAgZGF0ZS5nZXRNb250aCgpICsgMVxuICB9LSR7ZGF0ZS5nZXREYXRlKCl9YDtcblxuICBjb21tZW50TGlzdC5hcHBlbmRDaGlsZChcbiAgICBDb21tZW50VUkuYWRkQ29tbWVudHMoY29tbWVudExpc3QsIHtcbiAgICAgIGNyZWF0aW9uX2RhdGU6IGRhdGVTdHJpbmcsXG4gICAgICBjb21tZW50OiBtZXNzYWdlLFxuICAgICAgdXNlcm5hbWU6IG5hbWUsXG4gICAgfSksXG4gICk7XG5cbiAgQ29tbWVudC5wb3N0Q29tbWVudHMoYXJ0aXN0SWQsIG5hbWUsIG1lc3NhZ2UpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFydGlzdHMgPSBhd2FpdCBhcnRpc3RzQVBJLmdldEFydGlzdCgpO1xuICBhcnRpc3RDb3VudC50ZXh0Q29udGVudCA9IGAoJHthcnRpc3RzLmxlbmd0aH0pYDtcbiAgYXJ0aXN0cy5mb3JFYWNoKGNyZWF0ZUNhcmQpO1xufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50IHtcbiAgc3RhdGljIHBvc3RDb21tZW50cyA9IGFzeW5jIChhcnRpc3RJZCwgdXNlcm5hbWUsIGNvbW1lbnQpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0REUjNReGdFNFFIdXRlSmUyR0w3L2NvbW1lbnRzJyxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaXRlbV9pZDogYXJ0aXN0SWQsXG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgY29tbWVudCxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBzdGF0aWMgZ2V0Q29tbWVudHMgPSBhc3luYyAoYXJ0aXN0SWQpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0REUjNReGdFNFFIdXRlSmUyR0w3L2NvbW1lbnRzP2l0ZW1faWQ9JHthcnRpc3RJZH1gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gIH07XG5cbiAgc3RhdGljIGNvbW1lbnRDb3VudGVyID0gKGNvbW1lbnRzQXJyYXkpID0+IHtcbiAgICBpZiAoY29tbWVudHNBcnJheS5sZW5ndGgpIHJldHVybiBjb21tZW50c0FycmF5Lmxlbmd0aDtcbiAgICByZXR1cm4gMDtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnRVSSB7XG4gIHN0YXRpYyBhZGRGYWN0cyA9IGFzeW5jIChwYXJlbnRFbGVtZW50LCBmYWN0cykgPT4ge1xuICAgIC8vIGNsZWFyIG9sZCBlbnRyaWVzXG4gICAgcGFyZW50RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAvLyBbdHlwZSwgc2hvcnRjdXQsIGF1dGhvcl1cbiAgICBjb25zdCBmYWN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmYWN0MS50ZXh0Q29udGVudCA9IGBUeXBlOiAke2ZhY3RzWzBdfWA7XG4gICAgY29uc3QgZmFjdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZmFjdDMudGV4dENvbnRlbnQgPSBgU2hvcnRjdXQ6ICR7ZmFjdHNbMl19YDtcbiAgICBjb25zdCBmYWN0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmYWN0NC50ZXh0Q29udGVudCA9IGBBdXRob3I6ICR7ZmFjdHNbM119YDtcblxuXG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChmYWN0MSk7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChmYWN0Myk7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChmYWN0NCk7XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbiAgfTtcblxuICBzdGF0aWMgc2hvd0NvbW1lbnRzID0gKFxuICAgIGVsZSxcbiAgICB7IGNyZWF0aW9uX2RhdGU6IGRhdGUsIGNvbW1lbnQ6IG1lc3NhZ2UsIHVzZXJuYW1lOiBuYW1lIH0sXG4gICkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNyZWF0aW9uX2RhdGU6IGNyZWF0aW9uRGF0ZSxcbiAgICAgIGNvbW1lbnQsXG4gICAgICB1c2VybmFtZSxcbiAgICB9ID0geyBjcmVhdGlvbl9kYXRlOiBkYXRlLCBjb21tZW50OiBtZXNzYWdlLCB1c2VybmFtZTogbmFtZSB9O1xuICAgIGNvbnN0IGNvbUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbUVsLmlubmVyVGV4dCA9IGAke2NyZWF0aW9uRGF0ZX0gJHt1c2VybmFtZX0gJHtjb21tZW50fSBgO1xuICAgIC8vIGNvbnNvbGUubG9nKGNvbUVsKTtcbiAgICBlbGUuYXBwZW5kQ2hpbGQoY29tRWwpO1xuICAgIHJldHVybiBjb21FbDtcbiAgfTtcblxuICBzdGF0aWMgYWRkQ29tbWVudHMgPSAoZWxlLCB7IGNyZWF0aW9uX2RhdGU6IGRhdGUsIGNvbW1lbnQ6IG1lc3NhZ2UsIHVzZXJuYW1lOiBuYW1lIH0pID0+IHtcbiAgICB0aGlzLnNob3dDb21tZW50cyhlbGUsIHsgY3JlYXRpb25fZGF0ZTogZGF0ZSwgY29tbWVudDogbWVzc2FnZSwgdXNlcm5hbWU6IG5hbWUgfSk7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZvbHZlbWVudEFQSSB7XG4gIHN0YXRpYyBhc3luYyByZWNvcmRMaWtlKGlkKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3EyRWVjSURvbHlpRGd1UW1rRklqL2xpa2VzLycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXN1bHQudGV4dCgpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRMaWtlcygpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvcTJFZWNJRG9seWlEZ3VRbWtGSWovbGlrZXMvJyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBkaXNwbGF5TGlrZXMoaWQpIHtcbiAgICBjb25zdCBsaWtlcyA9IGF3YWl0IEludm9sdmVtZW50QVBJLmdldExpa2VzKCk7XG4gICAgY29uc3QgYXJ0aXN0TGlrZXMgPSBsaWtlcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaXRlbV9pZCA9PT0gaWQpO1xuICAgIGlmIChhcnRpc3RMaWtlcy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IG5MaWtlcyA9IGFydGlzdExpa2VzWzBdLmxpa2VzO1xuICAgIHJldHVybiBuTGlrZXM7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGFydGlzdHNBUEkge1xuICBzdGF0aWMgYXN5bmMgZ2V0QXJ0aXN0KCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAnaHR0cHM6Ly9hcGkubmFwc3Rlci5jb20vdjIuMi9hcnRpc3RzL3RvcD9hcGlrZXk9WmpBMFptWXhabUl0T1RJMU5pMDBZVGRqTFdFek1UWXRNakF5WkRjMU9UYzNOekJoJmxpbWl0PTMwJm9mZnNldD0yMicsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGEuYXJ0aXN0cztcbiAgfVxuXG4gIHN0YXRpYyBnZXRBcnRpc3RCeUlkID0gYXN5bmMgKGFydGlzdElkKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5uYXBzdGVyLmNvbS92Mi4yL2FydGlzdHMvJHthcnRpc3RJZH0/YXBpa2V5PVpqQTBabVl4Wm1JdE9USTFOaTAwWVRkakxXRXpNVFl0TWpBeVpEYzFPVGMzTnpCaGAsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGEuYXJ0aXN0c1swXTtcbiAgfTtcbn1cbiIsImltcG9ydCBJbnZvbHZlbWVudEFQSSBmcm9tICcuL2NyZWF0ZUxpa2UuanMnO1xuXG5jb25zdCBhcnRpc3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnRpc3QtbGlzdCcpO1xuXG5jb25zdCBjcmVhdGVDYXJkID0gYXN5bmMgKGFydGlzdCkgPT4ge1xuICBjb25zdCBhcnRpc3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFydGlzdENhcmQuY2xhc3NOYW1lID0gJ2FydGlzdCc7XG4gIGFydGlzdENhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGFydGlzdC5pZCk7XG4gIGFydGlzdHNMaXN0LmFwcGVuZENoaWxkKGFydGlzdENhcmQpO1xuXG4gIGNvbnN0IGFydGlzdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBhcnRpc3RJbWcuY2xhc3NOYW1lID0gJ2FydGlzdC1pbWcnO1xuICBhcnRpc3RJbWcuc3JjID0gYGh0dHBzOi8vYXBpLm5hcHN0ZXIuY29tL2ltYWdlc2VydmVyL3YyL2FydGlzdHMvJHthcnRpc3QuaWR9L2ltYWdlcy8zNTZ4MjM3LmpwZ2A7XG4gIGFydGlzdENhcmQuYXBwZW5kQ2hpbGQoYXJ0aXN0SW1nKTtcblxuICBjb25zdCBhcnRpc3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFydGlzdEluZm8uY2xhc3NOYW1lID0gJ2FydGlzdC1pbmZvJztcbiAgYXJ0aXN0Q2FyZC5hcHBlbmRDaGlsZChhcnRpc3RJbmZvKTtcblxuICBjb25zdCB0b3BJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvcEluZm8uY2xhc3NOYW1lID0gJ3RvcC1pbmZvJztcbiAgYXJ0aXN0SW5mby5hcHBlbmRDaGlsZCh0b3BJbmZvKTtcblxuICBjb25zdCBhcnRpc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgYXJ0aXN0TmFtZS50ZXh0Q29udGVudCA9IGFydGlzdC5uYW1lO1xuICB0b3BJbmZvLmFwcGVuZENoaWxkKGFydGlzdE5hbWUpO1xuXG4gIGNvbnN0IGxpa2VzQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaWtlc0NvbnQuY2xhc3NOYW1lID0gJ2xpa2VzLWNvbnRhaW5lcic7XG4gIHRvcEluZm8uYXBwZW5kQ2hpbGQobGlrZXNDb250KTtcblxuICBjb25zdCBsaWtlc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGxpa2VzSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1oZWFydCcpO1xuICBsaWtlc0NvbnQuYXBwZW5kQ2hpbGQobGlrZXNJY29uKTtcblxuICBsZXQgY2xpY2tzID0gMDtcblxuICBsaWtlc0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xpY2tzICs9IDE7XG4gICAgbGlrZXNJY29uLmNsYXNzTGlzdC5hZGQoJ2xpa2VkJyk7XG4gICAgY29uc3QgaXNMaWtlZCA9IChudW0pID0+IHtcbiAgICAgIGlmIChudW0gJSAyICE9PSAwKSB7XG4gICAgICAgIEludm9sdmVtZW50QVBJLnJlY29yZExpa2UoYXJ0aXN0LmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpa2VzSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdsaWtlZCcpO1xuICAgICAgICBJbnZvbHZlbWVudEFQSS5kaXNwbGF5TGlrZXMoYXJ0aXN0LmlkKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlzTGlrZWQoY2xpY2tzKTtcbiAgfSk7XG5cbiAgY29uc3QgbGlrZXNDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgbGlrZXNDb3VudC5jbGFzc05hbWUgPSAnbGlrZXMnO1xuICBsaWtlc0NvdW50LnRleHRDb250ZW50ID0gYXdhaXQgSW52b2x2ZW1lbnRBUEkuZGlzcGxheUxpa2VzKGFydGlzdC5pZCk7XG4gIGxpa2VzQ29udC5hcHBlbmRDaGlsZChsaWtlc0NvdW50KTtcblxuICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbW1lbnRCdG4uY2xhc3NOYW1lID0gJ21vcmUnO1xuICBjb21tZW50QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgY29tbWVudEJ0bi50ZXh0Q29udGVudCA9ICcrIE1vcmUnO1xuICBhcnRpc3RJbmZvLmFwcGVuZENoaWxkKGNvbW1lbnRCdG4pO1xuXG4gIEludm9sdmVtZW50QVBJLmdldExpa2VzKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXJkOyIsImNvbnN0IGNyZWF0ZUZvcm0gPSAoYXJ0aXN0SWQpID0+IHtcbiAgY29uc3QgdGhlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgdGhlRm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdQT1NUJyk7XG4gIHRoZUZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdjb21tZW50LWZvcm0nKTtcbiAgdGhlRm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7XG4gIHRoZUZvcm0uY2xhc3NOYW1lID0gYXJ0aXN0SWQ7XG5cbiAgY29uc3QgbmFtZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ1lvdXIgbmFtZScpO1xuICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lLWZpZWxkJyk7XG5cbiAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0ZXh0QXJlYS50ZXh0Q29udGVudCA9ICdBZGQgeW91ciBjb21tZW50IGhlcmUnXG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCAndGV4dGFyZWEtZmllbGQnKTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LWNvbW1lbnQnKTtcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1NlbmQnXG5cbiAgdGhlRm9ybS5hcHBlbmRDaGlsZChuYW1lRmllbGQpO1xuICB0aGVGb3JtLmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgdGhlRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gIHJldHVybiB0aGVGb3JtO1xufTtcblxuY29uc3QgY3JlYXRlRGl2ID0gKGNsYXNzQXJyKSA9PiB7XG4gIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzQXJyKTtcbiAgcmV0dXJuIGRpdmlkZXI7XG59O1xuXG5jb25zdCBjcmVhdGVJZERpdiA9IChpZCkgPT4ge1xuICBjb25zdCBpZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpZERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICByZXR1cm4gaWREaXY7XG59O1xuXG5jb25zdCBjcmVhdGVJbWFnZSA9ICgpID0+IHtcbiAgY29uc3QgaW1hZ2VUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1hZ2VUYWcuc2V0QXR0cmlidXRlKCdpZCcsICdjb21tZXQtaW1hZ2UnKTtcbiAgaW1hZ2VUYWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnY2xvc2UtbW9kYWwnKTtcbiAgcmV0dXJuIGltYWdlVGFnO1xufTtcblxuY29uc3QgY3JlYXRlTW9kYWxCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1vZGFsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgbW9kYWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZS1tb2RhbCcpO1xuICBtb2RhbEJ0bi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XG4gIHJldHVybiBtb2RhbEJ0bjtcbn07XG5cbmNvbnN0IG1haW5UaXRsZSA9ICh0YWcsIGlkKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5jb25zdCBjcmVhdGVNb2RhbCA9IChhcnRpc3RJZCkgPT4ge1xuICBjb25zdCBjb21tZW50V3JhcHBlciA9IGNyZWF0ZURpdihbJ2NvbW1lbnQtd3JhcHBlciddKTtcblxuICBjb25zdCBhcnRpc3RJbWFnZSA9IGNyZWF0ZURpdihbJ2FydGlzdC1pbWFnZSddKTtcbiAgY29uc3QgZ3JwSW1naDEgPSBjcmVhdGVJZERpdignZ3JwSW1nSDEnKTtcblxuICBjb25zdCBJbWFnZVRhZyA9IGNyZWF0ZUltYWdlKCk7XG4gIGNvbnN0IGgxVGl0bGUgPSBtYWluVGl0bGUoJ2gxJywgJ2NvbW1lbnQtcGFnZS10aXRsZScpO1xuXG4gIGdycEltZ2gxLmFwcGVuZENoaWxkKEltYWdlVGFnKTtcbiAgZ3JwSW1naDEuYXBwZW5kQ2hpbGQoaDFUaXRsZSk7XG5cbiAgY29uc3QgbW9kYWxCdG4gPSBjcmVhdGVNb2RhbEJ0bigpO1xuXG4gIGFydGlzdEltYWdlLmFwcGVuZENoaWxkKGdycEltZ2gxKTtcbiAgYXJ0aXN0SW1hZ2UuYXBwZW5kQ2hpbGQobW9kYWxCdG4pO1xuXG4gIGNvbnN0IGFydGlzdEZhY3QgPSBjcmVhdGVJZERpdignYXJ0aXN0LWZhY3RzJyk7XG5cbiAgY29uc3QgaDJUaXRsZSA9IG1haW5UaXRsZSgnaDInLCAnY29tbWV0cy1jb3VudCcpO1xuXG4gIGNvbnN0IGRpc3BsYXlDb21tZW50cyA9IGNyZWF0ZUlkRGl2KCdkaXNwbGF5LWNvbW1lbnRzJyk7XG5cbiAgY29uc3QgdGhlRm9ybSA9IGNyZWF0ZUZvcm0oYXJ0aXN0SWQpO1xuXG4gIGNvbW1lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGFydGlzdEltYWdlKTtcbiAgY29tbWVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoYXJ0aXN0RmFjdCk7XG4gIGNvbW1lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGgyVGl0bGUpO1xuICBjb21tZW50V3JhcHBlci5hcHBlbmRDaGlsZChkaXNwbGF5Q29tbWVudHMpO1xuICBjb21tZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0aGVGb3JtKTtcblxuICByZXR1cm4gY29tbWVudFdyYXBwZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNb2RhbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==