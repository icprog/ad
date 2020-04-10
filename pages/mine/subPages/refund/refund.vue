<template>
	<view class="refund container-30">
		<textarea name="" id="" cols="30" rows="10" class="desc bg-white w-100" v-model="desc" placeholder="请输入您退款的原因"></textarea>
		<button class="btn confirm-btn" @tap="onSubmitClick">提交</button>
	</view>
</template>

<script>
	import { applyRefund } from '@/api'
	export default {
		name: '',
		data () {
			return {
				desc: '',
				id: '', // 订单id
			}
		},
		onLoad (options) {
			this.id = options.id
		},
		methods: {
			async onSubmitClick () {
				if(this.desc == '') {
					uni.showToast({
						title: '输入退款原因,有助于加快退款进度哦',
						icon: 'none'
					})
					return;
				}
				let result = await applyRefund ({
					iid: this.id,
					refund: this.desc,
					token: uni.getStorageSync('token')
				})
				if(result.code == 200) {
					uni.showToast({
						title: '提交成功'
					})
					setTimeout(() => {
						uni.navigateBack()
					}, 1500)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';
.refund {
	.desc {
		padding: 20upx;
		font-size: 28upx;
		border-radius: 15upx;
	}
	.btn {
		margin-top: 200upx;
		background: $main-color;
		color: #fff;
	}
}
</style>
