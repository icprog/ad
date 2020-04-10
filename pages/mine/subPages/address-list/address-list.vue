<template>
	<view class="address-list bg-white">
		<address-item @onEditClick="onEditClick" 
									@onGoToAddressList="onSelectAddress"
									:address_list="address_list"
									v-for="(item, index) of address_list" :key="index"
									:item="item"
		></address-item>
		<empty v-if="address_list.length <= 0"></empty>
		<button class="btn btn-confirm btn-fixed" :style="{top: fixTop}" @tap="onAddAddressList">+ 添加新地址</button>
	</view>
</template>

<script>
	import addressItem from './children/address-item'
	import empty from '@/components/empty'
	import {  mapState, mapActions, mapMutations } from 'vuex'
	export default {
		name: '',
		data () {
			return {
				type: ''
			}
		},
		onLoad (options) {
			this.type = options.type
			this._reqGetAddressList()
		},
		onShow () {
			this.$hideTabbarButton()
		},
		computed: {
			...mapState(['address_list']),
			fixTop () {
				return (uni.getSystemInfoSync().windowHeight - 70) + 'px'
			}
		},
		methods: {
			...mapActions(['reqGetAddressList']),
			...mapMutations(['saveDefaultAddress']),
			onSelectAddress (item) {
				if(this.type == 'select') {
					
					this.saveDefaultAddress(item);
					uni.navigateBack()
				}
			},
			_reqGetAddressList () {
				this.reqGetAddressList({
					token: uni.getStorageSync('token')
				})
			},
			onEditClick (id) {
				uni.navigateTo({
					url: '/pages/mine/subPages/address-edit/address-edit?id=' + id
				})
			},
			onAddAddressList () {
				console.log(1)
				uni.navigateTo({
					url: '/pages/mine/subPages/address-edit/address-edit'
				})
			}
		},
		components: {
			addressItem,
			empty
		}
	}
</script>

<style lang="scss" scoped>
.address-list {
	min-height: 100%;
	padding: 0 40upx 150upx 40upx;
}
</style>
