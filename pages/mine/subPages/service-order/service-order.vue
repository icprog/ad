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
			<order-item :service="true" v-for="(item, index) of order_list1" :key="index" :item="item" @onOperation="onOperation"></order-item>
		</view>
		<view v-show="current == 1">
			<order-item :service="true" v-for="(item, index) of order_list1" :key="index" :item="item" @onOperation="onOperation"></order-item>
		</view>
		<view v-show="current == 2">
			<order-item :service="true" v-for="(item, index) of order_list1" :key="index" :item="item" @onOperation="onOperation"></order-item>
		</view>
		<view v-show="current == 3">
			<order-item :service="true" v-for="(item, index) of order_list1" :key="index" :item="item" @onOperation="onOperation"></order-item>
		</view>
		<view v-show="current == 4">
			<order-item :service="true" v-for="(item, index) of order_list1" :key="index" :item="item" @onOperation="onOperation"></order-item>
		</view>
		<uni-popup :show="showPopup" position="middle" mode="fixed" msg="快递单号" @hidePopup="togglePopup('')">
			<view class="wrap">
				<input type="text" placeholder="输入快递单号" v-model="deliveryId">
				<button class="btn" @tap="onConfirmDelivery">确定</button>
			</view>
		</uni-popup>
		<empty v-if="order_list1.length <= 0"></empty>
		<uni-load-more :status="status" v-if="order_list1.length >= 3"></uni-load-more>
	</view>
</template>

<script>
	import orderItem from '@/components/order-item'
	import empty from '@/components/empty'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import { mapState, mapActions } from 'vuex'
	import { delOrder, urgeDelivery, confirmDelivery, orderFllow, deliveryGoods, confirmRefund, refuseRefund } from '@/api'
	export default {
		name: '',
		data () {
			return {
				orderType: ['全部', '待付款', '待发货', '待收货', '待退款'],
				current: 0,
				sort: 0,  // 分类, 0 所有,1代发货, 2待收货, 3已收货, 4待评价, 5待退款
				page: 1,
				status: 'more',
				showPopup: false,
				orderId: '', // 订单id
				deliveryId: '', // 快递单号
			}
		},
		onLoad (options) {
			if(options.index) {
				this.sort = options.index
				this.current = options.index
			}
			this._reqGetOrderList1()
		},
		onShow () {
			this.$hideTabbarButton()
		},
		computed: {
			...mapState(['order_list1']),
		},
		onReachBottom () {
			if(this.status != 'noMore') {
				this._reqGetOrderList1()
			}
		},
		methods: { 
			...mapActions(['reqGetOrderList1', 'reqGetUserInfo']),
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
									self._reqGetOrderList1()
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
									this.page = 1;
									self._reqGetOrderList1()
								}
							}
						}
					})
				}
				if(type == '查看物流') {
					uni.navigateTo({
						url: '/pages/mine/subPages/order-fllow/order-fllow?id=' + item.id
					})
				}
				if(type == '评价') {
					uni.navigateTo({
						url: '/pages/mine/subPages/goods-comment/goods-comment?id=' + item.j_commodity.id + '&orderId=' + item.id
					})
				}
				if(type == '发货') {
					this.orderId = item.id;
					this.showPopup = true;
				}
				if(type == '确认退款') {
					let result = await confirmRefund ({
						iid: item.id,
						token: uni.getStorageSync('token')
					})
					if(result.code == 200) {
						uni.showToast({
							title: '退款成功'
						})
						setTimeout(() => {
							self._reqGetOrderList1()
							self._reqGetUserInfo()
						}, 1500)
					}
				}
				if(type == '拒绝退款') {
					let result = await refuseRefund ({
						iid: item.id,
						token: uni.getStorageSync('token')
					})
					if(result.code == 200) {
						uni.showToast({
							title: '退款已拒绝'
						})
						setTimeout(() => {
							self._reqGetOrderList1()
							self._reqGetUserInfo()
						}, 1500)
					}
				}
			},
			async onConfirmDelivery () {
				let self = this;
				if(this.deliveryId == '') {
					uni.showToast({
						title: '请输入快递单号',
						icon: 'none'
					})
					reutrn;
				}
				let result = await deliveryGoods ({
					iid: this.orderId,
					track: this.deliveryId,
				})
				console.log(result)
				if(result.code == 200) {
					uni.showToast({
						title: '发货成功',
					})
					setTimeout(() => {
						self.showPopup = false;
						self.deliveryId = '';
						self._reqGetOrderList1()
						self._reqGetUserInfo()
					}, 1500)
				}
			},
			_reqGetOrderList1 () {
				this.status = 'loading'
				this.reqGetOrderList1 ({
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
					this._reqGetOrderList1()
				}
			},
			togglePopup () {
				this.showPopup = false;
			}
		},
		components: {
			orderItem,
			uniLoadMore,
			empty,
			uniPopup
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';	
.order {
	// padding-bottom: 40upx;
}
.wrap {
	width: 460upx;
	input {
		margin: 30upx 0;
		border-bottom: 1upx solid #eee;
	}
	.btn {
		height: 90upx;
		line-height: 90upx;
		background: none;
	}
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
