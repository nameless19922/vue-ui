<template>
  <div class="layout">
    <nuxt />
  </div>
</template>

<script>
  import PopupMessage from '@/components/base/PopupMessage';
  import { dynamicMessage } from '@/utils/components';

  export default {
    name: 'defaultLayout',

    provide: {
      showDynamicPopup(opts) {
        dynamicMessage.call(this, PopupMessage, opts);
      }
    }
  };
</script>

<style lang="stylus">
  .layout
    display block
    width 100%
    min-height 100%
    position relative
    transition all .24s ease-in-out

    &__container
      width 90%
      max-width 1200px
      margin 0 auto
</style>
