<template>
	<view class="wrapper container-30">
		<uni-swipe-action v-for="item of merchant_goods" :key="item.id"
			:options="options2" @click="bindDelClick(item.id, $event)"
		>
			<view class="goods-item d-flex align-items-center" @tap="onGoToGoodsDetail(item.id)">
				<image class="goods-img" :src="BASE_URL + item.images[0]"></image>
				<view class="goods-right">
					<view class="title ellipsis">{{item.title}}</view>
					<view class="sub-title ellipsis text-muted text-change">{{item.described}}</view>
					<view class="price text-change d-flex align-items-center justify-content-between">
						<text>￥{{item.price}}</text>
						<view class="d-flex ">
							<!-- <view class="delete" @tap.stop="onDelGoods(item)">删除</view> -->
							<!-- <view class="edit" @tap.stop="onEditGoods(item)">编辑</view> -->
						</view>
					</view>
				</view>
			</view>
		</uni-swipe-action>
		<empty v-if="merchant_goods.length <= 0"></empty>
	</view>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action'
	import goodsItem from '@/pages/home/index/children/popular-item'
	import empty from '@/components/empty'
	import { BASE_URL, delGoods } from '@/api'
	export default {
		name: '',
		data () {
			return {
				options2: [{
					text: '删除',
					style: {
						backgroundColor: '#f13130'
					}
				},{
					text: '编辑',
					style: {
						backgroundColor: 'skyblue'
					}
				}
				],
			}
		},
		onLoad () {
			
		},
		onShow () {
			this.$hideTabbarButton()
			this._reqGetMerchantGoodds()
		},
		computed: {
			...mapState(['merchant_goods']),
			BASE_URL () {
				return BASE_URL
			}
		},
		methods: {
			...mapActions(['reqGetMerchantGoodds']),
			onEditGoods (item) {
				uni.navigateTo({
					url: '/pages/publish/subPages/edit-goods/edit-goods?goodsId=' + item.id
				})
			},
			_reqGetMerchantGoodds () {    // 获取已发布的商品
				this.reqGetMerchantGoodds ({
					fid: uni.getStorageSync('user_id'),
				})
			},
			async bindDelClick (id, e) {   
				let result = '';
				if(e.index == 0) {  // 删除
					result = await delGoods ({
						cid: id,
						token: uni.getStorageSync('token')
					})
				}
				if(e.index == 1) {  // 编辑
					uni.navigateTo({
						url: '/pages/publish/subPages/edit-goods/edit-goods?goodsId=' + id
					})
				}
				console.log(result)
				if(result.code == 2000) {
					this._reqGetMerchantGoodds()
				}
			},
			onGoToGoodsDetail (id) {
				uni.navigateTo({
					url: '/pages/home/subPages/goods-detail/goods-detail?id=' + id
				})
			}
		},
		components: {
			goodsItem,
			uniSwipeAction,
			empty
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';
.wrapper {
	min-height: 100%;
	.goods-item {
		padding: 20upx;
		.goods-img {
			width: 144upx;
			height: 144upx;
			margin-right: 20upx;
		}
		.goods-right {
			width: 75%;
			> view {
				margin-bottom: 10upx;
			}
			.title {
				font-size: 30upx;
			}
			.price {
				color: $main-color;
				.edit {
					margin-left: 20upx;
				}
			}
		}
	}
}
</style>
