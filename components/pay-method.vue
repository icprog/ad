<template>
	<view class="pay-method-wrap">
		<view class="title">请选择支付方式</view>
		<view class="pay-method d-flex align-items-center justify-content-between border-bottom"
				v-for="(item, index) of payMethod" :key="index"
				@tap="onPayMethodClick(item, index)"
		>
			<image class="pay-icon" :src="item.icon"></image>
			<text class="flex-1">{{item.text}}</text>
			<view class="iconfont checked" v-if="current == index">&#xe60a;</view>
			<view class="iconfont normal" v-else>&#xe63d;</view>
		</view>
		<view class="pay-desc d-flex align-items-center">
			<image src="/static/images/y6@2x.png"></image>
			<view class="text-small text-muted">特别说明：现金充值成功需要根据银行到账时间确定充值成功与否。</view>
		</view>
	</view>

</template>

<script>
	export default {
		name: '',
		data () {
			return {
				payMethod: [
					{icon: '/static/images/y3@2x.png', text: '微信'},
					{icon: '/static/images/y4@2x.png', text: '支付宝'},
				],
				current: 0
			}
		},
		onLoad () {

		},
		methods: {
			onPayMethodClick (item, index) {
				if(this.current != index) {
					this.current = index;
				}
				this.$emit('onPayMethodClick', (index + 1))
			},
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';	
.pay-method-wrap .pay-method:last-of-type {
	border-bottom: none;
}
.pay-method-wrap {
	.title {
		margin: 40upx 0 20upx 0;
	}
}
.pay-method {
	padding: 25upx 0;
	.pay-icon {
		width: 50upx;
		height: 50upx;
		margin-right: 20upx;
	}
	.iconfont {
		font-size: 45upx;
	}
	.checked {
		color: $main-color;
	}
	.normal {
		color: #a0a0a0;
	}
}
.pay-desc {
	margin-top: 20upx;
	image  {
		width: 24upx;
		height: 24upx;
		margin-right: 14upx; 
	}
	view {
		font-size: 20upx;
	}
}
</style>
