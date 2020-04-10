<template>
	<view>
		<view class="page-body">
			<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'">
				<view class="nav-left-item" @click="categoryClickMain(item,index)" :key="index" :class="index==categoryActive?'active':''"
				    v-for="(item,index) in newDemanType">
					{{item.name}}
				</view>
			</scroll-view>
			<scroll-view class="nav-right bg-white" scroll-y :style="'height:'+height+'px'" scroll-with-animation>
				<view class="type d-flex justify-content-between bg-white">
					<view class="type-item" :class="{active: current == index}" v-for="(item, index) of type" :key="index" @tap="onTypeClick(item, index)">{{item}}</view>
				</view>
				<view :id="index===0?'first':''" class="nav-right-item" v-for="(item, index) in demand_list" :key="item.id">
					<demand-item :item="item" @onToDemandDetail="onToDemandDetail"></demand-item>
				</view>
				<empty v-if="demand_list.length <= 0" />
				<uni-load-more v-if="showLoading" :status="loadingType"></uni-load-more>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import demandItem from '@/pages/home/index/children/demand-item'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more'
	import empty from '@/components/empty'
	import { mapState, mapActions } from 'vuex'
	export default {
		name: '',
		data () {
			return {
				type: ['智能排序', '发布时间', '距离最近'],
				categoryList: [],
				subCategoryList: [],
				height: 0,
				categoryActive: 0,  // 左侧索引
				current: 0,         // 排序索引
				page: 1,
				sort: 0,
				showLoading: false,
				loadingType: 'loading'
			}
		},
		onLoad () {
			this.height = uni.getSystemInfoSync().windowHeight - 59;
			this._reqGetDemandList()
			this._reqGetAllDemandType()
		},
		onShow () {
			this.$hideTabbarButton()
		},
		computed: {
			...mapState(['demand_list', 'all_demand_type']),
			newDemanType () {
				let arr = [];
				this.all_demand_type.forEach((val, index) => {
					val.subclass.forEach((v, i) => {
						arr.push(v)
					})
				})
				arr.unshift({id: 0, name: '全部'})
				return arr
			}
		},
		methods: {
			...mapActions(['reqGetDemandList', 'reqGetAllDemandType']),
			loadData () {
				this.showLoading = true;
				if(this.loadingType === 'noMore') {
					return;
				}
				this._reqGetGoodsList()
			},
			_reqGetDemandList() {
				let order;
				switch (this.current) {
					case 0: order = 1;
					break;
					case 1: order = 2;
					break;
					case 2: order = 3;
					break;
				}
				this.reqGetDemandList({
					page: this.page,
					sort: this.sort,
					order: order,
					callBack: this.addPage
				})
			},
			_reqGetAllDemandType () {
				this.reqGetAllDemandType()
			},
			onToDemandDetail (item) {
				uni.navigateTo({
					url: '/pages/home/subPages/demand-detail/demand-detail?id=' + item.id
				})
			},
			categoryClickMain (item, index) {  // 左侧点击
				if(this.categoryActive !== index) {
					this.page = 1;
					this.loadingType = 'loading';
					this.showLoading = false;
					this.categoryActive = index;
					this.sort = item.id;
					this._reqGetDemandList()
				}
			},
			onTypeClick  (item, index) {    // 排序方式点击
				if(this.current !== index) {
					this.current = index;
					this._reqGetDemandList()
				}
			},
			addPage (result) {
				if(result.length >= 10) {
					this.page ++;
				}else {
					this.loadingType = 'noMore'
				}	
			}
		},
		components: {
			demandItem,
			empty,
			uniLoadMore
		}
	}
</script>

<style lang="scss" scoped>
	@import '~@/common/css/avariables.scss';
	.type {
		position: fixed;
		top: 0;
		left: 25%;
		width: 75%;
		.type-item {
			width: 33.33%;
			padding: 20px 0;
			text-align: center;
			font-size: 14px;
			color: #999;
			&.active {
				color: $main-color;
			}
		}
	}
	/* #ifdef H5 */
	.type {
		top: 44px;
	}
	/* #endif */
	.page-body {
		display: flex;
	}

	.nav {
		display: flex;
		width: 100%;
	}

	.nav-left {
		width: 25%;
		background: #f8f8f8;
	}

	.nav-left-item {
		height: 100upx;
		font-size: 26upx;
		display: flex;
		align-items: center;
		justify-content: center;
		&.active {
			color: #333;
			font-weight: bold;
			background: #fff;
		}
	}

	.nav-right {
		width: 75%;
		padding-top: 59px;
		.nav-right-item {
			padding: 0 20upx;
		}
	}



	
</style>
