import { SpotifyApiArtist } from './SpotifyApiArtist'
import { SpotifyImage } from './SpotifyImage'

export interface SpotifyApiAlbum {
  album_type: string;
  artists: SpotifyApiArtist[];
  availabel_markets: string[];
  external_urls: any;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  type: string;
  uri: string;
  preview_url?: string; // to-do: remove
}
