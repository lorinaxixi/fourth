import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import viewer from '@/components/viewer/viewer'
import count from '@/components/count'
import fristItem from '@/components/Example/fristItem'
import fristItemO from '@/components/Example/fristItem1'
import worksIndex from '@/components/works/index'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      //设置默认指向的路径
      // redirect: '/worksIndex',
      path: '/',
      name: 'worksIndex',
      component: worksIndex,
    },
    {
      path: '/fristItemO',
      name: 'fristItemO',
      component: fristItemO
    },

		{
		  path: '/fristItem',
		  name: 'fristItem',
		  component: fristItem
		},
		{
		  path: '/count',
		  name: 'count',
		  component: count
		},
		{
		  path: '/viewer',
		  name: 'viewer',
		  component: viewer
		},

  ]
})
