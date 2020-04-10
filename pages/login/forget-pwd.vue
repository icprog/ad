<template>
	<view class="container-50">
		<login-top title="修改密码"></login-top>
		<input-cell placeholder="手机号码" v-model="phone"></input-cell>
		<input-cell placeholder="验证码" v-model="sms" :sms="true" :count="count" @onGetSmsEvent="onGetSmsEvent"></input-cell>
		<input-cell placeholder="输入新密码" v-model="pwd" type="password"></input-cell>
		<button class="btn" @tap="onChangePwdEvent">确 定</button>
	</view>
</template>

<script>
	import loginTop from '@/components/login-top'
	import inputCell from '@/components/input-cell'
		import { BASE_URL, changePwd } from '@/api'
	import { mapActions } from 'vuex'
	import { verifyPhone, dealCountDown } from '@/common/js/common'
	export default {
		name: '',
		data () {
			return {
				phone: '',
				sms: '',
				pwd: '',
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
			async onChangePwdEvent () {
				let self = this;
				let flag = verifyPhone(this.phone);
				if(!flag) {
					return;
				}
				if(this.sms == '') {
					uni.showToast({
						title: '请输入验证码',
						icon: 'none'
					})
					return;
				}
				let pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/g;
				if(this.pwd == '') {
					uni.showToast({
						title: '请输入新密码',
						icon: 'none'
					})
					return;
				}
				if(!pwdReg.test(this.pwd)) {
					uni.showToast({
						title: '密码必须是6-30位字母与数字的组合',
						icon: 'none'
					})
					return;
				}
				let result = await changePwd ({
					mobile: this.phone,
					newpassword: this.pwd,
					captcha: this.sms
				})
				if(result.code == 1) {
					uni.showToast({
						title: '修改密码成功'
					})
					setTimeout( () => {
						uni.reLaunch({
							url: '/pages/login/login'
						})
					}, 1500)
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
	background: #fff;
}
.btn {
	margin-top: 70upx;
	color: #fff;
	background: $main-color;
}
</style>
