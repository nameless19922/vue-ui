<script>
  import Button from '@/components/base/Button';

  export default {
    name: 'OfzButton',

    extends: Button
  };
</script>

<style lang="stylus">
  .btn
    border-radius 100px

    &::before
      $cat = 30px
      content ''
      position absolute
      z-index -1
      top 50%
      right - $cat
      width $cat
      height $cat
      margin -15px -1px 0 0
      background-color $color-space-cadet
      transform-origin 100% 50%
      transform scaleY(2)
      transition transform .3s,opacity .3s cubic-bezier(.7,0,.9,1)

    &:hover::before
      transform scale3d(13, 13, 1)
</style>