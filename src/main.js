// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './vuex/store/'
import './config'
Vue.use(VueResource)

Vue.config.productionTip = false

router.beforeEach(({meta, path}, from, next) => {

  var { auth = true } = meta

  // 获取当前登录状态
  var isLogin = (store.state.app.userLoggedIn === true)

  console.log(path)
  // 强制默认页为登录注册页
  if (!isLogin && path === '/home') {
    
    return next({ path: '/login'})
  }

  if (auth && !isLogin && path !== '/login'){
    return next({ path: '/login'})
  }
  next()
})

// 跳转后返回顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // key
  store,
  components: { App },
  template: '<App/>'
})
