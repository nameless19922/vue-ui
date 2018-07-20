<template>
  <form class="form">
    <slot />
  </form>
</template>

<script>
  const props = {

  };

  export default {
    name: 'Form',

    props,

    methods: {
      onSubmit(success, fail) {
        const { $touch, $invalid } = this.$v;

        $touch();

        if (!$invalid && typeof success === 'function') {
          success();
        } else {
          if (typeof fail === 'function') {

          }
        }
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