<template>
	<view class="wrap">
		<view class="goods-comment bg-white">
			<view class="goods-info border-bottom d-flex align-items-center">
				<image class="goods-img" :src="BASE_URL + goods_detail.images[0]"></image>
				<text class="goods-title text-small">{{goods_detail.title}}</text>
			</view>
			<view class="goods-star">
				<view class="quality d-flex align-items-center">完成质量 
					<uni-rate activeColor="#f13130" size="22" :value="value1" margin="10" @change="onChange(1, $event)" :isFill="true"></uni-rate>
				</view>
				<view class="quality d-flex align-items-center">工作效率 
					<uni-rate activeColor="#f13130" size="22" :value="value2" margin="10" @change="onChange(2, $event)" :isFill="true"></uni-rate>
				</view>
				<view class="quality d-flex align-items-center">服务态度 
					<uni-rate activeColor="#f13130" size="22" :value="value3" margin="10" @change="onChange(3, $event)" :isFill="true"></uni-rate>
				</view>
			</view>
			<textarea name="" id="" cols="30" rows="10" v-model="comment" placeholder="说说你对宝贝的评价"></textarea>
			<view class="goods-picture d-flex flex-wrap">
				<upload :imgList="imgList" size="150" @onAddImgEvent="onAddImgEvent" @onDelImgEvent="onDelImgEvent"></upload>
			</view>
		</view>
		<view class="btn-wrap">
			<button class="btn btn-confirm" @tap="onSubmitComment">提交</button>
		</view>
	</view>
</template>

<script>
	import { pathToBase64, base64ToPath } from '@/common/js/base64.js'
	import { uploadImg, delUploadImg } from '@/common/js/common'
	import { mapState, mapActions } from 'vuex'
	import { BASE_URL, commentGoods } from '@/api'
	import uniRate from '@/components/uni-rate/uni-rate'
	import upload from '@/components/upload'
	export default {
		name: '',
		data () {
			return {
				id: '', // 商品id
				orderId: '', // 订单id
				imgList: [],
				baseList: [],
				value1: 5,
				value2: 5,
				value3: 5,
				comment: ''
			}
		},
		onLoad (options) {
			this.id = options.id
			this.orderId = options.orderId
			this._reqGetGoodsDetail()
		},
		computed: {
			...mapState(['goods_detail']),
			BASE_URL () {
				return BASE_URL
			}
		},
		methods: {
			...mapActions(['reqGetGoodsDetail']),
			async onSubmitComment () {    // 提交评论
				let result = await commentGoods ({
					cid: this.id,
					crontent: this.comment,
					quality: this.value1,
					efficiency: this.value2,
					attitude: this.value3,
					images: this.baseList.join('|'),
					indent_id: this.orderId,
					token: uni.getStorageSync('token')
				})
				if(result.code == 200) {
					uni.showToast({
						title: '评论成功',
					})
					setTimeout(() => {
						uni.navigateBack()
					}, 1500)
				}
			},
			_reqGetGoodsDetail () {
				this.reqGetGoodsDetail({
					cid: this.id
				})
			},
			onAddImgEvent () {
				uploadImg(this.baseList, this.imgList)
			},
			onDelImgEvent (index) {
				delUploadImg(this.baseList, this.imgList, index)
			},
			onChange (num, e) {
				this['value' + num] = e.value
			}
		},
		components: {
			uniRate,
			upload
		}
	}
</script>

<style lang="scss" scoped>
.goods-comment {
	padding: 30upx;
	.goods-info {
		padding-bottom: 30upx;
		.goods-img {
			width: 100upx;
			height: 100upx;
			margin-right: 30upx;
			flex-shrink: 0;
		}
	}
	.goods-star {
		.quality {
			margin-top: 30upx;
		}
	}
	textarea {
		width: 100%;
		height: 200upx;
		padding: 30upx;
		margin-top: 30upx;
		font-size: 28upx;
		background: #f7f7f7;
	}
	.goods-picture {
		margin-top: 30upx;
		.img-wrap, image {
			position: relative;
			width: 150upx;
			height: 150upx;
			margin: 0 30upx 30upx 0;
			text {
				position: absolute;
				right: -20upx;
				top: -20upx;
				z-index: 1;
				font-size: 40upx;
			}
		}
	}
}
.btn-wrap {
	padding: 0 30upx;
}
.btn {
	margin-top: 80upx;
}
</style>
