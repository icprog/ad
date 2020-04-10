<template>
	<view>
		<swiper class="swiper" :style="{height: swiperHeight}" :indicator-dots="true" autoplay="true" indicator-active-color="#ffffff">
				<swiper-item v-for="(item, index) of goods_detail.images" :key="index">
					<image :lazy-load="true" :src="BASE_URL + item" @tap="onPreviewImage(goods_detail.images, index)"></image>
				</swiper-item>
		</swiper>
		<view class="goods-info bg-white">
			<view class="goods-name ">{{goods_detail.described}}</view>
			<view class="price-wrap d-flex justify-content-between">
				<view class="goods-price font-bold main-color">￥{{goods_detail.price}}</view>
				<view class="goods-num text-muted">成交量{{goods_detail.transaction}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { BASE_URL } from '@/api'
	import { previewImg } from '@/common/js/common'
	export default {
		name: '',
		props: {
			goods_detail: Object
		},
		data () {
			return {

			}
		},
		computed: {
			swiperHeight () {
				return uni.upx2px(490) + 'px'
			},
			BASE_URL () {
				return BASE_URL
			}
		},
		onLoad () {

		},
		methods: {
			onPreviewImage (urls, index) {
				previewImg(urls, index)
			}
		}
	}
</script>

<style lang="scss" scoped>
.swiper {
	image {
		width: 100%;
		height: 100%;
	}
}
.goods-info {
	padding: 30upx 30upx 40upx;
	.goods-name {
		margin-bottom: 30upx;
		font-size: 30upx;
	}
	.price-wrap {
		font-size: 28upx;
	}
}
</style>
