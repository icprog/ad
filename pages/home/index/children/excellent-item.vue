<template>
	<view class="item" @tap="onToMerchantDetail">
		<image lazy-load="true" class="" :src="BASE_URL + ((item.la) ? item.la.firm_images[0] : item.images[0])"></image>
		<!-- item.avatar ? (BASE_URL + item.avatar) : (BASE_URL + item.images[0]) -->
		<view class="ellipsis  name" v-if="item.username">{{item.username}}</view>
		<view class="ellipsis name" v-else>{{item.described}}</view>
		<view class="d-flex align-items-center justify-content-between">
			<view class="text-change text-muted text-change" v-if="merchant">评分：<text class="text-change score">{{item.pf}}</text></view>
			<view class="text-change text-muted text-change" v-else>价格：<text class="text-change score">¥{{item.price}}</text></view>
			<view class="text-change text-muted text-change" v-if="merchant">{{item.distance}}km</view>
		</view>
	</view>
</template>

<script>
	import { BASE_URL } from '@/api'
	export default {
		name: '',
		props: {
			item: Object,
			merchant: Boolean
		},
		data () {
			return {

			}
		},
		computed: {
			BASE_URL () {
				return BASE_URL
			}
		},
		onLoad () {

		},
		methods: {
			onToMerchantDetail () {
				this.$emit('onToMerchantDetail')
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';
.item {
	width: 340upx;
	margin-bottom: 50upx;
	.name {
		font-size: 30upx;
	}
	image {
		width: 340upx;
		height: 214upx;
		border-radius: 6upx;
	}
	.ellipsis {
		margin: 15upx 0;
	}
	.score {
		color: $main-color;
	}
}
</style>
