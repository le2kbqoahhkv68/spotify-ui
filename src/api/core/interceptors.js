/* eslint-disable */
import axios from 'axios'
import Vue from 'vue'
import i18n from '@/plugins/i18n/config'
import { get } from 'lodash'
import { hasAccessToken, getAccessToken, requestAccessToken } from './auth'

const requestInterceptor = httpClient => {
  const { client } = httpClient

  client.interceptors.request.use(
    async config => {
      if (!hasAccessToken()) { await requestAccessToken() }
      config.headers.Authorization = `Bearer ${getAccessToken()}`
      return config
    }
  ),
  error => Promise.reject(error)
}


// let failedQueue = []

// const processQueue = (error, token = null) => {
//   failedQueue.forEach(prom => {
//     if (error) {
//       prom.reject(error)
//     } else {
//       prom.resolve(token)
//     }
//   })

//   failedQueue = []
// }

const responseInterceptor = httpClient => {
  const { client } = httpClient

  client.interceptors.response.use(
    response => response,
    async error => {
      const httpCode = get(error, ['response', 'status'], undefined)
      const originalRequest = error.config

      /**
       * If you receive a 401 error and it's not a retry from the original, a new token is
       * requested. Then, every queued request will be thrown again.
       *
       * If a retry request comes, that means that the requested token is not valid instead of
       * the token has expired.
       *
       * It's not necessary to handle queued requests because the app don't have chained requests.
       */
      if (httpCode === 401 && !originalRequest._retry) {
        originalRequest._retry = true

        await requestAccessToken()
          .then(() => {
            if (hasAccessToken()) {
              originalRequest.headers.Authorization = `Bearer ${getAccessToken()}`
              axios(originalRequest)
            }
            return
          })
      }

      // Shows default error notification
      const i18nKey = `api.error.${httpCode}`
      Vue.prototype.$noty.error({ text: i18n.t(i18nKey) })

      return Promise.reject(error)
    }
  )
}

export { requestInterceptor, responseInterceptor }