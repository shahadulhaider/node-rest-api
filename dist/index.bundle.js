module.exports =
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"@babel/runtime/helpers/objectSpread\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n\nvar devConfig = {\n  MONGO_URL: 'mongodb://localhost/noderestapi-dev',\n  JWT_SECRET: 'thisisatopsecret'\n};\nvar testConfig = {\n  MONGO_URL: 'mongodb://localhost/noderestapi-test'\n};\nvar prodConfig = {\n  MONGO_URL: 'mongodb://localhost/noderestapi-prod'\n};\nvar defaultConfig = {\n  PORT: process.env.PORT || 3000\n};\n\nvar envConfig = function envConfig(env) {\n  switch (env) {\n    case 'development':\n      return devConfig;\n\n    case 'test':\n      return testConfig;\n\n    default:\n      return prodConfig;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultConfig, envConfig(\"development\")));\n\n//# sourceURL=webpack:///./src/config/constants.js?");

/***/ }),

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/config/constants.js\");\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Promise = global.Promise; // connect to mongodb\n\ntry {\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MONGO_URL, {\n    useNewUrlParser: true\n  });\n} catch (err) {\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.createConnection(_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MONGO_URL, {\n    useNewUrlParser: true,\n    useCreateIndex: true\n  });\n}\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.once('open', function () {\n  return console.log('MongoDB Running');\n}).on('error', function (e) {\n  throw e;\n});\n\n//# sourceURL=webpack:///./src/config/database.js?");

/***/ }),

/***/ "./src/config/middlewares.js":
/*!***********************************!*\
  !*** ./src/config/middlewares.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar isDev = \"development\" === 'development';\nvar isProd = \"development\" === 'production';\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  if (isProd) {\n    app.use(compression__WEBPACK_IMPORTED_MODULE_2___default()());\n    app.use(helmet__WEBPACK_IMPORTED_MODULE_3___default()());\n  }\n\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n    extended: true\n  }));\n  app.use(passport__WEBPACK_IMPORTED_MODULE_4___default.a.initialize());\n\n  if (isDev) {\n    app.use(morgan__WEBPACK_IMPORTED_MODULE_0___default()('dev'));\n  }\n});\n\n//# sourceURL=webpack:///./src/config/middlewares.js?");

/***/ }),

/***/ "./src/controllers/post.js":
/*!*********************************!*\
  !*** ./src/controllers/post.js ***!
  \*********************************/
/*! exports provided: createPost, getPostById, getPostsList, updatePost, deletePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPost\", function() { return createPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostById\", function() { return getPostById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostsList\", function() { return getPostsList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updatePost\", function() { return updatePost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deletePost\", function() { return deletePost; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/post */ \"./src/models/post.js\");\n\n\n\n\nfunction createPost(_x, _x2) {\n  return _createPost.apply(this, arguments);\n}\n\nfunction _createPost() {\n  _createPost = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {\n    var post;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _models_post__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createPost(req.body, req.user._id);\n\n          case 3:\n            post = _context.sent;\n            return _context.abrupt(\"return\", res.status(http_status__WEBPACK_IMPORTED_MODULE_2___default.a.CREATED).json(post));\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", res.status(http_status__WEBPACK_IMPORTED_MODULE_2___default.a.BAD_REQUEST).json(_context.t0));\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this, [[0, 7]]);\n  }));\n  return _createPost.apply(this, arguments);\n}\n\nfunction getPostById(_x3, _x4) {\n  return _getPostById.apply(this, arguments);\n}\n\nfunction _getPostById() {\n  _getPostById = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req, res) {\n    var post;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return _models_post__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(req.params.id).populate('user');\n\n          case 3:\n            post = _context2.sent;\n            return _context2.abrupt(\"return\", res.status(http_status__WEBPACK_IMPORTED_MODULE_2___default.a.OK).json(post));\n\n          case 7:\n            _context2.prev = 7;\n            _context2.t0 = _context2[\"catch\"](0);\n            return _context2.abrupt(\"return\", res.status(http_status__WEBPACK_IMPORTED_MODULE_2___default.a.BAD_REQUEST).json(_context2.t0));\n\n          case 10:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this, [[0, 7]]);\n  }));\n  return _getPostById.apply(this, arguments);\n}\n\nfunction getPostsList(_x5, _x6) {\n  return _getPostsList.apply(this, arguments);\n}\n\nfunction _getPostsList() {\n  _getPostsList = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(req, res) {\n    var limit, skip, posts;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            limit = parseInt(req.query.limit, 0);\n            skip = parseInt(req.query.skip, 0);\n            _context3.prev = 2;\n            _context3.next = 5;\n            return _models_post__WEBPACK_IMPORTED_MODULE_3__[\"default\"].list({\n              limit: limit,\n              skip: skip\n            });\n\n          case 5:\n            posts = _context3.sent;\n            return _context3.abrupt(\"return\", res.status(http_status__WEBPACK_IMPORTED_MODULE_2___default.a.OK).json(posts));\n\n          case 9:\n            _context3.prev = 9;\n            _context3.t0 = _context3[\"catch\"](2);\n            return _context3.abrupt(\"return\", res.status(http_status__WEBPACK_IMPORTED_MODULE_2___default.a.BAD_REQUEST).json(_context3.t0));\n\n          case 12:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, this, [[2, 9]]);\n  }));\n  return _getPostsList.apply(this, arguments);\n}\n\nfunction updatePost(_x7, _x8) {\n  return _updatePost.apply(this, arguments);\n}\n\nfunction _updatePost() {\n  _updatePost = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(req, res) {\n    var post;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.prev = 0;\n            _context4.next = 3;\n            return _models_post__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(req.params.id);\n\n          case 3:\n            post = _context4.sent;\n\n            if (post.user.equals(req.user._id)) {\n              _context4.next = 6;\n              break;\n            }\n\n            return _context4.abrupt(\"return\", res.sendStatus(http_status__WEBPACK_IMPORTED_MODULE_2___default.a.UNAUTHORIZED));\n\n          case 6:\n            Object.keys(req.body).forEach(function (key) {\n              post[key] = req.body[key];\n            });\n            _context4.t0 = res.status(http_status__WEBPACK_IMPORTED_MODULE_2___default.a.OK);\n            _context4.next = 10;\n            return post.save();\n\n          case 10:\n            _context4.t1 = _context4.sent;\n            return _context4.abrupt(\"return\", _context4.t0.json.call(_context4.t0, _context4.t1));\n\n          case 14:\n            _context4.prev = 14;\n            _context4.t2 = _context4[\"catch\"](0);\n            return _context4.abrupt(\"return\", res.status(http_status__WEBPACK_IMPORTED_MODULE_2___default.a.BAD_REQUEST).json(_context4.t2));\n\n          case 17:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, this, [[0, 14]]);\n  }));\n  return _updatePost.apply(this, arguments);\n}\n\nfunction deletePost(_x9, _x10) {\n  return _deletePost.apply(this, arguments);\n}\n\nfunction _deletePost() {\n  _deletePost = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(req, res) {\n    var post;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.prev = 0;\n            _context5.next = 3;\n            return _models_post__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(req.params.id);\n\n          case 3:\n            post = _context5.sent;\n\n            if (post.user.equals(req.user._id)) {\n              _context5.next = 6;\n              break;\n            }\n\n            return _context5.abrupt(\"return\", res.sendStatus(http_status__WEBPACK_IMPORTED_MODULE_2___default.a.UNAUTHORIZED));\n\n          case 6:\n            _context5.next = 8;\n            return post.remove();\n\n          case 8:\n            return _context5.abrupt(\"return\", res.sendStatus(http_status__WEBPACK_IMPORTED_MODULE_2___default.a.OK));\n\n          case 11:\n            _context5.prev = 11;\n            _context5.t0 = _context5[\"catch\"](0);\n            return _context5.abrupt(\"return\", res.status(http_status__WEBPACK_IMPORTED_MODULE_2___default.a.BAD_REQUEST).json(_context5.t0));\n\n          case 14:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5, this, [[0, 11]]);\n  }));\n  return _deletePost.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./src/controllers/post.js?");

/***/ }),

/***/ "./src/controllers/user.js":
/*!*********************************!*\
  !*** ./src/controllers/user.js ***!
  \*********************************/
/*! exports provided: signUp, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signUp\", function() { return signUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ \"./src/models/user.js\");\n\n\n\n\nfunction signUp(_x, _x2) {\n  return _signUp.apply(this, arguments);\n}\n\nfunction _signUp() {\n  _signUp = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {\n    var user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _models_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create(req.body);\n\n          case 3:\n            user = _context.sent;\n            return _context.abrupt(\"return\", res.status(http_status__WEBPACK_IMPORTED_MODULE_2___default.a.CREATED).json(user.toAuthJSON()));\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", res.status(http_status__WEBPACK_IMPORTED_MODULE_2___default.a.BAD_REQUEST).json(_context.t0));\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this, [[0, 7]]);\n  }));\n  return _signUp.apply(this, arguments);\n}\n\nfunction login(req, res, next) {\n  res.status(http_status__WEBPACK_IMPORTED_MODULE_2___default.a.OK).json(req.user.toAuthJSON());\n  return next();\n}\n\n//# sourceURL=webpack:///./src/controllers/user.js?");

/***/ }),

/***/ "./src/helpers/post.validation.js":
/*!****************************************!*\
  !*** ./src/helpers/post.validation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  createPost: {\n    body: {\n      title: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().min(3).required(),\n      text: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().min(25).required()\n    }\n  },\n  updatePost: {\n    body: {\n      title: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().min(3),\n      text: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().min(25)\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/helpers/post.validation.js?");

/***/ }),

/***/ "./src/helpers/user.validation.js":
/*!****************************************!*\
  !*** ./src/helpers/user.validation.js ***!
  \****************************************/
/*! exports provided: passwordReg, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"passwordReg\", function() { return passwordReg; });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n\nvar passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  signup: {\n    email: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().email().required(),\n    password: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().regex(passwordReg).required(),\n    firstName: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n    lastName: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n    username: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required()\n  }\n});\n\n//# sourceURL=webpack:///./src/helpers/user.validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/constants */ \"./src/config/constants.js\");\n/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/database */ \"./src/config/database.js\");\n/* harmony import */ var _config_middlewares__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/middlewares */ \"./src/config/middlewares.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nObject(_config_middlewares__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(app);\nObject(_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(app);\napp.get('/', function (req, res) {\n  res.send('Hello world!');\n});\napp.listen(_config_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PORT, function (err) {\n  if (err) {\n    throw err;\n  } else {\n    console.log(\"\\n      Server running on port: \".concat(_config_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PORT, \"\\n      ------\\n      Running on \").concat(\"development\", \"\\n      ------\\n      Make something great\\n    \"));\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/post.js":
/*!****************************!*\
  !*** ./src/models/post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"@babel/runtime/helpers/objectSpread\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slug */ \"slug\");\n/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slug__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\");\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar PostSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1__[\"Schema\"]({\n  title: {\n    type: String,\n    trim: true,\n    required: [true, ' Title is required!'],\n    minlength: [3, 'Title need to be longer!'],\n    unique: true\n  },\n  text: {\n    type: String,\n    trim: true,\n    required: [true, 'Text is required!'],\n    minlength: [25, 'Text need to be longer!']\n  },\n  slug: {\n    type: String,\n    trim: true,\n    lowercase: true\n  },\n  user: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_1__[\"Schema\"].Types.ObjectId,\n    ref: 'User'\n  },\n  favoriteCount: {\n    type: Number,\n    default: 0\n  }\n}, {\n  timestamps: true\n});\nPostSchema.plugin(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_3___default.a, {\n  message: '{VALUE} already taken!'\n});\nPostSchema.pre('validate', function (next) {\n  this._slugify();\n\n  next();\n});\nPostSchema.methods = {\n  _slugify: function _slugify() {\n    this.slug = slug__WEBPACK_IMPORTED_MODULE_2___default()(this.title);\n  },\n  toJSON: function toJSON() {\n    return {\n      _id: this._id,\n      title: this.title,\n      text: this.text,\n      createdAt: this.createdAt,\n      user: this.user,\n      slug: this.slug,\n      favouriteCount: this.favoriteCount\n    };\n  }\n};\nPostSchema.statics = {\n  createPost: function createPost(args, user) {\n    return this.create(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, args, {\n      user: user\n    }));\n  },\n  list: function list() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        _ref$skip = _ref.skip,\n        skip = _ref$skip === void 0 ? 0 : _ref$skip,\n        _ref$limit = _ref.limit,\n        limit = _ref$limit === void 0 ? 5 : _ref$limit;\n\n    return this.find().sort({\n      createdAt: -1\n    }).skip(skip).limit(limit).populate('user');\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.model('Post', PostSchema));\n\n//# sourceURL=webpack:///./src/models/post.js?");

/***/ }),

/***/ "./src/models/user.js":
/*!****************************!*\
  !*** ./src/models/user.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\");\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _helpers_user_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/user.validation */ \"./src/helpers/user.validation.js\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\n\n\n\n\n\n\nvar UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  email: {\n    type: String,\n    unique: true,\n    required: [true, 'Email is required!'],\n    trim: true,\n    validate: {\n      validator: function validator(email) {\n        return validator__WEBPACK_IMPORTED_MODULE_1___default.a.isEmail(email);\n      },\n      message: '{VALUE} is not a valid email'\n    }\n  },\n  userName: {\n    type: String,\n    required: [true, 'UserName is required!'],\n    trim: true,\n    unique: true\n  },\n  firstName: {\n    type: String,\n    required: [true, 'First Name is required!'],\n    trim: true\n  },\n  lastName: {\n    type: String,\n    required: [true, 'Last Name is required!'],\n    trim: true\n  },\n  password: {\n    type: String,\n    required: [true, 'Password is required!'],\n    trim: true,\n    minlength: [6, 'Password should be longer!'],\n    validate: {\n      validator: function validator(password) {\n        return _helpers_user_validation__WEBPACK_IMPORTED_MODULE_5__[\"passwordReg\"].test(password);\n      },\n      message: '{VALUE} is not a valid password!'\n    }\n  }\n}, {\n  timestamps: true\n});\nUserSchema.plugin(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_4___default.a, {\n  message: '{VALUE} already taken!'\n});\nUserSchema.pre('save', function (next) {\n  if (this.isModified('password')) {\n    this.password = this._hashPassword(this.password);\n  }\n\n  return next();\n});\nUserSchema.methods = {\n  _hashPassword: function _hashPassword(password) {\n    return Object(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_2__[\"hashSync\"])(password);\n  },\n  authenticateUser: function authenticateUser(password) {\n    return Object(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_2__[\"compareSync\"])(password, this.password);\n  },\n  createToken: function createToken() {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.sign({\n      _id: this._id\n    }, _config_constants__WEBPACK_IMPORTED_MODULE_6__[\"default\"].JWT_SECRET);\n  },\n  toAuthJSON: function toAuthJSON() {\n    return {\n      _id: this._id,\n      userName: this.userName,\n      token: \"JWT \".concat(this.createToken())\n    };\n  },\n  toJSON: function toJSON() {\n    return {\n      _id: this._id,\n      userName: this.userName\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchema));\n\n//# sourceURL=webpack:///./src/models/user.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/routes/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ \"./src/routes/post.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  app.use('/api/users', _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  app.use('/api/posts', _post__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n});\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/post.js":
/*!****************************!*\
  !*** ./src/routes/post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_validation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/post */ \"./src/controllers/post.js\");\n/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth */ \"./src/services/auth.js\");\n/* harmony import */ var _helpers_post_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/post.validation */ \"./src/helpers/post.validation.js\");\n\n\n\n\n\nvar routes = new express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nroutes.post('/', _services_auth__WEBPACK_IMPORTED_MODULE_3__[\"authJwt\"], express_validation__WEBPACK_IMPORTED_MODULE_1___default()(_helpers_post_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"].createPost), _controllers_post__WEBPACK_IMPORTED_MODULE_2__[\"createPost\"]);\nroutes.get('/:id', _controllers_post__WEBPACK_IMPORTED_MODULE_2__[\"getPostById\"]);\nroutes.get('/', _controllers_post__WEBPACK_IMPORTED_MODULE_2__[\"getPostsList\"]);\nroutes.patch('/:id', _services_auth__WEBPACK_IMPORTED_MODULE_3__[\"authJwt\"], express_validation__WEBPACK_IMPORTED_MODULE_1___default()(_helpers_post_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"].updatePost), _controllers_post__WEBPACK_IMPORTED_MODULE_2__[\"updatePost\"]);\nroutes.delete('/:id', _services_auth__WEBPACK_IMPORTED_MODULE_3__[\"authJwt\"], _controllers_post__WEBPACK_IMPORTED_MODULE_2__[\"deletePost\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/routes/post.js?");

/***/ }),

/***/ "./src/routes/user.js":
/*!****************************!*\
  !*** ./src/routes/user.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_validation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/user */ \"./src/controllers/user.js\");\n/* harmony import */ var _helpers_user_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/user.validation */ \"./src/helpers/user.validation.js\");\n/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth */ \"./src/services/auth.js\");\n\n\n\n\n\nvar routes = new express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nroutes.post('/signup', express_validation__WEBPACK_IMPORTED_MODULE_1___default()(_helpers_user_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"].signup), _controllers_user__WEBPACK_IMPORTED_MODULE_2__[\"signUp\"]);\nroutes.post('/login', _services_auth__WEBPACK_IMPORTED_MODULE_4__[\"authLocal\"], _controllers_user__WEBPACK_IMPORTED_MODULE_2__[\"login\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/routes/user.js?");

/***/ }),

/***/ "./src/services/auth.js":
/*!******************************!*\
  !*** ./src/services/auth.js ***!
  \******************************/
/*! exports provided: authLocal, authJwt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authLocal\", function() { return authLocal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authJwt\", function() { return authJwt; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/user */ \"./src/models/user.js\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\n\n\n\n\n\n\npassport__WEBPACK_IMPORTED_MODULE_2___default.a.use(new passport_local__WEBPACK_IMPORTED_MODULE_3___default.a({\n  usernameField: 'email'\n},\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(email, password, done) {\n    var user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _models_user__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n              email: email\n            });\n\n          case 3:\n            user = _context.sent;\n\n            if (user) {\n              _context.next = 8;\n              break;\n            }\n\n            return _context.abrupt(\"return\", done(null, false));\n\n          case 8:\n            if (user.authenticateUser(password)) {\n              _context.next = 10;\n              break;\n            }\n\n            return _context.abrupt(\"return\", done(null, false));\n\n          case 10:\n            return _context.abrupt(\"return\", done(null, user));\n\n          case 13:\n            _context.prev = 13;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", done(_context.t0, false));\n\n          case 16:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this, [[0, 13]]);\n  }));\n\n  return function (_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}()));\npassport__WEBPACK_IMPORTED_MODULE_2___default.a.use(new passport_jwt__WEBPACK_IMPORTED_MODULE_4__[\"Strategy\"]({\n  jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_4__[\"ExtractJwt\"].fromAuthHeaderWithScheme('JWT'),\n  secretOrKey: _config_constants__WEBPACK_IMPORTED_MODULE_6__[\"default\"].JWT_SECRET\n},\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(payload, done) {\n    var user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return _models_user__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findById(payload._id);\n\n          case 3:\n            user = _context2.sent;\n\n            if (user) {\n              _context2.next = 6;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", done(null, false));\n\n          case 6:\n            return _context2.abrupt(\"return\", done(null, user));\n\n          case 9:\n            _context2.prev = 9;\n            _context2.t0 = _context2[\"catch\"](0);\n            return _context2.abrupt(\"return\", done(_context2.t0, false));\n\n          case 12:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this, [[0, 9]]);\n  }));\n\n  return function (_x4, _x5) {\n    return _ref2.apply(this, arguments);\n  };\n}()));\nvar authLocal = passport__WEBPACK_IMPORTED_MODULE_2___default.a.authenticate('local', {\n  session: false\n});\nvar authJwt = passport__WEBPACK_IMPORTED_MODULE_2___default.a.authenticate('jwt', {\n  session: false\n});\n\n//# sourceURL=webpack:///./src/services/auth.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/objectSpread":
/*!******************************************************!*\
  !*** external "@babel/runtime/helpers/objectSpread" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/objectSpread\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/objectSpread%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt-nodejs\");\n\n//# sourceURL=webpack:///external_%22bcrypt-nodejs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validation":
/*!*************************************!*\
  !*** external "express-validation" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validation\");\n\n//# sourceURL=webpack:///external_%22express-validation%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-status\");\n\n//# sourceURL=webpack:///external_%22http-status%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "mongoose-unique-validator":
/*!********************************************!*\
  !*** external "mongoose-unique-validator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose-unique-validator\");\n\n//# sourceURL=webpack:///external_%22mongoose-unique-validator%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "slug":
/*!***********************!*\
  !*** external "slug" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"slug\");\n\n//# sourceURL=webpack:///external_%22slug%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ })

/******/ });