<template>
	<view class="wrap">
		<goods-banner :goods_detail="goods_detail"></goods-banner>
		<view class="goods-belong mg-top-20 bg-white">
			<goods-belong :item="goods_detail" :showMoney="true" @onGoToMerchant="onGoToMerchant"></goods-belong>
		</view>
		<view class="wrapper mg-top-20 bg-white">
			<view class="goods-oper-bar d-flex justify-content-evenly border-bottom">
				<view class="goods-oper-bar-item" 
							:class="{active: current === index}" 
							v-for="(item, index) of items" :key="index"
							@tap="onItemClick(index)"
				>{{item}}</view>
			</view> 
			<view class="goods-detail" v-if="current == 0">
				<goods-detail :goods_detail="goods_detail"></goods-detail>
			</view>
			<view class="goods-detail" v-if="current == 1">
				<goods-comment :goods_comment="goods_comment"></goods-comment>
			</view>
		</view>
		<view class="contact d-flex bg-white">
			<view class="flex-1" @tap="onContactClick(goods_detail.uid)">与TA联系</view>
			<view class="flex-1 red" @tap="onBuyClick">立即购买</view>
		</view>
	</view>
</template>

<script>
	import goodsBanner from './children/goods-banner'
	import goodsBelong from '@/pages/home/subPages/merchant-detail/children/merchant-item'
	import goodsDetail from './children/goods-detail'
	import goodsComment from './children/goods-comment'
	import { mapState, mapActions } from 'vuex'
	import { dealLogin } from '@/common/js/common'
	export default {
		name: '',
		data () {
			return {
				items: [
					'商品详情',
					'评价'
				],
				current: 0,
				id: '', // 商品id
				token: ''
			}
		},
		onLoad (options) {
			this.id = options.id;
			this.token = uni.getStorageSync('token');
			this._reqGetGoodsDetail()
			this._reqGetGoodsComment()
		},
		onShow () {
			this.$hideTabbarButton()
		},
		computed: {
			...mapState(['goods_detail', 'goods_comment']),
		},
		methods: {
			...mapActions(['reqGetGoodsDetail', 'reqGetGoodsComment']),
			_reqGetGoodsComment () {
				this.reqGetGoodsComment ({
					token: this.token,
					ccid: this.id
				})
			},
			_reqGetGoodsDetail () {
				this.reqGetGoodsDetail({
					cid: this.id
				})
			},
			onGoToMerchant (id) {   // 点击跳转到商家详情   // 不一定需要
				// uni.navigateTo({
				// 	url: '/pages/home/subPages/merchant-detail/merchant-detail?id=' + id
				// })
			},
			onBuyClick () {  // 购买
				if(!dealLogin()) {
					return;
				}
				uni.navigateTo({
					url: '/pages/mall/subPages/confirm-order/confirm-order?id=' + this.id
				})
			},
			onContactClick (id) {  // 与他联系
				if(!dealLogin()) {
					return;
				}
				uni.navigateTo({
					url: '/pages/mine/subPages/contact-us/contact-us?id=' + id
				})
			},
			onItemClick (index) {  // 切换详情、评价
				if(this.current !== index) {
					this.current = index;
				}
			}
		},
		components: {
			goodsBanner,
			goodsBelong,
			goodsDetail,
			goodsComment
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';	
.wrap {
	padding-bottom: 90upx;
}
.goods-belong {
	padding: 30upx;
}
.wrapper {
	padding: 20upx 0;
	.goods-oper-bar-item {
		padding: 20upx 0;
		&.active {
			border-bottom: 3px solid $main-color;
			font-weight: bold;
		}
	}
}
.contact {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	line-height: 90upx;
	text-align: center;
	border-top: 1upx solid #eeeeee;
	.red {
		color: #fff;
		background: $main-color;
	}
}
</style>
