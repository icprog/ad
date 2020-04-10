<template>
	<view class="wrap">
		<uni-swipe-action style="margin-bottom: 10px" :options="options2" @click="bindClick(item.id)"  v-for="(item, index) of list" :key="index">
			<view class="join-item bg-white d-flex" @tap="onGoToCommentDetail(item.id)">
				<image class="join-logo" :src="BASE_URL + item.avatar"></image>
				<view class="join-content flex-1">
					<view class="join-title d-flex align-items-center justify-content-between">
						<view class="join-name">{{item.username}}</view>
						<view class="text-small text-muted">{{item.distance}}km</view>
					</view>
					<view class="join-desc border-bottom">{{item.content}}</view>
					<view class="join-bottom d-flex text-small text-muted align-items-center justify-content-between">
						<view class="join-time">{{item.created_time_text}}</view>
						<view class="join-bottom-desc d-flex align-items-center">
							<view>已有<text class="num font-bold">{{item.quote_num}}</text>人报价</view>
							<!-- <view>我的报价：<text class="price font-bold">￥{{item.wodebaojia}}</text></view> -->
							<view @tap.stop="inviteOffer(item.id)">邀请报价</view>
						</view>
					</view>
				</view>
			</view>
		</uni-swipe-action>
		<empty v-if="list.length <= 0"></empty>
	</view>
</template>

<script>
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action'
	import empty from '@/components/empty'
	import { BASE_URL, getDemandList, delDemand } from '@/api'
	export default {
		name: '',
		data () {
			return {
				options2: [{
					text: '撤销',
					style: {
						backgroundColor: '#f13130'
					}
				}],
				list: []
			}
		},
		onShow () {
			this.$hideTabbarButton()
			this._getDemandList()
		},
		computed: {
			BASE_URL () {
				return BASE_URL
			}
		},
		methods: {
			inviteOffer (id) {
				uni.navigateTo({
					url: '/pages/mine/subPages/invite-offer/invite-offer?id=' + id
				})
			},
			async _getDemandList () {
				let result = await getDemandList ({
					page: 1,
					sort: 0,
					my: 2,
					order: 2,
					token: uni.getStorageSync('token')
				})
				if(result.code == 200) {
					this.list = result.data;
				}
			},
			onCheckOffer (item) {   // 查看报价人数
				// return;
				uni.navigateTo({
					url: '/pages/mine/subPages/offer-detail/offer-detail?id=' + item.id
				})
			},
			onGoToCommentDetail (id) {
				uni.navigateTo({
					url: '/pages/mine/subPages/offer-detail2/offer-detail?id=' + id
				})
			},
			async bindClick (id) {  // 删除
				let self = this;
				uni.showModal({
					content: '确定要撤销此需求吗？',
					success: async function (res) {
						if(res.confirm) {
							let result = await delDemand ({
								token: uni.getStorageSync('token'),
								did: id
							})
							if(result.code == 2000) {
								self._getDemandList()
							}
						}
					}
				})
			}
		},
		components: {
			uniSwipeAction,
			empty
		}
	}
</script>

<style lang="scss" scoped>
.wrap {
	padding: 20upx;
	.join-item {
		padding: 20upx;
		margin-bottom: 20upx;
		border-radius: 15upx;
		.join-logo {
			width: 50upx;
			height: 50upx;
			margin-right: 20upx;
			border-radius: 50%;
			flex-shrink: 0;
		}
		.join-desc {
			padding: 25upx 0;
			color: #999999;
			text-align: justify;
		}
		.join-bottom {
			padding-top: 15upx;
			.join-bottom-desc {
				> view {
					margin-left: 10upx;
					padding: 0 15upx;
					line-height: 40upx;
					border-radius: 30upx;
					font-size: 18upx;
					background: #f2f2f2;
					.num {
						color: #333333;
					}
					.price {
						color: #f13130;
					}
				}
			}
		}
	}
}
</style>
