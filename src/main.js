/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './route/index'
import axios from '../node_modules/axios/dist/axios.js'
import store from './store/store'//引入store
import common from './CommonFunction/common.js'
Vue.config.productionTip = false

Vue.prototype.$axios = axios;
//Vue.prototype.common = common;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  render: h => h(App),
  router,
  store,
  common
}).$mount('#app')
