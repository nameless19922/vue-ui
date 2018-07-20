<template>
  <span class="icon" v-once v-html="src" @click="onClick"></span>
</template>

<script>
  import clickable from '@/assets/js/mixins/clickable';

  const props = {
    src: {
      type: String,
      required: true
    }
  };

  export default {
    name: 'Icon',

    mixins: [clickable],

    props
  }
</script>

<style lang="stylus">
  .icon
    display block
    width 100%
    height 100%
</style>