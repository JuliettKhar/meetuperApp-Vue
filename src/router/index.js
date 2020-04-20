import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

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
    path: '/meetups/secret',
    name: 'secret',
    component: () => import(/* webpackChunkName: "secter" */ '../pages/SecretPage'),
    meta: { onlyAuthUser: true }
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
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: () => import(/* webpackChunkName: "signIn" */ '../pages/SignIn'),
    meta: { onlyGuestUser: true }
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import(/* webpackChunkName: "signUp" */ '../pages/SignUp'),
    meta: { onlyGuestUser: true }
  },
  {
    path: '/401',
    name: 'notAuthenticated',
    component: () => import(/* webpackChunkName: "c" */ '../pages/NotAuthenticated')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch('auth/getAuthUser')
    .then(() => {
      const isAuthenticated = store.getters['auth/isAuthenticated'];
      
      if (to.meta.onlyAuthUser) {
      
        if(isAuthenticated) {
          next()
        } else {
          next({name: 'notAuthenticated'})
        }

      } else if (to.meta.onlyGuestUser) {
        if (isAuthenticated) {
          next({ name: 'PageHome'})
        } else {
          next()
        }

      }
      else {
        next()
      }
    })
})



export default router
