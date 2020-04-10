<template>
	<view class="item d-flex justify-content-between" @tap="onToDemandDetail(item)">
		<image class="" :src="BASE_URL + item.avatar"></image>
		<view class="item-right border-bottom">
			<view class="top d-flex align-items-center justify-content-between">
				<view class="name ellipsis">{{item.username}}</view>
				<view class="distant text-change text-muted">{{item.distance}}km</view>
			</view>
			<view class="intro ellipsis text-change text-muted">{{item.content}}</view>
			<block v-if="showVertical">
				<view class="time text-change text-muted">发布时间：{{item.created_time_text || item.create_time}}</view>
				<view class="bottom-wrap d-flex align-items-center justify-content-between">
					<text class="people text-change">已有<text>{{item.quote_num}}</text>人报价</text>
					<text v-if="collect" class="collect iconfont" @tap.stop="onCancelCollect(item)">&#xe611;</text>
				</view>
			</block>
			<block v-else>
				<view class="level d-flex justify-content-between align-items-center">
					<view class="text-change text-muted">{{item.created_time_text || item.create_time}}</view>
					<block>
						<view class="text-change text-muted offer" v-if="item.quote_num == 0">暂无报价</view>
						<view class="text-change text-muted offer" v-else>已有{{item.quote_num}}报价</view>
					</block>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import { BASE_URL } from '@/api'
	export default {
		props: {
			showVertical: Boolean,
			item: Object,
			collect: Boolean
		},
		name: '',
		data () {
			return {

			}
		},
		computed: {
			BASE_URL () {
				return BASE_URL
			}
		},
		onLoad () {

		},
		methods: {
			onToDemandDetail (item) {
				this.$emit('onToDemandDetail', item)
			},
			onCancelCollect (item) {
				this.$emit('onCancelCollect', item)
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';	
.bottom-wrap {
	margin-top: 20upx;
	.collect {
		font-size: 50upx;
		color: $main-color;
	}
}

.item {
	padding-left: 10upx;
	margin-bottom: 40upx;
	image {
		width: 60upx;
		height: 60upx;
		border-radius: 50%;
	}
	.item-right {
		width: 87%;
		padding-bottom: 40upx;
		.name {
			width: 70%;
			font-size: 30upx;
		}
		.intro {
			margin: 20upx 0;
		}
		.people, .offer {
			display: inline-block;
			// margin-top: 20upx;
			padding: 10upx 15upx;
			border-radius: 50upx;
			color: #919191;
			background: #f2f2f2;
			text {
				color: #333;
			}
		}
		.offer {
			margin: 0;
			color: $main-color;
		} 
	}
}
</style>
