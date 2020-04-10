<template>
	<view class="service">
		<view class="service-type bg-white d-flex justify-content-around border-bottom">
			<view class="service-type-item" 
						:class="{active: currentType === index}" 
						v-for="(item, index) of serviceTypeList" 
						:key="index"
						@tap="onServiceTypeClick(index)"
			>{{item}}</view>
		</view> 
		<view class="service-section bg-white" v-if="currentType === 0">
			<popular-item :showDealNumber="true" v-for="(item, index) of merchant_goods" :key="index" 
					:item="item" @onToGoodsDetail="onToGoodsDetail"
			></popular-item>
			<empty v-if="merchant_goods.length <= 0"></empty>
		</view>
		<view class="case" v-if="currentType === 1">
			<image mode="widthFix" v-for="(item, index) of imgList" :key="index"
						:src="BASE_URL + item" @tap="onPreviewImage(imgList, index)"></image>
		</view>
		<view class="case bg-white" v-if="currentType === 2">
			<view class="merchant-address d-flex bg-white">
				<image class="address-icon" src="/static/images/e6@2x.png"></image>
				<view class="address-wrap flex-1">
					<view class="address">{{merchant_detail.address}}</view>
					<view class="text-small text-muted">距离您 {{merchant_detail.distance}} km</view>
				</view>
				<image class="button" src='/static/images/go-button.png' @tap="onCheckLocation(merchant_detail)"></image>
			</view>
			<!-- <image mode="widthFix" v-for="(i, index) of (merchant_detail.yingyezhizhao)" :key="index" 
						:src="BASE_URL + i" @tap="onPreviewImage(merchant_detail.yingyezhizhao, index)"
			></image> -->
		</view>
	</view>
</template>

<script>
	import popularItem from '@/pages/home/index/children/popular-item.vue'
	import empty from '@/components/empty'
	import { BASE_URL } from '@/api'
	import { previewImg } from '@/common/js/common'
	export default {
		name: '',
		props: {
			merchant_detail: Object,
			merchant_goods: Array
		},
		data () {
			return {
				serviceTypeList: ['出售服务', '案例展示', '服务商详情'], //
				currentType: 0,
				imgList: []
			}
		},
		onLoad () {

		},
		watch: {
			merchant_detail () {
				let arr = [];
				if(this.merchant_detail.case.includes(',')) {
					arr = this.merchant_detail.case.split(',')
				}else {
					arr.push(this.merchant_detail.case)
				}
				// return arr
				this.imgList = arr;
			}	
		},
		computed: {
			BASE_URL () {
				return BASE_URL
			},
			// imgList () {
			// 	let arr = [];
			// 	if(this.merchant_detail.case.includes(',')) {
			// 		arr = this.merchant_detail.case.split(',')
			// 	}else {
			// 		arr.push(this.merchant_detail.case)
			// 	}
			// 	return arr
			// }
		},
		methods: {
			onCheckLocation (merchant_detail) {
				uni.openLocation({
					latitude: parseFloat(merchant_detail.xy.split(',')[1]),
					longitude: parseFloat(merchant_detail.xy.split(',')[0]),
					success: function (res) {
						console.log(res);
					}
        });
			},
			onToGoodsDetail (id) {
				this.$emit('onToGoodsDetail', id)
			},
			onPreviewImage (url, index) {
				previewImg (url, index)
			},
			onServiceTypeClick (index) {
				if(this.currentType !== index) {
					this.currentType = index;
				}
			}
		},
		components: {
			popularItem,
			empty
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';	
.service {
	margin-top: 30upx;
	color: #666666;
	.service-type-item {
		width: 33.33%;
		padding: 30upx 0 20upx 0;
		text-align: center;
		&.active {
			border-bottom: 3upx solid $main-color;
			color: #484848;
			font-weight: bold;
		}
	}
	.service-section {
		padding: 40upx 30upx 0 30upx;
	}
	.case {
		image {
			width: 100%;
			margin-top: 10upx;
		}
		.merchant-address {
			padding: 48upx 30upx 28upx 30upx;
			line-height: 1;
			.address-icon {
				width: 22upx;
				height: 30upx;
				margin-right: 16upx;
			}
			.button {
				width: 158upx;
				height: 61upx;
			}
			.text-small {
				margin-top: 15upx;
			}
		}
	}
}

</style>
