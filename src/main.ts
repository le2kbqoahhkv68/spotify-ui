import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import plugins
import SpotifindNotyPlugin from '@/plugins/noty'
import i18nConfig from '@/plugins/i18n/config'
import VueI18n from 'vue-i18n'

// Configuration Plugins
Vue.use(SpotifindNotyPlugin)
Vue.use(VueI18n)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n: i18nConfig,
  render: h => h(App)
}).$mount('#app')
