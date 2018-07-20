<template>
  <div class="banner">
    <div class="layout__container banner__container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Banner'
  }
</script>

<style lang="stylus">
  .banner
    height 450px
    background-color $color-black

    &__container
      display flex
      align-items center
      height 100%
</style>