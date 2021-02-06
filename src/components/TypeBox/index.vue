<template lang='pug'>
  article(@click='handleClick' :class='{ preview: hasPreview }')
    img(:src='imageUrl')
    p {{ item.name }}
    audio(v-if='hasPreview' ref='audio' :src='previewUrl')
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

// lodash
import { get } from 'lodash'

// types
import { SpotifyType } from '@/typings/SpotifyType'
import { SpotifyTypesEnum } from '@/typings/SpotifyTypesEnum'
import { Debounce } from 'vue-debounce-decorator'

/**
 * Squared component which renders the type image and the title.
 * to-do: create a base component and extends it to create one for each Spotify type.
 */
@Component
export default class TypeBox extends Vue {
  @Prop({ required: true, type: Object }) item: SpotifyType
  @Prop({ required: true, type: String }) type: SpotifyTypesEnum

  /**
   * Returns a play icon image if the element has preview.
   * Returns and empty image if the item doesn't have images.
   * Returns item image.
   */
  get imageUrl (): string {
    if (this.hasPreview) { return require('./assets/preview.png') }
    const imageUrl = get(this.item, 'images[0].url')
    if (!imageUrl) return require('./assets/no-photo.png')
    return imageUrl
  }

  /**
   * Returns true if an element contains previewUrl to play preview track.
   */
  get hasPreview (): boolean {
    return !!this.item.previewUrl
  }

  /**
   * Returns previewUrl if exists.
   */
  get previewUrl (): string {
    return this.item.previewUrl || ''
  }

  /**
   * Returns HTMLAudio element of the component necessary to play music. Reference is used to play manually from this.pauseEveryAudio
   * method.
   */
  get audioElement (): HTMLAudioElement {
    return this.$refs.audio as HTMLAudioElement
  }

  /**
   * Pause every audio element of the app.
   */
  pauseEveryAudio (): void {
    document.querySelectorAll('audio').forEach(audio => { audio.pause() })
  }

  /**
   * Play, with debounce, this component track preview.
   */
  @Debounce(500)
  handleClick (): void {
    this.pauseEveryAudio()
    this.audioElement.play()
  }
}
</script>

<style scoped lang="scss">
  article {
    margin: 0 .5em;
    width: 100px;

    &.preview {
      cursor: pointer;

      img {
        transition: border-color $duration-base, background-color $duration-base;
      }

      &:hover {
        img {
          border-color: $color-green;
          background-color: rgba($color-black-light, 0.7);
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
