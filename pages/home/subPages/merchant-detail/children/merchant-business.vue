<template>
	<view class="business bg-white">
		<view class="business-title bold">主营业务</view>
		<view class="business-list d-flex flex-wrap">
			<view class="business-item" v-for="(item, index) of merchant_detail.main" :key="index">{{item}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: '',
		props: {
			merchant_detail: Object
		},
		data () {
			return {

			}
		},
		onLoad () {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.business {
	margin-top: 15upx;
	padding: 40upx 30upx;
	.business-title {
		margin-bottom: 10upx;
		font-weight: bold;
	}
	.business-item {
		margin: 10upx 7upx;
		padding: 10upx 20upx;
		border-radius: 10upx;
		background: #f7f7f7;
	}
}
</style>
