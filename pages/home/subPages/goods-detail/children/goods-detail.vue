<template>
	<view class="content">
		<image :lazy-load="true" 
			mode="widthFix"
			v-for="(item, index) of goods_detail.dimages" :key="index" 
			:src="BASE_URL + item"
			@tap="onPreviewImage(goods_detail.dimages, index)"
		></image> <!-- mode="aspectFit"-->
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
		onLoad () {

		},
		computed: {
			BASE_URL () {
				return BASE_URL
			}
		},
		methods: {
			onPreviewImage (urls, index) {
				previewImg(urls, index)
			}
		}
	}
</script>

<style lang="scss" scoped>
.content {
	padding-top: 30upx;
}	
image {
	display: block;
	margin-bottom: 20upx;
	width: 100%;
}
</style>
