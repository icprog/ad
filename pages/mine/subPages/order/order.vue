<template>
	<view class="order">
		<view class="type-wrap">
			<view class="order-type d-flex align-items-center  justify-content-around bg-white border-bottom">
				<view class="type-item" 
					:class="{active: current == index}"
					v-for="(item, index) of orderType" :key="index"
					@tap="onChoseOrderTypeClick(index)"
				>{{item}}</view>
			</view>
		</view>
		
		<view v-show="current == 0">
			<order-item v-for="(item, index) of order_list" :key="index" :item="item" @onOperation="onOperation"></order-item>
		</view>
		<view v-show="current == 1">
			<order-item v-for="(item, index) of order_list" :key="index" :item="item" @onOperation="onOperation"></order-item>
		</view>
		<view v-show="current == 2">
			<order-item v-for="(item, index) of order_list" :key="index" :item="item" @onOperation="onOperation"></order-item>
		</view>
		<view v-show="current == 3">
			<order-item v-for="(item, index) of order_list" :key="index" :item="item" @onOperation="onOperation"></order-item>
		</view>
		<view v-show="current == 4">
			<order-item v-for="(item, index) of order_list" :key="index" :item="item" @onOperation="onOperation"></order-item>
		</view>
		<empty v-if="order_list.length <= 0"></empty>
		<uni-load-more :status="status" v-if="order_list.length >= 3"></uni-load-more>
	</view>
</template>

<script>
	import orderItem from '@/components/order-item'
	import empty from '@/components/empty'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	import { mapState, mapActions } from 'vuex'
	import { delOrder, urgeDelivery, confirmDelivery, orderFllow } from '@/api'
	export default {
		name: '',
		data () {
			return {
				orderType: ['全部', '待付款', '待发货', '待收货', '待评价'],
				current: 0,
				sort: 0,  // 分类, 0 所有,1代发货, 2待收货, 3已收货, 4待评价, 5已完成
				page: 1,
				status: 'more'
			}
		},
		onLoad (options) {
			if(options.index) {
				this.sort = options.index
				this.current = options.index
			}
			// this._reqGetOrderList()
		},
		onShow () {
			this.$hideTabbarButton()
			this._reqGetOrderList()
		},
		computed: {
			...mapState(['order_list']),
		},
		onReachBottom () {
			if(this.status != 'noMore') {
				this._reqGetOrderList()
			}
		},
		methods: { 
			...mapActions(['reqGetOrderList', 'reqGetUserInfo']),
			_reqGetUserInfo () {
				this.reqGetUserInfo({
					token: uni.getStorageSync('token')
				})
			},
			async onOperation ({type, item}) {
				console.log(type, item)
				let self = this;
				if(type == '取消订单') {
					uni.showModal({
						content: '确定要取消订单吗？',
						success: async function (res) {
							if(res.confirm) {
								let result = await delOrder ({
									iid: item.id,
									token: uni.getStorageSync('token')
								})
								console.log(result);
								if(result.code == 200) {
									self.page = 1;
									self._reqGetOrderList()
									self._reqGetUserInfo()
								}
							}
						}
					})
				}
				if(type == '联系TA') {
					uni.navigateTo({
						url: '/pages/mine/subPages/contact-us/contact-us?id=' + item.j_user[0].id
					})
				}
				if(type == '付款') {
					uni.navigateTo({
						url: '/pages/mall/subPages/confirm-order/confirm-order?id=' + item.j_commodity.id
					})
				}
				if(type == '催发货') {
					let result = await urgeDelivery ({
						iid: item.id,
						token: uni.getStorageSync('token')
					})
					if(result.code == 200) {
						uni.showToast({
							title: '已催促卖家尽快发货',
							icon: 'none'
						})
					}
				}
				if(type == '确认收货') {
					uni.showModal({
						content: '确保收到货后再执行此操作,确定继续吗？',
						success: async function (res) {
							if(res.confirm) {
								let result = await confirmDelivery ({
									iid: item.id,
									token: uni.getStorageSync('token')
								})
								console.log(result)
								if(result.code == 200) {
									self.page = 1;
									self._reqGetOrderList()
									self._reqGetUserInfo()
								}
							}
						}
					})
				}
				if(type == '查看物流') {
					uni.navigateTo({
						url: '/pages/mine/subPages/order-fllow/order-fllow?id=' + item.kuaidi_link.nu + '&com=' + item.kuaidi_link.com + '&name=' + item.kuaidi_link.coname
					})
				}
				if(type == '评价') {
					uni.navigateTo({
						url: '/pages/mine/subPages/goods-comment/goods-comment?id=' + item.j_commodity.id + '&orderId=' + item.id
					})
				}
				if(type == '申请退款') {
					uni.navigateTo({
						url: '/pages/mine/subPages/refund/refund?id=' + item.id
					})
				}
			},
			_reqGetOrderList () {
				this.status = 'loading'
				this.reqGetOrderList ({
					token: uni.getStorageSync('token'),
					sort: this.sort,
					page: this.page,
					callBack1: this.addPage,
					callBack2: this.changeStatus,
				})
			},
			changeStatus (statu) {
				this.status = statu;
			},
			addPage () {
				this.page ++;
			},
			onChoseOrderTypeClick (index) {
				if(this.current != index) {
					this.page = 1;
					this.sort = index;
					this.current = index;
					this._reqGetOrderList()
				}
			}
		},
		components: {
			orderItem,
			uniLoadMore,
			empty
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';	
.order {
	// padding-bottom: 40upx;
}
.type-wrap {
	height: 91upx;
}
.order-type {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	.type-item {
		padding: 25upx 0;
		color: #666666;
		&.active {
			border-bottom: 4upx solid $main-color;
			color: $main-color;
			font-weight: bold;
		}
	}	
}
/* #ifdef H5 */
.order-type {
	top: 44px;
}
/* #endif */


</style>
