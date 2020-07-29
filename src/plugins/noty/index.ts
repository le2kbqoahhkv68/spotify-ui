import _Vue from 'vue'
import Noty from './noty'

export function SpotifindNotyPlugin (Vue: typeof _Vue): void {
  Vue.prototype.$noty = new Noty()
}
