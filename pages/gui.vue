<template>
  <div>
    <Header logo="white" />
    <Banner
      height="450"
      color="#2b2b51"
    >
      <div class="banner__title">Ui KIT</div>
    </Banner>
    <div class="gui">
      <div class="layout__container">
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
              <div class="gui__item-cell">
                <Button :loading="loading">After 10 secs loading is off</Button>
              </div>
            </div>
          </div>
        </div>
        <div class="gui__item">
          <div class="gui__item-header">FormControl</div>
          <div class="gui__item-content">
            <div class="gui__item-row">
              <div class="gui__item-cell" style="width: 48%; margin-right: 4%;">
                <FormControl placeholder="Simple Input" />
              </div>
              <div class="gui__item-cell" style="width: 48%;">
                <FormControl disabled placeholder="Simple Input disabled" />
              </div>
            </div>
            <div class="gui__item-row">
              <div class="gui__item-cell" style="width: 48%; margin-right: 4%;">
                <FormControl label="Input with label" />
              </div>
              <div class="gui__item-cell" style="width: 48%;">
                <FormControl label="Input with label disabled" disabled />
              </div>
            </div>
            <div class="gui__item-row">
              <div class="gui__item-cell" style="width: 48%; margin-right: 4%;">
                <FormControl label="Input with floating label" floatingLabel />
              </div>
              <div class="gui__item-cell" style="width: 48%;">
                <FormControl label="Input with floating label disabled" floatingLabel disabled />
              </div>
            </div>
            <div class="gui__item-row">
              <div class="gui__item-cell" style="width: 48%; margin-right: 4%;">
                <FormControl label="Simple textarea" multiLine :rows="5" />
              </div>
              <div class="gui__item-cell" style="width: 48%;">
                <FormControl placeholder="Simple textarea" multiLine :rows="5" />
              </div>
            </div>
            <div class="gui__item-row">
              <div class="gui__item-cell" style="width: 48%; margin-right: 4%;">
                <FormControl label="Textarea with floating label" multiLine :rows="5" floatingLabel />
              </div>
              <div class="gui__item-cell" style="width: 48%;">
                <FormControl label="Disabled Textarea" multiLine :rows="5" floatingLabel disabled />
              </div>
            </div>
            <div class="gui__item-row">
              <div class="gui__item-cell" style="width: 48%; margin-right: 4%;">
                <FormControl placeholder="Input with icon" icon="bell" />
              </div>
              <div class="gui__item-cell" style="width: 48%;">
                <FormControl icon="burger" floatingLabel>
                  Input with floating label and icon
                  <template slot="icon">
                    <Icon src="comment"></Icon>
                  </template>
                </FormControl>
              </div>
            </div>
            <div class="gui__item-row">
              <div class="gui__item-cell" style="width: 48%; margin-right: 4%;">
                <FormControl placeholder="Input with icon" icon="bell" multiLine :rows="5" />
              </div>
            </div>
          </div>
        </div>
        <div class="gui__item">
          <div class="gui__item-header">Select</div>
          <div class="gui__item-content">
            <div class="gui__item-row">
              <div class="gui__item-cell">
                <Select name="example" :options="['First', 'Second', 'Third']" />
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
            <div class="gui__item-row">
              <div class="gui__item-cell" style="width: 48%;">
                <Form>
                  <div class="form__line">
                    <FormControl
                      class="_big"
                      name="name"
                      rules="required"
                      messages="required:Введите имя"
                      label="Имя"
                      floatingLabel
                      v-model="name"
                    />
                  </div>
                  <div class="form__line">
                    <FormControl
                      class="_big"
                      name="email"
                      rules="required|email"
                      messages="required:Введите ваш email|email:Введите корректный email"
                      label="Email"
                      floatingLabel
                      v-model="email"
                    />
                  </div>
                  <div class="form__line">
                    <FormControl
                      class="_big"
                      name="phone"
                      rules="required|phone"
                      messages="required:Введите телефон|phone:Введите корректный телефон"
                      label="Телефон"
                      floatingLabel
                      v-model="phone"
                    />
                  </div>
                  <div class="form__line">
                    <Select
                      name="example"
                      rules="required"
                      messages="required:Выберите опцию"
                      floatingLabel
                      label="Тестовый селект"
                      :options="['First', 'Second', 'Third']"
                      v-model="example"
                    />
                  </div>
                  <div class="popup-feedback__form-submit form__submit">
                    <Button class="_block" type="submit">Отправить</Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div class="gui__item">
          <div class="gui__item-header">Popup</div>
          <div class="gui__item-content">
           <div class="gui__item-row _width-auto">
             <div class="gui__item-cell">
               <Popup name="modal">Basic modal!</Popup>
               <Button @click="openModal('modal')">Basic modal</Button>
             </div>
             <div class="gui__item-cell">
               <Popup name="modal 2" :clickToClose="false">Can't close by clicking backdrop</Popup>
               <Button @click="openModal('modal 2')">Can't close by clicking backdrop</Button>
             </div>
             <div class="gui__item-cell" >
               <Popup name="modal 3" :closeButton="false">No header close button</Popup>
               <Button @click="openModal('modal 3')">No header close button</Button>
             </div>
             <div class="gui__item-cell">
               <Popup name="modal 4" :clickToClose="false" :closeButton="false">Can't close at all. Reload Page.</Popup>
               <Button @click="openModal('modal 4')">Can't close at all.</Button>
             </div>
             <div class="gui__item-cell">
               <Button @click="showDynamicPopup({ title: 'Title', text: 'Text message' })">Dynamic message</Button>
             </div>
           </div>
          </div>
        </div>
        <div class="gui__item">
          <div class="gui__item-header">Preloader</div>
          <div class="gui__item-content">
            <div class="gui__item-row">
              <div class="gui__item-cell" style="width: 48%; margin-right: 4%;">
                <p>Example block. Example block. Example block. Example block. Example block</p>
                <Preloader />
              </div>
              <div class="gui__item-cell" style="width: 48%;">
                <p>Example block. Example block. Example block. Example block. Example block</p>
                <Preloader background="rgba(255, 255, 255, .7)" />
              </div>
            </div>
            <div class="gui__item-row">
              <div class="gui__item-cell" style="width: 48%; margin-right: 4%;">
                <p style="text-align: center; margin-bottom: 10px;">test content</p>
                <Preloader inline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import importDir from '@/assets/js/utils/import-dir';
  import { dynamicMessage } from '@/assets/js/utils/components';
  import { normalizeComponentPath, getComponentsList } from '@/assets/js/utils/helpers';

  export default {
    inject: ['showDynamicPopup'],

    components: importDir(
      'base',
      getComponentsList(require.context(`../components/base`, true, /\.vue$/))
    ),

    data: () => ({
      name: '',
      email: '',
      phone: '',
      example: null,
      agree: null,
      loading: true
    }),

    methods: {
      openModal(name) {
        this.$modal.show(name);
      },

      loadingState() {
        setTimeout(() => this.loading = false, 10000);
      }
    },

    mounted() {
      this.loadingState();
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
        display flex
        justify-content flex-start
        align-items flex-end

        &._width-auto ^[1]-cell
          width auto
          margin-right 30px

        &:not(:first-child)
          margin-top 45px

      &-cell
        width 16.666%
        position relative

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

  .banner
    &__container
      justify-content center

    &__title
      font-size 64px
      color: $color-white
      text-align center
</style>