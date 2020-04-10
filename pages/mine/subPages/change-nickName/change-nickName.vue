<template>
	<view class="change-phone-wrap pd-top-15">
		<view class="change-phone pd-x-30 bg-white">
			<view class="nickName">
				<input class="" type="text" v-model="nickName" placeholder="昵称">
			</view>
			<button class="btn" @tap="onConfirmClick">确认修改</button>
		</view>
	</view>
</template>

<script>
	import inputCell from '@/components/input-cell'
	import { verifyPhone, dealCountDown } from '@/common/js/common'
	import { mapState, mapActions } from 'vuex'
	import { changeUserInfo } from '@/api'
	export default {
		name: '',
		data () {
			return {
				nickName: ''
			}
		},
		onLoad () {
			this.nickName = this.user_info.username || '昵称'
		},
		computed: {
			...mapState(['user_info']),
		},
		methods: {
			...mapActions(['reqGetUserInfo']),
			async onConfirmClick () {
				let self = this;
				if(this.nickName == '') {
					uni.showToast({
						title: '昵称不能为空',
						icon: 'none'
					})
					return;
				}
				let result = await changeUserInfo ({
					token: uni.getStorageSync('token'),
					username: this.nickName,
				})
				if(result.code == 200) {
					uni.showToast({
						title: '修改成功',
					})
					
					setTimeout(() => {
						self.reqGetUserInfo({
								token: uni.getStorageSync('token')
							})
							setTimeout(() => {
								uni.navigateBack()
							}, 500)
					}, 1000)
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
		.nickName {
			padding: 20upx 0;
			border-bottom: 1upx solid #f2f2f2;
		}
		.btn {
			margin-top: 210upx;
			color: #fff;
			background: $main-color;
		}
	}
}
</style>
