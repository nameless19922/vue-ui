<template>
  <div>
    <Header />
    <section class="error">
      <div class="layout__container error__container">
        <div class="error__box" v-if="typeError === 404">
          <h2 class="error__header">404</h2>
          <h1 class="error__title">Ошибка / страница не&nbsp;найдена</h1>
          <div class="error__text">Неправильно набран адрес, или&nbsp;такой страницы не&nbsp;существует</div>
        </div>
        <div class="error__container" v-else>
          <h2 class="error__header">500</h2>
          <h1 class="error__title">Ошибка / внутренняя ошибка сервера</h1>
          <div class="error__text">
            При&nbsp;обработке запроса произошла ошибка.<br>
            Попробуйте перезагрузить страницу или&nbsp;перейдите на&nbsp;главную
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Header from '@/components/base/Header';

  export default {
    props: ['error'],

    components: { Header },

    computed: {
      typeError() {
        return this.error.statusCode;
      }
    }
  }
</script>

<style lang="stylus">
  @import "~@/assets/stylus/mixins/media-width-down"

  .error
    height 100vh
    background-color #e6eaef

    &__container
      display flex
      align-items center
      justify-content center
      flex-wrap wrap
      min-height 100vh
      height 100%


    &__box
      margin-bottom 80px
      flex 0 1 auto

    &__header
      margin 0
      color #949494
      font-size 110px
      font-weight 500
      letter-spacing 20px
      line-height 1
      text-align center

    &__title
      margin 5px 0 0
      color #949494
      font-size 16px
      font-weight 500
      letter-spacing 1.8px
      text-align center
      text-transform uppercase

    &__text
      margin-top 35px
      color #949494
      font-size 14px
      line-height 20px
      letter-spacing .75px
      text-align center

    +media-width-down($screen-xs)
      &__box
        margin 0

      &__header
        font-size 60px
        letter-spacing 10px

      &__title
        font-size 14px

      &__text
        margin-top 20px
</style>