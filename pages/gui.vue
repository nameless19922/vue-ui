<template>
  <div class="gui">
    <div class="layout__container">

      <div class="gui__item">
        <div class="gui__item-header">Button</div>
        <div class="gui__item-content">
          <div class="gui__item-row _width-auto">
            <div class="gui__item-cell">
              <Button>Base Button</Button>
            </div>
            <div class="gui__item-cell">
              <Button>
                Base Button with Icon
                <Icon src="bell" color="#fff" right></Icon>
              </Button>
            </div>
            <div class="gui__item-cell">
              <Button>
                <Icon src="burger" color="#fff" left></Icon>
                Base Button with Icon
              </Button>
            </div>
            <div class="gui__item-cell">
              <Button>
                <Icon src="bell" color="#fff" :size="25"></Icon>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div class="gui__item">
        <div class="gui__item-header">Icon</div>
        <div class="gui__item-content">
          <div class="gui__item-row">
            <div class="gui__item-cell">
              <Icon src="comment" />
            </div>
            <div class="gui__item-cell">
              <Icon src="burger" />
            </div>
            <div class="gui__item-cell">
              <Icon src="bell" />
            </div>
            <div class="gui__item-cell">
              <Icon src="comment" color="#f77" />
            </div>
            <div class="gui__item-cell">
              <Icon src="burger" color="#f77" />
            </div>
            <div class="gui__item-cell">
              <Icon src="bell" color="#f77" />
            </div>
          </div>
          <div class="gui__item-row">
            <div class="gui__item-cell">
              <Icon src="comment" :size="24" />
            </div>
            <div class="gui__item-cell">
              <Icon src="burger" :size="24" />
            </div>
            <div class="gui__item-cell">
              <Icon src="bell" :size="24" />
            </div>
            <div class="gui__item-cell">
              <Icon src="comment" :size="24" color="#0073f1" />
            </div>
            <div class="gui__item-cell">
              <Icon src="burger" :size="24" color="#0073f1" />
            </div>
            <div class="gui__item-cell">
              <Icon src="bell" :size="24" color="#0073f1" />
            </div>
          </div>
          <div class="gui__item-row">
            <div class="gui__item-cell">
              <Icon src="comment" :size="32" />
            </div>
            <div class="gui__item-cell">
              <Icon src="burger" :size="32" />
            </div>
            <div class="gui__item-cell">
              <Icon src="bell" :size="32" />
            </div>
            <div class="gui__item-cell">
              <Icon src="comment" :size="32" color="#999" />
            </div>
            <div class="gui__item-cell">
              <Icon src="burger" :size="32" color="#999" />
            </div>
            <div class="gui__item-cell">
              <Icon src="bell" :size="32" color="#999" />
            </div>
          </div>
        </div>
      </div>
      <div class="gui__item">
        <div class="gui__item-header">FormControl</div>
        <div class="gui__item-content">
          <div class="gui__item-row">
            <div class="gui__item-cell" style="width: 40%;">
              <FormControl placeholder="Simple Input" />
            </div>
          </div>
          <div class="gui__item-row">
            <div class="gui__item-cell" style="width: 40%;">
              <FormControl disabled placeholder="Simple Input disabled" />
            </div>
          </div>
          <div class="gui__item-row">
            <div class="gui__item-cell" style="width: 40%;">
              <FormControl label="Input with label" />
            </div>
          </div>
          <div class="gui__item-row">
            <div class="gui__item-cell" style="width: 40%;">
              <FormControl label="Input with floating label" floatingLabel />
            </div>
          </div>
          <div class="gui__item-row">
            <div class="gui__item-cell" style="width: 40%;">
              <FormControl label="Input with floating label disabled" floatingLabel disabled />
            </div>
          </div>
          <div class="gui__item-row">
            <div class="gui__item-cell" style="width: 40%;">
              <FormControl label="Simple textarea" multiLine :rows="5" />
            </div>
          </div>
          <div class="gui__item-row">
            <div class="gui__item-cell" style="width: 40%;">
              <FormControl label="Textarea with floating label" multiLine :rows="5" floatingLabel />
            </div>
          </div>
          <div class="gui__item-row">
            <div class="gui__item-cell" style="width: 40%;">
              <FormControl label="Disabled Textarea" multiLine :rows="3" floatingLabel disabled />
            </div>
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
          <div class="gui__item-row">
            <div class="gui__item-cell">
              <p>Example block. Example block. Example block. Example block. Example block</p>
              <Preloader />
            </div>
            <div class="gui__item-cell">
              <p>Example block. Example block. Example block. Example block. Example block</p>
              <Preloader background="rgba(255, 255, 255, .7)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@/components/base/Button';
  import Icon from '@/components/base/Icon';
  import Preloader from '@/components/base/Preloader';
  import FormControl from '@/components/base/FormControl';

  export default {
    components: {
      Button, Icon, Preloader, FormControl
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

      &-row
        &._width-auto ^[1]-cell
          width auto
          margin-right 30px

        &:not(:first-child)
          margin-top 45px

      &-cell
        display inline-block
        width 16.666%
        position relative
        vertical-align middle

        .icon
          margin 0 auto

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