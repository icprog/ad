<template>
	<view class="success d-flex flex-direction-column align-items-center bg-white">
		<image src="/static/images/buy_success.png"></image>
		<view class="font-bold">支付成功</view>
		<!-- <button class="btn confirm-btn w-100" @tap="onCheckOrder">查看订单</button> -->
	</view>
</template>

<script>
	export default {
		name: '',
		data () {
			return {

			}
		},
		onLoad () {

		},
		methods: {
			onCheckOrder () {
				uni.redirectTo({
					url: '/pages/mine/subPages/order/order'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';	
.success {
	min-height: 100%;
	padding: 100upx;
	image {
		width: 200upx;
		height: 200upx;
	}
	view {
		padding: 30upx 0;
		font-size: 32upx;
	}
	.btn {
		// color: #fff;
		// background: #09bb07;
	}
}
</style>
