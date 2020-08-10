<template lang='pug'>
  article(@click='handleClick' :class='{ preview: hasPreview }')
    img(:src='imageUrl')
    p {{ item.name }}
    audio(v-if='hasPreview' ref='audio' :src='previewUrl')
</template>

<script lang='ts'>
// todo: i would like to separate components
import { Component, Vue, Prop } from 'vue-property-decorator'

// lodash
import { get } from 'lodash'

// types
import { SpotifyType } from '@/typings/SpotifyType'
import { SpotifyTypesEnum } from '@/typings/SpotifyTypesEnum'
import { Debounce } from 'vue-debounce-decorator'
@Component
export default class TypeBox extends Vue {
  @Prop({ required: true, type: Object }) item: SpotifyType
  @Prop({ required: true, type: String }) type: SpotifyTypesEnum

  get imageUrl (): string {
    if (this.hasPreview) { return require('./assets/preview.png') }
    const imageUrl = get(this.item, 'images[0].url')
    if (!imageUrl) return require('./assets/no-photo.png')
    return imageUrl
  }

  get hasPreview (): boolean {
    return !!this.item.previewUrl
  }

  get previewUrl (): string {
    return this.item.previewUrl || ''
  }

  get audioElement (): HTMLAudioElement {
    return this.$refs.audio as HTMLAudioElement
  }

  pauseEveryAudio (): void {
    document.querySelectorAll('audio').forEach(audio => { audio.pause() })
  }

  @Debounce(500)
  handleClick (): void {
    this.pauseEveryAudio()
    this.audioElement.play()
  }
}
</script>

<style scoped lang="scss">
  article {
    margin: 0 .5em ;

    &.preview {
      cursor: pointer;

      img {
        transition: border-color $duration-base, background-color $duration-base;
      }

      &:hover {
        img {
          border-color: $color-green;
          background-color: rgba($color-black-light, 0.5);
        }
      }
    }

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
