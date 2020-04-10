<template>
	<view class="withdraw h-100 bg-white">
		<view class="money-wrap">
			<view class="title">提现金额：<text class="text-small text-muted">可用余额28.82</text></view>
			<input-cell :wrap="true" type="number" placeholder="请输入提现金额"></input-cell>
		</view>
		<input-cell leftText="提现昵称" placeholder="仅支持支付宝"></input-cell>
		<input-cell leftText="提现账号" placeholder="请输入您的账号"></input-cell>
		<button class="btn btn-confirm" @tap="onConfirmClick">提交</button>
	</view>
</template>

<script>
	import inputCell from '@/components/input-cell'
	export default {
		name: '',
		data () {
			return {

			}
		},
		onLoad () {

		},
		methods: {
			onConfirmClick () {
				uni.showToast({
					title: '暂不支持',
					icon: 'none'
				})
				// uni.showModal({
				// 	title: '提现',
				// 	content: '提现成功',
				// 	showCancel: false,
				// 	success: function (res) {
				// 		if(res.confirm) {
				// 			
				// 		}
				// 	}
				// })
			}
		},
		components: {
			inputCell
		}
	}
</script>

<style lang="scss" scoped>
.withdraw {
	padding: 45upx 30upx;
	.money-wrap {
		padding-bottom: 10upx;
		.text-muted {
			margin-top: 10upx;
		}
	}
	.title {
		margin-bottom: 30upx;
	}
	.btn {
		margin-top: 290upx;
	}
}
</style>
