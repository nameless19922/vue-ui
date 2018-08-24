<template>
  <no-ssr>
    <div class="select" :class="classes">
      <div class="select__label" v-if="label || $slots.default">
        <slot>{{ label }}</slot>
      </div>
      <v-select
        :options="options"
        :placeholder="hasFloatingLabel ? null : placeholder"
        :value="value"
        :disabled="disabled"
        :name="name"
        :onChange="onChange"
      ></v-select>
      <span class="form-control__error" v-if="errors.has(name)">
        {{ errors.first(name) }}
      </span>
    </div>
  </no-ssr>
</template>

<script>
  import validatable from '@/assets/js/mixins/validatable';

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
        if (current) {
          this.isActive = true;
        }
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
      onChange(e) {
        this.validate && this.validate(e);

        this.$emit('input', e);
      }
    }
  }
</script>

<style lang="stylus">
  $select-padding = 0 20px
  $height = 50px

  .select
    position relative

    &__label
      position relative
      margin-bottom 7px
      cursor text
      font-size 14px
      line-height 1
      text-align left
      transition all $transition-time ease-in-out
      z-index 2

    &._floating
      & ^[0]__label
        position absolute
        top 18px
        left 0
        margin-bottom 0
        padding-left 20px

      &._active
        & ^[0]__label
          top 10px
          font-size 10px

        .v-select
          .selected-tag
            margin-top 19px

    .v-select
      .selected-tag
        margin 13px 0 0
        padding 0
        border none

      input[type="search"]
        height $height
        padding $select-padding
        font-size 14px
        font-family $base-font
        line-height 1

      .open-indicator
        bottom 15px

      .dropdown-toggle
        padding $select-padding
        background-color $color-white
        border-radius 0
        border 1px solid $color-liberty

        .clear
          display none

    &._error
      .v-select
        .dropdown-toggle
          border 1px solid $color-coral-reef
</style>