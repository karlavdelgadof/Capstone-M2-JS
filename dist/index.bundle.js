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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  text-decoration: none;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n\n  /* outline: 2px solid red; */\n  font-size: 20px;\n}\n\n:root {\n  --color-primary: #ec6a5e;\n  --color-secondary: #f6f6f6;\n  --color-third: #34384c;\n  --color-fourth: #4eb0b1;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-image: linear-gradient(180deg, #040506, #0c0d12, #1c1e29, #34384c);\n  background-blend-mode: soft-light;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  backdrop-filter: blur(10px);\n  position: relative;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\n#page-header {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 2% 8%;\n  position: fixed;\n  background-color: #0c0d12;\n}\n\n#logo {\n  display: flex;\n}\n\n#log-icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 100%;\n  width: 65px;\n}\n\n#logo h1 {\n  font-family: 'Montserrat Alternates', sans-serif;\n  font-size: 2rem;\n  color: white;\n  font-style: italic;\n}\n\n#navbar {\n  display: flex;\n}\n\n#nav-links {\n  display: flex;\n  gap: 1rem;\n  font-size: 2rem;\n}\n\n#nav-links li {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n}\n\n#nav-links li a {\n  text-decoration: none;\n  color: var(--color-secondary);\n  font-weight: bold;\n}\n\n#page-footer {\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  background-color: #1c1e29;\n  padding: 2% 8%;\n  color: #fff;\n}\n\n#artist-list {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 3rem;\n}\n\n#list {\n  margin-top: 12rem;\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\n\n#list h2 {\n  color: #fff;\n  font-size: 2.5rem;\n  font-family: 'Montserrat Alternates', sans-serif;\n}\n\n.artist {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  background-color: #1c1e29;\n  padding: 0.8rem 1rem 2rem;\n  border-radius: 10px 155px 10px 10px;\n  color: #fff;\n}\n\n.artist-img {\n  /* box-shadow: 0 0 58px 3px rgba(250, 53, 150, 0.77); */\n  box-shadow: 0 0 80px -10px rgba(250, 52, 150, 1);\n  border-radius: 0 167px 10px 10px;\n}\n\n.artist-info {\n  display: flex;\n  flex-direction: column;\n}\n\n.top-info {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 1rem;\n  font-size: 2.5rem;\n}\n\n.top-info h3 {\n  font-size: 1.3rem;\n}\n\n.fa-heart {\n  justify-self: end;\n  font-size: 25px;\n}\n\n.likes {\n  flex: 80%;\n  text-align: right;\n}\n\n/* comment pop up styles */\n.comment-popup {\n  margin-top: 100px;\n  height: 100vh;\n  background-color: blue;\n  width: 100%;\n}\n\ndiv.hide {\n  display: none;\n}\n\ndiv.show {\n  display: flex;\n}\n\n.more {\n  width: 180px;\n  background-color: transparent;\n  border: none;\n  border: 2px solid #fa3496;\n  padding: 1rem 2rem;\n  border-radius: 30px;\n  align-items: flex-start;\n  font-family: inherit;\n  font-weight: 600;\n  color: #fa3496;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,UAAU;EACV,SAAS;;EAET,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6EAA6E;EAC7E,iCAAiC;EACjC,4BAA4B;EAC5B,2BAA2B;EAC3B,sBAAsB;EACtB,2BAA2B;EAC3B,kBAAkB;EAClB,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;EACX,cAAc;EACd,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yDAAmC;EACnC,4BAA4B;EAC5B,wBAAwB;EACxB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,gDAAgD;EAChD,eAAe;EACf,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,WAAW;AACb;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,kCAAkC;EAClC,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,gDAAgD;AAClD;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;EACzB,mCAAmC;EACnC,WAAW;AACb;;AAEA;EACE,uDAAuD;EACvD,gDAAgD;EAChD,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,iBAAiB;AACnB;;AAEA,0BAA0B;AAC1B;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;EACpB,gBAAgB;EAChB,cAAc;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;0,800;0,900;1,800;1,900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');\n\n* {\n  text-decoration: none;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n\n  /* outline: 2px solid red; */\n  font-size: 20px;\n}\n\n:root {\n  --color-primary: #ec6a5e;\n  --color-secondary: #f6f6f6;\n  --color-third: #34384c;\n  --color-fourth: #4eb0b1;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-image: linear-gradient(180deg, #040506, #0c0d12, #1c1e29, #34384c);\n  background-blend-mode: soft-light;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  backdrop-filter: blur(10px);\n  position: relative;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\n#page-header {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 2% 8%;\n  position: fixed;\n  background-color: #0c0d12;\n}\n\n#logo {\n  display: flex;\n}\n\n#log-icon {\n  background-image: url('./wave.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 100%;\n  width: 65px;\n}\n\n#logo h1 {\n  font-family: 'Montserrat Alternates', sans-serif;\n  font-size: 2rem;\n  color: white;\n  font-style: italic;\n}\n\n#navbar {\n  display: flex;\n}\n\n#nav-links {\n  display: flex;\n  gap: 1rem;\n  font-size: 2rem;\n}\n\n#nav-links li {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n}\n\n#nav-links li a {\n  text-decoration: none;\n  color: var(--color-secondary);\n  font-weight: bold;\n}\n\n#page-footer {\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  background-color: #1c1e29;\n  padding: 2% 8%;\n  color: #fff;\n}\n\n#artist-list {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 3rem;\n}\n\n#list {\n  margin-top: 12rem;\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\n\n#list h2 {\n  color: #fff;\n  font-size: 2.5rem;\n  font-family: 'Montserrat Alternates', sans-serif;\n}\n\n.artist {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  background-color: #1c1e29;\n  padding: 0.8rem 1rem 2rem;\n  border-radius: 10px 155px 10px 10px;\n  color: #fff;\n}\n\n.artist-img {\n  /* box-shadow: 0 0 58px 3px rgba(250, 53, 150, 0.77); */\n  box-shadow: 0 0 80px -10px rgba(250, 52, 150, 1);\n  border-radius: 0 167px 10px 10px;\n}\n\n.artist-info {\n  display: flex;\n  flex-direction: column;\n}\n\n.top-info {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 1rem;\n  font-size: 2.5rem;\n}\n\n.top-info h3 {\n  font-size: 1.3rem;\n}\n\n.fa-heart {\n  justify-self: end;\n  font-size: 25px;\n}\n\n.likes {\n  flex: 80%;\n  text-align: right;\n}\n\n/* comment pop up styles */\n.comment-popup {\n  margin-top: 100px;\n  height: 100vh;\n  background-color: blue;\n  width: 100%;\n}\n\ndiv.hide {\n  display: none;\n}\n\ndiv.show {\n  display: flex;\n}\n\n.more {\n  width: 180px;\n  background-color: transparent;\n  border: none;\n  border: 2px solid #fa3496;\n  padding: 1rem 2rem;\n  border-radius: 30px;\n  align-items: flex-start;\n  font-family: inherit;\n  font-weight: 600;\n  color: #fa3496;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_getArtistAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getArtistAPI */ "./src/modules/getArtistAPI.js");
/* harmony import */ var _modules_homeUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/homeUI */ "./src/modules/homeUI.js");
/* harmony import */ var _modules_commentUI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/commentUI.js */ "./src/modules/commentUI.js");
/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/comment.js */ "./src/modules/comment.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ "./src/modules/modal.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







const commentPopup = document.getElementById('comment_popup');
const artistList = document.getElementById('artist-list');

artistList.addEventListener('click', async (e) => {
  if (e.target.className === 'more') {
    const commetImage = document.getElementById('commet-image');
    const commentPageTitle = document.getElementById('comment-page-title');
    const artistFacts = document.getElementById('artist-facts');
    commetImage.src = '';
    commentPageTitle.textContent = '';
    const artistId = e.path[2].id;
    commentPopup.classList.remove('hide');
    commentPopup.classList.add('show');
    const {
      type,
      name,
      shortcut,
      bios: [{ author }],
    } = await _modules_getArtistAPI__WEBPACK_IMPORTED_MODULE_0__["default"].getArtistById(artistId);
    commetImage.src = `https://api.napster.com/imageserver/v2/artists/${artistId}/images/356x237.jpg`;
    commentPageTitle.textContent = name;
    _modules_comment_js__WEBPACK_IMPORTED_MODULE_3__["default"].addFacts(artistFacts, [type, name, shortcut, author]);
  }
});

commentPopup.addEventListener('click', (e) => {
  if (e.target.id === 'close-modal') {
    commentPopup.classList.add('hide');
    commentPopup.classList.remove('show');
  }
});

commentPopup.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e);

});

// commentForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const name = commentForm.elements[0].value;
//   const message = commentForm.elements[1].value;
//   const artistId = commentForm.name;
//   const result = await Comment.getComments(artistId, name, message);
//   console.log(result);
//   commentForm.elements[0].value = '';
//   commentForm.elements[1].value = '';
// });

document.addEventListener('DOMContentLoaded', async () => {
  const artists = await _modules_getArtistAPI__WEBPACK_IMPORTED_MODULE_0__["default"].getArtist();
  artists.forEach(_modules_homeUI__WEBPACK_IMPORTED_MODULE_1__["default"]);
  commentPopup.appendChild((0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
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
  static getComments = async (artistId, username, comment) => {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DDR3QxgE4QHuteJe2GL7/comments',
      {
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
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
const artistsList = document.getElementById('artist-list');

const createCard = (artist) => {
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

  const likesIcon = document.createElement('i');
  likesIcon.classList.add('fa-solid', 'fa-heart');
  topInfo.appendChild(likesIcon);

  const likesCount = document.createElement('span');
  likesCount.className = 'likes';
  likesCount.textContent = artist.likes;
  topInfo.appendChild(likesCount);

  const commentBtn = document.createElement('button');
  commentBtn.className = 'more';
  commentBtn.setAttribute('type', 'button');
  commentBtn.textContent = '+ More';
  artistInfo.appendChild(commentBtn);
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
const createForm = () => {
  const theForm = document.createElement('form');
  theForm.setAttribute('method', 'POST');
  theForm.setAttribute('id', 'comment-form');

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
  modalBtn.textContent = 'X';
  return modalBtn;
};

const mainTitle = (tag, id) => {
  const header = document.createElement(tag);
  header.setAttribute('id', id);
  return header;
};

const createModal = () => {
  const commentWrapper = createDiv(['comment-wrapper']);
  const artistImage = createDiv(['artist-image']);

  const ImageTag = createImage();
  const modalBtn = createModalBtn();

  artistImage.appendChild(ImageTag);
  artistImage.appendChild(modalBtn);

  const h1Title = mainTitle('h1', 'comment-page-title');

  const artistFact = createIdDiv('artist-facts');

  const h2Title = mainTitle('h2', 'commets-count');

  const displayComments = createIdDiv('display-comments');

  const theForm = createForm();

  commentWrapper.appendChild(artistImage);
  commentWrapper.appendChild(h1Title);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEMsU0FBUztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9FQUFvRSxVQUFVO0FBQzlFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUN6Q3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRVSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvZ2V0QXJ0aXN0QVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9ob21lVUkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL21vZGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3dhdmUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0K0FsdGVybmF0ZXM6aXRhbCx3Z2h0QDAsNDAwOzAsODAwOzAsOTAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvdXJjZStTYW5zK1BybyZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG5cXG4gIC8qIG91dGxpbmU6IDJweCBzb2xpZCByZWQ7ICovXFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY29sb3ItcHJpbWFyeTogI2VjNmE1ZTtcXG4gIC0tY29sb3Itc2Vjb25kYXJ5OiAjZjZmNmY2O1xcbiAgLS1jb2xvci10aGlyZDogIzM0Mzg0YztcXG4gIC0tY29sb3ItZm91cnRoOiAjNGViMGIxO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzA0MDUwNiwgIzBjMGQxMiwgIzFjMWUyOSwgIzM0Mzg0Yyk7XFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNvZnQtbGlnaHQ7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3BhZ2UtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDIlIDglO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMGQxMjtcXG59XFxuXFxuI2xvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2xvZy1pY29uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDY1cHg7XFxufVxcblxcbiNsb2dvIGgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCBBbHRlcm5hdGVzJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuI25hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbmF2LWxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNuYXYtbGlua3MgbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuYXYtbGlua3MgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jcGFnZS1mb290ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWUyOTtcXG4gIHBhZGRpbmc6IDIlIDglO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbiNhcnRpc3QtbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuI2xpc3Qge1xcbiAgbWFyZ2luLXRvcDogMTJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXJlbTtcXG59XFxuXFxuI2xpc3QgaDIge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCBBbHRlcm5hdGVzJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmFydGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWUyOTtcXG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtIDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDE1NXB4IDEwcHggMTBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYXJ0aXN0LWltZyB7XFxuICAvKiBib3gtc2hhZG93OiAwIDAgNThweCAzcHggcmdiYSgyNTAsIDUzLCAxNTAsIDAuNzcpOyAqL1xcbiAgYm94LXNoYWRvdzogMCAwIDgwcHggLTEwcHggcmdiYSgyNTAsIDUyLCAxNTAsIDEpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAxNjdweCAxMHB4IDEwcHg7XFxufVxcblxcbi5hcnRpc3QtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvcC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi50b3AtaW5mbyBoMyB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmZhLWhlYXJ0IHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ubGlrZXMge1xcbiAgZmxleDogODAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi8qIGNvbW1lbnQgcG9wIHVwIHN0eWxlcyAqL1xcbi5jb21tZW50LXBvcHVwIHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZGl2LmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGl2LnNob3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vcmUge1xcbiAgd2lkdGg6IDE4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmEzNDk2O1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6ICNmYTM0OTY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTOztFQUVULDRCQUE0QjtFQUM1QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZFQUE2RTtFQUM3RSxpQ0FBaUM7RUFDakMsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlEQUFtQztFQUNuQyw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0Isa0NBQWtDO0VBQ2xDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsbUNBQW1DO0VBQ25DLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVEQUF1RDtFQUN2RCxnREFBZ0Q7RUFDaEQsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0K0FsdGVybmF0ZXM6aXRhbCx3Z2h0QDAsNDAwOzAsODAwOzAsOTAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvdXJjZStTYW5zK1BybyZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcblxcbiAgLyogb3V0bGluZTogMnB4IHNvbGlkIHJlZDsgKi9cXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jb2xvci1wcmltYXJ5OiAjZWM2YTVlO1xcbiAgLS1jb2xvci1zZWNvbmRhcnk6ICNmNmY2ZjY7XFxuICAtLWNvbG9yLXRoaXJkOiAjMzQzODRjO1xcbiAgLS1jb2xvci1mb3VydGg6ICM0ZWIwYjE7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDQwNTA2LCAjMGMwZDEyLCAjMWMxZTI5LCAjMzQzODRjKTtcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc29mdC1saWdodDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jcGFnZS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMiUgOCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMwZDEyO1xcbn1cXG5cXG4jbG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbG9nLWljb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL3dhdmUucG5nJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDY1cHg7XFxufVxcblxcbiNsb2dvIGgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCBBbHRlcm5hdGVzJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuI25hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbmF2LWxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNuYXYtbGlua3MgbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuYXYtbGlua3MgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jcGFnZS1mb290ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWUyOTtcXG4gIHBhZGRpbmc6IDIlIDglO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbiNhcnRpc3QtbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuI2xpc3Qge1xcbiAgbWFyZ2luLXRvcDogMTJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXJlbTtcXG59XFxuXFxuI2xpc3QgaDIge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCBBbHRlcm5hdGVzJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmFydGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWUyOTtcXG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtIDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDE1NXB4IDEwcHggMTBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYXJ0aXN0LWltZyB7XFxuICAvKiBib3gtc2hhZG93OiAwIDAgNThweCAzcHggcmdiYSgyNTAsIDUzLCAxNTAsIDAuNzcpOyAqL1xcbiAgYm94LXNoYWRvdzogMCAwIDgwcHggLTEwcHggcmdiYSgyNTAsIDUyLCAxNTAsIDEpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAxNjdweCAxMHB4IDEwcHg7XFxufVxcblxcbi5hcnRpc3QtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvcC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi50b3AtaW5mbyBoMyB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmZhLWhlYXJ0IHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ubGlrZXMge1xcbiAgZmxleDogODAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi8qIGNvbW1lbnQgcG9wIHVwIHN0eWxlcyAqL1xcbi5jb21tZW50LXBvcHVwIHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZGl2LmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGl2LnNob3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vcmUge1xcbiAgd2lkdGg6IDE4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmEzNDk2O1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6ICNmYTM0OTY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYXJ0aXN0c0FQSSBmcm9tICcuL21vZHVsZXMvZ2V0QXJ0aXN0QVBJJztcbmltcG9ydCBjcmVhdGVDYXJkIGZyb20gJy4vbW9kdWxlcy9ob21lVUknO1xuaW1wb3J0IENvbW1lbnRVSSBmcm9tICcuL21vZHVsZXMvY29tbWVudFVJLmpzJztcbmltcG9ydCBDb21tZW50IGZyb20gJy4vbW9kdWxlcy9jb21tZW50LmpzJztcbmltcG9ydCBtb2RhbFdpbmRvdyBmcm9tICcuL21vZHVsZXMvbW9kYWwuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGNvbW1lbnRQb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50X3BvcHVwJyk7XG5jb25zdCBhcnRpc3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FydGlzdC1saXN0Jyk7XG5cbmFydGlzdExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbW9yZScpIHtcbiAgICBjb25zdCBjb21tZXRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZXQtaW1hZ2UnKTtcbiAgICBjb25zdCBjb21tZW50UGFnZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtcGFnZS10aXRsZScpO1xuICAgIGNvbnN0IGFydGlzdEZhY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FydGlzdC1mYWN0cycpO1xuICAgIGNvbW1ldEltYWdlLnNyYyA9ICcnO1xuICAgIGNvbW1lbnRQYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBhcnRpc3RJZCA9IGUucGF0aFsyXS5pZDtcbiAgICBjb21tZW50UG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIGNvbW1lbnRQb3B1cC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgY29uc3Qge1xuICAgICAgdHlwZSxcbiAgICAgIG5hbWUsXG4gICAgICBzaG9ydGN1dCxcbiAgICAgIGJpb3M6IFt7IGF1dGhvciB9XSxcbiAgICB9ID0gYXdhaXQgYXJ0aXN0c0FQSS5nZXRBcnRpc3RCeUlkKGFydGlzdElkKTtcbiAgICBjb21tZXRJbWFnZS5zcmMgPSBgaHR0cHM6Ly9hcGkubmFwc3Rlci5jb20vaW1hZ2VzZXJ2ZXIvdjIvYXJ0aXN0cy8ke2FydGlzdElkfS9pbWFnZXMvMzU2eDIzNy5qcGdgO1xuICAgIGNvbW1lbnRQYWdlVGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIENvbW1lbnQuYWRkRmFjdHMoYXJ0aXN0RmFjdHMsIFt0eXBlLCBuYW1lLCBzaG9ydGN1dCwgYXV0aG9yXSk7XG4gIH1cbn0pO1xuXG5jb21tZW50UG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuaWQgPT09ICdjbG9zZS1tb2RhbCcpIHtcbiAgICBjb21tZW50UG9wdXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIGNvbW1lbnRQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIH1cbn0pO1xuXG5jb21tZW50UG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zb2xlLmxvZyhlKTtcblxufSk7XG5cbi8vIGNvbW1lbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgY29uc3QgbmFtZSA9IGNvbW1lbnRGb3JtLmVsZW1lbnRzWzBdLnZhbHVlO1xuLy8gICBjb25zdCBtZXNzYWdlID0gY29tbWVudEZvcm0uZWxlbWVudHNbMV0udmFsdWU7XG4vLyAgIGNvbnN0IGFydGlzdElkID0gY29tbWVudEZvcm0ubmFtZTtcbi8vICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQ29tbWVudC5nZXRDb21tZW50cyhhcnRpc3RJZCwgbmFtZSwgbWVzc2FnZSk7XG4vLyAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4vLyAgIGNvbW1lbnRGb3JtLmVsZW1lbnRzWzBdLnZhbHVlID0gJyc7XG4vLyAgIGNvbW1lbnRGb3JtLmVsZW1lbnRzWzFdLnZhbHVlID0gJyc7XG4vLyB9KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcbiAgY29uc3QgYXJ0aXN0cyA9IGF3YWl0IGFydGlzdHNBUEkuZ2V0QXJ0aXN0KCk7XG4gIGFydGlzdHMuZm9yRWFjaChjcmVhdGVDYXJkKTtcbiAgY29tbWVudFBvcHVwLmFwcGVuZENoaWxkKG1vZGFsV2luZG93KCkpO1xufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50IHtcbiAgc3RhdGljIGdldENvbW1lbnRzID0gYXN5bmMgKGFydGlzdElkLCB1c2VybmFtZSwgY29tbWVudCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvRERSM1F4Z0U0UUh1dGVKZTJHTDcvY29tbWVudHMnLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGl0ZW1faWQ6IGFydGlzdElkLFxuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgIGNvbW1lbnQsXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50VUkge1xuICBzdGF0aWMgYWRkRmFjdHMgPSBhc3luYyAocGFyZW50RWxlbWVudCwgZmFjdHMpID0+IHtcbiAgICAvLyBjbGVhciBvbGQgZW50cmllc1xuICAgIHBhcmVudEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgZmFjdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7IC8vIFt0eXBlLCBuYW1lLCBzaG9ydGN1dCwgYXV0aG9yXVxuICAgIGZhY3QxLnRleHRDb250ZW50ID0gYE5hbWU6ICR7ZmFjdHNbMV19YDtcbiAgICBjb25zdCBmYWN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmYWN0Mi50ZXh0Q29udGVudCA9IGBUeXBlOiAke2ZhY3RzWzBdfWA7XG4gICAgY29uc3QgZmFjdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZmFjdDMudGV4dENvbnRlbnQgPSBgU2hvcnRjdXQ6ICR7ZmFjdHNbMl19YDtcbiAgICBjb25zdCBmYWN0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmYWN0NC50ZXh0Q29udGVudCA9IGBBdXRob3I6ICR7ZmFjdHNbM119YDtcblxuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFjdDEpO1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFjdDIpO1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFjdDMpO1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFjdDQpO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBhcnRpc3RzQVBJIHtcbiAgc3RhdGljIGFzeW5jIGdldEFydGlzdCgpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgJ2h0dHBzOi8vYXBpLm5hcHN0ZXIuY29tL3YyLjIvYXJ0aXN0cy90b3A/YXBpa2V5PVpqQTBabVl4Wm1JdE9USTFOaTAwWVRkakxXRXpNVFl0TWpBeVpEYzFPVGMzTnpCaCZsaW1pdD0zMCZvZmZzZXQ9MjInLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhLmFydGlzdHM7XG4gIH1cblxuICBzdGF0aWMgZ2V0QXJ0aXN0QnlJZCA9IGFzeW5jIChhcnRpc3RJZCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkubmFwc3Rlci5jb20vdjIuMi9hcnRpc3RzLyR7YXJ0aXN0SWR9P2FwaWtleT1aakEwWm1ZeFptSXRPVEkxTmkwMFlUZGpMV0V6TVRZdE1qQXlaRGMxT1RjM056QmhgLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhLmFydGlzdHNbMF07XG4gIH07XG59XG4iLCJjb25zdCBhcnRpc3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnRpc3QtbGlzdCcpO1xuXG5jb25zdCBjcmVhdGVDYXJkID0gKGFydGlzdCkgPT4ge1xuICBjb25zdCBhcnRpc3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFydGlzdENhcmQuY2xhc3NOYW1lID0gJ2FydGlzdCc7XG4gIGFydGlzdENhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGFydGlzdC5pZCk7XG4gIGFydGlzdHNMaXN0LmFwcGVuZENoaWxkKGFydGlzdENhcmQpO1xuXG4gIGNvbnN0IGFydGlzdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBhcnRpc3RJbWcuY2xhc3NOYW1lID0gJ2FydGlzdC1pbWcnO1xuICBhcnRpc3RJbWcuc3JjID0gYGh0dHBzOi8vYXBpLm5hcHN0ZXIuY29tL2ltYWdlc2VydmVyL3YyL2FydGlzdHMvJHthcnRpc3QuaWR9L2ltYWdlcy8zNTZ4MjM3LmpwZ2A7XG4gIGFydGlzdENhcmQuYXBwZW5kQ2hpbGQoYXJ0aXN0SW1nKTtcblxuICBjb25zdCBhcnRpc3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFydGlzdEluZm8uY2xhc3NOYW1lID0gJ2FydGlzdC1pbmZvJztcbiAgYXJ0aXN0Q2FyZC5hcHBlbmRDaGlsZChhcnRpc3RJbmZvKTtcblxuICBjb25zdCB0b3BJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvcEluZm8uY2xhc3NOYW1lID0gJ3RvcC1pbmZvJztcbiAgYXJ0aXN0SW5mby5hcHBlbmRDaGlsZCh0b3BJbmZvKTtcblxuICBjb25zdCBhcnRpc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgYXJ0aXN0TmFtZS50ZXh0Q29udGVudCA9IGFydGlzdC5uYW1lO1xuICB0b3BJbmZvLmFwcGVuZENoaWxkKGFydGlzdE5hbWUpO1xuXG4gIGNvbnN0IGxpa2VzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgbGlrZXNJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWhlYXJ0Jyk7XG4gIHRvcEluZm8uYXBwZW5kQ2hpbGQobGlrZXNJY29uKTtcblxuICBjb25zdCBsaWtlc0NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBsaWtlc0NvdW50LmNsYXNzTmFtZSA9ICdsaWtlcyc7XG4gIGxpa2VzQ291bnQudGV4dENvbnRlbnQgPSBhcnRpc3QubGlrZXM7XG4gIHRvcEluZm8uYXBwZW5kQ2hpbGQobGlrZXNDb3VudCk7XG5cbiAgY29uc3QgY29tbWVudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb21tZW50QnRuLmNsYXNzTmFtZSA9ICdtb3JlJztcbiAgY29tbWVudEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIGNvbW1lbnRCdG4udGV4dENvbnRlbnQgPSAnKyBNb3JlJztcbiAgYXJ0aXN0SW5mby5hcHBlbmRDaGlsZChjb21tZW50QnRuKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhcmQ7IiwiY29uc3QgY3JlYXRlRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgdGhlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgdGhlRm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdQT1NUJyk7XG4gIHRoZUZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdjb21tZW50LWZvcm0nKTtcblxuICBjb25zdCBuYW1lRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBuYW1lIC4uLicpO1xuICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lLWZpZWxkJyk7XG5cbiAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1R5cGUgeW91ciBjb21tZW50IGhlcmUgLi4uJyk7XG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCAndGV4dGFyZWEtZmllbGQnKTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtY29tbWVudCcpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdTdWJtaXQnKTtcblxuICB0aGVGb3JtLmFwcGVuZENoaWxkKG5hbWVGaWVsZCk7XG4gIHRoZUZvcm0uYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xuICB0aGVGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgcmV0dXJuIHRoZUZvcm07XG59O1xuXG5jb25zdCBjcmVhdGVEaXYgPSAoY2xhc3NBcnIpID0+IHtcbiAgY29uc3QgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZpZGVyLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NBcnIpO1xuICByZXR1cm4gZGl2aWRlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUlkRGl2ID0gKGlkKSA9PiB7XG4gIGNvbnN0IGlkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlkRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIHJldHVybiBpZERpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZUltYWdlID0gKCkgPT4ge1xuICBjb25zdCBpbWFnZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWFnZVRhZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbW1ldC1pbWFnZScpO1xuICBpbWFnZVRhZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdjbG9zZS1tb2RhbCcpO1xuICByZXR1cm4gaW1hZ2VUYWc7XG59O1xuXG5jb25zdCBjcmVhdGVNb2RhbEJ0biA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbW9kYWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBtb2RhbEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlLW1vZGFsJyk7XG4gIG1vZGFsQnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICByZXR1cm4gbW9kYWxCdG47XG59O1xuXG5jb25zdCBtYWluVGl0bGUgPSAodGFnLCBpZCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuY29uc3QgY3JlYXRlTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRXcmFwcGVyID0gY3JlYXRlRGl2KFsnY29tbWVudC13cmFwcGVyJ10pO1xuICBjb25zdCBhcnRpc3RJbWFnZSA9IGNyZWF0ZURpdihbJ2FydGlzdC1pbWFnZSddKTtcblxuICBjb25zdCBJbWFnZVRhZyA9IGNyZWF0ZUltYWdlKCk7XG4gIGNvbnN0IG1vZGFsQnRuID0gY3JlYXRlTW9kYWxCdG4oKTtcblxuICBhcnRpc3RJbWFnZS5hcHBlbmRDaGlsZChJbWFnZVRhZyk7XG4gIGFydGlzdEltYWdlLmFwcGVuZENoaWxkKG1vZGFsQnRuKTtcblxuICBjb25zdCBoMVRpdGxlID0gbWFpblRpdGxlKCdoMScsICdjb21tZW50LXBhZ2UtdGl0bGUnKTtcblxuICBjb25zdCBhcnRpc3RGYWN0ID0gY3JlYXRlSWREaXYoJ2FydGlzdC1mYWN0cycpO1xuXG4gIGNvbnN0IGgyVGl0bGUgPSBtYWluVGl0bGUoJ2gyJywgJ2NvbW1ldHMtY291bnQnKTtcblxuICBjb25zdCBkaXNwbGF5Q29tbWVudHMgPSBjcmVhdGVJZERpdignZGlzcGxheS1jb21tZW50cycpO1xuXG4gIGNvbnN0IHRoZUZvcm0gPSBjcmVhdGVGb3JtKCk7XG5cbiAgY29tbWVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoYXJ0aXN0SW1hZ2UpO1xuICBjb21tZW50V3JhcHBlci5hcHBlbmRDaGlsZChoMVRpdGxlKTtcbiAgY29tbWVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoYXJ0aXN0RmFjdCk7XG4gIGNvbW1lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGgyVGl0bGUpO1xuICBjb21tZW50V3JhcHBlci5hcHBlbmRDaGlsZChkaXNwbGF5Q29tbWVudHMpO1xuICBjb21tZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0aGVGb3JtKTtcblxuICByZXR1cm4gY29tbWVudFdyYXBwZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNb2RhbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==