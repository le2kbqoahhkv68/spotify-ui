<template lang='pug'>
  div
    p hello
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import { getAccessToken } from '@/api/core/auth'

@Component({
  name: 'Home',
  components: {
    HelloWorld
  }
})
export default class extends Vue {
  mounted () {
    console.log(getAccessToken)
    getAccessToken()
      .then(data => { console.log('data', data) })
  }
}
</script>
