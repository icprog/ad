<template>
	<view class="goods-item d-flex">
		<image class="goods-img" :src="BASE_URL + item.images[0]"></image>
		<view class="goods-desc flex-1">
			<view class="goods-name">{{item.title}}</view>
			<view class="goods-num d-flex align-items-center justify-content-between">
				<text class="price font-bold">￥{{item.price}}</text><text>&times;1</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { BASE_URL } from '@/api'
 	export default {
		name: '',
		props: {
			item: Object
		},
		data () {
			return {

			}
		},
		computed: {
			BASE_URL () {
				return BASE_URL
			}
		},
		onLoad () {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';	
.goods-item {
	margin-bottom: 30upx;
	.goods-img {
		width: 150upx;
		height: 150upx;
		margin-right: 20upx;
		flex-shrink: 0;
	}
	.goods-name {
		text-align: justify;
	}
	.goods-num {
		margin-top: 25upx;
		.price {
			color: #ff5400;
		}
	}
}
</style>
