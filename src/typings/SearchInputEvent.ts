import { SpotifyTypesEnum } from '@/typings/SpotifyTypesEnum'

export interface SearchInputEvent {
  q: string;
  types: SpotifyTypesEnum[];
}
