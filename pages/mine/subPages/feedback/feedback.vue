<template>
	<view class="feedback">
		<view class="feedback-input d-flex align-items-center justify-content-between bg-white"  @tap="onChoseFeedbackType">
			<input type="text" placeholder="请选择反馈类型" v-model="type">
			<text class="iconfont">&#xe636;</text>
		</view>
		<view class="textarea-wrap bg-white">
			<textarea class="" name="" id="" v-model="desc" cols="30" rows="10" placeholder="请描述您的问题或建议,我们将不断改进~"></textarea>
			<upload :imgList="imgList" @onAddImgEvent="onAddImgEvent" @onDelImgEvent="onDelImgEvent"></upload>
		</view>
		<input class="feedback-input bg-white" type="text" v-model="phone" placeholder="手机/邮箱/QQ (选填)">
		<button class="btn btn-confirm" @tap="onSubmitClick">提交</button>
	</view>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	import upload from '@/components/upload'
	import { uploadImg, delUploadImg } from '@/common/js/common'
	import { feedback } from '@/api'
	export default {
		name: '',
		data() {
			return {
				type: '',
				desc: '',
				phone: '',
				imgList: [],
				baseList: [],
				itemList: ['物流太慢', '服务态度差', '质量一般', '价格略贵']
			}
		},
		onLoad() {
			this._reqGetFeedbackList()
		},
		onShow () {
			this.$hideTabbarButton()
		},
		computed: {
			...mapState(['feedback_list'])
		},
		methods: {
			...mapActions(['reqGetFeedbackList']),
			async onSubmitClick () {
				if(this.type == '') {
					uni.showToast({
						title: '请选择反馈类型',
						icon: 'none'
					})
					return;
				}
				if(this.desc == '') {
					uni.showToast({
						title: '请输入您的反馈内容',
						icon: 'none'
					})
					return;
				}
				let result = await feedback ({
					token: uni.getStorageSync('token'),
					images: this.baseList,
					type: this.type,
					text: this.desc,
					qq: this.phone
				})
				if(result.code == 2000) {
					uni.showToast({
						title: '提交成功'
					})
					setTimeout(() => {
						uni.navigateBack()
					}, 1500)
				}
			},
			_reqGetFeedbackList() {
				this.reqGetFeedbackList({
					token: uni.getStorageSync('token')
				})
			},
			onAddImgEvent () {
				let self = this;
				uploadImg(self.baseList, self.imgList)
			},
			onDelImgEvent (index) {
				let self = this;
				delUploadImg(self.baseList, self.imgList, index)
			},
			onChoseFeedbackType() {
				let self = this;
				uni.showActionSheet({
					itemList: this.itemList,
					success: function(res) {
						self.type = self.itemList[res.tapIndex]
					},
				});
			}
		},
		components: {
			upload
		}
	}
</script>

<style lang="scss" scoped>
	.feedback {
		padding: 30upx;
		.textarea-wrap {
			width: 100%;
			// height: 410upx;
			margin: 20upx 0;
			padding: 20upx;
			border-radius: 10upx;
			textarea {
				width: 100%;
				height: 230upx;
				font-size: 28upx;
			}	
		}

		.feedback-input {
			height: 90upx;
			line-height: 90upx;
			padding: 0 20upx;
			border-radius: 10upx;
		}

		.iconfont {
			font-size: 40upx;
		}

		.btn {
			margin-top: 300upx;
		}
	}
</style>
