<template>
	<view class="wrap">
		<view class="acitve-content" v-if="item.zhuanfaInfo && item.text != ''">{{item.text}}</view>
		<view class="acitve-content" v-if="item.text && !item.zhuanfaInfo">{{item.text}}</view>
		<view class="acitve-content" v-if="item.zhuanfaInfo && item.zhuanfaInfo != ''">{{item.zhuanfaInfo.text}}</view>
		<!-- <view class="active-content">{{item.text}}</view> -->
		<view class="img-list d-flex flex-wrap" v-if="item.zhuanfaInfo && item.zhuanfaInfo.images">
			<image :src="BASE_URL + img" v-for="(img, index2) of item.zhuanfaInfo.images" :key="index2" @tap="onPreviewImage(item.zhuanfaInfo.images, index2)"></image>
		</view>
		<view class="img-list d-flex flex-wrap" v-else>
			<image :src="BASE_URL + img" v-for="(img, index2) of item.images" :key="index2" @tap="onPreviewImage(item.images, index2)"></image>
		</view>
		<view class="active-bottom d-flex border-bottom">
			<view class="active-time flex-1 text-small text-muted">发布时间：{{item.create_time_text}}</view>
			<view class="active-operate text-small text-muted flex-1 d-flex justify-content-around">
				<view class="d-flex align-items-center" @tap="onActiveButtonClick(1,item.id)">
					<image src="/static/images/e23@2x.png"></image>{{item.huifu}}
				</view>
				<view class="d-flex align-items-center" v-if="item.dianzan == 0" @tap.stop="onActiveButtonClick(2,item.id)">
					<image src="/static/images/d22@2x.png"></image>{{item.dianzan_num}}
				</view>
				<view class="d-flex align-items-center main-color" v-else @tap.stop="onActiveButtonClick(2, item.id)">
					<image src="/static/images/d21@2x.png"></image>{{item.dianzan_num}}
				</view>
				<view class="d-flex align-items-center" @tap.stop="onActiveButtonClick(3, item.id)">
					<image src="/static/images/d23@2x.png"></image>{{item.zhuanfa}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { BASE_URL } from '@/api'
	import { previewImg } from '@/common/js/common'
	export default {
		name: '',
		props: {
			item: Object
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
			onActiveButtonClick (type, id) {
				this.$emit('onActiveButtonClick', {type: type, id: id})
			},
			onPreviewImage (url, index) {
				previewImg(url, index)
			}
		} 
	}
</script>

<style lang="scss" scoped>
.wrap {
	padding-top: 20upx;
}	
.acitve-content {
		padding-bottom: 20upx;
		line-height: 1.4;
		word-break: break-all;
		text-align: justify;
	}
	.img-list {
		padding-bottom: 30upx;
		image {
			width: 108upx;
			height: 108upx;
			margin-right: 20upx;
			border-radius: 10upx;
		}
	}
	.active-bottom {
		padding-bottom: 20upx;
		.active-operate {
			view {
				line-height: 1;
			}
			image {
				width: 25upx;
				height: 25upx;
				margin-right: 15upx;
			}
		}
	}
</style>
