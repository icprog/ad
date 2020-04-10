<template>
	<view class="img-list d-flex flex-wrap">
		<view class="img-wrap" :style="{width: newSize, height: newSize}" v-for="(item, index) of imgList" :key="index">
			<text class="iconfont close-icon" @tap="onDelImgEvent(index)">&#xe7be;</text>
			<image :src="item" :style="{width: newSize, height: newSize}"></image>
		</view>
		<image class="add-btn" :style="{width: newSize, height: newSize}" src="/static/images/g16@2x.png" @tap="onAddImgEvent"></image><!-- /static/images/f48@2x.png -->
	</view>
</template>

<script>
	export default {
		name: '',
		props: {
			imgList: Array,
			size: {type: [Number, String], default: 140}
		},
		data() {
			return {

			}
		},
		onLoad() {

		},
		computed: {
			newSize () {
				return uni.upx2px(this.size) + 'px'
			}
		},
		methods: {
			onAddImgEvent () {
				this.$emit('onAddImgEvent')
			},
			onDelImgEvent (index) {
				this.$emit('onDelImgEvent', index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.img-list {
		margin-top: 15upx;

		.img-wrap {
			position: relative;
			width: 130upx;
			height: 130upx;
			margin: 15upx;

			.close-icon {
				position: absolute;
				font-size: 36upx;
				right: -18upx;
				top: -18upx;
				z-index: 99;
			}
		}

		image {
			width: 130upx;
			height: 130upx;
		}

		.add-btn {
			margin: 15upx;
		}
	}
</style>
