<template>
  <modal
    :name="name"
    :width="width"
    :max-width="maxWidth"
    :height="height"
    :adaptive="true"
    :scrollable="true"
    :classes="classes"
    :clickToClose="clickToClose"
    @before-open="beforeOpen"
  >
    <div class="popup__wrapper">
      <button class="popup__close" @click="$modal.hide(name)" v-if="closeButton">×</button>
      <div class="popup__content">
        <slot></slot>
      </div>
    </div>
  </modal>
</template>

<script>
  const props = {
    name: {
      type: [String, Number],
      default: 'popup'
    },

    classes: {
      type: [String, Number],
      default: 'popup'
    },

    width: {
      type: [String, Number],
      default: '90%'
    },

    maxWidth: {
      type: Number,
      default: 640
    },

    height: {
      type: [String, Number],
      default: 'auto'
    },

    closeButton: {
      type: Boolean,
      default: true
    },

    clickToClose: {
      type: Boolean,
      default: true
    }
  };

  export default {
    name: 'Popup',

    props,

    methods: {
      beforeOpen(e) {
        this.$emit('before-open', e);
      }
    }
  }
</script>

<style lang="stylus">
  @import "~@/assets/stylus/mixins/popup-close"

  .v--modal
    box-shadow none

    &-overlay
      &-background-click
        padding-top 10px

  .popup
    position relative
    padding 70px 60px 60px
    background-color $color-white

    &._message
      background $color-glitter

    &__close
      popupClose()

</style>