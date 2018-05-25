import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import CoinTossing from '@/components/CoinTossing'
import GameList from '@/components/GameList'
import Game from '@/components/Game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/coin_tossing',
      name: 'CoinTossing',
      component: CoinTossing
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/gamelist',
      name: 'GameList',
      component: GameList
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    }
  ]
})
