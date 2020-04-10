(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/home/index/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\index\\index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/我的文档/Documents/HBuilderProjects/ad/pages/home/index/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





























var _api = __webpack_require__(/*! @/api */ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\api\\index.js");
var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
var _common = __webpack_require__(/*! @/common/js/common */ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\common\\js\\common.js");function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var publishPopup = function publishPopup() {return __webpack_require__.e(/*! import() | components/publish-popup */ "components/publish-popup").then(__webpack_require__.bind(null, /*! @/components/publish-popup */ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\components\\publish-popup.vue"));};var uniFab = function uniFab() {return __webpack_require__.e(/*! import() | components/uni-fab/uni-fab */ "components/uni-fab/uni-fab").then(__webpack_require__.bind(null, /*! @/components/uni-fab/uni-fab.vue */ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\components\\uni-fab\\uni-fab.vue"));};var homeBanner = function homeBanner() {return __webpack_require__.e(/*! import() | components/banner */ "components/banner").then(__webpack_require__.bind(null, /*! @/components/banner */ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\components\\banner.vue"));};var homePublish = function homePublish() {return __webpack_require__.e(/*! import() | pages/home/index/children/publish */ "pages/home/index/children/publish").then(__webpack_require__.bind(null, /*! ./children/publish */ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\index\\children\\publish.vue"));};var homeNotice = function homeNotice() {return __webpack_require__.e(/*! import() | pages/home/index/children/notice */ "pages/home/index/children/notice").then(__webpack_require__.bind(null, /*! ./children/notice */ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\index\\children\\notice.vue"));};var homeExcellent = function homeExcellent() {return __webpack_require__.e(/*! import() | pages/home/index/children/excellent */ "pages/home/index/children/excellent").then(__webpack_require__.bind(null, /*! ./children/excellent */ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\index\\children\\excellent.vue"));};var homePopular = function homePopular() {return __webpack_require__.e(/*! import() | pages/home/index/children/popular */ "pages/home/index/children/popular").then(__webpack_require__.bind(null, /*! ./children/popular */ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\index\\children\\popular.vue"));};var homeDemand = function homeDemand() {return __webpack_require__.e(/*! import() | pages/home/index/children/demand */ "pages/home/index/children/demand").then(__webpack_require__.bind(null, /*! ./children/demand */ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\index\\children\\demand.vue"));};
var bitmap = null;
var view = null;var _default =
{
  name: '',
  data: function data() {
    return {
      pattern: {
        color: '#f13130',
        backgroundColor: '#999',
        selectedColor: '#f13130',
        buttonColor: '#999' },

      isShowRedDot: false,
      showPublish: false };

  },
  onShow: function onShow() {

    var icon = plus.nativeObj.View.getViewById("icon");
    console.log(1, " at pages\\home\\index\\index.vue:53");
    if (icon) {
      setTimeout(function () {
        icon.show();
      }, 100);
    }

    this._reqGetChatList();
    this._getMessage();

  },
  onLoad: function onLoad(options) {
    this._getHomeCarousel();
    this._reqGetNoticeList();
    this._reqGetMerchantList();
    this._reqGetGoodsList();
    this._reqGetDemandList();
    this._reqGetAllDemandType();
    this._reqGetMessageList();

    bitmap = new plus.nativeObj.Bitmap('bmp1');
    bitmap.loadBase64Data('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAYAAADGWyb7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjlCRkMzQUE5OEJBMTFFOUFGRTlBMERBNjlBNjU2RTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjlCRkMzQUI5OEJBMTFFOUFGRTlBMERBNjlBNjU2RTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUJGQzNBODk4QkExMUU5QUZFOUEwREE2OUE2NTZFMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUJGQzNBOTk4QkExMUU5QUZFOUEwREE2OUE2NTZFMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnbSqY8AABQfSURBVHja7F0LfBTl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', function () {}, function (e) {});
    this.createtab();

  },
  onPullDownRefresh: function onPullDownRefresh() {
    this._reqGetMessageList();
    this._reqGetMerchantList();
    this._reqGetDemandList();
    this._reqGetChatList();
    this._reqGetNoticeList();
    uni.stopPullDownRefresh();
  },
  onNavigationBarSearchInputClicked: function onNavigationBarSearchInputClicked() {
    uni.navigateTo({
      url: '/pages/home/subPages/search/search' });

  },
  onNavigationBarButtonTap: function onNavigationBarButtonTap(e) {
    if (e.index == 0) {// 地图导航
      this._getLocation();
    }
    if (e.index == 1) {// 我的消息
      if (!(0, _common.dealLogin)()) {return;}
      uni.navigateTo({
        url: '/pages/home/subPages/message-list/message-list' });

    }
  },
  watch: {
    message_list: function message_list() {var _this = this;
      this.message_list.forEach(function (val, index) {
        if (val.have_read == 0) {
          _this.isShowRedDot = true;
        }
      });
      this.setStyle(1, this.isShowRedDot);
    } },

  onTabItemTap: function onTabItemTap(e) {
    console.log(e, " at pages\\home\\index\\index.vue:113");
  },
  computed: _objectSpread({},
  (0, _vuex.mapState)(['showPublishPopup', 'chat_num', 'message_list', 'hot_Goods_list', 'home_carousel', 'notice_list', 'merchant_list', 'goods_list', 'demand_list', 'all_demand_type'])),

  methods: _objectSpread({},
  (0, _vuex.mapActions)(['reqGetChatList', 'reqGetMessageList', 'reqGetHomeCarousel', 'reqGetNoticeList', 'reqGetMessageList', 'reqGetMerchantList', 'reqGetGoodsList', 'reqGetDemandList', 'reqGetAllDemandType']),
  (0, _vuex.mapMutations)(['dealPublishPopup']), {
    _reqGetChatList: function _reqGetChatList() {
      var token = uni.getStorageSync('token');
      if (!token) {return;}
      this.reqGetChatList({
        token: token });

    },
    setStyle: function setStyle(index, show, text) {// 动态设置消息右上角红点
      var self = this;
      var pages = getCurrentPages();
      var page = pages[pages.length - 1];

      var currentWebview = page.$getAppWebview();
      if (show) {
        currentWebview.showTitleNViewButtonRedDot({ index: index, text: text });
      } else {
        currentWebview.hideTitleNViewButtonRedDot({ index: index });
      }

    },
    onMessageClick: function onMessageClick() {
      if (!(0, _common.dealLogin)()) {return;}
      uni.navigateTo({
        url: '/pages/mine/subPages/message-list/message-list' });

    },
    _reqGetMessageList: function _reqGetMessageList() {
      this.reqGetMessageList({
        token: uni.getStorageSync('token') });

    },
    _reqGetDemandList: function _reqGetDemandList() {
      this.reqGetDemandList({
        page: 1,
        sort: 0,
        order: 2 });

    },
    _reqGetGoodsList: function _reqGetGoodsList() {
      this.reqGetGoodsList({
        page: 1,
        sort: 0,
        order: 4 });

    },
    _reqGetAllDemandType: function _reqGetAllDemandType() {
      this.reqGetAllDemandType();
    },
    _reqGetMerchantList: function _reqGetMerchantList() {
      this.reqGetMerchantList({ order: 2, type: 1 });
    },
    _getHomeCarousel: function _getHomeCarousel() {
      this.reqGetHomeCarousel({});
    },
    _reqGetNoticeList: function _reqGetNoticeList() {
      this.reqGetNoticeList({});
    },
    _getLocation: function _getLocation() {// 打开地图导航
      setTimeout(function () {
        view.hide();
      }, 300);
      uni.chooseLocation({
        success: function success(res) {
          console.log(res, " at pages\\home\\index\\index.vue:184");
          setTimeout(function () {
            view.show();
          }, 100);
        },
        fail: function fail(res) {
          console.log(JSON.stringify(res), " at pages\\home\\index\\index.vue:190");
          setTimeout(function () {
            view.show();
          }, 100);
        } });

    },
    onMoreRecommendClick: function onMoreRecommendClick(title) {
      console.log(title, " at pages\\home\\index\\index.vue:198");
      if (title === '同城优商') {// 跳转更多商家
        uni.navigateTo({
          url: '/pages/home/subPages/merchant-list/merchant-list' });

        return;
      }
      if (title === '人气精选') {// 跳转更多商品
        uni.navigateTo({
          url: '/pages/home/subPages/goods-list/goods-list' });

        return;
      }
      if (title === '附近需求') {// 跳转更多需求
        uni.navigateTo({
          url: '/pages/home/subPages/demand-list/demand-list' });

        return;
      }
    },
    onServiceItemClick: function onServiceItemClick() {// 跳转所有分类
      uni.navigateTo({
        url: '/pages/home/subPages/demand-list/demand-list' });

    },
    onToMerchantDetail: function onToMerchantDetail(id) {// 跳转商家详情
      uni.navigateTo({
        url: '/pages/home/subPages/merchant-detail/merchant-detail?id=' + id });

    },
    onToGoodsDetail: function onToGoodsDetail(id) {// 跳转商品详情
      uni.navigateTo({
        url: '/pages/home/subPages/goods-detail/goods-detail?id=' + id });

    },
    onToDemandDetail: function onToDemandDetail(item) {// 跳转需求详情
      uni.navigateTo({
        url: '/pages/home/subPages/demand-detail/demand-detail?id=' + item.id });

    },
    onPublishClick: function onPublishClick() {// 免费发布需求
      uni.navigateTo({
        url: '/pages/home/subPages/publish/publish' });

    },
    _getMessage: function _getMessage() {
      var user_id = uni.getStorageSync('user_id');
      if (!user_id) {return;}
      var self = this;
      uni.connectSocket({
        url: _api.SOCKET_URL + '?id=' + uni.getStorageSync('user_id') });

      uni.onSocketOpen(function (res) {
        console.log('WebSocket连接已打开！', " at pages\\home\\index\\index.vue:251");
      });
      uni.onSocketMessage(function (res) {
        console.log('收到服务器内容：' + res.data, " at pages\\home\\index\\index.vue:254");
        self.reqGetChatList({
          token: uni.getStorageSync('token') });

        uni.vibrateLong({ // 来消息手机振动
          success: function success() {
            console.log('success', " at pages\\home\\index\\index.vue:260");
          } });

        // 播放声音
        var innerAudioContext = uni.createInnerAudioContext();
        innerAudioContext.autoplay = true;
        innerAudioContext.obeyMuteSwitch = false;
        innerAudioContext.src = '/static/1.mp3'; // 
        innerAudioContext.onPlay(function () {
          console.log('开始播放', " at pages\\home\\index\\index.vue:269");
        });
        innerAudioContext.onError(function (res) {
          console.log(res.errMsg, " at pages\\home\\index\\index.vue:272");
          console.log(res.errCode, " at pages\\home\\index\\index.vue:273");
        });
      });
      uni.onSocketClose(function (res) {
        console.log('WebSocket 已关闭！', " at pages\\home\\index\\index.vue:277");
        self._getMessage();
      });
    },

    createtab: function createtab() {
      // 设置水平居中位置
      var self = this;
      var leftPos = Math.ceil((plus.screen.resolutionWidth - 60) / 2);
      view = new plus.nativeObj.View('icon', {
        bottom: '19px',
        left: leftPos + 'px',
        width: '60px',
        height: '60px' });

      view.drawBitmap(bitmap, {
        tag: 'font',
        id: 'icon',
        src: '/static/fabu.png',
        position: {
          top: '0px',
          left: '5px',
          width: '50px',
          height: '100%' } });


      view.addEventListener("click", function (e) {
        self.dealPublishPopup();
      }, false);
      view.show();
    },

    onHideClick: function onHideClick() {
      this.dealPublishPopup();
    } }),

  onHide: function onHide() {
    // setTimeout(() => {
    // 	view.hide();
    // }, 300)
  },
  components: {
    homeBanner: homeBanner,
    homePublish: homePublish,
    homeNotice: homeNotice,
    homeExcellent: homeExcellent,
    homePopular: homePopular,
    homeDemand: homeDemand,
    uniFab: uniFab,
    publishPopup: publishPopup } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\index\\index.vue?vue&type=style&index=0&id=7a0fd946&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!D:/我的文档/Documents/HBuilderProjects/ad/pages/home/index/index.vue?vue&type=style&index=0&id=7a0fd946&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\index\\index.vue?vue&type=template&id=7a0fd946&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/我的文档/Documents/HBuilderProjects/ad/pages/home/index/index.vue?vue&type=template&id=7a0fd946&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\index\\index.vue":
/*!************************************************************************!*\
  !*** D:/我的文档/Documents/HBuilderProjects/ad/pages/home/index/index.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_7a0fd946_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7a0fd946&scoped=true& */ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\index\\index.vue?vue&type=template&id=7a0fd946&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\index\\index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_7a0fd946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=7a0fd946&lang=scss&scoped=true& */ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\index\\index.vue?vue&type=style&index=0&id=7a0fd946&lang=scss&scoped=true&");
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7a0fd946_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_7a0fd946_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7a0fd946",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "D:/我的文档/Documents/HBuilderProjects/ad/pages/home/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\index\\index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** D:/我的文档/Documents/HBuilderProjects/ad/pages/home/index/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\index\\index.vue?vue&type=script&lang=js&");
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\index\\index.vue?vue&type=style&index=0&id=7a0fd946&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** D:/我的文档/Documents/HBuilderProjects/ad/pages/home/index/index.vue?vue&type=style&index=0&id=7a0fd946&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7a0fd946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=7a0fd946&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\index\\index.vue?vue&type=style&index=0&id=7a0fd946&lang=scss&scoped=true&");
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7a0fd946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7a0fd946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7a0fd946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7a0fd946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7a0fd946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\index\\index.vue?vue&type=template&id=7a0fd946&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** D:/我的文档/Documents/HBuilderProjects/ad/pages/home/index/index.vue?vue&type=template&id=7a0fd946&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7a0fd946_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7a0fd946&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\我的文档\\Documents\\HBuilderProjects\\ad\\pages\\home\\index\\index.vue?vue&type=template&id=7a0fd946&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7a0fd946_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Administrator_Downloads_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7a0fd946_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["D:\\我的文档\\Documents\\HBuilderProjects\\ad\\main.js?{\"page\":\"pages%2Fhome%2Findex%2Findex\"}","common/runtime","common/vendor"]]]);