webpackJsonp([1],{

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function () {
  var element = document.createElement('button');

  element.className = 'pure-button';
  element.innerHTML = 'Hello World';
  element.onclick = function () {
    __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 36)).then(function (lazy) {
      element.textContent = lazy.default;
    }).catch(function (err) {
      console.log(err);
    });
  };

  // using require.ensure
  // element.onclick = () => {
  //   require.ensure([], require => {
  //     element.textContent = require('./lazy').default;
  //   });
  // };

  return element;
};

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_purecss__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_purecss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_purecss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_css__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component__ = __webpack_require__(19);





var demoComponent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__component__["a" /* default */])();

document.body.appendChild(demoComponent);

if (false) {
  module.hot.accept('./component', function () {
    var nextComponent = require('./component').default();

    document.body.replaceChild(nextComponent, demoComponent);
    demoComponent = nextComponent;
  });
}

/***/ })

},[34]);
//# sourceMappingURL=app.js.map