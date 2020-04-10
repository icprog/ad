<template>
	<view class="wallet">
		<view class="wallet-info d-flex align-items-center">
			<image class="wallet-icon" src="/static/images/y7@2x.png"></image>
			<view class="title">我的钱包</view>
		</view>
		<view class="wallet-money text-small">余额总计<text class="font-bold">{{user_info.money}}</text></view>
		<view class="wallet-operate d-flex align-items-center">
			<view class="divider flex-1 d-flex align-items-center justify-content-center" @tap="onGoToPage('/pages/mine/subPages/recharge/recharge')">
				<image src="/static/images/y8@2x.png"></image>
				<text>充值</text>
			</view>
			<view class="flex-1 d-flex align-items-center justify-content-center"  @tap="onGoToPage('/pages/mine/subPages/withdraw/withdraw')">
				<image src="/static/images/y9@2x.png"></image>
				<text>提现</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	export default {
		name: '',
		data () {
			return {

			}
		},
		onLoad () {

		},
		computed: {
			...mapState(['user_info']),
			// money () {
			// 	return this.user_info.money.toFixed(2)
			// }
		},
		methods: {
			onGoToPage (url) {
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/mixin.scss';	
.wallet {
	height: 350upx;
	padding: 30upx 0 0 30upx;
	color: #fff;
	@include background-img('~@/static/images/001@2x.png');
	.wallet-info {
		.title {
			font-size: 30upx;
		}
		.wallet-icon {
			width: 90upx;
			height: 90upx;
			margin-right: 10upx;
		}
	}
	.wallet-money {
		padding-left: 100upx;
		text {
			margin-left: 15upx;
			font-size: 32upx;
		}
	}
	.wallet-operate {
		margin-top: 100upx;
		font-size: 26upx;
		image {
			width: 46upx;
			height: 46upx;
			margin-right: 30upx;
		}
		.divider {
			position: relative;
			&:before {
				position: absolute;
				right: 0;
				top: 50%;
				content: '';
				height: 60upx;
				margin-top: -30upx;
				border: 2upx dashed #ff8885;
			}
		}
	}
}
</style>
