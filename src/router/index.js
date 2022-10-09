import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.view'
import PageNotFound from '../views/PageNotFound.view'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users/:userId',
    name: 'userShow',
    component: () => import('../views/users/UserShow.view.vue')
  },
  { path: "*", component: PageNotFound, name: 'notFound' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
