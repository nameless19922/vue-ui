import Vue from 'vue';
import VeeValidate from 'vee-validate';
import ru from 'vee-validate/dist/locale/ru';

import * as rules from '../utils/validator-rules';
import { hasOwn } from '../common/utils';

for (const key in rules) {
  if (hasOwn(rules, key) && typeof rules[key] === 'function') {
    VeeValidate.Validator.extend(key, { validate: rules[key] });
  }
}

Vue.use(VeeValidate, {
  locale: 'ru',
  dictionary: { ru }
});