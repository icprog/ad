<template>
	<view class="search bg-white">
		<view class="status_bar">  
				<view class="top_view"></view>  
		</view>  
		<view class="search-bar d-flex justify-content-between align-items-center">
			<text class="iconfont back-icon" @tap="onBackEvent">&#xe60d;</text>
			<view class="input-wrap flex-1 d-flex align-items-center">
				<text class="iconfont search-icon">&#xe619;</text>
				<input type="text" placeholder="请输入" :focus="true" v-model="text">
			</view>
			<text @tap="onSearchEvent">搜索</text>
		</view>
		<view class="result-wrap">
			<search-item title="历史搜索" key="history" :list="search_history" @onSearchItemEvent="onSearchItemEvent" @onDelSearchHistoryEvent="onDelSearchHistoryEvent"></search-item>
			<search-item title="热门搜索" key="hot" :list="search_hot" @onSearchItemEvent="onSearchItemEvent"></search-item>
			<search-result :search_goods="search_goods" @onToGoodsDetail="onToGoodsDetail" :showSearchResult="showSearchResult"></search-result>
		</view>
		
	</view>
</template>

<script>
	import searchItem from './children/search-item'
	import searchResult from './children/search-result'
	import { mapState, mapActions } from 'vuex'
	import { BASE_URL, delSearchHistory } from '@/api'
	export default {
		name: '',
		data () {
			return {
				showSearchResult: false,
				page: 1,
				text: ''
			}
		},
		watch: {
			text (val, old) {
				if(val == '') {
					this.showSearchResult = false
				}
			}
		},
		onNavigationBarButtonTap () {   //取消搜索事件
			uni.navigateBack()
		},
		onLoad () {
			this._getSearchHistory();
		},
		onShow () {
			this.$hideTabbarButton()
		},
		computed: {
			...mapState(['search_history', 'search_hot', 'search_goods']),
		},
		methods: {
			...mapActions(['reqSearchHistory', 'reqSearchGoods']),
			onSearchEvent () {  // 搜索商品
				if(this.text == '') {return}
				this.showSearchResult = true;
				this.reqSearchGoods({
					token: uni.getStorageSync('token'),
					text: this.text,
					page: this.page
				})
			},
			onToGoodsDetail (item) {
				if(item.type == 1) {
					uni.navigateTo({
						url: '/pages/home/subPages/goods-detail/goods-detail?id=' + item.id
					})
				}
				if(item.type == 2) {
					uni.navigateTo({
						url: '/pages/home/subPages/demand-detail/demand-detail?id=' + item.id
					})
				}	
			},
			_getSearchHistory () {  // 热门搜索、搜索历史
				this.reqSearchHistory({token: uni.getStorageSync('token')})
			},
			onSearchItemEvent (item) {  // 点击热门搜索进行搜索
				this.text = item;
				this.onSearchEvent(item)
			},
			onDelSearchHistoryEvent () {  // 删除历史记录
				let self = this;
				uni.showModal({
					content: '确定要删除历史搜索吗？',
					success: async function (res) {
						if(res.confirm) {
							let result = await delSearchHistory({token: uni.getStorageSync('token')});
							console.log(result);
							if(result.code == 200) {
								self._getSearchHistory()
							}
						}
					}
				})
			},
			onBackEvent () {
				uni.navigateBack()
			}
		},
		components: {
			searchItem,
			searchResult
		}
	}
</script>

<style lang="scss" scoped>
/* #ifdef APP-PLUS */	
.status_bar {  
	height: var(--status-bar-height);  
	width: 100%;  
	// background-color: #fff;  
}  
/* #endif  */
.top_view {  
	height: var(--status-bar-height);  
	width: 100%;  
	position: fixed;  
	// background-color: #fff;  
	top: 0;  
	z-index: 999;  
} 
.search {
	min-height: 100%;
	.iconfont {
		color: #000;
	}
	.search-bar {
		height: 44px;
		padding: 0 20upx;
		font-size: 15px;
		.input-wrap {
			background: #f2f2f2;
			border-radius: 30upx;
			margin: 0 20upx;
			padding: 0 20upx;
			input {
				padding: 0 20upx;
				flex: 1;
			}
		}
		.back-icon {
			font-size: 22px;
		}
		.search-icon {
			color: #999;
			font-size: 16px;
		}
	}
	.result-wrap {
		padding: 30upx;
	}
}
</style>
