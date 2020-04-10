<template>
	<view class="bg-white">
		<excellent-title :showMoreButton="true" :title="title" @onMoreRecommendClick="onMoreRecommendClick"></excellent-title>
		<view class="list d-flex flex-wrap justify-content-between">
			<excellent-item :merchant="merchant" v-for="(item, index) of merchant_list" :item="item" :key="index" 
				@onToMerchantDetail="onToMerchantDetail(item.id)"
			></excellent-item>
		</view>
	</view>
</template>

<script>
	import excellentTitle from './title'
	import excellentItem from './excellent-item'
	export default {
		props: {
			title: String,
			merchant_list: Array,
			merchant: Boolean
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
			onToMerchantDetail (id) {
				this.$emit('onToMerchantDetail', id)
			}
		},
		components: {
			excellentTitle,
			excellentItem
		}
	}
</script>

<style lang="scss" scoped>

</style>
