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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Resto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! numeral */ \"./node_modules/numeral/numeral.js\");\n/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazy-load-image-component */ \"./node_modules/react-lazy-load-image-component/build/index.js\");\n/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var case_anything__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! case-anything */ \"./node_modules/case-anything/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/juji/works/chefskingdom-menu/components/Resto.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nif ((numeral__WEBPACK_IMPORTED_MODULE_2___default().locales.id) === undefined) {\n  numeral__WEBPACK_IMPORTED_MODULE_2___default().register('locale', 'id', {\n    delimiters: {\n      thousands: '.',\n      decimal: ','\n    },\n    currency: {\n      symbol: 'IDR'\n    }\n  });\n}\n\nnumeral__WEBPACK_IMPORTED_MODULE_2___default().locale('id');\n\nfunction MenuItem(_ref) {\n  var item = _ref.item;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"menu-item\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"item-image\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"item-desc\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"item-name\",\n        children: (0,case_anything__WEBPACK_IMPORTED_MODULE_4__.capitalCase)(item.food)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"item-price\",\n        children: numeral__WEBPACK_IMPORTED_MODULE_2___default()(item.price || 0).format('$ 0,0')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 10\n  }, this);\n}\n\n_c = MenuItem;\n\nfunction MenuCategory(_ref2) {\n  var _this = this;\n\n  var name = _ref2.name,\n      menu = _ref2.menu,\n      restoName = _ref2.restoName;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"category\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: (0,case_anything__WEBPACK_IMPORTED_MODULE_4__.capitalCase)(name)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }, this), menu.map(function (item, idx) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n        item: item\n      }, \"\".concat(restoName, \"-\").concat(name, \"-\").concat(idx), false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 30\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 10\n  }, this);\n}\n\n_c2 = MenuCategory;\nfunction Resto(_ref3) {\n  _s();\n\n  var _this2 = this;\n\n  var data = _ref3.data;\n  var cats = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {\n    return Object.keys(data.menu);\n  }, [data]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"resto\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: data.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }, this), cats.map(function (category) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuCategory, {\n        restoName: data.name,\n        name: category,\n        menu: data.menu[category]\n      }, \"\".concat(data.name, \"-\").concat(category), false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 28\n      }, _this2);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Resto, \"XsJyL0kUv3V/ywi13ikNTL8BIIw=\");\n\n_c3 = Resto;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"MenuItem\");\n$RefreshReg$(_c2, \"MenuCategory\");\n$RefreshReg$(_c3, \"Resto\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN0by5qcz9iODcyIl0sIm5hbWVzIjpbIm51bWVyYWwiLCJ1bmRlZmluZWQiLCJkZWxpbWl0ZXJzIiwidGhvdXNhbmRzIiwiZGVjaW1hbCIsImN1cnJlbmN5Iiwic3ltYm9sIiwiTWVudUl0ZW0iLCJpdGVtIiwiY2FwaXRhbENhc2UiLCJmb29kIiwicHJpY2UiLCJmb3JtYXQiLCJNZW51Q2F0ZWdvcnkiLCJuYW1lIiwibWVudSIsInJlc3RvTmFtZSIsIm1hcCIsImlkeCIsIlJlc3RvIiwiZGF0YSIsImNhdHMiLCJ1c2VNZW1vIiwiT2JqZWN0Iiwia2V5cyIsImNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUEsMkRBQUEsS0FBMEJDLFNBQTlCLEVBQXlDO0FBQ3ZDRCx5REFBQSxDQUFpQixRQUFqQixFQUEyQixJQUEzQixFQUFpQztBQUM3QkUsY0FBVSxFQUFFO0FBQ1JDLGVBQVMsRUFBRSxHQURIO0FBRVJDLGFBQU8sRUFBRTtBQUZELEtBRGlCO0FBSzdCQyxZQUFRLEVBQUU7QUFDTkMsWUFBTSxFQUFFO0FBREY7QUFMbUIsR0FBakM7QUFTRDs7QUFHRE4scURBQUEsQ0FBZSxJQUFmOztBQUlBLFNBQVNPLFFBQVQsT0FBMkI7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFFekIsc0JBQU87QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNMO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLGVBTUw7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQyxXQUFiO0FBQUEsa0JBQTBCQywwREFBVyxDQUFDRCxJQUFJLENBQUNFLElBQU47QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBRyxpQkFBUyxFQUFDLFlBQWI7QUFBQSxrQkFBMkJWLDhDQUFPLENBQUNRLElBQUksQ0FBQ0csS0FBTCxJQUFZLENBQWIsQ0FBUCxDQUF1QkMsTUFBdkIsQ0FBOEIsT0FBOUI7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5LO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBWUQ7O0tBZFFMLFE7O0FBZ0JULFNBQVNNLFlBQVQsUUFBZ0Q7QUFBQTs7QUFBQSxNQUF4QkMsSUFBd0IsU0FBeEJBLElBQXdCO0FBQUEsTUFBbEJDLElBQWtCLFNBQWxCQSxJQUFrQjtBQUFBLE1BQVpDLFNBQVksU0FBWkEsU0FBWTtBQUU5QyxzQkFBTztBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUEsNEJBQ0w7QUFBQSxnQkFBS1AsMERBQVcsQ0FBQ0ssSUFBRDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssRUFFSEMsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ1QsSUFBRCxFQUFNVSxHQUFOO0FBQUEsMEJBQWMsOERBQUMsUUFBRDtBQUV2QixZQUFJLEVBQUVWO0FBRmlCLG1CQUNmUSxTQURlLGNBQ0ZGLElBREUsY0FDTUksR0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWQ7QUFBQSxLQUFULENBRkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFRRDs7TUFWUUwsWTtBQVlNLFNBQVNNLEtBQVQsUUFBd0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFQQyxJQUFPLFNBQVBBLElBQU87QUFFckMsTUFBTUMsSUFBSSxHQUFHQyw4Q0FBTyxDQUFDLFlBQU07QUFDekIsV0FBT0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLElBQUksQ0FBQ0wsSUFBakIsQ0FBUDtBQUNELEdBRm1CLEVBRWpCLENBQUNLLElBQUQsQ0FGaUIsQ0FBcEI7QUFJQSxzQkFBTztBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUEsNEJBQ0w7QUFBQSxnQkFBS0EsSUFBSSxDQUFDTjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESyxFQUdITyxJQUFJLENBQUNKLEdBQUwsQ0FBUyxVQUFBUSxRQUFRO0FBQUEsMEJBQUksOERBQUMsWUFBRDtBQUVyQixpQkFBUyxFQUFFTCxJQUFJLENBQUNOLElBRks7QUFHckIsWUFBSSxFQUFFVyxRQUhlO0FBSXJCLFlBQUksRUFBRUwsSUFBSSxDQUFDTCxJQUFMLENBQVVVLFFBQVY7QUFKZSxtQkFDYkwsSUFBSSxDQUFDTixJQURRLGNBQ0FXLFFBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBSjtBQUFBLEtBQWpCLENBSEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFZRDs7R0FsQnVCTixLOztNQUFBQSxLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXN0by5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgbnVtZXJhbCAgZnJvbSAnbnVtZXJhbCdcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcbmltcG9ydCB7IHVwcGVyQ2FzZSwgbG93ZXJDYXNlLCBjYXBpdGFsQ2FzZSB9IGZyb20gJ2Nhc2UtYW55dGhpbmcnXG5cbmlmIChudW1lcmFsLmxvY2FsZXNbJ2lkJ10gPT09IHVuZGVmaW5lZCkge1xuICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnaWQnLCB7XG4gICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgdGhvdXNhbmRzOiAnLicsXG4gICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICB9LFxuICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICBzeW1ib2w6ICdJRFInXG4gICAgICB9XG4gIH0pO1xufVxuXG5cbm51bWVyYWwubG9jYWxlKCdpZCcpXG5cblxuXG5mdW5jdGlvbiBNZW51SXRlbSh7IGl0ZW0gfSl7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWltYWdlXCI+XG4gICAgICA8ZGl2PiAgXG4gICAgICAgIHsvKiA8aW1nIHNyYz17aXRlbS5pbWFnZVVybH0gLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tZGVzY1wiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiaXRlbS1uYW1lXCI+e2NhcGl0YWxDYXNlKGl0ZW0uZm9vZCl9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiaXRlbS1wcmljZVwiPntudW1lcmFsKGl0ZW0ucHJpY2V8fDApLmZvcm1hdCgnJCAwLDAnKX08L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG59XG5cbmZ1bmN0aW9uIE1lbnVDYXRlZ29yeSh7IG5hbWUsIG1lbnUsIHJlc3RvTmFtZSB9KXtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPlxuICAgIDxoMz57Y2FwaXRhbENhc2UobmFtZSl9PC9oMz5cbiAgICB7IG1lbnUubWFwKChpdGVtLGlkeCkgPT4gPE1lbnVJdGVtXG4gICAgICBrZXk9e2Ake3Jlc3RvTmFtZX0tJHtuYW1lfS0ke2lkeH1gfVxuICAgICAgaXRlbT17aXRlbX1cbiAgICAvPikgfVxuICA8L2Rpdj5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN0byh7IGRhdGEgfSl7XG5cbiAgY29uc3QgY2F0cyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhLm1lbnUpXG4gIH0sIFtkYXRhXSlcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJyZXN0b1wiPlxuICAgIDxoMj57ZGF0YS5uYW1lfTwvaDI+XG5cbiAgICB7IGNhdHMubWFwKGNhdGVnb3J5ID0+IDxNZW51Q2F0ZWdvcnlcbiAgICAgIGtleT17YCR7ZGF0YS5uYW1lfS0ke2NhdGVnb3J5fWB9XG4gICAgICByZXN0b05hbWU9e2RhdGEubmFtZX1cbiAgICAgIG5hbWU9e2NhdGVnb3J5fVxuICAgICAgbWVudT17ZGF0YS5tZW51W2NhdGVnb3J5XX0gIC8+KVxuICAgIH1cblxuICA8L2Rpdj5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Resto.js\n");

/***/ })

});