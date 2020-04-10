<template>
	<view class="confirm-order">
		<address-item v-if="default_address.id" :item="default_address" :isOrderAddress="true" @onGoToAddressList="onGoToAddressList"></address-item>
		<view class="select" v-else @tap="onGoToAddressList">选择收货地址</view>
		<view class="goods-info bg-white" v-if="!price">
			<view class="text-small text-muted">商品信息</view>
			<view class="goods-list">
				<!-- <goods-item v-if="price" :item="demand_detail"></goods-item> -->
				<goods-item :item="goods_detail"></goods-item>
			</view>
			<view class="totalPrice d-flex justify-content-between">
				<text>商品合计</text>
				<text class="font-bold">￥{{goods_detail.price}}</text>
			</view>
			<!-- <view class="freight d-flex justify-content-between" v-if="Number(goods_detail.price) <= 88">
				<text>运费</text>
				<view>
					<text class="free text-small     ">满88元包邮</text>
					<text class="font-bold">￥10.00</text>
				</view>
			</view> -->
		</view>
		<view class="pay-methods bg-white">
			<pay-methods @onChosePayClick="onChosePayClick"></pay-methods>
		</view>
		<view class="confirm-bottom d-flex justify-content-between align-items-center">
				<!-- <view class="price font-bold" v-if="!price">￥{{goods_detail.price >= 88 ? goods_detail.price : goods_detail.price + 10}}</view> -->
				<view class="price font-bold" v-if="!price">￥{{goods_detail.price}}</view>
				<view class="price font-bold" v-else>￥{{price}}</view>
				<view class="submit" @tap="onSubmitOrder">提交订单</view>
		</view>
	</view>
</template>

<script>
	import addressItem from '@/pages/mine/subPages/address-list/children/address-item'
	import payMethods from '@/components/pay-methods'
	import goodsItem from '@/components/goods-item'
	import { buyGoods, confirmOffer } from '@/api'
	import { mapState, mapActions } from 'vuex'
	export default {
		name: '',
		data () {
			return {
				id: '',
				price: '',
				offerId: '',
				type: 1, // 支付方式， 默认1微信  2支付宝
			}
		},
		onLoad (options) {
			this.id = options.id
			if(options.type) {
				this.price = options.price
				this.offerId = options.offerId
				this._reqGetDemandDetail()
			}else {
				this._reqGetGoodsDetail()
			}
			this._reqGetAddressList()
		},
		computed: {
			...mapState(['address_list', 'default_address', 'goods_detail', 'demand_detail']),
		},
		methods: {
			...mapActions(['reqGetAddressList', 'reqGetGoodsDetail', 'reqGetDemandDetail']),
			onChosePayClick (type) {
				this.type = type;
				console.log(this.type)
			},
			async onSubmitOrder () {
				if(!this.default_address.id) {
					uni.showToast({
						title: '请选择收货地址',
						icon: 'none'
					})
					return;
				}
				let result;
				let provider;
				if(this.type == 1) {provider = 'wxpay'}
				if(this.type == 2) {provider = 'alipay'}
				if(this.price) {      // 买需求
					result = await confirmOffer ({
						token: uni.getStorageSync('token'),
						qid: this.offerId,
						did: this.id,
						address: this.default_address.id,
						paymod: this.type, // 支付方式
					})
				}else {             // 买商品
					result = await buyGoods ({
						token: uni.getStorageSync('token'),
						sid: this.id,
						pnum: 1,
						address: this.default_address.id,
						paymond: this.type, // 支付方式
					})
				}
				console.log(result)
				uni.requestPayment({
					provider: provider,
					orderInfo: result, //微信、支付宝订单数据
					success: function (res) {
						console.log(res)
							if(res.errMsg == 'requestPayment:ok') {
								uni.redirectTo({
									url: '/pages/mine/subPages/success/success'
								})
							}
					},
					fail: function (err) {
							console.log('fail:' + JSON.stringify(err));
					}
				}); 
				// uni.redirectTo({
				// 	url: '/pages/mine/subPages/success/success'
				// })
				// uni.showToast({
				// 	title: '付款成功'
				// })
				// setTimeout(() => {
				// 	uni.navigateBack()
				// }, 1500)

			},
			_reqGetAddressList () {
				this.reqGetAddressList ({
					token: uni.getStorageSync('token')
				})
			},
			_reqGetDemandDetail () {
				this.reqGetDemandDetail ({
					xid: this.id
				})
			},
			_reqGetGoodsDetail () {
				this.reqGetGoodsDetail({
					cid: this.id
				})
			},
			onGoToAddressList () {
				uni.navigateTo({
					url: '/pages/mine/subPages/address-list/address-list?type=select'
				})
			}
		},
		components: {
			addressItem,
			payMethods,
			goodsItem
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';
.select {
	padding: 20upx;
	line-height: 80upx;
	background: #fff;
}
.confirm-order {
	padding: 20upx;
	.goods-info {
		margin-top: 20upx;
		padding: 20upx;
		.text-small {
			margin-bottom: 30upx;
		}
		.goods-list {
			
		}
		.freight {
			margin-top: 20upx;
			.free {
				margin-right: 20upx;
				padding: 7upx 10upx;
				color: #f13130;
				background: #ffe9e9;
			}
		}
	}
	.pay-methods {
		margin-top: 20upx;
		padding: 20upx;
	}
	.confirm-bottom {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 90upx;
		line-height: 90upx;
		.price {
			width: 65%;
			padding-left: 40upx;
			border-top: 1upx solid #eee;
			color: $main-color;
			font-size: 32upx;
		}
		.submit {
			width: 35%;
			text-align: center;
			color: #fff;
			background: $main-color;
		}
	}
}
</style>
