(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/subPages/message-list/message-list"],{"5fdf":function(t,n,e){"use strict";var u=e("a25e"),a=e.n(u);a.a},"71fb":function(t,n,e){"use strict";e.r(n);var u=e("73a6"),a=e("c9f4");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("5fdf");var r=e("2877"),i=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,"31799170",null);n["default"]=i.exports},"73a6":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},a25e:function(t,n,e){},c9f4:function(t,n,e){"use strict";e.r(n);var u=e("ef49"),a=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);n["default"]=a.a},ef49:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=o(e("a34a")),a=e("25d2");function o(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,u,a,o,r){try{var i=t[o](r),c=i.value}catch(s){return void e(s)}i.done?n(c):Promise.resolve(c).then(u,a)}function i(t){return function(){var n=this,e=arguments;return new Promise(function(u,a){var o=t.apply(n,e);function i(t){r(o,u,a,i,c,"next",t)}function c(t){r(o,u,a,i,c,"throw",t)}i(void 0)})}}var c=function(){return e.e("components/empty").then(e.bind(null,"d923"))},s={name:"",data:function(){return{list:[]}},onLoad:function(){},onShow:function(){this.$hideTabbarButton(),this._getChatList()},computed:{BASE_URL:function(){return a.BASE_URL}},methods:{_getChatList:function(){var n=i(u.default.mark(function n(){var e;return u.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,a.getChatList)({token:t.getStorageSync("token")});case 2:e=n.sent,this.list=e.data;case 4:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}(),onGoToContact:function(n){t.navigateTo({url:"/pages/mine/subPages/contact-us/contact-us?id="+n})}},components:{empty:c}};n.default=s}).call(this,e("6e42")["default"])}},[["f8c2","common/runtime","common/vendor"]]]);