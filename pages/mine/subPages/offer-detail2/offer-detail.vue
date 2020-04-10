<template>
	<view style="wrapper">
		<view class="offer-detail bg-white container-30">
			<view class="title d-flex align-items-center justify-content-between">
				<text class="text-big">{{demand_detail.title}}</text>
				<text class="text-muted text-small">{{demand_detail.created_time_text}}</text>
			</view>
			<view class="content text-change ">{{demand_detail.content}}</view>
			<scroll-view class="scroll-view_H" scroll-x="true" >
					<view class="scroll-view-item_H" v-for="(item, index) of demandImg" :key="index">
						<image :src="BASE_URL + item"></image>
					</view>
			</scroll-view>
			<view class="operate d-flex align-items-center justify-content-between">
				<view class="text-small">已有{{demand_detail.quoteList.length}}人报价</view>
				<view class="invite-btn btn" @tap="onInviteClick">邀请报价</view>
			</view>
		</view>
		<block v-for="(item, index) of demand_detail.quoteList" :key="index">
			<view class="offer-item bg-white">
				<view class="item-top d-flex">
					<image class="offer-logo" :src="BASE_URL + item.avatar"></image>
					<view class="item-top-right flex-1">
						<view class="name-wrap d-flex align-items-center justify-content-between">
							<view class="name">{{item.username}}</view>
							<view class="text-small text-muted">{{item.distance}}km</view>
						</view>
						<view class="item-rate d-flex align-items-center">
							<uni-icon size="12" type="star-filled" color="#ffbe21" v-for="(ite, ind) of item.star.comprehensive" :key="ind"></uni-icon>
							<uni-icon size="12" type="star" color="#ffbe21" v-for="(ite, ind) of (5-item.star.comprehensive)" :key="ind"></uni-icon>
							<text class="text-small">{{item.star.comprehensive}}分</text>
						</view>
						<view class="offer-price text-change">报价：<text>￥{{item.price}}</text></view>
					</view>
				</view>
				<view class="item-bottom d-flex align-items-center justify-content-between">
					<view class="offer-time text-small text-muted">{{item.create_time}}</view>
					<view class="offer-btn d-flex align-items-center juistify-content-between">
						<view class="contact btn" @tap="onContactClick(item)">联系TA</view>
						<view class="confirm btn" @tap="onConfirmOffer(item)" v-if="item.xiadan == 0">确认下单</view>
						<view class="confirm btn" v-else>已下单</view>
					</view>
				</view>
			</view>
		</block>
		<view class="cancel-btn" @tap="onDelOfferClick">撤销发布</view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	import { mapState, mapActions } from 'vuex'
	import { BASE_URL, delDemand } from '@/api'
	export default {
		name: '',
		data () {
			return {
				id: '', // 需求id
			}
		},
		computed: {
			...mapState(['demand_detail', 'demandImg']),
			BASE_URL () {
				return BASE_URL
			}
		},
		onLoad (options) {
			this.id = options.id
			
		},
		onShow () {
			this._reqGetDemandDetail()
		},
		methods: {
			...mapActions(['reqGetDemandDetail']),
			_reqGetDemandDetail () {
				this.reqGetDemandDetail({
					token: uni.getStorageSync('token'),
					xid: this.id
				})
			},
			onInviteClick () {
				uni.navigateTo({
					url: '/pages/mine/subPages/invite-offer/invite-offer?id=' + this.id
				})
			},
			onContactClick (item) {
				uni.navigateTo({
					url: '/pages/mine/subPages/contact-us/contact-us?id=' + item.id
				})
			},
			onConfirmOffer (item) {
				uni.navigateTo({
					url: `/pages/mall/subPages/confirm-order/confirm-order?type=demand&id=${this.id}&offerId=${item.quote_id}&price=${item.price}`
				})
			},
			async onDelOfferClick () {
				let self = this;
				uni.showModal({
					content: '确定要删除吗?',
					success: async function (res) {
						if(res.confirm) {
							let result = await delDemand ({
								token: uni.getStorageSync('token'),
								did: self.id
							})
							if(result.code == 2000) {
								uni.showToast({
									title: '删除成功'
								})
								setTimeout(() => {
									uni.navigateBack()
								}, 1500)
							}
						}
					}
				})
			}
		},
		components: {
			uniRate,
			uniIcon
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';
.scroll-view_H {
	white-space: nowrap;
	.scroll-view-item_H {
		display: inline-block;
		image {
			width: 220upx;
			height: 200upx;
			margin-right: 10upx;
		}
	}
}
.wrapper {
	padding-bottom: 90upx;
}
.cancel-btn {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: 90upx;
	line-height: 90upx;
	text-align: center;
	color: #fff;
	font-size: 30upx;
	background: $main-color;
}
.offer-detail {
	.text-big {
		font-size: 32upx;
	}
	.content {
		padding: 25upx 0 20upx 0;
		color: #666666;
	}
	.operate {
		margin-top: 10upx;
		.text-small {
			padding: 4upx 8upx;
			border-radius: 20upx;
			font-size: 20upx;
			background: #f2f2f2;
		}
	}
}
.offer-item {
	margin-top: 20upx;
	padding: 30upx;
	.item-top {
		padding-bottom: 20upx;
	}
	.offer-logo {
		width: 140upx;
		height: 140upx;
		margin-right: 20upx;
	}
	.name {
		font-size: 32upx;
	}
	.item-rate {
		margin-top: 20upx;
		.text-small {
			margin-left: 20upx;
			color: #666666;
		}
	}
	.offer-price {
		text-align: right;
		color: #666;
		text {
			color: $main-color;
			font-weight: bold;
		}
	}
	.item-bottom {
		padding-top: 15upx;
		border-top: 1upx solid #eeeeee;
	}
	.contact {
		border: 1upx solid #bdbdbd;
		color: #444444;
	}
}
.btn {
		width: 140upx;
		height: 50upx;
		margin-left: 20upx;
		line-height: 50upx;
		font-size: 28upx;
		text-align: center;
		border-radius: 30upx;
		border: 1upx solid #ff5400;
		color: #ff5400;
	}
</style>
