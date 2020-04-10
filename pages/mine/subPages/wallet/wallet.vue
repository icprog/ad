<template>
	<view class="wallet-wrap">
		<wallet-info></wallet-info>
		<wallet-record @onTypeItemClick="onTypeItemClick" :trade_record="trade_record"></wallet-record>
	</view>
</template>

<script>
	import walletInfo from './children/wallet-info'
	import walletRecord from './children/wallet-record'
	import { mapState, mapActions } from 'vuex'
	export default {
		name: '',
		data () {
			return {
				type: 3, // 3全部  1充值  2提现
			}
		},
		onShow () {
			this.$hideTabbarButton()
			this._reqTradeRecord()
		},
		computed: {
			...mapState(['trade_record'])
		},
		methods: {
			...mapActions(['reqTradeRecord']),
			_reqTradeRecord () {
				this.reqTradeRecord ({
					type: this.type,
					page: 1,
					token: uni.getStorageSync('token')
				})
			},
			onTypeItemClick (type) {
				if(type == 0) {
					this.type = 3
				}else {
					this.type = type
				}
				this._reqTradeRecord()
			}
		},
		components: {
			walletInfo,
			walletRecord
		}
	}
</script>

<style lang="scss" scoped>

</style>
