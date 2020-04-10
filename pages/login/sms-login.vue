<template>
	<view class="container-50 bg-white">
		<login-top title="验证码登录"></login-top>
		<input-cell placeholder="手机号码" v-model="phone"></input-cell>
		<input-cell placeholder="验证码" v-model="sms" :sms="true" :count="count" @onGetSmsEvent="onGetSmsEvent"></input-cell>
		<button class="btn" @tap="onLoginEvent">登 录</button>
	</view>
</template>

<script>
	import loginTop from '@/components/login-top'
	import inputCell from '@/components/input-cell'
	import { BASE_URL, smsLogin } from '@/api'
	import { mapActions } from 'vuex'
	import { verifyPhone, dealCountDown } from '@/common/js/common'
	export default {
		name: '',
		data () {
			return {
				phone: '',
				sms: '',
				count: 0
			}
		},
		onLoad () {

		},
		methods: {
			...mapActions(['reqGetSms']),
			onGetSmsEvent () {
				let self = this;
				let flag = verifyPhone(this.phone);
				if(flag) {
					this.reqGetSms({
						mobile: this.phone,
						callBack: dealCountDown,
						self: self
					})
				}
			},
			async onLoginEvent () {
				let self = this;
				let flag = verifyPhone(this.phone);
				if(flag) {
					if(this.sms == '') {
						uni.showToast({
							title: '请输入验证码',
							icon: 'none'
						})
						return;
					}
					let result = await smsLogin ({
						mobile: this.phone,
						captcha: this.sms
					})
					if(result.msg == '登录成功') {
						let pageRoute = uni.getStorageSync('pageRoute');
						// if(pageRoute) {
						// 	uni.navigateBack({
						// 		url: pageRoute
						// 	})
						// }else {
						// 	uni.reLaunch({
						// 		url: '/pages/home/index/index'
						// 	})
						// }
						uni.reLaunch({
							url: '/pages/home/index/index'
						})
						uni.setStorage({
							key: 'user_id',
							data: result.code.userinfo.user_id
						})
						uni.setStorage({
							key: 'token',
							data: result.code.userinfo.token
						})
					}
				}	
			}
		},
		components: {
			loginTop,
			inputCell
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';
.container-50 {
	min-height: 100%;
}
.btn {
	margin-top: 70upx;
	color: #fff;
	background: $main-color;
}
</style>
