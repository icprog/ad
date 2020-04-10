<template>
	<view class="list-wrap">
		<view class="list bg-white">
			<uni-swipe-action :options="options2" v-for="(item, index) of message_list" :key="index" @click="onMessageItem(item, $event)">
				<view class="item d-flex align-items-center border-bottom" :class="{active: item.have_read == 0}">
					<image src="/static/images/message.png"></image>
					<view class="item-right flex-1">
						<!-- <view class="title">张三回复我</view> -->
						<view class="title ellipsis">{{item.content}}</view>
					</view>
				</view>
			</uni-swipe-action>
		</view>
		<empty v-if="message_list.length <= 0" />
	</view>
</template>

<script>
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action'
	import empty from '@/components/empty'
	import { readMessage, delMessage } from '@/api'
	import { hideTabbarButton } from '@/common/js/common'
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		name: '',
		data() {
			return {
				current: 0,
				options2: [{
					text: '标记为已读',
					style: {
						backgroundColor: '#ccc'
					}
				}, {
					text: '删除',
					style: {
						backgroundColor: '#f13130'
					}
				}],
			}
		},
		onLoad() {

		},
		computed: {
			...mapState(['message_list'])
		},
		onShow() {
			hideTabbarButton ();
			this._reqGetMessageList()
		},
		methods: {
			...mapActions(['reqGetMessageList']),
			async onMessageItem(item, value) {
				let result;
				if(value.index == 0) {  // 标记已读
					result = await readMessage ({
						message_id: item.id,
						token: uni.getStorageSync('token')
					})
				}
				if(value.index == 1) {  // 删除
					result = await delMessage ({
						ids: item.id,
						token: uni.getStorageSync('token')
					})
				}
				if(result.code == 200) {
						this._reqGetMessageList()
					}
			},
			_reqGetMessageList() {
				this.reqGetMessageList({
					token: uni.getStorageSync('token')
				})
			}
		},
		components: {
			empty,
			uniSwipeAction
		}
	}
</script>

<style lang="scss" scoped>
	@import '~@/common/css/avariables.scss';

	.list-wrap {
		padding: 20upx 0;
	}

	.list {
		padding: 0 30upx;
	}

	.item {
		position: relative;
		padding: 15upx 0;
		&.active:after {
			position: absolute;
			right: 0;
			top: 8upx;
			content: '';
			width: 10upx;
			height: 10upx;
			border-radius: 50%;
			background: red;
		}
		image {
			width: 88upx;
			height: 88upx;
			margin-right: 20upx;
		}

		.item-right {
			position: relative;
			width: 85%;

			.content {
				margin-top: 10upx;
				font-size: 24upx;
				color: #999;
			}

			&.checked:after {
				position: absolute;
				right: 0;
				top: 50%;
				margin-top: -9upx;
				content: '';
				width: 18upx;
				height: 18upx;
				border-radius: 50%;
				background: $main-color;
			}
		}
	}
</style>
