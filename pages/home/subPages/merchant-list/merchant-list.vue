<template>
	<view class="page">
		<view class="list-type d-flex justify-content-around border-bottom">
			<view class="type-item" 
				:class="{active: current == index}" 
				v-for="(item, index) of type" 
				:key="index"
				@tap="onTypeClick(index)"
			>{{item}}</view>
		</view>
		<view class="list">
			<merchant-item v-for="(item, index) of merchant_list" :key="item.id" 
										:item="item" :showStar="true"
										@onToGoodsDetail="onToGoodsDetail"
			></merchant-item>
			<empty v-if="merchant_list.length <= 0" />
		</view>
	</view>
</template>

<script>
	import merchantItem from '@/pages/home/index/children/popular-item'
	import empty from '@/components/empty'
	import { mapState, mapActions } from 'vuex'
	export default {
		name: '',
		data () {
			return {
				type: ['综合排序', '距离最近', '信誉最高'],
				current: 0
			}
		},
		onLoad () {
			this._reqGetMerchantList()
		},
		onShow () {
			this.$hideTabbarButton()
		},
		computed: {
			...mapState(['merchant_list']),
		},
		methods: {
			...mapActions(['reqGetMerchantList']),
			_reqGetMerchantList () {
				let order;
				switch (this.current) {
					case 0: order = 1;
					break;
					case 1: order = 3;
					break;
					case 2: order = 2;
					break;
				}
				this.reqGetMerchantList({order: order})
			},
			onToGoodsDetail (id) {
				uni.navigateTo({
					url: '/pages/home/subPages/merchant-detail/merchant-detail?id=' + id
				})
			},
			onTypeClick (index) {
				if(this.current !== index) {
					this.current = index;
					this._reqGetMerchantList()
				}
			}
		},
		components: {
			merchantItem,
			empty
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/common.scss';
.list-type {
	position: fixed;
	left: 0;
	right: 0;
	background: #fff;
	z-index: 1;
	top: 0;
	.type-item {
		height: 100%;
		padding: 20upx 0;
		color: #999;
		&.active {
			position: relative;
			font-weight: bold;  
			color: #333;
			&:after {
				position: absolute;
				bottom: 0;
				left: 50%;
				margin-left: -25upx;
				content: '';
				width: 50upx;
				height: 4upx;
				background: $main-color;
			}
		}
	}
}
.list {
	padding: 110upx 30upx 20upx 30upx;
}
/* #ifdef H5 */ 
.list-type {
	top: 44px;
}
/* #endif */
</style>
