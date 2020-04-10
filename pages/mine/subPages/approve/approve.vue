<template>
	<view class="approve bg-white">
		<view class="approve-company d-flex flex-direction-column align-items-center">
			<image class="avatar rounded" :src="user_info.avatar ? (BASE_URL + user_info.avatar) : '/static/images/y16@2x.png'"></image>
			<text class="">{{user_info.username}}</text>
		</view>
		<view class="approve-content d-flex flex-direction-column align-items-center">
			<block  v-if="Number(user_info.icad) > 0 || Number(user_info.firm) > 0">
				<image class="approve-icon" src="/static/images/success.png"></image>
				<view class="text-bg" style="color: #e4e4e4">已认证</view>
			</block>
			<block v-else>
				<image class="approve-icon" src="/static/images/warning.png"></image>
				<view class="text-bg">未认证</view>
			</block>
			<button class="btn active" v-if="Number(user_info.icad) > 0">设计师已认证</button>
			<button class="btn" @tap="onApproveClick(1)" v-else-if="user_info.icad == 'rebut'">认证被驳回</button>
			<button class="btn active" v-else-if="user_info.icad == 'ongoing'">审核中</button>
			<button class="btn" v-else @tap="onApproveClick(1)">设计师认证</button>
			<text class="mention text-small mg-top-20">认证通过后即可获得设计师权限</text>
			
			
			<button class="btn active" v-if="Number(user_info.firm) > 0">服务商已认证</button>
			<button class="btn" @tap="onApproveClick(2)" v-else-if="user_info.firm == 'rebut'">认证被驳回</button>
			<button class="btn active" v-else-if="user_info.firm == 'ongoing'">审核中</button>
			<button class="btn" v-else @tap="onApproveClick(2)">服务商认证</button>
			<text class="mention text-small mg-top-20">认证通过后即可获得服务商权限</text>
			<view hover-class="hover-class" class="contact-us d-flex align-items-center justify-content-between"  @tap="onContactUs">
				<view class="d-flex align-items-center">
					<image src="/static/images/a3@2x.png"></image>
					<text>联系我们</text>
				</view>
				<view>
					{{phone}}<text class="iconfont">&#xe6e9;</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { BASE_URL, getServicePhone } from '@/api'
	import { mapState, mapActions } from 'vuex'
	export default {
		name: '',
		data () {
			return {
				phone: ''
			}
		},
		onLoad () {
			this._getServicePhone()
		},
		onShow () {
			this.$hideTabbarButton()
		},
		computed: {
			...mapState(['user_info']),
			BASE_URL () {
				return BASE_URL
			}
		},
		methods: {
			async _getServicePhone () {
				let result = await getServicePhone();
				if(result.code == 200) {
					this.phone = result.data.phone + ''
				}
			},
			onApproveClick (type) {   //  1 设计师  2 服务商
				uni.navigateTo({
					url: '/pages/mine/subPages/complete-info/complete-info?type=' + type
				})
			},
			onContactUs () {
				uni.makePhoneCall({
					phoneNumber: this.phone
				})
				// uni.navigateTo({
				// 	url: '/pages/mine/subPages/contact-us/contact-us'
				// })
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/mixin.scss';	
@import '~@/common/css/avariables.scss';
.approve {
	min-height: 100%;
	padding-bottom: 240upx;
}
.approve-company {
	height: 345upx;
	padding-top: 100upx;
	color: #fff;
	@include background-img('~@/static/images/001@2x.png');
	.avatar {
		width: 145upx;
		height: 145upx;
		margin-bottom: 20upx;
	}
}
.approve-content {
	padding-top: 90upx;
	.approve-icon {
		width: 140upx;
		height: 140upx;
		margin-bottom: 25upx;
	}
	.btn {
		width: 300upx;
		margin-top: 80upx;
		border: 2upx solid $main-color;
		color: $main-color;
		background: #fff;
		&.active {
			border-color: #e4e4e4;
			color: #e4e4e4;
		}
	}
	.mention {
		color: #a4a4a4
	}
	.contact-us {
		width: 700upx;
		height: 90upx;
		margin-top: 190upx;
		padding: 0 40upx;
		border: 1upx solid #eeeeee;
		border-radius: 50upx;
		image {
			width: 50upx;
			height: 50upx;
			margin-right: 10upx;
		}
		.iconfont {
			margin-left: 30upx;
		}
	}
}
</style>
