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
	[HOME_CAROUSEL] (state, params) {
		state.home_carousel = params;
	},
	[SEARCH_GOODS] (state, params) {
		state.search_goods = params || [];
	},
	[SEARCH_HISTORY] (state, params) {
		state.search_history = params.history || [];
		state.search_hot = params.hot || [];
	},
	[ALL_DEMAND_TYPE] (state, params) {
		state.all_demand_type = params || [];
	},
	[MESSAGE_LIST] (state, params) {
		if(params == 401) {
			state.message_list = [];
		}else {
			state.message_list = params
		}
	},
	[NOTICE_LIST] (state, params) {
		state.notice_list = params || [];
	},
	[MERCHANT_LIST] (state, params) {
		state.merchant_list = params || [];
	},
	[GOODS_LIST] (state, params) {
		if(params.page.history == 1) {
			state.history_Goods_list = params.data;
			return;
		}
		if(params.page.order == 4) {
			state.hot_Goods_list = params.data;
		}else {
			if(params.page.page == 1) {
				state.goods_list = params.data;
			}else {
				state.goods_list = state.goods_list.concat(params.data);
			}
		}
		
	},
	[DEMAND_LIST] (state, params) {
		if(params.page == 1) {
			state.demand_list = params.data;
		}else {
			state.demand_list = state.demand_list.concat(params.data);
		}
	},
	[GOODS_DETAIL] (state, params) {
		state.goods_detail = params || {};
	},
	[MERCHANT_DETAIL] (state, params) {
		state.merchant_detail = params || {};
	},
	[USER_INFO] (state, params) {
		state.user_info = params || {};
	},
	[DEMAND_DETAIL] (state, params) {
		let str = params.images;
		let arr = [];
		if(str.includes(',')) {
			str.split(',').forEach((val, index) => {
				arr.push(val)
			})
		}else {
			arr.push(str)
		}
		state.demandImg = arr;
		state.demand_detail = params || {};
	},
	[GOODS_COMMENT] (state, params) {
		state.goods_comment = params || [];
	},
	[ATTENTION_LIST] (state, params) {
		state.attention_list = params || [];
	},
	[FANS_LIST] (state, params) {
		state.fans_list = params || [];
	},
	saveServiceTags (state, params) {
		state.service_tags = params || [];
	},
	[FEEDBACK_LIST] (state, params) {
		state.feedback_list = params || [];
	},
	[ADDRESS_LIST] (state, params) {
		let obj;
		if(params.length > 0) {
			obj = params[0]
			params.forEach((val, index) => {
				if(val.default == 1) {
					obj = val
				}
			})
		}
		state.default_address = obj || {};
		state.address_list = params || [];
	},
	[MERCHANT_GOODS] (state, params) {
		state.merchant_goods = params || [];
	},
	[ROUND_LIST] (state, params) {
		if(params.page == 1) {
			state.round_list = params.data || [];
		}else {
			state.round_list = state.round_list.concat(params.data);
		}
	},
	[ATTENTION_ROUND_LIST] (state, params) {
		state.attention_round_list = params || [];
	},	
	[MALL_CAROUSEL] (state, params) {
		state.mall_carousel = params || [];
	},
	SORT_TYPE (state, params) {
		state.sort_type = params || {};
	},
	[ACTIVE_DETAIL] (state, params) {
		state.active_detail = params || [];
	},
	[TRADE_RECORD] (state, params) {
		state.trade_record = params || [];
	},
	[MY_DEMAND] (state, params) {
		state.my_demand = params || [];
	},
	saveDefaultAddress (state, params) {
		state.default_address = params;
	},
	[ORDER_LIST] (state, params) {
		if(params.page == 1) {
			state.order_list = params.data;
		}else {
			state.order_list = state.order_list.concat(params.data);
		}	
	},
	[ORDER_LIST1] (state, params) {
		if(params.page == 1) {
			state.order_list1 = params.data;
		}else {
			state.order_list1 = state.order_list1.concat(params.data);
		}	
	},
	recive_message (state, params) {
		state.recive_message = params;
	},
	[ROUND_MESSAGE] (state, params) {
		state.round_message = params || [];
	},
	[CHAT_LIST] (state, params) {
		let num = 0;
		params.forEach((val, index) => {
			num += val.unread_num;
		})
		state.chat_list = params || [];
		state.chat_num = num;
	},
	dealPublishPopup (state) {
		state.showPublishPopup = !state.showPublishPopup;
	},
}