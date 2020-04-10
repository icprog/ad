<template>
	<view class="order-item bg-white">
		<view class="order-item-top d-flex align-items-center justify-content-between">
			<view class="order-company d-flex align-items-center">
				<image class="logo rounded" :src="BASE_URL + item.j_user[0].avatar"></image>
				{{item.j_user[0].username}}
			</view>
			<view class="order-status" v-if="item.indent_status == 0">待付款</view>
			<view class="order-status" v-if="item.indent_status == 1">待发货</view>
			<view class="order-status" v-if="item.indent_status == 2">待收货</view>
			<view class="order-status" v-if="item.indent_status == 3">待评价</view>
			<view class="order-status" v-if="item.indent_status == 4">已完成</view>
			<view class="order-status" v-if="item.indent_status == 5">退款中</view>
			<view class="order-status" v-if="item.indent_status == 6">退款成功</view>
			<view class="order-status" v-if="item.indent_status == 7">退款失败</view>
		</view>
		<goods-item :item="item.j_commodity"></goods-item>
		<view class="d-flex price-info">共1件商品 合计：￥{{item.price}}元 
			<!-- <text class="text-small text-muted" v-if="item.price <= 88">(含运费￥10.00)</text> -->
		</view>
		<view class="btn-group d-flex">
			<!-- <button class="btn">申请退款</button> -->
			<block v-if="service">
				<button class="btn" @tap="onOperation('联系TA', item)">联系TA</button>
				<button class="btn orange" v-if="item.indent_status == 1" @tap="onOperation('发货', item)">发货</button>
				<button class="btn" v-if="item.indent_status == 5" @tap="onOperation('拒绝退款', item)">拒绝退款</button>
				<button class="btn orange" v-if="item.indent_status == 5" @tap="onOperation('确认退款', item)">确认退款</button>
			</block>
			<block v-else>
				<button class="btn" v-if="item.indent_status == 0" @tap="onOperation('取消订单', item)">取消订单</button>
				<button class="btn" v-if="item.indent_status == 0 || item.indent_status == 1" @tap="onOperation('联系TA', item)">联系TA</button>
				<button class="btn orange" v-if="item.indent_status == 0" @tap="onOperation('付款', item)">付款</button>
				<button class="btn" v-if="item.indent_status == 1 || item.indent_status == 2" @tap="onOperation('申请退款', item)">申请退款</button>
				<button class="btn orange" v-if="item.indent_status == 1" @tap="onOperation('催发货', item)">催发货</button> 
				<button class="btn" v-if="item.indent_status == 2" @tap="onOperation('查看物流', item)">查看物流</button> 
				<button class="btn orange" v-if="item.indent_status == 2" @tap="onOperation('确认收货', item)">确认收货</button> 
				<button class="btn orange" v-if="item.indent_status == 3" @tap="onOperation('评价', item)">评价</button> 
			</block>
		</view>
	</view>
</template>

<script>
	import goodsItem from './goods-item'
	import { BASE_URL, delOrder } from '@/api'
	export default {
		name: '',
		props: {
			item: Object,
			service: {type: Boolean, default: false}
		},
		data () {
			return {

			}
		},
		onLoad () {

		},
		computed: {
			BASE_URL () {
				return BASE_URL
			}
		},
		methods: {
			onCommentClick () {
				uni.navigateTo({
					url: '/pages/mine/subPages/goods-comment/goods-comment'
				})
			},
			onOperation (type, item) {   // 取消订单
				this.$emit('onOperation', {type, item})
			},
			// onContactMerchant (item) {   // 联系商家
			// 	this.$emit('onContactMerchant', item)
			// },
			// onPayMoney (item) {   // 付款
			// 	this.$emit('onPayMoney', item)
			// },
			// onUrgeDelivery (item) { // 催发货
			// 	this.$emit('onUrgeDelivery', item)
			// },
			// onCheckDelivery (item) { // 查看物流
			// 	this.$emit('onCheckDelivery', item)
			// },
			// onConfirmDelivery (item) {  // 确认收货
			// 	this.$emit('onConfirmDelivery', item)
			// },
			// onComment (item) {  // 评论
			// 	this.$emit('onComment', item)
			// }
		},
		components: {
			goodsItem,
		}
	}
</script>

<style lang="scss" scoped>
.order-item {
	padding: 20upx;
	margin-bottom: 20upx;
	.order-item-top {
		margin-bottom: 30upx;
		.logo {
			width: 40upx;
			height: 40upx;
			margin-right: 15upx;
		}
	}
	.order-status {
		color: #ff5400;
	}
	.price-info {
		justify-content: flex-end;
		padding: 24upx 0;
	}
	.btn-group {
		justify-content: flex-end;
		margin: 0 -20upx;
		padding: 16upx 20upx 0 20upx;
		border-top: 1upx solid #eee;
		button {
			padding: 10upx 30upx;
			margin: 0;
			margin-left: 20upx;
			line-height: 1;
			border: 1upx solid #bdbdbd;
			font-size: 24upx;
			background: #fff;
		}
		.orange {
			color: #ff5705;
			border-color: #ff5705;
		}
	}
}
</style>
