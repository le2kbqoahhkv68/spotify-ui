<template lang='pug'>
  article.result-type(@wheel='handleWheel' )
    header
      h2 {{ $tc(`spotify.types.${type}`, 2) }}
      .actions
        h3 {{ $t('actions.hoverScroll') }}
        h3(v-if='someHasPreview') {{ $t('actions.clickPreview') }}
    .items
      .item-container(ref='itemContainer')
        spotifind-type-box(v-for='item of items' :key='item.id' :item='item' :type='type')
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

// components
import SpotifindTypeBox from '@/components/TypeBox/index.vue'

// types
import { SpotifyType } from '@/typings/SpotifyType'
import { SpotifyTypesEnum } from '@/typings/SpotifyTypesEnum'

/**
 * It renders type title and items passed as props.
 */
@Component({
  components: {
    SpotifindTypeBox
  }
})
export default class ResultType extends Vue {
  @Prop({ required: true, type: String }) type: SpotifyTypesEnum
  @Prop({ required: true, type: Array }) items: SpotifyType[]

  /**
   * Returns if any item has previewUrl to render clickPreview text.
   */
  get someHasPreview (): boolean {
    return this.items.some(item => !!item.previewUrl)
  }

  /**
   * On wheel event. It transforms vertical scroll to horizontal scroll smoothly.
   */
  handleWheel (event: WheelEvent) {
    const itemContainer = this.$refs.itemContainer as HTMLElement
    const amount = event.deltaY > 0 ? 350 : -350

    itemContainer.scrollTo({
      top: 0,
      left: itemContainer.scrollLeft + amount,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped lang="scss">
  article.result-type {
    position: relative;
    margin: 1em 0;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .actions {
        display: flex;
        flex-direction: column;
        text-align: right;
      }
    }

    .items {
      height: 130px;
      overflow: hidden;
      width: 100%;

      .item-container {
        display: flex;
        width: 100%;
        overflow: auto;
        padding-right: 15px;
      }
    }
  }
</style>
