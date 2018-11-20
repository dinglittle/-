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
      this.$store.commit('incrementAction')
    },
    minuAction(){
    	this.$store.commit('minuAction')
    }
  }
}

</script>
