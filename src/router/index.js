import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/pages/Register'
import Login from '@/components/pages/Login'
import ShoppingMall from '@/components/pages/ShoppingMall'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'ShoppingMall', component: ShoppingMall },
    { path: '/register', name: 'Register', component: Register },
    { path: '/login', name: 'login', component: Login },
  ]
})
