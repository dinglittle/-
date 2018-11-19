import Vue from 'vue'
import Vuex from 'vuex'
import * as type from './mutation-types'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state:{
		counter:0
	},
	// Vuex 中的 getter 就像计算属性一样, 
	// gettr 的返回值会更根据它的依赖被缓存起来, 
	// 且只有当他的依赖值发发生 改变才会被重新计算
	getters:{
		// 通过属性访问
		// 通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中
		counter:state=>{
			console.log(state.counter)
			return state.counter;
		},
		// 通过方法访问
		// 通过方法访问时, 每次都会去进行调用, 而不会缓存结果
		getTodoByVal:(state)=>(id)=>{
			return state.todos.fin
		}
	},
	// mutating the state
	// mutations are always synchronous
	mutations:{
		// showing passed with payload, represented as num 
		increment:(state,num)=>{
			console.log(state,num)
			state.counter +=num;
			console.log('increment:',state.counter)
		},
		minus:(state,num)=>{
			state.counter-=num;
			console.log('minus:',state.counter)
		}
	},
	// commites the mutation, it's asynchronous
	// 异步提交
	actions:{
		// showing passed with payload, represented as asynchNum ( an object )
		asyncDecrement:({ commit }, asynchNum)=>{
			setTimeout(()=>{
				// the asyncNum objects could also just be static amounts
				commit('decrement', asyncNum.by);
			},asyncNum.duration);
		}
	}	
})
// key:value 是任何类型的状态数据的占位符

