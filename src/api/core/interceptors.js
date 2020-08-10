import Vue from 'vue'
import i18n from '@/plugins/i18n/config'
import { get } from 'lodash'
import { hasAccessToken, getAccessToken, requestAccessToken } from './auth'

/**
 * Token is added to the headers. If no token is present, the token is requested before do it.
 * @param httpClient Axios wrapper http instance reference defined in http.js file.
 */
const requestInterceptor = httpClient => {
  const { client } = httpClient

  client.interceptors.request.use(
    async config => {
      if (!hasAccessToken()) { await requestAccessToken() }
      config.headers.Authorization = `Bearer ${getAccessToken()}`
      return config
    },
    error => Promise.reject(error)
  )
}

/**
 * This interceptor handles auth authorization errors and show notification according to thej API.
 * @param httpClient Axios wrapper http instance reference defined in http.js file.
 */
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
        if (hasAccessToken()) {
          originalRequest.headers.Authorization = `Bearer ${getAccessToken()}`
          client(originalRequest)
          return
        }
      }

      // Shows default error notification
      const i18nKey = `api.error.${httpCode}`
      Vue.prototype.$noty.error(i18n.t(i18nKey))

      return Promise.reject(error)
    }
  )
}

export { requestInterceptor, responseInterceptor }
