<template>
	<view class="container-50">
		<login-top title="绑定手机号"></login-top>
		<input-cell placeholder="手机号码" v-model="phone"></input-cell>
		<button class="btn" @tap="onBindPhoneEvent">确 定</button>
	</view>
</template>

<script>
	import loginTop from '@/components/login-top'
	import inputCell from '@/components/input-cell'
	import { BASE_URL, weixinLogin } from '@/api'
	import { mapActions } from 'vuex'
	import { verifyPhone, dealCountDown } from '@/common/js/common'
	export default {
		name: '',
		data () {
			return {
				phone: '',
				name: '',
				avatar: '',
				openid: ''
			}
		},
		onLoad (options) {
			this.openid = options.openid
			let self = this;
			uni.getUserInfo({
				provider: 'weixin',
				success: function (infoRes) {
					console.log(infoRes);
					self.name = infoRes.nickName;
					self.avatar = infoRes.avatarUrl;
				}
			});
		},
		methods: {
			async onBindPhoneEvent () {
				if(!verifyPhone(this.phone)) {return}
				let result = await weixinLogin ({
					openid: this.openid,
					mobile: this.phone,
					avatar: this.avatar,
					username: this.name
				})
				console.log(result)
				if(result.code == 200) {
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
