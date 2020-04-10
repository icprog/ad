<template>
	<view class="wrap">
		<!-- <scroll-view scroll-y="true" class="scroll-Y" :scroll-top="scrollHeight" @scrolltolower="lower" :style="{hegiht: scrollHeight + 'px'}"> -->
			<view class="chat-list clearfix">
				<view class="chat-item scroll-view-item" :class="user_id == item.data.send ? 'custom' : 'service'" v-for="(item, index) of list" :key="index">
					<image class="avatar" :src="BASE_URL + ((user_id == item.data.send) ?  item.sendInfo.avatar : item.sendInfo.avatar)"></image>
					<text class="content">{{item.data['data-text']}}</text>
				</view>
			</view>
		<!-- </scroll-view> -->
		
		<view class="input-wrap">
			<!-- <text class="iconfont">&#xe805;</text> -->
			<input type="text" v-model="text" confirm-type="send" return-key-type="send">
			<!-- <text class="iconfont">&#xe681;</text> -->
			<!-- <text class="iconfont font-bold">&#xe629;</text> -->
			<text class="send" @tap="onSendMessageClick">发送</text>
		</view>
	</view>
</template>

<script>
	import { BASE_URL, SOCKET_URL, getChatRecord, getChatAvatar } from '@/api'
	export default {
		name: '',
		data () {
			return {
				text: '',
				id: '', // 对方id
				user_id: '',// 我的id
				list: [],
				page: 1,
				sendInfo: {},
				receiveInfo: {}
			}
		},
		onLoad (options) {
			this.id = options.id;
			this.user_id = uni.getStorageSync('user_id')
			this._getChatRecord()
			this._getChatAvatar()
		},
		onShow () {
			this.$hideTabbarButton()
			this._connect()
		},
		computed: {
			BASE_URL () {
				return BASE_URL
			},
			scrollHeight () {
				return uni.getSystemInfoSync().windowHeight
			}
		},
		methods: {
			onSendMessageClick () {      // 发送
				if(this.text == '') {return}
				let obj = {
					"send": this.user_id,
					"receive": this.id,
					"data-text": this.text
				};
				let json = JSON.stringify(obj)
				console.log(json)
				this.list.push({
					data: obj,
					receiveInfo: this.receiveInfo,
					sendInfo: this.sendInfo
				})
				this.text = '';
				uni.sendSocketMessage({
					data: json
				});
				setTimeout(() => {
					this._onScrollTo() 
				}, 1000)
			},
			async _getChatRecord() {     // 获取聊天记录
				let result = await getChatRecord ({
					token: uni.getStorageSync('token'),
					other: this.id,
					page: this.page,
				})
				this.list = result.data;
				setTimeout(() => {
					this._onScrollTo() 
				}, 1000)
			},
			_onScrollTo () {
				let view = uni.createSelectorQuery().select(".wrap");
				view.boundingClientRect(data => {
					console.log("得到布局位置信息" + JSON.stringify(data));
					uni.pageScrollTo({
						scrollTop: data.height,
						duration: 10
					});
				}).exec();
			},
			async _getChatAvatar () {
				let receiveInfo = await getChatAvatar({
					user_id: this.id
				})
				this.receiveInfo = receiveInfo.data;
				uni.setNavigationBarTitle({
					title: receiveInfo.data.username
				})
				let sendInfo = await getChatAvatar({
					user_id: this.user_id
				})
				this.sendInfo = sendInfo.data;
			},
			_connect () {
				let self = this;
				uni.connectSocket({
					url: SOCKET_URL + '?id=' + uni.getStorageSync('user_id')
				});
				uni.onSocketOpen(function (res) {
					console.log('WebSocket连接已打开！');
				});
				uni.onSocketMessage(function (res) {
					console.log('收到服务器内容：' + res.data);
					let obj = JSON.parse(res.data);
					console.log(self.receiveInfo)
					console.log(self.sendInfo)
					self.list.push({
						data: obj,
						receiveInfo: self.sendInfo,
						sendInfo: self.receiveInfo
					})
					uni.vibrateLong({
						success: function () {
								console.log('success');
						}
					});
				});
				uni.onSocketError(function (res) {
					console.log('WebSocket连接打开失败，请检查！');
				});
				uni.onSocketClose(function (res) {
					console.log('WebSocket 已关闭！');
					self._connect()
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
.wrap {
	min-height: 100%;
	padding-bottom: 100upx;
	background: #f0f0f0;
	.chat-list {
		display: flex;
		flex-direction: column;
		padding: 30upx 20upx;
		.chat-item {
			display: flex;
			align-items: center;
			max-width: 87%;
			margin-bottom: 50upx;
			.avatar {
				flex-shrink: 0;
				width: 70upx;
				height: 70upx;
				margin-right: 20upx;
				border-radius: 50%;
			}
			.content {
				position: relative;
				padding: 15upx 30upx;
				border-radius: 15upx;
				background: #fff;
				&:after {
					position: absolute;
					content: '';
					width: 0;
					height: 0;
					border: 10upx solid transparent;
					border-right-color: #fff;
					border-left: none;
					top: 50%;
					margin-top: -10upx;
				}
			}
		}
		.custom {
			flex-direction: row-reverse;
			align-self: flex-end;
			.avatar {
				margin-right: 0;
				margin-left: 20upx;
			}
			.content {
				&:after {
					transform: rotate(180deg);
					right: -10upx;
				}
			}
		}
		.service {
			.content {
				background: #ffbcb4;
				&:after {
					left: -10upx;
					border-right-color: #ffbcb4;
				}
			}	
		}
	}
	.input-wrap {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		height: 100upx;
		padding: 0 15upx;
		background: #f8f8f8;
		input {
			flex: 1;
			height: 70upx;
			line-height: 70upx;
			margin-left: 15upx;
			padding: 0 30upx;
			border: 1upx solid #bebebe;
			border-radius: 50upx;
		}
		.iconfont {
			margin-left: 15upx;
			font-size: 50upx;
			color: #bebebe;
		}
		.send {
			margin-left: 15upx;
			
		}
	}
}	

</style>
