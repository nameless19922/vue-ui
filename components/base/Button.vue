<template>
  <component
    class="btn"
    :is="buttonType"
    :href="href"
    :type="buttonType === 'button' && type ? type : null"
    @click="onClick"
  >
    <div class="btn__content">
      <slot></slot>
    </div>
  </component>
</template>

<script>
  import clickable from '@/assets/js/mixins/clickable';

  const props = {
    href: {
      type: String
    },

    type: {
      type: String
    },

    block: {
      type: Boolean
    }
  };

  export default {
    name: 'Button',

    mixins: [clickable],

    props,

    computed: {
      buttonType() {
        return typeof this.href !== 'undefined' ? 'a': 'button';
      },

      classes() {
        return [
          { '_block': this.block }
        ];
      }
    }
  };
</script>

<style lang="stylus">
  @import "~@/assets/stylus/mixins/button"

  .btn
    button()
    height 48px
    padding 0 15px
    background $color-brandeis-blue
    border none
    border-radius 0
    color $color-white
    font-size 10px
    letter-spacing 1.2px
    text-transform uppercase
    transition background $transition-time

    &__content
      display flex
      align-items center
      justify-content center
      text-align center

    &._small
      height 38px
      padding 10px 23px

    &._block
      display block
      width 100%

    &:hover
      background $color-space-cadet
</style>