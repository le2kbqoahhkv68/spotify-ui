<template lang='pug'>
  article.result-type
    h2 {{ $tc(`spotify.types.${type}`, 2) }}
    .items
      spotifind-type-box(v-for='item of items' :key='item.id' :type='item')
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

// components
import SpotifindTypeBox from '@/components/TypeBox/index.vue'

// types
import { SpotifyType } from '@/typings/SpotifyType'
import { SpotifyTypesEnum } from '@/typings/SpotifyTypesEnum'

@Component({
  components: {
    SpotifindTypeBox
  }
})
export default class ResultType extends Vue {
  @Prop({ required: true, type: String }) type: SpotifyTypesEnum
  @Prop({ required: true, type: Array }) items: SpotifyType[]
}
</script>

<style scoped lang="scss">
  article.result-type {
    .items {
      display: flex;
      overflow: hidden;
    }
  }
</style>
