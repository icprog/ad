<template>
	<view class="active bg-white">
		<view class="active-title d-flex justify-content-between">
			<text class=" font-bold">店铺动态</text>
			<text class="text-muted" @tap="onLookMore">查看更多</text>
		</view>
		<view class="item" @tap="onGoToActiveDetail(merchant_detail.moving[0].id)">
			<active-detail :item="merchant_detail.moving[0]" @onActiveButtonClick="onActiveButtonClick"></active-detail>
		</view>
	</view>
</template>

<script>
	import activeDetail from '@/components/active-item'
	import { BASE_URL } from '@/api'
	export default {
		name: '',
		props: {
			merchant_detail: Object
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
			},
			
		},
		methods: {
			onLookMore () {
				uni.navigateTo({
					url: '/pages/home/subPages/active-list/active-list'
				})
			},
			onActiveButtonClick ({type, id}) {
				this.$emit('onActiveButtonClick', {type: type, id: id})
			},
			onGoToActiveDetail (id) {
				this.$emit('onGoToActiveDetail', id)
			}
		},
		components:{
			activeDetail
		}
	}
</script>

<style lang="scss" scoped>
.item {
	margin-bottom: 20upx;
}	
.active {
	margin-top: 20upx;
	padding: 30upx;
	font-size: 26upx;
	// .active-content {
	// 	margin: 20upx 0;
	// 	line-height: 1.8;
	// 	word-break: break-all;
	// 	text-align: justify;
	// }
	// .img-list {
	// 	padding-bottom: 30upx;
	// 	image {
	// 		width: 108upx;
	// 		height: 108upx;
	// 		margin-right: 20upx;
	// 		border-radius: 10upx;
	// 	}
	// }
	// .active-bottom {
	// 	padding-bottom: 20upx;
	// 	.active-operate {
	// 		view {
	// 			line-height: 1;
	// 		}
	// 		image {
	// 			width: 25upx;
	// 			height: 25upx;
	// 			margin-right: 15upx;
	// 		}
	// 	}
	// }
}
</style>
