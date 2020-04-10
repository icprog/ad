<template>
	<view class="comment-list container-30 bg-white">
		<view class="bg-white">
			<comment-item v-for="(item, index) of list" :key="index" :item="item"></comment-item>
			<empty v-if="list.length <= 0"></empty>
		</view>
	</view>
</template>

<script>
	import commentItem from './children/comment-item'
	import empty from '@/components/empty'
	import { BASE_URL, getGoodsComment } from '@/api'
	export default {
		name: '',
		data () {
			return {
				list: []
			}
		},
		onLoad () {
			this._getGoodsComment()
		},
		onShow () {
			this.$hideTabbarButton()
		},
		computed: {
			BASE_URL () {
				return BASE_URL
			}
		},
		methods: {
			async _getGoodsComment () {
				let result = await getGoodsComment ({
					token: uni.getStorageSync('token'),
					ccid: 0
				})
				if(result.code == 200) {
					this.list = result.data;
				}
			}
		},
		components: {
			commentItem,
			empty
		}
	}
</script>

<style lang="scss" scoped>
.comment-list {
	min-height: 100%;
}
</style>
