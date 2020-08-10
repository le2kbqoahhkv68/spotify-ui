import axios from 'axios'

/**
 * Performs authentication in order to get the token used in any request. It's stored in session storage and you can get it from any other
 * part of the application. Because of token has a 'shor' time of expiration (3600s), it's interesting to store it in sessionStorage
 * instead of localStorage.
 * @returns {Promise}
 */
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
      const { data: { access_token: accessToken } } = response
      if (accessToken) sessionStorage.setItem('accessToken', accessToken)
      return response
    })
}

/**
 * @returns {String} Returns token from sessionStorage.
 */
const getAccessToken = () => {
  return sessionStorage.getItem('accessToken')
}

/**
 * Removes access token from sessionStorage.
 */
const removeAccessToken = () => {
  sessionStorage.removeItem('accesToken')
}

/**
 * @returns {Boolean} Returns true if the sessionStorage/accessToken is not empty.
 */
const hasAccessToken = () => {
  return !!getAccessToken()
}

export { requestAccessToken, getAccessToken, removeAccessToken, hasAccessToken }
