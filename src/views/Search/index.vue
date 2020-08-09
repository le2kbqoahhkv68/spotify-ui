<template lang='pug'>
  section#search
    .container
      .content.cassete-search
        spotifind-cassete-search(@input='handleInput')
      .content
        spotifind-results-list
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

@Component({
  name: 'Search',
  components: {
    SpotifindCasseteSearch,
    SpotifindResultsList
  }
})
export default class Search extends Vue {
  handleInput (input: SearchInputEvent): void {
    getSearch(input.q, input.types)
      .then(data => {
        console.log('data', data)
      })
  }
}
</script>

<style lang='scss' scoped>
  section#search {
    position: relative;
    min-height: 100%;
    width: 100vw;
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

      & > .content {
        flex: 1;

        &.cassete-search {
          padding-top: 6rem;
        }
      }
    }
  }
</style>
