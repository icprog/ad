<template>
	<view class="wrap">
		<attention-item v-for="(item, index) of fans_list" :key="index"
										:item="item"
										:isFans="true"
		></attention-item>
		<empty v-if="fans_list.length <=0 "></empty>
	</view>
</template>

<script>
	import attentionItem from '@/components/attention-item'
	import empty from '@/components/empty'
	import { mapState, mapActions } from 'vuex'
	export default {
		name: '',
		data () {
			return {

			}
		},
		onLoad () {
			this._reqGetMyFans()
		},
		onShow () {
			this.$hideTabbarButton()
		},
		computed: {
			...mapState(['fans_list']),
		},
		methods: {
			...mapActions(['reqGetMyFans']),
			_reqGetMyFans () {
				this.reqGetMyFans({
					token: uni.getStorageSync('token')
				})
			},
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

