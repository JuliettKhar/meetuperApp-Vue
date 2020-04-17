import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Dropdown from './components/shared/Dropdown'
import Hero from './components/shared/Hero'
import moment from 'moment'
import Spinner from './components/shared/Spinner'
import vuelidate from 'vuelidate'

Vue.config.productionTip = false

Vue.component('Dropdown', Dropdown)
Vue.component('Hero', Hero)
Vue.component('Spinner', Spinner)

Vue.use(vuelidate)

Vue.filter('capitalize', function (value) {
  if (value && typeof value === 'string') {
    return value.charAt(0).toUpperCase() + value.slice(1)
  }

  return ''
});
Vue.filter( 'formatDate', function (value, format = 'LL') {
  if (!value) return ''

  return moment(value).format(format)
})

new Vue({
  router,
  store,
  vuelidate,
  render: h => h(App)
}).$mount('#app')
