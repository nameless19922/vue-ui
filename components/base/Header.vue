<template>
  <header class="header">
    <div class="layout__container header__container">
      <a href="javascript:;" target="_blank" :class="classList">
        <span class="header__logo-img"></span>
        <span class="header__logo-text">БКС брокер</span>
      </a>
      <slot></slot>
    </div>
  </header>
</template>

<script>
  import Icon from '@/components/base/Icon';

  const types = ['white'];

  const props = {
    type: {
      type: String,
      default: ''
    }
  };

  export default {
    name: 'Header',

    props,

    computed: {
      classList() {
        return `header__logo${this.type.length ? [' ',this.type].join('_') : ''}`;
      }
    }
  }
</script>

<style lang="stylus">
  @import "../mixins/sizesvg"

  $header-size-logo = 30px

  .header
    display block
    position absolute
    top 0
    right 0
    left 0
    padding 19px 0

    &__container
      display flex
      align-items center
      justify-content space-between

    &__logo
      &._white
        & ^[1]-text
          color $color-white

        & ^[1]-img
          background svg-load('../../assets/images/svg/logo_white.svg')

      &-text,
      &-img
        display inline-block
        vertical-align middle

      &-text
        padding-left 12px
        color $color-space-cadet
        font-size 20px
        font-weight 500
        letter-spacing .5px
        white-space nowrap

      &-img
        sizesvg($header-size-logo, $header-size-logo)
        background svg-load('../../assets/images/svg/logo.svg')
</style>