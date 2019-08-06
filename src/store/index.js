import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
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
		show:false,
    login:false
}
const mutations ={
    increment (state,payload) {
		  state.count++
    },
    decrement (state,payload) {
		  state.count--
		},
    login(state,payload) {
      state.login = payload
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
