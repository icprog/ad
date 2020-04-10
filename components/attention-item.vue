<template>
	<view class="flex-1">
		<view class="bg-white d-flex align-items-center justify-content-between">
			<image class="avatar" :src=' BASE_URL + item.avatar'></image>
			<view class="border-bottom d-flex align-items-center justify-content-between flex-1">
				<view class="follow-center flex-1" :class="{'fans-style': isFans}">
					<view class="name-wrap d-flex">
						<view class="ellipsis name">{{item.nickname || item.username}}</view>
						<text v-if="item.identity == 1 && !attention">需求方</text>
						<text v-if="item.identity == 2 && !attention" class="demand">设计师</text>
						<text  v-if="item.identity == 3 && !attention" class="demand">服务商</text>
					</view>
					<view class="fans-wrap text-small text-muted">
						<!-- <text>深圳</text>
						<text>100条</text> -->
						<block v-if="!attention">
							<text v-if="item.number">{{item.number.guanzhu}}关注</text>
							<text v-else>{{item.num}}条动态</text>
							<text v-if="item.number">{{item.number.fensi}}粉丝</text>
							<text v-else>{{item.fansNum}}粉丝</text>
						</block>
						<block v-if="attention">
							<text>关注了你</text>
						</block>
					</view>
				</view>
				<block v-if="!isFans && !attention">
					<view class="follow-btn text-small" v-if="true" @tap="OnCancelAttention(item.id)">取消关注</view>
					<!-- <view class="follow-btn text-small" v-if="true">关注</view> -->
					<view class="follow-btn text-small" style="color: #b6b1b1" v-else>已关注</view>
				</block>
				<block v-if="attention">
					<text class="text-small text-muted">{{item.time}}</text>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import { BASE_URL, cancelAttention } from '@/api'
	export default {
		name: '',
		props: {
			item: Object,
			isAttention: {type: Boolean, default: false},
			isFans: {type: Boolean, default: false},
			attention: Boolean
		},
		data () {
			return {

			}
		},
		onLoad () {

		},
		computed: {
			BASE_URL () {
				return BASE_URL
			}
		},
		methods: {
			OnCancelAttention (id) {
				this.$emit('OnCancelAttention', id)
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';	
.bg-white {
	padding: 0 20upx;
	.avatar {
		width: 70upx;
		height: 70upx;
		margin-right: 20upx;
		border-radius: 50%;
	}
	.follow-center {
		width: 60%;
		padding: 30upx 0;
		.name-wrap {
			.name {
				max-width: 70%;
			}
			text {
				padding: 5upx;
				margin-left: 10upx;
				border: 1upx solid $main-color;
				border-radius: 7upx;
				line-height: 1;
				font-size: 20upx;
				color: $main-color;
			}
			.demand {
				color: #1596f1;
				border: 1upx solid #1596f1;
			}
		}
		.fans-wrap {
			margin-top: 10upx;
			text {
				margin-right: 30upx;
			}
		}
		&.fans-style {
			width: 100%;
			.name {
				width: auto;
			}
		}
	}
	.follow-btn {
		padding: 6upx 10upx;
		text-align: center;
		border-radius: 10upx;
		color: $main-color;
		background: #ededed;
	}
}
</style>
