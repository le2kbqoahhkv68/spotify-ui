import { SpotifyImage } from './SpotifyImage'

export interface SpotifyApiArtist {
  external_urls: any;
  followers: any;
  genres: string[];
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
  preview_url?: string; // to-do: remove
}
