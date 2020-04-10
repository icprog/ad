<template>
	<view class="address-edit bg-white">
		<input-cell leftText="联系人" placeholder="输入联系人姓名" v-model="name"></input-cell>
		<input-cell leftText="手机号码" placeholder="输入联系人手机" v-model="phone"></input-cell>
		<input-cell leftText="邮政编码" placeholder="输入邮政编码" v-model="postcode"></input-cell>
		<input-cell leftText="收货地区" placeholder="选择收货地区" disabled v-model="address" :value="address" @onInputClick="onInputClick"></input-cell>
		<input-cell leftText="详细地址" placeholder="输入详细地址"  v-model="detail"></input-cell>
		<view class="d-flex align-items-center justify-content-between mg-top-20">
			<text>设为默认地址</text>
			<image src="/static/images/switch-active.png" v-if="isDefault == 1" @tap="onSetDefault"></image>
			<image src="/static/images/switch-normal.png" v-else @tap="onSetDefault"></image>
		</view>
		<button class="btn btn-confirm btn-fixed" :style="{top: fixTop}" @tap="onSaveAddressClick">保存</button>
		<!-- 城市 -->
		<mpvue-city-picker themeColor="#f13130" ref="mpvueCityPicker" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import inputCell from '@/components/input-cell'
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	import cityData from '@/common/js/city.data.js';
	import { addAddress, delAddress, editAddress, getAddressDetail } from '@/api'
	import { mapState, mapActions } from 'vuex'
	export default {
		name: '',
		data () {
			return {
				isDefault: 0,
				id: '', // 地址id
				name: '',
				phone: '',
				postcode: '',
				address: '',
				province: '',
				city: '',
				district: '',
				detail: '',
				token: ''
			}
		},
		onLoad (options) {
			this.token = uni.getStorageSync('token')
			if(options.id) {
				this.id = options.id
				this._echoContent()
				this._setNavigationBarButton()
			}
		},
		onNavigationBarButtonTap () {
			if(this.id) {
				this._delAddress()
			}
		},
		computed: {
			fixTop () {
				return (uni.getSystemInfoSync().windowHeight - 70) + 'px'
			}
		},
		methods: {
			...mapActions(['reqGetAddressList']),
			async _echoContent () {
				let result = await getAddressDetail ({
					address_id: this.id,
					token: this.token
				})
				this.name = result.data.name;
				this.phone = result.data.phone;
				this.postcode = result.data.zipcode;
				this.address = result.data.province + '-' + result.data.city + '-' + result.data.district;
				this.province = result.data.province;
				this.city = result.data.city;
				this.district = result.data.district;
				this.detail = result.data.detailed;
				this.isDefault = result.data.default;
			},
			async _delAddress () {
				let self = this;
				uni.showModal({
					content: '确定要删除吗?',
					success: async function (res) {
						if(res.confirm) {
							let result = await delAddress ({
								token: self.token,
								aid: self.id
							})
							if(result.code == 2000) {
								uni.showToast({
									title: '删除成功'
								})
								setTimeout(() => {
									uni.navigateBack();
									self.reqGetAddressList({
										token: self.token
									})
								}, 1500)
							}
						}
					}
				})
			},
			async onSaveAddressClick () {
				let self = this;
				if(this.name == '') {
					uni.showToast({
						title: '请输入联系人姓名',
						icon: 'none'
					})
					return
				}
				if(this.phone == '') {
					uni.showToast({
						title: '请输入联系人手机',
						icon: 'none'
					})
					return
				}
				if(this.postcode == '') {
					uni.showToast({
						title: '请输入邮政编码',
						icon: 'none'
					})
					return
				}
				if(this.address == '') {
					uni.showToast({
						title: '请输入收货地址',
						icon: 'none'
					})
					return
				}
				let result;
				let obj = {
					token: this.token,
					aid: this.id || '',
					province: this.province,
					city: this.city,
					district: this.district,
					detailed: this.detail,
					name: this.name,
					zipcode: this.postcode,
					phone: this.phone,
					default: this.isDefault
				}
				if(this.id) {
					result = await editAddress (obj)
				}else {
					result = await addAddress (obj)
				}
				if(result.code == 2000) {
					uni.showToast({
						title: '保存成功'
					})
					setTimeout(() => {
						self.reqGetAddressList ({
							token: self.token
						})
						uni.navigateBack();
					}, 1500)
				}
			},
			onConfirm (e) {  // 确定选择
				console.log(e)
				this.address = e.label;
				this.province = e.label.split('-')[0]
				this.city = e.label.split('-')[1]
				this.district = e.label.split('-')[2]
			},
			onSetDefault () {
				this.isDefault = this.isDefault == 0 ? 1 : 0;
			},
			onInputClick () {  // 选择省市区
				this.$refs.mpvueCityPicker.show()
			},
			_setNavigationBarButton () {
				let self = this;
				let pages = getCurrentPages();
				let page = pages[pages.length - 1];
				// #ifdef APP-PLUS
				let currentWebview = page.$getAppWebview();
				let titleObj = currentWebview.getStyle().titleNView;
				console.log(JSON.stringify(titleObj))
				if (!titleObj.buttons) {
					return;
				}
				titleObj.buttons[0].text = '删 除';
				titleObj.buttons[0].fontSize = '14px';
				currentWebview.setStyle({
					titleNView: titleObj
				});
				// #endif
			}
		},
		components: {
			inputCell,
			mpvueCityPicker
		}
	}
</script>

<style lang="scss" scoped>
.address-edit {
	min-height: 100%;
	padding: 40upx;
	image {
		width: 90upx;
		height: 45upx;
	}
}
 .address-edit /deep/ .uni-switch-input.uni-switch-input-checked {
	background-color: red !important;
	border-color: red !important;
} 
</style>
