<template>
	<view class="wrap bg-white">
		<view class="bg-white">
			<reply-comment :round="true" v-for="(item, index) of list" :key="index" :item="item"></reply-comment>
			<empty v-if="list.length <= 0"></empty>
		</view>
	</view>
</template>

<script>
	import replyComment from '@/components/comment-item'
	import empty from '@/components/empty'
	import { getRoundReply } from '@/api'
	export default {
		name: '',
		data () {
			return {
				list: []
			}
		},
		onLoad () {
			this._getRoundReply()
		},
		methods: {
			async _getRoundReply () {
				let result = await getRoundReply ({
					token: uni.getStorageSync('token')
				})
				if(result.code == 2000) {
					this.list = result.data;
				}
			}
 		},
		components: {
			replyComment,
			empty
		}
	}
</script>

<style lang="scss" scoped>
.wrap {
	min-height: 100%;
	padding-top: 20upx;
	.bg-white {
		padding: 0 20upx;
	}
}
</style>
