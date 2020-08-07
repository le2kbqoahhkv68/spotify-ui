<template lang='pug'>
  section#search
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Search'
})
export default class extends Vue {}
</script>

<style lang='scss' scoped>
  section#search {
    width: 100vw;
    height: 100vh;
    background-image: url('./assets/headphones.jpg');
    background-size: cover;
  }
</style>
