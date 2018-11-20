import Vue from 'vue'
import Vuex from 'vuex'
import * as type from './mutation-types'
// import * as type from './mutation-types'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  // Vuex 中的 getter 就像计算属性一样, 
  // getter 的返回值会更根据它的依赖被缓存起来, 
  // 且只有当他的依赖值发发生 改变才会被重新计算
  getters: {
    // 通过属性访问
    // 通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中
    counter: state => {
      console.log(state.counter)
      return state.counter;
    },
    // 通过方法访问
    // 通过方法访问时, 每次都会去进行调用, 而不会缓存结果
    getTodoByVal: (state) => (id) => {
      return state.todos.fin
    }
  },
  // mutating the state
  // mutations are always synchronous
  mutations: {
    // showing passed with payload, represented as num 
    // increment: (state, num) => {
    // 	console.log('increment')
    //   console.log(state, num)
    //   if (num)
    //     state.counter += num.val;
    //   else
    //     state.cunter += 1;
    //   console.log('increment:', state.counter)
    // },
    // 
    // 当以  mapMutations 辅助函数形式提交的时候 不可以带参？？、
    increment:(state)=>{
    	console.log('increment')
    	state.counter +=1;
    },
    [type.COUNT](state) {
      console.log('COUNT')
    },
    minus: (state, num) => {
      state.counter -= num;
      console.log('minus:', state.counter)
    },
    // actions
    incrementAction(state){
    	console.log(state)
    	state.counter++;
    },
    minuAction(state){
    	console.log(state)
    	state.counter--;
    }
  },
  // commites the mutation, it's asynchronous
  // 异步提交
  actions: {
    // showing passed with payload, represented as asynchNum ( an object )
    asyncDecrement: ({ commit }, asynchNum) => {
      setTimeout(() => {
        // the asyncNum objects could also just be static amounts
        commit('decrement', asyncNum.by);
      }, asyncNum.duration);
    },
    // incrementAction(context){
    // 	console.log('context',context)
    // 	context.commit('incrementAction')
    // },
    minuAction(context){
    	console.log('context',context)
    	console.log('context',context)
    	context.commit('minuAction')
    },
    incrementAction({commit}){
    	commit('incrementAction')
    }
  }
})
// key:value 是任何类型的状态数据的占位符
