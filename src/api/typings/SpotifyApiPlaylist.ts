
import { SpotifyApiTrack } from './SpotifyApiTrack'
import { SpotifyImage } from './SpotifyImage'

export interface SpotifyApiPlaylist {
  collaborative: boolean,
  external_urls: string,
  href: string,
  id: string,
  images: SpotifyImage[],
  name: string,
  owner: any,
  public: boolean | null,
  snapshot_id: string,
  tracks: SpotifyApiTrack,
  type: string,
  uri: string
}
