<template>
	<view class="mine-list-wrap">
		<view class="mine-list bg-white border-radius">
			<list-cell :title="item.title" :approve="item.approve" 
					v-for="(item, index) of list" :key="index" 
					@onGoToPage="onGoToPage(item.title)"
			>
				<slot>
					<view v-if="user_info.firm == 'no' && user_info.icad == 'no'" class="approve d-flex align-items-center">
						<text class="iconfont orange">&#xe62a;</text>
						<text class="text-muted text-small">未申请</text>
					</view>
					<view v-if="user_info.firm == 'rebut' || user_info.icad == 'rebut'" class="approve d-flex align-items-center">
						<text class="iconfont red">&#xe668;</text>
						<text class="text-muted text-small">被驳回</text>
					</view>
					<view v-if="user_info.firm == 'ongoing' || user_info.icad == 'ongoing'" class="approve d-flex align-items-center">
						<text class="iconfont orange">&#xe62a;</text>
						<text class="text-muted text-small">审核中</text>
					</view>
					<view v-if="Number(user_info.firm) > 0 || Number(user_info.icad) > 0 " class="approve d-flex align-items-center">
						<text class="iconfont green">&#xe61e;</text>
						<text class="text-muted text-small">已认证</text>
					</view>
				</slot>
			</list-cell>
		</view>
	</view>
</template>

<script>
	import listCell from '@/components/list-cell'
	export default {
		name: 'mineList',
		props: {
			user_info: Object
		},
		data () {
			return {
				list: [
					{title: '我的钱包'},
					{title: '我的评价'},
					{title: '我的收藏'},
					{title: '地址管理'},
					{title: '服务商/设计师认证', approve: 0},
					{title: '投诉/反馈'}
				]
			}
		},
		watch: {
			user_info () {
				this.$set(this.list[4], 'approve', this.user_info.firm)
			}
		},
		methods: {
			onGoToPage (title) {
				this.$emit('onGoToPage', title)
			}
		},
		components: {
			listCell
		}
	}
</script>

<style lang="scss" scoped>
.mine-list-wrap {
	padding: 20upx;
	.mine-list {
		padding: 0 40upx;
	}
}
.iconfont {
	font-size: 30upx;
	margin-right: 5upx;
}
.orange {
	color: orange;
}
.green {
	color: #09bb07;
}
.red {
	color: red;
}
</style>
