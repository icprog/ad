<template>
	<view class="d-flex align-items-center justify-content-between list-cell bg-white border-bottom"
				@tap="onGoToPage(title)"
	>
		<text>{{title}}</text>
		<view class="d-flex align-items-center">
			<view v-if="number && number > 0" class="number">{{number}}</view>
			
			<block v-if="approve">
				<slot></slot>
			</block>
			<image v-if="avatar" class="avatar" :src="avatar"></image>
			<text class="nickName" v-if="nickName">{{nickName}}</text>
			<text class="nickName" v-if="phone">{{phone}}</text>
			<text class="iconfont" v-if="showArrow">&#xe6e9;</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: String,
			showArrow: {type: Boolean, default: true},
			number: {type: [Number, String]},
			approve: {type: [Number, String]},
			avatar: String,
			phone: String,
			nickName: String
		},
		name: '',
		data () {
			return {

			}
		},
		onLoad () {
			
		},
		methods: {
			onGoToPage (title) {
				this.$emit('onGoToPage', title)
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';	
.list-cell {
	padding: 30upx 0;
	.number {
		width: 30upx;
		height: 30upx;
		line-height: 30upx;
		text-align: center;
		font-size: 18upx;
		border-radius: 50%;
		color: #fff;
		font-size: 16upx;
		background: $main-color;
	}
	.approve {
		image {
			width: 30upx;
			height: 30upx;
			margin-right: 10upx;
		}
	}
	.avatar {
		width: 60upx;
		height: 60upx;
		border-radius: 50%;
	}
	.nickName {
		color: #999;
	}
	.iconfont {
		margin-left: 24upx;
		font-size: 20upx;
	}
}
</style>
