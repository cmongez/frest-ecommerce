
<template>
  <div>
    <h1>PRODUCTOS</h1>
    <ProductsContainer />
  </div>
</template>

<script>
import ProductsContainer from '@/components/ProductsContainer.vue';
export default {
  name: 'ProductsView',
  components: {
    ProductsContainer,
  },
};
</script>
