<template>
	<view></view>
</template>

<script>
	export default {
		name: '',
		data () {
			return {

			}
		},
		onReady () {
			setTimeout(() => {
				uni.chooseLocation({
					success: function (res) {
						console.log('位置名称：' + res.name);
						console.log('详细地址：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
					}
				});
			}, 100)
			
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>

</style>
