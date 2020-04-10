<template>
	<view>
		<view class="bg-white active">
			<merchant-active :item="active_detail" @onActiveButtonClick="onActiveButtonClick"></merchant-active>
		</view>
		<view style="padding-bottom: 44px">
			<view class="wrapper mg-top-20 bg-white">
				<merchant-comment :active="true" v-for="(item, index) of active_detail.pinglun" :key="index" :item="item"
						@onReplyComment="onReplyComment"
				></merchant-comment>
				<view style="line-height: 40px" v-if="active_detail.pinglun.length <= 0">暂无评论</view>
			</view>
		</view>
		<uni-popup :show="showPopup" position="middle" msg="转发动态" mode="fixed" @hidePopup="togglePopup('')">
			<view class="popup-content d-flex flex-direction-column align-items-center">
				<textarea name="" id="" cols="30" rows="10" v-model="text" placeholder="转发内容"></textarea>
				<view @tap="onConfirmClick">确定</view>
			</view>
		</uni-popup>
		<view class="reply-section d-flex align-items-center bg-white">
			<view class="input-wrap d-flex align-items-center">
				<text class="iconfont">&#xe600;</text>
				<input class="flex-1" type="text" :focus="isFocus" v-model="comment" @blur="onBlurEvent" placeholder="写评论">
			</view>
			<button class="btn" @tap="onConfirmCommentClick">发送</button>
		</view>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup'
	import merchantActive from '@/components/active-item'
	import merchantComment from '@/components/comment-item'
	import { mapState, mapActions } from 'vuex'
	import { commentActive, giveLike, transpondActive, replyComment } from '@/api'
	export default {
		name: '',
		data () {
			return {
				id: '',
				comment: '',  // 评论内容
				text: '',   // 转发内容
				isFocus: false,
				showPopup: false,
				commentType: 1,  // 默认1 评论动态   2回复评论
				hid: '',   // 回复的评论id
			}
		},
		onLoad (options) {
			this.id = options.id
			this._reqGetActiveDetail()
		},
		onShow () {
			this.$hideTabbarButton()
		},
		computed: {
			...mapState(['active_detail']),
		},
		methods: {
			...mapActions(['reqGetActiveDetail']),
			async onReplyComment (id) {  // 回复评论
				this.isFocus = true;
				this.hid = id;
				this.commentType = 2;
			},
			async onConfirmCommentClick () {   // 评论
				let self = this;
				if(this.comment == '') {
					uni.showToast({
						title: '请输入评论内容',
						icon: 'none'
					})
					return;
				}
				if(this.commentType == 1) {
					let result = await commentActive ({
						token: uni.getStorageSync('token'),
						mid: this.id,
						text: this.comment
					})
					this.comment = ''
					if(result.code == 200) {
						self._reqGetActiveDetail()
						let view = uni.createSelectorQuery().select(".wrapper");
						view.boundingClientRect(data => {
							console.log("得到布局位置信息" + JSON.stringify(data));
							uni.pageScrollTo({
								scrollTop: data.bottom,
								duration: 300
							});
						}).exec();
						
					}
				}
				if(this.commentType == 2) {    // 回复评论
					let result = await replyComment ({
						token: uni.getStorageSync('token'),
						text: this.comment,
						cid: this.hid,
						mid: this.id
					})
					this.commentType = 1;
					this.comment = '';
					if(result.code == 2000) {
						self._reqGetActiveDetail()
					}
				}
			},
			async onActiveButtonClick ({type, id}) {
				if(type == 1) {     // 评论
					this.isFocus = true;
				}
				if(type == 2) {     // 点赞
					let result = await giveLike ({
						token: uni.getStorageSync('token'),
						mid: id
					})
					if(result.code == 200) {
						this._reqGetActiveDetail()
					}
				}
				if(type == 3) {     // 转发
					this.showPopup = true
				}
			},
			async onConfirmClick () {   // 确定转发
				let self = this;
				let result = await transpondActive ({
					token: uni.getStorageSync('token'),
					text: this.text,
					zid: this.id
				})
				if(result.code == 200) {
					uni.showToast({
						title: '转发成功'
					})
					setTimeout(() => {
						this.showPopup = false,
						this.text = '';
						self._reqGetActiveDetail()
					}, 1500)
				}
			},
			onBlurEvent () {
				this.isFocus = false;
			},
			_reqGetActiveDetail () {
				this.reqGetActiveDetail({
					token: uni.getStorageSync('token'),
					moving_id: this.id
				})
			},
			togglePopup () {
				this.showPopup = false;
			}
		},
		components: {
			merchantActive,
			merchantComment,
			uniPopup
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';	
.active {
	padding: 0 20upx;
}
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
.wrapper {
	padding: 0 30upx;
}
.reply-section {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 90upx;
	border-top: 1upx solid #eee;
	padding: 10upx 30upx;
}
.input-wrap {
	flex: 1;
	height: 100%;
	padding: 0 30upx;
	border-radius: 50upx;
	background: #eee;
}
.btn {
	height: 52upx;
	line-height: 52upx;
	color: #fff;
	margin-left: 20upx;
	font-size: 28upx;
	background: $main-color;
}
</style>
