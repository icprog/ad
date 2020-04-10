<template>
	<view class="wrap bg-white">
		<view class="title font-bold text-bg">商品图片</view>
		<upload :imgList="imgList1" size="200" @onAddImgEvent="onAddImgEvent(1)" @onDelImgEvent="onDelImgEvent(1, $event)"></upload>
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
		<upload :imgList="imgList2" size="200" @onAddImgEvent="onAddImgEvent(2)" @onDelImgEvent="onDelImgEvent(2, $event)"></upload>
		<button class="btn" :style="{top: fixedTop}" @tap="onAddGoodsClick">保 存</button>
	</view>
</template>

<script>
	import { pathToBase64, base64ToPath } from '@/common/js/base64.js'
	import { uploadImg, delUploadImg } from '@/common/js/common'
	import { BASE_URL, publishGoods, editGoods } from '@/api'
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
				let result  = await publishGoods ({
					token: uni.getStorageSync('token'),
					images: this.baseList1.join('|'),
					title: this.name,
					price: this.price,
					details: this.baseList2.join('|'),
					sort: this.sortId,
					stock: this.num,
					described: this.desc,
					commodity_id: this.goodsId
				})
				if(result.code == 2000) {
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

// 		.scroll-view_H {
// 			white-space: nowrap;
// 			padding: 30upx 0;
// 		}
// 
// 		.scroll-view-item_H {
// 			display: inline-block;
// 			width: 220upx;
// 			height: 200upx;
// 			margin-right: 10upx;
// 
// 			image {
// 				width: 100%;
// 				height: 100%;
// 			}
// 		}

		.btn {
			position: fixed;
			left: 0;
			width: 100%;
			height: 45px;
			border-radius: 0;
			color: #fff;
			background: $main-color;
		}
	}
</style>
