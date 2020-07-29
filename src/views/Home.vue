<template lang='pug'>
  div
    p hello
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  name: 'Home',
  components: {
    HelloWorld
  }
})
export default class extends Vue {
  mounted () {
    this.$noty.success({ text: 'hola' })
  }
}
</script>
