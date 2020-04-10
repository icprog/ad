<template>
	<view class="service-tag bg-white">
		<view class="service-itme" v-for="(item, index) of all_demand_type" :key="index" v-if="item.subclass.length > 0">
			<view class="service-title font-bold">{{item.name}}</view>
			<view class="tag-list d-flex flex-wrap">
				<view class="tag-item text-small ellipsis" 
					:class="{active: tag.checked}"
					v-for="(tag, ind) of item.subclass" :key="ind"
					@tap="onChoseServiceTag(tag)"
				>{{tag.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapActions, mapMutations } from 'vuex'
	export default {
		name: '',
		data () {
			return {

			}
		},
		onLoad () {
			this._reqGetAllDemandType()
		},
		onNavigationBarButtonTap () {
			let arr = [];
			this.all_demand_type.forEach((val, index) => {
				val.subclass.forEach((v, i) => {
					if(v.checked) {
						arr.push({name: v.name, id: v.id});
					}
				})
			})
			if(arr.length <= 0) {
				uni.showToast({
					title: '至少选择一个服务标签',
					icon: 'none'
				})
				return;
			}
			this.saveServiceTags(arr);
			uni.navigateBack()
		},
		computed: {
			...mapState(['all_demand_type', 'service_tags'])
		},
		methods: {
			...mapActions(['reqGetAllDemandType']),
			...mapMutations(['saveServiceTags']),
			_reqGetAllDemandType () {
				this.reqGetAllDemandType ({})
			},
			onChoseServiceTag (item) {
				if(item.checked === undefined) {
					this.$set(item, 'checked', true)
				}else {
					this.$set(item, 'checked', !item.checked)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';
.service-tag {
	min-height: 100%;
	padding: 30upx;
	text-align: center;
	.service-title {
		padding: 20upx 0 30upx 0;
		font-size: 32upx;
	}
	.tag-list {
		.tag-item {
			width: 30%;
			margin-bottom: 20upx;
			line-height: 80upx;
			border-radius: 50upx;
			background: #f6f6f6;
			&:nth-of-type(3n-1) {
				margin-right: 5%;
				margin-left: 5%;
			}
			&.active {
				color: #fff;
				background: $main-color;
			}
		}
	}
}
</style>
