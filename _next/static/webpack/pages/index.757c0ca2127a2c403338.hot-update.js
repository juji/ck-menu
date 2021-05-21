/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Resto.js":
/*!*****************************!*\
  !*** ./components/Resto.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Resto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! numeral */ \"./node_modules/numeral/numeral.js\");\n/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/juji/works/chefskingdom-menu/components/Resto.js\",\n    _s = $RefreshSig$();\n\n\n\nnumeral__WEBPACK_IMPORTED_MODULE_2___default().register('locale', 'id', {\n  delimiters: {\n    thousands: '.',\n    decimal: ','\n  },\n  currency: {\n    symbol: 'IDR'\n  }\n});\nnumeral__WEBPACK_IMPORTED_MODULE_2___default().locale('id');\n\nfunction MenuItem(_ref) {\n  var item = _ref.item;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"menu-item\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"item-image\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: item.imageUrl\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"item-desc\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"item-name\",\n        children: item.food\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"item-price\",\n        children: numeral__WEBPACK_IMPORTED_MODULE_2___default()(item.price).format('$0,0')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 10\n  }, this);\n}\n\n_c = MenuItem;\n\nfunction MenuCategory(_ref2) {\n  var _this = this;\n\n  var name = _ref2.name,\n      menu = _ref2.menu,\n      restoName = _ref2.restoName;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"category\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }, this), menu.map(function (item, idx) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n        item: item\n      }, \"\".concat(restoName, \"-\").concat(name, \"-\").concat(idx), false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 30\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 10\n  }, this);\n}\n\n_c2 = MenuCategory;\nfunction Resto(_ref3) {\n  _s();\n\n  var _this2 = this;\n\n  var data = _ref3.data;\n  var cats = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {\n    return Object.keys(data.menu);\n  }, [data]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"resto\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: data.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }, this), cats.map(function (category) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuCategory, {\n        restoName: data.name,\n        name: category,\n        menu: data.menu[category]\n      }, \"\".concat(data.name, \"-\").concat(category), false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 28\n      }, _this2);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Resto, \"XsJyL0kUv3V/ywi13ikNTL8BIIw=\");\n\n_c3 = Resto;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"MenuItem\");\n$RefreshReg$(_c2, \"MenuCategory\");\n$RefreshReg$(_c3, \"Resto\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN0by5qcz9iODcyIl0sIm5hbWVzIjpbIm51bWVyYWwiLCJkZWxpbWl0ZXJzIiwidGhvdXNhbmRzIiwiZGVjaW1hbCIsImN1cnJlbmN5Iiwic3ltYm9sIiwiTWVudUl0ZW0iLCJpdGVtIiwiaW1hZ2VVcmwiLCJmb29kIiwicHJpY2UiLCJmb3JtYXQiLCJNZW51Q2F0ZWdvcnkiLCJuYW1lIiwibWVudSIsInJlc3RvTmFtZSIsIm1hcCIsImlkeCIsIlJlc3RvIiwiZGF0YSIsImNhdHMiLCJ1c2VNZW1vIiwiT2JqZWN0Iiwia2V5cyIsImNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBQSx1REFBQSxDQUFpQixRQUFqQixFQUEyQixJQUEzQixFQUFpQztBQUM3QkMsWUFBVSxFQUFFO0FBQ1JDLGFBQVMsRUFBRSxHQURIO0FBRVJDLFdBQU8sRUFBRTtBQUZELEdBRGlCO0FBSzdCQyxVQUFRLEVBQUU7QUFDTkMsVUFBTSxFQUFFO0FBREY7QUFMbUIsQ0FBakM7QUFVQUwscURBQUEsQ0FBZSxJQUFmOztBQUVBLFNBQVNNLFFBQVQsT0FBMkI7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFFekIsc0JBQU87QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNMO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRUEsSUFBSSxDQUFDQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssZUFJTDtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBRyxpQkFBUyxFQUFDLFdBQWI7QUFBQSxrQkFBMEJELElBQUksQ0FBQ0U7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBRyxpQkFBUyxFQUFDLFlBQWI7QUFBQSxrQkFBMkJULDhDQUFPLENBQUNPLElBQUksQ0FBQ0csS0FBTixDQUFQLENBQW9CQyxNQUFwQixDQUEyQixNQUEzQjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFVRDs7S0FaUUwsUTs7QUFjVCxTQUFTTSxZQUFULFFBQWdEO0FBQUE7O0FBQUEsTUFBeEJDLElBQXdCLFNBQXhCQSxJQUF3QjtBQUFBLE1BQWxCQyxJQUFrQixTQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxTQUFZLFNBQVpBLFNBQVk7QUFFOUMsc0JBQU87QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBLDRCQUNMO0FBQUEsZ0JBQUtGO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLEVBRUhDLElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNULElBQUQsRUFBTVUsR0FBTjtBQUFBLDBCQUFjLDhEQUFDLFFBQUQ7QUFFdkIsWUFBSSxFQUFFVjtBQUZpQixtQkFDZlEsU0FEZSxjQUNGRixJQURFLGNBQ01JLEdBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFkO0FBQUEsS0FBVCxDQUZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBUUQ7O01BVlFMLFk7QUFZTSxTQUFTTSxLQUFULFFBQXdCO0FBQUE7O0FBQUE7O0FBQUEsTUFBUEMsSUFBTyxTQUFQQSxJQUFPO0FBRXJDLE1BQU1DLElBQUksR0FBR0MsOENBQU8sQ0FBQyxZQUFNO0FBQ3pCLFdBQU9DLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixJQUFJLENBQUNMLElBQWpCLENBQVA7QUFDRCxHQUZtQixFQUVqQixDQUFDSyxJQUFELENBRmlCLENBQXBCO0FBSUEsc0JBQU87QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBLDRCQUNMO0FBQUEsZ0JBQUtBLElBQUksQ0FBQ047QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssRUFHSE8sSUFBSSxDQUFDSixHQUFMLENBQVMsVUFBQVEsUUFBUTtBQUFBLDBCQUFJLDhEQUFDLFlBQUQ7QUFFckIsaUJBQVMsRUFBRUwsSUFBSSxDQUFDTixJQUZLO0FBR3JCLFlBQUksRUFBRVcsUUFIZTtBQUlyQixZQUFJLEVBQUVMLElBQUksQ0FBQ0wsSUFBTCxDQUFVVSxRQUFWO0FBSmUsbUJBQ2JMLElBQUksQ0FBQ04sSUFEUSxjQUNBVyxRQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUo7QUFBQSxLQUFqQixDQUhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBWUQ7O0dBbEJ1Qk4sSzs7TUFBQUEsSyIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmVzdG8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG51bWVyYWwgIGZyb20gJ251bWVyYWwnXG5cbm51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdpZCcsIHtcbiAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICB9LFxuICAgIGN1cnJlbmN5OiB7XG4gICAgICAgIHN5bWJvbDogJ0lEUidcbiAgICB9XG59KTtcblxubnVtZXJhbC5sb2NhbGUoJ2lkJylcblxuZnVuY3Rpb24gTWVudUl0ZW0oeyBpdGVtIH0pe1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1pbWFnZVwiPlxuICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2VVcmx9IC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWRlc2NcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIml0ZW0tbmFtZVwiPntpdGVtLmZvb2R9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiaXRlbS1wcmljZVwiPntudW1lcmFsKGl0ZW0ucHJpY2UpLmZvcm1hdCgnJDAsMCcpfTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbn1cblxuZnVuY3Rpb24gTWVudUNhdGVnb3J5KHsgbmFtZSwgbWVudSwgcmVzdG9OYW1lIH0pe1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+XG4gICAgPGgyPntuYW1lfTwvaDI+XG4gICAgeyBtZW51Lm1hcCgoaXRlbSxpZHgpID0+IDxNZW51SXRlbVxuICAgICAga2V5PXtgJHtyZXN0b05hbWV9LSR7bmFtZX0tJHtpZHh9YH1cbiAgICAgIGl0ZW09e2l0ZW19XG4gICAgLz4pIH1cbiAgPC9kaXY+XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdG8oeyBkYXRhIH0pe1xuXG4gIGNvbnN0IGNhdHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YS5tZW51KVxuICB9LCBbZGF0YV0pXG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicmVzdG9cIj5cbiAgICA8aDE+e2RhdGEubmFtZX08L2gxPlxuXG4gICAgeyBjYXRzLm1hcChjYXRlZ29yeSA9PiA8TWVudUNhdGVnb3J5XG4gICAgICBrZXk9e2Ake2RhdGEubmFtZX0tJHtjYXRlZ29yeX1gfVxuICAgICAgcmVzdG9OYW1lPXtkYXRhLm5hbWV9XG4gICAgICBuYW1lPXtjYXRlZ29yeX1cbiAgICAgIG1lbnU9e2RhdGEubWVudVtjYXRlZ29yeV19ICAvPilcbiAgICB9XG5cbiAgPC9kaXY+XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Resto.js\n");

/***/ })

});