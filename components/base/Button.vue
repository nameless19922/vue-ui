<template>
  <component
    class="btn"
    :class="classes"
    :is="buttonType"
    :href="href"
    :type="buttonType === 'button' && type ? type : null"
    :to="buttonType === 'nuxt-link' ? this.href : null"
    @click="onClick"
  >
    <div class="btn__content">
      <slot></slot>
      <Icon src="progressbar" :size="20" v-if="loading" right />
    </div>
  </component>
</template>

<script>
  import Icon from '@/components/base/Icon';
  import clickable from '@/utils/mixins/clickable';

  const props = {
    href: String,

    type:  String,

    block: Boolean,

    loading: [Boolean, String]
  };

  export default {
    name: 'Button',

    components: { Icon },

    mixins: [clickable],

    props,

    computed: {
      buttonType() {
        if (this.href) {
          return this.nuxt ? 'nuxt-link' : 'a';
        } else {
          return 'button';
        }
      },

      classes() {
        return [
          { '_loading': this.loading },
        ];
      }
    },

    methods: {
      hasLoadingText() {
        return typeof this.loading === 'string';
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
    transition background $transition-time, opacity $transition-time

    &._loading
      opacity .7
      pointer-events none

      svg
        animation progress-rotate .7s linear infinite

        @keyframes progress-rotate
          to
            transform rotate(1turn)

        circle
          stroke $color-white
          stroke-dasharray 89,200
          stroke-dashoffset -35px
          stroke-linecap round


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