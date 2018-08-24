<template>
  <section class="footer">
    <div class="layout__container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="stylus">
  .footer
    padding 60px 0
    font-size 11px

    p:not(:first-child)
      margin-top 10px

</style>