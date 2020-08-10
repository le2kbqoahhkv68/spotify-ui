<template lang='pug'>
  article.result-type(@wheel='handleWheel' )
    header
      h2 {{ $tc(`spotify.types.${type}`, 2) }}
      h3 {{ $t('actions.hoverScroll') }}
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

@Component({
  components: {
    SpotifindTypeBox
  }
})
export default class ResultType extends Vue {
  @Prop({ required: true, type: String }) type: SpotifyTypesEnum
  @Prop({ required: true, type: Array }) items: SpotifyType[]

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

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .items {
      height: 150px;
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
