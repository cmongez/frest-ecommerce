
<template>
  <div>
    <h1>PRODUCTOS</h1>
    <ProductsContainer :info="getProducts" />
  </div>
</template>

<script>
import ProductsContainer from '@/components/ProductsContainer.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'ProductsView',
  components: {
    ProductsContainer,
  },
  computed: {
    ...mapGetters(['getProducts']),
  },
};
</script>
