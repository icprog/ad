<template>
	<view class="wrap">
		<view style="margin-bottom: 10px" :options="options2" @click="bindClick"  v-for="(item, index) of list" :key="index">
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
							<view @tap.stop="onContact(item)">联系TA</view>
							<view class="active" v-if="item.indentInfo.indent_status == 1">已接单</view>
							<block v-else>
								<view>已有<text class="num font-bold">{{item.quote_num}}</text>人报价</view>
								<view>我的报价：<text class="price font-bold">￥{{item.wodebaojia}}</text></view>
							</block>
						</view>
					</view>
				</view>
			</view>
		</view>
		<empty v-if="list.length <= 0"></empty>
	</view>
</template>

<script>
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action'
	import empty from '@/components/empty'
	import { BASE_URL, getDemandList } from '@/api'
	export default {
		name: '',
		data () {
			return {
				options2: [{
					text: '删除',
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
			onContact (item) {
				uni.navigateTo({
					url: '/pages/mine/subPages/contact-us/contact-us?id=' + item.uid
				})
			},
			async _getDemandList () {
				let result = await getDemandList ({
					page: 1,
					sort: 0,
					my: 1,
					order: 2,
					token: uni.getStorageSync('token')
				})
				if(result.code == 200) {
					this.list = result.data;
				}
			},
			onGoToCommentDetail (id) {
				uni.navigateTo({
					url: '/pages/home/subPages/demand-detail/demand-detail?id=' + id
				})
			},
			bindClick (e) {  // 删除
				
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
				.active {
					color: #fff;
					background: #f13130;
				}
			}
		}
	}
}
</style>
