<template>
  <Header type="white">
    <div class="header__contacts">
      <span class="header__text">Как вложить деньги в облигации</span>
      <a href="tel:88005005545" class="header__phone cpc-tel">8&nbsp;800&nbsp;500&nbsp;55&nbsp;45</a>
      <Button @click="showPopup()" class="_small">Консультация</Button>
    </div>
  </Header>
</template>

<script>
  import Header from '@/components/base/Header';
  import Button from '@/components/ofz/Button';

  export default {
    name: 'OfzHeader',

    extends: Header,

    components: { Button, Header },

    methods: {
      showPopup() {
        this.$modal.show('popup-feedback');
      }
    }
  };
</script>

<style lang="stylus">
  @import "~@/assets/stylus/mixins/media-width-down"

  .header
    &__contacts
      display flex
      align-items center
      flex-wrap wrap

    &__text
      color $color-white
      font-size 14px

    &__phone
      margin 0 30px 0 25px
      font-size 20px
      color $color-white
      text-decoration none

    +media-width-down($screen-md)
      &__text
        display none

    +media-width-down($screen-sm)
      &__phone
        margin 0

      .btn
        display none

    +media-width-down($screen-xs)
      &__logo-text
        display none
</style>