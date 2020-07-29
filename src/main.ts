import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import: custom plugi, options?: anyns
import { SpotifindNotyPlugin } from '@/plugins/noty'

// Config: custom plugins
Vue.use(SpotifindNotyPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
