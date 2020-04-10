<template>
	<view class="wrap d-flex align-items-center justify-content-between">
		<view class="tit font-bold">{{title}}</view>
		<button class="more bg-white text-muted" v-if="showMoreButton" @tap="onMoreRecommendClick(title)">更多推荐</button>
	</view>
</template>

<script>
	export default {
		props: {
			title: String,
			showMoreButton: {type: Boolean, default: false}
		},
		name: '',
		data () {
			return {

			}
		},
		onLoad () {

		},
		methods: {
			onMoreRecommendClick (title) {
				this.$emit('onMoreRecommendClick', title)
			}
		}
	}
</script>

<style lang="scss" scoped>
.wrap {
	padding: 40upx 0;
	.tit {
		font-size: 34upx;
	}
	.more {
		margin: 0;
		padding: 0;
		font-size: 28upx;
		&:after {
			display: none;
		}
	}
}
</style>
