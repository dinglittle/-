<!-- Vuex component -->
<template>
  <div>
    {{name}}
    <p>{{counter}}</p>
    <button @click="increment">increment</button>

    <p>
      <button @click="goDefault">首页</button>
    </p>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
export default {
  name: 'vue-component',
  data() {
    return {
      name: 'vue-component',
      // counter:''
    }
  },
  // props:[],
  // components:{

  // },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
  computed:{
    // 由于 Vuex 的状态存储是响应式的, 从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态
    counter(){
      // 方法一:
      // return this.$store.state.counter;
      // 方法二: 配合 store.getters
      return this.$store.getters.counter;
    }
  },
  // 方法三:
  // 当一个组件需要获取多个状态时候, 将这些状态都声明为计算属性会有些重复和冗余. 为了解决这个问题, 我们可以使用 mapState 辅助函数帮助我们生成计算属性
  // computed:mapState({
  //   // 箭头函数可使代码更简练
  //   counter: state=>state.counter
  // }),
  methods: {
    initDate() {
      console.log('初始化数据');
    },
    increment(){
      // 更改 Vuex 的 store 的状态的唯一方法是提交 mutation .
      // Vuex 中的 mutatioan 都有一个字符串的 事件类型(type) 和 回调函数 (handler) 

      // 不能直接调用一个 mutation handler .
      // 这个选项更像是事件注册: 
      // 当触发一个类型为 increment 的 mutation 时,调用此函数.
      // 要唤醒一个 mutaion handler , 需要以相应的 type 调用 store.commit 方法

      // 只是提交状态,提交后的状态用来在其他模块使用
      this.$store.commit('increment',2);
      // this.counter = new Date();
    },
    goDefault(){
      this.$router.push('/')
    }
  },
  filters: {
    capitalize: function(val) {
      if (!val) return;
      val = value.toString();
      // slice(index, howmany, item...) 不会修改原数组
      return val.charAt(0).toUpperCase() + val.slice(1);
    }
  }
}

</script>
