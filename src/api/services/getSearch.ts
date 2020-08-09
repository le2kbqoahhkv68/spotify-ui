// http instance
import httpClient from '../core/http'

// spotify types enum
import { SpotifyTypesEnum } from '@/typings/SpotifyTypesEnum'

// spotify api types
import { SpotifyApiAlbum } from '../typings/SpotifyApiAlbum'
import { SpotifyApiArtist } from '../typings/SpotifyApiArtist'
import { SpotifyApiPlaylist } from '../typings/SpotifyApiPlaylist'
import { SpotifyApiTrack } from '../typings/SpotifyApiTrack'

// spotify type
import { SpotifyType } from '@/typings/SpotifyType'

// lodash
import { get } from 'lodash'

const getType = function (
  els: (SpotifyApiAlbum|SpotifyApiArtist|SpotifyApiPlaylist|SpotifyApiTrack)[]
): SpotifyType[] {
  return els.map((el: SpotifyType) => { return { id: el.id, name: el.name, images: el.images } })
}

/**
 * This method acts as middleware / facade, transforming API results to APP models..
 * @param q Query text.
 * @param type Type target.
 * @param offset Page, starting at 0.
 * @param limit Maximum number of reuslts.
 */
export default (q: string, type: SpotifyTypesEnum[] = Object.values(SpotifyTypesEnum), offset = 0, limit = 20) => {
  const params = {
    q,
    type: type.join(','),
    offset,
    limit
  }
  return httpClient.get('/search', { params })
    .then(data => {
      const albums: SpotifyApiAlbum[] = get(data, 'albums.items', [])
      const artists: SpotifyApiArtist[] = get(data, 'artists.items', [])
      const playlists: SpotifyApiPlaylist[] = get(data, 'playlists.items', [])
      const tracks: SpotifyApiTrack[] = get(data, 'tracks.items', [])

      return {
        albums: getType(albums),
        artists: getType(artists),
        playlists: getType(playlists),
        tracks: getType(tracks)
      }
    })
}
