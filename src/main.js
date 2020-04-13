import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Dropdown from './components/shared/Dropdown'
import Hero from './components/shared/Hero'
import moment from 'moment'

Vue.config.productionTip = false

Vue.component('Dropdown', Dropdown)
Vue.component('Hero', Hero)

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
  render: h => h(App)
}).$mount('#app')
