<template lang='pug'>
  div
    p hello
    i.fas.fa-camera
    i.fab.fa-font-awesome
    p {{ $t('test') }}
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
    console.log('w')
    testCall()
      .then(data => { console.log('3', data) })
      .catch((error) => console.log('e', error))
  }
}
</script>
