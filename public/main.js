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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/script.js":
/*!*********************************!*\
  !*** ./src/assets/js/script.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function(window, document) {\n  \"use strict\";\n  let $box = document.querySelector(\".box\");\n  let $textCssBox = document.querySelector(\".text-css\");\n  let $textCss = document.querySelector(\".text-css .text-content\");\n  let $clipBoardBtn = document.querySelector(\".copybtn\");\n  let $topLeft = document.querySelector(\".top-left\");\n  let $topRight = document.querySelector(\".top-right\");\n  let $bottomLeft = document.querySelector(\".bottom-left\");\n  let $bottomRight = document.querySelector(\".bottom-right\");\n  let topLeftValue = 0;\n  let topRightValue = 0;\n  let bottomLeftValue = 0;\n  let bottomRightValue = 0;\n\n  function setBorderRadius(topLeft, topRight, bottomLeft, bottomRight) {\n    $box.setAttribute(\n      \"style\",\n      `border-top-left-radius: ${topLeft}px; border-top-right-radius: ${topRight}px; border-bottom-left-radius: ${bottomLeft}px; border-bottom-right-radius: ${bottomRight}px;`\n    );\n    $textCss.textContent = ` border-top-left-radius: ${topLeft}px;\\n border-top-right-radius: ${topRight}px;\\r\\n border-bottom-left-radius: ${bottomLeft}px;\\r\\n border-bottom-right-radius: ${bottomRight}px;`;\n  }\n\n  function clipText() {\n    $textCss.select();\n    $textCss.setSelectionRange(0, 99999); /*For mobile devices*/\n    document.execCommand(\"copy\");\n  }\n\n  $clipBoardBtn.addEventListener(\"click\", function(e) {\n    e.preventDefault();\n    clipText();\n  });\n\n  $topLeft.addEventListener(\"keyup\", function(e) {\n    topLeftValue = e.target.value;\n    setBorderRadius(\n      topLeftValue,\n      topRightValue,\n      bottomLeftValue,\n      bottomRightValue\n    );\n  });\n  $topRight.addEventListener(\"keyup\", function(e) {\n    topRightValue = e.target.value;\n    setBorderRadius(\n      topLeftValue,\n      topRightValue,\n      bottomLeftValue,\n      bottomRightValue\n    );\n  });\n  $bottomLeft.addEventListener(\"keyup\", function(e) {\n    bottomLeftValue = e.target.value;\n    setBorderRadius(\n      topLeftValue,\n      topRightValue,\n      bottomLeftValue,\n      bottomRightValue\n    );\n  });\n  $bottomRight.addEventListener(\"keyup\", function(e) {\n    bottomRightValue = e.target.value;\n    setBorderRadius(\n      topLeftValue,\n      topRightValue,\n      bottomLeftValue,\n      bottomRightValue\n    );\n  });\n})(window, document);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL3NjcmlwdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvc2NyaXB0LmpzP2E1ZWIiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGxldCAkYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3hcIik7XG4gIGxldCAkdGV4dENzc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dC1jc3NcIik7XG4gIGxldCAkdGV4dENzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dC1jc3MgLnRleHQtY29udGVudFwiKTtcbiAgbGV0ICRjbGlwQm9hcmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvcHlidG5cIik7XG4gIGxldCAkdG9wTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9wLWxlZnRcIik7XG4gIGxldCAkdG9wUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcC1yaWdodFwiKTtcbiAgbGV0ICRib3R0b21MZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3R0b20tbGVmdFwiKTtcbiAgbGV0ICRib3R0b21SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tLXJpZ2h0XCIpO1xuICBsZXQgdG9wTGVmdFZhbHVlID0gMDtcbiAgbGV0IHRvcFJpZ2h0VmFsdWUgPSAwO1xuICBsZXQgYm90dG9tTGVmdFZhbHVlID0gMDtcbiAgbGV0IGJvdHRvbVJpZ2h0VmFsdWUgPSAwO1xuXG4gIGZ1bmN0aW9uIHNldEJvcmRlclJhZGl1cyh0b3BMZWZ0LCB0b3BSaWdodCwgYm90dG9tTGVmdCwgYm90dG9tUmlnaHQpIHtcbiAgICAkYm94LnNldEF0dHJpYnV0ZShcbiAgICAgIFwic3R5bGVcIixcbiAgICAgIGBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAke3RvcExlZnR9cHg7IGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAke3RvcFJpZ2h0fXB4OyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAke2JvdHRvbUxlZnR9cHg7IGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAke2JvdHRvbVJpZ2h0fXB4O2BcbiAgICApO1xuICAgICR0ZXh0Q3NzLnRleHRDb250ZW50ID0gYCBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAke3RvcExlZnR9cHg7XFxuIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAke3RvcFJpZ2h0fXB4O1xcclxcbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAke2JvdHRvbUxlZnR9cHg7XFxyXFxuIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAke2JvdHRvbVJpZ2h0fXB4O2A7XG4gIH1cblxuICBmdW5jdGlvbiBjbGlwVGV4dCgpIHtcbiAgICAkdGV4dENzcy5zZWxlY3QoKTtcbiAgICAkdGV4dENzcy5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5OSk7IC8qRm9yIG1vYmlsZSBkZXZpY2VzKi9cbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gIH1cblxuICAkY2xpcEJvYXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNsaXBUZXh0KCk7XG4gIH0pO1xuXG4gICR0b3BMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG4gICAgdG9wTGVmdFZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0Qm9yZGVyUmFkaXVzKFxuICAgICAgdG9wTGVmdFZhbHVlLFxuICAgICAgdG9wUmlnaHRWYWx1ZSxcbiAgICAgIGJvdHRvbUxlZnRWYWx1ZSxcbiAgICAgIGJvdHRvbVJpZ2h0VmFsdWVcbiAgICApO1xuICB9KTtcbiAgJHRvcFJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG4gICAgdG9wUmlnaHRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldEJvcmRlclJhZGl1cyhcbiAgICAgIHRvcExlZnRWYWx1ZSxcbiAgICAgIHRvcFJpZ2h0VmFsdWUsXG4gICAgICBib3R0b21MZWZ0VmFsdWUsXG4gICAgICBib3R0b21SaWdodFZhbHVlXG4gICAgKTtcbiAgfSk7XG4gICRib3R0b21MZWZ0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG4gICAgYm90dG9tTGVmdFZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0Qm9yZGVyUmFkaXVzKFxuICAgICAgdG9wTGVmdFZhbHVlLFxuICAgICAgdG9wUmlnaHRWYWx1ZSxcbiAgICAgIGJvdHRvbUxlZnRWYWx1ZSxcbiAgICAgIGJvdHRvbVJpZ2h0VmFsdWVcbiAgICApO1xuICB9KTtcbiAgJGJvdHRvbVJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG4gICAgYm90dG9tUmlnaHRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldEJvcmRlclJhZGl1cyhcbiAgICAgIHRvcExlZnRWYWx1ZSxcbiAgICAgIHRvcFJpZ2h0VmFsdWUsXG4gICAgICBib3R0b21MZWZ0VmFsdWUsXG4gICAgICBib3R0b21SaWdodFZhbHVlXG4gICAgKTtcbiAgfSk7XG59KSh3aW5kb3csIGRvY3VtZW50KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/js/script.js\n");

/***/ })

/******/ });