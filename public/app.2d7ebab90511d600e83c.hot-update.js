webpackHotUpdate("app",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ \"./node_modules/core-js/library/fn/date/now.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL2RhdGUvbm93LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9kYXRlL25vdy5qcz8wYTBkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9kYXRlL25vd1wiKTsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime-corejs2/core-js/date/now.js\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Dashboard/components/FoodTime.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Dashboard/components/FoodTime.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_LorenaMeyasdosSantos_Documents_GitHub_SmartFeederApp_FrontEnd_node_modules_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/core-js/date/now */ \"./node_modules/@babel/runtime-corejs2/core-js/date/now.js\");\n/* harmony import */ var C_Users_LorenaMeyasdosSantos_Documents_GitHub_SmartFeederApp_FrontEnd_node_modules_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_LorenaMeyasdosSantos_Documents_GitHub_SmartFeederApp_FrontEnd_node_modules_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var C_Users_LorenaMeyasdosSantos_Documents_GitHub_SmartFeederApp_FrontEnd_node_modules_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      dialog: false,\n      headers: [{\n        text: '',\n        sortable: false\n      }, {\n        text: 'Horário',\n        value: 'time',\n        sortable: false\n      }, {\n        text: 'Porção (g)',\n        value: 'quantity',\n        sortable: false\n      }],\n      meals: [],\n      editedIndex: -1,\n      itsTime: ''\n    };\n  },\n  computed: Object(C_Users_LorenaMeyasdosSantos_Documents_GitHub_SmartFeederApp_FrontEnd_node_modules_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__[\"mapGetters\"])(['serverUrl', 'userInformation'])),\n  mounted: function mounted() {\n    var _this = this;\n\n    if (this.userInformation === '') {\n      this.$router.push('/');\n    } else {\n      var time = new Date(C_Users_LorenaMeyasdosSantos_Documents_GitHub_SmartFeederApp_FrontEnd_node_modules_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()());\n      var minutes = '';\n      minutes = minutes.substring(minutes.length - 3, minutes.length - 1);\n      this.itsTime = \"\".concat(time.getHours()).concat(minutes);\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"\".concat(this.serverUrl, \"device/retrieve\"), {\n        userEmail: this.userInformation\n      }).then(function (res) {\n        _this.meals = res.data.meal_information;\n        console.log(_this.meals);\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvdmlld3MvRGFzaGJvYXJkL2NvbXBvbmVudHMvRm9vZFRpbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Gb29kVGltZS52dWU/NjRmZiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx2LWNhcmQgd2lkdGg9XCI4MDBweFwiPlxuICAgIDx2LXRvb2xiYXIgZmxhdCBjb2xvcj1cIndoaXRlXCI+XG4gICAgICA8di10b29sYmFyLXRpdGxlPlJlZmVpw6fDtWVzIFByb2dyYW1hZGFzPC92LXRvb2xiYXItdGl0bGU+XG4gICAgPC92LXRvb2xiYXI+XG4gICAgPHYtZGF0YS10YWJsZSA6aGVhZGVycz1cImhlYWRlcnNcIiA6aXRlbXM9XCJtZWFsc1wiIGNsYXNzPVwiZWxldmF0aW9uLTFcIj5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbXM9XCJwcm9wc1wiPlxuICAgICAgICA8dGQgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciBwbC01XCI+XG4gICAgICAgICAgPGltZyB2LWlmPVwiTnVtYmVyKGl0c1RpbWUpID49IE51bWJlcihwcm9wcy5pdGVtLnRpbWUucmVwbGFjZSgnOicsICcnKSlcIiBzcmM9XCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Zvb2RfdGltZS9ib25lX2dyZWVuLnBuZ1wiIGFsdD1cInVjY19wYXltZW50XCI+XG4gICAgICAgICAgPHA+e3sgTnVtYmVyKGl0c1RpbWUpIH19PC9wPlxuICAgICAgICAgIDxwPnt7IHR5cGVvZihOdW1iZXIoaXRzVGltZSkpIH19PC9wPlxuICAgICAgICAgIDxwPnt7IE51bWJlcihwcm9wcy5pdGVtLnRpbWUucmVwbGFjZSgnOicsICcnKSkgfX08L3A+XG4gICAgICAgICAgPHA+e3sgdHlwZW9mKE51bWJlcihwcm9wcy5pdGVtLnRpbWUucmVwbGFjZSgnOicsICcnKSkpIH19PC9wPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWxlZnRcIj57eyBwcm9wcy5pdGVtLnRpbWUgfX08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWxlZnRcIj57eyBwcm9wcy5pdGVtLnF1YW50aXR5IH19PC90ZD5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90Om5vLXJlc3VsdHM+XG4gICAgICAgIDx2LWFsZXJ0IDp2YWx1ZT1cInRydWVcIiBjb2xvcj1cImVycm9yXCIgaWNvbj1cIndhcm5pbmdcIj5cbiAgICAgICAgICBObyBkYXRhIGF2YWlsYWJsZS5cbiAgICAgICAgPC92LWFsZXJ0PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3YtZGF0YS10YWJsZT5cbiAgPC92LWNhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhOiAoKSA9PiAoe1xuICAgIGRpYWxvZzogZmFsc2UsXG4gICAgaGVhZGVyczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHsgdGV4dDogJ0hvcsOhcmlvJywgdmFsdWU6ICd0aW1lJywgc29ydGFibGU6IGZhbHNlIH0sXG4gICAgICB7IHRleHQ6ICdQb3LDp8OjbyAoZyknLCB2YWx1ZTogJ3F1YW50aXR5Jywgc29ydGFibGU6IGZhbHNlIH0sXG4gICAgXSxcbiAgICBtZWFsczogW10sXG4gICAgZWRpdGVkSW5kZXg6IC0xLFxuICAgIGl0c1RpbWU6ICcnLFxuICB9KSxcblxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoW1xuICAgICAgJ3NlcnZlclVybCcsICd1c2VySW5mb3JtYXRpb24nLFxuICAgIF0pLFxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgaWYgKHRoaXMudXNlckluZm9ybWF0aW9uID09PSAnJykge1xuICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKERhdGUubm93KCkpO1xuICAgICAgbGV0IG1pbnV0ZXMgPSAnJztcbiAgICAgIG1pbnV0ZXMgPSBtaW51dGVzLnN1YnN0cmluZyhtaW51dGVzLmxlbmd0aCAtIDMsIG1pbnV0ZXMubGVuZ3RoIC0gMSk7XG4gICAgICB0aGlzLml0c1RpbWUgPSBgJHt0aW1lLmdldEhvdXJzKCl9JHttaW51dGVzfWA7XG5cbiAgICAgIGF4aW9zLnBvc3QoYCR7dGhpcy5zZXJ2ZXJVcmx9ZGV2aWNlL3JldHJpZXZlYCwgeyB1c2VyRW1haWw6IHRoaXMudXNlckluZm9ybWF0aW9uIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLm1lYWxzID0gcmVzLmRhdGEubWVhbF9pbmZvcm1hdGlvbjtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tZWFscyk7XG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG48c3R5bGU+XG48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFaQTtBQUFBO0FBZUE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Dashboard/components/FoodTime.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/core-js/library/fn/date/now.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/library/fn/date/now.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.date.now */ \"./node_modules/core-js/library/modules/es6.date.now.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Date.now;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2RhdGUvbm93LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9kYXRlL25vdy5qcz9lODI5Il0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmRhdGUubm93Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5EYXRlLm5vdztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/core-js/library/fn/date/now.js\n");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.date.now.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.date.now.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.3.3.1 / 15.9.4.4 Date.now()\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n\n$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmRhdGUubm93LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5kYXRlLm5vdy5qcz8yZjM3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIDIwLjMuMy4xIC8gMTUuOS40LjQgRGF0ZS5ub3coKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdEYXRlJywgeyBub3c6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpOyB9IH0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/core-js/library/modules/es6.date.now.js\n");

/***/ })

})