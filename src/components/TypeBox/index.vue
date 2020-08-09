<template lang='pug'>
  article
    img(:src='imageUrl')
    p {{ type.name }}
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

// lodashj
import { get } from 'lodash'

// types
import { SpotifyType } from '@/typings/SpotifyType'

@Component
export default class TypeBox extends Vue {
  @Prop({ required: true, type: Object }) type: SpotifyType

  get imageUrl (): string {
    return get(this.type, 'images[0].url', '')
  }
}
</script>

<style scoped lang="scss">
  article {
    margin: 0 1em ;

    img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      border: 2px solid $color-black;
      box-sizing: border-box;
      overflow: hidden;
      // min-width: 100px;
      border-radius: $radius-default;
    }

    p {
      font-size: .75em;
      text-align: center;
      max-height: 26px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
