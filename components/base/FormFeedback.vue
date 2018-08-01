<template>
  <Form>
    <div class="form__line">
      <FormControl
        class="_big"
        name="name"
        rules="required"
        messages="required:Введите имя"
        placeholder="Введите имя"
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
        placeholder="Введите email"
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
        placeholder="Введите телефон"
        messages="required:Введите телефон|phone:Введите корректный телефон"
        label="Телефон"
        floatingLabel
        v-model="phone"
      />
    </div>
    <div class="form__line">
      <FormCheckbox
        name="agree"
        rules="required"
        messages="required:Необходимо подтвердить согласне"
        label="Согласие на обработку персональных данных"
        v-model="agree"
      />
    </div>
    <div class="popup-feedback__form-submit form__submit">
      <Button class="_block" type="submit">Отправить</Button>
    </div>
  </Form>
</template>

<script>
  import Form from '@/components/base/Form';
  import FormControl from '@/components/base/FormControl';
  import FormCheckbox from '@/components/base/FormCheckbox';
  import Button from '@/components/base/Button';

  export default {
    name: 'FormFeedback',

    extends: Form,

    components: { Button, Form, FormControl, FormCheckbox },

    data() {
      return {
        name: '',
        email: '',
        phone: '',
        agree: null
      }
    },

    methods: {
      onSubmit() {

      }
    }
  }
</script>

<style lang="stylus">

</style>