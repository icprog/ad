<template>
	<view class="demand-detail">
		<demand-person :demand_detail="demand_detail" @onAttentionEvent="onAttentionEvent"></demand-person>
		<demand-info :isOffer="isOffer" :demand_detail="demand_detail" :demandImg="demandImg"></demand-info>
		<demand-offer :demand_detail="demand_detail"></demand-offer>
		<view class="demand-oper d-flex bg-white"> <!--  v-if="demand_detail.uid != user_id"-->
			<view class="favorite d-flex flex-direction-column align-items-center justify-content-center" @tap="onCollectEvent(demand_detail.isCollect)">
				<view v-if="demand_detail.isCollect == 0" class="iconfont">&#xe611;</view>
				<view v-else class="iconfont" style="color: #f13130">&#xe611;</view>
				<view>收藏</view>
			</view>
			<view class="contact d-flex justify-content-center align-items-center" @tap="onContactEvent(demand_detail.uid)">与他联系</view>
			<view class="join d-flex justify-content-center align-items-center" v-if="demand_detail.isquote == 0" @tap="onOfferClick(true)">参与报价</view>
			<view class="join d-flex justify-content-center align-items-center" v-else @tap="onOfferClick(false)">撤销报价</view>
		</view>
		<uni-popup :show="showPopup" position="bottom" mode="fixed" @hidePopup="togglePopup('')">
			<view class="pop-up">
				<input placeholder="输入报价金额" type="number" v-model="price">
				<button class="" @tap="onOfferEvent">确定</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import demandPerson from './children/demand-person'
	import demandInfo from './children/demand-info'
	import demandOffer from './children/demand-offer'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import  headerBar from '@/components/header-bar'
	import { mapState, mapActions } from 'vuex'
	import { addAttention, cancelAttention, collectDemand, cancelCollect, joinOffer, cancelOffer } from '@/api'
	import { dealLogin } from '@/common/js/common'
	export default {
		name: '',
		data () {
			return {
				isOffer: false,
				id: '',  //  需求id
				showPopup: false,
				price: '',
				user_id: ''
			}
		},
		onLoad (options) {
			this.id = options.id
			this.user_id = uni.getStorageSync('user_id')
		},
		onShow () {
			this._reqGetDemandDetail()
			this.$hideTabbarButton()
		},
		computed: {
			...mapState(['demand_detail', 'demandImg', 'user_info']),
		},
		methods: {
			...mapActions(['reqGetDemandDetail', 'reqGetDemandList']),
			async onOfferEvent () {   // 确定报价
				let self = this;
				if(this.price == '') {
					uni.showToast({
						title: '请输入报价金额',
						icon: 'none',
					})
					return
				}
				let result = await joinOffer ({
					token: uni.getStorageSync('token'),
					bid: this.id,
					price: this.price
				})
				if(result.code == 200) {
					this.price = '';
					this.showPopup = false;
					uni.showToast({
						title: '报价成功'
					})
					setTimeout(() => {
						self._reqGetDemandDetail()
						self.reqGetDemandList({
							page: 1,
							sort: 0,
							order: 2
						})
					}, 1500)
				}
			},
			async onOfferClick (flag) {   //  true 报价   false 撤销报价
				let self = this;
				if(!dealLogin(this.id)) {
					return;
				}
				if(flag) {
					this.showPopup = true;
				}else {
					let result = await cancelOffer ({
						token: uni.getStorageSync('token'),
						sid: this.id
					})
					if(result.code == 200) {
						uni.showToast({
							title: '撤销成功'
						})
						setTimeout(() => {
							self._reqGetDemandDetail()
							self.reqGetDemandList({
								page: 1,
								sort: 0,
								order: 2
							})
						}, 1500)
					}
				}
			},
			togglePopup () {
				this.showPopup = false;
			},
			_reqGetDemandDetail () {
				let token = uni.getStorageSync('token');
				this.reqGetDemandDetail({
					xid: this.id,
					token: token
				})
			},
			async onAttentionEvent ({type, id}) {  // 关注点击   0 未关注   1已关注
				if(!dealLogin(this.id)) {
					return;
				}
				let self = this;
				if(!dealLogin(self.id)) {
					return;
				}
				if(type == 0) {
					let result = await addAttention ({
						tid: id,
						token: uni.getStorageSync('token')
					})
					if(result.code == 200) {
						setTimeout(() => {
							self._reqGetDemandDetail()
						}, 1000)
					}
				}
				if(type == 1) {
					let result = await cancelAttention ({
						tid: id,
						token: uni.getStorageSync('token')
					})
					if(result.code == 200) {
						self._reqGetDemandDetail()
					}
				}
			},
			async onCollectEvent (type) {   //  0未收藏  1收藏
				if(!dealLogin(this.id)) {
					return;
				}
				let self = this;
				if(type == 0) {
					let result = await collectDemand ({
						sid: this.id,
						token: uni.getStorageSync('token')
					})
					if(result.code == 2000) {
						self._reqGetDemandDetail()
					}
				}
				if(type == 1) {
					let result = await cancelCollect ({
						sid: this.id,
						token: uni.getStorageSync('token')
					})
					if(result.code == 2000) {
						self._reqGetDemandDetail()
					}
				}
			},
			onContactEvent (id) {
				if(!dealLogin(this.id)) {
					return;
				}
				uni.navigateTo({
					url: '/pages/mine/subPages/contact-us/contact-us?id=' + id
				})
			},
			
		},
		components: {
			demandPerson,
			demandInfo,
			demandOffer,
			uniPopup,
			headerBar
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';	
.demand-detail {
	.demand-oper {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 90upx;
		border-top: 1upx solid #eeeeee;
		.favorite {
			width: 20%;
			font-size: 24upx;
		}
		.iconfont {
			font-size: 40upx;
			color: #999999;
		}
		.contact {
			width: 30%;
			border-left: 1upx solid #eeeeee; 
		}
		.join {
			width: 50%;
			color: #fff;
			background: $main-color;
		}
	}
	.pop-up {
		padding: 50upx;
		input {
			margin-bottom: 50upx;
			border-bottom: 1upx solid #eee;
		}
		button {
			color: #fff;
			background: #f13130;
		}
	}
}
</style>
