// http instance
import httpClient from '../core/http'

// spotify types enum
import { SpotifyTypesEnum } from '@/typings/SpotifyTypesEnum'

// spotify api types
import { SpotifyApiAlbum } from '../typings/SpotifyApiAlbum'
import { SpotifyApiArtist } from '../typings/SpotifyApiArtist'
import { SpotifyApiPlaylist } from '../typings/SpotifyApiPlaylist'
import { SpotifyApiTrack } from '../typings/SpotifyApiTrack'

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
}
