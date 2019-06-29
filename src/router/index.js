import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import viewer from '@/components/viewer/viewer'
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
		{
		  path: '/viewer',
		  name: 'viewer',
		  component: viewer
		},
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
