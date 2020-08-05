import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import plugins
import SpotifindNotyPlugin from '@/plugins/noty'

// Configuration Plugins
Vue.use(SpotifindNotyPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
