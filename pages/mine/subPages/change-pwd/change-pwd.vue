<template>
	<view class="change-pwd-wrap pd-top-15 h-100">
		<view class="change-pwd container-30 bg-white h-100">
			<input-cell placeholder="请输入原密码" leftText="原密码" v-model="oldPwd"></input-cell>
			<input-cell type="password" placeholder="请输入新密码" leftText="新密码" v-model="newPwd"></input-cell>
			<input-cell type="password" placeholder="请确认新密码" leftText="确认密码" v-model="cPwd"></input-cell>
			<button class="btn" @tap="onConfirmClick">确认修改</button>
		</view>
	</view>
</template>

<script>
	import inputCell from '@/components/input-cell'
	import { changepwd } from '@/api'
	export default {
		name: '',
		data () {
			return {
				oldPwd: '',
				newPwd: '',
				cPwd: ''
			}
		},
		onLoad () {

		},
		methods: {
			async onConfirmClick () {
				if(this.oldPwd == '') {
					uni.showToast({
						title: '请输入原密码',
						icon: 'none'
					})
					return;
				}
				if(this.newPwd == '') {
					uni.showToast({
						title: '请输入新密码',
						icon: 'none'
					})
					return;
				}
				let pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/g;
				if(!pwdReg.test(this.newPwd)) {
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
				if(this.cPwd == '') {
					uni.showToast({
						title: '请确认新密码',
						icon: 'none'
					})
					return;
				}
				if(this.cPwd != this.newPwd) {
					uni.showToast({
						title: '两次新密码不一致',
						icon: 'none'
					})
					return;
				}
				let result = await changepwd ({
					token: uni.getStorageSync('token'),
					newpassword: this.newPwd,
					oldpassword: this.oldPwd
				})
				if(result.msg == '重置密码成功') {
					uni.showModal({
						title: '修改密码',
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
.btn {
	margin-top: 110upx;
	color: #fff;
	background: $main-color;
}
</style>
