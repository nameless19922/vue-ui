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

    data() {
      return {
        controls: []
      }
    },

    methods: {
      checkAction(name) {
        return this.actions && hasOwn(this.actions, name);
      },

      resetForm() {
        console.log(this.controls);
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
    },

    created() {
      this.$on('addControl', (control) => {
        if (control) {
          this.controls.push(control);
        }
      });

      this.$on('removeControl', (control) => {
        if (control) {
          this.controls.splice(this.controls.indexOf(control), 1);
        }
      });
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