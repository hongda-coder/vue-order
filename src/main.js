// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 自定义指令 可视高度
Vue.directive('height', {
  // 当被绑定的元素插入到 DOM 中时……
  bind: function (el) { //被绑定
    el.style = `height:${document.documentElement.clientHeight}px;`
  },
})
// 引入全局样式
import '@/assets/css/index.scss'
// 设置 js中可以访问 $cdn
import {
  $cdn
} from '@/config'
Vue.prototype.$cdn = $cdn

// 全局引入按需引入UI库 vant
import '@/plugins/vant'
import vueWaves from '../src/assets/js/waves'
Vue.use(vueWaves)
// 移动端适配
import 'lib-flexible/flexible.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// filters
import './filters'
Vue.config.productionTip = false

// 引入百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
    ak:'GPWyUY2YDEG7G9Z7aHoF1bZulpe3IScZ'		//使用申请的百度地图秘钥
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
