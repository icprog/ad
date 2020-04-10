<template>
	<view class="round-wrap bg-white">
		<view style="height: 44px">
			<view class="round-type d-flex align-items-center justify-content-around border-bottom">
			<view class="type-item font-bold"
					:class="{active: current == index}"
					v-for="(type, index) of roundType" :key="index"
					@tap="onChoseType(index)"
				>{{type.name}}
				<text class="iconfont" v-if="type.icon">&#xe6a6;</text>
			</view>
		</view>
		</view>
		<view class="round-active">
			<view class="active-item" v-for="(item, index) of roundImgList" :key="index" @tap="onGoToActiveDetail(item.id)"><!-- 列表 -->
				<view class="active-top d-flex align-items-center">
					<image class="active-avatar rounded" :src="BASE_URL + item.avatar"></image>
					<view class="active-name-wrap">
						<view class="name-wrap d-flex align-items-center justify-content-between">
							<view class="name-wrap-left d-flex">
								<view class="ellipsis name">{{item.username}} </view>
								<text class="text-small" v-if="item.identity == 1">需求方</text>
								<text class="text-small" v-if="item.identity == 2">设计师</text>
								<text class="text-small" v-if="item.identity == 3">服务商</text>
							</view>
							<block v-if="user_id && user_id == item.uid ">
								<button class="btn btn-attention text-muted" @tap.stop="onDeleteClick(item)">删除</button></block>
							<block v-else>
								<button class="btn btn-attention" v-if="item.guanz == 0" @tap.stop="onAttentionClick(item.uid)"><text class="iconfont">&#xe65b;</text>关注</button>
								<button class="btn btn-attention text-muted" v-else @tap.stop="onCancelAttention(item)">取消关注</button>
							</block>
						</view>
						<view class="active-time text-small text-muted">{{item.update_time_text}}</view>
					</view>
				</view>
				<view class="active-container">
					<view class="border-bottom">
						<view class="acitve-content" v-if="item.zhuanfaxinxi && item.text != ''">{{item.text}}</view>
						<view class="acitve-content" v-if="item.text && !item.zhuanfaxinxi">{{item.text}}</view>
						<view class="acitve-content" v-if="item.zhuanfaxinxi && item.zhuanfaxinxi != ''">{{item.zhuanfaxinxi.text}}</view>
						<scroll-view class="scroll-view_H" scroll-x="true" v-if="item.zhuanfaxinxi && item.zhuanfaxinxi.images.length > 0">
								<view class="scroll-view-item_H" v-for="(i, index) of item.zhuanfaxinxi.images" :key="index">
									<image :src="BASE_URL + i"></image>
								</view>
						</scroll-view>
						<scroll-view class="scroll-view_H" scroll-x="true" v-if="item.imagesList.length > 0">
								<view class="scroll-view-item_H" v-for="(i, index) of item.imagesList" :key="index">
									<image :src="BASE_URL + i"></image>
								</view>
						</scroll-view>
						<view class="active-operate">
							<view class="d-flex align-items-center text-muted text-small">
								<image src="/static/images/e23@2x.png" @tap="onReplyClick(item.id)"></image>
								<text>{{item.huifu}}</text>
							</view>
							<view class="d-flex align-items-center text-muted text-small">
								<image src="/static/images/d22@2x.png" v-if="item.dianzan == 0" @tap.stop="onGiveLikeClick(0, item.id)"></image>
								<image src="/static/images/d21@2x.png" v-else @tap.stop="onGiveLikeClick(1, item.id)"></image>
								<text>{{item.dianzan_num}}</text>
							</view>
							<view class="d-flex align-items-center text-muted text-small" @tap.stop="onTranspondActive(item.id)">
								<image src="/static/images/d23@2x.png"></image>
								<text>{{item.zhuanfa}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<empty v-if="round_list.length <= 0"></empty>
			<uni-load-more :status="status" v-if="round_list.length > 5"></uni-load-more>
			<!-- 回复区域 -->
			<!-- <view class="reply d-flex align-items-center justify-content-around" v-show="showReply">
				<input type="text" placeholder="评论" class="flex-1" :focus="isFocus" v-model="content" @confirm="onSendClick" @blur="onBlurEvent">
				<view @tap="onSendClick">发送</view>
			</view> -->
			<uni-popup :show="showPopup" position="middle" msg="转发动态" mode="fixed" @hidePopup="togglePopup('')">
				<view class="popup-content d-flex flex-direction-column align-items-center">
					<textarea name="" id="" cols="30" rows="10" v-model="text" placeholder="转发内容"></textarea>
					<view @tap="onConfirmClick">确定</view>
				</view>
			</uni-popup>
		</view>
		<publish-popup v-if="showPublishPopup"  @onHideClick="onHideClick"></publish-popup>
	</view>
</template>

<script>
	import publishPopup from '@/components/publish-popup'
	import uniPopup from '@/components/uni-popup/uni-popup'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more'
	import listCell from '@/components/list-cell'
	import empty from '@/components/empty'
	import { dealLogin } from '@/common/js/common'
	import { mapState, mapActions, mapMutations } from 'vuex'
	import { BASE_URL, addAttention, giveLike, commentActive, transpondActive, cancelAttention, delActive } from '@/api'
	export default {
		name: '',
		data () {
			return {
				roundType: [{name: '附近'}, {name: '关注'}, {name: '筛选', icon: '1'}],
				identityList: ['全部', '需求方', '设计师', '服务商'],
				current: 0,
				page: 1,
				identity: 0,   // 筛选类型，默认全部
				type: 1,     // 1 查附近   2查关注
				token: '',
				showReply: false,
				content: '', // 回复内容
				isFocus: false, // 
				activeId: '', // 动态id,
				showPopup: false,
				text: '', // 转发内容
				id: '',  // 动态id
				status: 'more',   // loading noMore
				isShowRedDot: false,
				user_id: '', // 用户id
			}
		},
		onLoad () {
			this.token = uni.getStorageSync('token')
			this._reqGetRoundList()
			this.user_id = uni.getStorageSync('user_id')
		},
		onShow () {
			// #ifdef APP-PLUS
			var icon = plus.nativeObj.View.getViewById("icon");
			if (icon) {
				setTimeout(function(){
					icon.show();
				},100)
			}
			// #endif
			this._reqGetRoundMessage()
		},
		onPullDownRefresh () {
			this.page = 1;
			this._reqGetRoundList()
		},
		onNavigationBarButtonTap (e) {
			if(e.index === 0) {
				uni.navigateTo({
					url: '/pages/round/subPages/publish-active/publish-active'
				})
			}else {
				uni.navigateTo({
					url: '/pages/round/subPages/round-message/round-message'
				})
			}
		},
		onReachBottom () {   // 上拉加载更多
			if(this.status == 'noMore') {
				return false;
			}else {
				this._reqGetRoundList()
			}
		},
		computed: {
			...mapState(['round_list', 'attention_round_list', 'round_message', 'showPublishPopup', 'user_info']),
			BASE_URL () {
				return BASE_URL
			},
			roundImgList () {
				let newArray = this.round_list;
				this.round_list.forEach((val, index) => {
					let arr = [];
					if(val.images == '' || val.images == ' ') {
						arr = []
					}else if(val.images.includes(',')) {
						val.images.split(',').forEach((v, i) => {
							arr.push(v);
						})
					}else {
						arr.push(val.images)
					}
					this.$set(val, 'imagesList', arr)
				})
				return newArray
			},
			AttentionRoundImgList () {
				let newArray = this.attention_round_list;
				this.attention_round_list.forEach((val, index) => {
					let arr = [];
					if(val.images.includes(',')) {
						val.images.split(',').forEach((v, i) => {
							arr.push(v);
						})
					}else {
						arr.push(val.images)
					}
					this.$set(val, 'imagesList', arr)
				})
				return newArray
			}
		},
		watch: {
			round_message () {
				if(this.round_message.attention > 0 || this.round_message.up > 0 || this.round_message.comment > 0) {
					this.isShowRedDot = true;
				}else {
					this.isShowRedDot = false;
				}
				this.setStyle(1, this.isShowRedDot);
			}
		},
		methods: {
			...mapActions(['reqGetRoundList', 'reqGetRoundMessage', 'reqGetUserInfo']),
			...mapMutations(['dealPublishPopup']),
			onHideClick () {
				this.dealPublishPopup()
			},
			async _reqGetRoundMessage () {
				this.reqGetRoundMessage ({
					token: uni.getStorageSync('token')
				})
				
			},
			setStyle (index, show,text) {     // 动态设置消息右上角红点
				let self = this;
				let pages = getCurrentPages();
				let page = pages[pages.length - 1];
				// #ifdef APP-PLUS
				let currentWebview = page.$getAppWebview();
				if(show){
					currentWebview.showTitleNViewButtonRedDot({index:index,text:text})
				}else{
					currentWebview.hideTitleNViewButtonRedDot({index:index})
				}
				// #endif
			},	
			async onConfirmClick () {
				let result = await transpondActive ({
					token: uni.getStorageSync('token'),
					text: this.text,
					zid: this.id
				})
				if(result.code == 200) {
					this.page = 1;
					this.showPopup = false;
					this.text = ''
					this._reqGetRoundList()
				}
			},
			onTranspondActive (id) {  // 点击转发
				console.log(id)
				this.showPopup = true;
				this.id = id;
			},
			onReplyClick (id) {       // 评论
				uni.navigateTo({
					url: '/pages/home/subPages/merchant-active/merchant-active'
				})
			},
			async onGiveLikeClick (type, id) {   // type 0 点赞 1 取消
				let result = await giveLike ({
					token: uni.getStorageSync('token'),
					mid: id
				})
				if(result.code == 200) {
					this.page = 1;
					this._reqGetRoundList();
					this._reqGetRoundMessage()
				}
			},
			async onAttentionClick (id) {      // 关注
				if(!dealLogin()) {return}
				let result = await addAttention ({
					token: uni.getStorageSync('token'),
					tid: id
				})
				if(result.code == 200) {
					uni.showToast({
						title: '关注成功',
					})
					setTimeout(() => {
						this.page = 1
						this._reqGetRoundList()
						this._reqGetRoundMessage()
					}, 1500)
				}
			},
			async onCancelAttention (item) {  // 取消关注
				if(!dealLogin()) {return}
				let result = await cancelAttention ({
					token: uni.getStorageSync('token'),
					tid: item.uid
				})
				if(result.code == 200) {
					uni.showToast({
						title: '取消关注',
					})
					setTimeout(() => {
						this.page = 1
						this._reqGetRoundList()
						this._reqGetRoundMessage()
					}, 1500)
				}
			},
			async onDeleteClick (item) {
				let self = this;
				uni.showModal({
					content: '确定要删除此动态吗？',
					success: async function (res) {
						if(res.confirm) {
							let result = await delActive ({
								token: uni.getStorageSync('token'),
								rid: item.id
							})
							if(result.code == 200) {
								self.page = 1;
								self._reqGetRoundList()
								self._reqGetRoundMessage()
							}
						}
					}
				})
				
			},
			_reqGetRoundList () {
				this.status = 'loading'
				this.reqGetRoundList({
					page: this.page,
					identity: this.identity,
					type: this.type,
					token: this.token,
					callBack1: this.addPage,
					callBack2: this.changeStatus
				})
				uni.stopPullDownRefresh()
			},
			addPage () {
				this.page ++;
			},
			changeStatus (statu) {
				console.log(statu)
				this.status = statu;
			},
			_reqGetMyAttentionRoundList () {
				this.reqGetMyAttentionRoundList({
					token: uni.getStorageSync('token'),
					page: 1
				})
			},
			onChoseType (index) {  // 顶部导航切换
				this.page = 1;
				let self = this;
				if(index === 2) {
					uni.showActionSheet({
						itemList: self.identityList,
						success: function (res) {
							self.identity = res.tapIndex;
							self._reqGetRoundList()
						}
					});
					return;
				}
				if(index == 0) {
					self.type = 1;
					self.current = 0;
					self._reqGetRoundList()
				}
				if(index == 1) {   // 我关注的行业圈
					if(!dealLogin()) {return}
					this.token = uni.getStorageSync('token');
					self.current = 1;
					self.type = 2;
					self._reqGetRoundList()
				}
			},
			onGoToActiveDetail (id) {
				uni.navigateTo({
					url: '/pages/home/subPages/merchant-active/merchant-active?id=' + id
				})
			},
			togglePopup () {
				this.showPopup = false;
			}
		},
		components: {
			empty,
			uniPopup,
			uniLoadMore,
			publishPopup
		}
	}
</script>

<style lang="scss" scoped>
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
.reply {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 45px;
	padding: 0 30upx;
	background: #eee;
	input {
		background: #fff;
		padding: 0 30upx;
	}
	view {
		width: 60upx;
		margin-left: 30upx;
		text-align: center;
	}
}
/* #ifdef H5 */
.reply {
	bottom: 50px;
}
/* #endif */
.round-wrap {
	min-height: 100%;
	.round-type {
		position: fixed;
		left: 0;
		right: 0;
		z-index: 9;
		background: #fff;
		top: 44px;
		/* #ifdef APP-PLUS */
		top: 0;
		/* #endif  */
		.type-item {
			padding: 20upx 0 25upx 0;
			color: #999;
			&.active {
				border-bottom: 4upx solid $main-color;
				font-weight: bold;
				color: #333;
			}
		}
	}
	.round-active {
		padding: 0upx 0 0upx 24upx;
		.active-item {
			padding-top: 40upx;
			// margin-bottom: 40upx;
			.active-top {
				padding-right: 30upx;
				.active-avatar {
					width: 74upx;
					height: 74upx;
					margin-right: 20upx;
				}
				.active-name-wrap {
					width: 70%;
					flex: 1;
					.name-wrap {
						.name-wrap-left {
							width: 75%;
							color: #dd8700;
							.name {
								max-width: 75%;
							}
							text {
								font-size: 20upx;
								padding: 5upx 10upx;
								margin-left: 10upx;
								border-radius: 50upx;
								color: #939292;
								background: #ededed;
							}
						}
						.btn-attention {
							width: 130upx;
							height: 54upx;
							padding: 0;
							margin: 0;
							line-height: 54upx;
							border: 1upx solid #ddd;
							border-radius: 50upx;
							font-size: 24upx;
							background: #fff;
							text {
								margin-right: 5upx;
								font-size: 20upx;
							}
						}
					}
					.active-time {
						
					}
				}
			}
			.active-container {
				padding-left: 94upx;
				// & .border-bottom:last-child {
				// 	border-bottom: none !important;
				// }
				.border-bottom {
					padding-right: 30upx;
					.acitve-content {
						padding: 20upx 0;
						font-size: 26upx;
						line-height: 36upx;
						text-align: justify;
						word-break: break-all;
					}
					.scroll-view_H {
						white-space: nowrap;
						.scroll-view-item_H {
							display: inline-block;
							width: 30%;
							margin-right: 10upx;
							image {
								width: 190upx;
								height: 190upx;
								border-radius: 15upx;
							}
						}
					}
					.active-operate {
						display: flex;
						justify-content: flex-end;
						padding: 30upx 0;
						> view {
							margin-left: 60upx;
							image {
								display: block;
								width: 24upx;
								height: 24upx;
								margin-right: 15upx;
							}
						}
					}
				}
			}
		}
	}
}
</style>
