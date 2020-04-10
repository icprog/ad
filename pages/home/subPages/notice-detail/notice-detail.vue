<template>
	<view class="detail">
		<view class="text-center text-muted text-small">{{detail.create_time_text}}</view>
		<view class="text-center title">{{detail.title}}</view>
		<uParse :content="detail.content"/>
	</view>
</template>

<script>
	import { noticeDetail } from '@/api'
	import uParse from '@/components/uParse/src/wxParse.vue'
	export default {
		name: '',
		data () {
			return {
				id: '',
				detail: ''
			}
		},
		onLoad (options) {
			this.id = options.id;
			this._noticeDetail()
		},
		methods: {
			async _noticeDetail () {
				let result = await noticeDetail ({
					gg_id: this.id
				})
				this.detail = result.data
			}
		},
		components: {
			uParse
		}
	}
</script>

<style lang="scss" scoped>
.detail {
	padding: 30upx;
	.title {
		padding: 20upx 0;
	}
	.content {
		text-align: justify;
	}
}
</style>
