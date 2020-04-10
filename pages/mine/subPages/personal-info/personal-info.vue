<template>
	<view class="set-wrap">
		<view class="set bg-white">
			<list-cell v-for="(item, index) of setList" 
					:key="index"
					:title="item.title"
					:avatar="item.avatar"
					:nickName="item.nickName"
					:phone="item.phone"
					@onGoToPage="onGoToPage"
			></list-cell>
		</view>
	</view>
</template>

<script>
	import listCell from '@/components/list-cell'
	import { mapState, mapActions } from 'vuex'
	import { BASE_URL, logout, changeUserInfo } from '@/api'
	import { pathToBase64, base64ToPath } from '@/common/js/base64.js'
	export default {
		name: '',
		data () {
			return {
				setList: [
					{title: '头像',},
					{title: '昵称'},
					{title: '手机号'},
				]
			}
		},
		onLoad () {

		},
		onShow () {
			this.$hideTabbarButton()
			this.$set(this.setList[0], 'avatar', this.user_info.avatar ? (BASE_URL + this.user_info.avatar) : '/static/images/a1@2x.png');
			this.$set(this.setList[1], 'nickName', this.user_info.username || '完善资料' )
			this.$set(this.setList[2], 'phone', this.user_info.mobile || '完善资料' )
		},
		computed: {
			...mapState(['user_info']),
		},
		methods: {
			...mapActions(['reqGetUserInfo']),
			async onGoToPage (title) {
				let self = this;
				if(title === '头像') {
					uni.chooseImage({
						success: (chooseImageRes) => {
							const tempFilePaths = chooseImageRes.tempFilePaths[0];
							pathToBase64(tempFilePaths).then(async base64 => {
								let result = await changeUserInfo ({
									token: uni.getStorageSync('token'),
									avatar: base64
								})
								if(result.code == 200) {
									uni.showToast({
										title: '上传成功'
									})
									setTimeout(() => {
										self.reqGetUserInfo({token: uni.getStorageSync('token')})
										self.$set(self.setList[0], 'avatar', tempFilePaths)
									}, 1500)
								}
							})
						}
					});
				}
				if(title === '昵称') {
					uni.navigateTo({
						url: '/pages/mine/subPages/change-nickName/change-nickName'
					})
				}
				if(title === '手机号') {
					uni.navigateTo({
						url: '/pages/mine/subPages/change-phone/change-phone'
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
