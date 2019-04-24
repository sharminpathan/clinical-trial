(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("restaf-server", [], factory);
	else if(typeof exports === 'object')
		exports["restaf-server"] = factory();
	else
		root["restaf-server"] = factory();
})(global, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./SASauth.js":
/*!********************!*\
  !*** ./SASauth.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n *  ------------------------------------------------------------------------------------\n *  * Copyright (c) SAS Institute Inc.\n *  *  Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  * http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  *  Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  limitations under the License.\n * ----------------------------------------------------------------------------------------\n *\n */\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar bell = __webpack_require__(/*! bell */ \"bell\"),\n    debug = __webpack_require__(/*! debug */ \"debug\")('auth'),\n    qs = __webpack_require__(/*! qs */ \"qs\"),\n    uuid = __webpack_require__(/*! uuid */ \"uuid\"),\n    cookie = __webpack_require__(/*! hapi-auth-cookie */ \"hapi-auth-cookie\");\n\nfunction SASauth(_x) {\n  return _SASauth.apply(this, arguments);\n}\n\nfunction _SASauth() {\n  _SASauth = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(hapiServer) {\n    var authCookieOptions, bellAuthOptions, provider, authURL;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            //TBD: do we need keepalive?\n            authCookieOptions = {\n              password: uuid.v4(),\n              cookie: 'authCookie',\n              domain: process.env.APPHOST,\n              isSecure: false,\n              isSameSite: process.env.SAMESITE != null ? process.env.SAMESITE : 'Strict',\n              validateFunc: function () {\n                var _validateFunc = _asyncToGenerator(\n                /*#__PURE__*/\n                regeneratorRuntime.mark(function _callee(req, session) {\n                  var credentials;\n                  return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          debugger;\n\n                          if (!(process.env.PROXYSERVER === 'YES')) {\n                            _context.next = 8;\n                            break;\n                          }\n\n                          _context.next = 4;\n                          return req.server.app.cache.get(session.sid);\n\n                        case 4:\n                          credentials = _context.sent;\n                          return _context.abrupt(\"return\", {\n                            valid: true,\n                            credentials: credentials\n                          });\n\n                        case 8:\n                          debugger;\n                          return _context.abrupt(\"return\", {\n                            valid: true,\n                            credentials: req.auth.credentials\n                          });\n\n                        case 10:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee, this);\n                }));\n\n                return function validateFunc(_x2, _x3) {\n                  return _validateFunc.apply(this, arguments);\n                };\n              }()\n            };\n\n            if (!(process.env.OAUTH2 === 'YES')) {\n              _context2.next = 13;\n              break;\n            }\n\n            authURL = process.env.VIYA_SERVER;\n            provider = {\n              name: 'sas',\n              protocol: 'oauth2',\n              useParamsAuth: false,\n              auth: authURL + '/SASLogon/oauth/authorize',\n              token: authURL + '/SASLogon/oauth/token'\n            };\n            bellAuthOptions = {\n              provider: provider,\n              password: uuid.v4(),\n              clientId: process.env.CLIENTID,\n              clientSecret: process.env.CLIENTSECRET == null ? ' ' : process.env.CLIENTSECRET,\n              isSecure: false\n            };\n\n            if (process.env.BELL_LOCATION != null) {\n              bellAuthOptions.location = process.env.BELL_LOCATION;\n            }\n\n            _context2.next = 8;\n            return hapiServer.register(bell);\n\n          case 8:\n            _context2.next = 10;\n            return hapiServer.register(cookie);\n\n          case 10:\n            hapiServer.auth.strategy('sas', 'bell', bellAuthOptions);\n            hapiServer.auth.strategy('session', 'cookie', authCookieOptions);\n            hapiServer.auth.default('session');\n\n          case 13:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this);\n  }));\n  return _SASauth.apply(this, arguments);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SASauth);\n\n//# sourceURL=webpack://restaf-server/./SASauth.js?");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n *  ------------------------------------------------------------------------------------\n *  * Copyright (c) SAS Institute Inc.\n *  *  Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  * http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  *  Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  limitations under the License.\n * ----------------------------------------------------------------------------------------\n *\n */\n\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nfunction config(appEnv) {\n  if (appEnv !== null) {\n    iconfig(appEnv);\n  }\n\n  process.env.SAS_PROTOCOL = process.env.SAS_SSL_ENABLED === 'YES' ? 'https://' : 'http://'; // fixing usual user error of adding a space after the url\n\n  if (process.env.VIYA_SERVER != null) {\n    var t = process.env.VIYA_SERVER.split(' ');\n    process.env.VIYA_SERVER = t[0];\n\n    if (process.env.VIYA_SERVER.indexOf('http') < 0) {\n      process.env.VIYA_SERVER = process.env.SAS_PROTOCOL + process.env.VIYA_SERVER;\n    }\n  }\n}\n\n;\n\nfunction iconfig(appEnv) {\n  try {\n    var data = fs.readFileSync(appEnv, 'utf8');\n    var d = data.split(/\\r?\\n/);\n    console.log('Configuration specified via raf.env');\n    d.forEach(function (l) {\n      if (l.length > 0 && l.indexOf('#') === -1) {\n        var la = l.split('=');\n        var envName = la[0];\n\n        if (la.length > 0) {\n          if (la[1] === '') {\n            delete process.env[envName];\n          } else {\n            process.env[envName] = la[1];\n          }\n\n          console.log(\"\".concat(envName, \"=\").concat(la[1]));\n        }\n      }\n    });\n  } catch (err) {\n    console.log(err);\n    process.exit(0);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack://restaf-server/./config.js?");

/***/ }),

/***/ "./iService.js":
/*!*********************!*\
  !*** ./iService.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ \"./server.js\");\n/*\n *  ------------------------------------------------------------------------------------\n *  * Copyright (c) SAS Institute Inc.\n *  *  Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  * http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  *  Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  limitations under the License.\n * ----------------------------------------------------------------------------------------\n *\n */\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar debug = __webpack_require__(/*! debug */ \"debug\");\n\nvar debugProxy = debug('proxy');\nvar proxyLogger = debug('proxylogger');\nvar responseLogger = debug('response');\n\n\nvar boom = __webpack_require__(/*! boom */ \"boom\");\n\nvar request = __webpack_require__(/*! request */ \"request\");\n/* require( 'request-debug' )( request ); */\n\n\nvar os = __webpack_require__(/*! os */ \"os\");\n\nvar uuid = __webpack_require__(/*! uuid */ \"uuid\");\n\nfunction iService(uTable, useDefault, asset, rootHandler) {\n  debugger;\n  process.env.APPHOST = process.env.APPHOST === '*' ? os.hostname() : process.env.APPHOST;\n  var appName = '/' + process.env.APPNAME;\n  var auth1 = {};\n  var auth2 = false;\n  var handleOthers;\n  var defaultMaxBytes = 10485760;\n  var maxBytes;\n\n  if (isNaN(process.env.PAYLOADMAXBYTES)) {\n    maxBytes = defaultMaxBytes;\n  } else {\n    maxBytes = Number(process.env.PAYLOADMAXBYTES);\n  }\n\n  if (process.env.PROXYSERVER === 'YES') {\n    process.env.OAUTH2 = 'YES';\n  }\n\n  console.log(\"appName \".concat(appName));\n  console.log(\"asset \".concat(asset, \" \"));\n  console.log(\"uTable \".concat(uTable));\n\n  if (process.env.OAUTH2 === 'YES') {\n    auth1 = {\n      mode: 'required',\n      strategy: 'sas'\n    };\n  } else {\n    auth1 = false;\n  }\n\n  var defaultTable = [{\n    method: ['GET'],\n    path: \"\".concat(appName),\n    config: {\n      auth: auth1,\n      handler: getApp\n    }\n  }, {\n    method: ['GET'],\n    path: \"\".concat(appName, \"/{param*}\"),\n    config: {\n      auth: auth2,\n      handler: getApp2\n    }\n  }, {\n    method: ['GET'],\n    path: \"\".concat(appName, \"/callback\").concat(appName),\n    config: {\n      handler: AppCallback\n    }\n  }, {\n    method: ['GET'],\n    path: \"/shared/{param*}\",\n    config: {\n      auth: false,\n      handler: getShared\n    }\n  }, {\n    method: ['GET'],\n    path: \"/restafServerInfo\",\n    config: {\n      auth: false,\n      handler: serverInfo\n    }\n  }, {\n    method: ['GET'],\n    path: '/favicon.ico',\n    config: {\n      auth: false,\n      handler: getIcon\n    }\n  }, {\n    method: ['GET'],\n    path: '/testserver',\n    config: {\n      handler: testServer\n    }\n  }]; // Tried payload.parse = false -- way too much code to handle payload\n\n  if (process.env.PROXYSERVER === 'YES') {\n    var _handleOthers = [{\n      method: ['PUT', 'POST', 'PATCH'],\n      path: '/{params*}',\n      config: {\n        payload: {\n          maxBytes: maxBytes\n        },\n        handler: handleProxy\n      }\n    }, {\n      method: ['GET'],\n      path: '/{params*}',\n      config: {\n        handler: handleProxy\n      }\n    }];\n    defaultTable = _toConsumableArray(defaultTable).concat(_handleOthers);\n  } else {\n    var _handleOthers2 = {\n      method: ['GET'],\n      path: '/{param*}',\n      config: {\n        auth: false,\n        handler: getApp2\n      }\n    };\n    defaultTable = _toConsumableArray(defaultTable).concat([_handleOthers2]);\n  }\n\n  var userRouterTable;\n\n  if (uTable !== null) {\n    if (useDefault === true) {\n      userRouterTable = _toConsumableArray(defaultTable).concat(_toConsumableArray(uTable));\n    } else {\n      userRouterTable = _toConsumableArray(uTable);\n    }\n  } else {\n    userRouterTable = _toConsumableArray(defaultTable);\n  }\n\n  console.log(JSON.stringify(userRouterTable, null, 4));\n  Object(_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(userRouterTable, asset);\n}\n\n; //\n// Had to add cache to handle Edge browser - must be a way not to have to do this.\n//\n\nfunction testServer(_x, _x2) {\n  return _testServer.apply(this, arguments);\n}\n\nfunction _testServer() {\n  _testServer = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, h) {\n    var token, url;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            url = 'testserver.html';\n            console.log(req.auth.credentials);\n            return _context.abrupt(\"return\", h.file(url));\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n  return _testServer.apply(this, arguments);\n}\n\nfunction getApp(_x3, _x4) {\n  return _getApp.apply(this, arguments);\n}\n\nfunction _getApp() {\n  _getApp = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, h) {\n    var indexHTML;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            debugger;\n\n            if (!(process.env.OAUTH2 === 'YES')) {\n              _context2.next = 5;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", getAuthApp(null, req, h));\n\n          case 5:\n            indexHTML = process.env.APPENTRY == null ? 'index.html' : process.env.APPENTRY;\n            return _context2.abrupt(\"return\", h.file(indexHTML));\n\n          case 7:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this);\n  }));\n  return _getApp.apply(this, arguments);\n}\n\nfunction getAuthApp(_x5, _x6, _x7) {\n  return _getAuthApp.apply(this, arguments);\n}\n\nfunction _getAuthApp() {\n  _getAuthApp = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee3(rootHandler, req, h) {\n    var sid, indexHTML;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            sid = uuid.v4();\n            debugger;\n            _context3.next = 4;\n            return req.server.app.cache.set(sid, req.auth.credentials);\n\n          case 4:\n            if (process.env.PROXYSERVER === 'YES') {\n              req.cookieAuth.set({\n                sid: sid\n              });\n            }\n\n            debugger;\n            indexHTML = process.env.APPENTRY == null ? 'index.html' : process.env.APPENTRY;\n            return _context3.abrupt(\"return\", h.file(\"\".concat(indexHTML)));\n\n          case 8:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, this);\n  }));\n  return _getAuthApp.apply(this, arguments);\n}\n\nfunction handleProxy(_x8, _x9) {\n  return _handleProxy.apply(this, arguments);\n}\n\nfunction _handleProxy() {\n  _handleProxy = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee4(req, h) {\n    var token, proxyResponse, response, hkey;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.prev = 0;\n            _context4.next = 3;\n            return getToken(req, h);\n\n          case 3:\n            token = _context4.sent;\n            _context4.next = 6;\n            return handleProxyRequest(req, h, token);\n\n          case 6:\n            proxyResponse = _context4.sent;\n            response = h.response(proxyResponse.body);\n\n            for (hkey in proxyResponse.headers) {\n              response.header(hkey, proxyResponse.headers[hkey]);\n            }\n\n            return _context4.abrupt(\"return\", response);\n\n          case 12:\n            _context4.prev = 12;\n            _context4.t0 = _context4[\"catch\"](0);\n            return _context4.abrupt(\"return\", boom.unauthorized(_context4.t0));\n\n          case 15:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, this, [[0, 12]]);\n  }));\n  return _handleProxy.apply(this, arguments);\n}\n\nfunction getToken(_x10, _x11) {\n  return _getToken.apply(this, arguments);\n}\n\nfunction _getToken() {\n  _getToken = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee5(req, h) {\n    var sid;\n    return regeneratorRuntime.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            debugger;\n\n            if (!(req.auth.credentials !== null)) {\n              _context5.next = 5;\n              break;\n            }\n\n            return _context5.abrupt(\"return\", req.auth.credentials.token);\n\n          case 5:\n            _context5.next = 7;\n            return req.server.app.cache.get(sid);\n\n          case 7:\n            sid = _context5.sent;\n            return _context5.abrupt(\"return\", sid.credentials);\n\n          case 9:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5, this);\n  }));\n  return _getToken.apply(this, arguments);\n}\n\nfunction handleProxyRequest(req, h, token) {\n  return new Promise(function (resolve, reject) {\n    // let uri = `${process.env.SAS_PROTOCOL}${process.env.VIYA_SERVER}/${req.params.params}`;\n    var uri = \"\".concat(process.env.VIYA_SERVER, \"/\").concat(req.params.params);\n\n    var headers = _objectSpread({}, req.headers);\n\n    delete headers.host;\n    delete headers['user-agent'];\n    delete headers.origin;\n    delete headers.referer;\n    delete headers.connection;\n\n    if (headers.cookie) {\n      delete headers.cookie;\n    }\n\n    var config = {\n      url: uri,\n      method: req.method,\n      headers: headers,\n      gzip: true,\n      auth: {\n        bearer: token\n      }\n    };\n\n    if (req.payload != null) {\n      // debugProxy(headers['content-type']);\n      if (headers['content-type'] === 'application/octet-stream') {\n        config.body = req.payload;\n      } else {\n        config.body = _typeof(req.payload) === 'object' ? JSON.stringify(req.payload) : req.payload;\n      }\n    }\n\n    if (req.query !== null && Object.keys(req.query).length > 0) {\n      config.qs = req.query;\n    }\n\n    debugProxy(JSON.stringify(config, null, 4));\n    proxyLogger(config.url);\n    request(config, function (err, response, body) {\n      if (err) {\n        reject(err);\n      } else {\n        responseLogger({\n          url: \"------------------------------------------\".concat(config.url)\n        });\n        responseLogger(req.query);\n        responseLogger(typeof body === 'string' ? {\n          body: body\n        } : body);\n\n        if (response.headers.hasOwnProperty('content-encoding')) {\n          delete response.headers['content-encoding'];\n        }\n\n        responseLogger(response.headers['content-coding']);\n        resolve({\n          headers: response.headers,\n          body: body\n        });\n      }\n    });\n  });\n}\n\nfunction AppCallback(_x12, _x13) {\n  return _AppCallback.apply(this, arguments);\n} //\n// get app server files\n//\n\n\nfunction _AppCallback() {\n  _AppCallback = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee6(req, h) {\n    var indexHTML;\n    return regeneratorRuntime.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            proxyLogger('In callback');\n            indexHTML = process.env.APPENTRY == null ? 'index.html' : process.env.APPENTRY;\n            return _context6.abrupt(\"return\", h.file(\"\".concat(indexHTML)));\n\n          case 3:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6, this);\n  }));\n  return _AppCallback.apply(this, arguments);\n}\n\nfunction getIcon(_x14, _x15) {\n  return _getIcon.apply(this, arguments);\n}\n\nfunction _getIcon() {\n  _getIcon = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee7(req, h) {\n    return regeneratorRuntime.wrap(function _callee7$(_context7) {\n      while (1) {\n        switch (_context7.prev = _context7.next) {\n          case 0:\n            return _context7.abrupt(\"return\", h.file('favicon.ico'));\n\n          case 1:\n          case \"end\":\n            return _context7.stop();\n        }\n      }\n    }, _callee7, this);\n  }));\n  return _getIcon.apply(this, arguments);\n}\n\nfunction getApp2(_x16, _x17) {\n  return _getApp2.apply(this, arguments);\n}\n\nfunction _getApp2() {\n  _getApp2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee8(req, h) {\n    return regeneratorRuntime.wrap(function _callee8$(_context8) {\n      while (1) {\n        switch (_context8.prev = _context8.next) {\n          case 0:\n            return _context8.abrupt(\"return\", h.file(req.params.param));\n\n          case 1:\n          case \"end\":\n            return _context8.stop();\n        }\n      }\n    }, _callee8, this);\n  }));\n  return _getApp2.apply(this, arguments);\n}\n\nfunction getShared(_x18, _x19) {\n  return _getShared.apply(this, arguments);\n}\n\nfunction _getShared() {\n  _getShared = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee9(req, h) {\n    return regeneratorRuntime.wrap(function _callee9$(_context9) {\n      while (1) {\n        switch (_context9.prev = _context9.next) {\n          case 0:\n            return _context9.abrupt(\"return\", h.file(\"shared/\".concat(req.params.param)));\n\n          case 1:\n          case \"end\":\n            return _context9.stop();\n        }\n      }\n    }, _callee9, this);\n  }));\n  return _getShared.apply(this, arguments);\n}\n\nfunction serverInfo(_x20, _x21) {\n  return _serverInfo.apply(this, arguments);\n}\n\nfunction _serverInfo() {\n  _serverInfo = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee10(req, h) {\n    var js, _js;\n\n    return regeneratorRuntime.wrap(function _callee10$(_context10) {\n      while (1) {\n        switch (_context10.prev = _context10.next) {\n          case 0:\n            js = \"let VIYA_SERVER=null;\";\n\n            if (process.env.EXPOSEHOST === 'YES') {\n              _js = \"let VIYA_SERVER  = \\\"\".concat(process.env.VIYA_SERVER, \"\\\";\");\n            }\n\n            return _context10.abrupt(\"return\", js);\n\n          case 3:\n          case \"end\":\n            return _context10.stop();\n        }\n      }\n    }, _callee10, this);\n  }));\n  return _serverInfo.apply(this, arguments);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (iService);\n\n//# sourceURL=webpack://restaf-server/./iService.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: service, UIapp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"service\", function() { return service; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UIapp\", function() { return UIapp; });\n/* harmony import */ var _iService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iService */ \"./iService.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./config.js\");\n/*\n *  ------------------------------------------------------------------------------------\n *  * Copyright (c) SAS Institute Inc.\n *  *  Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  * http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  *  Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  limitations under the License.\n * ----------------------------------------------------------------------------------------\n *\n */\n\n\nvar path = __webpack_require__(/*! path */ \"path\");\n/*\nlet iService = require('./iService');\nlet config   = require('./config');\n*/\n\n\n\n\n\nfunction UIapp(uTable, rootHandler, rafEnv) {\n  debugger;\n  console.log(_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  var asset = setup(rafEnv);\n  Object(_iService__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uTable, uTable !== null, asset, rootHandler);\n}\n\nfunction service(uTable, rootHandler, rafEnv) {\n  var asset = setup(rafEnv);\n  Object(_iService__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uTable, false, asset, rootHandler);\n}\n\nfunction setup(rafEnv) {\n  debugger;\n  Object(_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rafEnv);\n  var asset = process.env.APPLOC === '.' ? process.cwd() : process.env.APPLOC;\n  process.env.APPASSET = asset;\n  return asset;\n}\n\n\n\n//# sourceURL=webpack://restaf-server/./index.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SASauth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SASauth */ \"./SASauth.js\");\n/*\n *  ------------------------------------------------------------------------------------\n *  * Copyright (c) SAS Institute Inc.\n *  *  Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  * http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  *  Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  limitations under the License.\n * ----------------------------------------------------------------------------------------\n *\n */\n // proxy server\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar Hapi = __webpack_require__(/*! hapi */ \"hapi\"),\n    inert = __webpack_require__(/*! inert */ \"inert\"),\n    WebpackPlugin = __webpack_require__(/*! hapi-webpack-plugin */ \"hapi-webpack-plugin\"),\n\n/* for hot restart */\nhapiServer;\n\n\n\nfunction server(userRouterTable, asset, rootHandler) {\n  process.env.APPHOST_ADDR = process.env.APPHOST;\n  var tls = null;\n  debugger;\n  var sConfig = {\n    port: process.env.APPPORT,\n    host: process.env.APPHOST_ADDR,\n    routes: {\n      cors: {\n        origin: ['*'],\n        credentials: true,\n        additionalHeaders: ['multipart/form-data', 'content-disposition'],\n        additionalExposedHeaders: ['location']\n      }\n    }\n  };\n  console.log('--------------------------------------------');\n  console.log(JSON.stringify(sConfig, null, 4));\n  console.log('--------------------------------------------');\n\n  if (process.env.TLS != null) {\n    var inp = process.env.TLS.split(' ');\n    var tlsInfo = inp.filter(function (t) {\n      return t.length > 0;\n    }); //  console.log(tlsInfo);\n\n    sConfig.tls = {\n      key: fs.readFileSync(tlsInfo[2]),\n      cert: fs.readFileSync(tlsInfo[1]),\n      passphrase: tlsInfo[0]\n    };\n  }\n\n  if (asset !== null) {\n    sConfig.routes.files = {\n      relativeTo: asset\n    };\n  }\n\n  debugger;\n  hapiServer = Hapi.server(sConfig);\n  debugger;\n\n  if (process.env.OAUTH2 !== 'YES') {\n    debugger;\n    var info = Object(_SASauth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hapiServer);\n  }\n\n  var init =\n  /*#__PURE__*/\n  function () {\n    var _ref = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee() {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return hapiServer.register(inert);\n\n            case 2:\n              if (!(process.env.HMR != null)) {\n                _context.next = 5;\n                break;\n              }\n\n              _context.next = 5;\n              return hapiServer.register({\n                plugin: WebpackPlugin,\n                options: process.env.HMR\n              });\n\n            case 5:\n              debugger;\n              _context.next = 8;\n              return Object(_SASauth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hapiServer);\n\n            case 8:\n              hapiServer.route(userRouterTable);\n              hapiServer.app.cache = hapiServer.cache({\n                segment: 'session',\n                expiresIn: 14 * 24 * 60 * 60 * 1000\n              });\n              _context.next = 12;\n              return hapiServer.start();\n\n            case 12:\n              console.log(\" server started at: \".concat(hapiServer.info.uri, \"/\").concat(process.env.APPNAME));\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    return function init() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  process.on('unhandledRejection', function (err) {\n    console.log(err);\n    process.exit(1);\n  });\n  init();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (server);\n\n//# sourceURL=webpack://restaf-server/./server.js?");

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi babel-polyfill ./index ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! C:\\Public\\ViyaAtWork\\restaf-core\\restaf-server\\src/index */\"./index.js\");\n\n\n//# sourceURL=webpack://restaf-server/multi_babel-polyfill_./index?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack://restaf-server/external_%22babel-polyfill%22?");

/***/ }),

/***/ "bell":
/*!***********************!*\
  !*** external "bell" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bell\");\n\n//# sourceURL=webpack://restaf-server/external_%22bell%22?");

/***/ }),

/***/ "boom":
/*!***********************!*\
  !*** external "boom" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"boom\");\n\n//# sourceURL=webpack://restaf-server/external_%22boom%22?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack://restaf-server/external_%22debug%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack://restaf-server/external_%22fs%22?");

/***/ }),

/***/ "hapi":
/*!***********************!*\
  !*** external "hapi" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"hapi\");\n\n//# sourceURL=webpack://restaf-server/external_%22hapi%22?");

/***/ }),

/***/ "hapi-auth-cookie":
/*!***********************************!*\
  !*** external "hapi-auth-cookie" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"hapi-auth-cookie\");\n\n//# sourceURL=webpack://restaf-server/external_%22hapi-auth-cookie%22?");

/***/ }),

/***/ "hapi-webpack-plugin":
/*!**************************************!*\
  !*** external "hapi-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"hapi-webpack-plugin\");\n\n//# sourceURL=webpack://restaf-server/external_%22hapi-webpack-plugin%22?");

/***/ }),

/***/ "inert":
/*!************************!*\
  !*** external "inert" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"inert\");\n\n//# sourceURL=webpack://restaf-server/external_%22inert%22?");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");\n\n//# sourceURL=webpack://restaf-server/external_%22os%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack://restaf-server/external_%22path%22?");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"qs\");\n\n//# sourceURL=webpack://restaf-server/external_%22qs%22?");

/***/ }),

/***/ "request":
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request\");\n\n//# sourceURL=webpack://restaf-server/external_%22request%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack://restaf-server/external_%22uuid%22?");

/***/ })

/******/ });
});