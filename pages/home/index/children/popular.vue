<template>
	<view class="bg-white">
		<popular-title :showMoreButton="true" :title="title" @onMoreRecommendClick="onMoreRecommendClick"></popular-title>
		<view class="list">
			<popular-item paddingBottom="60" @onToGoodsDetail="onToGoodsDetail" :showMoney="true" v-for="item of goods_list" :key="item.id" :item="item"></popular-item>
		</view>
	</view>
</template>

<script>
	import popularTitle from './title'
	import popularItem from './popular-item'
	export default {
		props: {
			title: String,
			goods_list: Array
		},
		name: '',
		data () {
			return {

			}
		},
		onLoad () {

		},
		methods: {
			onMoreRecommendClick (title) {
				this.$emit('onMoreRecommendClick', title)
			},
			onToGoodsDetail (item) {
				this.$emit('onToGoodsDetail', item.id)
			}
		},
		components: {
			popularTitle,
			popularItem
		}
	}
</script>

<style lang="scss" scoped>
.bg-white {
	margin-top: 20upx;
	padding: 0 20upx;
}
</style>
