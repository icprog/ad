<template>
	<view class="content" :class="{'active':active}" @tap="onHideClick">
		<view class="tabbar-box-wrap">
			<view class="tabbar-box">
				<view class="tabbar-box-item" @tap.stop="goToPage('/pages/home/subPages/publish/publish')">
					<image class="box-image" src="/static/images/demand-icon.png" mode="aspectFit"></image>
					<text class="explain">发布需求</text>
				</view>
				<view class="tabbar-box-item" @tap.stop="goToPage('/pages/publish/subPages/publish-goods/publish-goods')">
					<image class="box-image" src="/static/images/goods-icon.png" mode="aspectFit"></image>
					<text class="explain">发布商品</text>
				</view>
			</view>
		</view>
	</view>
	
</template> 

<script>
export default {
	data() {
		return {
			active: false
		};
	},
	onLoad() {},
	onShow() {
		// setTimeout(() => {
		this.active = true;
		// }, 500);
	},
	onHide() {
		this.active = false;
	},
	methods: {
		goToPage(url) {
			if (!url) return;
			uni.navigateTo({
				url
			});
		},
		onHideClick () {
			this.$emit('onHideClick')
		}
	},
	components: {
		// homeTemp
	}
};
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	/* #ifdef H5 */
	// height: calc(100vh - var(--window-bottom) - var(--window-top));
	/* #endif */
	/* #ifndef H5 */
	// height: 100vh;
	/* #endif */
	transition: opacity 0.3s;
	background: rgba(0, 0, 0, .7);
	&.active {
		opacity: 1;
	}
	.logo {
		position: relative;
		margin-top: -400upx;
		width: 200upx;
		height: 200upx;
		// z-index: -1;
		opacity: 0;
		transition: opacity 0.3s;
		&.active {
			opacity: 1;
		}
	}
}
.tabbar-box-wrap {
	position: absolute;
	width: 100%;
	padding: 50upx;
	box-sizing: border-box;
	bottom: var(--window-bottom);
	left: 0;
	.tabbar-box {
		position: relative;
		display: flex;
		width: 100%;
		background: #fff;
		border-radius: 20upx;
		padding: 15upx 20upx;
		box-sizing: border-box;
		z-index: 999;
		opacity: 1 !important;
		box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
		&:after {
			content: '';
			position: absolute;
			bottom: -16upx;
			left: 0;
			right: 0;
			margin: auto;
			width: 50upx;
			height: 50upx;
			transform: rotate(45deg);
			background: #fff;
			z-index: 1;
			box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
			border-radius: 2px;
		}
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #ffffff;
			border-radius: 20upx;
			z-index: 2;
		}
		.tabbar-box-item {
			// position: relative;
			width: 100%;
			z-index: 3;
			margin: 10upx;
			color: $uni-color-subtitle;
			text-align: center;
			font-size: $uni-font-size-base;
			.box-image {
				// width: 140upx;
				// height: 140upx;
				width: 100%;
				height: $uni-img-size-lg;
			}
		}
	}
}
</style>
