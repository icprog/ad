<template>
	<view class="demand-info bg-white">
		<view class="title font-bold">{{demand_detail.title}}</view>
		<view class="desc text-muted">{{demand_detail.content}}</view>
		<scroll-view class="scroll-view_H" scroll-x="true">
			<view class="scroll-view-item_H"
				v-for="(item, index) of demandImg" :key="index"
			><image :lazy-load="true" :src="BASE_URL + item" @tap="onPreviewEvent(index)"></image></view>
		</scroll-view>
		<view class="time-wrap text-muted text-small d-flex align-items-center justify-content-between">
			<view class="">发布时间：{{demand_detail.created_time_text}}</view>
			<view v-if="demand_detail.isquote == 1">我的报价：<text class="offer font-bold">￥{{demand_detail.quotePrice}}</text></view>
		</view>
	</view>
</template>

<script>
	import { BASE_URL } from '@/api'
	export default {
		name: '',
		props: {
			isOffer: Boolean,
			demand_detail: Object,
			demandImg: Array,
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
			onPreviewEvent (index) {
				let url = [];
				this.demandImg.forEach((val, index) => {
					url.push(BASE_URL + val)
				})
				uni.previewImage({
					current: url[index],
					urls: url
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.demand-info {
	padding: 30upx 30upx 40upx 30upx;
	.title {
		margin-bottom: 20upx;
		font-size: 32upx;
	}
	.time-wrap {
		min-height: 38upx;
	}
	.offer {
		color: #f13130;
		font-size: 28upx;
	}
}	
.scroll-view_H {
	width: 100%;
	margin: 20upx 0;
	white-space: nowrap;
	image {
		width: 200upx;
		height: 180upx;
		margin-right: 10upx;
	}
}
.scroll-view-item_H {
	display: inline-block;
}
</style>
