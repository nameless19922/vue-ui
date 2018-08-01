import { hasOwn, isNotEmptyString } from '@/common/utils';

export default {
  inject: ['$validator'],

  props: {
    rules: {
      type: String
    },

    messages: {
      type: String
    }
  },

  methods: {
    getter() {
      return this.value;
    },

    context() {
      return this;
    },

    validate(val) {
      if (isNotEmptyString(this.rules)) {
        this.$validator.validate(this.name, val, null);
      }
    },

    getErrorMessages(field) {
      const listMessages = this.messages.split('|');
      const partsNumber = 2;
      const result = {};

      result[this.name] = {};

      for (const item of listMessages) {
        const info = item.split(':');

        if (info.length === partsNumber && Object.prototype.hasOwnProperty.call(field.rules, info[0])) {
          result[this.name][info[0]] = info[1];
        }
      }

      return result;
    }
  },

  created() {
    const field = this.$validator.attach({
      scope: null,
      name: this.name,
      rules: this.rules,
      getter: this.getter,
      context: this.context
    });

    if (isNotEmptyString(this.messages)) {
      this.$validator.dictionary.merge({
        ru: {
          custom: this.getErrorMessages(field)
        }
      });
    }
  },

  destroyed() {
    this.$validator.detach(this.name);
  }
};