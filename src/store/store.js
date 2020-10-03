import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={//要设置的全局访问的state对象//
    showFooter: true,
    changableNum:0,
    Host: "118.25.250.150",//后台地址
    user_name: null     //用户名
   };

const store = new Vuex.Store({
  state
});

export default store;
