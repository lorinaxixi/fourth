import Vue from 'vue'
import Vuex from 'vuex'
import action from './action'
Vue.use(Vuex)
//构造函数
// const store=  new Vuex.Store({
// 	state :{
// 		count:0,
// 		show:false
// 	},
// 	mutations:{
// 		increment (state) {
// 		  state.count++
//     },
//     decrement (state) {
// 		  state.count--
// 		}
// 	}
// })
const state={
    count:0,
		show:false
}
const mutations ={
    increment (state) {
		  state.count++
    },
    decrement (state) {
		  state.count--
		}
}
// 创建 store 实例
export default new Vuex.Store({
  actions,
  state,
  mutations,
})
// export default store
//传值出去
