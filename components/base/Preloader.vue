<template>
  <div
    class="preloader"
    :class="{ '_inline': inline }"
    :style="{ background: inline ? 'transparent' : background }"
  >
    <div class="preloader__wrapper">
      <div class="preloader__spinner"></div>
    </div>
  </div>
</template>

<script>
  const props = {
    background: {
      type: String
    },

    inline: {
      type: Boolean,
      default: false
    }
  };

  export default {
    name: 'Preloader',

    props
  };
</script>

<style lang="stylus">
  .preloader
    display block
    position absolute
    top 0
    bottom 0
    left 0
    right 0

    background rgba(255, 255, 255, 1)
    z-index 600

    &._inline
      position static
      background transparent

      & ^[0]__wrapper
        margin 0
        position static

      & ^[0]__spinner
        margin 0 auto

    &__parent
      position relative

    &__wrapper
      margin-left -20px
      margin-top -20px
      position absolute
      top 50%
      left 50%

    &__spinner
      width 40px
      height 40px
      position relative

      &::before
      &::after
        position absolute
        display block
        content ''
        width 30px
        height 30px
        left 50%
        top 50%
        border-width 2px
        border-style solid
        border-color transparent
        border-bottom-color $color-brandeis-blue
        border-right-color $color-brandeis-blue
        border-radius 50%
        transform translate(-50%, -50%) rotate(45deg)
        transition all .4s ease-in-out

      &::before
        animation .8s rotate .4s linear forwards infinite

      &::after
        width 38px
        height 38px
        animation .8s rotate2 .4s linear forwards infinite

    @keyframes rotate
      to
        transform translate(-50%, -50%) rotate(405deg)

    @keyframes rotate2
      to
        transform translate(-50%, -50%) rotate(-315deg)
</style>