<template>
	<view class="comment-item border-bottom">
		<view class="comment-person d-flex align-items-center justify-content-between">
			<image :src="BASE_URL + item.join_user.avatar"></image>
			<text class="flex-1">{{item.join_user.username}}</text>
			<!-- <text class="iconfont" style="color: #bdbdbd;">&#xe60b;</text> -->
		</view>
		<scroll-view class="scroll-view_H" scroll-x="true" v-if="item.images.length">
				<view class="scroll-view-item_H" v-for="(img, ind) of item.images" :key="ind">
					<image :src="BASE_URL + img"></image>
				</view>
		</scroll-view>
		<view class="comment-content">{{item.crontent}}</view>
		<view class="comment-target d-flex align-items-center">
			<image :src="BASE_URL + item.commodity_info.images[0]"></image>
			<view class="target-info text-small">
				<view class="target-title w-100 ellipsis">{{item.commodity_info.title}}</view>
				<view>￥{{item.commodity_info.price}}</view>
			</view>
		</view>
		<view class="comment-extra-info d-flex align-items-center justify-content-between text-small text-muted">
			<view class="comment-time">{{item.create_time}}</view>
			<!-- <view class="comment-oper d-flex align-items-center">
				<view class="comment-oper-itme d-flex align-items-center">
					<image src="/static/images/e23@2x.png"></image>20
				</view>
				<view class="comment-oper-itme align-items-center">
					<image src="/static/images/d22@2x.png"></image>168
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import { BASE_URL } from '@/api'
	export default {
		name: '',
		props: {
			item: Object
		},
		data () {
			return {

			}
		},
		computed: {
			BASE_URL () {
				return BASE_URL
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.comment-item {
	margin-bottom: 50upx;
	padding-bottom: 50upx;
	.comment-person {
		image {
			width: 60upx;
			height: 60upx;
			margin-right: 20upx;
			border-radius: 50%;
		}
	}
}
.scroll-view_H {
	margin: 30upx 0;
	white-space: nowrap;
	.scroll-view-item_H {
		display: inline-block;
		image {
			width: 150upx;
			height: 150upx;
			border-radius: 15upx;
			margin-right: 10upx;
		}
	}
}
.comment-content {
	text-align: justify;
}
.comment-target {
	margin: 30upx 0;
	// .target-img {
	// 	width: 20%;
	// 	height: 0;
	// 	padding-bottom: 20%;
	// 	background: url('~@/static/images/g64@2x.png');
	// 	background-size: 100%;
	// }
	image {
		width: 148upx;
		height: 148upx;
		border-radius: 5upx;
	}
	.target-info {
		width: 80%;
		height: 148upx;
		padding-left: 20upx;
		background: #f7f7f7;
		.target-title {
			margin: 25upx 0;
		}
	}
}
.comment-extra-info {
	.comment-oper-itme {
		margin-left: 70upx;
		image {
			width: 26upx;
			height: 26upx;
			margin-right: 24upx;
		}
	}	
}
</style>
