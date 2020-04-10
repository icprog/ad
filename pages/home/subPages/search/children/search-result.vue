<template>
	<scroll-view v-show="showSearchResult" scroll-y="true" class="scroll-Y">
			<view class="scroll-view-item"  v-for="(item, index) of search_goods" :key="index">
				<search-item :showMoney="true" :item="item" @onToGoodsDetail="onToGoodsDetail"></search-item>
			</view>
			<view class="text-center" v-if="search_goods.length <= 0">没有找到匹配的商品...</view>
	</scroll-view>
</template>

<script>
	import searchItem from '@/pages/home/index/children/popular-item'
	export default {
		props: {
			showSearchResult: Boolean,
			search_goods: {type: Array},
			text: String
		},
		name: '',
		data () {
			return {

			}
		},
		computed: {
			scrollHeight () {
				let windowHeight = uni.getSystemInfoSync().windowHeight;
				return windowHeight - 44 + 'px'
			}
		},
		onLoad () {

		},
		methods: {
			onTouchmoveEvent () {
				return;
			},
			onToGoodsDetail (item) {
				this.$emit('onToGoodsDetail', item)
			}
		},
		components: {
			searchItem
		}
	}
</script>

<style lang="scss" scoped>
.scroll-Y {
	position: fixed;
	padding: 30upx;
	box-sizing: border-box;
	top: 0upx;
	left: 0upx;
	right: 0upx;
	bottom: 0;
	background: #fff;
}
/* #ifdef H5 */
.scroll-Y {
	top: 44px;
}
/* #endif */
/* #ifdef APP-PLUS */
.scroll-Y {
	top: 69px;
}
/* #endif */

</style>
