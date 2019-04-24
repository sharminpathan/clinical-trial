(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SideBar */ "./src/components/SideBar.js");
// import {BrowserRouter} from 'react-router-dom'
//
// To start at a different component change SideBar to your component
//
function App(props){debugger;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SideBar__WEBPACK_IMPORTED_MODULE_1__["default"],null);}/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/InputReportViewer.js":
/*!*********************************************!*\
  !*** ./src/components/InputReportViewer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers */ "./src/providers/index.js");
/* harmony import */ var _lib_loadInputVAreport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/loadInputVAreport */ "./src/lib/loadInputVAreport.js");
/* harmony import */ var _helpers_CircularIndeterminate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/CircularIndeterminate */ "./src/helpers/CircularIndeterminate.js");
/*
* ------------------------------------------------------------------------------------
*   Copyright (c) SAS Institute Inc.
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
* ---------------------------------------------------------------------------------------
*
*/var InputReportViewer=/*#__PURE__*/function(_React$Component){Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(InputReportViewer,_React$Component);function InputReportViewer(props){var _this;Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this,InputReportViewer);_this=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this,Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(InputReportViewer).call(this,props));_this.iframeLoaded=function(){_this.setState({isLoading:false});};_this.state={href:null,err:null,isLoading:true};return _this;}Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(InputReportViewer,[{key:"componentDidMount",value:function(){var _componentDidMount=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(){var _this$context,store,viya,appEnv,services,reportName,href;return C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:debugger;if(!(this.state.href===null)){_context.next=16;break;}_this$context=this.context,store=_this$context.store,viya=_this$context.viya;appEnv=viya.appEnv,services=viya.services;reportName=appEnv.INPUTREPORTNAME;console.log();_context.prev=6;_context.next=9;return Object(_lib_loadInputVAreport__WEBPACK_IMPORTED_MODULE_9__["default"])(store,reportName,services,appEnv.host);case 9:href=_context.sent;this.setState({href:href,error:null,isLoading:false});_context.next=16;break;case 13:_context.prev=13;_context.t0=_context["catch"](6);this.setState({href:null,err:JSON.stringify(_context.t0,null,4)});case 16:case"end":return _context.stop();}}},_callee,this,[[6,13]]);}));return function componentDidMount(){return _componentDidMount.apply(this,arguments);};}()},{key:"render",value:function render(){var show;if(this.state.isLoading===true){show=react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1",null,"Simulation Design and Analysis"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{class:"page-wrap"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",null,"Fetching VA Report... ",react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_helpers_CircularIndeterminate__WEBPACK_IMPORTED_MODULE_10__["default"],null))));}else if(this.state.err===null&this.state.isLoading===false){show=react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1",null,"Simulation Design and Analysis"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{class:"embed-responsive embed-responsive-16by9 page-wrap"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("iframe",{onLoad:this.iframeLoaded,class:"embed-responsive-item",src:this.state.href,allowfullscreen:true})));}else{show=react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("pre",null," ",this.state.err);}return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{id:"page-wrap"},show);}}]);return InputReportViewer;}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);InputReportViewer.contextType=_providers__WEBPACK_IMPORTED_MODULE_8__["AppContext"];/* harmony default export */ __webpack_exports__["default"] = (InputReportViewer);

/***/ }),

/***/ "./src/components/OutputReportViewer.js":
/*!**********************************************!*\
  !*** ./src/components/OutputReportViewer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers */ "./src/providers/index.js");
/* harmony import */ var _lib_loadOutputVAReport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/loadOutputVAReport */ "./src/lib/loadOutputVAReport.js");
/* harmony import */ var _helpers_LinearBuffer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/LinearBuffer */ "./src/helpers/LinearBuffer.js");
/* harmony import */ var _helpers_CircularIndeterminate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/CircularIndeterminate */ "./src/helpers/CircularIndeterminate.js");
/*
* ------------------------------------------------------------------------------------
*   Copyright (c) SAS Institute Inc.
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
* ---------------------------------------------------------------------------------------
*
*/var OutputReportViewer=/*#__PURE__*/function(_React$Component){Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(OutputReportViewer,_React$Component);function OutputReportViewer(props){var _this;Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this,OutputReportViewer);_this=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this,Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(OutputReportViewer).call(this,props));_this.iframeLoaded=function(){_this.setState({isLoading:false});};_this.state={href:null,err:null,isLoading:true};return _this;}Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(OutputReportViewer,[{key:"componentDidMount",value:function(){var _componentDidMount=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(){var _this$context,store,viya,appEnv,services,reportName,href;return C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:debugger;if(!(this.state.href===null)){_context.next=16;break;}_this$context=this.context,store=_this$context.store,viya=_this$context.viya;appEnv=viya.appEnv,services=viya.services;reportName=appEnv.OUTPUTREPORTNAME;console.log();_context.prev=6;_context.next=9;return Object(_lib_loadOutputVAReport__WEBPACK_IMPORTED_MODULE_9__["default"])(store,services,appEnv,appEnv.host);case 9:href=_context.sent;this.setState({href:href,error:null,isLoading:false});_context.next=16;break;case 13:_context.prev=13;_context.t0=_context["catch"](6);this.setState({href:null,err:JSON.stringify(_context.t0,null,4)});case 16:case"end":return _context.stop();}}},_callee,this,[[6,13]]);}));return function componentDidMount(){return _componentDidMount.apply(this,arguments);};}()},{key:"render",value:function render(){var show;if(this.state.isLoading===true){show=react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1",null,"ML Prediction Report"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{class:"page-wrap"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",null,"Fetching VA Report... ",react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_helpers_CircularIndeterminate__WEBPACK_IMPORTED_MODULE_11__["default"],null))));}else if(this.state.err===null&this.state.isLoading===false){show=react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1",null,"ML Prediction Report"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{class:"embed-responsive embed-responsive-16by9 page-wrap"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("iframe",{onLoad:this.iframeLoaded,class:"embed-responsive-item",src:this.state.href,allowfullscreen:true})));}else{show=react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("pre",null," ",this.state.err);}return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{id:"page-wrap"},show);}}]);return OutputReportViewer;}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);OutputReportViewer.contextType=_providers__WEBPACK_IMPORTED_MODULE_8__["AppContext"];/* harmony default export */ __webpack_exports__["default"] = (OutputReportViewer);

/***/ }),

/***/ "./src/components/ProblemDescription.js":
/*!**********************************************!*\
  !*** ./src/components/ProblemDescription.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_startUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/startUp */ "./src/lib/startUp.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers */ "./src/providers/index.js");
/*
* ------------------------------------------------------------------------------------
*   Copyright (c) SAS Institute Inc.
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
* ---------------------------------------------------------------------------------------
*
*/var ProblemDescription=/*#__PURE__*/function(_React$Component){Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProblemDescription,_React$Component);function ProblemDescription(){Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,ProblemDescription);return Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProblemDescription).apply(this,arguments));}Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProblemDescription,[{key:"componentDidMount",value:function componentDidMount(){debugger;}// Change image source in line 45 after saving the .jpg file in the images directory - If not desired, delete line 45
},{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"page-wrap"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",{align:"center"}," A Case Study "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{align:"justify"}," ",react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b",null," Problem Statement: "),"SAS\xAE Clinical Trial Enrollment Simulator is a strategic decision-support tool to design better patient enrollment plans and accurately estimate cost. ",react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br",null)),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:__webpack_require__(/*! ../images/Image1.PNG */ "./src/images/Image1.PNG"),width:"700",height:"450"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",null," \xA0 "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{align:"justify"},"SAS\xAE Clinical Trial Enrollment Simulator is built on SAS\xAE Optimization software and it helps overcome three primary challenges of clinical trial enrollment planning:",react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li",null,"The patient enrollment process consists of a long sequence of dynamic events.")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:__webpack_require__(/*! ../images/Image2.PNG */ "./src/images/Image2.PNG"),width:"700",height:"450"})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",null," \xA0 "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{align:"justify"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li",null,"The hierarchical relationship among country startups, site activations, and patient screening and enrollment complicates the process of design and analysis of patient enrollment."),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li",null,"Enrollment planning must be driven by country, site, and patient data sets, and the solution must be robust to the data uncertainty and scalable to any number of countries and sites."))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",null," \xA0 "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{align:"justify"},"SAS\xAE Clinical Trial Enrollment Simulator conducts a comprehensive risk and scenario analyses and helps design risk-sensitive enrollment plans but not in real time. When you are on the phone with a client trying to win the business, you might need to quickly explore the implications of a variety of scenarios in real time. Therefore, the solution that is built on the integration of simulation and machine learning might be better suited to your need to make patient enrollment predictions in real time. Furthermore, you are now able to deploy your enrollment simulation in a real-time analytical portal. Therefore, you have an opportunity to turn this solution into a widely used analytics within your organization for enrollment planning."),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",null," \xA0 "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{align:"justify"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b",null," Objectives: "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li",null,"To showcase how SAS\xAE Simulation Studio enables creation of flexible, scalable, data-driven discrete-event stochastic simulation models of clinical trial enrollment processes.")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:__webpack_require__(/*! ../images/Image3.PNG */ "./src/images/Image3.PNG"),width:"700",height:"450"})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",null," \xA0 "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{align:"justify"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li",null,"To demonstrate how an integrated use of SAS Simulation Studio with machine learning makes it possible to almost immediately make patient enrollment predictions."))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",null," \xA0 "));}}]);return ProblemDescription;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);ProblemDescription.contextType=_providers__WEBPACK_IMPORTED_MODULE_7__["AppContext"];;/* harmony default export */ __webpack_exports__["default"] = (ProblemDescription);

/***/ }),

/***/ "./src/components/SideBar.js":
/*!***********************************!*\
  !*** ./src/components/SideBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _helpers_Header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/Header.js */ "./src/helpers/Header.js");
/* harmony import */ var _ProblemDescription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProblemDescription */ "./src/components/ProblemDescription.js");
/* harmony import */ var _ViewResultsTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ViewResultsTable */ "./src/components/ViewResultsTable.js");
/* harmony import */ var _ViewParamsTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ViewParamsTable */ "./src/components/ViewParamsTable.js");
/* harmony import */ var _ViewCurrentSolution__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ViewCurrentSolution */ "./src/components/ViewCurrentSolution.js");
/* harmony import */ var _InputReportViewer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InputReportViewer */ "./src/components/InputReportViewer.js");
/* harmony import */ var _OutputReportViewer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OutputReportViewer */ "./src/components/OutputReportViewer.js");
/* harmony import */ var _TestStuff__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TestStuff */ "./src/components/TestStuff.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../providers */ "./src/providers/index.js");
var SideBar=/*#__PURE__*/function(_React$Component){Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SideBar,_React$Component);function SideBar(props){var _this;Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,SideBar);_this=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SideBar).call(this,props));debugger;_this.state={isOpen:true};return _this;}Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SideBar,[{key:"componentDidMount",value:function componentDidMount(){}},{key:"componentWillUnmount",value:function componentWillUnmount(){}},{key:"handleStateChange",value:function handleStateChange(state){this.setState({menuOpen:state.isOpen});}},{key:"closeMenu",value:function closeMenu(){// Using the parent component's state to keep track of the menu
this.setState({menuOpen:false});}},{key:"toggleMenu",value:function toggleMenu(){this.setState({menuOpen:!this.state.menuOpen});}},{key:"render",value:function render(){debugger;var store=this.context;//Add path names and text to display on sidebar
var menu=[{path:'/',text:'Home',icon:null},{path:'/inputVA',text:'Simulation Design and Analysis',icon:null},// {path: '/currentSoln',  text: 'Detailed Current Solution', icon: null},
{path:'/parameters',text:'Input Parameters',icon:null},// {path: '/optimalSoln', text: 'Detailed Optimal Solution', icon: null},
{path:'/outputVA',text:'ML Prediction Report',icon:null}];// {path: '/testStuff',   text:'Testing Zone',    icon: null}
debugger;//Change header text in line 53
//Define components for each path
return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"],null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"App"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_helpers_Header_js__WEBPACK_IMPORTED_MODULE_7__["default"],{menu:menu,title:"Accelerating Machine Learning through Simulation"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"],null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"],{exact:true,path:"/",component:_ProblemDescription__WEBPACK_IMPORTED_MODULE_8__["default"]}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"],{path:"/inputVA",component:_InputReportViewer__WEBPACK_IMPORTED_MODULE_12__["default"]}),"// ",react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"],{path:"/currentSoln",component:_ViewCurrentSolution__WEBPACK_IMPORTED_MODULE_11__["default"]}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"],{path:"/parameters",component:_ViewParamsTable__WEBPACK_IMPORTED_MODULE_10__["default"]}),"// ",react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"],{path:"/optimalSoln",component:_ViewResultsTable__WEBPACK_IMPORTED_MODULE_9__["default"]}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"],{path:"/outputVA",component:_OutputReportViewer__WEBPACK_IMPORTED_MODULE_13__["default"]}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Redirect"],{to:"/"}))));}}]);return SideBar;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);SideBar.contextType=_providers__WEBPACK_IMPORTED_MODULE_15__["AppContext"];/* harmony default export */ __webpack_exports__["default"] = (SideBar);// export default withAppContext(SideBar);

/***/ }),

/***/ "./src/components/TestStuff.js":
/*!*************************************!*\
  !*** ./src/components/TestStuff.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers */ "./src/providers/index.js");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_8__);
var _TestStuff=/*#__PURE__*/function(_React$Component){Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_TestStuff,_React$Component);function _TestStuff(props){Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,_TestStuff);return Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_TestStuff).call(this,props));}Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_TestStuff,[{key:"render",value:function render(){debugger;var appEnv=this.context.viya.appEnv;console.log(appEnv);return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"page-wrap"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("pre",null," ",JSON.stringify(appEnv,null,4)));}}]);return _TestStuff;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);_TestStuff.contextType=_providers__WEBPACK_IMPORTED_MODULE_7__["AppContext"];var TestStuff=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(_TestStuff);/* harmony default export */ __webpack_exports__["default"] = (TestStuff);

/***/ }),

/***/ "./src/components/ViewCurrentSolution.js":
/*!***********************************************!*\
  !*** ./src/components/ViewCurrentSolution.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap-table */ "./node_modules/react-bootstrap-table/lib/index.js");
/* harmony import */ var react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_loadParamsData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/loadParamsData */ "./src/lib/loadParamsData.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers */ "./src/providers/index.js");
/* harmony import */ var _lib_fetchCurrentSoln__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/fetchCurrentSoln */ "./src/lib/fetchCurrentSoln.js");
/* harmony import */ var _lib_tableToJson__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/tableToJson */ "./src/lib/tableToJson.js");
/*
* ------------------------------------------------------------------------------------
*   Copyright (c) SAS Institute Inc.
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
* ---------------------------------------------------------------------------------------
*
*///Defining react component to be rendered
var ViewCurrentSolution=/*#__PURE__*/function(_React$Component){Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ViewCurrentSolution,_React$Component);//Leave this line as is - brings in app specific Variables
//Define properties of the react component
function ViewCurrentSolution(_props){var _this;Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,ViewCurrentSolution);_this=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ViewCurrentSolution).call(this,_props));_this.priceFormatter=function(cell,row){return'$'+cell.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,'$&,');};_this.numFormatter=function(cell,row){return Number(cell).toFixed(0);};_this.onSortChange=function(sortName,sortOrder){_this.setState({sortName:sortName,sortOrder:sortOrder});};_this.createCustomToolBar=function(props){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{style:{margin:'15px'}},props.components.btnGroup,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col-md-4 col-md-8"},props.components.searchPanel));};_this.onAfterDeleteRow=function(rowKeys){debugger;var data=_this.state.data;debugger;var filtered=data.filter(function(r){return r['_Index_']!==rowKeys[0];});console.log(filtered);_this.setState({data:filtered});};_this.state={data:_props.data,sortName:null,sortOrder:null};return _this;}Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ViewCurrentSolution,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){this.setState({data:nextProps.data});}// Add the async function (e.g. fetchCurrentSoln) to fetch data to be displayed in table
},{key:"componentDidMount",value:function componentDidMount(){var _this2=this;debugger;var _this$context=this.context,store=_this$context.store,viya=_this$context.viya;console.log(this.context);debugger;Object(_lib_fetchCurrentSoln__WEBPACK_IMPORTED_MODULE_10__["default"])(viya.appEnv,viya.session,store).then(function(r){_this2.setState({data:r});}).catch(function(err){alert(err);});}// Function to format cell value to $xx.xx format
},{key:"render",// Finally render the table - change the fieldnames, column headers and add various formats in lines 160-164 or add more
value:function render(){debugger;// Last row showing sum of a specific column
var footerData=[[//Change column index to show label 'Total'
{label:'Total',columnIndex:0},{//Change column index and field name in data (e.g. variableCosts) to show label the total value
label:'Total value',columnIndex:4,align:'center',formatter:function formatter(tableData){var label=0;for(var i=0,tableDataLen=tableData.length;i<tableDataLen;i++){label+=tableData[i].variableCosts;}return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong",null,"$",label.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,'$&,'));}}]];//Property for selecting row
var selectRowProp={mode:"checkbox",clickToSelect:true,bgColor:"rgb(238, 193, 213)"//Miscellaneous table properties
};var options={sortName:this.state.sortName,afterDeleteRow:this.onAfterDeleteRow,sortOrder:this.state.sortOrder,onSortChange:this.onSortChange,sizePerPage:10,searchPosition:'left'};return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"page-wrap"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",null,"Current Assignment"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__["BootstrapTable"],{data:this.state.data,options:options,search:true,exportCSV:true,deleteRow:true,selectRow:selectRowProp,striped:true,hover:true,condensed:true,footerData:footerData,footer:true,pagination:true},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__["TableHeaderColumn"],{width:"10%",dataField:"_Index_",isKey:true,dataAlign:"center",dataSort:true},"Index"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__["TableHeaderColumn"],{width:"30%",dataField:"product",dataAlign:"center",dataSort:true},"Product Name"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__["TableHeaderColumn"],{width:"30%",dataField:"site",dataAlign:"center",dataSort:true},"Facility Name"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__["TableHeaderColumn"],{width:"30%",dataField:"Units",dataAlign:"center",dataSort:true,dataFormat:this.numFormatter},"Number of Units Produced"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__["TableHeaderColumn"],{width:"30%",dataField:"variableCosts",dataAlign:"center",dataSort:true,dataFormat:this.priceFormatter},"Variable Cost")));}}]);return ViewCurrentSolution;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);ViewCurrentSolution.contextType=_providers__WEBPACK_IMPORTED_MODULE_9__["AppContext"];;/* harmony default export */ __webpack_exports__["default"] = (ViewCurrentSolution);

/***/ }),

/***/ "./src/components/ViewParamsTable.js":
/*!*******************************************!*\
  !*** ./src/components/ViewParamsTable.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap-table */ "./node_modules/react-bootstrap-table/lib/index.js");
/* harmony import */ var react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_loadParamsData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/loadParamsData */ "./src/lib/loadParamsData.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers */ "./src/providers/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _helpers_ParamsButtonGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helpers/ParamsButtonGroup */ "./src/helpers/ParamsButtonGroup.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _lib_loadInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/loadInput */ "./src/lib/loadInput.js");
/* harmony import */ var _lib_optimize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/optimize */ "./src/lib/optimize.js");
/*
* ------------------------------------------------------------------------------------
*   Copyright (c) SAS Institute Inc.
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
* ---------------------------------------------------------------------------------------
*
*/var rowData={Horizon:405,NumEnrolled:10,StartUpDelay:15,Site1StartUpDelay:105,Site1IDDelay:6.7,Site1Capacity:200,Site1Interarrival:2,Site1ScreenFailP:0.2,Site2StartUpDelay:45,Site2IDDelay:6.7,Site2Capacity:200,Site2Interarrival:3.33,Site2ScreenFailP:0.2,Site3StartUpDelay:105,Site3IDDelay:6.7,Site3Capacity:200,Site3Interarrival:2.5,Site3ScreenFailP:0.2,Site4StartUpDelay:135,Site4IDDelay:6.7,Site4Capacity:200,Site4Interarrival:2,Site4ScreenFailP:0.2,Site5StartUpDelay:173.33,Site5IDDelay:6.7,Site5Capacity:200,Site5Interarrival:1.43,Site5ScreenFailP:0.2,Site6StartUpDelay:120,Site6IDDelay:6.7,Site6Capacity:200,Site6Interarrival:3.33,Site6ScreenFailP:0.2,Site7StartUpDelay:120,Site7IDDelay:6.7,Site7Capacity:200,Site7Interarrival:1.43,Site7ScreenFailP:0.2,Site8StartUpDelay:90,Site8IDDelay:6.7,Site8Capacity:200,Site8Interarrival:2,Site8ScreenFailP:0.2,Site9StartUpDelay:180,Site9IDDelay:6.7,Site9Capacity:200,Site9Interarrival:1.25,Site9ScreenFailP:0.2,Site10StartUpDelay:90,Site10IDDelay:6.7,Site10Capacity:200,Site10Interarrival:1.43,Site10ScreenFailP:0.2};var sitenumber=1;var data1=[{id:1,Parameter:'Horizon',Value:rowData['Horizon']},{id:2,Parameter:'Country start up delay',Value:rowData['StartUpDelay']},{id:3,Parameter:'Site number',Value:sitenumber},{id:4,Parameter:'Site start up delay',Value:rowData['Site'+String(sitenumber)+'StartUpDelay']},{id:5,Parameter:'Site ID delay',Value:rowData['Site'+String(sitenumber)+'IDDelay']},{id:6,Parameter:'Site capacity',Value:rowData['Site'+String(sitenumber)+'Capacity']},{id:7,Parameter:'Site inter arrival',Value:rowData['Site'+String(sitenumber)+'Interarrival']},{id:8,Parameter:'Site screen fail P',Value:rowData['Site'+String(sitenumber)+'ScreenFailP']}];//Function to check for infeasibility if same facility is selected for more than one pproduct
/*const checkInfeasible = (data, keyname, value, row) => {
  debugger;
  console.log(data, keyname, value)
  let flg = false;
  for (var i = 0; i<data.length; i++){
    if (data[i][keyname] === value & row['_Index_'] !== i+1){
      console.log(keyname, value)
      flg = true;
    }
  }
  console.log(flg)
  return flg
}*/var styles=function styles(theme){return{root:{display:'flex'}};};//Defining react component to be rendered
var _ViewParamsTable=/*#__PURE__*/function(_React$Component){Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_ViewParamsTable,_React$Component);//Leave this line as is - brings in app specific Variables
//Define properties of the react component
function _ViewParamsTable(props){var _this;Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,_ViewParamsTable);_this=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_ViewParamsTable).call(this,props));_this.setRedirect=function(){_this.setState({redirect:true});};_this.renderRedirect=function(){if(_this.state.redirect){//var jsonTable = new JSONTable($("#example-table")) // Convert the table into a javascript object
console.log(_this.state.objType);console.log('above is object type');_this.setState({data:rowData});_this.runQuery();return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Redirect"],{to:"/outputVA"});}};_this.runQuery=function(){var _this$context=_this.context,store=_this$context.store,viya=_this$context.viya;Object(_lib_loadInput__WEBPACK_IMPORTED_MODULE_15__["default"])(store,viya.session,rowData,viya.appEnv.WORKLIBNAME,viya.appEnv.OPTABLENAME).then(function(r){console.log(JSON.stringify(r.items(),null,4));Object(_lib_optimize__WEBPACK_IMPORTED_MODULE_16__["default"])(_this.context.store,_this.context.viya.session,_this.state.objType,_this.context.viya.appEnv,rowData).then(function(result){_this.props.history.push('/outputVA');});});console.log('rowdata',rowData);};_this.numFormatter=function(cell,row){return Number(cell);};_this.onBeforeSaveCell=function(row,cellName,cellValue){debugger;if(isNaN(cellValue)&cellName==='demand'){alert('Invalid datatype. Please enter a number.');console.log(row);return false;}/*else if (cellName === 'facility_name' & checkInfeasible(this.state.data, cellName, cellValue, row) === true) {
      debugger;
      alert('This facility has already been fixed for another product and will make your model infeasible. Please select another fixed facility for this product.')
      return false;
    }*/};_this.onAfterSaveCell=function(row,cellName,cellValue){debugger;var data=_this.state.data;console.log('New cell',row);switch(row['Parameter']){case'Horizon':rowData['Horizon']=Number(cellValue);break;case'Country start up delay':rowData['StartUpDelay']=Number(cellValue);break;case'Site number':sitenumber=Number(cellValue);data1=[{id:1,Parameter:'Horizon',Value:rowData['Horizon']},{id:2,Parameter:'Country start up delay',Value:rowData['StartUpDelay']},{id:3,Parameter:'Site number',Value:sitenumber},{id:4,Parameter:'Site start up delay',Value:rowData['Site'+String(sitenumber)+'StartUpDelay']},{id:5,Parameter:'Site ID delay',Value:rowData['Site'+String(sitenumber)+'IDDelay']},{id:6,Parameter:'Site capacity',Value:rowData['Site'+String(sitenumber)+'Capacity']},{id:7,Parameter:'Site inter arrival',Value:rowData['Site'+String(sitenumber)+'Interarrival']},{id:8,Parameter:'Site screen fail P',Value:rowData['Site'+String(sitenumber)+'ScreenFailP']}];_this.setState({data:data1});//IWBSExecuteAsyncJScript('$("#table1").bootstrapTable("refresh","");');
break;case'Site start up delay':rowData['Site'+String(sitenumber)+'StartUpDelay']=Number(cellValue);break;case'Site ID delay':rowData['Site'+String(sitenumber)+'IDDelay']=Number(cellValue);break;case'Site capacity':rowData['Site'+String(sitenumber)+'Capacity']=Number(cellValue);break;case'Site inter arrival':rowData['Site'+String(sitenumber)+'Interarrival']=Number(cellValue);break;case'Site screen fail P':rowData['Site'+String(sitenumber)+'ScreenFailP']=Number(cellValue);break;}};_this.onAfterDeleteRow=function(rowKeys){debugger;var data=_this.state.data;debugger;var filtered=data.filter(function(r){return r['Product_Name']!==rowKeys[0];});console.log(filtered);_this.setState({data:filtered});};_this.fixedFacility=function(row){return _this.state.viable_sites[row.Product_Name].sort();};_this.state={data:props.data,viable_sites:props.viable_sites,objType:"1",redirect:false};return _this;}Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_ViewParamsTable,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){this.data=data1;//this.props.dispatch(data1);
this.setState({data:data1,//nextProps.data,
viable_sites:nextProps.viable_sites,objType:nextProps.objType});}// Add the async function (e.g. loadParamsData) to fetch data to be displayed in table
// viableSitesArr is also defined from results
},{key:"componentDidMount",value:function componentDidMount(){debugger;/*let {store, viya} = this.context;
    console.log(this.context)
    debugger;
    loadParamsData(viya.appEnv, viya.session, store)
    .then(result => {
      console.log(result)
      let viableSitesArr = {};
      for (var i =0; i < result [0].length; i++){
        viableSitesArr[result [0][i].Product_Name] = [];
        debugger;
        for (var j =0; j < result[1].length; j++){
          if(result[1][j].Product_Name === result [0][i].Product_Name){
            viableSitesArr[result [0][i].Product_Name].push(result[1][j].facility_name)
          }
        }
      }
      debugger;
      this.setState({
        data: result[0],
        viable_sites: viableSitesArr
      })
      debugger;
    })
    .catch(err =>{
      alert(JSON.stringify(err, null, 4))
    })*/}},{key:"componentDidUpdate",value:function componentDidUpdate(){console.log(this.state.objType);console.log(this.state.data);}//Function to format cell value to number with 2 decimal places
},{key:"render",value:function render(){var classes=this.props.classes;debugger;var mycellEditProp={mode:'click',blurToSave:true,beforeSaveCell:this.onBeforeSaveCell,afterSaveCell:this.onAfterSaveCell};return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"page-wrap"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",null,"Input Parameters"),"\xA0",react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a,{variant:"h6",color:"black"},"Enter Horizon and site specific parameters: "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__["BootstrapTable"],{data:data1,id:"#table1",cellEdit:mycellEditProp,striped:true,hover:true,condensed:true},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__["TableHeaderColumn"],{width:"35%",dataField:"Parameter",isKey:true,dataAlign:"center",dataSort:true},"Parameter"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__["TableHeaderColumn"],{id:"cell",width:"30%",dataField:"Value",dataAlign:"center",dataSort:true,dataFormat:this.numFormatter},"Value"))),"\xA0",react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,"\xA0 \xA0 \xA0",this.renderRedirect(),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default.a,{variant:"contained",color:"primary",classes:{root:classes.button,label:classes.label},type:"submit",onClick:this.setRedirect},"Make Predictions")));}}]);return _ViewParamsTable;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);_ViewParamsTable.contextType=_providers__WEBPACK_IMPORTED_MODULE_9__["AppContext"];var ViewParamsTable=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(_ViewParamsTable);/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["withStyles"])(styles)(ViewParamsTable));

/***/ }),

/***/ "./src/components/ViewResultsTable.js":
/*!********************************************!*\
  !*** ./src/components/ViewResultsTable.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap-table */ "./node_modules/react-bootstrap-table/lib/index.js");
/* harmony import */ var react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_loadParamsData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/loadParamsData */ "./src/lib/loadParamsData.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers */ "./src/providers/index.js");
/* harmony import */ var _lib_optimize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/optimize */ "./src/lib/optimize.js");
/* harmony import */ var _lib_fetchResultsTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/fetchResultsTable */ "./src/lib/fetchResultsTable.js");
/* harmony import */ var _lib_tableToJson__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/tableToJson */ "./src/lib/tableToJson.js");
/*
* ------------------------------------------------------------------------------------
*   Copyright (c) SAS Institute Inc.
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
* ---------------------------------------------------------------------------------------
*
*///Defining react component to be rendered
var ViewResultsTable=/*#__PURE__*/function(_React$Component){Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ViewResultsTable,_React$Component);//Leave this line as is - brings in app specific Variables
//Define properties of the react component
function ViewResultsTable(_props){var _this;Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,ViewResultsTable);_this=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ViewResultsTable).call(this,_props));_this.priceFormatter=function(cell,row){return'$'+cell.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,'$&,');};_this.numFormatter=function(cell,row){return Number(cell).toFixed(0);};_this.onSortChange=function(sortName,sortOrder){_this.setState({sortName:sortName,sortOrder:sortOrder});};_this.createCustomToolBar=function(props){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{style:{margin:'15px'}},props.components.btnGroup,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col-md-4 col-md-8"},props.components.searchPanel));};_this.onAfterDeleteRow=function(rowKeys){debugger;var data=_this.state.data;debugger;var filtered=data.filter(function(r){return r['_Index_']!==rowKeys[0];});console.log(filtered);_this.setState({data:filtered});};_this.state={data:_props.data,sortName:null,sortOrder:null};return _this;}Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ViewResultsTable,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){this.setState({data:nextProps.data});}// Add the async function (e.g. fetchResultsTable) to fetch data to be displayed in table
},{key:"componentDidMount",value:function componentDidMount(){var _this2=this;debugger;var _this$context=this.context,store=_this$context.store,viya=_this$context.viya;console.log(this.context);debugger;Object(_lib_fetchResultsTable__WEBPACK_IMPORTED_MODULE_11__["default"])(viya.appEnv,viya.session,store).then(function(r){_this2.setState({data:r});}).catch(function(err){alert("Table not found!");});}// Function to format cell value to $xx.xx format
},{key:"render",// Finally render the table - change the fieldnames, column headers and add various formats in lines 161-165 or add more
value:function render(){debugger;// Last row showing sum of a specific column
var footerData=[[//Change column index to show label 'Total'
{label:'Total',columnIndex:0},//Change column index and field name in data (e.g. variableCosts) to show label the total value
{label:'Total value',columnIndex:4,align:'center',formatter:function formatter(tableData){var label=0;for(var i=0,tableDataLen=tableData.length;i<tableDataLen;i++){label+=tableData[i].variableCosts;}return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong",null,"$",label.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,'$&,'));}}]];//Property for selecting row
var selectRowProp={mode:"checkbox",clickToSelect:true,bgColor:"rgb(238, 193, 213)"//Miscellaneous table properties
};var options={sortName:this.state.sortName,afterDeleteRow:this.onAfterDeleteRow,sortOrder:this.state.sortOrder,onSortChange:this.onSortChange,sizePerPage:25,searchPosition:'left'};return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"page-wrap"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",null,"Optimal Assignment"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__["BootstrapTable"],{data:this.state.data,options:options,search:true,exportCSV:true,deleteRow:true,selectRow:selectRowProp,striped:true,hover:true,condensed:true,footerData:footerData,footer:true,pagination:true},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__["TableHeaderColumn"],{width:"10%",dataField:"_Index_",isKey:true,dataAlign:"center",dataSort:true},"Index"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__["TableHeaderColumn"],{width:"30%",dataField:"product",dataAlign:"center",dataSort:true},"Product Name"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__["TableHeaderColumn"],{width:"30%",dataField:"site",dataAlign:"center",dataSort:true},"Facility Name"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__["TableHeaderColumn"],{width:"30%",dataField:"Units",dataAlign:"center",dataSort:true,dataFormat:this.numFormatter},"Number of Units Produced"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_7__["TableHeaderColumn"],{width:"30%",dataField:"variableCosts",dataAlign:"center",dataSort:true,dataFormat:this.priceFormatter},"Variable Cost")));}}]);return ViewResultsTable;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);ViewResultsTable.contextType=_providers__WEBPACK_IMPORTED_MODULE_9__["AppContext"];;/* harmony default export */ __webpack_exports__["default"] = (ViewResultsTable);

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/helpers/CircularIndeterminate.js":
/*!**********************************************!*\
  !*** ./src/helpers/CircularIndeterminate.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__);
var styles=function styles(theme){return{progress:{margin:theme.spacing.unit*2}};};function CircularIndeterminate(props){var classes=props.classes;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default.a,{className:classes.progress}));}/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(CircularIndeterminate));

/***/ }),

/***/ "./src/helpers/Header.js":
/*!*******************************!*\
  !*** ./src/helpers/Header.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/Drawer/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ListItemLink__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ListItemLink */ "./src/helpers/ListItemLink.js");
var styles={list:{width:250,color:'white',align:'center'},fullList:{width:'auto'},drawer:{flexShrink:0},drawerPaper:{backgroundColor:'#0068A3',color:'white'},root:{flexGrow:1},appBar:{backgroundColor:'#1d649b'},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}};var Header=/*#__PURE__*/function(_React$Component){Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header,_React$Component);function Header(props){var _this;Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,Header);_this=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this,props));_this._toggleDrawer=function(s){return function(){debugger;_this.setState({left:s});};};_this.state={left:false,title:props.title,leftMenu:props.menu};return _this;}Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(newProps){this.setState({leftMenu:newProps.menu});}},{key:"render",value:function render(){var classes=this.props.classes;debugger;var leftItems=this.state.leftMenu.map(function(m,key){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ListItemLink__WEBPACK_IMPORTED_MODULE_15__["default"],{to:m.path,primary:m.text,icon:null,key:key.toString()});});var leftList=react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_13___default.a,null,leftItems));debugger;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7___default.a,{position:"static",className:classes.appBar},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8___default.a,null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a,{className:classes.menuButton,color:"inherit","aria-label":"Menu",onClick:this._toggleDrawer(true)},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12___default.a,null)),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a,{variant:"h6",color:"inherit",className:classes.grow},this.state.title),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a,{color:"inherit"},"Logout"))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9___default.a,{open:this.state.left,onClose:this._toggleDrawer(false)},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{classes:{paper:classes.drawerPaper},tabIndex:0,role:"button",onClick:this._toggleDrawer(false),onKeyDown:this._toggleDrawer(false)},leftList)));}}]);return Header;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);/*
Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};
*//* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(Header));

/***/ }),

/***/ "./src/helpers/LinearBuffer.js":
/*!*************************************!*\
  !*** ./src/helpers/LinearBuffer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/LinearProgress/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_7__);
var styles={root:{flexGrow:1}};var LinearBuffer=/*#__PURE__*/function(_React$Component){Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LinearBuffer,_React$Component);function LinearBuffer(){var _getPrototypeOf2;var _this;Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,LinearBuffer);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,(_getPrototypeOf2=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LinearBuffer)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={completed:0,buffer:10};_this.progress=function(){var completed=_this.state.completed;if(completed>100){_this.setState({completed:0,buffer:10});}else{var diff=Math.random()*10;var diff2=Math.random()*10;_this.setState({completed:completed+diff,buffer:completed+diff+diff2});}};return _this;}Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LinearBuffer,[{key:"componentDidMount",value:function componentDidMount(){this.timer=setInterval(this.progress,500);}},{key:"componentWillUnmount",value:function componentWillUnmount(){clearInterval(this.timer);}},{key:"render",value:function render(){var classes=this.props.classes;var _this$state=this.state,completed=_this$state.completed,buffer=_this$state.buffer;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:classes.root},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_7___default.a,{variant:"buffer",value:completed,valueBuffer:buffer}));}}]);return LinearBuffer;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(LinearBuffer));

/***/ }),

/***/ "./src/helpers/ListItemLink.js":
/*!*************************************!*\
  !*** ./src/helpers/ListItemLink.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var styles={root:{background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',foregroundColor:'white',borderRadius:3,border:0,color:'white',height:48,padding:'0 30px'// boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
},label:{textTransform:'capitalize'}};var ListItemLink=/*#__PURE__*/function(_React$Component){Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ListItemLink,_React$Component);function ListItemLink(){var _getPrototypeOf2;var _this;Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,ListItemLink);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,(_getPrototypeOf2=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ListItemLink)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.renderLink=function(itemProps){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"],Object.assign({to:_this.props.to},itemProps));};return _this;}Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ListItemLink,[{key:"render",value:function render(){var _this$props=this.props,icon=_this$props.icon,primary=_this$props.primary;// debugger;
return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default.a,{button:true,component:this.renderLink},icon!=null?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7___default.a,null,icon):null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8___default.a,{primary:primary,className:styles.root})));}}]);return ListItemLink;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (ListItemLink);

/***/ }),

/***/ "./src/helpers/ParamsButtonGroup.js":
/*!******************************************!*\
  !*** ./src/helpers/ParamsButtonGroup.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers */ "./src/providers/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _lib_optimize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/optimize */ "./src/lib/optimize.js");
/* harmony import */ var _lib_loadInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/loadInput */ "./src/lib/loadInput.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/Radio/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/FormLabel/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_18__);
/*
* ------------------------------------------------------------------------------------
*   Copyright (c) SAS Institute Inc.
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
* ---------------------------------------------------------------------------------------
*
*/var styles=function styles(theme){return{root:{display:'flex'},formControl:{margin:theme.spacing.unit*3},button:{background:'linear-gradient(45deg, #1d649b 30%, #0e4772 90%)',borderRadius:3,border:0,color:'white',height:48,padding:'0 30px',boxShadow:'0 3px 5px 2px rgba(255, 105, 135, .3)'}};};var _ParamsButtonGroup=/*#__PURE__*/function(_React$Component){Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_ParamsButtonGroup,_React$Component);function _ParamsButtonGroup(props){var _this;Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,_ParamsButtonGroup);_this=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_ParamsButtonGroup).call(this,props));_this.load_output_report=function(){};_this.handleClick=function(){debugger;console.log(_this.state.objType);debugger;if(_this.state.objType){var _this$context=_this.context,store=_this$context.store,viya=_this$context.viya;Object(_lib_loadInput__WEBPACK_IMPORTED_MODULE_10__["default"])(store,viya.session,_this.state.data,viya.appEnv.WORKLIBNAME,viya.appEnv.OPTABLENAME).then(function(r){console.log(JSON.stringify(r.items(),null,4));Object(_lib_optimize__WEBPACK_IMPORTED_MODULE_9__["default"])(_this.context.store,_this.context.viya.session,_this.state.objType,_this.context.viya.appEnv).then(function(result){_this.props.history.push('/optimalSoln');}).catch(function(err){alert(err);});}).catch(function(err){alert(err);});}else{alert('Please Select a Cost function!');}};_this.state={data:props.data,objType:props.objType};return _this;}Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_ParamsButtonGroup,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){this.setState({data:nextProps.data,objType:nextProps.objType});}},{key:"componentDidMount",value:function componentDidMount(){debugger;}},{key:"componentDidUpdate",value:function componentDidUpdate(){console.log(this.state.objType);console.log(this.state.data);}},{key:"render",value:function render(){var _this2=this;var classes=this.props.classes;debugger;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_17___default.a,{component:"fieldset",className:classes.formControl},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_18___default.a,{component:"legend"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a,{variant:"h6",color:"black"},"Select site")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_15___default.a,{"aria-label":"objType",name:"objType",value:this.state.objType,onChange:function onChange(e){return _this2.setState({objType:e.target.value});}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_16___default.a,{value:"1",control:react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14___default.a,{color:"black"}),label:react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a,{variant:"h6",color:"black"},"Variable Costs Only")}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_16___default.a,{value:"2",control:react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14___default.a,{color:"black"}),label:react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a,{variant:"h6",color:"black"},"Fixed Costs Only")}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_16___default.a,{value:"3",control:react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14___default.a,{color:"black"}),label:react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a,{variant:"h6",color:"black"},"Total Cost (Fixed and Variable Costs)")}))),"\xA0"));}}]);return _ParamsButtonGroup;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);_ParamsButtonGroup.contextType=_providers__WEBPACK_IMPORTED_MODULE_7__["AppContext"];var ParamsButtonGroup=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(_ParamsButtonGroup);/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["withStyles"])(styles)(ParamsButtonGroup));

/***/ }),

/***/ "./src/images/Image1.PNG":
/*!*******************************!*\
  !*** ./src/images/Image1.PNG ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Image1.a9961601.PNG";

/***/ }),

/***/ "./src/images/Image2.PNG":
/*!*******************************!*\
  !*** ./src/images/Image2.PNG ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Image2.9b0d4fc3.PNG";

/***/ }),

/***/ "./src/images/Image3.PNG":
/*!*******************************!*\
  !*** ./src/images/Image3.PNG ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Image3.0378a066.PNG";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_setupViya__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/setupViya */ "./src/lib/setupViya.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers */ "./src/providers/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_table_dist_react_bootstrap_table_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap-table/dist/react-bootstrap-table.min.css */ "./node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css");
/* harmony import */ var react_bootstrap_table_dist_react_bootstrap_table_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table_dist_react_bootstrap_table_min_css__WEBPACK_IMPORTED_MODULE_7__);
/*
* ------------------------------------------------------------------------------------
*   Copyright (c) SAS Institute Inc.
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
* ---------------------------------------------------------------------------------------
*
*/// import restaf from 'restaf';
//import * as serviceWorker from 'serviceWorker';
var $=window.$;var appEnv=window.optUI.appEnv;debugger;var store=window.restaf.initStore();debugger;Object(_lib_setupViya__WEBPACK_IMPORTED_MODULE_2__["default"])(store,appEnv,null).then(function(r){react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_providers__WEBPACK_IMPORTED_MODULE_3__["AppProvider"],{value:{store:store,viya:r}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"],null)),document.querySelector('#root'));}).catch(function(err){return console.log(JSON.stringify(err,null,4));});// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

/***/ }),

/***/ "./src/lib/fetchCurrentSoln.js":
/*!*************************************!*\
  !*** ./src/lib/fetchCurrentSoln.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _lib_tableToJson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/tableToJson */ "./src/lib/tableToJson.js");
/*
 * ------------------------------------------------------------------------------------
 *   Copyright (c) SAS Institute Inc.
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 * ---------------------------------------------------------------------------------------
 *
 */function fetchCurrentSoln(_x,_x2,_x3){return _fetchCurrentSoln.apply(this,arguments);}function _fetchCurrentSoln(){_fetchCurrentSoln=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appEnv,session,store){var caslStatements,payload,r;return C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:debugger;caslStatements="\n\n  action fedsql.execdirect /\n    query=\"create table ".concat(appEnv.INPUTLIBNAME,".curr_soln_costs {options replace=true} as\n       select a.site, a.product, a.variableCosts, a.units\n       from ").concat(appEnv.INPUTLIBNAME,".").concat(appEnv.CURRENTSOLUTION," as a\n       where a.Close = 0\n       \";\n  run;\n\n\t\taction table.fetch r=result / to= 1000\n\t\t\ttable= {caslib = '").concat(appEnv.INPUTLIBNAME,"' name = 'curr_soln_costs'};\n\t\trun;\n\n\t\tf = findTable(result);\n\t\tprint f;\n\n    r = {A= result};\n    send_response( r) ;\n\n\t\trun;\n\t");console.log(caslStatements);payload={action:'sccasl.runCasl',data:{code:caslStatements}};debugger;_context.next=7;return store.runAction(session,payload);case 7:r=_context.sent;return _context.abrupt("return",Object(_lib_tableToJson__WEBPACK_IMPORTED_MODULE_2__["default"])(r.items('results','A','Fetch')));case 9:case"end":return _context.stop();}}},_callee,this);}));return _fetchCurrentSoln.apply(this,arguments);}/* harmony default export */ __webpack_exports__["default"] = (fetchCurrentSoln);

/***/ }),

/***/ "./src/lib/fetchResultsTable.js":
/*!**************************************!*\
  !*** ./src/lib/fetchResultsTable.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _lib_tableToJson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/tableToJson */ "./src/lib/tableToJson.js");
/*
 * ------------------------------------------------------------------------------------
 *   Copyright (c) SAS Institute Inc.
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 * ---------------------------------------------------------------------------------------
 *
 */function fetchResultsTable(_x,_x2,_x3){return _fetchResultsTable.apply(this,arguments);}function _fetchResultsTable(){_fetchResultsTable=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appEnv,session,store){var caslStatements,payload,r;return C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:debugger;caslStatements="\n\n\t\taction table.fetch r=result / to= 1000\n\t\t\ttable= {caslib = '".concat(appEnv.WORKLIBNAME,"' name = '").concat(appEnv.OUTPUTCOSTTABLENAME,"'};\n\t\trun;\n\n\t\tf = findTable(result);\n\t\tprint f;\n\n\t\t/*\n\t\tSeems we need this drop table for VA to refresh the  report\n\n\t\taction table.dropTable/\n\t\t caslib='").concat(appEnv.WORKLIBNAME,"' name='").concat(appEnv.COMPARISONTABLE,"' quiet=TRUE;*/\n\n     r = {A= result};\n     send_response( r) ;\n\n\t\trun;\n\t");console.log(caslStatements);payload={action:'sccasl.runCasl',data:{code:caslStatements}};debugger;_context.next=7;return store.runAction(session,payload);case 7:r=_context.sent;return _context.abrupt("return",Object(_lib_tableToJson__WEBPACK_IMPORTED_MODULE_2__["default"])(r.items('results','A','Fetch')));case 9:case"end":return _context.stop();}}},_callee,this);}));return _fetchResultsTable.apply(this,arguments);}/* harmony default export */ __webpack_exports__["default"] = (fetchResultsTable);

/***/ }),

/***/ "./src/lib/genCode.js":
/*!****************************!*\
  !*** ./src/lib/genCode.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _optCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./optCode */ "./src/lib/optCode.js");
/*
* ------------------------------------------------------------------------------------
*   Copyright (c) SAS Institute Inc.
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
* ---------------------------------------------------------------------------------------
*
*/function genCode(objType,appEnv,rowData){var columns=Object.keys(rowData);var pgm=Object(_optCode__WEBPACK_IMPORTED_MODULE_0__["default"])(objType,appEnv);var caslStatements="\n\n\taction table.dropTable/\n\t\tcaslib='".concat(appEnv.WORKLIBNAME,"' name='").concat(appEnv.OUTPUTMASTERTABLENAME,"' quiet=TRUE;\n\n\ttable.save /\n\t\tcaslib='").concat(appEnv.WORKLIBNAME,"'\n\t\tname='").concat(appEnv.OPTABLENAME,"'\n\t\ttable='").concat(appEnv.OPTABLENAME,"'\n\t\treplace=TRUE;\n\n\ttable.loadTable /\n\t\tcasOut={\n\t\tname=\"model\",\n\t\treplace=TRUE}\n\t\tcaslib='").concat(appEnv.WORKLIBNAME,"'\n\t\tpath=\"MODEL.sashdat\";\n\n\ttable.loadTable /\n\t\tcasOut={\n\t\tname=\"model_weights\",\n\t\treplace=TRUE}\n\t\tcaslib='").concat(appEnv.WORKLIBNAME,"'\n\t\tpath=\"MODEL_WEIGHTS.sashdat\";\n\n\ttable.loadTable /\n\t\tcasOut={\n\t\tname=\"model_weights_attr\",\n\t\treplace=TRUE}\n\t\tcaslib='").concat(appEnv.WORKLIBNAME,"'\n\t\tpath=\"MODEL_WEIGHTS_ATTR.sashdat\";\n\n\ttable.attribute /\n\t  name=\"model_weights\"\n\t  table=\"model_weights_attr\";\n\n\tloadactionset 'deepLearn';\n\tdeepLearn.dlScore table={name='").concat(appEnv.OPTABLENAME,"'} initWeights={name=\"model_weights\"}\n\t  modelTable={name=\"model\"}\n\t\tcopyVars={'Horizon', 'StartUpDelay', 'Site1StartUpDelay', 'Site1IDDelay', 'Site1Capacity', 'Site2StartUpDelay', 'Site2IDDelay', 'Site2Capacity', 'Site3StartUpDelay', 'Site3IDDelay', 'Site3Capacity', 'Site4StartUpDelay', 'Site4IDDelay', 'Site4Capacity', 'Site5StartUpDelay', 'Site5IDDelay', 'Site5Capacity', 'Site6StartUpDelay', 'Site6IDDelay', 'Site6Capacity', 'Site7StartUpDelay', 'Site7IDDelay', 'Site7Capacity', 'Site8StartUpDelay', 'Site8IDDelay', 'Site8Capacity', 'Site9StartUpDelay', 'Site9IDDelay', 'Site9Capacity', 'Site10StartUpDelay', 'Site10IDDelay', 'Site10Capacity', 'Site1Interarrival', 'Site2Interarrival', 'Site3Interarrival', 'Site4Interarrival', 'Site5Interarrival', 'Site6Interarrival', 'Site7Interarrival', 'Site8Interarrival', 'Site9Interarrival', 'Site10Interarrival', 'Site1ScreenFailP', 'Site2ScreenFailP', 'Site3ScreenFailP', 'Site4ScreenFailP', 'Site5ScreenFailP', 'Site6ScreenFailP', 'Site7ScreenFailP', 'Site8ScreenFailP', 'Site9ScreenFailP', 'Site10ScreenFailP'}\n\t\tcasout={name='").concat(appEnv.OUTPUTMASTERTABLENAME,"', caslib='").concat(appEnv.INPUTLIBNAME,"', replace=TRUE};\n\n\n\n\taction table.save /\n\t\tcaslib  = '").concat(appEnv.INPUTLIBNAME,"'\n\t\tname    = '").concat(appEnv.OUTPUTMASTERTABLENAME,"'\n\t\treplace = TRUE\n\t\ttable= {\n\t\t\tcaslib = '").concat(appEnv.INPUTLIBNAME,"'\n\t\t\tname   = '").concat(appEnv.OUTPUTMASTERTABLENAME,"'\n\t\t};\n\n\n\n\taction table.fetch r=result / to= 1000\n\t\t\t\tfetchVars={'_DL_Pred_','Horizon'}\n\t\t\t\ttable= {\n\t\t\t\t\tcaslib = '").concat(appEnv.INPUTLIBNAME,"'\n\t\t\t\t\tname = '").concat(appEnv.OUTPUTMASTERTABLENAME,"'\n\t\t\t\t};\n\t\t\t\trun;\n\n\n\n\tr = {A= result};\n\tsend_response( r) ;\n\trun;\n\n\t");return caslStatements;}function genCode1(objType,appEnv,rowData,r1){var columns=Object.keys(rowData);var pgm=Object(_optCode__WEBPACK_IMPORTED_MODULE_0__["default"])(objType,appEnv);console.log('in here');var caslStatements="\n\n\n\n\taction table.loadTable /\n\t\tcasOut={\n\t\tname=QUANTILES_PREDICTION,\n\t\treplace=TRUE}\n\t\tcaslib='".concat(appEnv.INPUTLIBNAME,"'\n\t\tpath=\"QUANTILES_PREDICTION.sashdat\";\n\n\t\taction table.save /\n\t\t\t\t\t\t\t\t\tcaslib='").concat(appEnv.INPUTLIBNAME,"'\n\t\t\t\t\t\t\t\t\tname='btw'\n\t\t\t\t\t\t\t\t\ttable ={\n\t\t\t\t\t\t\t\t\t\tcaslib = '").concat(appEnv.INPUTLIBNAME,"'\n\t\t\t\t\t\t\t\t\t\tname   = QUANTILES_PREDICTION\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\treplace=TRUE;\n\n\taction table.update /\n\t\t\t    table= {\n\t\t\t\t\t\tcaslib = '").concat(appEnv.INPUTLIBNAME,"'\n\t\t\t\t\t\tname   = QUANTILES_PREDICTION\n\t\t\t\t\t}\n\t\t\t    set={\n\t\t\t      {var=\"Prediction\", value='").concat(r1,"'}\n\t\t\t    };\n\n\n\n\n\trun;\n\n\t");return caslStatements;}/* harmony default export */ __webpack_exports__["default"] = (genCode);

/***/ }),

/***/ "./src/lib/genCode1.js":
/*!*****************************!*\
  !*** ./src/lib/genCode1.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _optCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./optCode */ "./src/lib/optCode.js");
/*
* ------------------------------------------------------------------------------------
*   Copyright (c) SAS Institute Inc.
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
* ---------------------------------------------------------------------------------------
*
*/function genCode1(objType,appEnv,rowData,r1,h){var columns=Object.keys(rowData);var pgm=Object(_optCode__WEBPACK_IMPORTED_MODULE_0__["default"])(objType,appEnv);console.log('in here');var caslStatements="\n\n\n\n\taction table.loadTable /\n\t\tcasOut={\n\t\tname=\"QUANTILES_PREDICTION\",\n\t\treplace=TRUE}\n\t\tcaslib='".concat(appEnv.INPUTLIBNAME,"'\n\t\tpath=\"QUANTILES_PREDICTION.sashdat\";\n\n\n\taction table.update /\n\t\t\t    table= {\n\t\t\t\t\t\tcaslib = '").concat(appEnv.INPUTLIBNAME,"'\n\t\t\t\t\t\tname   = 'QUANTILES_PREDICTION'\n\t\t\t\t\t\twhere  = \"Days=-1\"\n\t\t\t\t\t}\n\t\t\t    set={\n\t\t\t      {var=\"Prediction\", value='").concat(r1,"'}\n\t\t\t\t\t\t{var=\"Months\", value='").concat(h,"/30'}\n\n\t\t\t    };\n\n\t\t\t\t\taction table.save /\n\t\t\t\t\t\t\t\t\t\t\t\tcaslib='").concat(appEnv.INPUTLIBNAME,"'\n\t\t\t\t\t\t\t\t\t\t\t\tname='QUANTILES_PREDICTION'\n\t\t\t\t\t\t\t\t\t\t\t\ttable ={\n\t\t\t\t\t\t\t\t\t\t\t\t\tcaslib = '").concat(appEnv.INPUTLIBNAME,"'\n\t\t\t\t\t\t\t\t\t\t\t\t\tname   = 'QUANTILES_PREDICTION'\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\treplace=TRUE;\n\n\n\n\trun;\n\n\t");return caslStatements;}/* harmony default export */ __webpack_exports__["default"] = (genCode1);

/***/ }),

/***/ "./src/lib/loadInput.js":
/*!******************************!*\
  !*** ./src/lib/loadInput.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/*
 * ------------------------------------------------------------------------------------
 *   Copyright (c) SAS Institute Inc.
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 * ---------------------------------------------------------------------------------------
 *
 */function loadInput(_x,_x2,_x3,_x4,_x5){return _loadInput.apply(this,arguments);}function _loadInput(){_loadInput=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(store,session,rowData,caslib,name){var csv,JSON_Parameters,payload,result;return C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:csv=makecsv(rowData);debugger;// upload data as csv
JSON_Parameters={casout:{caslib:"".concat(caslib),/* a valid caslib */name:"".concat(name),/* name of output file on cas server */replace:true},importOptions:{fileType:'csv'/* type of the file being uploaded */}};payload={headers:{'JSON-Parameters':JSON_Parameters},data:csv,action:'table.upload'};_context.next=6;return store.runAction(session,payload,'upload');case 6:result=_context.sent;return _context.abrupt("return",result);case 8:case"end":return _context.stop();}}},_callee,this);}));return _loadInput.apply(this,arguments);}function makecsv(rowData,data){console.log('keys',Object.keys(rowData));var columns=Object.keys(rowData);var colNames=columns[0];for(var i=1;i<columns.length;i++){colNames=colNames+','+columns[i];};console.log('colnames',colNames);var dataRows=null;debugger;var row=null;for(var k in rowData){row=row===null?rowData[k]:row+','+rowData[k];console.log(JSON.stringify(rowData[k]));}dataRows=dataRows===null?row:dataRows+'\n'+row;console.log('datarows',dataRows);var csv=colNames+'\n'+dataRows;console.log(csv);return csv;}/* harmony default export */ __webpack_exports__["default"] = (loadInput);

/***/ }),

/***/ "./src/lib/loadInputVAreport.js":
/*!**************************************!*\
  !*** ./src/lib/loadInputVAreport.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/*
 * ------------------------------------------------------------------------------------
 *   Copyright (c) SAS Institute Inc.
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 * ---------------------------------------------------------------------------------------
 *
 */function loadInputVAReport(_x,_x2,_x3,_x4){return _loadInputVAReport.apply(this,arguments);}function _loadInputVAReport(){_loadInputVAReport=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(store,reportName,services,host){var reportUri,options,href;return C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:debugger;_context.next=3;return updateInputReport(store,reportName,services);case 3:reportUri=_context.sent;options="&appSwitcherDisabled=true&reportViewOnly=true&printEnabled=true&sharedEnabled=true&informationEnabled=true&commentEnabled=true&reportViewOnly=true";href="".concat(host,"/SASReportViewer/?reportUri=").concat(reportUri).concat(options);console.log(href);return _context.abrupt("return",href);case 8:case"end":return _context.stop();}}},_callee,this);}));return _loadInputVAReport.apply(this,arguments);}function updateInputReport(_x5,_x6,_x7){return _updateInputReport.apply(this,arguments);}function _updateInputReport(){_updateInputReport=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(store,reportName,services){var reports,reportsList,reportUri;return C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:reports=services.reports;debugger;_context2.next=4;return getReport(store,reports,reportName);case 4:reportsList=_context2.sent;if(!(reportsList===null)){_context2.next=7;break;}throw{Error:"".concat(reportName," not found")};case 7:reportUri=reportsList.itemsCmd(reportsList.itemsList(0),'self','link','uri');return _context2.abrupt("return",reportUri);case 9:case"end":return _context2.stop();}}},_callee2,this);}));return _updateInputReport.apply(this,arguments);}function getReport(_x8,_x9,_x10){return _getReport.apply(this,arguments);}function _getReport(){_getReport=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(store,reports,name){var payload,reportsList;return C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:payload={qs:{filter:"eq(name,'".concat(name,"')")}};_context3.next=3;return store.apiCall(reports.links('reports'),payload);case 3:reportsList=_context3.sent;return _context3.abrupt("return",reportsList.itemsList().size===0?null:reportsList);case 5:case"end":return _context3.stop();}}},_callee3,this);}));return _getReport.apply(this,arguments);}/* harmony default export */ __webpack_exports__["default"] = (loadInputVAReport);

/***/ }),

/***/ "./src/lib/loadOutputVAReport.js":
/*!***************************************!*\
  !*** ./src/lib/loadOutputVAReport.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/*
 * ------------------------------------------------------------------------------------
 *   Copyright (c) SAS Institute Inc.
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 * ---------------------------------------------------------------------------------------
 *
 */ //Change report loading to new code//
function loadOutputVAReport(_x,_x2,_x3,_x4){return _loadOutputVAReport.apply(this,arguments);}function _loadOutputVAReport(){_loadOutputVAReport=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(store,reportServices,appEnv,host){var reportUri,options,href;return C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:debugger;_context.next=3;return updateOutputReport(store,reportServices,appEnv);case 3:reportUri=_context.sent;options="&appSwitcherDisabled=true&reportViewOnly=true&printEnabled=true&sharedEnabled=true&informationEnabled=true&commentEnabled=true&reportViewOnly=true";href="".concat(host,"/SASReportViewer/?reportUri=").concat(reportUri).concat(options);console.log(href);return _context.abrupt("return",href);case 8:case"end":return _context.stop();}}},_callee,this);}));return _loadOutputVAReport.apply(this,arguments);}function updateOutputReport(_x5,_x6,_x7){return _updateOutputReport.apply(this,arguments);}function _updateOutputReport(){_updateOutputReport=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(store,reportServices,appEnv){var reports,reportTransforms,reportsList,reportUri,oldReport,data,qs,p,changeData,newReport,id;return C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:reports=reportServices.reports,reportTransforms=reportServices.reportTransforms;debugger;_context2.next=4;return getReport(store,reports,"".concat(appEnv.OUTPUTREPORTNAME));case 4:reportsList=_context2.sent;if(!(reportsList===null)){_context2.next=7;break;}throw{Error:"".concat(appEnv.OUTPUTREPORTNAME," not found")};case 7:reportUri=reportsList.itemsCmd(reportsList.itemsList(0),'self','link','uri');if(!(appEnv.REPORTGEN==='copy')){_context2.next=28;break;}_context2.next=11;return getReport(store,reports,"MLPrediction_Report");case 11:oldReport=_context2.sent;if(!(oldReport!==null)){_context2.next=15;break;}_context2.next=15;return store.apiCall(oldReport.itemsCmd(oldReport.itemsList(0),'delete'));case 15:;data={"inputReportUri":"".concat(reportUri),"resultReportName":"MLPrediction_Report","dataSources":[{"namePattern":"serverLibraryTable","purpose":"replacement","server":"cas-shared-default","library":"".concat(appEnv.WORKLIBNAME),"table":"".concat(appEnv.OUTPUTMASTERTABLENAME,"}")},{"namePattern":"serverLibraryTable","purpose":"original","server":"cas-shared-default","library":"".concat(appEnv.INPUTLIBNAME),"table":"".concat(appEnv.OUTPUTMASTERTABLENAME,"}")}]};debugger;console.log(data);qs={failOnDataSourceError:false,useSavedReport:true,saveResult:true};p={qs:qs,data:data};changeData=reportTransforms.links('createDataMappedReport');_context2.next=24;return store.apiCall(changeData,p);case 24:newReport=_context2.sent;id=newReport.items('resultReport','id');debugger;reportUri="/reports/reports/".concat(id);case 28:return _context2.abrupt("return",reportUri);case 29:case"end":return _context2.stop();}}},_callee2,this);}));return _updateOutputReport.apply(this,arguments);}function getReport(_x8,_x9,_x10){return _getReport.apply(this,arguments);}function _getReport(){_getReport=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(store,reports,name){var payload,reportsList;return C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:payload={qs:{filter:"eq(name,'".concat(name,"')")}};_context3.next=3;return store.apiCall(reports.links('reports'),payload);case 3:reportsList=_context3.sent;return _context3.abrupt("return",reportsList.itemsList().size===0?null:reportsList);case 5:case"end":return _context3.stop();}}},_callee3,this);}));return _getReport.apply(this,arguments);}/* harmony default export */ __webpack_exports__["default"] = (loadOutputVAReport);

/***/ }),

/***/ "./src/lib/loadParamsData.js":
/*!***********************************!*\
  !*** ./src/lib/loadParamsData.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _lib_tableToJson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/tableToJson */ "./src/lib/tableToJson.js");
/*
* ------------------------------------------------------------------------------------
*   Copyright (c) SAS Institute Inc.
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
* ---------------------------------------------------------------------------------------
*
*/function loadParamsData(_x,_x2,_x3){return _loadParamsData.apply(this,arguments);}function _loadParamsData(){_loadParamsData=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appEnv,session,store){var paramTable;return C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:paramTable=[];return _context.abrupt("return",paramTable);case 2:case"end":return _context.stop();}}},_callee,this);}));return _loadParamsData.apply(this,arguments);}/* harmony default export */ __webpack_exports__["default"] = (loadParamsData);

/***/ }),

/***/ "./src/lib/optCode.js":
/*!****************************!*\
  !*** ./src/lib/optCode.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
* ------------------------------------------------------------------------------------
*   Copyright (c) SAS Institute Inc.
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
* ---------------------------------------------------------------------------------------
*
*/function optCode(ObjType,appEnv){var pgm="\n  set <str> PRODUCTS;\n  set <str> FACILITIES init {};\n  set <str, str> FIXED;\n\n  num demand {PRODUCTS};\n  num fixed_cost {FACILITIES};\n  num close_cost {FACILITIES};\n  num x{FACILITIES};\n  num y{FACILITIES};\n  num var_cost {PRODUCTS, FACILITIES};\n  num viable_flg {PRODUCTS, FACILITIES};\n  num Obj_Type=".concat(ObjType,";\n  num capacity {FACILITIES};\n  str soln_type init 'Optimal Solution';\n\n  read data ").concat(appEnv.WORKLIBNAME,".").concat(appEnv.OPTABLENAME," into PRODUCTS=[Product_Name] demand;\n  read data ").concat(appEnv.WORKLIBNAME,".").concat(appEnv.OPTABLENAME," into FIXED=[Product_Name facility_name];\n  read data ").concat(appEnv.INPUTLIBNAME,".").concat(appEnv.SITETABLENAME," into FACILITIES=[facility_name] close_cost fixed_cost x y capacity;\n  read data ").concat(appEnv.INPUTLIBNAME,".").concat(appEnv.COSTTABLENAME,"\tinto [Product_Name facility_name] var_cost viable_flg;\n\n  var Assign {PRODUCTS, FACILITIES} binary;\n  var Units {PRODUCTS, FACILITIES} >=0;\n  var Close {FACILITIES} binary;\n\n  min VarCost\n    = sum {i in PRODUCTS, j in FACILITIES} var_cost[i,j]*Units[i,j];\n\n  min FixedCost\n    = sum {j in FACILITIES} (fixed_cost[j]*(1-Close[j]) + close_cost[j]*Close[j]);\n\n  min TotalCost\n    = VarCost + FixedCost;\n\n  /* Constraints */\n\n  /* PRODUCTS demand needs to be satisfied */\n  con Demand_Con {i in PRODUCTS}:\n    sum {j in FACILITIES} Units[i,j] >= demand[i];\n\n  /* each facility can handle at most 1 type of product */\n  con Capacity_Con1 {j in FACILITIES}:\n    sum {i in PRODUCTS} Assign[i,j] <= 1;\n\n  /* each facility have capacity constraints */\n  con Capacity_Con2 {j in FACILITIES}:\n    sum {i in PRODUCTS} Units[i,j] <= capacity[j];\n\n  /* if operation i assigned to site j, then facility must not be closed at j */\n  con If_Used_Then_Not_Closed {j in FACILITIES}:\n    sum {i in PRODUCTS} Assign[i,j] = (1-Close[j]);\n\n  /*not viable assignemnts*/\n  con Viable_Assignemnts {i in PRODUCTS, j in FACILITIES}:\n    Assign[i,j] <= viable_flg[i,j];\n\n  con Viable_Num_Assignemnts1 {i in PRODUCTS, j in FACILITIES}:\n    Units[i,j] <= capacity[j]*Assign[i,j];\n\n  con Viable_Num_Assignemnts2 {i in PRODUCTS, j in FACILITIES}:\n    Units[i,j] >= Assign[i,j];\n\n  for{<i,j> in FIXED:min(demand[i], capacity[j]) ne .} fix Units[i,j]=min(demand[i], capacity[j]);\n\n  /* solve the MILP */\n  if Obj_Type=1 then do;\n    solve obj VarCost with milp;\n  end;\n  else if Obj_Type=2 then do;\n    solve obj FixedCost with milp;\n  end;\n  else if Obj_Type=3 then do;\n    solve obj TotalCost with milp;\n  end;\n\n  /* clean up the solution */\n  for {i in PRODUCTS, j in FACILITIES} Assign[i,j] = round(Assign[i,j]);\n  for {j in FACILITIES} Close[j] = round(Close[j]);\n\n  num siteTotalCost {j in FACILITIES}=\n    sum{i in PRODUCTS} var_cost[i,j] * Units[i,j].sol + (fixed_cost[j]*(1-Close[j].sol) + close_cost[j]*Close[j].sol);\n\n  num variableCosts{i in PRODUCTS, j in FACILITIES}=\n    var_cost[i,j]*Units[i,j].sol;\n\n  /* create output */\n  create data ").concat(appEnv.WORKLIBNAME,".").concat(appEnv.OUTPUTCOSTTABLENAME," from\n    [product site]={i in PRODUCTS, j in FACILITIES: Assign[i,j] = 1}\n    var_cost variableCosts Assign.sol Units.sol;\n\n  create data ").concat(appEnv.WORKLIBNAME,".").concat(appEnv.OUTPUTSITETABLENAME," from\n    [site]={j in FACILITIES}\n    x y Close.sol siteTotalCost soln_type capacity;\n  ");return pgm;}/* harmony default export */ __webpack_exports__["default"] = (optCode);

/***/ }),

/***/ "./src/lib/optimize.js":
/*!*****************************!*\
  !*** ./src/lib/optimize.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _genCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genCode */ "./src/lib/genCode.js");
/* harmony import */ var _genCode1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./genCode1 */ "./src/lib/genCode1.js");
/* harmony import */ var _tableToJson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tableToJson */ "./src/lib/tableToJson.js");
/*
 * ------------------------------------------------------------------------------------
 *   Copyright (c) SAS Institute Inc.
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 * ---------------------------------------------------------------------------------------
 *
 */function optimize(_x,_x2,_x3,_x4,_x5){return _optimize.apply(this,arguments);}function _optimize(){_optimize=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(store,session,objType,appEnv,rowData){var caslStatements,payload,r,g,h,caslStatements1,payload1;return C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:debugger;caslStatements=Object(_genCode__WEBPACK_IMPORTED_MODULE_2__["default"])(objType,appEnv,rowData);console.log(caslStatements);payload={action:'sccasl.runCasl',data:{code:caslStatements}};_context.next=6;return store.runAction(session,payload);case 6:r=_context.sent;g=Object(_tableToJson__WEBPACK_IMPORTED_MODULE_4__["default"])(r.items('results','A','Fetch'))[0]['_DL_Pred_'];h=Object(_tableToJson__WEBPACK_IMPORTED_MODULE_4__["default"])(r.items('results','A','Fetch'))[0]['Horizon'];console.log('where',g,'there',h);caslStatements1=Object(_genCode1__WEBPACK_IMPORTED_MODULE_3__["default"])(objType,appEnv,rowData,g,h);console.log(caslStatements1);payload1={action:'sccasl.runCasl',data:{code:caslStatements1}};_context.next=15;return store.runAction(session,payload1);case 15:console.log('done');debugger;return _context.abrupt("return",r);case 18:case"end":return _context.stop();}}},_callee,this);}));return _optimize.apply(this,arguments);}/* harmony default export */ __webpack_exports__["default"] = (optimize);

/***/ }),

/***/ "./src/lib/setupViya.js":
/*!******************************!*\
  !*** ./src/lib/setupViya.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _startUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startUp */ "./src/lib/startUp.js");
/*
* ------------------------------------------------------------------------------------
*   Copyright (c) SAS Institute Inc.
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
* ---------------------------------------------------------------------------------------
*
*/function setupViya(_x,_x2,_x3){return _setupViya.apply(this,arguments);}function _setupViya(){_setupViya=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(store,appEnv,logonPayload){var actionSets,services,casManagement,servers,payload,serverName,session,l,i,_payload,r;return C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:debugger;actionSets=['sccasl'];_context.next=4;return store.logon(logonPayload);case 4:_context.next=6;return store.addServices('casManagement','reports','reportImages','reportTransforms');case 6:services=_context.sent;casManagement=services.casManagement;_context.next=10;return store.apiCall(casManagement.links('servers'));case 10:servers=_context.sent;payload={data:{name:'astore'}};serverName=servers.itemsList(0);_context.next=15;return store.apiCall(servers.itemsCmd(serverName,'createSession'),payload);case 15:session=_context.sent;if(!(actionSets!==null)){_context.next=26;break;}l=actionSets.length;i=0;case 19:if(!(i<l)){_context.next=26;break;}_payload={action:'builtins.loadActionSet',data:{actionSet:actionSets[i]}};_context.next=23;return store.runAction(session,_payload);case 23:i++;_context.next=19;break;case 26:console.log(JSON.stringify(session.links(),null,4));//Performing startUp data steps 
Object(_startUp__WEBPACK_IMPORTED_MODULE_2__["default"])(appEnv,session,store).then().catch(function(err){alert(err);});//TODO: Add new AppInit functions//
r={session:session,services:services,appEnv:appEnv};return _context.abrupt("return",r);case 30:case"end":return _context.stop();}}},_callee,this);}));return _setupViya.apply(this,arguments);}/* harmony default export */ __webpack_exports__["default"] = (setupViya);

/***/ }),

/***/ "./src/lib/startUp.js":
/*!****************************!*\
  !*** ./src/lib/startUp.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/*
* ------------------------------------------------------------------------------------
*   Copyright (c) SAS Institute Inc.
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
* ---------------------------------------------------------------------------------------
*
*/function startUp(_x,_x2,_x3){return _startUp.apply(this,arguments);}function _startUp(){_startUp=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appEnv,session,store){var caslStatements,payload;return C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:caslStatements="\n  action table.dropTable / name='".concat(appEnv.OPTABLENAME,"' caslib='").concat(appEnv.WORKLIBNAME,"' quiet=TRUE;\n\n  /*Running Some Data Step Code to read input data into work library */\n\n  datastep.runCode / single = 'yes'\n    code = \"\n      data ").concat(appEnv.WORKLIBNAME,".").concat(appEnv.OPTABLENAME,";\n      set ").concat(appEnv.INPUTLIBNAME,".").concat(appEnv.OPTABLENAME,";\n      run;\n    \";\n  run;\n  action table.save /\n\t\tcaslib  = '").concat(appEnv.WORKLIBNAME,"'\n\t\tname    = '").concat(appEnv.OPTABLENAME,"'\n\t\treplace = TRUE\n\t\ttable= {\n\t\t\tcaslib = '").concat(appEnv.WORKLIBNAME,"'\n\t\t\tname   = '").concat(appEnv.OPTABLENAME,"'\n\t\t};\n\n\taction table.loadTable/\n\t\tcaslib= '").concat(appEnv.WORKLIBNAME,"' path= '").concat(appEnv.OPTABLENAME,".sashdat'\n\t\tcasout= {caslib='").concat(appEnv.WORKLIBNAME,"' name='").concat(appEnv.OPTABLENAME,"' replace=TRUE};\n\n  ");console.log(caslStatements);payload={}//action: 'sccasl.runCasl',
//data: {code: caslStatements}
//debugger;
//let r = await store.runAction(session, payload);
//return r
;case 3:case"end":return _context.stop();}}},_callee,this);}));return _startUp.apply(this,arguments);}/* harmony default export */ __webpack_exports__["default"] = (startUp);

/***/ }),

/***/ "./src/lib/tableToJson.js":
/*!********************************!*\
  !*** ./src/lib/tableToJson.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * ------------------------------------------------------------------------------------
 *   Copyright (c) SAS Institute Inc.
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 * ---------------------------------------------------------------------------------------
 *
 */var tableInfo=function tableInfo(data){var itemRows=data.get('rows');var columns=[];data.get('schema').map(function(s){columns.push(s.get('name'));});var allResults=[];itemRows.map(function(r){var row={};r.map(function(value,j){row[columns[j]]=value;});allResults.push(row);});console.log('allResults',allResults);return allResults;};/* harmony default export */ __webpack_exports__["default"] = (tableInfo);

/***/ }),

/***/ "./src/providers/AppContext.js":
/*!*************************************!*\
  !*** ./src/providers/AppContext.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var AppContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();/* harmony default export */ __webpack_exports__["default"] = (AppContext);

/***/ }),

/***/ "./src/providers/AppProvider.js":
/*!**************************************!*\
  !*** ./src/providers/AppProvider.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AppContext */ "./src/providers/AppContext.js");
var AppProvider=/*#__PURE__*/function(_React$Component){Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AppProvider,_React$Component);//  in case we want to set other globals
function AppProvider(props){var _this;Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,AppProvider);_this=Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AppProvider).call(this,props));debugger;_this.state={value:props.value};return _this;}Object(C_Users_shpath_Documents_ctres_web_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppProvider,[{key:"render",value:function render(){debugger;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_AppContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider,{value:this.state.value},this.props.children);}}]);return AppProvider;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (AppProvider);

/***/ }),

/***/ "./src/providers/index.js":
/*!********************************!*\
  !*** ./src/providers/index.js ***!
  \********************************/
/*! exports provided: AppContext, AppProvider, withAppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppContext */ "./src/providers/AppContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return _AppContext__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AppProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppProvider */ "./src/providers/AppProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppProvider", function() { return _AppProvider__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _withAppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withAppContext */ "./src/providers/withAppContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAppContext", function() { return _withAppContext__WEBPACK_IMPORTED_MODULE_2__["default"]; });



/***/ }),

/***/ "./src/providers/withAppContext.js":
/*!*****************************************!*\
  !*** ./src/providers/withAppContext.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppContext */ "./src/providers/AppContext.js");
function withAppContext(Component){return function WrapperComponent(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppContext__WEBPACK_IMPORTED_MODULE_1__["default"].Consumer,null,function(state){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component,Object.assign({},props,{context:state}));});};}/* harmony default export */ __webpack_exports__["default"] = (withAppContext);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shpath\Documents\ctres-web-app\src\index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.4527b69b.chunk.js.map