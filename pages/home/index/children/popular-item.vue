<template>
	<view class="item d-flex bg-white" @tap="onToGoodsDetail(item)">
		<image class="item-img" :src="BASE_URL + (item.avatar || item.images[0])"></image>
		<view class="item-right flex-1 border-bottom" :style="{'padding-bottom': newPaddingBottom}">
			<view class="title w-100 ellipsis d-flex">
				<text class="name ellipsis" :style="{width: (item.username ? '70%' : '100%')}">{{item.title || item.username}}</text>
				<text v-if="showStar" class="distance ellipsis text-muted text-change">{{item.distance}}km</text>
			</view>
			<block v-if="showMoney">
				<view class="desc text-muted ellipsis text-change">{{item.described || item.content}}</view>
				<view class="price text-change main-color" v-if="item.price">￥{{item.price}}</view>
			</block>
			<block v-if="showStar">
				<view class="star d-flex align-items-center">
					<uni-rate :disabled="true" :value="item.pf" :size="10" /><text class="text-change">{{item.pf}}分</text>
				</view>
				<view class="content ellipsis d-flex flex-wrap" v-if="item.la">
					<view class="content-item" v-for="(item, index) of item.la.lable" :key="index">{{item}}</view>
				</view>
			</block>
			<block v-if="showDealNumber">
				<view class="desc text-muted ellipsis text-change">{{item.described}}</view>
				<view class="item-bottom d-flex justify-content-between">
					<view class="singlePrice main-color">￥{{item.price}}</view>
					<view class="text-muted text-change">成交量：<text>{{item.transaction}}笔</text></view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	import { BASE_URL } from '@/api'
	export default {
		props: {
			showStar: Boolean,
			showMoney: Boolean,
			showDealNumber: Boolean,
			item: Object,
			paddingBottom: {type: [String, Number], default: 40}
		},
		name: '',
		data () {
			return {

			}
		},
		computed: {
			BASE_URL () {
				return BASE_URL
			},
			newPaddingBottom () {
				return uni.upx2px(this.paddingBottom) + 'px'
			}
		},
		onLoad () {

		},
		methods: {
			onToGoodsDetail (item) {
				// uni.navigateTo({
				// 	url: '/pages/home/subPages/goods-detail/goods-detail?id=' + id
				// })
				this.$emit('onToGoodsDetail', item)
			}
		},
		components: {
			uniRate
		}
	}
</script>

<style lang="scss" scoped>
.item {
	margin-bottom: 40upx;
	&:last-child {
		margin-bottom: 20upx;
		border-bottom: none;
	}
	.item-img {
		width: 145upx;
		height: 145upx;
		margin-right: 20upx;
	}
	.item-right {
		width: 70%;
		// padding-bottom: 60upx;
		.title {
			.name {
				// font-weight: bold;
				font-size: 30upx;
			}
			.distance {
				width: 30%;
				text-align: right;
			}
		}
		.desc, .star {
			margin: 15upx 0;
			.text-change {
				margin-left: 20upx;
				color: #666666;
			}
		}
		.content {
			// height: 52upx;
			overflow: hidden;
			.content-item {
				margin-right: 10upx;
				margin-bottom: 10upx;
				padding: 10upx 15upx;
				font-size: 24upx;
				color: #999999;
				background: #f2f2f2;
			}
		}
		.item-bottom {
			margin-top: 20upx;
			.singlePrice {
				font-size: 26upx;
			}
			text {
				color: #333333;
			}
		}
	}
}
</style>
