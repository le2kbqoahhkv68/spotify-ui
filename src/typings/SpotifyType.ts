/**
 * One type to define everyone. This means that artists, albums, playlists and tracks are converted to this interface.
 */
export interface SpotifyType {
  id: string;
  name: string;
  images?: {
    height: number;
    url: string;
    width: number;
  }[];
  previewUrl?: string;
}
