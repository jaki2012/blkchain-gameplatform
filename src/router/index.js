import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import CoinTossing from '@/components/CoinTossing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/CoinTossing',
      name: 'CoinTossing',
      component: CoinTossing
    }
  ]
})
