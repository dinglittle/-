import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyComponentMutation from '@/components/MyComponentMutation'
import MyComponentAction from '@/components/MyComponentAction'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mutation',
      name: 'MyComponentMutation',
      component: MyComponentMutation
    },
    {
      path: '/action',
      name: 'MyComponentAction',
      component: MyComponentAction
    }
  ]
})
