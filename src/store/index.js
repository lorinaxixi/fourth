import Vue from 'vue'
import Vuex from 'vuex'
// import *action from './action'
// //Vuex允许我们在商店中定义“getters”。您可以将它们视为商店的计算属性。与计算属性一样，getter的结果基于其依赖性进行缓存，并且只会在其某些依赖项发生更改时重新进行评估
// import *getter from './getter'
Vue.use(Vuex)
//构造函数
const store=  new Vuex.Store({
	state :{
		count:0,
		show:false
	},
	mutations:{
		increment (state) {
            state.count++
        },
        decrement (state) {
            state.count--
        }
	}
})
export default store 
//传值出去