<template>
  <label class="form-control" :class="classes">
    <div class="form-control__label" v-if="label || $slots.default">
      <slot>{{ label }}</slot>
    </div>
    <div class="form-control__box">
      <div class="form-control__icon" v-if="icon || $slots.icon">
        <slot name="icon">
          <Icon :src="icon" />
        </slot>
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

        ref="control"

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

        ref="control"

        v-else
      >{{ value }}</textarea>
      <span class="form-control__error" v-if="errors.has(name)">
        {{ errors.first(name) }}
      </span>
    </div>
  </label>
</template>

<script>
  import Icon from '@/components/base/Icon';
  import validatable from '@/utils/mixins/validatable';

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
    },

    mask: [String, Object],

    icon: String
  };

  export default {
    name: 'FormControl',

    components: { Icon },

    mixins: [validatable],

    props,

    data: () => ({
      isActive: false
    }),

    computed: {
      classes() {
        return [
          { '_active': this.isActive || this.valueLength },
          { '_error': this.errors.has(this.name) },
          { '_valid': !this.errors.has(this.name) && this.firstly },
          { '_floating': this.hasFloatingLabel },
          { '_multiline': this.multiLine }
        ];
      },

      hasLabel() {
        const label = this.label || this.$slots.default;

        return label && label.length;
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
        this.isActive = true;
        this.$emit('focus', e);
      },

      onBlur(e) {
        this.isActive = false;
        this.$emit('blur', e);
      }
    },

    mounted() {
      if (this.mask) {
        new this.Inputmask(this.mask).mask(this.$refs.control);
      }
    }
  }
</script>

<style lang="stylus">
  $form-control-padding = 0 20px
  $height = 50px

  .form-control
    display block
    position relative

    &__box
      position relative

    &__icon
      position absolute
      top 50%
      right 20px
      margin-top -8px

      svg
        fill $primary-text-color

    &__input
      width 100%
      height 50px
      padding $form-control-padding
      border 1px solid $color-liberty
      border-radius 0
      color $color-black
      font-size 14px
      line-height 1
      transition padding-top $transition-time ease-in-out

      &:disabled
        background-color $color-snow
        pointer-events none

      &:focus
        outline none

      &::ms-clear
        display none

      &:disabled
        pointer-events none

    &._multiline
      & ^[0]__input
        height auto
        padding 20px
        overflow auto
        resize none

      & ^[0]__icon
        top 25px
        transform translate3d(0, 0, 0)

    &._error &__input
      border-color $color-coral-reef

    &._valid &__input
      border-color $color-eton-blue

    &._floating
      & ^[0]__label
        position absolute
        top 18px
        left 0
        margin-bottom 0
        padding-left 20px

      & ^[0]__input
        padding-top 12px

      & textarea^[0]__input
        padding-top 25px

      &._active
        & ^[0]__label
          top 10px
          font-size 10px

    &__label
      position relative
      margin-bottom 7px
      cursor text
      font-size 14px
      line-height 1
      text-align left
      transition all $transition-time ease-in-out
      z-index 2

    &__error
      display block
      margin-top 7px
      color $color-coral-reef
      font-size 10px
</style>