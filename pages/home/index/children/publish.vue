<template>
	<view class="publish bg-white border-radius">
		<view class="publish-identify border-radius d-flex">
			<view class="flex-1 border-radius identity-item" 
					:class="{active: current == index}" 
					v-for="(item, index) of identity" 
					:key="index"
					@tap="onIdentityClick(index)"
			>{{item}}</view>
		</view>
		<view class="publish-content d-flex flex-direction-column align-items-center" v-show="current === 0">
			<view class="title font-bold mg-top-30">- 发需求 找专业人才 -</view>
			<view class="intro text-change text-muted mg-bottom-30">已有1299999人找到专业人才</view>
			<button class="btn" @tap="onPublishClick">免费发布需求</button>
		</view>
		<view class="serviceContent d-flex justify-content-around align-items-center" v-show="current === 1">
			<view class="serviceItem d-flex flex-direction-column align-items-center" 
						v-for="(item, index) of typeList" 
						:key="index"
						@tap="onServiceItemClick"
			>
				<image :src="BASE_URL + item.image"></image>
				<text class="">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { BASE_URL } from '@/api'
	export default {
		name: '',
		props: {
			all_demand_type: Array
		},
		data () {
			return {
				identity: ['我是需求方', '我是服务商'],
				// typeList: [
				// 	{icon: '/static/images/g5@2x.png', name: '设计类目'}, 
				// 	{icon: '/static/images/g2@2x.png', name: '制作安装'},
				// 	{icon: '/static/images/g5@2x.png', name: '喷绘印刷'},
				// 	{icon: '/static/images/g2@2x.png', name: '采购招标'}
				// ],
				current: 0
			}
		},
		onLoad () {

		},
		computed: {
			BASE_URL () {
				return BASE_URL
			},
			typeList () {
				let arr = this.all_demand_type.slice(0, 4)
				return arr
			}
 		},
		methods: {
			onIdentityClick (index) {
				if(this.current !== index) {
					this.current = index;
				}
			},
			onServiceItemClick () {
				this.$emit('onServiceItemClick')
			},
			onPublishClick () {
				this.$emit('onPublishClick')
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';	
.publish {
	position: relative;
	top: -40upx;
	height: 320upx;
	padding-bottom: 30upx;
	box-shadow: 0 0 10upx 2upx rgba(0, 0, 0, .1);
}
.publish-identify {
	height: 80upx;
	line-height: 80upx;
	text-align: center;
	.identity-item {
		font-size: 30upx;
		background: #f7f7f7;
		&.active {
			background: #fff;
		}
	}
}
.publish-content {
	.title {
		font-size: 34upx;
	}
	.intro {
		margin-top: 20upx;
	}
	.btn {
		width: 340upx;
		height: 64upx;
		line-height: 64upx;
		color: #fff;
		background: $main-color;
		box-shadow: 2upx 2upx 2upx $main-color;
	}
}
.serviceContent {
	height: 240upx;
	.serviceItem {
		image {
			width: 85upx;
			height: 85upx;
			margin-bottom: 20upx;
		}
	}
}
</style>
