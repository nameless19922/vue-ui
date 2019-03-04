<template>
  <div class="banner" :style="style">
    <div class="layout__container banner__container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { convertToUnit } from '@/utils/helpers';

  const props = {
    image: String,

    color: String,

    height: {
      type: [String, Number],
      default: 'auto'
    },

    position: {
      type: String,
      default: '50% 50%'
    }
  };

  export default {
    name: 'Banner',

    props,

    computed: {
      style() {
        const style = {};

        if (this.color) {
          style.backgroundColor = this.color;
        }

        if (this.image) {
          style.background = `url("${this.image}") center center / cover no-repeat`;
        }

        if (this.position) {
          style.backgroundPosition = this.position;
        }

        if (this.height) {
          style.height = convertToUnit(this.height);
        }

        return style;
      }
    }
  }
</script>

<style lang="stylus">
  .banner
    background-size cover

    &__container
      display flex
      align-items center
      height 100%
</style>