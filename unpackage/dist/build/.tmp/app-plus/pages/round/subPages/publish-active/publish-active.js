(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/round/subPages/publish-active/publish-active"],{"1fc5":function(t,e,n){"use strict";n.r(e);var i=n("529c"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=o.a},"39f8":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"529c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a34a")),o=n("25d2"),u=(n("2f62"),n("8a52"),n("c360"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,i,o,u,a){try{var s=t[u](a),c=s.value}catch(r){return void n(r)}s.done?e(c):Promise.resolve(c).then(i,o)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var u=t.apply(e,n);function a(t){s(u,i,o,a,c,"next",t)}function c(t){s(u,i,o,a,c,"throw",t)}a(void 0)})}}var r=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"09fe"))},l=function(){return n.e("components/upload").then(n.bind(null,"0318"))},f={name:"",data:function(){return{type:"",text:"",imgList:[],baseList:[]}},onLoad:function(){},onShow:function(){this.$hideTabbarButton()},onNavigationBarButtonTap:function(t){this._publishActive()},computed:{BASE_URL:function(){return o.BASE_URL}},methods:{onShareClick:function(e){var n=this;1==e&&t.share({provider:"weixin",scene:"WXSceneSession",type:0,summary:n.text,href:"http://www.taobao.com",imageUrl:n.imgList[0],success:function(t){console.log("success:"+JSON.stringify(t)," at pages\\round\\subPages\\publish-active\\publish-active.vue:78")},fail:function(t){console.log("fail:"+JSON.stringify(t)," at pages\\round\\subPages\\publish-active\\publish-active.vue:81")}}),2==e&&t.share({provider:"weixin",scene:"WXSenceTimeline",type:0,summary:n.text,href:"http://www.taobao.com",imageUrl:n.imgList[0],success:function(e){t.showToast({title:"分享成功"})},fail:function(t){console.log("fail:"+JSON.stringify(t)," at pages\\round\\subPages\\publish-active\\publish-active.vue:99")}}),3==e&&t.showToast({title:"暂不支持",icon:"none"})},_publishActive:function(){var e=c(i.default.mark(function e(){var n;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(""!=this.text){e.next=3;break}return t.showToast({title:"说点什么吧",icon:"none"}),e.abrupt("return");case 3:if(!(this.imgList.length<=0)){e.next=6;break}return t.showToast({title:"至少上传一张照片",icon:"none"}),e.abrupt("return");case 6:return e.next=8,(0,o.publishActive)({token:t.getStorageSync("token"),text:this.text,images:this.baseList.join("|")});case 8:n=e.sent,200==n.code&&(this.type="middle"),console.log(n," at pages\\round\\subPages\\publish-active\\publish-active.vue:133");case 11:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),onAddImgEvent:function(){var t=this;(0,u.uploadImg)(t.baseList,t.imgList)},onDelImgEvent:function(t){var e=this;(0,u.delUploadImg)(e.baseList,e.imgList,t)},togglePopup:function(){this.type="",t.navigateBack()}},components:{uniPopup:r,upload:l}};e.default=f}).call(this,n("6e42")["default"])},9064:function(t,e,n){},c721:function(t,e,n){"use strict";var i=n("9064"),o=n.n(i);o.a},f36d:function(t,e,n){"use strict";n.r(e);var i=n("39f8"),o=n("1fc5");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("c721");var a=n("2877"),s=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"7bc747e4",null);e["default"]=s.exports}},[["3460","common/runtime","common/vendor"]]]);