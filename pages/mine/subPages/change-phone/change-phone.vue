<template>
	<view class="change-phone-wrap pd-top-15">
		<view class="change-phone container-30 bg-white">
			<input-cell placeholder="请输入新手机号码" v-model="phone"></input-cell>
			<input-cell placeholder="请输入验证码" :sms="true" v-model="code" :count="count" @onGetSmsEvent="onGetSmsEvent"></input-cell>
			<button class="btn" @tap="onConfirmClick">确认修改</button>
		</view>
	</view>
</template>

<script>
	import inputCell from '@/components/input-cell'
	import { verifyPhone, dealCountDown } from '@/common/js/common'
	import { mapState, mapActions } from 'vuex'
	import { changePhone } from '@/api'
	export default {
		name: '',
		data () {
			return {
				count: 0,
				phone: '',
				code: ''
			}
		},
		onLoad () {

		},
		methods: {
			...mapActions(['reqGetSms']),
			onGetSmsEvent () {
				let self = this;
				if(!verifyPhone(this.phone)) {
					return;
				}
				this.reqGetSms({
					mobile: this.phone,
					callBack: dealCountDown,
					self: self
				})
			},
			async onConfirmClick () {
				if(!verifyPhone(this.phone)) {
					return;
				}
				if(this.code == '') {
					uni.showToast({
						title: '请输入验证码',
						icon: 'none'
					})
					return;
				}
				let result = await changePhone ({
					token: uni.getStorageSync('token'),
					mobile: this.phone,
					captcha: this.code
				})
				if(result.code == 200) {
					uni.showModal({
						title: '修改手机',
						content: '修改成功',
						showCancel: false,
						success: function (res) {
							if(res.confirm) {
								uni.navigateBack()
							}
						}
					})
				}	
			}
		},
		components: {
			inputCell
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';
.change-phone-wrap {
	height: 100%;
	.change-phone {
		height: 100%;
		.btn {
			margin-top: 210upx;
			color: #fff;
			background: $main-color;
		}
	}
}
</style>
