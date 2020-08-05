/* eslint-disable */
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

export { requestInterceptor }