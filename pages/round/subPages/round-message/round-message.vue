<template>
	<view class="wrap">
		<view class="round1 bg-white">
			<list-cell title="回复我的" :number="round_message.comment" @onGoToPage="onGoToPage"></list-cell>
			<list-cell title="赞" :number="round_message.up" @onGoToPage="onGoToPage"></list-cell>
			<list-cell title="好友关注" :number="round_message.attention" @onGoToPage="onGoToPage"></list-cell>
		</view>
	</view>
</template>

<script>
	import listCell from '@/components/list-cell'
	import { getRoundMessage } from '@/api'
	import { mapState, mapActions } from 'vuex'
	export default {
		name: '',
		data () {
			return {
				nums: {}
			}
		},
		onLoad () {
			
		},
		onShow () {
			this._reqGetRoundMessage()
			this.$hideTabbarButton()
		},
		computed: {
			...mapState(['round_message'])
		},
		methods: {
			...mapActions(['reqGetRoundMessage']),
			_reqGetRoundMessage () {
				this.reqGetRoundMessage({
					token: uni.getStorageSync('token')
				})
			},
			async _getRoundMessage () {
				let result = await getRoundMessage ({
					token: uni.getStorageSync('token')
				})
				this.nums = result.data;
			},
			onGoToPage (title) {
				console.log(title)
				if(title === '回复我的') {
					uni.navigateTo({
						url: '/pages/round/subPages/reply/reply'
					})
				}
				if(title === '赞') {
					uni.navigateTo({
						url: '/pages/round/subPages/praise/praise'
					})
				}
				if(title === '好友关注') {
					uni.navigateTo({
						url: '/pages/round/subPages/follow/follow'
					})
				}
			}
		},
		components: {
			listCell
		}
	}
</script>

<style lang="scss" scoped>
.wrap {
	padding-top: 20upx;
	.round1 {
		padding: 0 30upx;
	}
	
}
</style>
