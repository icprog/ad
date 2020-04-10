<template>
	<view class="container-50 bg-white">
		<login-top title="需求方注册"></login-top>
		<input-cell placeholder="用户昵称" v-model="nickname"></input-cell>
		<input-cell placeholder="手机号码" v-model="phone"></input-cell>
		<input-cell placeholder="验证码" v-model="sms" :sms="true" :count="count" @onGetSmsEvent="onGetSmsEvent"></input-cell>
		<input-cell placeholder="输入6-30位字母与数字组合密码" v-model="pwd" type="password"></input-cell>
		<input-cell placeholder="确认密码" v-model="rpwd" type="password"></input-cell>
		<button class="btn" @tap="onRegisterEvent">立 即 注 册</button>
		<!-- <button class="btn login-btn" :style="{top: positionTop}" @tap="onLoginEvent">登 录</button> -->
	</view>
</template>

<script>
	import loginTop from '@/components/login-top'
	import inputCell from '@/components/input-cell'
	import { BASE_URL, register } from '@/api'
	import { mapActions } from 'vuex'
	import { verifyPhone, dealCountDown } from '@/common/js/common'
	export default {
		name: '',
		data () {
			return {
				nickname: '',
				phone: '',
				sms: '',
				pwd: '',
				rpwd: '',
				count: 0,
				positionTop: 0
			}
		},
		onLoad () {
			let statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
			this.positionTop = uni.getSystemInfoSync().windowHeight - 80 + 'px'
		},
		methods: {
			...mapActions(['reqGetSms']),
			onLoginEvent () {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			onGetSmsEvent () {  // 获取验证码
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
			async onRegisterEvent () {
				if(this.nickname == '') {
					uni.showToast({
						title: '请输入昵称',
						icon: 'none'
					})
					return;
				}
				if(this.phone == '') {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none'
					})
					return;
				}
				if(this.sms == '') {
					uni.showToast({
						title: '请输入验证码',
						icon: 'none'
					})
					return;
				}
				if(this.pwd == '') {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					})
					return;
				}
				let pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/g;
				if(this.pwd == '') {
					uni.showToast({
						title: '请输入密码',
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
				if(this.rpwd == '') {
					uni.showToast({
						title: '请再次输入密码',
						icon: 'none'
					})
					return;
				}
				if(this.rpwd == !this.pwd) {
					uni.showToast({
						title: '两次密码输入不一致',
						icon: 'none'
					})
					return;
				}
				let result = await register ({
					username: this.nickname,
					password: this.pwd,
					mobile: this.phone,
					captcha: this.sms
				})
				if(result.msg == '注册成功') {
					// uni.showToast({
					// 	title: '注册成功',
					// })
					setTimeout(() => {
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
}
.btn {
	margin-top: 70upx;
	color: #fff;
	background: $main-color;
}
.login-btn {
	position: fixed;
	left: 0;
	width: 100%;
	border-radius: 0;
	color: #666666;
	background: #f8f8f8;
}
</style>
