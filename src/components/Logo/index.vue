<template lang='pug'>
  article
    img(src='@/assets/brand/icon-white.png')

    div.text
      p.title {{ $t('logo.title') }}
      p.subtitle {{ $t('logo.subtitle') }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Logo extends Vue {}
</script>

<style scoped lang="scss">
  article {
    align-items: center;
    font-size: 1rem;
    overflow: hidden;
    height: 100%;
    display: flex;

    img {
      animation-delay: .5s;
      animation-duration: 1s;
      animation-fill-mode: both;
      animation-name: fade;
      animation-timing-function: ease-out;
      height: 7em;
    }

    .text {
      margin-left: 1.5em;

        p {
          font-family: 'Open Sans';
          margin: 0 auto;
        }

        .title {
          animation-delay: .25s;
          animation-duration: .5s;
          animation-fill-mode: both;
          animation-name: fromTop;
          animation-timing-function: ease-out;
          color: $color-white;
          font-size: 1.5em;
          font-weight: 500;
          line-height: .75em;
        }

        .subtitle {
          animation-delay: .45s;
          animation-duration: .5s;
          animation-fill-mode: both;
          animation-name: fromBottom;
          animation-timing-function: ease-out;
          color: $color-yellow;
          font-size: .75em;
          font-weight: 700;
          margin-top: .25em;
          padding-left: 2em;
          text-transform: uppercase;
        }
    }
  }
</style>
