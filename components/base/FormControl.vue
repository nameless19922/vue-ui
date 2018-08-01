<template>
  <label class="form-control" :class="classes">
    <div
      class="form-control__label"
      :class="labelClasses"
      v-if="label || slots.default"
    >
      <slot>{{ label }}</slot>
    </div>
    <input
      class="form-control__input"
      :disabled="disabled"
      :name="name"
      :placeholder="hasFloatingLabel ? null : placeholder"
      :type="type"
      :value="value"

      @input="updateValue($event.target.value)"
      @keydown="onKeydown"
      @blur="onBlur"
      @change="onChange"
      @focus="onFocus"

      v-if="!multiLine"
    >

    <textarea
      class="form-control__input"
      :disabled="disabled"
      :name="name"
      :placeholder="hasFloatingLabel ? null : placeholder"
      :type="type"
      :value="value"
      :rows="rows"

      @input="updateValue($event.target.value)"
      @keydown="onKeydown"
      @blur="onBlur"
      @change="onChange"
      @focus="onFocus"

      v-else
    >{{ value }}</textarea>
    <span class="form-control__error" v-if="errors.has(name)">
      {{ errors.first(name) }}
    </span>
  </label>
</template>

<script>
  import validatable from '@/assets/js/mixins/validatable';

  const props = {
    name: String,

    placeholder: String,

    label: String,

    value: {
      type: [String, Number],
      default: ''
    },

    floatingLabel: {
      type: Boolean,
      default: false
    },

    type: {
      type: String,
      default: 'text'
    },

    multiLine: {
      type: Boolean,
      default: false
    },

    readonly: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },

    rows: {
      type: Number,
      default: 2
    }
  };

  export default {
    name: 'FormControl',

    mixins: [validatable],

    props,

    data: () => ({
      isActive: null
    }),

    computed: {
      classes() {
        return [
          { '_active': this.isActive || this.valueLength },
          { '_error': this.errors.has(this.name) },
          { '_valid': !this.errors.has(this.name) && this.firstly }
        ];
      },

      labelClasses() {
        return {
          '_floating': this.hasFloatingLabel
        };
      },

      hasLabel() {
        return this.label.length;
      },

      hasFloatingLabel() {
        return this.hasLabel && this.floatingLabel;
      },

      valueLength() {
        return this.value ? this.value.length : 0;
      }
    },

    methods: {
      updateValue(value) {
        if (typeof this.validate === 'function') {
          this.validate(value);
        }

        this.$emit('input', value);
      },

      onChange(e) {
        this.$emit('change', this.value, e);
      },

      onKeydown(e) {
        this.$emit('keydown', e);
      },

      onFocus(e) {
        console.log(e);

        this.isActive = true;
        this.$emit('focus', e);
      },

      onBlur(e) {
        this.isActive = false;
        this.$emit('blur', e);
      },
    },
  }
</script>

<style lang="stylus">
  $form-control-padding = 0 40px 0 20px

  .form-control
    display block
    position relative

    &__input
      width 100%
      height 50px
      padding $form-control-padding
      border 1px solid $color-liberty
      border-radius 0
      color $color-black
      font-size 14px
      letter-spacing 1px
      line-height 1
      transition padding-top  $transition-time ease-in-out

      &:focus
        outline none

      &::ms-clear
        display none

      &:disabled
        pointer-events none

    &._error &__input
      border-color $color-coral-reef

    &._valid &__input
      border-color $color-eton-blue

    &._active &__label
      top 1.3em
      color $color-taupe-gray
      font-size 10px !important

    &._active &__input
      padding-top 1.1em

    &._big &__label
      font-size 14px

    &._big &__input
      height 60px

    &._small
      height 30px

    &__label
      position absolute
      top 1.75em
      left 0
      padding $form-control-padding
      cursor text
      font-size 14px
      line-height 1
      text-align left
      transition all $transition-time ease-in-out

    &__error
      display block
      margin-top 7px
      color $color-coral-reef
      font-size 10px
</style>