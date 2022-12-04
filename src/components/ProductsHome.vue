<template>
  <div class="mt-2">
    <h3>Mas vendidos</h3>
    <ProductsContainer home="home" />
  </div>
</template>

<script>
import ProductsContainer from '@/components/ProductsContainer.vue';
export default {
  name: 'ProductsHome',
  components: {
    ProductsContainer,
  },
};
</script>

<style>
</style>