// 导入vue
import Vue from 'vue'
// 导入vuex
import Vuex from 'vuex'
// 把vuex 注册到vue中
Vue.use(Vuex)

export default new Vuex.Store({
   // 属性定义  定义值
   state: {
      count: 0
   },
   // 属性方法
   mutations: {
      add(state) {
         state.count++
      },
      del(state) {
         state.count--
      },
      // 参数1 固定  state里的数据 ，
      // 参数2  自定义  用来保存变量
      addN(state, step) {
         state.count += step
      }
   },
   actions: {

   }

})