<template>
  <form class="form" @submit.prevent="onSubmit">
    <slot />
  </form>
</template>

<script>
  export default {
    name: 'Form',

    data: () => ({
      firstly: false
    }),

    methods: {
      onSubmit() {
        this.$validator.validateAll().then((success) => {
          if (success) {
            this.$modal.show(
              'popup-message',
              { title: 'Спасибо!', text: 'Спасибо! Мы свяжемся с вами в ближайшее время.' }
            );
          }
        });
      }
    }
  }
</script>

<style lang="stylus">
  .form
    position relative

    &__line
      &:not(:first-child)
        margin-top 15px

    &__submit
      margin-top 30px
</style>