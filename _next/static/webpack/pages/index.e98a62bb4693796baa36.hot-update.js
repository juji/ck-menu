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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Resto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! numeral */ \"./node_modules/numeral/numeral.js\");\n/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazy-load-image-component */ \"./node_modules/react-lazy-load-image-component/build/index.js\");\n/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var case_anything__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! case-anything */ \"./node_modules/case-anything/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/juji/works/chefskingdom-menu/components/Resto.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nif ((numeral__WEBPACK_IMPORTED_MODULE_2___default().locales.id) === undefined) {\n  numeral__WEBPACK_IMPORTED_MODULE_2___default().register('locale', 'id', {\n    delimiters: {\n      thousands: '.',\n      decimal: ','\n    },\n    currency: {\n      symbol: 'IDR'\n    }\n  });\n}\n\nnumeral__WEBPACK_IMPORTED_MODULE_2___default().locale('id');\n\nfunction MenuItem(_ref) {\n  var item = _ref.item;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"menu-item\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"item-image\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"item-desc\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"item-name\",\n        children: (0,case_anything__WEBPACK_IMPORTED_MODULE_4__.capitalCase)(item.food)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"item-price\",\n        children: numeral__WEBPACK_IMPORTED_MODULE_2___default()(item.price || 0).format('$ 0,0')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 10\n  }, this);\n}\n\n_c = MenuItem;\n\nfunction MenuCategory(_ref2) {\n  var _this = this;\n\n  var name = _ref2.name,\n      menu = _ref2.menu,\n      restoName = _ref2.restoName;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"category\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: (0,case_anything__WEBPACK_IMPORTED_MODULE_4__.capitalCase)(name)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }, this), menu.map(function (item, idx) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n        item: item\n      }, \"\".concat(restoName, \"-\").concat(name, \"-\").concat(idx), false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 30\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 10\n  }, this);\n}\n\n_c2 = MenuCategory;\nfunction Resto(_ref3) {\n  _s();\n\n  var _this2 = this;\n\n  var data = _ref3.data;\n  var cats = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {\n    return Object.keys(data.menu);\n  }, [data]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"resto\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: data.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }, this), cats.map(function (category) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuCategory, {\n        restoName: data.name,\n        name: category,\n        menu: data.menu[category]\n      }, \"\".concat(data.name, \"-\").concat(category), false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 28\n      }, _this2);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Resto, \"XsJyL0kUv3V/ywi13ikNTL8BIIw=\");\n\n_c3 = Resto;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"MenuItem\");\n$RefreshReg$(_c2, \"MenuCategory\");\n$RefreshReg$(_c3, \"Resto\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN0by5qcz9iODcyIl0sIm5hbWVzIjpbIm51bWVyYWwiLCJ1bmRlZmluZWQiLCJkZWxpbWl0ZXJzIiwidGhvdXNhbmRzIiwiZGVjaW1hbCIsImN1cnJlbmN5Iiwic3ltYm9sIiwiTWVudUl0ZW0iLCJpdGVtIiwiY2FwaXRhbENhc2UiLCJmb29kIiwicHJpY2UiLCJmb3JtYXQiLCJNZW51Q2F0ZWdvcnkiLCJuYW1lIiwibWVudSIsInJlc3RvTmFtZSIsIm1hcCIsImlkeCIsIlJlc3RvIiwiZGF0YSIsImNhdHMiLCJ1c2VNZW1vIiwiT2JqZWN0Iiwia2V5cyIsImNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUEsMkRBQUEsS0FBMEJDLFNBQTlCLEVBQXlDO0FBQ3ZDRCx5REFBQSxDQUFpQixRQUFqQixFQUEyQixJQUEzQixFQUFpQztBQUM3QkUsY0FBVSxFQUFFO0FBQ1JDLGVBQVMsRUFBRSxHQURIO0FBRVJDLGFBQU8sRUFBRTtBQUZELEtBRGlCO0FBSzdCQyxZQUFRLEVBQUU7QUFDTkMsWUFBTSxFQUFFO0FBREY7QUFMbUIsR0FBakM7QUFTRDs7QUFHRE4scURBQUEsQ0FBZSxJQUFmOztBQUlBLFNBQVNPLFFBQVQsT0FBMkI7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFFekIsc0JBQU87QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNMO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLGVBSUw7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQyxXQUFiO0FBQUEsa0JBQTBCQywwREFBVyxDQUFDRCxJQUFJLENBQUNFLElBQU47QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBRyxpQkFBUyxFQUFDLFlBQWI7QUFBQSxrQkFBMkJWLDhDQUFPLENBQUNRLElBQUksQ0FBQ0csS0FBTCxJQUFZLENBQWIsQ0FBUCxDQUF1QkMsTUFBdkIsQ0FBOEIsT0FBOUI7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBVUQ7O0tBWlFMLFE7O0FBY1QsU0FBU00sWUFBVCxRQUFnRDtBQUFBOztBQUFBLE1BQXhCQyxJQUF3QixTQUF4QkEsSUFBd0I7QUFBQSxNQUFsQkMsSUFBa0IsU0FBbEJBLElBQWtCO0FBQUEsTUFBWkMsU0FBWSxTQUFaQSxTQUFZO0FBRTlDLHNCQUFPO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQSw0QkFDTDtBQUFBLGdCQUFLUCwwREFBVyxDQUFDSyxJQUFEO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESyxFQUVIQyxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDVCxJQUFELEVBQU1VLEdBQU47QUFBQSwwQkFBYyw4REFBQyxRQUFEO0FBRXZCLFlBQUksRUFBRVY7QUFGaUIsbUJBQ2ZRLFNBRGUsY0FDRkYsSUFERSxjQUNNSSxHQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBZDtBQUFBLEtBQVQsQ0FGRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQVFEOztNQVZRTCxZO0FBWU0sU0FBU00sS0FBVCxRQUF3QjtBQUFBOztBQUFBOztBQUFBLE1BQVBDLElBQU8sU0FBUEEsSUFBTztBQUVyQyxNQUFNQyxJQUFJLEdBQUdDLDhDQUFPLENBQUMsWUFBTTtBQUN6QixXQUFPQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosSUFBSSxDQUFDTCxJQUFqQixDQUFQO0FBQ0QsR0FGbUIsRUFFakIsQ0FBQ0ssSUFBRCxDQUZpQixDQUFwQjtBQUlBLHNCQUFPO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQSw0QkFDTDtBQUFBLGdCQUFLQSxJQUFJLENBQUNOO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLEVBR0hPLElBQUksQ0FBQ0osR0FBTCxDQUFTLFVBQUFRLFFBQVE7QUFBQSwwQkFBSSw4REFBQyxZQUFEO0FBRXJCLGlCQUFTLEVBQUVMLElBQUksQ0FBQ04sSUFGSztBQUdyQixZQUFJLEVBQUVXLFFBSGU7QUFJckIsWUFBSSxFQUFFTCxJQUFJLENBQUNMLElBQUwsQ0FBVVUsUUFBVjtBQUplLG1CQUNiTCxJQUFJLENBQUNOLElBRFEsY0FDQVcsUUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFKO0FBQUEsS0FBakIsQ0FIRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQVlEOztHQWxCdUJOLEs7O01BQUFBLEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jlc3RvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsICBmcm9tICdudW1lcmFsJ1xuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgdXBwZXJDYXNlLCBsb3dlckNhc2UsIGNhcGl0YWxDYXNlIH0gZnJvbSAnY2FzZS1hbnl0aGluZydcblxuaWYgKG51bWVyYWwubG9jYWxlc1snaWQnXSA9PT0gdW5kZWZpbmVkKSB7XG4gIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdpZCcsIHtcbiAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgIH0sXG4gICAgICBjdXJyZW5jeToge1xuICAgICAgICAgIHN5bWJvbDogJ0lEUidcbiAgICAgIH1cbiAgfSk7XG59XG5cblxubnVtZXJhbC5sb2NhbGUoJ2lkJylcblxuXG5cbmZ1bmN0aW9uIE1lbnVJdGVtKHsgaXRlbSB9KXtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0taW1hZ2VcIj5cbiAgICAgIHsvKiA8aW1nIHNyYz17aXRlbS5pbWFnZVVybH0gLz4gKi99XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWRlc2NcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIml0ZW0tbmFtZVwiPntjYXBpdGFsQ2FzZShpdGVtLmZvb2QpfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIml0ZW0tcHJpY2VcIj57bnVtZXJhbChpdGVtLnByaWNlfHwwKS5mb3JtYXQoJyQgMCwwJyl9PC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxufVxuXG5mdW5jdGlvbiBNZW51Q2F0ZWdvcnkoeyBuYW1lLCBtZW51LCByZXN0b05hbWUgfSl7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5cbiAgICA8aDM+e2NhcGl0YWxDYXNlKG5hbWUpfTwvaDM+XG4gICAgeyBtZW51Lm1hcCgoaXRlbSxpZHgpID0+IDxNZW51SXRlbVxuICAgICAga2V5PXtgJHtyZXN0b05hbWV9LSR7bmFtZX0tJHtpZHh9YH1cbiAgICAgIGl0ZW09e2l0ZW19XG4gICAgLz4pIH1cbiAgPC9kaXY+XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdG8oeyBkYXRhIH0pe1xuXG4gIGNvbnN0IGNhdHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YS5tZW51KVxuICB9LCBbZGF0YV0pXG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicmVzdG9cIj5cbiAgICA8aDI+e2RhdGEubmFtZX08L2gyPlxuXG4gICAgeyBjYXRzLm1hcChjYXRlZ29yeSA9PiA8TWVudUNhdGVnb3J5XG4gICAgICBrZXk9e2Ake2RhdGEubmFtZX0tJHtjYXRlZ29yeX1gfVxuICAgICAgcmVzdG9OYW1lPXtkYXRhLm5hbWV9XG4gICAgICBuYW1lPXtjYXRlZ29yeX1cbiAgICAgIG1lbnU9e2RhdGEubWVudVtjYXRlZ29yeV19ICAvPilcbiAgICB9XG5cbiAgPC9kaXY+XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Resto.js\n");

/***/ })

});