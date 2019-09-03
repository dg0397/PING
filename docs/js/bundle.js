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

/***/ "./src/app/images.js":
/*!***************************!*\
  !*** ./src/app/images.js ***!
  \***************************/
/*! exports provided: importImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"importImages\", function() { return importImages; });\nfunction importImages(){\n    __webpack_require__(/*! ../static/images/favicon-32x32.png */ \"./src/static/images/favicon-32x32.png\");\n    __webpack_require__(/*! ../static/images/illustration-dashboard.png */ \"./src/static/images/illustration-dashboard.png\");\n    __webpack_require__(/*! ../static/images/logo.svg */ \"./src/static/images/logo.svg\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2ltYWdlcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvaW1hZ2VzLmpzPzJkOWQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGltcG9ydEltYWdlcygpe1xuICAgIHJlcXVpcmUoXCIuLi9zdGF0aWMvaW1hZ2VzL2Zhdmljb24tMzJ4MzIucG5nXCIpO1xuICAgIHJlcXVpcmUoXCIuLi9zdGF0aWMvaW1hZ2VzL2lsbHVzdHJhdGlvbi1kYXNoYm9hcmQucG5nXCIpO1xuICAgIHJlcXVpcmUoXCIuLi9zdGF0aWMvaW1hZ2VzL2xvZ28uc3ZnXCIpO1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/images.js\n");

/***/ }),

/***/ "./src/app/validateInput.js":
/*!**********************************!*\
  !*** ./src/app/validateInput.js ***!
  \**********************************/
/*! exports provided: alertInput, checkInputs, changeColorText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"alertInput\", function() { return alertInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkInputs\", function() { return checkInputs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeColorText\", function() { return changeColorText; });\n//this function checks the email with regular expressions\nfunction validateEmail(email) {\n    var re = /^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n    return re.test(email);\n}\n\n//This function is called when the input is out of focus.\nfunction alertInput(){\n    const alertDiv = document.querySelector('.alert');\n\n    if(this.value.length === 0){\n        \n        alertDiv.textContent = \"Whoops! It looks like you forgot to add your email\"; // write the message in the div\n        alertDiv.classList.add('alert'); //add the alert class to the div\n\n        this.classList.add('input-alert'); //add the input-alert class to the input\n    \n    }else if(this.name === 'email' && !validateEmail(this.value)){\n        \n        alertDiv.textContent = 'Please provide a valid email address'; //check the email and write a message if email is wrong\n        alertDiv.classList.add('alert'); //add the alert class to the div\n    \n    }else{\n    \n        alertDiv.textContent = ''; // remove the message in the div\n        this.classList.remove('input-alert'); // remove the input-alert class\n        \n    }\n}\n\n//this functions checks the input\nfunction checkInputs(){\n   \n\n        \n    if(input.value.length === 0){\n        \n        alertDiv.textContent = \"Whoops! It looks like you forgot to add your email\";// write the message in the div\n        alertDiv.classList.add('alert');//add the alert class to the div\n\n        input.classList.add('input-alert');//add the input-alert class to the input\n\n    }\n\n\n}\n\nfunction changeColorText(){\n    \n    this.style.color = \"#1c1c1c\"\n    \n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3ZhbGlkYXRlSW5wdXQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZhbGlkYXRlSW5wdXQuanM/ODgzNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3RoaXMgZnVuY3Rpb24gY2hlY2tzIHRoZSBlbWFpbCB3aXRoIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcbiAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XG59XG5cbi8vVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiB0aGUgaW5wdXQgaXMgb3V0IG9mIGZvY3VzLlxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0SW5wdXQoKXtcbiAgICBjb25zdCBhbGVydERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpO1xuXG4gICAgaWYodGhpcy52YWx1ZS5sZW5ndGggPT09IDApe1xuICAgICAgICBcbiAgICAgICAgYWxlcnREaXYudGV4dENvbnRlbnQgPSBcIldob29wcyEgSXQgbG9va3MgbGlrZSB5b3UgZm9yZ290IHRvIGFkZCB5b3VyIGVtYWlsXCI7IC8vIHdyaXRlIHRoZSBtZXNzYWdlIGluIHRoZSBkaXZcbiAgICAgICAgYWxlcnREaXYuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKTsgLy9hZGQgdGhlIGFsZXJ0IGNsYXNzIHRvIHRoZSBkaXZcblxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWFsZXJ0Jyk7IC8vYWRkIHRoZSBpbnB1dC1hbGVydCBjbGFzcyB0byB0aGUgaW5wdXRcbiAgICBcbiAgICB9ZWxzZSBpZih0aGlzLm5hbWUgPT09ICdlbWFpbCcgJiYgIXZhbGlkYXRlRW1haWwodGhpcy52YWx1ZSkpe1xuICAgICAgICBcbiAgICAgICAgYWxlcnREaXYudGV4dENvbnRlbnQgPSAnUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJzsgLy9jaGVjayB0aGUgZW1haWwgYW5kIHdyaXRlIGEgbWVzc2FnZSBpZiBlbWFpbCBpcyB3cm9uZ1xuICAgICAgICBhbGVydERpdi5jbGFzc0xpc3QuYWRkKCdhbGVydCcpOyAvL2FkZCB0aGUgYWxlcnQgY2xhc3MgdG8gdGhlIGRpdlxuICAgIFxuICAgIH1lbHNle1xuICAgIFxuICAgICAgICBhbGVydERpdi50ZXh0Q29udGVudCA9ICcnOyAvLyByZW1vdmUgdGhlIG1lc3NhZ2UgaW4gdGhlIGRpdlxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWFsZXJ0Jyk7IC8vIHJlbW92ZSB0aGUgaW5wdXQtYWxlcnQgY2xhc3NcbiAgICAgICAgXG4gICAgfVxufVxuXG4vL3RoaXMgZnVuY3Rpb25zIGNoZWNrcyB0aGUgaW5wdXRcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lucHV0cygpe1xuICAgXG5cbiAgICAgICAgXG4gICAgaWYoaW5wdXQudmFsdWUubGVuZ3RoID09PSAwKXtcbiAgICAgICAgXG4gICAgICAgIGFsZXJ0RGl2LnRleHRDb250ZW50ID0gXCJXaG9vcHMhIEl0IGxvb2tzIGxpa2UgeW91IGZvcmdvdCB0byBhZGQgeW91ciBlbWFpbFwiOy8vIHdyaXRlIHRoZSBtZXNzYWdlIGluIHRoZSBkaXZcbiAgICAgICAgYWxlcnREaXYuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKTsvL2FkZCB0aGUgYWxlcnQgY2xhc3MgdG8gdGhlIGRpdlxuXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWFsZXJ0Jyk7Ly9hZGQgdGhlIGlucHV0LWFsZXJ0IGNsYXNzIHRvIHRoZSBpbnB1dFxuXG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNvbG9yVGV4dCgpe1xuICAgIFxuICAgIHRoaXMuc3R5bGUuY29sb3IgPSBcIiMxYzFjMWNcIlxuICAgIFxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/validateInput.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/images */ \"./src/app/images.js\");\n/* harmony import */ var _app_validateInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/validateInput */ \"./src/app/validateInput.js\");\n\n\n\n\n\nObject(_app_images__WEBPACK_IMPORTED_MODULE_1__[\"importImages\"])();\n\nconst input = document.querySelector('input');//select all inputs\nconst btn = document.querySelector('input[type=\"submit\"]'); //select the button\nconst form = document.querySelector('form');\n\nform.reset();\ninput.addEventListener('blur', _app_validateInput__WEBPACK_IMPORTED_MODULE_2__[\"alertInput\"]);\ninput.addEventListener(\"focus\", _app_validateInput__WEBPACK_IMPORTED_MODULE_2__[\"changeColorText\"]);\nbtn.addEventListener('click', _app_validateInput__WEBPACK_IMPORTED_MODULE_2__[\"checkInputs\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQge2ltcG9ydEltYWdlc30gZnJvbSBcIi4vYXBwL2ltYWdlc1wiO1xuaW1wb3J0IHthbGVydElucHV0LGNoZWNrSW5wdXRzLGNoYW5nZUNvbG9yVGV4dH0gZnJvbSBcIi4vYXBwL3ZhbGlkYXRlSW5wdXRcIlxuXG5cbmltcG9ydEltYWdlcygpO1xuXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7Ly9zZWxlY3QgYWxsIGlucHV0c1xuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpOyAvL3NlbGVjdCB0aGUgYnV0dG9uXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuXG5mb3JtLnJlc2V0KCk7XG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYWxlcnRJbnB1dCk7XG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgY2hhbmdlQ29sb3JUZXh0KTtcbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrSW5wdXRzKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/static/images/favicon-32x32.png":
/*!*********************************************!*\
  !*** ./src/static/images/favicon-32x32.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/images/favicon-32x32.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGljL2ltYWdlcy9mYXZpY29uLTMyeDMyLnBuZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaW1hZ2VzL2Zhdmljb24tMzJ4MzIucG5nPzBlODciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ltYWdlcy9mYXZpY29uLTMyeDMyLnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/static/images/favicon-32x32.png\n");

/***/ }),

/***/ "./src/static/images/illustration-dashboard.png":
/*!******************************************************!*\
  !*** ./src/static/images/illustration-dashboard.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/images/illustration-dashboard.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGljL2ltYWdlcy9pbGx1c3RyYXRpb24tZGFzaGJvYXJkLnBuZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaW1hZ2VzL2lsbHVzdHJhdGlvbi1kYXNoYm9hcmQucG5nP2U4NjgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ltYWdlcy9pbGx1c3RyYXRpb24tZGFzaGJvYXJkLnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/static/images/illustration-dashboard.png\n");

/***/ }),

/***/ "./src/static/images/logo.svg":
/*!************************************!*\
  !*** ./src/static/images/logo.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/images/logo.svg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGljL2ltYWdlcy9sb2dvLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaW1hZ2VzL2xvZ28uc3ZnP2Q0ZjgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ltYWdlcy9sb2dvLnN2Z1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/static/images/logo.svg\n");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLnNjc3M/YjI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles.scss\n");

/***/ })

/******/ });