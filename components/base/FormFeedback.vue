<template>
  <Form :actions="callbacks" @addControl="alert('asd')">
    <div class="form__line">
      <FormControl
        class="_big"
        name="name"
        rules="required"
        messages="required:Введите имя"
        label="Имя"
        floatingLabel
        v-model="form.name"
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
        v-model="form.email"
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
        :mask="{ mask: '+7 999 999-99-99', showMaskOnHover: false }"
        v-model="form.phone"
      />
    </div>
    <div class="form__line">
      <FormCheckbox
        name="agree"
        rules="required"
        messages="required:Необходимо подтвердить согласне"
        label="Согласие на обработку персональных данных"
        v-model="form.agree"
      />
    </div>
    <div class="popup-feedback__form-submit form__submit">
      <Button class="_block" type="submit" :loading="processLoading">Отправить</Button>
    </div>
  </Form>
</template>

<script>
  import Form from '@/components/base/Form';
  import FormControl from '@/components/base/FormControl';
  import FormCheckbox from '@/components/base/FormCheckbox';
  import Button from '@/components/base/Button';
  import { dynamicMessage } from '@/assets/js/utils/components';
  import FeedbackService from '@/assets/js/services/feedback-service';

  export default {
    name: 'FormFeedback',

    inject: ['showDynamicPopup'],

    extends: Form,

    components: { Button, Form, FormControl, FormCheckbox },

    data() {
      return {
        form: {
          name: '',
          email: '',
          phone: '',
          agree: null,
        },

        processLoading: false,

        callbacks: {
          success: async () => {
            this.processLoading = true;

            try {
              const response = await new FeedbackService().get();

              if (response.status) {
                this.showDynamicPopup({ title: 'Спасибо!', text: 'Мы перезвоним вам в ближайшее время' });
              } else {
                throw new Error('Incorrect status');
              }
            } catch (exc) {
              console.error(exc);
              this.showDynamicPopup({ title: 'Ошибка', text: 'Попробуйте пожалуйста пожалуйста' });
            } finally {
              this.processLoading = false;
            }
          }
        }
      }
    }
  }
</script>

<style lang="stylus">

</style>