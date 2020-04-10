<template>
	<view class="item" :class="{'border-bottom': comment}">
		<view class="comment-info d-flex align-items-center">
			<image class="item-avatar rounded" :src="BASE_URL + (item.join_user ? item.join_user.avatar : ((item.userInfo) ? item.userInfo.avatar : item.avatar))"></image>
			<view class="info-right flex-1 text-small">
				<view class="name-wrap d-flex justify-content-between">
					<view class="name">{{item.join_user ? item.join_user.username : ((item.userInfo) ? item.userInfo.username : item.username)}}</view>
					<view class="time text-muted" v-if="comment || round || praise">{{item.create_time}}</view>
					<view class="time text-muted text-small d-flex align-items-center" v-if="active" @tap="onReplyComment(item.id)">回复
						<text class="iconfont" style="margin-left: 5px">&#xe69a;</text>
					</view>
				</view>
				<uni-rate :value="item.join_user.star.comprehensive" :size="8" v-if="comment"></uni-rate>
				<view class="time text-muted" v-if="active">{{item.create_time}}</view>
				<view class="time text-muted" v-if="round">评论了[{{item.mtext}}]</view>
				<view class="time text-muted" v-if="praise"><text style="color: #333;margin-right: 10px">赞了你</text>[{{item.text}}]</view>
			</view>
		</view>
		<view  :class="{paddingLeft: active || round || praise}">
			<view :class="[ {'border-bottom': active || round || praise}]">
				<view class="comment-content text-small" v-if="comment || active || round">
					{{item.crontent || item.text}}
				</view>
				<view v-if="active && item.pinglun.length > 0" :class="{'bg-color': active}" class="reply text-small mg-top-20">
					<view v-for="(val, index2) of item.pinglun" :key="index2">
						<text class="reply-name"><text v-if="active">{{val.userInfo.username}}：</text></text>
						<text>{{val.text}}</text>
					</view>
				</view>
			</view>
		</view>
		
		<scroll-view scroll-x="true" class="scroll-x" v-if="comment && item.images.length">
				<view class="scroll-view-item"
					v-for="(i, index2) of item.images" :key="index2"
				><image :lazy-load="true" :src="BASE_URL + i"></image></view>
		</scroll-view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate'
	import { BASE_URL } from '@/api'
	export default {
		props: {
			comment: Boolean,
			active: Boolean,
			round: Boolean,
			praise: Boolean,
			item: Object
		},
		name: '',
		data () {
			return {
				
			}
		},
		computed: {
			
		},
		onLoad () {

		},
		computed: {
			BASE_URL () {
				return BASE_URL
			}
		},
		methods: {
			onReplyComment (id) {
				this.$emit('onReplyComment', id)
			}
		},
		components: {
			uniRate
		}
	}
</script>

<style lang="scss" scoped>
.item {
	padding-top: 30upx;
	.comment-info {
		.item-avatar {
			width: 60upx;
			height: 60upx;
			margin-right: 16upx;
		}
	}
	.comment-content {
		margin-top: 20upx;
		line-height: 1.8;
		text-align: justify;
	}
}
.reply {
	line-height: 1.8;
	.reply-name {
		font-weight: bold;
	}
}
.bg-color {
	padding: 20upx;
	background: #f5f5f5;
}
.scroll-x {
	width: 100%;
	padding: 20upx 0 10upx 0;
	white-space: nowrap;
}
.scroll-view-item {
	display: inline-block;
	image {
		width: 230upx;
		height: 230upx;
		margin-right: 10upx;
		border-radius: 10upx;
	}
}
.paddingLeft {
	padding-left: 80upx;
}
.border-bottom {
	border-bottom: 1upx solid #eeeeee;
	padding-bottom: 30upx;
}
.time {
	margin-top: 5upx;
}
</style>
