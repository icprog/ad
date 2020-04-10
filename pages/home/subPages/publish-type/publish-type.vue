<template>
	<view class="page-body">
		<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'">
			<view class="nav-left-item" @tap="categoryClickMain(item,index)" :key="index" :class="index==categoryActive?'active':''"
			    v-for="(item,index) in all_demand_type">
				{{item.name}}
			</view>
		</scroll-view>
		<scroll-view class="nav-right bg-white" scroll-y :style="'height:'+height+'px'" scroll-with-animation>
			<view :id="index===0?'first':''" 
						class="nav-right-item d-flex justify-content-between align-items-center border-bottom" 
						v-for="(item,index) in all_demand_type[categoryActive].subclass" :key="index"
						@tap="onPublishTypeClick(item)"
			>
				<view class="item-name">{{item.name}}</view>
				<image src="/static/images/f2@2x.png"></image>
			</view>
			<empty v-if="all_demand_type[categoryActive].subclass.length <= 0"></empty>
		</scroll-view>
	</view>
</template>

<script>
	import { mapState, mapActions, mapMutations } from 'vuex'
	import empty from '@/components/empty'
	export default {
		name: '',
		data () {
			return {
				categoryList: [],
				subCategoryList: [],
				categoryActive: 0,
				height: 0,
				type: '', // 1 需求  2商品
			}
		},
		onLoad (options) {
			this.type = options.type
			this.height = uni.getSystemInfoSync().windowHeight;
			this._getAllDemandType()
		},
		computed: {
			...mapState(['all_demand_type']),
		},
		methods: {
			...mapActions(['reqGetAllDemandType']),
			...mapMutations(['SORT_TYPE']),
			_getAllDemandType () {
				this.reqGetAllDemandType({});
			},
			categoryClickMain (item, index) {  // 左侧点击
				if(this.categoryActive != index) {
					this.categoryActive = index;
				}
			},
			onPublishTypeClick (item) {   // item点击
				this.SORT_TYPE({name: item.name, id: item.id})
				if(this.type == 1) {
					uni.navigateBack({
						url: `/pages/home/subPages/publish/publish?id=${item.id}&name=${item.name}`
					})
					// uni.navigateBack()
				}
				if(this.type == 2) {
					uni.navigateBack({
						url: `/pages/publish/subPages/publish-goods/publish-goods?id=${item.id}&name=${item.name}`
					})
					// uni.navigateBack()
				}
			}
		},
		components: {
			empty
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';
	.page-body {
		display: flex;
	}

	.nav {
		display: flex;
		width: 100%;
	}

	.nav-left {
		width: 30%;
	}

	.nav-left-item {
		height: 100upx;
		font-size: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.nav-right {
		width: 70%;
		padding-left: 40upx;
		.nav-right-item {
			width: 100%;
			height: 100upx;
			padding-right: 30upx;
		}
		& .nav-right-item:last-child {
			border-bottom: none;
		}
	}
	.nav-right-item image {
		width: 14upx;
		height: 24upx;
	}

	.active {
		color: $main-color;
		background: #fff;
	}
</style>
