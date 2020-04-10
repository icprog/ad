<template>
	<view class="demand bg-white">
		<demand-title :showMoreButton="true" :title="title" @onMoreRecommendClick="onMoreRecommendClick"></demand-title>
		<view class="list">
			<demand-item @onToDemandDetail="onToDemandDetail" :showVertical="true" v-for="(item) of demand_list" :key="item.id" :item="item"></demand-item>
		</view>
	</view>
</template>

<script>
	import demandTitle from './title'
	import demandItem from './demand-item'
	export default {
		props: {
			title: String,
			demand_list: Array
		},
		name: '',
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			onMoreRecommendClick(title) {
				this.$emit('onMoreRecommendClick', title)
			},
			onToDemandDetail(item) {
				this.$emit('onToDemandDetail', item)
			}
		},
		components: {
			demandTitle,
			demandItem
		}
	}
</script>

<style lang="scss" scoped>
	.demand {
		margin-top: 20upx;
		padding: 0 20upx;
	}
</style>
