<template>
	<view class="record-item d-flex align-items-center justify-content-between">
		<view class="item-left">
			<view class="item-money" v-if="item.price > 0">充值{{item.price}}元</view>
			<view class="item-money" v-else>提现{{item.price}}元</view>
			<view class="item-time text-small text-muted">{{item.create_time}}</view>
		</view>
		<view class="font-bold money" v-if="item.price > 0">+{{item.price}}</view>
		<view class="font-bold money" v-else>{{item.price}}</view>
	</view>
</template>

<script>
	export default {
		name: '',
		props: {
			item: Object,
		},	
		data () {
			return {
				list: {}
			}
		},
		watch: {
			item () {
				this.list = this.item;
				if(this.list.price.includes('-')) {
					this.$set(this.list, 'withdraw', 'true')
					this.$set(this.list, 'price', this.list.price.replace('-',''))
				}
			}
		},
		onLoad () {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';	
.record-item {
	padding: 20upx 30upx;
	border-bottom: 1upx solid #f8f8f8;
	.item-money {
		font-size: 26upx;
		margin-bottom: 5upx;
	}
	.money {
		color: $main-color;
	}
}
</style>
