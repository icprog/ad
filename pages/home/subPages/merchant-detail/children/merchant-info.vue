<template>
	<view>
		<view class="merchant-info">
			<merchant-item :item="merchant_detail" @onCollectClick="onCollectClick"></merchant-item>
			<view class="trade-wrap d-flex justify-content-between">
				<view>近三月成交金额：<text>{{merchant_detail.sum}}元</text></view>
				<view>成交：<text>{{merchant_detail.count}}笔</text></view>
			</view>
		</view>
		<!-- <view class="merchant-address d-flex bg-white">
			<image class="address-icon" src="/static/images/e6@2x.png"></image>
			<view class="address-wrap flex-1">
				<view class="address">烟台市万达金融中心A座25F</view>
				<view class="text-small text-muted">距离您2.0km</view>
			</view>
			<image class="button" src='/static/images/go-button.png'></image>
		</view> -->
	</view>
</template>

<script>
	import merchantItem from './merchant-item'
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
		methods: {
			onCollectClick (type) {
				this.$emit('onCollectClick', type)
			}
		},
		components: {
			merchantItem
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/mixin.scss';	
.merchant-info {
	height: 415upx;
	padding: 69px 30upx 0 30upx;
	color: #fff;
	@include background-img('~@/static/images/g38@2x.png');
	.merchant-img {
		width: 140upx;
		height: 140upx;
		margin-right: 20upx;
	}
	.info-right {
		height: 140upx;
		.name-wrap {
			.name {
				font-size: 36upx;
			}
		}
		.score-wrap {
			font-size: 20upx;
			text {
				margin-left: 5upx;
				color: red;
			}
		}
	}
	.icon-favorite {
		width: 70upx;
		height: 70upx;
		border-radius: 50%;
	}
	.trade-wrap {
		margin-top: 55upx;
		padding-right: 70upx;
		color: #b3b3b3;
		font-size: 26upx;
		text {
			color: #fff;
		}
	}
}
.merchant-address {
	padding: 48upx 30upx 28upx 30upx;
	line-height: 1;
	.address-icon {
		width: 22upx;
		height: 30upx;
		margin-right: 16upx;
	}
	.button {
		width: 158upx;
		height: 61upx;
	}
	.text-small {
		margin-top: 15upx;
	}
}
</style>
