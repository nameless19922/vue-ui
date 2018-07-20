<template>
  <modal
    :name="title"
    :width="width"
    :max-width="maxWidth"
    :height="height"
    :adaptive="true"
    :scrollable="true"
    :classes="classList"
    @before-open="beforeOpen"
  >
    <div class="popup__wrapper">
      <button class="popup__close" @click="$modal.hide(title)">×</button>
      <div class="popup__content">
        <slot></slot>
      </div>
    </div>
  </modal>
</template>

<script>
  const props = {
    title: {
      type: [String, Number],
      default: 'popup'
    },

    width: {
      type: [String, Number],
      default: '100%'
    },

    maxWidth: {
      type: Number,
      default: 1200
    },

    height: {
      type: [String, Number],
      default: 'auto'
    }
  };

  export default {
    name: 'Popup',

    props,

    computed: {
      classList() {
        return `popup${this.title.length ? ' ' + this.title : ''}`
      }
    },

    methods: {
      beforeOpen(e) {
        this.$emit('before-open', e);
      }
    }
  }
</script>

<style lang="stylus">
  .v--modal
    box-shadow none

    &-overlay
      & + &
        z-index 998

      &-background-click
        padding-top 10px

  .popup
    position relative
    padding 70px 60px 60px
    background-color $color-white

    &._message
      background $color-glitter

    &__close
      display block
      width 44px
      height 44px
      position absolute
      top 0
      right 0
      padding 0
      appearance none
      background none
      border 0
      color #a2a2a2
      cursor pointer
      font-size 32px
      font-weight 300
      line-height 44px
      outline none
      text-align center
      text-decoration n
      z-index 1046
</style>