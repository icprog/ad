<template>
	<view class="wrap">
		<comment-item :comment="true"
			v-for="(item, index) of goods_comment" :key="index"
			:item="item"
		></comment-item>
		<empty v-if="goods_comment.length <= 0"></empty>
	</view>
</template>

<script>
	import empty from '@/components/empty'
	import commentItem from '@/components/comment-item'
	export default {
		name: '',
		props: {
			goods_comment: Array
		},
		data () {
			return {

			}
		},
		onLoad () {

		},
		methods: {

		},
		components: {
			commentItem,
			empty
		}
	}
</script>

<style lang="scss" scoped>
.wrap {
	padding: 0 30upx;
}
</style>
