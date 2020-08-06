/* eslint-disable */
import Noty from 'noty'

const defaultConfig = {
  layout: 'topRight',
  timeout: 2000,
  progressBar: false,
  theme: 'mint'
}

class Notification {
  constructor (config?: object) {
    this.config = Object.assign({}, defaultConfig, config)
    Noty.overrideDefaults(this.config)
  }

  config = {}

  _show (config: any) {
    return new Noty(config).show()
  }

  renderOutput (msg: string, icon: string) {
    return (!!icon ? `<i class='fas ${icon}'></i>` : '') + `<p>${msg}</p>`
  }

  success (msg: string) {
    this._show({
      type: 'success',
      timeout: 100000,
      text: this.renderOutput(msg, 'fa-check-circle')
    })
  }

  error (msg: string) {
    this._show({
      type: 'error',
      closeWith: ['click'],
      timeout: 3000,
      progressBar: false,
      text: this.renderOutput(msg, 'fa-times-circle')
    })
  }

  warning (msg: string) {
    this._show({
      type: 'warning',
      closeWith: ['click'],
      timeout: 3000,
      progressBar: false,
      text: this.renderOutput(msg, 'fa-exclamation-circle')
    })
  }

  info (msg: string) {
    this._show({
      type: 'info',
      closeWith: ['click'],
      timeout: 3000,
      progressBar: false,
      text: this.renderOutput(msg, 'fa-info-circle')
    })
  }
}

export default Notification
