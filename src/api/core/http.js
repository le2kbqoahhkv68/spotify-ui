/* eslint-disable */
import axios from 'axios'
import { requestInterceptor } from './interceptors'

class HttpClient {
  constructor() {
    this.client = axios.create({ baseURL: process.env.VUE_APP_SPOTIFY_API_URL })
    requestInterceptor(this)
  }

  request(method, url, data, config) {
    return new Promise((resolve, reject) => {
      this.client[method](url, data, config || {}).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error)
      })
    })
  }

  get(url, data, config) {
    return this.request('get', url, data, config)
  }

  post(url, data, config) {
    return this.request('post', url, data, config)
  }

  put(url, data, config) {
    return this.request('put', url, data, config)
  }

  patch(url, data, config) {
    return this.request('patch', url, data, config)
  }

  delete(url, data, config) {
    return this.request('delete', url, data, config)
  }

  setBaseURL(url) {
    this.client.defaults.baseURL = url
  }

  addHeader(header, method = null) {
    if (!method) {
      this.client.defaults.headers.common[header.name] = header.value
      return
    }

    this.client.defaults.headers[method.toLowerCase()][header.name] = header.value
  }

  getHeader(headerName) {
    return this.client.defaults.headers.common[headerName]
  }
}

export default new HttpClient()
