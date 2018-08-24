export default {
  mounted() {
    this.$emit('addControl', this);
  },

  beforeDestroy() {
    this.$emit('removedControl', this);
  }
};