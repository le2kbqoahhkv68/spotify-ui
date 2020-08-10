<template lang='pug'>
  article
    img(:src='imageUrl')
    p {{ type.name }}
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

// lodash
import { get } from 'lodash'

// types
import { SpotifyType } from '@/typings/SpotifyType'
@Component
export default class TypeBox extends Vue {
  @Prop({ required: true, type: Object }) type: SpotifyType

  get imageUrl (): string {
    const imageUrl = get(this.type, 'images[0].url')
    if (!imageUrl) return require('./assets/no-photo.png')
    return imageUrl
  }
}
</script>

<style scoped lang="scss">
  article {
    margin: 0 .5em ;

    img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      border: 3px solid $color-black;
      box-sizing: border-box;
      overflow: hidden;
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
