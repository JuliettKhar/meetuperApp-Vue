import Vue from 'vue'
import VueRouter from 'vue-router'
// import PageHome from '@/pages/PageHome'
// import MeetupDetail from '@/pages/MeetupDetail'

Vue.use(VueRouter)

  const routes = [

  {
    path: '/',
    name: 'PageHome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "PageHome" */ '../pages/PageHome')
  },
  {
    path: '/meetups/:id',
    name: 'MeetupDetail',
    component: () => import(/* webpackChunkName: "MeetupDetail" */ '../pages/MeetupDetail')
  },
  {
    path: '/find',
    name: 'MeetupFind',
    component: () => import(/* webpackChunkName: "MeetupFind" */ '../pages/MeetupFind')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../pages/NotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
