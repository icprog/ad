<template>
	<view class="list">
		<collect-item :collect="true" :showVertical="true" v-for="(item, index) of list" :key="index" :item="item"
			@onToDemandDetail="onToDemandDetail"
			@onCancelCollect="onCancelCollect"
		></collect-item>
		<empty v-if="list.length <= 0"></empty>
	</view>
</template>

<script>
	import collectItem from '@/pages/home/index/children/demand-item'
	import empty from '@/components/empty'
	import { getMyCollect, cancelCollect } from '@/api'
	export default {
		name: '',
		data () {
			return {
				list: []
			}
		},
		onShow () {
			this.$hideTabbarButton()
			this._getMyCollect()
		},
		methods: {
			onToDemandDetail (item) {
				uni.navigateTo({
					url: '/pages/home/subPages/demand-detail/demand-detail?id=' + item.sid
				})
			},
			async _getMyCollect () {
				let result = await getMyCollect ({
					token: uni.getStorageSync('token')
				})
				if(result.code == 2000) {
					this.list = result.data;
				}
			},
			async onCancelCollect (item) {
				let result = await cancelCollect ({
					token: uni.getStorageSync('token'),
					sid: item.sid
				})
				if(result.code == 2000) {
					this._getMyCollect()
				}
			}
		},
		components: {
			collectItem,
			empty
		}
	}
</script>

<style lang="scss" scoped>
.list {
	min-height: 100%;
	padding: 30upx;
	background: #fff;
}
</style>
