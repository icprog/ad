<template>
	<view class="item" :class="{'border-bottom': !wrap}">
		<view class="leftText" v-if="leftText">{{leftText}}</view>
		<input class="flex-1" :type="type" 
					placeholder-style="color: #dddddd; font-weight: normal; font-size: 28upx" 
					v-if="flag"
					:placeholder="placeholder"
					:value="newVal"
					:class="{moneyClass: wrap}"
					@input="input"
					@tap="onInputClick"
					:disabled="disabled"
		>
		<input class="flex-1" type="text" 
					placeholder-style="color: #dddddd" 
					v-else
					:placeholder="placeholder"
					:value="newVal"
					@input="input"
		>
		<view class="iconfont" v-if="flag && type == 'password'" @tap="onInputIconClickEvent(1)">&#xe63b;</view> <!-- 密文-->
		<view class="iconfont" style="color: #f13130" v-if="!flag && type == 'password'" @tap="onInputIconClickEvent(1)">&#xe63c;</view> <!-- 明文-->
		<view class="iconfont" v-if="newVal" @tap="onInputIconClickEvent(2)">&#xe7be;</view> <!-- 清除-->
		<block v-if="sms">
			<button class="btn" v-if="count == 0" @tap="onGetSmsEvent">获取验证码</button>
			<button class="btn" disabled v-else>重新获取({{count}})</button>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			placeholder: String,
			type: {type: String, default: 'text'},
			sms: {type: Boolean, default: false},
			count: Number,
			leftText: String,
			wrap: {type: Boolean, default: false},
			disabled: Boolean,
			value: {type: [Number, String]}
		},
		name: '',
		data () {
			return {
				flag: true,
				newVal: ''
			}
		},
		watch: {
			value () {
				this.newVal = this.value
			}
		},
		computed: {
			paddingBottom () {
				return uni.upx2px(18) + 'px'
			}
		},
		onLoad () {

		},
		methods: {
			input (e) {
				this.newVal = e.target.value;
				this.$emit('input', e.target.value)
			},
			onInputIconClickEvent (type) {
				if(type == 1) {
					this.flag = !this.flag;
				}
				if(type == 2) {
					this.newVal = '';
					this.$emit('input', '')
				}
			},
			onInputClick () {
				this.$emit('onInputClick')
			},
			onGetSmsEvent () {
				this.$emit('onGetSmsEvent')
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/common/css/avariables.scss';
.leftText {
	width: 25%;
}
.moneyClass {
	color: $main-color;
	font-size: 44upx;
	font-weight: bold;
}

.item {
	display: flex;
	align-items: center;
	padding: 18upx 40upx;/*  */
	margin-bottom: 40upx;/*  */
	border: 1upx solid #f3e4e4 !important;
	border-radius: 50upx;/*  */
	.iconfont {
		color: #dddddd;
		font-size: 40upx;
	}
	button {
		height: 40upx;
		line-height: 40upx;
		border-left: 1upx solid #999;
		border-radius: 0;
		font-size: 26upx;
		color: #999;
		background: #fff;
	}
}
</style>
