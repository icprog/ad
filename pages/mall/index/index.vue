<template>
	<view class="mall">
		<mall-banner :mall_carousel="mall_carousel"></mall-banner>
		<mall-classify></mall-classify>
		<mall-popular title="人气精选" 
			@onToGoodsDetail="onToGoodsDetail" 
			@onMoreRecommendClick="onMoreRecommendClick"
			:goods_list="hot_Goods_list"
			v-if="hot_Goods_list.length > 0"
		></mall-popular>
		<view class="mall-excellent bg-white">
			<mall-excellent class="" title="猜你喜欢" 
				@onToMerchantDetail="onToGoodsDetail" 
				@onMoreRecommendClick="onMoreRecommendClick"
				:merchant_list="history_Goods_list"
			></mall-excellent>
		</view>
		<publish-popup v-if="showPublishPopup"  @onHideClick="onHideClick"></publish-popup>
	</view>
</template>

<script>
	import publishPopup from '@/components/publish-popup'
	import mallBanner from './children/mallBanner'
	import mallClassify from './children/mallClassify'
	import mallPopular from '@/pages/home/index/children/popular'
	import mallExcellent from '@/pages/home/index/children/excellent'
	import { mapState, mapActions, mapMutations } from 'vuex'
	var icon = null;
	export default {
		name: '',
		data () {
			return {
				isShowRedDot: false,
			}
		},
		onShow () {
			// #ifdef APP-PLUS
			icon = plus.nativeObj.View.getViewById("icon");
			if (icon) {
				setTimeout(function(){
					icon.show();
				},100)
			}
			// #endif
			this._reqGetMessageList()
		},
		onLoad () {
			this._reqGetMallCarousel()
			this._reqGetGoodsList()
		},
		onNavigationBarSearchInputClicked () {
			uni.navigateTo({
				url: '/pages/home/subPages/search/search'
			})
		},
		onNavigationBarButtonTap (e) {
			if(e.index == 0) {  // 地图导航
				this._getLocation()
			}
			if(e.index == 1) {   // 我的消息
				uni.navigateTo({
					url: '/pages/home/subPages/message-list/message-list'
				})
			}
		},
		computed: {
			...mapState(['mall_carousel', 'message_list', 'hot_Goods_list', 'goods_list', 'history_Goods_list', 'showPublishPopup']),
		},
		watch: {
			message_list () {
				this.message_list.forEach((val, index) => {
					if(val.have_read == 0) {
						this.isShowRedDot = true
					}
				})
				this.setStyle(1, this.isShowRedDot);
			}
		},
		methods: {
			...mapActions(['reqGetMallCarousel', 'reqGetGoodsList', 'reqGetMessageList']),
			...mapMutations(['dealPublishPopup']),
			onHideClick () {
				this.dealPublishPopup()
			},
			_reqGetMessageList () {
				this.reqGetMessageList({
					token: uni.getStorageSync('token')
				})
			},
			setStyle (index, show,text) {     // 动态设置消息右上角红点
				let self = this;
				let pages = getCurrentPages();
				let page = pages[pages.length - 1];
				// #ifdef APP-PLUS
				let currentWebview = page.$getAppWebview();
				if(show){
					currentWebview.showTitleNViewButtonRedDot({index:index,text:text})
				}else{
					currentWebview.hideTitleNViewButtonRedDot({index:index})
				}
				// #endif
			},	
			_reqGetMallCarousel () {
				this.reqGetMallCarousel({})
			},
			_reqGetGoodsList () {
				this.reqGetGoodsList({
					page: 1,
					sort: 0,
					order: 1,
					history: 1
				})
			},
			_getLocation () {  // 打开地图导航
				setTimeout(() => {
					icon.hide();
				}, 300)
				uni.chooseLocation({
					success: function (res) {
						console.log(res);
						setTimeout(() => {
							icon.show();
						}, 100)
					},
					fail: function () {
						setTimeout(() => {
							icon.show();
						}, 100)
					}
				});
			},
			onMoreRecommendClick (title) {
				if(title == '人气精选') {
					uni.navigateTo({
						url: '/pages/home/subPages/goods-list/goods-list'
					})
					return;
				}
				if(title == '猜你喜欢') {
					uni.navigateTo({
						url: '/pages/home/subPages/goods-list/goods-list'
					})
					return;
				}
			},
			onToGoodsDetail (id) {
				uni.navigateTo({
					url: '/pages/home/subPages/goods-detail/goods-detail?id=' + id
				})
			}
		},
		components: {
			mallBanner,
			mallClassify,
			mallPopular,
			mallExcellent,
			publishPopup
		}
	}
</script>

<style lang="scss" scoped>
.mall {
	padding-bottom: 40upx;
}	
.white-area, .mall-excellent {
	padding: 0 20upx;
}
</style>
