<template>
	<view class="comment-intro half-circle">
		<view class="top-title d-flex align-items-center"><image src="/static/images/platform.png"></image><text class="border-radius">平台点评</text></view>
		<view class="platform-content">{{platform_comment.pcomment || ''}}</view>
		<view class="title mg-top-40 left-flag" @tap="onMoreCommentClick">用户点评（查看全部）</view>
		<view class="type-list d-flex flex-wrap">
			<view class="type-item border-radius" 
				:class="{active: current == index}"
				v-if="item.num > 0" 
				v-for="(item, index) of comment_type" 
				:key="index" :index="index"
				@tap="onLookCommentClick(item.id, index)"
			>{{item.name}}({{item.num}})</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		props: {
			platform_comment: Object,
			comment_type: Array
		},
		name: '',
		data () {
			return {
				current: -1
			}
		},
		onLoad () {
			
		},
		methods: {
			onLookCommentClick (id, index) {
				if(this.current != index) {
					this.current = index;
				}
				this.$emit('onLookCommentClick', id)
			},
			onMoreCommentClick () {
				this.current = -1;
				this.$emit('onMoreCommentClick')
			} 
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';	
.comment-intro {
	position: relative;
	padding: 20upx 50upx;
	.top-title {
		image {
			width: 98upx;
			height: 77upx;
		}
		text {
			width: 170upx;
			height: 50upx;
			line-height: 50upx;
			text-align: center;
			font-weight: bold;
			background: $main-color;
		}
	}
	.platform-content {
		margin-top: 20upx;
		padding-left: 20upx;
		font-size: 24upx;
		text-align: justify;
		line-height: 2;
	}
	
	.type-list {
		padding-left: 20upx;
		padding-top: 50upx;
		.type-item {
			width: 270upx;
			height: 60upx;
			line-height: 60upx;
			font-size: 24upx;
			margin-right: 15upx;
			margin-bottom: 30upx;
			text-align: center;
			border: 1upx solid $main-color;
			&.active {
				background: $main-color;;
				color: #fff;
			}
		}
	}
}
.title {
	position: relative;
	font-weight: bold;
	margin-left: 10upx;
}	
</style>
