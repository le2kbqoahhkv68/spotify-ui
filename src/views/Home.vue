<template lang='pug'>
  div
    p hello
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import testCall from '@/api/services/test'

@Component({
  name: 'Home',
  components: {
    HelloWorld
  }
})
export default class extends Vue {
  mounted () {
    testCall()
      .then(data => { console.log('data', data) })
  }
}
</script>
