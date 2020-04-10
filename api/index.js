import ajax from './ajax'

const BASE_URL = 'http://47.92.196.173:19966'   // http://47.92.196.173:19966
const SOCKET_URL = 'ws://47.92.196.173:18080'
export {
	BASE_URL,
	SOCKET_URL
}

//获取验证码
export const getSms = (params) => ajax(BASE_URL + '/sms', params)
//注册
export const register = (params) => ajax(BASE_URL + '/user/register', params)
//手机验证码登录
export const smsLogin = (params) => ajax(BASE_URL + '/user/lbp', params)
//账号密码登录
export const login = (params) => ajax(BASE_URL + '/user/login', params)
//修改登录密码
export const changePwd = (params) => ajax(BASE_URL + '/api/user/resetpwd', params)
//获取首页轮播图
export const getHomeCarousel = (params) => ajax(BASE_URL + '/cm', params)
//搜索商品
export const searchGoods = (params) => ajax(BASE_URL + '/api/Search/search', params)
//获取搜索记录、热门搜索
export const searchHistory = (params) => ajax(BASE_URL + '/api/search/history', params)
//删除搜索历史
export const delSearchHistory = (params) => ajax(BASE_URL + '/api/Search/del', params)
//获取消息列表
export const getMessageList = (params) => ajax(BASE_URL + '/api/message/getMessageList', params)

//获取可发布的需求
export const getAllDemandType = (params) => ajax(BASE_URL + '/demand/sort', params)
//发布需求
export const postDemand = (params) => ajax(BASE_URL + '/demand/add', params)
//获取公告列表
export const getNoticeList = (params) => ajax(BASE_URL + '/pl', params)
//标记公告为已读
export const signNotice = (params) => ajax(BASE_URL + '/api/Carousel_Map/biaoji', params)
//获取同城优商
export const getMerchantList = (params) => ajax(BASE_URL + '/api/commodity/nearbyMerchant', params)
//获取附近商品
export const getGoodsList = (params) => ajax(BASE_URL + '/api/commodity/nearby', params)
//获取附近需求
export const getDemandList = (params) => ajax(BASE_URL + '/api/demand/nearbyDemand', params)

//获取商品详情
export const getGoodsDetail = (params) => ajax(BASE_URL + '/api/commodity/details', params)
//获取商品评价
export const getGoodsComment = (params) => ajax(BASE_URL + '/api/ccm/ccmList', params)
//获取商家详情
export const getMerchantDetail = (params) => ajax(BASE_URL + '/api/commodity/merchantDetails', params)
//获取需求详情
export const getDemandDetail = (params) => ajax(BASE_URL + '/api/demand/details', params)
//添加关注
export const addAttention = (params) => ajax(BASE_URL + '/moving/att', params)
//取消关注
export const cancelAttention = (params) => ajax(BASE_URL + '/moving/unAtt', params)
//删除动态
export const delActive = (params) => ajax(BASE_URL + '/moving/rm', params)
//收藏需求
export const collectDemand = (params) => ajax(BASE_URL + '/api/collect/collect', params)
//取消收藏
export const cancelCollect = (params) => ajax(BASE_URL + '/api/collect/cancel', params)
//参与报价
export const joinOffer = (params) => ajax(BASE_URL + '/api/demand/driving', params)
//取消报价
export const cancelOffer = (params) => ajax(BASE_URL + '/api/demand/cancel', params)


//获取用户信息
export const getUserInfo = (params) => ajax(BASE_URL + '/api/user/getUserInfo', params)
//修改用户信息
export const changeUserInfo = (params) => ajax(BASE_URL + '/api/user/profile', params)
//修改手机号
export const changePhone = (params) => ajax(BASE_URL + '/user/cp', params)
//修改密码
export const changepwd = (params) => ajax(BASE_URL + '/api/user/changePassword', params)
//退出登录
export const logout = (params) => ajax(BASE_URL + '/user/logout', params)
//获取我的关注
export const getMyAttention = (params) => ajax(BASE_URL + '/moving/myAtt', params)
//获取我的粉丝
export const getMyFans = (params) => ajax(BASE_URL + '/moving/myfan', params)
//获取客服手机号
export const getServicePhone = (params) => ajax(BASE_URL + '/api/opinion/getPhone', params)
//服务商认证
export const serviceApprove = (params) => ajax(BASE_URL + '/api/check/facilitator', params)
//设计师认证
export const designerApprove = (params) => ajax(BASE_URL + '/api/check/icad', params)

//获取意见反馈列表
export const getFeedbackList = (params) => ajax(BASE_URL + '/api/opinion/oList', params)
//意见反馈
export const feedback = (params) => ajax(BASE_URL + '/api/opinion/commit', params)
//获取收货地址列表
export const getAddressList = (params) => ajax(BASE_URL + '/api/address/addressList', params)
//添加收货地址
export const addAddress = (params) => ajax(BASE_URL + '/api/address/add', params)
//删除收货地址
export const delAddress = (params) => ajax(BASE_URL + '/api/address/del', params)
//修改收货地址
export const editAddress = (params) => ajax(BASE_URL + '/api/address/edit', params)
//获取收货地址详情
export const getAddressDetail = (params) => ajax(BASE_URL + '/api/address/get', params)
//根据商家id获取商品列表
export const getMerchantGoodds = (params) => ajax(BASE_URL + '/api/commodity/cList', params)

//获取行业圈列表
export const getRoundList = (params) => ajax(BASE_URL + '/api/Moving/getNearbyMovingList', params)
//获取我关注的行业圈
export const getMyAttentionRoundList = (params) => ajax(BASE_URL + '/moving/attMoving', params)
//发布动态
export const publishActive = (params) => ajax(BASE_URL + '/moving/release', params)
//商城轮播图
export const getMallCarousel = (params) => ajax(BASE_URL + '/api/carousel_map/sclbt', params)
//发布商品
export const publishGoods = (params) => ajax(BASE_URL + '/api/Commodity/publish', params)
//编辑商品
export const editGoods = (params) => ajax(BASE_URL + '/api/Commodity/changeCommodity', params)
//点赞/取消
export const giveLike = (params) => ajax(BASE_URL + '/api/moving/up', params)
//评论动态
export const commentActive = (params) => ajax(BASE_URL + '/moving/comment', params)
//转发动态
export const transpondActive = (params) => ajax(BASE_URL + '/moving/forward', params)
//获取动态详情
export const getActiveDetail = (params) => ajax(BASE_URL + '/api/moving/dongtaixiangqing', params)
//回复评论
export const replyComment = (params) => ajax(BASE_URL + '/api/moving/replyCom', params)
//交易记录（充值提现）
export const tradeRecord = (params) => ajax(BASE_URL + '/api/Wallet/recoed', params)
//获取我发布的需求
export const getMyDemand = (params) => ajax(BASE_URL + '/api/demand/mydemand', params)
//邀请报价
export const inviteOffer = (params) => ajax(BASE_URL + '/api/demand/invite', params)
//删除需求
export const delDemand = (params) => ajax(BASE_URL + '/api/demand/del', params)
//删除商品
export const delGoods = (params) => ajax(BASE_URL + '/api/commodity/remove', params)
//获取经纬度
export const getLocation = (params) => ajax(BASE_URL + '/api/opinion/saveLatiAndLongi', params)
//购买/下单
export const buyGoods = (params) => ajax(BASE_URL + '/api/commodity/determine', params)
//获取订单
export const getOrderList = (params) => ajax(BASE_URL + '/api/Indent/indentList', params)
//删除订单
export const delOrder = (params) => ajax(BASE_URL + '/api/indent/del', params)
//催发货
export const urgeDelivery = (params) => ajax(BASE_URL + '/api/indent/prompt', params)
//确认收货
export const confirmDelivery = (params) => ajax(BASE_URL + '/api/demand/affirm', params)
//订单跟踪
export const orderFllow = (params) => ajax(BASE_URL + '/api/demand/kd', params)
//评价商品
export const commentGoods = (params) => ajax(BASE_URL + '/api/ccm/add', params)
//评价商品
export const applyRefund = (params) => ajax(BASE_URL + '/api/indent/refund', params)

//获取物流运营商
export const getLogisticsList = (params) => ajax(BASE_URL + '/api/demand/kdyss', params)
//获取服务商订单
export const getOrderList1 = (params) => ajax(BASE_URL + '/api/Indent/indentList1', params)
//发货
export const deliveryGoods = (params) => ajax(BASE_URL + '/api/demand/consignment', params)
//确认退款
export const confirmRefund = (params) => ajax(BASE_URL + '/api/indent/agree', params)
//拒绝退款
export const refuseRefund = (params) => ajax(BASE_URL + '/api/indent/refuse', params)
//获取单个需求的报价列表
export const getOfferList = (params) => ajax(BASE_URL + '/api/demand/oList', params)
//获取聊天记录
export const getChatRecord = (params) => ajax(BASE_URL + '/api/Chatline/chatRecord', params)
//获取用户名和头像（聊天用）
export const getChatAvatar = (params) => ajax(BASE_URL + '/api/opinion/getHeadAndName', params)
//获取聊天列表
export const getChatList = (params) => ajax(BASE_URL + '/api/chatline/chatList', params)
//确认下单
export const confirmOffer = (params) => ajax(BASE_URL + '/api/demand/determine', params)
//获取我的收藏
export const getMyCollect = (params) => ajax(BASE_URL + '/api/collect/clist', params)
//标记消息为已读
export const readMessage = (params) => ajax(BASE_URL + '/api/Message/markAsHaveread', params)
//删除消息
export const delMessage = (params) => ajax(BASE_URL + '/api/message/del', params)
//获取公告详情
export const noticeDetail = (params) => ajax(BASE_URL + '/api/Carousel_map/pxq', params)
//获取朋友圈消息
export const getRoundMessage = (params) => ajax(BASE_URL + '/api/moving/getAucUnreadNum', params)
//获取朋友圈回复我的消息
export const getRoundReply = (params) => ajax(BASE_URL + '/api/moving/commentMe', params)
//获取朋友圈赞我的消息
export const getRoundUp = (params) => ajax(BASE_URL + '/api/moving/upMe', params)
//获取朋友圈关注我的消息
export const getRoundAttention = (params) => ajax(BASE_URL + '/api/moving/attme', params)

//第三方登录
export const weixinLogin = (params) => ajax(BASE_URL + '/api/third/thirdLogin', params)
//充值
export const recharge = (params) => ajax(BASE_URL + '/api/Wallet/pay', params)
//检查更新
export const updata = (params) => ajax(BASE_URL + '/api/third/isNewVersions', params)
//上传图片
export const uploadImage = (params) => ajax(BASE_URL + '/api/opinion/upload', params)