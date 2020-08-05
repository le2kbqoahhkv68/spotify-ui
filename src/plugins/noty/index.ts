import _Vue from 'vue'
import Noty from './noty'

const SpotifindNotyPlugin = function (Vue: typeof _Vue): void {
  Vue.prototype.$noty = new Noty()
}

export default SpotifindNotyPlugin
