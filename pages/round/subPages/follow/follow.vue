<template>
	<view class="wrap bg-white">
		<attention-item :attention="true" v-for="(item, index) of list" :key="index" :item="item"></attention-item>
		<empty v-if="list.length <= 0"></empty>
	</view>
</template>

<script>
	import attentionItem from '@/components/attention-item'
	import empty from '@/components/empty'
	import { getRoundAttention } from '@/api'
	export default {
		name: '',
		data () {
			return {
				list: []
			}
		},
		onLoad () {
			this._getRoundAttention()
		},
		methods: {
			async _getRoundAttention () {
				let result = await getRoundAttention ({
					token: uni.getStorageSync('token')
				})
				if(result.code == 2000) {
					this.list = result.data;
				}
			}
		},
		components: {
			attentionItem,
			empty
		}
	}
</script>

<style lang="scss" scoped>
.wrap {
	min-height: 100%;
	padding-top: 20upx;
}
</style>
