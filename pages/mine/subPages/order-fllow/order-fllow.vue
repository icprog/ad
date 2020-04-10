<template>
	<view>
		<!-- <view class="logistics bg-white">
			<view>顺丰快递：2100025665250</view>
			<view>官方电话：95338</view>
		</view>
		<ali :state="alidata.state" :datas="alidata.data" :ways="alidata.information"></ali> -->
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	import {
		orderFllow
	} from '@/api'
	import ali from '@/components/wuliu-step'
	import empty from '@/components/empty'
	export default {
		name: '',
		data() {
			return {
				src: '',
				id: '',
				info: {},
				// alidata: {
				// 	state: 2,
				// 	uptime: '2019-05-23 17:52:06',
				// 	data: [{
				// 			time: '2019-05-23 16:30:20',
				// 			remark: '[杭州市]快件派送至【丰巢智能快递柜】'
				// 		},
				// 		{
				// 			time: '2019-05-23 14:54:29',
				// 			remark: '[杭州市]快件交给黄平，正在派送途中（联系电话：15157162459）'
				// 		},
				// 		{
				// 			time: '2019-05-23 14:48:46',
				// 			remark: '[杭州市]正在派送途中'
				// 		},
				// 		{
				// 			time: '2019-05-23 14:42:32',
				// 			remark: '[杭州市]快件到达 【杭州西湖金月巷营业点】'
				// 		},
				// 		{
				// 			time: '2019-05-23 12:48:30',
				// 			remark: '[杭州市]快件已发车'
				// 		},
				// 		{
				// 			time: '2019-05-23 12:48:20',
				// 			remark: '[杭州市]快件在【杭州下沙中转场】已装车'
				// 		},
				// 		{
				// 			time: '2019-05-23 11:36:57',
				// 			remark: '[杭州市]快件到达 【杭州下沙中转场】'
				// 		},
				// 		{
				// 			time: '2019-05-23 10:17:28',
				// 			remark: '[杭州市]快件已发车'
				// 		},
				// 		{
				// 			time: '2019-05-23 10:08:43',
				// 			remark: '[杭州市]快件在【杭州上城集散中心】已装车'
				// 		},
				// 		{
				// 			time: '2019-05-23 09:10:37',
				// 			remark: '[杭州市]快件到达 【杭州上城集散中心】'
				// 		},
				// 		{
				// 			time: '2019-05-22 18:00:48',
				// 			remark: '[郑州市]快件已发车'
				// 		},
				// 		{
				// 			time: '2019-05-22 16:59:21',
				// 			remark: '[郑州市]快件在【郑州经开集散中心】已装车'
				// 		},
				// 		{
				// 			time: '2019-05-22 16:17:40',
				// 			remark: '[郑州市]快件到达 【郑州经开集散中心】'
				// 		},
				// 		{
				// 			time: '2019-05-22 13:28:58',
				// 			remark: '[洛阳市]快件已发车'
				// 		},
				// 		{
				// 			time: '2019-05-22 13:28:22',
				// 			remark: '[洛阳市]快件在【洛阳机场集散中心】已装车'
				// 		},
				// 		{
				// 			time: '2019-05-22 12:06:57',
				// 			remark: '[洛阳市]快件到达 【洛阳机场集散中心】'
				// 		},
				// 		{
				// 			time: '2019-05-22 11:45:09',
				// 			remark: '[洛阳市]快件已发车'
				// 		},
				// 		{
				// 			time: '2019-05-22 11:34:13',
				// 			remark: '[洛阳市]快件在【洛阳涧西集收客户营业部】已装车'
				// 		},
				// 		{
				// 			time: '2019-05-22 11:27:43',
				// 			remark: '[洛阳市]顺丰速运 已收取快件'
				// 		},
				// 		{
				// 			time: '2019-05-22 11:17:30',
				// 			remark: '[洛阳市]顺丰速运 已收取快件'
				// 		}
				// 	],
				// 	information: {
				// 		no: '231880744913',
				// 		sName: 'SF',
				// 		expName: '顺丰速运',
				// 		url: 'http:www.sf-express.com',
				// 		tel: '95338',
				// 		img: 'https://oss-cn2.apistore.cn/exp/SF.png'
				// 	}
				// },
			}
		},
		onLoad(options) {
			console.log(options)
			this.src = `https://m.kuaidi100.com/app/query/?com=${options.com}&nu=${options.id}&coname=${options.coname}`
			this._orderFllow()
		},
		methods: {
			async _orderFllow() {
				// let result = await orderFllow({
				// 	token: uni.getStorageSync('token'),
				// 	iid: this.id
				// })
				// if (result.code == 200) {
				// 	this.info = result.data;
				// }
			}
		},
		components: {
			empty,
			ali
		}
	}
</script>

<style lang="scss" scoped>
.logistics {
	margin: 24upx;
	padding: 24upx;
	border-radius: 10upx;
}
</style>
