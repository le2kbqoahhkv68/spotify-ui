<template lang='pug'>
  #app
    header
      .container
        nav
          ul
            li
              spotifind-logo

    main
      transition(name='fade' mode='out-in')
        router-view

</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

// components
import SpotifindLogo from '@/components/Logo'

@Component({
  components: { SpotifindLogo }
})
export default class App extends Vue {}
</script>

<style lang='scss' src='@/styles/app/index.scss'></style>
