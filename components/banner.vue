<template>
	<swiper class="swiper" :indicator-dots="true" :autoplay="true" indicator-active-color="#ffffff" :style="{height: swiperHeight}">
		<swiper-item v-for="(item, index) of home_carousel" :key="index">
			<image :src="BASE_URL + item.image" @tap="onBannerClick(item)"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	import { BASE_URL } from '@/api'
	export default {
		props: {
			home_carousel: Array
		},
		name: '',
		data () {
			return {
				
			}
		},
		computed: {
			swiperHeight () {
				return uni.upx2px(400) + 'px'
			},
			BASE_URL () {
				return BASE_URL
			}
		},
		onLoad () {

		},
		methods: {
			onBannerClick (item) {
				// #ifdef APP-PLUS
				plus.runtime.openURL(item.link)
				// #endif
			}
		}
	}
</script>

<style lang="scss" scoped>
image {
	display: block;
	width: 100%;
	height: 100%;
}
</style>
