<template>
	<view class="round-wrap bg-white">
		<view style="height: 44px">
			<view class="round-type d-flex align-items-center justify-content-around border-bottom">
				<view class="type-item font-bold d-flex align-items-center"
					:class="{active: current == index}"
					v-for="(type, index) of roundType" :key="index"
					@tap="onChoseType(index)"
				>{{type.name}}
				<view v-if="index == 0"><!-- 默认 -->
					<text class="iconfont arrow-icon">&#xe6ea;</text>
				</view>
				<view v-if="index == 1" class="d-flex flex-direction-column"><!-- 距离 -->
					<text class="iconfont arrow-icon" :style="{color: order == 3 ? 'red' : 'black'}">&#xe74d;</text>
					<text class="iconfont arrow-icon" :style="{color: order == 7 ? 'red' : 'black'}">&#xe6ea;</text>
				</view>
				<view v-if="index == 2" class="d-flex flex-direction-column"><!-- 价格 -->
					<text class="iconfont arrow-icon" :style="{color: order == 5 ? 'red' : 'black'}">&#xe74d;</text>
					<text class="iconfont arrow-icon" :style="{color: order == 6 ? 'red' : 'black'}">&#xe6ea;</text>
				</view>
				<text class="iconfont" v-if="index == 3">&#xe6a6;</text>
			</view>
		</view>
		</view>
		<view class="goods-list d-flex flex-wrap align-items-center justify-content-between">
			<view class="goods-item" v-for="(item, index) of goods_list" :key="index" @tap="onGoToDetail(item)">
				<image class="goods-img" :src="BASE_URL + item.images[0]"></image>
				<view class="title ellipsis">{{item.title}}</view>
				<view class="price-wrap d-flex align-items-center justify-content-between">
					<view class="price">￥{{item.price}}</view>
					<text class="iconfont">&#xe60b;</text>
				</view>
			</view>
		</view>
		<empty v-if="goods_list.length <= 0"></empty>
		<uni-load-more :status="status"></uni-load-more>
		<mpvue-picker themeColor="#f13130" ref="mpvuePicker" mode="selector" @onConfirm="onConfirm" :pickerValueArray="pickerValueArray"></mpvue-picker>
	</view>
</template>

<script>
	import publishPopup from '@/components/publish-popup'
	import uniPopup from '@/components/uni-popup/uni-popup'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more'
	import listCell from '@/components/list-cell'
	import empty from '@/components/empty'
	import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue';
	import { dealLogin } from '@/common/js/common'
	import { mapState, mapActions, mapMutations } from 'vuex'
	import { BASE_URL, addAttention, giveLike, commentActive, transpondActive, cancelAttention, delActive } from '@/api'
	export default {
		name: '',
		data () {
			return {
				roundType: [{name: '默认'}, {name: '距离'}, {name: '价格'}, {name: '筛选'}],
				pickerValueArray: [{
					label: '中国',
					value: 1
					},
				],
				status: 'more', // loading noMore
				current: 0,
				page: 1,
				sort: 0, // 0 查全部  
				order: 1, // 1综合, 2按时间, 3按距离, 4根据购买数量排序, 5根据价格倒序, 6根据价格正序  7  由远到近
			}
		},
		onLoad () {
			this._reqGetGoodsList()
			this._dealPickerValueArray()
		},
		onShow () {
			this.$hideTabbarButton()
		},
		onReachBottom () {   // 上拉加载更多
			if(this.status == 'noMore') {
				return false;
			}else {
				this._reqGetGoodsList()
			}
		},
		computed: {
			...mapState(['all_demand_type', 'goods_list']),
			BASE_URL () {
				return BASE_URL
			},	
		},
		methods: {
			...mapActions(['reqGetGoodsList']),
			_reqGetGoodsList () {
				this.reqGetGoodsList({
					token: uni.getStorageSync('token'),
					page: this.page,
					sort: this.sort,
					order: this.order,
					callBack: this.addPage,
					callBack2: this.changeStatus
				})
			},
			onConfirm (e) {
				this.page = 1;
				this.sort = e.value[0]
				this._reqGetGoodsList()
			},
			_dealPickerValueArray () {
				let arr = []
				this.all_demand_type.forEach((val, index) => {
					val.subclass.forEach((v, i) => {
						arr.push({label: v.name, value: v.id})
					})
				})
				arr.unshift({label: '全部', value: 0})
				this.pickerValueArray = arr;
			},
			onGoToDetail (item) {
				uni.navigateTo({
					url: '/pages/home/subPages/goods-detail/goods-detail?id=' + item.id
				})
			},
			addPage () {
				this.page ++;
			},
			changeStatus (statu) {
				console.log(statu)
				this.status = statu;
			},
			onChoseType (index) {  // 顶部导航切换
				let self = this;
				this.page = 1;
				if(index == 3) {  // 筛选
					this.$refs.mpvuePicker.show()
					return;
				}
				if(index == 1) {
					this.order = this.order == 3 ? 7 : 3;
				}
				if(index == 2) {
					this.order = this.order == 5 ? 6 : 5;
				}
				if(index == 0){
					this.order = 1;
				}
				this.current = index;
				this._reqGetGoodsList()
			},
		},
		components: {
			empty,
			uniPopup,
			uniLoadMore,
			publishPopup,
			mpvuePicker
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';	
/* #ifdef H5 */
.reply {
	bottom: 50px;
}
/* #endif */
.round-wrap {
	min-height: 100%;
	.round-type {
		position: fixed;
		left: 0;
		right: 0;
		z-index: 9;
		background: #fff;
		top: 44px;
		height: 44px;
		/* #ifdef APP-PLUS */
		top: 0;
		/* #endif  */
		.type-item {
			// padding: 20upx 0 25upx 0;
			height: 44px;
			color: #999;
			&.active {
				border-bottom: 4upx solid $main-color;
				font-weight: bold;
				color: #333;
			}
			.arrow-icon {
				font-size: 16upx;
				margin-left: 3upx;
			}
		}
	}
}
.goods-list {
	padding: 15upx 20upx;
	.goods-item {
		margin-bottom: 30upx;
		.goods-img {
			width: 340upx;
			height: 340upx;
			border-radius: 10upx;
		}
		.title {
			width: 340upx;
			padding: 10upx 0;
			font-size: 30upx;
		}
		.price-wrap {
			.price {
				color: #f13130;
			}
			.iconfont {
				color: #c5c5c5;
			}
		}
	}
}
</style>
