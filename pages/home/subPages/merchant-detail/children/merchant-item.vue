<template>
	<view class="d-flex" @tap="onGoToMerchant(item.uid)">
		<image class="merchant-img" :src="BASE_URL + (item.firm_images ? item.firm_images[0] : item.avatar)"></image>
		<view class="info-right flex-1 d-flex flex-direction-column justify-content-between">
			<view class="name-wrap d-flex align-items-center justify-content-between">
				<view class="name">{{item.username}}</view>
			</view>
			<view class="d-flex align-items-center">
				<!-- <uni-rate :value="item.star.comprehensive" size="12"></uni-rate> -->
				<!-- <view>{{item.star.comprehensive}}</view> -->
				<uni-icon size="12" type="star-filled" color="rgb(255, 202, 62)" v-for="(i) of item.star.comprehensive" :key="i"></uni-icon>
				<uni-icon size="12" type="star-filled" color="rgb(236, 236, 236)" v-for="(i) of (5 - item.star.comprehensive)" :key="i"></uni-icon>
			</view>
			<view class="score-wrap d-flex justify-content-between" v-if="!showMoney">
				<view>完成质量<text>{{item.star.quality}}</text></view>
				<view class="middle">工作效率<text>{{item.star.efficiency}}</text></view>
				<view>服务态度<text>{{item.star.attitude}}</text></view>
			</view>
			<view class="money text-small d-flex" v-else>
				<view class="text-muted">近三个月<text>{{item.sum}}元</text></view>
				<view class="text-muted">成交<text>{{item.count}}笔</text></view>
			</view>
		</view>
		<block v-if="!showMoney">
			<image class="icon-favorite" src="/static/images/d4@2x.png" v-if="item.isShouc == 0" @tap="onCollectClick(1)"></image>
			<image class="icon-favorite" src="/static/images/d3@2x.png" v-else  @tap="onCollectClick(0)"></image>
		</block>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	import { BASE_URL } from '@/api'
	export default {
		props: {
			showMoney: Boolean,
			item: Object
		},
		name: '',
		data () {
			return {
				// value: this.item.star.comprehensive
			}
		},
		onLoad () {

		},
		computed: {
			BASE_URL () {
				return BASE_URL
			},
			// value () {
			// 	return this.item.star.comprehensive
			// }
		},
		methods: {
			onGoToMerchant (id) {
				this.$emit('onGoToMerchant', id)
			},
			onCollectClick (type) {
				this.$emit('onCollectClick', type)
			},
		},
		components: {
			uniRate,
			uniIcon
		}
	}
</script>

<style lang="scss" scoped>
.merchant-img {
		width: 140upx;
		height: 140upx;
		margin-right: 20upx;
	}
	.info-right {
		height: 140upx;
		.name-wrap {
			.name {
				font-size: 32upx;
			}
		}
		.score-wrap {
			font-size: 20upx;
			text {
				margin-left: 5upx;
				color: red;
			}
		}
		.money {
			text {
				color: #333;
				margin-left: 10upx;
				margin-right: 50upx;
			}
		}
	}
	.icon-favorite {
		width: 70upx;
		height: 70upx;
		border-radius: 50%;
	}
</style>
