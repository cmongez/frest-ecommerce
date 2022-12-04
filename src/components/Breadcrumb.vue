<template>
  <div class="d-flex">
    <p class="me-2 dash">Home</p>
    <span> > {{ ruta }}</span>
    <p></p>
  </div>
</template>
<script>
export default {
  name: 'Breadcrumb',
  computed: {
    ruta() {
      return this.$route.name;
    },
  },
};
</script>
<style scoped>
.dash {
  color: blue;
}
</style>