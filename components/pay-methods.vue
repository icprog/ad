<template>
	<view>
		<view class="text-small text-muted pay-title">支付方式</view>
		<view class="pay-list">
			<view class="pay-item d-flex align-items-center justify-content-between" @tap="onChosePayClick(1)">
				<view class="iconfont pay-icon weixin">&#xe73b;</view>
				<text class="flex-1">微信支付</text>
				<view class="iconfont pay-radio" v-if="current == 2">&#xe63d;</view>
				<view class="iconfont pay-radio checked" v-else>&#xe60a;</view>
			</view>
			<view class="pay-item d-flex align-items-center justify-content-between" @tap="onChosePayClick(2)">
				<view class="iconfont pay-icon zhifubao">&#xe73b;</view>
				<text class="flex-1">支付宝支付</text>
				<view class="iconfont pay-radio" v-if="current == 1">&#xe63d;</view>
				<view class="iconfont pay-radio checked" v-else>&#xe60a;</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: '',
		data () {
			return {
				current: 1,
			}
		},
		onLoad () {

		},
		methods: {
			onChosePayClick (type) {
				this.current = type;
				this.$emit('onChosePayClick', type)
			}
		}
	}
</script>

<style lang="scss" scoped>
.pay-item {
	margin-top: 40upx;
	.pay-icon {
		margin-right: 30upx;
		font-size: 50upx;
	}
	.weixin {
		color: #24af41;
	}
	.zhifubao {
		color: #02a9f1;
	}
	.pay-radio {
		font-size: 40upx;
	}
	.checked {
		color: red;
	}
}	

</style>
