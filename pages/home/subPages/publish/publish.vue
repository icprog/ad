<template>
	<view class="page">
		<view class="container-30 bg-white">
			<view class="item d-flex align-items-center justify-content-between border-bottom" @tap="onChoseTypeClick">
				<view class="title">需求类型</view>
				<view class="flex-1 type text-right" v-if="sort_type.name">{{sort_type.name}}</view>
				<view class="flex-1 type text-right" v-else>请选择分类</view>
				<image class="right-arrow" src="/static/images/f2@2x.png"></image>
			</view>
			<view class="item border-bottom">
				<view class="title">需求标题</view>
				<input type="text" class="caption" v-model="title" placeholder="请输入需求标题">
			</view>
			<view class="item">
				<view class="title">需求描述</view>
				<textarea name="" id="" class="content" cols="30" rows="10" v-model="desc" placeholder="说明内容尺寸要求等"></textarea>
			</view>
			<view class="item">
				<view class="title">添加参考图片</view>
				<upload size="200" :imgList="imgList" @onAddImgEvent="onAddImgEvent" @onDelImgEvent="onDelImgEvent"></upload>
			</view>
			<button class="btn" @tap="onPostDemandEvent">提交发布</button>
		</view>
	</view>

</template>

<script>
	import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue'
	import upload from '@/components/upload'
	import { pathToBase64, base64ToPath } from '@/common/js/base64.js'
	import { postDemand } from '@/api'
	import { uploadImg, delUploadImg, hideTabbarButton } from '@/common/js/common'
	import { mapState, mapActions, mapMutations } from 'vuex'
	export default {
		name: '',
		data() {
			return {
				demandType: '选择需求类型',
				demandId: '',
				title: '',
				desc: '',
				imgList: [],
				baseList: []
			}
		},
		onLoad(options) {
			if(options.id) {
				this.demandType = options.name;
				this.demandId = options.id
			}	
		},
		computed: {
			...mapState(['sort_type']),
		},
		onBackPress (e) {
			// uni.switchTab({
			// 	url: '/pages/publish/index/index'
			// })
			// return true;
		},
		onShow () {
			hideTabbarButton()
		},
		methods: {
			...mapMutations(['SORT_TYPE']),
			async onPostDemandEvent () {   // 提交发布
				if(this.title == '') {
					uni.showToast({
						title: '请输入需求标题',
						icon: 'none'
					})
					return;
				}
				if(this.desc == '') {
					uni.showToast({
						title: '请输入需求描述',
						icon: 'none'
					})
					return;
				}
				if(this.baseList.length <=0) {
					uni.showToast({
						title: '请至少上传一张图片',
						icon: 'none'
					})
					return;
				}
				let result = await postDemand ({
					token: uni.getStorageSync('token'),
					sid: this.sort_type.id,
					title: this.title,
					content: this.desc,
					images: this.baseList.join('|')
				})
				if(result.code == 200) {
					uni.showToast({
						title: '需求发布成功'
					})
				}
				setTimeout(() => {
					uni.navigateBack()
				}, 1500)
			},
			onChoseTypeClick() { // 选择需求类型
				// uni.navigateBack()
				uni.navigateTo({
					url: '/pages/home/subPages/publish-type/publish-type?type=1'
				})
			},
			onAddImgEvent () {  // 上传图片
				let self = this;
				uploadImg(self.baseList, self.imgList)
			},
			onDelImgEvent (index) {
				let self = this;
				delUploadImg(self.baseList, self.imgList, index)
			}
		},
		components: {
			mpvuePicker,
			upload
		}
	}
</script>

<style lang="scss" scoped>
	@import '~@/common/css/avariables.scss';

	.item {
		padding-bottom: 30upx;
		margin-bottom: 40upx;
	}

	.type {
		color: #bdbdbd;
	}

	.title {
		margin-top: 20upx;
		font-weight: 700;
	}

	input,
	textarea {
		margin-top: 20upx;
	}

	textarea {
		width: 100%;
		padding: 20upx;
		border-radius: 15upx;
		font-size: 28upx;
		background: #f2f2f2;
	}
	.btn {
		margin-top: 100upx;
		color: #fff;
		background: $main-color;
	}
</style>
