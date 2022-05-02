
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BookList from '@/views/BookList.vue'
import BookDetail from '@/components/BookDetail.vue'
import NotFound from '@/components/NotFound.vue'
import MyUser from '@/views/MyUser.vue'
import UserProfile from '@/components/UserProfile.vue'
import UserPosts from '@/components/UserPosts.vue'
import HomeSub from '@/components/HomeSub.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default:HomeView,
      sub: HomeSub
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/book',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/book/:id',
    name:'Book',
    component: BookDetail,
    props: route => ({ 
      id: Number(route.params.id),
      title: route.params.title,
      content: route.params.content })
  },
  {
    path:'/user',
    component: MyUser,
    children:[
      {path:'profile', component: UserProfile},
      {path:'post', component: UserPosts}
    ]
  },
  {
    path:'*',
    // redirect:'/',
    name: 'NotFound',
    component: NotFound
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   next()
// })
export default router
