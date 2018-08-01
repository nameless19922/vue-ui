<template>
  <div class="gui">
    <div class="layout__container">

      <div class="gui__item">
        <div class="gui__item-header">Button</div>
        <div class="gui__item-content">
          <div class="gui__item-examples">
            <div class="gui__item-cell">
              <Button>Base Button</Button>
            </div>
          </div>
          <div class="gui__item-info">

          </div>
        </div>
      </div>
      <div class="gui__item">
        <div class="gui__item-header">Icon</div>
        <div class="gui__item-content">
          <div class="gui__item-cell">
            <Button>Base Button</Button>
          </div>
        </div>
      </div>
      <div class="gui__item">
        <div class="gui__item-header">FormControl</div>
        <div class="gui__item-content">
          <div class="gui__item-cell">
            <Button>Base Button</Button>
          </div>
        </div>
      </div>
      <div class="gui__item">
        <div class="gui__item-header">FormCheckbox</div>
        <div class="gui__item-content">
          <div class="gui__item-cell">
            <Button>Base Button</Button>
          </div>
        </div>
      </div>
      <div class="gui__item">
        <div class="gui__item-header">Form</div>
        <div class="gui__item-content">
          <div class="gui__item-cell">
            <Button>Base Button</Button>
          </div>
        </div>
      </div>
      <div class="gui__item">
        <div class="gui__item-header">Popup</div>
        <div class="gui__item-content">
          <div class="gui__item-cell">
            <Button>Base Button</Button>
          </div>
        </div>
      </div>
      <div class="gui__item">
        <div class="gui__item-header">Preloader</div>
        <div class="gui__item-content">
          <div class="gui__item-cell">
            <Button>Base Button</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@/components/base/Button';

  export default {
    components: {
      Button
    }
  }
</script>

<style lang="stylus">
  .gui
    padding 60px 0 120px
    background-color $color-white-smoke

    &__item
      &:not(:first-child)
        margin-top 65px

      &-header
        margin 0
        color $color-brandeis-blue
        font-weight 300
        font-size 34px
        line-height 1

      &-content
        margin-top 30px
        padding 30px
        background-color $color-isabelline
        border-radius 3px
        box-shadow 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)

      &-info
        margin-top 30px
        padding 30px
        background-color $color-snow
</style>