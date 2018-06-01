import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import CoinTossing from '@/components/CoinTossing'
import GameList from '@/components/GameList'
import Game from '@/components/Game'
import HistoryInfo from '@/components/HistoryInfo'
import AboutUs from '@/components/AboutUs'
import PersonInfo from '@/components/PersonInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
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
    {
      path: '/historyinfo',
      name: 'HistoryInfo',
      component: HistoryInfo,
      meta: { auth : true }
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs,
      meta: { auth: false }
    },
    {
      path: '/personinfo',
      name: 'PersonInfo',
      component: PersonInfo,
      meta: { auth: true}
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      meta: { auth: false }
    },
    // 需要放在最下面，默认处理所有找不到的路径
    {
      path: '*',
      redirect: '/aboutus'
    }
  ]
})
