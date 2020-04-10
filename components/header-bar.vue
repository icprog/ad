<template>
	<view class="bar" :style="{color: color}">
		{{title}}
	</view>
</template>

<script>
	export default {
		props: {
			title: {type: String},
			color: {type: String, default: '#fff'}
		},
		name: '',
		data () {
			return {

			}
		},
		onLoad () {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.bar {
	position: fixed;
	left: 0;
	right: 0;
	top: var(--status-bar-height);
	text-align: center;
	font-size: 16px;
	font-weight: bold;
	line-height: 44px;
}
</style>
