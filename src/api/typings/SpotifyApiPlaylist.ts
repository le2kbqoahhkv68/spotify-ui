
import { SpotifyApiTrack } from './SpotifyApiTrack'

export interface SpotifyApiPlaylist {
  collaborative: boolean,
  external_urls: string,
  href: string,
  id: string,
  images: any[],
  name: string,
  owner: any,
  public: boolean | null,
  snapshot_id: string,
  tracks: SpotifyApiTrack,
  type: string,
  uri: string
}
