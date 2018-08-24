<template>
  <div class="popup-message__wrapper">
    <button class="popup__close" @click="$emit('close')">×</button>
    <div class="popup-message__content">
      <div class="popup-message__title">{{ title }}</div>
      <div class="popup-message__text">{{ text }}</div>
    </div>
  </div>
</template>

<script>
  import Popup from '@/components/base/Popup';
  import { hasOwn } from '@/common/utils';

  const props = {
    title: String,

    text: String
  }

  export default {
    name: 'PopupMessage',

    extends: Popup,

    components: { Popup },

    props
  }
</script>

<style lang="stylus">
  #modals-container
    .v--modal-overlay
      z-index 1000

  .popup-message
    position relative
    padding 100px 15% 90px
    background-color $color-glitter
    text-align center

    &__close
      popupClose()

    &::before
      content ''
      display block
      width 100%
      height 74px
      margin-bottom 36px
      background url(/images/logo-gray.png) no-repeat 50% 0
      opacity .2

    &__title
      margin-bottom 8px
      color $color-jet
      font-size 24px
      font-weight 300
      line-height 1.375

    &__text
      font-size 14px
      line-height 1.5

</style>