<template>
  <div
    class="icon"
    :class="classes"
    @click="onClick"
    :style="{ width: `${size}px` }"
  >
    <div
      class="icon__container"
      v-html="require(`@/assets/images/svg/${src}.svg`)"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import clickable from '@/utils/mixins/clickable';

  const props = {
    src: {
      type: String,
      required: true
    },

    size: {
      type: Number,
      default: 16
    },

    color: {
      type: String,
      default: '#000'
    },

    right: {
      type: Boolean
    },

    left: {
      type: Boolean
    }
  };

  export default {
    name: 'Icon',

    mixins: [clickable],

    props,

    computed: {
      classes() {
        return [
          { '_left': this.left },
          { '_right': this.right }
        ];
      }
    },

    mounted() {
      this.$el.querySelector('svg').setAttribute('fill', this.color);
    }
  }
</script>

<style lang="stylus">
  $offset = 9px

  .icon
    // ie9-11 scaling fix
    position relative

    &._left
      top 1px
      margin-right $offset

    &._right
      top 1px
      margin-left $offset

    &__container
      width 100%
      height 0
      position relative
      padding-bottom 92%

      svg
        width 100%
        height 100%
        position absolute
        left 0
        top 0
</style>