import axios from 'axios'
import { requestInterceptor, responseInterceptor } from './interceptors'

/**
 * Exported HttpClient INSTANCE used in every request except in the authorization which uses a diferent API entry point.
 */
class HttpClient {
  /**
   * baseUrl is set. See .env file which includes API url and auth API url.
   * Interceptors are also set in the constructor.
   */
  constructor () {
    this.client = axios.create({ baseURL: process.env.VUE_APP_SPOTIFY_API_URL })
    requestInterceptor(this)
    responseInterceptor(this)
  }

  /**
   * Returns an axios wrapped request method.
   * @param {String} method GET, PUT, PATCH, POST, DELETE
   * @param {String} url Resource path.
   * @param {Object} data Object which contains data passed i.e. in POST requests.
   * @param {Object} config Additional config, object which represents the config object passed to axios instance.
   * @returns {Promise}
   */
  request (method, url, data, config) {
    return new Promise((resolve, reject) => {
      this.client[method](url, data, config || {}).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error)
      })
    })
  }

  /**
   *
   * @param {String} url Resource path.
   * @param {Object} data Object which contains data passed i.e. in POST requests.
   * @param {Object} config Additional config, object which represents the config object passed to axios instance.
   * @returns {Promise}
   */
  get (url, data, config = {}) {
    return this.request('get', url, data, config)
  }

  /**
   *
   * @param {String} url Resource path.
   * @param {Object} data Object which contains data passed i.e. in POST requests.
   * @param {Object} config Additional config, object which represents the config object passed to axios instance.
   * @returns {Promise}
   */
  post (url, data, config = {}) {
    return this.request('post', url, data, config)
  }

  /**
   *
   * @param {String} url Resource path.
   * @param {Object} data Object which contains data passed i.e. in POST requests.
   * @param {Object} config Additional config, object which represents the config object passed to axios instance.
   * @returns {Promise}
   */
  put (url, data, config = {}) {
    return this.request('put', url, data, config)
  }

  /**
   *
   * @param {String} url Resource path.
   * @param {Object} data Object which contains data passed i.e. in POST requests.
   * @param {Object} config Additional config, object which represents the config object passed to axios instance.
   * @returns {Promise}
   */
  patch (url, data, config = {}) {
    return this.request('patch', url, data, config)
  }

  /**
   *
   * @param {String} url Resource path.
   * @param {Object} data Object which contains data passed i.e. in POST requests.
   * @param {Object} config Additional config, object which represents the config object passed to axios instance.
   * @returns {Promise}
   */
  delete (url, data, config = {}) {
    return this.request('delete', url, data, config)
  }
}

export default new HttpClient()
