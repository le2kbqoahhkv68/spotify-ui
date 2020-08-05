/* eslint-disable */
import axios from 'axios'
import httpClient from './http'

const requestAccessToken = () => {
  const url = process.env.VUE_APP_SPOTIFY_API_AUTH_URL

  const body = 'grant_type=client_credentials'

  const config = {
    headers: {
      Authorization: `Basic ${btoa([
        process.env.VUE_APP_SPOTIFY_CLIENT_ID,
        process.env.VUE_APP_SPOTIFY_CLIENT_SECRET
      ].join(':'))}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }


  return axios.post(
    url,
    body,
    config
  )
    .then(response => {
      const { data: { access_token: accessToken }} = response
      if (accessToken) sessionStorage.setItem('accessToken', accessToken)
    })
}

const getAccessToken = () => {
  return sessionStorage.getItem('accessToken')
}

const hasAccessToken = () => {
  return !!getAccessToken()
}

export { requestAccessToken, getAccessToken, hasAccessToken }