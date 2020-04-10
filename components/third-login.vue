<template>
	<view class="third w-100 d-flex flex-direction-column align-items-center " :style="{top: positionTop}">
		<view class="title text-muted mg-bottom-30 position-relative w-100">第三方登录</view>
		<view class="wrap d-flex justify-content-between">
			<view class="d-flex flex-direction-column align-items-center"
				v-for="(item, index) of loginType" :key="index"
				@tap="onThirdLoginEvent(item)"
			>
				<image :src="item.icon"></image>
				<text class="text-muted text-small">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: '',
		data () {
			return {
				loginType: [
					{icon: '/static/images/b6@2x.png', name: '微信'},
					{icon: '/static/images/b7@2x.png', name: 'QQ'}
				]
			}
		},
		computed: {
			positionTop () {
				return uni.getSystemInfoSync().windowHeight - 100 + 'px'
			}	
		},
		methods: {
			onThirdLoginEvent (item) {
				this.$emit('onThirdLoginEvent', item)
			}
		}
	}
</script>

<style lang="scss" scoped>
.third {
	position: fixed;
	left: 0;
	padding: 0 30upx;
}	
.title {
	position: relative;
	text-align: center;
	&:after, &:before {
		position: absolute;
		top: 50%;
		content: '';
		width: 250upx;
		height: 1px;
		background: #eeeeee;
	}
	&:before {
		left: 0;
	}
	&:after {
		right: 0;
	}
}
.wrap {
	width: 200upx;
}
image {
	width: 66upx;
	height: 66upx;
	margin-bottom: 20upx;
}
</style>
