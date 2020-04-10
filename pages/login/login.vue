<template>
	<view class="page container-50">
		<!-- <login-top title="密码登录"></login-top> -->
		<view class="logo-wrap d-flex justify-content-center">
			<image class="logo" src="/static/images/logo.png" :animation="animationData"></image>
		</view>
		<view class="login-method">
			<view class="method-list d-flex justify-content-between align-items-center">
				<view class="method-item" :class="{active: current == index}" v-for="(item, index) of methodList" :key="index" @tap="onMethodTypeClick(index)">{{item}}</view>
			</view>
		</view>
		<view class="pwd-login" v-show="current == 0">
			<input-cell placeholder="请输入账号" v-model="phone" :value="phone"></input-cell>
			<input-cell placeholder="请输入密码" type="password" v-model="pwd" :value="pwd"></input-cell>
		</view>
		<view class="pwd-login" v-show="current == 1">
			<input-cell placeholder="手机号码" v-model="tel"></input-cell>
			<input-cell placeholder="验证码" v-model="sms" :sms="true" :count="count" @onGetSmsEvent="onGetSmsEvent"></input-cell>
		</view>

		<button class="btn login btn-shadow" @tap="onLoginEvent">登 录</button>
		<!-- <button class="btn register" @tap="onRegisterEvent">立 即 注 册</button> -->
		<view class="login-else d-flex align-items-center justify-content-center">
			<!-- <navigator class="text-muted" url="/pages/login/sms-login">短信验证码登录</navigator> -->
			<navigator class="" url="/pages/login/forget-pwd">忘记密码？</navigator>
		</view>
		<third-login @onThirdLoginEvent="onThirdLoginEvent"></third-login>
	</view>
</template>

<script>
	import loginTop from '@/components/login-top'
	import inputCell from '@/components/input-cell'
	import thirdLogin from '@/components/third-login'
	import {
		verifyPhone,
		dealCountDown
	} from '@/common/js/common'
	import {
		login,
		smsLogin,
		weixinLogin
	} from '@/api'
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		name: '',
		data() {
			return {
				phone: '',
				pwd: '',
				methodList: ['密码登录', '验证码登录'],
				current: 0,
				count: 0,
				sms: '',
				tel: '',
				animationData: {}
			}
		},
		onLoad() {
			uni.onWindowResize((res) => {
				console.log(res)
			})
		},
		onShow() {
			this._createAnimation()
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '/pages/login/demand-login'
			})
		},
		methods: {
			...mapActions(['reqGetSms']),
			_createAnimation () {
				// #ifdef APP-PLUS
				let animation = uni.createAnimation({
					transformOrigin: "50% 50%",
					duration: 1500,
					timingFunction: "ease",
					delay: 0
				})
				animation.rotateX(360).step()
				this.animationData = animation.export()
				// #endif
			},
			async onThirdLoginEvent(item) {
				if (item.name == '微信') {
					uni.login({
						provider: 'weixin',
						success: async function(loginRes) {
							console.log(loginRes.authResult);
							let result = await weixinLogin({
								openid: loginRes.authResult.openid
							})
							console.log('result:', result)
							if (result.code == 211) {
								uni.navigateTo({
									url: '/pages/login/bind-phone?openid=' + loginRes.authResult.openid
								})
							}
							if (result.code == 200) {
								uni.reLaunch({
									url: '/pages/home/index/index'
								})
								uni.setStorage({
									key: 'user_id',
									data: result.data.user_id
								})
								uni.setStorage({
									key: 'token',
									data: result.data.token
								})
							}
						},
						fail: function(res) {
							console.log(res)
						}
					});
				}
				if (item.name == 'QQ') {
					uni.showToast({
						title: '暂不支持',
						icon: 'none'
					})
				}
			},
			onMethodTypeClick(index) {
				this.current = index;
			},
			async onLoginEvent() {
				let self = this;
				if (this.current == 0) { // 密码登录
					if (this.phone == '') {
						uni.showToast({
							title: '请输入账号',
							icon: 'none'
						})
						return;
					}
					if (this.pwd == '') {
						uni.showToast({
							title: '请输入密码',
							icon: 'none'
						})
						return;
					}
					let result = await login({
						account: this.phone,
						password: this.pwd
					})
					console.log(result)
					if (result.msg == '登录成功') {
						let pageRoute = uni.getStorageSync('pageRoute');
						// if(pageRoute) {
						// 	uni.navigateBack({
						// 		url: pageRoute
						// 	})
						// 	// uni.navigateBack()
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
					return;
				}
				if (this.current == 1) { // 验证码登录
					let flag = verifyPhone(this.tel);
					if (flag) {
						if (this.sms == '') {
							uni.showToast({
								title: '请输入验证码',
								icon: 'none'
							})
							return;
						}
						let result = await smsLogin({
							mobile: this.tel,
							captcha: this.sms
						})
						if (result.msg == '登录成功') {
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
			onGetSmsEvent() {
				let self = this;
				let flag = verifyPhone(this.tel);
				if (flag) {
					this.reqGetSms({
						mobile: this.tel,
						callBack: dealCountDown,
						self: self
					})
				}
			},
			onRegisterEvent() {

			}
		},
		components: {
			loginTop,
			inputCell,
			thirdLogin
		}
	}
</script>

<style lang="scss" scoped>
	@import '~@/common/css/avariables.scss';

	.logo-wrap {
		padding: 70upx 0 100upx 0;

		.logo {
			width: 252upx;
			height: 128upx;
		}
	}

	.pwd-login {
		padding-top: 40upx;
	}

	.login-method {
		padding: 0 40upx;

		.method-list {
			padding: 0 40upx;
			border-bottom: 2upx solid #f5a097;
		}

		.method-item {
			padding-bottom: 10upx;
			color: #f6b0ac;

			&.active {
				color: #f13130;
				border-bottom: 4upx solid #f13130;
			}
		}
	}

	.login {
		margin: 40upx 0 50upx 0;
		color: #fff;
		background: $main-color;
	}

	.register {
		margin-bottom: 30upx;
		border: 1upx solid $main-color;
		color: $main-color;
	}

	.login-else {
		navigator {
			color: #222;
		}
	}
</style>
