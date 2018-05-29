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
      component: HelloWorld,
      meta: { auth: false }
    },
    {
      path: '/coin_tossing',
      name: 'CoinTossing',
      component: CoinTossing
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { auth: false }
    },
    {
      path: '/gamelist',
      name: 'GameList',
      component: GameList,
      meta: { auth: false }
    },
    {
      path: '/game/:gamename',
      name: 'Game',
      component: Game
    },
  ]
})
