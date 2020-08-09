<template lang='pug'>
  article#cassete
    img(src='./assets/cassete.png')
    p.label {{ $t('cassete.label') }}
    input(type='text' @input='handleInput')
    .types
      label(v-for='type of typesEnum' :for='type') {{ $tc(`spotify.types.${type}`, 0) }}
        input(type='checkbox' :id='type' @change='handleCheck(type)' v-model='types[type]')
        .checkmark

</template>

<script lang='ts'>
import { Component, Vue, Emit } from 'vue-property-decorator'
import { Debounce } from 'vue-debounce-decorator'

// types
import { InputEvent } from '@/typings/InputEvent'
import { SpotifyTypesEnum } from '@/typings/SpotifyTypesEnum'
import { SearchInputEvent } from '@/typings/SearchInputEvent'

@Component
export default class CasseteSearch extends Vue {
  q = ''
  types = {
    album: true,
    artist: true,
    playlist: true,
    track: true
  }

  get typesEnum (): SpotifyTypesEnum[] {
    return Object.values(SpotifyTypesEnum)
  }

  get noTypeSelected (): boolean {
    return Object.values(this.types).every(type => !type)
  }

  @Emit('input')
  emitInput (): SearchInputEvent | undefined {
    if (!this.q || this.noTypeSelected) return
    return {
      q: this.q,
      types: this.typesEnum.filter(type => !!this.types[type])
    }
  }

  @Debounce(500)
  handleInput (event: InputEvent): void {
    this.q = event.target.value
    this.emitInput()
  }

  @Debounce(500)
  handleCheck (): void {
    this.emitInput()
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
      align-items: center;
      bottom: 115px;
      display: flex;
      justify-content: space-between;
      left: 50px;
      position: absolute;
      width: 350px;

      label {
        color: $color-black;
        cursor: pointer;
        font-size: 1em;
        padding-left: 1.25em;
        position: relative;
        transition: color $duration-base;

        &:hover {
          color: $color-yellow-dark;
        }

        input[type='checkbox'] {
          opacity: 0;
        }

        input[type='checkbox']:checked ~ .checkmark {
          background-color: $color-yellow;
        }

        .checkmark {
          background-color: $color-white;
          border: 2px solid $color-black;
          border-radius: $radius-default / 2;
          position: absolute;
          height: 10px;
          left: 0;
          top: 0;
          transition: background-color $duration-base;
          width: 10px;
        }
      }
    }
  }
</style>
