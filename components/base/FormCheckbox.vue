<template>
  <div class="form-checkbox">
    <label class="form-checkbox__label">
      <input
        class="form-checkbox__input"
        type="checkbox"
        :name="name"
        :value="value"
        :disabled="disabled"

        @change="onChange"
      >
      <span class="form-checkbox__text" v-if="label || slots.default">
        <slot>{{ label }}</slot>
      </span>
    </label>

    <span class="form-control__error" v-if="errors.has(name)">
      {{ errors.first(name) }}
    </span>
  </div>
</template>

<script>
  import validatable from '@/assets/js/mixins/validatable';

  const props = {
    name: String,

    label: String,

    value: {
      type: [String, Number, Boolean]
    },

    checked: {
      type: Boolean
    },

    disabled: {
      type: Boolean
    }
  };

  export default {
    name: 'FormCheckbox',

    mixins: [validatable],

    props,

    data() {
      return {
        isChecked: this.checked
      };
    },

    methods: {
      onChange(e) {
        this.isChecked = e.target.checked ? true : null;

        if (typeof this.validate === 'function') {
          this.validate(this.isChecked);
        }

        this.$emit('input', this.isChecked);
      }
    }
  }
</script>

<style lang="stylus">
  .form-checkbox
    display inline-block
    position relative
    padding-left 30px
    color #777
    font-size 9px
    line-height 1.4
    letter-spacing .4px

    a
      color $color-jet
      text-decoration underline

      &:hover
        text-decoration none

    &__input
      position absolute
      opacity 0

    &__text
      position relative
      cursor pointer

      &::before
        display block
        box-sizing border-box
        width 20px
        height 20px
        position absolute
        top -5px
        left -30px
        content ''
        border 1px solid $color-liberty

      &::after
        content ''
        display block
        padding-left 1px
        width 14px
        height 14px
        position absolute
        top -5px
        left -27px
        margin-top 2px
        background svg-load('../../assets/images/svg/i_check.svg') 50% 50% no-repeat
        background-size contain
        opacity 0

    &__input:checked + &__text::before
      border-color #e8e8e8
      background-color #e8e8e8

    &__input:checked + &__text::after
      opacity 1
</style>