<template>
  <Popup :maxWidth="670" name="popup-feedback" classes="popup-feedback">
    <div class="popup-feedback__box">
      <div class="popup-feedback__header">
        <div class="popup-feedback__title">Свяжитесь с&nbsp;финансовым советником</div>
        <div class="popup-feedback__desc">Заполните форму, и мы&nbsp;перезвоним вам в&nbsp;ближайшее время</div>
      </div>
      <div class="popup-feedback__form">
        <FormFeedback />
      </div>
    </div>
  </Popup>
</template>

<script>
  import Popup from '@/components/base/Popup';
  import FormFeedback from '@/components/base/FormFeedback';

  export default {
    name: 'PopupFeedback',

    extends: Popup,

    components: { Popup, FormFeedback }
  }
</script>

<style lang="stylus">
  .popup-feedback
    padding 70px 0 60px
    background-color $color-glitter

    &__box
      position relative

    &__header
      padding 0 10%
      margin-bottom 40px
      text-align center

    &__title
      margin-bottom 10px
      color $color-jet
      font-size 24px
      font-weight 300
      line-height 1.375

    &__desc
      font-size 14px
      line-height 1.5

    &__form
      padding 0 15%

      &-submit
        max-width 225px
        margin 30px auto 0
</style>