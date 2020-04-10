<template>
	<view class="demand-offer bg-white">
		<view class="font-bold" v-if="demand_detail.quoteList.length > 0">已有{{demand_detail.quoteList.length}}人报价</view>
		<view class="font-bold" v-else>暂无报价</view>
		<scroll-view class="scroll-view_H" scroll-x="true">
			<view class="scroll-view-item_H" v-for="(item, index) of demand_detail.quoteList" :key="index">
				<image :lazy-load="true" :src="BASE_URL + item.avatar"></image>
				<view class="ellipsis">{{item.username}}</view>
			</view>  
		</scroll-view>
	</view>
</template>

<script>
	import { BASE_URL } from '@/api'
	export default {
		name: '',
		props: {
			demand_detail: Object
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
			},
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.demand-offer {
	margin-top: 20upx;
	padding: 40upx 20upx;
	.scroll-view_H {
		margin-top: 30upx;
		white-space: nowrap;
	}
	.scroll-view-item_H {
		display: inline-block;
		margin-right: 20upx;
		text-align: center;
		width: 20%;
		image {
			width: 80upx;
			height: 80upx;
			margin-bottom: 15upx;
			border-radius: 50%;
		}
		view {
			font-size: 24upx;
		}
	}
}

</style>
