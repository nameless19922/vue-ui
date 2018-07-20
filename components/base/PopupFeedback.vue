<template>
  <Popup :maxWidth="670" title="popup-feedback">
    <div class="popup-feedback__header">
      <div class="popup-feedback__title">Свяжитесь с&nbsp;финансовым советником</div>
      <div class="popup-feedback__desc">Заполните форму, и мы&nbsp;перезвоним вам в&nbsp;ближайшее время</div>
    </div>
    <div class="popup-feedback__form">
      <Form>
        <div class="form__line">
          <FormControl
            class="_big"
            :class="{ '_error': $v.name.$error, '_valid': $v.name.$dirty && !$v.name.$invalid }"
            placeholder="Введите имя"
            label="Имя"
            floatingLabel
            v-model="$v.name.$model"
          />
        </div>
        <div class="form__line">
          <FormControl
            class="_big"
            :class="{ '_error': $v.email.$error, '_valid': $v.email.$dirty && !$v.email.$invalid }"
            placeholder="Введите email"
            label="Email"
            floatingLabel
            v-model="$v.email.$model"
          />
        </div>
        <div class="form__line">
          <FormControl
            class="_big"
            :class="{ '_error': $v.phone.$error, '_valid': $v.phone.$dirty && !$v.phone.$invalid }"
            placeholder="Введите телефон"
            label="Телефон"
            floatingLabel
            v-model="$v.phone.$model"
          />
        </div>
        <div class="popup-feedback__form-submit form__submit">
          <Button class="_block" @click="onSubmit">Отправить</Button>
        </div>
      </Form>
    </div>
  </Popup>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators';

  import Popup from '@/components/base/Popup';
  import Form from '@/components/base/Form';
  import FormControl from '@/components/base/FormControl';
  import Button from '@/components/base/Button';

  export default {
    name: 'PopupFeedback',

    extends: Popup,

    components: { Popup, Button, Form, FormControl },

    data() {
      return {
        name: '',
        email: '',
        phone: ''
      }
    },

    validations: {
      name: {
        required
      },

      email: {
        required,
        email
      },

      phone: {
        required
      }
    },

    methods: {
      onSubmit() {
        const { $touch, $invalid } = this.$v;

        $touch();

        if (!$invalid) {
          console.log('ok');
        } else {
          this.$modal.show('popup-message', { title: 'Ошибка', text: 'Текст какой-то' });
        }
      }
    }
  }
</script>

<style lang="stylus">
  .popup-feedback
    padding 70px 0 60px
    background-color $color-glitter

    &__header
      padding 0 10%
      margin-bottom 40px
      text-align center

    &__title
      margin-bottom 10px
      color $color-jet
      font-size 24px
      font-weight 300
      line-height 1.375

    &__desc
      font-size 14px
      line-height 1.5

    &__form
      padding 0 15%

      &-submit
        max-width 225px
        margin 30px auto 0

</style>