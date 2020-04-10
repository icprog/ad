<template>
	<view class="mall-classify bg-white d-flex flex-wrap align-items-center">
		<view class="classify-item d-flex flex-direction-column align-items-center"
					v-for="(item, index) of all_demand_type" :key="index"
					@tap="onLookMore"
		>
			<image :src="BASE_URL + item.image"></image>
			<text class="">{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	import { BASE_URL } from '@/api'
	import { mapState, mapActions } from 'vuex'
	export default {
		name: '',
		data () {
			return {

			}
		},
		onLoad () {

		},
		computed: {
			...mapState(['all_demand_type']),
			BASE_URL () {
				return BASE_URL
			}
		},
		methods: {
			onLookMore () {
				uni.navigateTo({
					url: '/pages/home/subPages/goods-list/goods-list'
	})
			}
		}
	}
</script>

<style lang="scss" scoped>
.mall-classify {
	padding: 20upx 30upx 10upx 30upx;
	.classify-item {
		width: 25%;
		margin-bottom: 50upx;
		image {
			width: 80upx;
			height: 80upx;
			margin-bottom: 20upx;
			border-radius: 50%;
		}
		text {
			line-height: 1;
		}
	}
}
</style>
