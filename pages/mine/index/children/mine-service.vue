<template>
	<view class="mine-service-wrap border-radius">
		<view class="mine-service bg-white">
			<view class="service-approve d-flex align-items-center border-bottom">
				<text class="text-title">认证服务商</text>
				<!-- <uni-rate :disabled="true" :value="value" size="14" activeColor="#f13130"></uni-rate> -->
				<uni-icon type="star-filled" color="#f13130" v-for="(item) of user_info.star.comprehensive" :key="item"></uni-icon>
				<uni-icon type="star" color="rgb(143, 143, 148)" v-for="(item) of (5 - user_info.star.comprehensive)" :key="item"></uni-icon>
			</view>
			<view class="service-list d-flex justify-content-around align-items-center">
				<view class="service-item d-flex flex-direction-column align-items-center"
					v-for="(item, index) of serverType" :key="index"
					@tap="onSwitchTo(index)"
				>
					<text class="number font-bold">{{item.num}}</text>
					<text class="type">{{item.name}}</text>
				</view>
				<!-- <view class="service-item d-flex flex-direction-column align-items-center">
					<text class="number font-bold">36</text>
					<text class="type">订单</text>
				</view>
				<view class="service-item d-flex flex-direction-column align-items-center">
					<text class="number font-bold">36</text>
					<text class="type">参与竞价</text>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	import { mapState } from 'vuex'
	export default {
		name: '',
		props: {
			user_info: Object
		},
		data () {
			return {
				serverType: [{name: '发布商品', num: 0}, {name: '订单', num: 0}, {name: '参与竞价', num: 0}],
			}
		},
		watch: {
			user_info () {
				this.$set(this.serverType[0], 'num', this.user_info.number.shangpin)
				this.$set(this.serverType[1], 'num', this.user_info.number.doingdan)
				this.$set(this.serverType[2], 'num', this.user_info.number.canyujingjia)
			}
		},
		computed: {
			// ...mapState(['user_info']),
		},
		methods: {
			onSwitchTo (index) {
				if(index === 0) {
					uni.navigateTo({
						url: '/pages/mine/subPages/service-goods/service-goods'
					})
				}
				if(index === 1) {
					uni.navigateTo({
						url: '/pages/mine/subPages/service-order/service-order'
					})
				}
				if(index === 2) {
					uni.navigateTo({
						url: '/pages/mine/subPages/my-join/my-join'
					})
				}
			}
		},
		components: {
			uniRate,
			uniIcon
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';	
.mine-service-wrap {
	padding: 0 20upx;
	.mine-service {
		padding: 0 30upx;
		.service-approve {
			padding: 30upx 0;
			text {
				margin-right: 16upx;
			}
			.text-title {
				font-size: 30upx;
			}
		}
		.service-list {
			padding: 40upx 0;
			.number {
				margin-bottom: 7upx;
				color: $main-color;
			}
		}
	}
}
</style>
