<template>
  <header class="header">
    <div class="layout__container header__container">
      <a href="https://broker.ru" target="_blank" class="header__logo" :class="classes">
        <span class="header__logo-img"></span>
        <span class="header__logo-text">БКС брокер</span>
      </a>
      <slot></slot>
    </div>
  </header>
</template>

<script>
  const types = ['default', 'white'];

  const props = {
    logo: {
      type: String,
      default: types[0],
      validator: value => types.indexOf(value) !== -1
    }
  };

  export default {
    name: 'Header',

    props,

    computed: {
      classes() {
        return `_${this.logo}`;
      }
    }
  }
</script>

<style lang="stylus">
  @import "~@/assets/stylus/mixins/sizesvg"
  @import "~@/assets/stylus/mixins/media-width-down"

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

    +media-width-down($screen-xs)
      &__logo-text
        display none
</style>