<template>
	<view class="uni-swiper-msg">
		<view class="uni-swiper-msg-icon">
			<image class="icon-notice" src="/static/images/notice.png" mode="widthFix"></image>
		</view>
		<swiper vertical="true" autoplay="true" circular="true" interval="3000">
			<swiper-item v-for="(item, index) in notice_list" :key="index">
				<view class="ellipsis" @tap="onGoToDetail(item.id)">{{item.title}}</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name: '',
		props: {
			notice_list: Array
		},
		data () {
			return {

			}
		},
		onLoad () {

		},
		methods: {
			onGoToDetail (id) {
				uni.navigateTo({
					url: '/pages/home/subPages/notice-list/notice-list'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
/* swiper msg */
.uni-swiper-msg{width:100%; padding:12upx 0; flex-wrap:nowrap; display:flex; border-radius: 50upx; background: #f5f5f5}
.uni-swiper-msg-icon{padding-left: 20upx; margin-right:20upx; display: flex; align-items:center; justify-content:center;}
.uni-swiper-msg-icon image{width:138upx; height: 27upx;}
.uni-swiper-msg swiper{width:100%; height:50upx;}
.uni-swiper-msg swiper-item{line-height:50upx; font-size: 28upx; color: #333333;}
</style>
