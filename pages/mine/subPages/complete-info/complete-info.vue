<template>
	<view class="complete-info">
		<block v-if="type == 2">
			<view class="row d-flex align-items-center justify-content-between bg-white">
				<text>公司地址</text>
				<input class="flex-1 text-right" 
					type="text" disabled placeholder="请选择公司地址" 
					v-model="address" 
					@tap="onChoseCityClick">
				<text class="iconfont">&#xe6e9;</text>
			</view>
			<view class="row d-flex align-items-center justify-content-between bg-white">
				<text>服务电话</text>
				<input class="flex-1 text-right" v-model="phone" type="text" placeholder="请输入服务电话">
			</view>
		</block>
		
		<view class="row bg-white">
			<view class="font-bold" v-if="type == 2">服务商简介</view>
			<view class="font-bold" v-else>个人简介</view>
			<textarea class="w-100 border-radius mg-y-30" v-model="desc" name="" id="" cols="30" rows="10" placeholder="请输入您的简介"></textarea>
			<block v-if="type == 2">
				<view class="font-bold">门店照片<text space="emsp" :decode="true" class="text-small text-muted">最多添加4张照片</text></view>
				<upload :imgList="imgList1" @onAddImgEvent="onAddImgEvent(1)" @onDelImgEvent="onDelImgEvent(1, $event)"></upload><!-- 门店照片 -->
				<view class="font-bold">营业执照</view>
				<upload :imgList="imgList2" @onAddImgEvent="onAddImgEvent(2)" @onDelImgEvent="onDelImgEvent(2, $event)"></upload><!-- 营业执照 -->
			</block>
			<view class="font-bold">添加案例<text space="emsp" :decode="true" class="text-small text-muted">最多添加9张案例图片</text></view>
			<upload :imgList="imgList3" @onAddImgEvent="onAddImgEvent(3)" @onDelImgEvent="onDelImgEvent(3, $event)"></upload><!-- 添加案例 -->
		</view>
		<view class="row d-flex align-items-center justify-content-between bg-white">
			<text class="font-bold">服务标签</text>
			<input class="flex-1 text-right" disabled type="text" v-model="tags" placeholder="请选择服务标签" @tap="onChoseServiceClick">
			<text class="iconfont">&#xe6e9;</text>
		</view>
		<button class="btn btn-confirm" @tap="onSubmitClick">提交</button>
		<mpvue-city-picker themeColor="#f13130" ref="mpvueCityPicker"  @onConfirm="onConfirmCityClick"></mpvue-city-picker>
	</view>
</template>

<script>
	import inputCell from '@/components/input-cell'
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	import cityData from '@/common/js/city.data.js'
	import upload from '@/components/upload'
	import { uploadImg, delUploadImg } from '@/common/js/common'
	import { serviceApprove, designerApprove } from '@/api'
	import { mapState, mapActions } from 'vuex'
	export default {
		name: '',
		data () {
			return {
				address: '',
				latitude: '',
				longitude: '',
				type: '',   //  url参数  1个人  2服务商
				phone: '',
				desc: '',
				imgList1: [],
				baseList1: [],
				baseList2: [],
				imgList2: [],
				baseList3: [],
				imgList3: [],
				tags: '',
				tagsId: [],
				tagsText: []
			}
		},
		onLoad (options) {
			console.log(options);
			this.type = options.type;
		},
		onShow () {
			this.service_tags.forEach((val, index) => {
				this.tagsId.push(val.id)
				this.tagsText.push(val.name)
			})
			this.tags = this.tagsText.join(',')
			console.log(this.tagsId)
		},
		computed: {
			...mapState(['service_tags']),
		},
		methods: {
			...mapActions(['reqGetUserInfo']),
			async onSubmitClick () { // 提交
				let self = this;
				if(this.desc == "") {
					uni.showToast({
						title: '请输入您的简介',
						icon: 'none'
					})
					return
				}
				if(this.baseList3.length <= 0) {
					uni.showToast({
						title: '至少上传一张案例照片',
						icon: 'none'
					})
					return
				}
				if(this.tags == '') {
					uni.showToast({
						title: '至少选择一个服务标签',
						icon: 'none'
					})
					return
				}
				let result = ''
				if(this.type == 1) {
					result = await designerApprove ({
						token: uni.getStorageSync('token'),
						images: this.baseList3,
						intro: this.desc,
						label: this.tagsId.join(',')
					})
				}
				if(this.type == 2) {
					if(this.address == "") {
						uni.showToast({
							title: '请选择公司地址',
							icon: 'none'
						})
						return
					}
					if(this.phone == "") {
						uni.showToast({
							title: '请输入服务电话',
							icon: 'none'
						})
						return
					}
					if(this.baseList1.length <= 0) {
						uni.showToast({
							title: '至少上传一张门店照片',
							icon: 'none'
						})
						return
					}
					if(this.baseList2.length <= 0) {
						uni.showToast({
							title: '请上传营业执照',
							icon: 'none'
						})
						return
					}
					
					result = await serviceApprove ({
						address: this.address,
						phone: this.phone,
						intro: this.desc,
						firm_images: this.baseList1.join('|'),
						business_images: this.baseList2.join('|'),
						case_images: this.baseList3.join('|'),
						lable: this.tagsId.join(','),
						token: uni.getStorageSync('token')
					})
				}
				if(result.code == 2000) {
					uni.showToast({
						title: '提交成功'
					})
					setTimeout(() => {
						uni.redirectTo({
							url: '/pages/mine/subPages/approve/approve'
						})
						self.reqGetUserInfo({
							token: uni.getStorageSync('token')
						})
					}, 1500)
				}
			},
			onAddImgEvent (type) {  // 上传图片
				let self = this;
				uploadImg(self['baseList' + type], self['imgList' + type])
			},
			onDelImgEvent (type, index) {
				let self = this;
				delUploadImg(self['baseList' + type], self['imgList' + type], index)
			},
			onChoseCityClick () {  // 选择地址
				let that = this;
				// this.$refs.mpvueCityPicker.show()
				uni.chooseLocation({
					success: function (res) {
						console.log(res)
						that.address = res.address;
						that.latitude = res.latitude;
						that.longitude = res.longitude;
					}
				});	
			},
			onChoseServiceClick () {
				uni.navigateTo({
					url: '/pages/mine/subPages/service-tag/service-tag'
				})
			},
			onConfirmCityClick (e) {
				console.log(e)
			}
		},
		components: {
			inputCell,
			mpvueCityPicker,
			upload
		}
	}
</script>

<style lang="scss" scoped>
.complete-info {
	padding: 0 30upx 30upx;
	.row {
		padding: 30upx 30upx;
		margin-bottom: 15upx;
		.font-bold text{
			margin-left: 5upx;
		}
		.iconfont {
			margin-left: 16upx;
			font-size: 24upx;
		}
		// .img-wrap {
		// 	.img-item {
		// 		margin: 30upx 30upx 30upx 0;
		// 		position: relative;
		// 		width: 120upx;
		// 		height: 120upx;
		// 		margin-right: 20upx;
		// 		image {
		// 			width: 120upx;
		// 			height: 120upx;
		// 			margin-right: 20upx;
		// 		}
		// 		.iconfont {
		// 			position: absolute;
		// 			right: -16upx;
		// 			top: -16upx;
		// 			font-size: 32upx;
		// 		}
		// 	}
		// }
		textarea {
			height: 210upx;
			padding: 20upx;
			font-size: 28upx;
			background: #f2f2f2;
		}
	}
	.btn {
		margin-top: 80upx;
	}
}
</style>
