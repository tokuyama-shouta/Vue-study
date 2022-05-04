import Vue from 'vue'
import VueRouter from 'vue-router'
import BookIndexNew from '@/pages/BookIndexNew'
import BookSearch from '@/pages/BookSearch'
import BookEdit from '@/pages/BookEdit'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BookIndexNew',
    component: BookIndexNew
  },
  {
    path: '/search',
    name: 'BookSearch',
    component: BookSearch
  },
  {
    path: '/edit',
    name: 'BookEdit',
    component: BookEdit
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
