<template>
	<view class="address-item border-bottom bg-white d-flex align-items-center justify-content-between" @tap="onGoToAddressList(item)">
		<text class="iconfont flex-shrink-0 address-icon" v-if="isOrderAddress">&#xe607;</text>
		<view class="flex-1">
			<view class="name-wrap d-flex align-items-center font-bold">
				<text class="name">{{item.name}}</text>
				<text class="phone">{{item.phone}}</text>
				<text class="default" v-if="item.default == 1">默认</text>
			</view>
			<view class="address-wrap d-flex align-items-center justify-content-between">
				<text class="address ellipsis">{{item.province}}{{item.city}}{{item.district}}{{item.detailed}}</text>
				<text class="iconfont" v-if="!isOrderAddress" @tap="onEditClick(item.id)">&#xe623;</text>
			</view>
		</view>
		<text class="iconfont arrow-icon flex-shrink-0" v-if="isOrderAddress">&#xe636;</text>
	</view>
</template>

<script>

	export default {
		name: '',
		props: {
			isOrderAddress: {type: Boolean, default: false},
			item: Object
		},
		data () {
			return {
				
			}
		},
		onLoad () {

		},
		methods: {
			onEditClick (id) {
				this.$emit('onEditClick', id)
			},
			onGoToAddressList (item) {
				this.$emit('onGoToAddressList', item)
			}
		},
		components: {
			
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';	
.address-item {
	padding: 30upx;
	&:last-child {
		border-bottom: none !important;
	}
	.address-icon {
		margin-right: 20upx;
	}
	.arrow-icon {
		font-size: 40upx;
	}
	.name-wrap {
		.phone {
			margin-left: 30upx;
			font-size: 26upx;
		}
		.default {
			padding: 5upx 10upx;
			margin-left: 20upx;
			border-radius: 50upx;
			line-height: 26upx;
			text-align: center;
			font-size: 18upx;
			color: #fff;
			background: $main-color;
		}
	}
	.address-wrap {
		margin-top: 10upx;
		.address {
			width: 90%;
		}
	}
}
</style>
