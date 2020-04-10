<template>
	<view v-if="list && list.length > 0">
		<view class="title d-flex align-items-center justify-content-between">
			<view class="">{{title}}</view>
			<view v-if="title === '历史搜索'"  style="color: #666;" class="iconfont"
				@tap="onDelSearchHistoryEvent"
			>&#xe659;</view>
		</view>
		<view class="list d-flex flex-wrap">
			<view class="item" v-for="(item, index) of list" :key="index"
			 @tap="onSearchItemEvent(item)"
			>{{item}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: String,
			list: Array,
		},
		name: '',
		data () {
			return {

			}
		},
		onLoad () {

		},
		computed: {
			
		},
		methods: {
			onSearchItemEvent (item) {
				this.$emit('onSearchItemEvent', item)
			},
			onDelSearchHistoryEvent () {
				this.$emit('onDelSearchHistoryEvent')
			}
		}
	}
</script>

<style lang="scss" scoped>
.title {
		margin-bottom: 10upx;
	}
	.list {
		margin-bottom: 60upx;
		.item {
			margin: 30upx 20upx;
			padding: 10upx 30upx;
			border-radius: 50upx;
			background: #f4f4f4;
		}
	}
</style>
