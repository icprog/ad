<template>
	<view class="invite-wrap">
		<view class="invite-item d-flex align-items-center bg-white" 
			v-for="(item, index) of merchant_list" :key="index"
			@tap="onChoseInviteClick(item)"
		>
			<text class="iconfont" v-if="!item.checked" style="color: #a9a9a9">&#xe63d;</text>
			<text class="iconfont" v-else style="color: #f13130">&#xe60a;</text>
			<attention-item :item="item" :isFans="true"></attention-item>
		</view>
		<empty v-if="merchant_list.length <= 0"></empty>
		<button class="btn btn-confirm btn-fixed" :style="{top: fixTop}" @tap="onInviteClick">邀请报价</button>
	</view>
</template>

<script>
	import attentionItem from '@/components/attention-item'
	import empty from '@/components/empty'
	import { mapState, mapActions } from 'vuex'
	import { inviteOffer } from '@/api'
	export default {
		name: '',
		data () {
			return {
				id: '',  // 需求id
			}
		},
		onLoad (options) {
			this.id = options.id
			this._reqGetMerchantList()
		},
		computed: {
			...mapState(['merchant_list']),
			fixTop () {
				return (uni.getSystemInfoSync().windowHeight - 70) + 'px'
			}
		},
		methods: {
			...mapActions(['reqGetMerchantList']),
			async onInviteClick () {   // 邀请
				let self = this;
				let arr = [];
				this.merchant_list.forEach((val, index) => {
					if(val.checked) {
						arr.push(val.id)
					}
				})
				if(arr.length <=0 ) {
					uni.showToast({
						title: '您没有选择任何东西哦',
						icon: 'none'
					})
					return;
				}
				let result = await inviteOffer ({
					bid: this.id,
					yids: arr.join(','),
					token: uni.getStorageSync('token')
				})
				if(result.code == 2000) {
					uni.showToast({
						title: '邀请成功',
					})
					setTimeout(() => {
						uni.navigateBack()
					}, 1500)
				}
			},
			onChoseInviteClick (item) {
				if(item.checked === undefined) {
					this.$set(item, 'checked', true)
				}else {
					this.$set(item, 'checked', !item.checked)
				}
			},
			_reqGetMerchantList () {
				this.reqGetMerchantList({
					order: 1,
					type: 2,   //  1查服务商  2查服务商+设计师
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
.invite-wrap {
	padding-bottom: 110upx;
	.invite-item {
		padding-left: 30upx; 
		.iconfont {
			margin-right: 20upx;
			font-size: 45upx;
			color: #a9a9a9;
		}
	}
}	

</style>
