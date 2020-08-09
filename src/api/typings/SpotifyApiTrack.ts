import { SpotifyApiAlbum } from './SpotifyApiAlbum'

export interface SpotifyApiTrack {
  album: SpotifyApiAlbum,
  artists: any[],
  available_markets: string[],
  disc_number: number,
  duration_ms: number,
  explicit: boolean,
  external_ids: any,
  external_urls: any,
  href: string,
  id: string,
  is_playable: boolean,
  linked_from: any,
  name: string,
  popularity: number,
  preview_url: string,
  track_number: number,
  type: string,
  ur: string,
}

