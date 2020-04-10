<script>
	import { SOCKET_URL, getLocation, updata } from '@/api'
	import { mapState, mapActions } from 'vuex'
	export default {
		data () {
			return {
				xy: '',
				user_id: uni.getStorageSync('user_id')
			}
		},
		onLaunch: function() {
			this._updata()
		},
		onShow: function() {
			this._getLocation()
			// this._getMessage()
		},
		onHide: function() {
			
		},
		methods: {
			...mapActions(['reqGetChatList']),
			async _updata () {
				// #ifdef APP-PLUS
				let version = plus.runtime.version;
				console.log(version)
				let result = await updata ({
					versions: version
				})
				if(result.code == 200) {
					uni.showModal({
						content: '检测到新版本,是否更新',
						success: function (res) {
							if(res.confirm) {
								plus.runtime.openURL(result.data.package)
							}
						}
					})
				}
				// #endif
			},
			// _getMessage () {
			// 	let self = this;
			// 	uni.connectSocket({
			// 		url: SOCKET_URL + '?id=' + uni.getStorageSync('user_id')
			// 	});
			// 	uni.onSocketOpen(function (res) {
			// 		console.log('WebSocket连接已打开！');
			// 	});
			// 	uni.onSocketMessage(function (res) {
			// 		console.log('收到服务器内容：' + res.data);
			// 		self.reqGetChatList({
			// 			token: uni.getStorageSync('token')
			// 		})
			// 		uni.vibrateLong({   // 来消息手机振动
			// 			success: function () {
			// 				console.log('success');
			// 			}
			// 		});
			// 		// 播放声音
			// 		const innerAudioContext = uni.createInnerAudioContext();
			// 		innerAudioContext.autoplay = true;
			// 		innerAudioContext.obeyMuteSwitch = false;
			// 		innerAudioContext.src = '/static/1.mp3'; // 
			// 		innerAudioContext.onPlay(() => {
			// 			console.log('开始播放');
			// 		});
			// 		innerAudioContext.onError((res) => {
			// 			console.log(res.errMsg);
			// 			console.log(res.errCode);
			// 		});
			// 	});
			// 	uni.onSocketClose(function (res) {
			// 		console.log('WebSocket 已关闭！');
			// 		self._getMessage()
			// 	});
			// },
			_getLocation () {
				let self = this;
				uni.getLocation({
					type: 'gcj02',
					success: async function (res) {
						let xy = res.longitude + ',' + res.latitude;
						let token = uni.getStorageSync('token');
						console.log(xy, token)
						let result = await getLocation({
							xy: xy,
							token: token
						})
						console.log(JSON.stringify(result))
					},
					fail: function (res) {
						console.log(JSON.stringify(res))
					}
				});
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		width: 100%;
		height: 100%;
		font-size: 28upx;
		color: #333333;
		background: #f8f8f8;
		overflow-x: hidden !important;
	}
	view, text, button, input, textarea {
		box-sizing: border-box;
	}
	image {
		max-width: 100%;
	}	
	.placeholderStyle {
		color: #dddddd;
	}
</style>
