<template>
  <div>
    {{name}}
    <p>
      {{counter}}
    </p>
    <p>
      <button @click="incrementAction">+</button>
      <button @click="goDefault">首页</button>
      <button @click="minuAction">-</button>
    </p>
  </div>
</template>
<script>
export default {
  name: 'my-component-action',
  data() {
    return {
      name: 'my-component-aciotn'
    }
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  },
  methods: {
    goDefault() {
      this.$router.push('/')
    },
    incrementAction() {
    	// 方法一： 正常方式更改状态
      this.$store.commit('incrementAction')
    },
    minuAction(){
    	// 载荷分发方式
    	// 方法一： 正常方式更改状态
    	// this.$store.commit('minuAction')
    	// 方式二：以载荷方式分发处理 
    	this.$store.dispatch('incrementAsync');
    	
    }
  }
}

</script>
