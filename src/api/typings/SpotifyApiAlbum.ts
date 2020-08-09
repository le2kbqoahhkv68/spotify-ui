import { SpotifyApiArtist } from './SpotifyApiArtist'

export interface SpotifyApiAlbum {
  album_type: string,
  artists: SpotifyApiArtist[],
  availabel_markets: string[]
  external_urls: any
  href: string
  id: string
  images: any[]
  name: string
  type: string
  uri: string
}