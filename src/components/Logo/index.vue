<template lang='pug'>
  article
    img(src='@/assets/brand/icon-white.png')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Logo extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
  img {
    height: 2.5rem;
  }
</style>
