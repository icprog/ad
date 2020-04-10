import Vue from 'vue'
import App from './App'
import store from './store'
import '@/common/iconfont/iconfont.css'
import '@/common/css/common.scss'
import { hideTabbarButton } from '@/common/js/common'


Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$hideTabbarButton= hideTabbarButton;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
