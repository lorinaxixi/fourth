// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import publicName from '@/api/public.js'
import store from '@/store/index.js'
//注册图片放大缩小组件
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer, {
	name:'Viewer',	
  defaultOptions: {
    zIndex: 9999
  }
})
//注册公共组件
Vue.use(publicName)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
