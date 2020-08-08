<template lang='pug'>
  article#cassete
    img(src='./assets/cassete.png')
    p.label {{ $t('cassete.label') }}
    input(type='text' @input='handleInput')
    .types
      .type
        <input type="checkbox" id="cbox1" value="second_checkbox"> <label for="cbox1">artist</label>
      .type
        <input type="checkbox" id="cbox2" value="second_checkbox"> <label for="cbox2">track</label>
      .type
        <input type="checkbox" id="cbox3" value="second_checkbox"> <label for="cbox3">album</label>
      .type
        <input type="checkbox" id="cbox4" value="second_checkbox"> <label for="cbox4">playlist</label>

</template>

<script lang='ts'>
import { Component, Vue, Emit } from 'vue-property-decorator'
import { Debounce } from 'vue-debounce-decorator'

// types
import { InputEvent } from '@/typings/InputEvent'
import { SpotifyTypesEnum } from '@/typings/SpotifyTypesEnum'

@Component
export default class CasseteSearch extends Vue {
  @Emit('input')
  @Debounce(500)
  handleInput (event: InputEvent): string {
    return event.target.value
  }
}
</script>

<style scoped lang="scss">
  article#cassete {
    @keyframes casseteEnter {
      from {
        opacity: 0;
        transform: translateX(-200%) rotate(40deg);
      }
      to {
        opacity: 1;
        transform: translateY(0) rotate(-20deg);
      }
    }

    animation-name: casseteEnter;
    animation-fill-mode: both;
    animation-duration: .75s;
    animation-timing-function: ease-out;
    font-family: 'Pangolin';
    font-size: 1rem;
    height: auto;
    width: 400px;
    position: relative;
    color: $color-black-light;
    transform: rotate(-10deg);

    p.label {
      position: absolute;
      top: 20px;
      left: 60px;
    }

    input[type='text'] {
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

    .types {
      bottom: 115px;
      left: 50px;
      position: absolute;
      width: 100%;

      .type {
        display: inline;
      }

      .type ~ .type {
        margin-left: .5em;
      }
    }
  }
</style>
