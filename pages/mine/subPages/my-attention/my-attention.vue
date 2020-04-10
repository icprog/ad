<template>
	<view class="wrap">
		<attention-item v-for="(item, index) of attention_list" :key="index" 
			:item="item"
			@OnCancelAttention="OnCancelAttention"
		></attention-item>
		<empty v-if="attention_list.length <= 0"></empty>
	</view>
</template>

<script>
	import attentionItem from '@/components/attention-item'
	import empty from '@/components/empty'
	import { mapState, mapActions } from 'vuex'
	import { BASE_URL, cancelAttention } from '@/api'
	export default {
		name: '',
		data () {
			return {

			}
		},
		onLoad () {
			this._reqGetMyAttention()
		},
		onShow () {
			this.$hideTabbarButton()
		},
		computed: {
			...mapState(['attention_list']),
			BASE_URL () {
				return BASE_URL
			}
		},
		methods: {
			...mapActions(['reqGetMyAttention', 'reqGetUserInfo']),
			_reqGetMyAttention () {
				let token = uni.getStorageSync('token');
				this.reqGetMyAttention({
					token: token
				})
			},
			async OnCancelAttention (id) {
				let self = this;
				let token = uni.getStorageSync('token');
				uni.showModal({
					content: '确定要取消关注吗?',
					success: async function (res) {
						if(res.confirm) {
							let result = await cancelAttention({
								token: token,
								tid: id
							})
							if(result.code == 200) {
								self._reqGetMyAttention()
								self.reqGetUserInfo({
									token: token
								})
							}
						}
					}
				})
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
	padding-top: 20upx;
}
</style>
