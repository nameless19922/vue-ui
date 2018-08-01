<template>
  <Popup :maxWidth="1024" title="popup-message" @before-open="beforeOpen">
    <div class="popup-message__title">{{ contentTitle }}</div>
    {{ contentText }}
  </Popup>
</template>

<script>
  import Popup from '@/components/base/Popup';
  import { hasOwn } from '@/common/utils';

  const props = {
    title: {
      type: [String],
      default: ''
    },

    text: {
      type: [String],
      default: ''
    }
  };

  export default {
    name: 'PopupMessage',

    extends: Popup,

    components: { Popup },

    props,

    data() {
      return {
        contentTitle: '',
        contentText: ''
      }
    },

    methods: {
      beforeOpen(e) {
        if (typeof e.params === 'object') {
          this.contentTitle = hasOwn(e.params, 'title') && e.params.title;
          this.contentText = hasOwn(e.params, 'text') && e.params.text;
        }
      }
    }
  }
</script>

<style lang="stylus">
  .popup-message
    padding 100px 15% 60px
    background-color $color-glitter
    text-align center

    &::before
      content ''
      display block
      width 100%
      height 74px
      margin-bottom 36px
      background url(../../assets/images/logo-gray.png) no-repeat 50% 0
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