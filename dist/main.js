/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './node_modules/css-loader/dist/cjs.js!./src/style.css':
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* styles.css */\r\n\r\nbody {\r\n    font-family: Arial, sans-serif;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n}\r\n\r\n#project-list{\r\n    margin: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #ccc;\r\n    border-radius: 5px;\r\n}\r\n#todo-list{\r\n    margin: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #ccc;\r\n    border-radius: 5px;\r\n    width: 550px;\r\n    height: 300px;\r\n}\r\n\r\n.priority-low {\r\n    background-color: lightgreen;\r\n    cursor: pointer;\r\n}\r\n\r\n.priority-medium {\r\n    background-color: lightgray;\r\n    cursor: pointer;\r\n}\r\n\r\n.priority-high {\r\n    background-color: lightcoral;\r\n    cursor: pointer;\r\n}\r\n\r\n#todo-details {\r\n    margin: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #ccc;\r\n    border-radius: 5px;\r\n    width: 550px;\r\n    height: 300px;\r\n}\r\n\r\n.active{\r\n    background-color: skyblue;\r\n}\r\n\r\n#container{\r\n    display: flex;\r\n}\r\n#title,#description,#dueDate,#priority,#notes,#todo-list,#todo-details,#checklist{\r\n    border: 2px solid orange;\r\n    border-radius: 5px;\r\n    background-color: beige;\r\n}\r\n#submit-todo{\r\n    background-color: bisque;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n#todo-list-header,#todo-details-header{\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: antiquewhite;\r\n    margin: 0 auto;\r\n}\r\n#todo-list-header>h2,#todo-details-header>h2{\r\n    margin: 0 auto;\r\n}\r\n#todo-form{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    width: 450px;\r\n    height: 400px;\r\n    background-color: darkgray;\r\n    margin: 0 auto;\r\n}\r\ninput,textarea,select{\r\n    height: 40px;\r\n}\r\n#submit-todo{\r\n    background-color: skyblue;\r\n    width: 80px;\r\n    height: 40px;\r\n    margin: 0 auto;\r\n}\r\n`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js',
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js':
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?',
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/noSourceMaps.js':
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?',
        );

        /***/
      },

    /***/ './src/style.css':
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?',
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?',
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?',
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?',
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?',
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?',
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?',
        );

        /***/
      },

    /***/ './src/ProjectManager.js':
      /*!*******************************!*\
  !*** ./src/ProjectManager.js ***!
  \*******************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectManager: () => (/* binding */ ProjectManager)\n/* harmony export */ });\n/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo.js */ \"./src/Todo.js\");\n\r\n\r\n\r\n\r\nclass ProjectManager {\r\n    constructor() {\r\n        this.projects = this.loadFromLocalStorage() || [];\r\n        this.defaultProject = new _Todo_js__WEBPACK_IMPORTED_MODULE_0__.Project('Project 1');\r\n\r\n        if(this.projects.length === 0){\r\n            this.projects.push(this.defaultProject);\r\n        }\r\n\r\n        this.currentProjectIndex = this.loadCurrentProjectIndexFromLocalStorage() || 0;\r\n        this.currentProject = this.projects[this.currentProjectIndex];\r\n    }\r\n\r\n    addProject(project) {\r\n        this.projects.push(project);\r\n        this.saveToLocalStorage();\r\n    }\r\n\r\n    removeProject(index) {\r\n        this.projects.splice(index, 1);\r\n        this.saveToLocalStorage();\r\n    }\r\n\r\n    setCurrentProject(index) {\r\n        this.currentProjectIndex = index;\r\n        this.saveCurrentProjectIndexToLocalStorage();\r\n        this.currentProject = this.projects[this.currentProjectIndex];\r\n    }\r\n\r\n    getCurrentProject() {\r\n        return this.currentProject;\r\n    }\r\n\r\n    saveToLocalStorage() {\r\n        localStorage.setItem('projects',JSON.stringify(this.projects));\r\n    }\r\n    loadFromLocalStorage() {\r\n        const projectsJson = localStorage.getItem('projects');\r\n        if(projectsJson){\r\n            const projectsData = JSON.parse(projectsJson);\r\n            return projectsData.map(project => {\r\n                const newProject = new _Todo_js__WEBPACK_IMPORTED_MODULE_0__.Project(project.name);\r\n                project.todos.forEach(todo => {\r\n                        newProject.addTodo(new _Todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\r\n                            todo.title,\r\n                            todo.description,\r\n                            todo.dueDate,\r\n                            todo.priority,\r\n                            todo.notes,\r\n                            todo.checklist,\r\n                            todo.completed = false\r\n                        ));                 \r\n                });\r\n                return newProject;\r\n            });\r\n        }\r\n        return null;\r\n    }\r\n\r\n    saveCurrentProjectIndexToLocalStorage() {\r\n        localStorage.setItem('currentProjectIndex',this.currentProjectIndex);\r\n    }\r\n    loadCurrentProjectIndexFromLocalStorage() {\r\n        const index = localStorage.getItem('currentProjectIndex');\r\n        return index ? parseInt(index) : 0;\r\n    }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/ProjectManager.js?",
        );

        /***/
      },

    /***/ './src/Todo.js':
      /*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\n\r\n\r\nclass Todo {\r\n    constructor(title, description, dueDate, priority, notes = '', checklist = []) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n        this.notes = notes;\r\n        this.checklist = checklist;\r\n        this.completed = false;\r\n    }\r\n\r\n    toggleComplete() {\r\n        this.completed = !this.completed;\r\n    }\r\n\r\n    addChecklistItem(item) {\r\n        this.checklist.push(item);\r\n    }\r\n\r\n    removeChecklistItem(index) {\r\n        this.checklist.splice(index, 1);\r\n    }\r\n}\r\n\r\nclass Project {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.todos = [];\r\n    }\r\n\r\n    addTodo(todo) {\r\n        this.todos.push(todo);\r\n    }\r\n\r\n    removeTodo(index) {\r\n        this.todos.splice(index, 1);\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/Todo.js?",
        );

        /***/
      },

    /***/ './src/index.js':
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo.js */ \"./src/Todo.js\");\n/* harmony import */ var _ProjectManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectManager.js */ \"./src/ProjectManager.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst projectManager = new _ProjectManager_js__WEBPACK_IMPORTED_MODULE_1__.ProjectManager();\r\n\r\nconst UI = (() => {\r\n    const projectList = document.getElementById('project-list');\r\n    const todoList = document.getElementById('todo-list');\r\n    const todoForm = document.getElementById('todo-form');\r\n\r\n    const renderProjects = () => {\r\n        projectList.innerHTML = '';\r\n        projectManager.projects.forEach((project, index) => {\r\n            const projectElement = document.createElement('div');\r\n            projectElement.style.backgroundColor = 'pink';\r\n            projectElement.style.display = 'flex';\r\n            projectElement.style.alignItems = 'center';\r\n            projectElement.style.padding = '10px';\r\n            projectElement.style.margin = '5px 0';\r\n\r\n            \r\n            const addProjectOption = document.createElement('div');\r\n            addProjectOption.style.width = '20px';\r\n            addProjectOption.style.height = '20px';\r\n            addProjectOption.style.backgroundColor = 'red';\r\n            addProjectOption.style.marginRight = '10px';\r\n            addProjectOption.style.cursor = 'pointer';\r\n            addProjectOption.textContent = '+';\r\n\r\n            \r\n            const projectNameElement = document.createElement('span');\r\n            projectNameElement.textContent = project.name;\r\n            projectNameElement.style.flexGrow = '1';\r\n            projectNameElement.style.cursor = 'pointer';\r\n\r\n            \r\n            projectNameElement.addEventListener('click', () => {\r\n                projectManager.setCurrentProject(index);\r\n                renderTodos();\r\n\r\n                const allprojectNameElements = document.querySelectorAll('span');\r\n                allprojectNameElements.forEach(name => name.classList.remove('active'));\r\n\r\n                projectNameElement.classList.add('active');\r\n            });\r\n\r\n            addProjectOption.addEventListener('click', (event) => {\r\n                event.stopPropagation();\r\n                const projectName = prompt('Enter the name of the new project:');\r\n                \r\n                if (projectName) {\r\n                    projectManager.addProject(new _Todo_js__WEBPACK_IMPORTED_MODULE_0__.Project(projectName));\r\n                    projectManager.setCurrentProject(projectManager.projects.length - 1);\r\n\r\n        \r\n                    \r\n                \r\n                    renderProjects();\r\n                    \r\n                }\r\n            });\r\n            \r\n\r\n            projectElement.appendChild(addProjectOption);\r\n            projectElement.appendChild(projectNameElement);\r\n            projectList.appendChild(projectElement);\r\n        });\r\n    };\r\n\r\n   \r\n    \r\n\r\n    const renderTodos = () => {\r\n        const currentProject = projectManager.getCurrentProject();\r\n        todoList.innerHTML = '';\r\n        currentProject.todos.forEach((todo, index) => {\r\n            const todoElement = document.createElement('div');\r\n            todoElement.textContent = `${todo.title} - ${todo.dueDate}`;\r\n            todoElement.className = `priority-${todo.priority}`;\r\n\r\n            todoElement.addEventListener('click', () => {\r\n                expandTodoDetails(todo, index);\r\n            });\r\n            todoList.appendChild(todoElement);\r\n        });\r\n    };\r\n\r\n    const expandTodoDetails = (todo, index) => {\r\n        const todoDetails = document.getElementById('todo-details');\r\n        todoDetails.innerHTML = `\r\n            <h2>${todo.title}</h2>\r\n            <p>${todo.description}</p>\r\n            <p>Due: ${todo.dueDate}</p>\r\n            <p>Priority: ${todo.priority}</p>\r\n            <p>Notes: ${todo.notes}</p>\r\n            <p>Checklist: ${todo.checklist.join(', ')}</p>\r\n            <button id=\"delete-todo\">Delete</button>\r\n             `;\r\n        document.getElementById('delete-todo').addEventListener('click', () => {\r\n            const currentProject = projectManager.getCurrentProject();\r\n            todoDetails.innerHTML = '';\r\n            currentProject.removeTodo(index);\r\n            projectManager.saveToLocalStorage();\r\n            renderTodos();\r\n        });\r\n    };\r\n\r\n    const addTodo = (todo) => {\r\n        const currentProject = projectManager.getCurrentProject();\r\n        currentProject.addTodo(todo);\r\n        projectManager.saveToLocalStorage();\r\n        renderTodos();\r\n    };\r\n\r\n\r\n    todoForm.addEventListener('submit', (event) => { \r\n        event.preventDefault();\r\n        const title = document.getElementById('title').value;\r\n        const description = document.getElementById('description').value;\r\n        const dueDate = document.getElementById('dueDate').value;\r\n        const priority = document.getElementById('priority').value;\r\n        const notes = document.getElementById('notes').value;\r\n        const checklist = document.getElementById('checklist').value.split(',');\r\n        const todo = new _Todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, dueDate, priority, notes, checklist);\r\n        addTodo(todo);\r\n        todoForm.reset();\r\n    });\r\n\r\n    return {\r\n        renderProjects,\r\n        renderTodos,\r\n    };\r\n})();\r\n\r\nUI.renderProjects();UI.renderTodos();\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?",
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__('./src/index.js');
  /******/
  /******/
})();
