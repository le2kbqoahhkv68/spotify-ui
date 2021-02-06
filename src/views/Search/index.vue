<template lang='pug'>
  section#search
    .container
      .content.cassete-search
        spotifind-cassete-search(@input='handleInput')
      .content.results-list
        spotifind-results-list(
          :albums='albums'
          :artists='artists'
          :playlists='playlists'
          :tracks='tracks'
        )
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

// api
import getSearch from '@/api/services/getSearch'

// components
import SpotifindCasseteSearch from '@/components/CasseteSearch/index.vue'
import SpotifindResultsList from '@/components/ResultsList/index.vue'

// typings
import { SearchInputEvent } from '../../typings/SearchInputEvent'
import { SpotifyType } from '../../typings/SpotifyType'

/**
 * It acts as parent component and it contains all the business logic.
 * CasseteSearch child component emits events with the query text and filters.
 * This view requests information using the information from CasseteSearch.
 * Results are passed to ResultsList component through properties.
 * State, vuex is not necessary.
 */
@Component({
  name: 'Search',
  components: {
    SpotifindCasseteSearch,
    SpotifindResultsList
  }
})
export default class Search extends Vue {
  albums: SpotifyType[] = []
  artists: SpotifyType[] = []
  playlists: SpotifyType[] = []
  tracks: SpotifyType[] = []

  /**
   * Assign input data to component's data.
   */
  handleInput (input: SearchInputEvent): void {
    getSearch(input.q, input.types)
      .then(({
        albums,
        artists,
        playlists,
        tracks
      }) => {
        this.albums = albums
        this.artists = artists
        this.playlists = playlists
        this.tracks = tracks
      })
  }
}
</script>

<style lang='scss' scoped>
  section#search {
    position: relative;
    min-height: 100%;
    width: 100%;
    padding: 2rem 0;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    & > * {
      flex: 1;
    }

    &:before {
      animation-delay: .5s;
      animation-duration: .5s;
      animation-fill-mode: both;
      animation-name: toBlur;
      background-image: url('./assets/headphones.jpg');
      background-size: cover;
      content: '';
      height: 100%;
      left: 0;
      top: 0;
      position: absolute;
      width: 100%;
      z-index: -1;
    }

    .container {
      display: flex;

      @media screen and (max-width: $br-tablet) {
        flex-direction: column;
        justify-content: center;
      }

      & > .content {
        flex: 1;

        &.cassete-search {
          padding-top: 6rem;

          @media screen and (max-width: $br-tablet) {
            margin: 0 auto;
            padding: 0;
          }
        }

        &.results-list {
          overflow: hidden;
        }
      }
    }
  }
</style>
