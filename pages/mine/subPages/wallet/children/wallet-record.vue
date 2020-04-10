<template>
	<view class="wallet-recore">
		<view class="record-title font-bold text-bg text-center">交易记录</view>
		<view class="record-type d-flex justify-content-evenly border-bottom">
			<view class="record-item" :class="{active: current === index}" 
						v-for="(item, index) of recordType" :key="index"
						@tap="onTypeItemClick(index)"
			>{{item}}</view>
		</view>
		<view class="recore-list" v-if="current === 0">
			<record-item v-for="(item, index) of trade_record" :key="index" :item="item"></record-item>
		</view>
		<view class="recore-list" v-if="current === 1">
			<record-item v-for="(item, index) of trade_record" :key="index" :item="item"></record-item>
		</view>
		<view class="recore-list" v-if="current === 2">
			<record-item v-for="(item, index) of trade_record" :key="index" :item="item"></record-item>
		</view>
		<empty v-if="trade_record.length <= 0"></empty>
	</view>
</template>

<script>
	import recordItem from './record-item'
	import empty from '@/components/empty'
	export default {
		name: '',
		props: {
			trade_record: Array
		},
		data () {
			return {
				recordType: ['全部', '充值', '提现'],
				current: 0
			}
		},
		onLoad () {

		},
		methods: {
			onTypeItemClick (index) {
				if(this.current !== index) {
					this.current = index;
				}
				this.$emit('onTypeItemClick', index)
			}
		},
		components: {
			recordItem,
			empty
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';	
.wallet-recore {
	.record-title {
		line-height: 140upx;
	}
	.record-type {
		font-size: 30upx;
		color: #656565;
		.record-item {
			padding-bottom: 20upx;
			&.active {
				color: $main-color;
				border-bottom: 2upx solid $main-color;
			}
		}
	}
}
</style>
