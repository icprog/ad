<template>
	<view class="publish-active bg-white">
		<textarea name="" id="" cols="30" class="w-100" rows="5" v-model="text" placeholder="此时此刻, 想和大家说点什么..."></textarea>
		<upload :imgList="imgList" @onAddImgEvent="onAddImgEvent" @onDelImgEvent="onDelImgEvent"></upload>
		<!-- <view class="img-wrap flex-wrap d-flex align-items-center">
				<view class="img-item">
					<text class="iconfont">&#xe7be;</text>
					<image src="/static/images/y54@2x.png"></image>
				</view>
				<image src="/static/images/f48@2x.png"></image>
		</view> -->
		<!-- 分享 -->
		<uni-popup class="publish-success" :show="type === 'middle'" position="middle" mode="fixed" msg="发布成功" @hidePopup="togglePopup('')">
			<view class="success-wrap">
				<view class="share-title text-muted">您可以分享到以下平台</view>
				<view class="share-list d-flex">
					<view class="share-item d-flex flex-direction-column align-items-center" @tap="onShareClick(1)">
						<image src="/static/images/g22@2x.png"></image>
						<text class="text-muted text-small">微信</text>
					</view>
					<view class="share-item d-flex flex-direction-column align-items-center" @tap="onShareClick(2)">
						<image src="/static/images/g23@2x.png"></image>
						<text class="text-muted text-small">朋友圈</text>
					</view>
					<view class="share-item d-flex flex-direction-column align-items-center" @tap="onShareClick(3)">
						<image src="/static/images/g24@2x.png"></image>
						<text class="text-muted text-small">QQ空间</text>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import upload from '@/components/upload'
	import { BASE_URL, publishActive } from '@/api'
	import { mapState, mapActions } from 'vuex'
	import { pathToBase64, base64ToPath } from '@/common/js/base64.js'
	import { uploadImg, delUploadImg } from '@/common/js/common'
	export default {
		name: '',
		data () {
			return {
				type: '',
				text: '',
				imgList: [],
				baseList: []
			}
		},
		onLoad () {
			
		},
		onShow () {
			this.$hideTabbarButton()
		},
		onNavigationBarButtonTap (e) {
			this._publishActive()
		},
		computed: {
			BASE_URL () {
				return BASE_URL
			},
		},
		methods: {
			onShareClick (type) {
				let self = this;
				if(type == 1) {   // 微信
					uni.share({
							provider: "weixin",
							scene: "WXSceneSession",
							type: 0,
							summary: self.text,
							href: 'http://www.taobao.com',
							imageUrl: self.imgList[0],
							success: function (res) {
									console.log("success:" + JSON.stringify(res));
							},
							fail: function (err) {
									console.log("fail:" + JSON.stringify(err));
							}
					});
				}
				if(type == 2) {   // 朋友圈
					uni.share({
							provider: "weixin",
							scene: "WXSenceTimeline",
							type: 0,
							summary: self.text,
							href: 'http://www.taobao.com',
							imageUrl: self.imgList[0],
							success: function (res) {
								uni.showToast({
									title: '分享成功'
								})
							},
							fail: function (err) {
									console.log("fail:" + JSON.stringify(err));
							}
					});
				}
				if(type == 3) {   // QQ空间
					uni.showToast({
						title: '暂不支持',
						icon: 'none'
					})
				}
			},
			async _publishActive () {
				if(this.text == '') {
					uni.showToast({
						title: '说点什么吧',
						icon: 'none'
					})
					return
				}
				if(this.imgList.length <= 0) {
					uni.showToast({
						title: '至少上传一张照片',
						icon: 'none'
					})
					return
				}
				let result = await publishActive ({
					token: uni.getStorageSync('token'),
					text: this.text,
					images: this.baseList.join('|')
				})
				if(result.code == 200) {
					this.type = 'middle'
				}
				console.log(result)
			},
			onAddImgEvent () {  // 上传图片
				let self = this;
				uploadImg(self.baseList, self.imgList)
			},
			onDelImgEvent (index) {
				let self = this;
				delUploadImg(self.baseList, self.imgList, index)
			},
			togglePopup () {
				this.type = '',
				uni.navigateBack()
			}
		},
		components: {
			uniPopup,
			upload
		}
	}
</script>

<style lang="scss" scoped>
.publish-active {
	min-height: 100%;
	padding: 30upx;
	textarea {
		height: 210upx;
		font-size: 28upx;
	}
	.img-wrap {
		.img-item {
			position: relative;
			width: 150upx;
			height: 150upx;
			margin: 0 30upx 30upx 0;
			.iconfont {
				position: absolute;
				right: -20upx;
				top: -20upx;
				font-size: 36upx;
				z-index: 999;
			}
		}
		image {
			width: 150upx;
			height: 150upx;
			margin-bottom: 30upx;
		}
	}
	.publish-success {
		width: 600upx;
		.success-wrap {
			padding: 0 30upx;
		}
		.share-title {
			margin-top: 20upx;
			text-align: center;
		}
		.share-list {
			margin-top: 60upx;
			.share-item {
				width: 100upx;
				image {
					width: 86upx;
					height: 86upx;
					margin-bottom: 20upx;
				}
				&:nth-of-type(2) {
					margin: 0 80upx;
				}
			}
		}
	}
}

</style>
