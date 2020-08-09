// http instance
import httpClient from '../core/http'

// spotify types enum
import { SpotifyTypesEnum } from '@/typings/SpotifyTypesEnum'

/**
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
