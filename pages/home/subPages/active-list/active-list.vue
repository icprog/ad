<template>
	<view>
		<view class="active-item bg-white" v-for="(item, index) of merchant_detail.moving" :key="index"
			 @tap="onGoToActiveDetail(item.id)"
		>
			<active-detail :item="item" @onActiveButtonClick="onActiveButtonClick"></active-detail>
		</view>
	</view>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	import activeDetail from '@/components/active-item'
	export default {
		name: '',
		data () {
			return {

			}
		},
		onLoad () {

		},
		computed: {
			...mapState(['merchant_detail'])
		},
		methods: {
			onGoToActiveDetail (id) {
				uni.navigateTo({
					url: '/pages/home/subPages/merchant-active/merchant-active?id=' + id
				})
			},
			onActiveButtonClick ({type, id}) {
				uni.navigateTo({
					url: '/pages/home/subPages/merchant-active/merchant-active?id=' + id
				})
			}
		},
		components: {
			activeDetail
		}
	}
</script>

<style lang="scss" scoped>
.active-item {
	padding: 0 20upx;
	margin-bottom: 20upx;
}
</style>
