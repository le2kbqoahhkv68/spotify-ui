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

  renderOutput (text: string) {
    return `<p>${text}</p>`
  }

  success (customs: any) {
    this._show({
      type: 'success',
      timeout: 1000,
      ...customs,
      text: this.renderOutput(customs.text)
    })
  }

  error (customs: any) {
    this._show({
      type: 'error',
      closeWith: ['click'],
      timeout: 8000,
      progressBar: false,
      ...customs,
      text: this.renderOutput(customs.text)
    })
  }

  warning (customs: any) {
    this._show({
      type: 'warning',
      closeWith: ['click'],
      timeout: 8000,
      progressBar: false,
      ...customs,
      text: this.renderOutput(customs.text)
    })
  }

  info (customs: any) {
    this._show({
      type: 'info',
      closeWith: ['click'],
      timeout: 8000,
      progressBar: false,
      ...customs,
      text: this.renderOutput(customs.text)
    })
  }
}

export default Notification
