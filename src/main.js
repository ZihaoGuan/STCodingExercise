import CoreuiVue from '@coreui/vue'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@coreui/coreui/dist/css/coreui.min.css'

Vue.use(CoreuiVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
