<template>
  <component
    :is="type"
    :href="href"
    :type="type === 'button' ? 'button' : null"
    class="btn"
    @click="onClick"
  >
    <span class="btn__content">
      <slot></slot>
    </span>
  </component>
</template>

<script>
  import clickable from '@/assets/js/mixins/clickable';

  const props = {
    href: {
      type: String
    },

    classes: {
      type: String
    }
  };

  export default {
    name: 'Button',

    mixins: [clickable],

    props,

    computed: {
      type() {
        return typeof this.href !== 'undefined' ? 'a': 'button';
      }
    }
  };
</script>

<style lang="stylus">
  @import "~@/assets/stylus/mixins/button"

  .btn
    button()
    padding 17px 35px
    background $color-brandeis-blue
    border none
    border-radius 0
    color $color-white
    font-size 10px
    letter-spacing 1.2px
    text-transform uppercase
    transition background $transition-time

    &._small
      height 38px
      padding 10px 23px

    &._block
      display block
      width 100%

    &:hover
      background $color-space-cadet
</style>