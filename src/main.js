import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import vueg from 'vueg'
import 'vueg/css/transition-min.css'

// axios.defaults.timeout = 5000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://www.xxxx.xxx/api';
// axios.defaults.withCredentials= true;

Vue.config.productionTip = false;

// 用 axios 进行 Ajax 请求
Vue.use(VueAxios, axios)

// Vuex 进行状态管理
Vue.use(Vuex)

// vueg 转场动画
const options = {
	forwardAnim: 'fadeInRight',
	duration:0.3
}
Vue.use(vueg, router, options)

// fastclick,解决移动端300ms延迟
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body)
	}, false)
}

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})
