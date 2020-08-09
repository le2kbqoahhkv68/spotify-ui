<template lang='pug'>
  article#results-list
    transition(name='fade' mode='out-in')
      spotifind-result-type(v-if='albums.length > 0' :items='albums' type='album')
    transition(name='fade' mode='out-in')
      spotifind-result-type(v-if='artists.length > 0' :items='artists' type='artist')
    transition(name='fade' mode='out-in')
      spotifind-result-type(v-if='playlists.length > 0' :items='playlists' type='playlist')
    transition(name='fade' mode='out-in')
      spotifind-result-type(v-if='tracks.length > 0' :items='tracks' type='track')
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

// components
import SpotifindResultType from '@/components/ResultType/index.vue'

// types
import { SpotifyType } from '@/typings/SpotifyType'

@Component({
  components: {
    SpotifindResultType
  }
})
export default class ResultsList extends Vue {
  @Prop({ required: false, type: Array }) albums?: SpotifyType[]
  @Prop({ required: false, type: Array }) artists?: SpotifyType[]
  @Prop({ required: false, type: Array }) playlists?: SpotifyType[]
  @Prop({ required: false, type: Array }) tracks?: SpotifyType[]
}
</script>

<style scoped lang="scss">
  article#results-list {
    height: 100%;
    width: 100%;
  }
</style>
