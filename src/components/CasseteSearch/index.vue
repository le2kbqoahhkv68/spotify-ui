<template lang='pug'>
  article#cassete
    img(src='./assets/cassete.png')
    p.label {{ $t('cassete.label') }}
    input(type='text')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
  article#cassete {
  @keyframes casseteEnter {
    from {
      opacity: 0;
      transform: translateX(-200%) rotate(0);
    }
    to {
      opacity: 1;
      transform: translateY(0) rotate(-10deg);
    }
  }

    animation-name: casseteEnter;
    animation-fill-mode: both;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    font-family: 'Pangolin';
    font-size: 1rem;
    height: auto;
    width: 320px;
    position: relative;
    color: $color-black-light;
    transform: rotate(-10deg);

    p.label {
      position: absolute;
      top: 20px;
      left: 60px;
    }

    input {
      background-color: transparent;
      border: none;
      left: 50px;
      overflow: hidden;
      position: absolute;
      text-overflow: ellipsis;
      top: 60px;
      width: 350px;

      &:focus {
        outline: none;
      }
    }
  }
</style>
