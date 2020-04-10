<template>
	<view class="wrap">
		<!-- <uni-swipe-action style="margin-bottom: 10px" :options="options2" @click="bindClick(item.id)"  v-for="(item, index) of list" :key="index"> -->
			<view class="join-item bg-white d-flex" v-for="(item, index) of list" :key="index">
				<image class="join-logo" :src="BASE_URL + item.avatar"></image>
				<view class="join-content flex-1">
					<view class="join-title d-flex align-items-center justify-content-between">
						<view class="join-name">{{item.username}}</view>
						<view class="text-small text-muted">{{item.distance}}km</view>
					</view>
					<view class="join-desc border-bottom">报价金额: {{item.price}}</view>
					<view class="join-bottom d-flex text-small text-muted align-items-center justify-content-between">
						<view class="join-time">{{item.create_time_text}}</view>
						<view class="join-bottom-desc d-flex align-items-center">
							<!-- <view @tap.stop="onCheckOffer(item)">已有<text class="num font-bold">{{item.quote_num}}</text>人报价</view> -->
							<!-- <view>我的报价：<text class="price font-bold">￥{{item.wodebaojia}}</text></view> -->
							<view @tap="onContactClick(item)">联系TA</view>
							<view class="active" @tap.stop="" v-if="item.indentInfo.indent_status == 1">已下单</view>
							<view v-else @tap.stop="confirmOffer(item)">确认下单</view>
						</view>
					</view>
				</view>
			</view>
		<!-- </uni-swipe-action> -->
		<empty v-if="list.length <= 0"></empty>
	</view>
</template>

<script>
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action'
	import empty from '@/components/empty'
	import { BASE_URL, getOfferList } from '@/api'
	export default {
		name: '',
		data () {
			return {
				id: '',
				options2: [{
					text: '撤销',
					style: {
						backgroundColor: '#f13130'
					}
				}],
				list: []
			}
		},
		onLoad (options) {
			this.id = options.id;
			
		},
		onShow () {
			this._getOfferList()
		},
		computed: {
			BASE_URL () {
				return BASE_URL
			}
		},
		methods: {
			confirmOffer (item) {
				uni.navigateTo({
					url: '/pages/mall/subPages/confirm-order/confirm-order?type=demand&id=' + this.id + '&offerId=' + item.id + '&price=' + item.price
				})
			},
			onContactClick (item) {
				uni.navigateTo({
					url: '/pages/mine/subPages/contact-us/contact-us?id=' + item.uid
				})
			},
			async _getOfferList () {
				let result = await getOfferList ({
					bid: this.id
				})
				this.list = result.data;
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
					background: #f13130;
					color: #fff;
				}	
			}
		}
	}
}
</style>
