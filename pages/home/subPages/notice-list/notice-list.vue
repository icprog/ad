<template>
	<view class="notice-wrap">
		<view class="notice-item d-flex align-items-center justify-content-between bg-white"
			v-for="(item, index) of notice_list" :key="index"
			@tap="onGoToDetail(item)"
		>
			<image class="notice-icon" src="/static/images/z2@2x.png" v-if="item.type == '系统' && item.yidu == 0"></image>
			<image class="notice-icon" src="/static/images/z3@2x.png" v-if="item.type == '发布' && item.yidu == 0"></image>
			<image class="notice-icon" src="/static/images/z4@2x.png" v-if="item.type == '系统' && item.yidu == 1"></image>
			<image class="notice-icon" src="/static/images/star-gray.png" v-if="item.type == '发布' && item.yidu == 1"></image>
			<view class="notice-center flex-1 d-flex flex-direction-column justify-content-between">
				<view class="title d-flex align-items-center justify-content-between">
					<view class="ellipsis text-change">【{{item.type}}】{{item.title}}</view>
					<image src="/static/images/z7@2x.png" v-if="item.yidu == 0"></image>
				</view>
				<view class="time d-flex align-items-center">
					<image class="time-icon" src="/static/images/z5@2x.png"></image>
					<text class="text-small text-muted">{{item.create_time_text}}</text>
					<image class="eye-icon" src="/static/images/z6@2x.png"></image>
					<text class="text-small text-muted">{{item.watch}}</text>
				</view>
			</view>
			<text class="iconfont">&#xe636;</text>
		</view>
	</view>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	import { signNotice } from '@/api'
	export default {
		name: '',
		data () {
			return {

			}
		},
		onShow () {
			this._reqGetNoticeList()
		},
		computed: {
			...mapState(['notice_list']),
		},
		methods: {
			...mapActions(['reqGetNoticeList']),
			_reqGetNoticeList () {
				this.reqGetNoticeList({
					token: uni.getStorageSync('token')
				})
			},
			async onGoToDetail (item) {
				let result = await signNotice ({
					token: uni.getStorageSync('token'),
					gg_id: item.id
				})
				if(result.code == 200) {
					uni.navigateTo({
						url: '/pages/home/subPages/notice-detail/notice-detail?id=' + item.id
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.notice-wrap {
	padding: 20upx;
	.notice-item {
		padding: 20upx;
		margin-bottom: 20upx;
		.notice-icon {
			width: 80upx;
			height: 80upx;
			margin-right: 20upx;
			flex-shrink: 0;
		}
		.notice-center {
			width: 70%;
			height: 80upx;
			.title {
				view {
					width: 95%;
				}
				image {
					width: 26upx;
					height: 20upx;
				}
			}
			.time {
				image {
					margin: 0 15upx 0 25upx;
				}
				text {
					color: #cad3d8;
					font-size: 20upx;
				}
				.time-icon {
					width: 20upx;
					height: 20upx;
				}
				.eye-icon {
					width: 25upx;
					height: 18upx;
				}
			}
		}
		.iconfont {
			margin-left: 20upx;
			font-size: 44upx;
			color: #cad3d8;
		}
	}
}
</style>
