import { pathToBase64, base64ToPath } from '@/common/js/base64.js'
import { BASE_URL } from '@/api'

export const verifyPhone = (phone) => {
	let phoneReg = /^1[3456789]\d{9}$/g;
	let flag = false;
	if(phone == '') {
		uni.showToast({
			title: '请输入手机号',
			icon: 'none'
		})
	}else if(!phoneReg.test(phone)) {
		uni.showToast({
			title: '手机号格式错误',
			icon: 'none'
		})
	}else {
		flag = true;
	}
	return flag;
}

export const dealCountDown = (that) => {
	that.count = 60;
	let timer = setInterval(() => {
		that.count --;
		if(that.count <= 0) {
			clearInterval(timer)
		}
	}, 1000)
}

export const uploadImg = (baseList, imgList) => {
	uni.chooseImage({
		count: 1,
		success: (chooseImageRes) => {
			const tempFilePaths = chooseImageRes.tempFilePaths[0];
			pathToBase64(tempFilePaths).then(base64 => {
					baseList.push(base64)
				})
				imgList.push(tempFilePaths)	
		}
	});
}

export const delUploadImg = (baseList, imgList, index) => {
	imgList.splice(index, 1);
	baseList.splice(index, 1);
}

export const dealLogin = (id) => {
	let token = uni.getStorageSync('token');
	if(!token) {
		let pages = getCurrentPages();
		let page = pages[pages.length - 1];
		console.log(page.route)
		uni.setStorage({
			key: 'pageRoute',
			data: '/' + page.route + '?id=' + id
		})
		uni.navigateTo({
			url: '/pages/login/login'
		})
		return false;
	}
	return true
}

export const previewImg = (urls, index) => {
	let arr = [];
	urls.forEach((val, i) => {
		arr.push(BASE_URL + val)
	})
	uni.previewImage({
		current: arr[index],
		urls: arr
	})
}

export const hideTabbarButton = () => {
	/* 隐藏凸起图标 */
	// #ifdef APP-PLUS
	var icon = plus.nativeObj.View.getViewById("icon");
	setTimeout(function() {
		icon.hide();
	}, 300);
	// #endif
}