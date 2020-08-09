<template lang='pug'>
  article#results-list
    p hola
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

// types
// import { InputEvent } from '@/typings/InputEvent'
// import { SpotifyTypesEnum } from '@/typings/SpotifyTypesEnum'
// import { SearchInputEvent } from '@/typings/SearchInputEvent'

@Component
export default class ResultsList extends Vue {
  // @Prop({ required: false, type: String }) readonly : string
}
</script>

<style scoped lang="scss">
  article#results-list {
    background-color: red;
    height: 100%;
    width: 100%;
  }
</style>
