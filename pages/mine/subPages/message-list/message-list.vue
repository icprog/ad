<template>
	<view class="list bg-white">
		<view class="item d-flex" v-for="(item, index) of list" :key="index" @tap="onGoToContact(item.sendInfo.id)">
			<image class="avatar" :src="BASE_URL + item.sendInfo.avatar"></image>
			<view class="right flex-1 d-flex flex-direction-column justify-content-between border-bottom">
				<view class="name-wrap flex-1 d-flex align-items-center justify-content-between">
					<text class="name ellipsis">{{item.sendInfo.username}}</text>
					<text class="text-small text-muted">{{item.create_time}}</text>
				</view>
				<view class="content text-small text-muted d-flex justify-content-between">{{item.end_Data['data-text']}} 
					<view class="red" v-if="item.unread_num > 0">{{item.unread_num}}</view>
				</view>
			</view>
		</view>
		<empty v-if="list.length <= 0"></empty>
	</view>
</template>

<script>
	import { BASE_URL, getChatList } from '@/api'
	import empty from '@/components/empty'
	export default {
		name: '',
		data () {
			return {
				list: []
			}
		},
		onLoad () {
			// this._getChatList()
		},
		onShow () {
			this.$hideTabbarButton()
			this._getChatList()
		},
		computed: {
			BASE_URL () {
				return BASE_URL
			}
		},
		methods: {
			async _getChatList () {
				let result = await getChatList ({
					token: uni.getStorageSync('token')
				})
				this.list = result.data;
			},
			onGoToContact (id) {
				uni.navigateTo({
					url: '/pages/mine/subPages/contact-us/contact-us?id=' + id
				})
			}
		},
		components: {
			empty
		}
	}
</script>

<style lang="scss" scoped>
.list {
	min-height: 100%;
	padding: 30upx;
	.item {
		margin-bottom: 20upx;
		.avatar {
			width: 80upx;
			height: 80upx;
			margin-right: 20upx;
			border-radius: 10upx;
		}
		.right {
			padding-bottom: 30upx;
			.name-wrap {
				.name {
					width: 55%;
				}
			}
			.content {
				
				.red {
					width: 30upx;
					height: 30upx;
					line-height: 30upx;
					text-align: center;
					color: #fff;
					font-size: 18upx;
					border-radius: 50%;
					background: red;
				}
			}
		}
	}
}	
</style>
