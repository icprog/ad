<template>
	<view class="login-title d-flex align-items-center justify-content-between">
		<view class="title font-bold">{{title}}</view>
		<image class="icon-user" src="/static/images/b2@2x.png"></image>
	</view>
</template>

<script>
	export default {
		props: {
			title: String,
		},
		name: '',
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
.login-title {
	margin-bottom: 70upx;
	.title {
		font-size: 36upx;
	}	
	.icon-user {
		width: 80upx;
		height: 80upx;
	}
}	
</style>
