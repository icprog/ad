<template>
	<view class="mall-banner bg-white">
		<swiper class="swiper" indicator-active-color="#ffffff" :indicator-dots="true" :autoplay="true" :style="{height: swiperHeight}">
				<swiper-item
					v-for="(item, index) of mall_carousel" :key="index"
				><image :lazy-load="true" :src="BASE_URL + item.image" @tap="onSwitchToClick(item.link)"></image></swiper-item>
		</swiper>
	</view>
</template>

<script>
	import { BASE_URL } from '@/api'
	export default {
		name: '',
		props: {
			mall_carousel: Array
		},
		data () {
			return {

			}
		},
		computed: {
			BASE_URL () {
				return BASE_URL
			},
			swiperHeight () {
				return uni.upx2px(300) + 'px'
			}
		},
		onLoad () {

		},
		methods: {
			onSwitchToClick (link) {
				// #ifdef APP-PLUS
				plus.runtime.openURL(link)
				// #endif
			}
		}
	}
</script>

<style lang="scss" scoped>
.mall-banner {
	padding: 30upx;
	image {
		width: 100%;
		height: 100%;
		border-radius: 20upx;
	}
}
</style>
