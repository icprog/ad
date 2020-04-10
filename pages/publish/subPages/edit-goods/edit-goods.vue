<template>
	<view class="wrap bg-white">
		<view class="title font-bold text-bg">商品图片</view>
		<!-- <upload :imgList="imgList1" size="200" @onAddImgEvent="onAddImgEvent(1)" @onDelImgEvent="onDelImgEvent(1, $event)"></upload> -->
		<view class="img-list1 d-flex align-items-center flex-wrap">
			<view class="img-item position-relative" v-for="(item, index) of goods_detail.images" :key="index">
				<image :src="BASE_URL + item"></image>
				<text class="position-absolute iconfont" @tap="onDelImg(1, index)">&#xe7be;</text>
			</view>
			<image src="/static/images/g16@2x.png" @tap="onAddImage(1)"></image>
		</view>
		<view class="goods-info">
			<label class="d-flex align-items-center border-bottom">名称：<input class="flex-1" v-model="name" placeholder-class="placeholderStyle"
				 type="text" placeholder="请输入商品名称"></label>
			<label class="d-flex align-items-center border-bottom">价格：<input class="flex-1" v-model="price" placeholder-class="placeholderStyle"
				 type="number" placeholder="请输入商品价格(默认包含运费)"></label>
			<label class="d-flex align-items-center border-bottom">库存：<input class="flex-1" v-model="num" placeholder-class="placeholderStyle"
				 type="text" placeholder="请输入商品库存"></label>
			<label class="d-flex align-items-center border-bottom">分类：<input class="flex-1" v-model="category" disabled @tap="onChoseTypeClick" placeholder-class="placeholderStyle"
				 type="text" placeholder="请选择商品分类"></label>
			<label class="d-flex align-items-center border-bottom">介绍：<input class="flex-1" v-model="desc" placeholder-class="placeholderStyle"
				 type="text" placeholder="请输入商品介绍"></label>
		</view>
		<view class="title font-bold text-bg">商品详情图片</view>
		<!-- <upload :imgList="imgList2" size="200" @onAddImgEvent="onAddImgEvent(2)" @onDelImgEvent="onDelImgEvent(2, $event)"></upload> -->
		<view class="img-list1 d-flex align-items-center flex-wrap">
			<view class="img-item position-relative" v-for="(item, index) of goods_detail.dimages" :key="index">
				<image :src="BASE_URL + item"></image>
				<text class="position-absolute iconfont" @tap="onDelImg(1, index)">&#xe7be;</text>
			</view>
			<image src="/static/images/g16@2x.png" @tap="onAddImage(2)"></image>
		</view>
		<button class="btn" :style="{top: fixedTop}" @tap="onAddGoodsClick">保 存</button>
	</view>
</template>

<script>
	import { pathToBase64, base64ToPath } from '@/common/js/base64.js'
	import { uploadImg, delUploadImg } from '@/common/js/common'
	import { BASE_URL, publishGoods, editGoods, uploadImage } from '@/api'
	import { mapState, mapActions, mapMutations } from 'vuex'
	import upload from '@/components/upload'
	export default {
		name: '',
		data() {
			return {
				fixedTop: 0,
				imgList1: [],
				imgList2: [],
				baseList1: [],
				baseList2: [],
				name: '',
				price: '',
				category: '请选择分类',
				sortId: '',
				num: '',
				desc: '',
				goodsId: '', //商品id
			}
		},
		onBackPress (e) {
			// uni.switchTab({
			// 	url: '/pages/publish/index/index'
			// })
			// return true;
		},
		onLoad(options) {
			if(options) {
				this.category = options.name
				this.sortId = options.id
			}
			if(options.goodsId) {
				this.goodsId = options.goodsId;
				this._reqGetGoodsDetail()
			}
			// #ifdef APP-PLUS
			this.fixedTop = uni.getSystemInfoSync().screenHeight - 45 - 44 - uni.getSystemInfoSync().statusBarHeight + 'px';
			// #endif 
			// #ifdef H5
			this.fixedTop = uni.getSystemInfoSync().screenHeight - 45 + 'px';
			// #endif 
		},
		computed: {
			...mapState(['sort_type', 'goods_detail', 'all_demand_type']),
			BASE_URL () {
				return BASE_URL
			}
		},
		onShow () {
			let self = this;
			this.$hideTabbarButton()
			this.category = this.sort_type.name
			this.sortId = this.sort_type.id
		},
		onHide () {
			this.SORT_TYPE({})
		},
		methods: {
			...mapActions(['reqGetGoodsDetail']),
			...mapMutations(['SORT_TYPE']),
			onDelImg (type, index) {
				this['imgList' + type].splice(index, 1)
			},
			async onAddImage (type) {
				let self = this;
				uni.chooseImage({
					count: 1, //默认9
					success: async function (res) {
						pathToBase64(res.tempFilePaths[0]).then(async base64 => {
							let result = await uploadImage({
								token: uni.getStorageSync('token'),
								image: base64
							})
							self['imgList' + type].push(result.data)
						})
					}
				})
			},
			async _reqGetGoodsDetail () {
				let self = this;
				await this.reqGetGoodsDetail({
					token: uni.getStorageSync('token'),
					cid: self.goodsId
				})
				if(this.goodsId) {
					this.all_demand_type.forEach((val, index) => {
						val.subclass.forEach((v, i) => {
							if(v.id == self.goods_detail.sort) {
								self.category = v.name
								console.log(self.category)
							}
						})
					})
				}	
				this.imgList1 = this.goods_detail.images;
				this.imgList2 = this.goods_detail.dimages;
				this.name = this.goods_detail.title
				this.price = this.goods_detail.price
				this.num = this.goods_detail.count
				this.sortId = this.goods_detail.sort
				// this.category = this.goods_detail
				this.desc = this.goods_detail.described
			},
			async onAddGoodsClick () {
				if(this.imgList1.length <= 0) {
					uni.showToast({
						title: '至少上传一张图片',
						icon: 'none'
					})
					return;
				}
				if(this.name == '') {
					uni.showToast({
						title: '请输入商品名称',
						icon: 'none'
					})
					return;
				}
				if(this.num == '') {
					uni.showToast({
						title: '请输入商品库存',
						icon: 'none'
					})
					return;
				}
				if(this.category == '') {
					uni.showToast({
						title: '请选择商品分类',
						icon: 'none'
					})
					return;
				}
				if(this.desc == '') {
					uni.showToast({
						title: '请输入商品介绍',
						icon: 'none'
					})
					return;
				}
				if(this.imgList2.length <= 0) {
					uni.showToast({
						title: '至少上传一张详情图片',
						icon: 'none'
					})
					return;
				}
				let images = ''
				let details = ''
				let result = ''
				if(this.goodsId) {   // editGoods  publishGoods
					images = this.imgList1.join(',')
					details = this.imgList2.join(',')
					result = await editGoods ({
						token: uni.getStorageSync('token'),
						images: images,
						title: this.name,
						price: this.price,
						dimages: details,
						sort: this.sortId,
						stock: this.num,
						described: this.desc,
						commodity_id: this.goodsId
					})
				}
				if(result.code == 2000 || result.code == 200) {
					uni.showToast({
						title: '保存成功',
					})
					setTimeout(() => {
						uni.navigateBack()
					}, 1500)
				}
			},
			onChoseTypeClick () {
				uni.navigateTo({
					url: '/pages/home/subPages/publish-type/publish-type?type=2'
				})
			},
			onAddImgEvent (type) {
				if(type == 1) {
					uploadImg(this.baseList1, this.imgList1)
				}
				if(type == 2) {
					uploadImg(this.baseList2, this.imgList2)
				}
			},
			onDelImgEvent (type, index) {
				if(type == 1) {
					delUploadImg(this.baseList1, this.imgList1, index)
				}
				if(type == 2) {
					delUploadImg(this.baseList2, this.imgList2, index)
				}
			}
		},
		components: {
			upload
		}
	}
</script>

<style lang="scss" scoped>
	@import '~@/common/css/avariables.scss';
	.img-list1 {
		padding-top: 20upx;
		.img-item {
			position: relative;
			width: 200upx;
			height: 200upx;
			margin: 0 30upx 20upx 0;
		}
		.iconfont {
			position: absolute;
			font-size: 40upx;
			top: -20upx;
			right: -20upx;
		}
		image {
			width: 200upx;
			height: 200upx;
			margin: 0 30upx 20upx 0;
		}
	}
	.wrap {
		padding: 0 30upx 100upx 30upx;

		.title {
			padding-top: 40upx;
		}

		.goods-info {
			label {
				padding: 20upx 0;

				input {
					padding: 0 30upx;
				}
			}
		}


		.btn {
			position: fixed;
			left: 0;
			width: 100%;
			height: 45px;
			border-radius: 0;
			color: #fff;
			background: $main-color;
			z-index: 9;
		}
	}
</style>
