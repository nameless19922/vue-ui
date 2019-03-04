<template>
  <form class="form" @submit.prevent="onSubmit">
    <slot />
  </form>
</template>

<script>
  import { hasOwn } from '@/common/utils';

  const props = {
    actions: Object
  };

  export default {
    name: 'Form',

    props,

    methods: {
      checkAction(name) {
        return this.actions && hasOwn(this.actions, name);
      },

      reset(name = 'form') {
        Object.assign(this.$data[name], this.$options.data.call(this)[name]);
      },

      async onSubmit() {
        try {
          const status = await this.$validator.validateAll();

          if (status && this.checkAction('success')) {
            this.actions['success']();
          }
        } catch (exc) {
          console.error(exc);

          if (this.checkAction(this.actions, 'fail')) {
            this.actions['fail']();
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

    &__checkbox
      margin-top 25px

    &__submit
      margin-top 30px
</style>