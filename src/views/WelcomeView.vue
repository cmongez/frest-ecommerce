<template></template>

<script>
export default {
  name: 'WelcomeView',
  methods: {
    goHome() {
      this.$router.replace({ path: '/home' });
    },
  },
  mounted() {
    setTimeout(() => this.goHome(), 0);
  },
};
</script>

<style>
</style>