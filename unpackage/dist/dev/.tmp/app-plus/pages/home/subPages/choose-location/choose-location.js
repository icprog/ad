(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/home/subPages/choose-location/choose-location"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\subPages\\choose-location\\choose-location.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/我的文档/Documents/HBuilderProjects/ad/pages/home/subPages/choose-location/choose-location.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
var _default =
{
  name: '',
  data: function data() {
    return {};


  },
  onReady: function onReady() {
    setTimeout(function () {
      uni.chooseLocation({
        success: function success(res) {
          console.log('位置名称：' + res.name, " at pages\\home\\subPages\\choose-location\\choose-location.vue:17");
          console.log('详细地址：' + res.address, " at pages\\home\\subPages\\choose-location\\choose-location.vue:18");
          console.log('纬度：' + res.latitude, " at pages\\home\\subPages\\choose-location\\choose-location.vue:19");
          console.log('经度：' + res.longitude, " at pages\\home\\subPages\\choose-location\\choose-location.vue:20");
        } });

    }, 100);

  },
  methods: {} };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\subPages\\choose-location\\choose-location.vue?vue&type=template&id=02493dfb&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/我的文档/Documents/HBuilderProjects/ad/pages/home/subPages/choose-location/choose-location.vue?vue&type=template&id=02493dfb&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\subPages\\choose-location\\choose-location.vue":
/*!*****************************************************************************************************!*\
  !*** D:/我的文档/Documents/HBuilderProjects/ad/pages/home/subPages/choose-location/choose-location.vue ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _choose_location_vue_vue_type_template_id_02493dfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-location.vue?vue&type=template&id=02493dfb&scoped=true& */ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\subPages\\choose-location\\choose-location.vue?vue&type=template&id=02493dfb&scoped=true&");
/* harmony import */ var _choose_location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choose-location.vue?vue&type=script&lang=js& */ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\subPages\\choose-location\\choose-location.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _choose_location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _choose_location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _choose_location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _choose_location_vue_vue_type_template_id_02493dfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _choose_location_vue_vue_type_template_id_02493dfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "02493dfb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "D:/我的文档/Documents/HBuilderProjects/ad/pages/home/subPages/choose-location/choose-location.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\subPages\\choose-location\\choose-location.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** D:/我的文档/Documents/HBuilderProjects/ad/pages/home/subPages/choose-location/choose-location.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_choose_location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./choose-location.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\subPages\\choose-location\\choose-location.vue?vue&type=script&lang=js&");
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_choose_location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_choose_location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_choose_location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_choose_location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_choose_location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\subPages\\choose-location\\choose-location.vue?vue&type=template&id=02493dfb&scoped=true&":
/*!************************************************************************************************************************************************!*\
  !*** D:/我的文档/Documents/HBuilderProjects/ad/pages/home/subPages/choose-location/choose-location.vue?vue&type=template&id=02493dfb&scoped=true& ***!
  \************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_choose_location_vue_vue_type_template_id_02493dfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./choose-location.vue?vue&type=template&id=02493dfb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\subPages\\choose-location\\choose-location.vue?vue&type=template&id=02493dfb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_choose_location_vue_vue_type_template_id_02493dfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_choose_location_vue_vue_type_template_id_02493dfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["D:\\我的文档\\Documents\\HBuilderProjects\\ad\\main.js?{\"page\":\"pages%2Fhome%2FsubPages%2Fchoose-location%2Fchoose-location\"}","common/runtime","common/vendor"]]]);