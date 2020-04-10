<template>
	<view class="withdraw h-100 bg-white">
		<view class="money-wrap">
			<view class="title">充值金额：</view>
			<input-cell :wrap="true" type="number" v-model="money" placeholder="请输入充值金额"></input-cell>
		</view>
		<pay-method @onPayMethodClick="onPayMethodClick"></pay-method>
		<button class="btn btn-confirm" @tap="onConfirmClick">确定充值</button>
	</view>
</template>

<script>
	import inputCell from '@/components/input-cell'
	import payMethod from '@/components/pay-method'
	import { mapState, mapActions } from 'vuex'
	import { recharge } from '@/api'
	export default {
		name: '',
		data () {
			return {
				type: 1, // 1微信  2  支付宝
				money: ''
			}
		},
		onLoad () {

		},
		methods: {
			...mapActions(['reqGetUserInfo']),
			_reqGetUserInfo () {
				this.reqGetUserInfo ({
					token: uni.getStorageSync('token')
				})
			},
			async onConfirmClick () {
				let self = this;
				if(this.money == '') {
					uni.showToast({
						title: '请输入充值金额',
						icon: 'none'
					})
					return;
				}
				let result = await recharge ({
					token: uni.getStorageSync('token'),
					dsf: this.type,
					price: this.money
				})
				let provider;
				if(this.type == 1) {
					provider = 'wxpay'
				}else {
					provider = 'alipay'
				}
				console.log(result, provider)
				uni.requestPayment({
					provider: provider,
					orderInfo: result, //微信、支付宝订单数据
					success: function (res) {
						self._reqGetUserInfo()
						uni.redirectTo({
							url: '/pages/mine/subPages/success/success'
						})
					},
					fail: function (err) {
						console.log('fail:' + JSON.stringify(err));
					}
				});
				return;
				uni.showModal({
					title: '充值',
					content: '充值成功',
					showCancel: false,
					success: function (res) {
						if(res.confirm) {
							
						}
					}
				})
			},
			onPayMethodClick (type) {
				this.type = type;
			}
		},
		components: {
			inputCell,
			payMethod
		}
	}
</script>

<style lang="scss" scoped>
.withdraw {
	padding: 45upx 30upx;
	.money-wrap {
		padding-bottom: 10upx;
		.title {
			margin-bottom: 30upx;
		}
	}
	.btn {
		margin-top: 150upx;
	}
}
</style>
