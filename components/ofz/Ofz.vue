<template>
  <section class="ofz _minfin">
    <div class="layout__container _indented">
      <h2 class="heading-1 ofz__heading-1">Облигации федерального займа</h2>
      <div class="ofz__article">
        <div class="ofz__left">
          <h4 class="ofz__title">Министерство финансов</h4>
          <div class="ofz__img">
            <img src="/images/ofz/logo-minfin.png" alt="Министерство финансов" width="77" height="94">
          </div>
          <p class="ofz__text">Рублёвые долговые ценные бумаги, выпускаемые Министерством Финансов&nbsp;РФ</p>
        </div>
        <div class="ofz__right">
          <div class="ofz__right-inner">
            <div class="ofz__income">
              <div class="ofz__label ofz__income-label">Доход:</div>
              <span class="ofz__income-value">10,43%<sup>1</sup></span>
              <div class="ofz__title">Не облагается НДФЛ</div>
              <Button
                class="ofz__btn"
                @click="$modal.show('popup-feedback')"
              >
                Получить консультацию
              </Button>
            </div>
            <div class="ofz__details">
              <ul class="ofz__list">
                <li class="ofz__list-item">
                  <span class="ofz__label">Выплаты:</span>
                  <span class="ofz__list-value">2&nbsp;раза в&nbsp;год</span>
                </li>
                <li class="ofz__list-item">
                  <span class="ofz__label">Минимальная сумма&nbsp;вложения:</span>
                  <span class="ofz__list-value">30&nbsp;000&nbsp;₽</span>
                </li>
                <li class="ofz__list-item">
                  <span class="ofz__label">Облигации доступны для&nbsp;покупки&nbsp;до:</span>
                  <span class="ofz__list-value">27.12.2017</span>
                </li>
              </ul>
              <a href="javascript:;"
                class="ofz__link"
                @click="$modal.show('popup-feedback')"
              >
                Подобрать другие варианты вложений
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Button from '@/components/ofz/Button';

  export default {
    name: 'Ofz',

    components: { Button },
  }
</script>

<style lang="stylus">
  @import "~@/assets/stylus/mixins/media-width-down"

  .ofz
    padding 60px 0

    &__heading-1
      margin-bottom 1.67em
      color $color-space-cadet
      font-size 30px
      font-weight 500
      letter-spacing 2.5px
      line-height 1.2
      text-transform uppercase

    &__heading-3
      margin-bottom 3.33em

    &__article
      display table
      table-layout fixed
      width 100%

    &__left
      display table-cell
      width 32%
      min-width 240px
      padding 40px 3% 35px
      text-align center

    &__title
      font-size 14px
      margin-bottom 35px
      line-height 2.4
      font-weight 600
      text-transform uppercase
      letter-spacing 2px

    &__text
      font-size 14px

    &__img
      margin 25px 0

    &__right
      display table-cell
      width 68%
      vertical-align middle
      position relative

      &-inner
        position relative
        display table
        table-layout fixed
        width 100%
        padding 50px 0

    &__income
      vertical-align top
      display table-cell
      width 43%
      text-align center

      &-label
        margin-top 9px
        margin-bottom 15px

      &-title
        margin 15px 0 35px

      &-value
        display inline-block
        font-size 55px
        line-height 1.3
        color #393a39
        font-weight 300

        sup
          font-size 22px
          vertical-align super

    &__label
      flex 0 1 200px
      color #888
      text-transform uppercase
      font-size 10px
      line-height 1.2
      letter-spacing 2px

    &__details
      display table-cell
      width 57%
      position relative

    &__list
      list-style none
      max-width 330px
      padding-left 10px

      &-item
        display flex
        align-items flex-end
        padding-bottom 15px
        margin-bottom 15px

        &:not(:last-child)
          border-bottom 1px solid #dedede

      &-value
        flex 0 0 50%
        font-size 21px
        line-height 1
        letter-spacing 2px
        font-weight 300

    &__link
      position absolute
      bottom 20px
      display inline-block
      font-size 10px
      line-height 1.2
      color #4c4c4c
      text-transform uppercase
      margin-top 35px

    &._minfin
      .ofz
        &__title
          color #643e38

        &__left
          background-color #bcd1bd

        &__right
          background-color #e7eee7

    &._companies
      .ofz
        &__title
          color #62605c

        &__left
          background-color #ede5da

          .ofz__link
            position static

        &__right
          background-color #fdfdfb

    +media-width-down($screen-lg)
      &__left
      &__right
      &__article
        display block
        width 100%

      &__gallery
        padding-right 7%

    +media-width-down($screen-md)
      &__gallery
        display none

      &__link
        position relative
        left auto
        bottom auto
        transform none

      &__details
        text-align center

      &__income
      &__details
        display block
        width 100%

      &__text
        font-size 12px

      &__label
        padding-bottom 1.5em
        text-align center
        flex 1 1 100%

      &__list
        margin 30px auto 0

        &-item
          flex-wrap wrap

        &-value
          text-align center
          flex 1 1 100%

    +media-width-down($screen-sm)
      &__label
        padding-bottom 1.5em
</style>