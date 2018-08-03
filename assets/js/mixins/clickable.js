export default {
  methods: {
    onClick(e) {
      this.$emit('click', e);
    }
  }
};