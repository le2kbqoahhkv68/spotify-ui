/* eslint-disable */
import axios from 'axios'

const getAccessToken = () => {
  const config = {
    headers: {
      Authorization: `Basic ${btoa([
        process.env.VUE_SPOTIFY_CLIENT_ID,
        process.env.VUE_SPOTIFY_CLIENT_SECRET
      ].join(':'))}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  const body = 'grant_type=client_credentials'

  return axios.post(
    'https://accounts.spotify.com/api/token',
    body,
    config
  )
    .then(data => {
      console.log('data', data)
    })
}

export { getAccessToken }