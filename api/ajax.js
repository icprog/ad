export default function ajax(url, params={}, method='POST', header={'content-type': 'application/x-www-form-urlencoded'}) {
	uni.showLoading({
		title: '载入中...'
	})
	return uni.request({
		url: url,
		data: params,
		method: method,
		header: header
	}).then(res => {
		uni.hideLoading()
		let [err, data] = res;
		if(data.data.code != 200 && data.data.code != 2000 && data.data.data !== 200 && data.data.code != 211 && data.data.code != 201 && data.data.msg != '登录成功') {
			uni.showToast({
				title: data.data.msg,
				icon: 'none'
			})
		}
		if(data.data.code == 401 || data.data.data == 401) {
			let pages = getCurrentPages();
			let page = pages[pages.length - 1];
			uni.setStorage({
				key: 'pageRoute',
				data: '/' + page.route
			})
			uni.navigateTo({
				url: '/pages/login/login'
			})
			return;
		}
		return data.data
	})
}