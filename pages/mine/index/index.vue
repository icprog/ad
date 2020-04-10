<template>
	<view class="wrapper">
		<mine-info :user_info="user_info" 
		></mine-info>
		<mine-service v-if="user_info.firm != 'no' && user_info.firm != 'rebut' && user_info.firm != 'ongoing'" :user_info="user_info"></mine-service>
		<mine-list @onGoToPage="onGoToPage" :user_info="user_info"></mine-list>
		<publish-popup v-if="showPublishPopup"  @onHideClick="onHideClick"></publish-popup>
	</view>
</template>

<script>
	import publishPopup from '@/components/publish-popup'
	import mineInfo from './children/mine-info'
	import mineService from './children/mine-service'
	import mineList from './children/mine-list'
	import { mapState, mapActions, mapMutations } from 'vuex'
	import { dealLogin } from '@/common/js/common'
	export default {
		name: '',
		data () {
			return {
				token: '',
			}
		},
		onLoad () {
			let token = uni.getStorageSync('token');
			this.token = token;
			if(!this.token) {
				return;
			}
			this._reqGetUserInfo()
		},
		onShow () {
			// #ifdef APP-PLUS
			var icon = plus.nativeObj.View.getViewById("icon");
			if (icon) {
				setTimeout(function(){
					icon.show();
				},100)
			}
			// #endif
			let token = uni.getStorageSync('token');
			if(!this.token) {
				return;
			}
			// this._reqGetMyAttention()
			// this._reqGetMyFans()
			this._reqGetUserInfo()
		},
		onPullDownRefresh () {
			this._reqGetUserInfo()
		},
		onNavigationBarButtonTap () {
			if(!dealLogin()) {
				return;
			}
			uni.navigateTo({
				url: '/pages/mine/subPages/set/set'
			})
		},
		computed: {
			...mapState(['user_info', 'attention_list', 'fans_list', 'showPublishPopup']),
		},
		methods: {
			...mapActions(['reqGetUserInfo', 'reqGetMyAttention', 'reqGetMyFans']),
			...mapMutations(['dealPublishPopup']),
				onHideClick () {
				this.dealPublishPopup()
			},
			_reqGetUserInfo () {
				this.reqGetUserInfo ({
					token: this.token
				})
				uni.stopPullDownRefresh()
			},
			onGoToPage (title) {  // 页面跳转
				if(!dealLogin()) {
					return;
				}
				if(title === '我的钱包') {
					uni.navigateTo({
						url: '/pages/mine/subPages/wallet/wallet'
					})
				}
				if(title === '我的评价') {
					uni.navigateTo({
						url: '/pages/mine/subPages/comment/comment'
					})
				}
				if(title === '我的收藏') {
					uni.navigateTo({
						url: '/pages/mine/subPages/collect/collect'
					})
				}
				if(title === '地址管理') {
					uni.navigateTo({
						url: '/pages/mine/subPages/address-list/address-list'
					})
				}
				if(title === '服务商/设计师认证') {
					uni.navigateTo({
						url: '/pages/mine/subPages/approve/approve'
					})
				}
				if(title === '投诉/反馈') {
					uni.navigateTo({
						url: '/pages/mine/subPages/feedback/feedback'
					})
				}
			}
		},
		components: {
			mineInfo,
			mineService,
			mineList,
			publishPopup
		}
	}
</script>

<style lang="scss" scoped>
.wrapper {
	padding-bottom: 80upx;
}
</style>
