/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../view/home.vue";
import search_result from "../view/search_result";
import book_message from '../view/book_message';
import blank from '../components/blank';
import mange_page from '../view/mange_page'
import add_page from '../view/add_page'
Vue.use(VueRouter)

const routes = [
    {
        path:'/search_result/:word/:range',
        name:'search_result',
        component: search_result,
        meta:
        {
            title:'搜索结果'
        }
    },
    {
        path:'/home',
        name:'home',
        component: home,
        meta:
            {
                title:'图书管理系统'
            }
    },
    {
        path:'/book_message/:id',
        name:'book_message',
        component: book_message,
        meta:
            {
                title:'book_message'
            }
    },
    {
        path:'/blank',
        name:'blank',
        component: blank,
        meta:
        {
            title:'blank'
        }
    },
    {
      path:'/mange_page',
      name:'mange_page',
      component: mange_page,
      meta:
        {
          title:'管理书籍'
        }
    },
    {
      path:'/add_page',
      name:'add_page',
      component: add_page,
      meta:
        {
          title:'添加新书'
        }
    },
    // 重定向
    {
        path: '/',
        redirect: '/home'
    }
]

// eslint-disable-next-line no-undef
const router =new VueRouter({
    mode : 'hash',
    routes
})

export default router
