<template>
	<view class="wrap">
		<merchant-info :merchant_detail="merchant_detail" @onCollectClick="onCollectClick"></merchant-info>
		<merchant-business :merchant_detail="merchant_detail"></merchant-business>
		<merchant-active v-if="(merchant_detail.moving.length > 0)" 
					:merchant_detail="merchant_detail" 
					@onActiveButtonClick="onActiveButtonClick"
					@onGoToActiveDetail="onGoToActiveDetail"
		></merchant-active>
		<merchant-service :merchant_detail="merchant_detail" 
					:merchant_goods="merchant_goods" 
					@onToGoodsDetail="onToGoodsDetail"
		></merchant-service>
		<view class="contact d-flex bg-white">
			<view class="flex-1" @tap="onMakePhoneCall">电话沟通</view>
			<view class="flex-1 red" @tap="onSendMessage()">发送消息</view>
		</view>
		<uni-popup :show="showPopup" position="middle" msg="转发动态" mode="fixed" @hidePopup="togglePopup('')">
			<view class="popup-content d-flex flex-direction-column align-items-center">
				<textarea name="" id="" cols="30" rows="10" v-model="text" placeholder="转发内容"></textarea>
				<view @tap="onConfirmClick">确定</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup'
	import merchantInfo from './children/merchant-info'
	import merchantBusiness from './children/merchant-business'
	import merchantActive from './children/merchant-active'
	import merchantService from './children/merchant-service'
	import { dealLogin } from '@/common/js/common'
	import { mapState, mapActions } from 'vuex'
	import { collectDemand, cancelCollect, giveLike, transpondActive } from '@/api'
 	export default {
		name: '',
		data () {
			return {
				id: '',
				token: '',
				showPopup: false,
				text: '',
				activeId:''
			}
		},
		onLoad (options) {
			this.id = options.id;
			this.token = uni.getStorageSync('token')
			this._reqGetMerchantDetail()
			this._reqGetMerchantGoodds()
		},
		onShow () {
			this.$hideTabbarButton()
		},
		computed: {
			...mapState(['merchant_detail', 'merchant_goods']),
		},
		methods: {
			...mapActions(['reqGetMerchantDetail', 'reqGetMerchantGoodds']),
			_reqGetMerchantDetail () {
				this.reqGetMerchantDetail ({
					sid: this.id,
					token: this.token
				})
			},
			onMakePhoneCall () {
				uni.makePhoneCall({
						phoneNumber: merchant_detail.mobile //仅为示例
				});
			},
			_reqGetMerchantGoodds () {
				this.reqGetMerchantGoodds ({
					fid: this.id
				})
			},
			onSendMessage () {
				if(!dealLogin()) {
					return;
				}
				uni.navigateTo({
					url: '/pages/mine/subPages/contact-us/contact-us?id=' + this.id
				})
			},
			async onCollectClick (type) {
				console.log(type)
				if(!dealLogin()) {return}
				let result;
				if(type == 1) {   // 收藏
					result = await collectDemand ({
						sid: this.id,
						type: 2,
						token: this.token
					})
				}
				if(type == 0) {   // 取消
					result = await cancelCollect ({
						sid: this.id,
						type: 2,
						token: this.token
					})
				}
				if(result.code == 2000) {
					this._reqGetMerchantDetail()
				}
			},
			onToGoodsDetail (id) {
				uni.navigateTo({
					url: '/pages/home/subPages/goods-detail/goods-detail?id=' + id
				})
			},
			async onActiveButtonClick ({type, id}) {  // 1.消息  2.收藏、取消  3. 分享
				if(type === 1) {
					uni.navigateTo({
						url: '/pages/home/subPages/merchant-active/merchant-active?id=' + id
					})
					return 
				}
				if(type == 2) {
					let result = await giveLike ({
						token: uni.getStorageSync('token'),
						mid: id
					})
					if(result.code == 200) {
						this._reqGetMerchantDetail()
					}
				}
				if(type == 3) {
					this.activeId = id;
					this.showPopup = true;
				}
			},
			async onConfirmClick () {   // 确定转发
				let result = await transpondActive ({
					token: uni.getStorageSync('token'),
					zid: this.activeId,
					text: this.text
				})
				if(result.code == 200) {
					uni.showToast({
						title: '转发成功'
					})
					setTimeout(() => {
						this._reqGetMerchantDetail()
						this.text = '';
						this.showPopup = false;
					}, 1500)	
				}
			},
			onGoToActiveDetail (id) {   //  跳转动态详情
				uni.navigateTo({
					url: '/pages/home/subPages/merchant-active/merchant-active?id=' + id
				})
			},
			togglePopup () {
				this.showPopup = false;
			}
		},
		components: {
			merchantInfo,
			merchantBusiness,
			merchantActive,
			merchantService,
			uniPopup
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/mixin.scss';	
@import '~@/common/css/avariables.scss';
.popup-content {
	width: 450upx;
	height: 300upx;
	textarea {
		width: 420upx;
		height: 250upx;
		margin-top: 10upx;
		padding: 10upx;
		border: 1upx solid #eee;
		font-size: 28upx;
	}
	view {
		margin-top: 20upx;
	}
}
.wrap {
	padding-bottom: 110upx;
}
.contact {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	line-height: 90upx;
	text-align: center;
	.red {
		color: #fff;
		background: $main-color;
	}
}
</style>
