import {
	getSms,
	getHomeCarousel,
	searchGoods,
	searchHistory,
	getAllDemandType,
	getMessageList,
	getNoticeList,
	getMerchantList,
	getGoodsList,
	getDemandList,
	getGoodsDetail,
	getMerchantDetail,
	getUserInfo,
	getDemandDetail,
	getGoodsComment,
	getMyAttention,
	getMyFans,
	getFeedbackList,
	getAddressList,
	getMerchantGoodds,
	getRoundList,
	getMyAttentionRoundList,
	getMallCarousel,
	getActiveDetail,
	tradeRecord,
	getMyDemand,
	getOrderList,
	getOrderList1,
	getRoundMessage,
	getChatList
} from '@/api'

import {
	HOME_CAROUSEL,
	SEARCH_GOODS,
	SEARCH_HISTORY,
	ALL_DEMAND_TYPE,
	MESSAGE_LIST,
	NOTICE_LIST,
	MERCHANT_LIST,
	GOODS_LIST,
	DEMAND_LIST,
	GOODS_DETAIL,
	MERCHANT_DETAIL,
	USER_INFO,
	DEMAND_DETAIL,
	GOODS_COMMENT,
	ATTENTION_LIST,
	FANS_LIST,
	FEEDBACK_LIST,
	ADDRESS_LIST,
	MERCHANT_GOODS,
	ROUND_LIST,
	ATTENTION_ROUND_LIST,
	MALL_CAROUSEL,
	ACTIVE_DETAIL,
	TRADE_RECORD,
	MY_DEMAND,
	ORDER_LIST,
	ORDER_LIST1,
	ROUND_MESSAGE,
	CHAT_LIST
} from './mutation-types'

export default {
	async reqGetSms ({commit}, params) {
		let result = await getSms ({mobile: params.mobile});
		if(result.code == 1) {
			uni.showToast({
				title: '验证码发送成功'
			})
			params.callBack(params.self)
		}else {
			uni.showToast({
				title: result.msg,
				icon: 'none'
			})
		}
	},
	async reqGetHomeCarousel ({commit}, params) {
		let result = await getHomeCarousel (params);
		commit(HOME_CAROUSEL, result.data || [])
	},
	async reqSearchGoods ({commit}, params) {
		uni.showLoading({
			title: '加载中...',
		})
		let result = await searchGoods (params);
		uni.hideLoading()
		commit(SEARCH_GOODS, result.data || [])
	},
	async reqSearchHistory ({commit}, params) {
		let result = await searchHistory (params);
		commit(SEARCH_HISTORY, result.data || [])
	},
	async reqGetAllDemandType ({commit}, params) {
		let result = await getAllDemandType (params);
		commit(ALL_DEMAND_TYPE, result.data || {})
	},
	async reqGetMessageList ({commit}, params) {
		let result = await getMessageList (params);
		commit(MESSAGE_LIST, result.data || [])
	},
	async reqGetNoticeList ({commit}, params) {
		let result = await getNoticeList (params);
		console.log(result)
		commit(NOTICE_LIST, result.data || [])
	},
	async reqGetMerchantList ({commit}, params) {
		let result = await getMerchantList (params);
		console.log(result)
		commit(MERCHANT_LIST, result.data || [])
	},
	async reqGetGoodsList ({commit}, params) {
		if(params.callBack2) {
			params.callBack2('loading')
		}
		let result = await getGoodsList ({
			page: params.page,
			sort: params.sort,
			order: params.order,
		});
		if(result.data.length >= 10) {
			if(params.callBack) {
				params.callBack()
				params.callBack2('more')
			}
		}else {
			if(params.callBack2) {
				params.callBack2('noMore')
			}
		}
		commit(GOODS_LIST, {data: result.data || [], page: params})
	},
	async reqGetDemandList ({commit}, params) {
		let result = await getDemandList ({
			page: params.page,
			sort: params.sort,
			order: params.order
		});
		if(params.callBack) {
			params.callBack(result.data || [])
		}
		commit(DEMAND_LIST, {data: result.data || [], page: params.page})
	},
	async reqGetGoodsDetail ({commit}, params) {
		let result = await getGoodsDetail (params);
		commit(GOODS_DETAIL, result.data || {})
	},
	async reqGetMerchantDetail ({commit}, params) {
		let result = await getMerchantDetail (params);
		commit(MERCHANT_DETAIL, result.data || {})
	},
	async reqGetUserInfo ({commit}, params) {
		let result = await getUserInfo (params);
		commit(USER_INFO, result.data || {})
	},
	async reqGetDemandDetail ({commit}, params) {
		let result = await getDemandDetail (params);
		commit(DEMAND_DETAIL, result.data || {})
	},
	async reqGetGoodsComment ({commit}, params) {
		let result = await getGoodsComment (params);
		commit(GOODS_COMMENT, result.data || [])
	},
	async reqGetMyAttention ({commit}, params) {
		let result = await getMyAttention (params);
		commit(ATTENTION_LIST, result.data || [])
	},
	async reqGetMyFans ({commit}, params) {
		let result = await getMyFans (params);
		commit(FANS_LIST, result.data || [])
	},
	async reqGetFeedbackList ({commit}, params) {
		let result = await getFeedbackList (params);
		commit(FEEDBACK_LIST, result.data || [])
	},
	async reqGetAddressList ({commit}, params) {
		let result = await getAddressList (params);
		commit(ADDRESS_LIST, result.data || [])
	},
	async reqGetMerchantGoodds ({commit}, params) {
		let result = await getMerchantGoodds (params);
		commit(MERCHANT_GOODS, result.data || [])
	},
	async reqGetRoundList ({commit}, params) {
		let result = await getRoundList ({
			page: params.page,
			identity: params.identity,
			type: params.type,
			token: params.token,
		});
		if(result.data.length >= 10) {
			params.callBack1()
			params.callBack2('more');
		}else {
			params.callBack2('noMore');
		}
		console.log(params.page)
		commit(ROUND_LIST, {data: result.data, page: params.page})
	},
	async reqGetMyAttentionRoundList ({commit}, params) {
		let result = await getMyAttentionRoundList (params);
		commit(ATTENTION_ROUND_LIST, result.data || [])
	},
	async reqGetMallCarousel ({commit}, params) {
		let result = await getMallCarousel (params);
		commit(MALL_CAROUSEL, result.code || [])
	},
	async reqGetActiveDetail ({commit}, params) {
		let result = await getActiveDetail (params);
		commit(ACTIVE_DETAIL, result.data || {})
	},
	async reqTradeRecord ({commit}, params) {
		let result = await tradeRecord (params);
		commit(TRADE_RECORD, result.data || [])
	},
	async reqGetMyDemand ({commit}, params) {
		let result = await getMyDemand (params);
		commit(MY_DEMAND, result.data || [])
	},
	async reqGetOrderList ({commit}, params) {
		let result = await getOrderList ({
			token: params.token,
			sort: params.sort,
			page: params.page
		});
		if(result.data.length >= 10) {
			params.callBack1();
			params.callBack2('more')
		}else {
			params.callBack2('noMore')
		}
		commit(ORDER_LIST, {data: result.data, page: params.page})
	},
	async reqGetOrderList1 ({commit}, params) {
		let result = await getOrderList1 ({
			token: params.token,
			sort: params.sort,
			page: params.page
		});
		if(result.data.length >= 10) {
			params.callBack1();
			params.callBack2('more')
		}else {
			params.callBack2('noMore')
		}
		commit(ORDER_LIST1, {data: result.data, page: params.page})
	},
	async reqGetRoundMessage ({commit}, params) {
		let result = await getRoundMessage (params);
		commit(ROUND_MESSAGE, result.data || {})
	},
	async reqGetChatList ({commit}, params) {
		let result = await getChatList (params);
		commit(CHAT_LIST, result.data || [])
	},
}