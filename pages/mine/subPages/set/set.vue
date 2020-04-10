<template>
	<view class="set-wrap">
		<view class="set bg-white">
			<list-cell v-for="(item, index) of setList" 
					:key="index"
					:title="item.title"
					:avatar="item.avatar"
					:nickName="item.nickName"
					@onGoToPage="onGoToPage"
			></list-cell>
		</view>
		<!-- <navigator url="/pages/publish/subPages/publish-goods/publish-goods">发布商品</navigator> -->
	</view>
</template>

<script>
	import listCell from '@/components/list-cell'
	import { mapState, mapActions } from 'vuex'
	import { BASE_URL, logout, changeUserInfo } from '@/api'
	import { dealLogin } from '@/common/js/common'
	import { pathToBase64, base64ToPath } from '@/common/js/base64.js'
	export default {
		name: '',
		data () {
			return {
				setList: [
					// {title: '修改头像',},
					// {title: '修改昵称'},
					// {title: '修改手机号'},
					{title: '修改密码'},
					{title: '清除缓存'},
					{title: '退出登录'},
				]
			}
		},
		onShow () {
			this.$hideTabbarButton()
			// this.$set(this.setList[0], 'avatar', this.user_info.avatar ? (BASE_URL + this.user_info.avatar) : '/static/images/a1@2x.png');
			// this.$set(this.setList[1], 'nickName', this.user_info.username || '完善资料' )
		},
		computed: {
			...mapState(['user_info']),
		},
		methods: {
			...mapActions(['reqGetUserInfo']),
			async onGoToPage (title) {
				let self = this;
				if(title === '修改头像') {
					uni.chooseImage({
						success: (chooseImageRes) => {
							const tempFilePaths = chooseImageRes.tempFilePaths[0];
							pathToBase64(tempFilePaths).then(async base64 => {
								let result = await changeUserInfo ({
									token: uni.getStorageSync('token'),
									avatar: base64
								})
								if(result.code == 200) {
									self.reqGetUserInfo({token: uni.getStorageSync('token')})
									self.$set(self.setList[0], 'avatar', tempFilePaths)
									uni.showToast({
										title: '上传成功'
									})
								}
							})
						}
					});
				}
				if(title === '修改昵称') {
					uni.navigateTo({
						url: '/pages/mine/subPages/change-nickName/change-nickName'
					})
				}
				if(title === '修改手机号') {
					uni.navigateTo({
						url: '/pages/mine/subPages/change-phone/change-phone'
					})
				}
				if(title === '修改密码') {
					uni.navigateTo({
						url: '/pages/mine/subPages/change-pwd/change-pwd'
					})
				}
				if(title === '清除缓存') {
					uni.showLoading({
						title: '清除中...'
					})
					setTimeout(() => {
						uni.hideLoading()
						uni.showModal({
							title: '清除缓存',
							content: "清除成功",
							showCancel: false,
							success: function (res) {
								if(res.confirm) {
									
								}
							}
						})
					}, 500)	
				}
				if(title === '退出登录') {
					uni.showModal({
						title: '退出登录',
						content: '确定要退出登录吗？',
						success: async function (res) {
							if(res.confirm) {
								uni.clearStorage()
								// let result = await logout ({token: uni.getStorageSync('token')});
								uni.reLaunch({
									url: '/pages/login/login'
								})
							}
						}
					})
				}
			}
		},
		components: {
			listCell
		}
	}
</script>

<style lang="scss" scoped>
.set-wrap {
	padding-top: 15upx;
	.set {
		padding: 0 30upx;
	}
}
</style>
