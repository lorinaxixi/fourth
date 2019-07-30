import Vue from 'vue'
import Vuex from 'vuex'

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
