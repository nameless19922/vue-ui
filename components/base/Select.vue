<template>
  <div class="select" :class="classes">
    <div class="select__label" v-if="label || $slots.default">
      <slot>{{ label }}</slot>
    </div>
    <multiselect
      :options="options"
      :placeholder="hasFloatingLabel ? null : placeholder"
      :value="value"
      :disabled="disabled"
      :name="name"
      :searchable="false"
      :showLabels="false"

      @input="onChange"
    ></multiselect>
    <span class="form-control__error" v-if="errors.has(name)">
      {{ errors.first(name) }}
    </span>
  </div>
</template>

<script>
  import validatable from '@/utils/mixins/validatable';

  const props = {
    placeholder: String,

    label: String,

    floatingLabel: {
      type: Boolean,
      default: false
    },

    options: {
      type: Array,
      default: []
    },

    name: {
      type: String,
      default: ''
    },

    value: {
      type: [String, Number],
      default: ''
    },

    disabled: {
      type: Boolean,
      default: false
    }
  };

  export default {
    name: 'Select',

    mixins: [validatable],

    props,

    data: () => ({
      isActive: false
    }),

    watch: {
      value(current) {
        this.isActive = !!current;
      }
    },

    computed: {
      classes() {
        return [
          { '_active': this.isActive || this.valueLength },
          { '_error': this.errors.has(this.name) },
          { '_valid': !this.errors.has(this.name) && this.firstly },
          { '_floating': this.hasFloatingLabel },
        ];
      },

      hasLabel() {
        const label = this.label || this.$slots.default;

        return label && label.length;
      },

      hasFloatingLabel() {
        return this.hasLabel && this.floatingLabel;
      }
    },

    methods: {
      onChange(val) {
        this.validate && this.validate(val);

        this.$emit('input', val);
      }
    },

    mounted() {
      if (this.value) {
        this.isActive = true;
      }
    }
  }
</script>
<style lang="stylus">
  $select-padding = 0 20px
  $height = 50px

  .select
    position relative

    .multiselect
      box-sizing border-box
      height $height
      min-height 0
      color $primary-text-color
      z-index 10

      &__option
        &--highlight
          background-color $color-brandeis-blue !important

        &--selected
          background-color transparent
          font-weight 400

      &__single
        min-height 0
        margin-bottom 0
        padding 0 0 0 20px
        font-size 14px
        line-height $height - 2

      &__select
        display none

      &__content
        &-wrapper
          border-radius 0

      &__tags
        height $height
        min-height 0
        padding 0
        border-radius 0
        border 1px solid $color-liberty

    &__label
      position relative
      margin-bottom 7px
      cursor text
      font-size 14px
      line-height 1
      text-align left
      transition all $transition-time ease-in-out

    &._floating
      .multiselect
        &__single
          margin-top 23px
          line-height 1

      & ^[0]__label
        position absolute
        top 18px
        left 0
        margin-bottom 0
        padding-left 20px
        z-index 11

      &._active
        & ^[0]__label
          top 10px
          font-size 10px

    &._error
      .multiselect
        &__tags
          border-color $color-coral-reef
</style>