
<template>
  <div>
    <HeroBanner />
    <ProductsHome />
  </div>
</template>

<script>
import HeroBanner from '@/components/HeroBanner.vue';
import ProductsHome from '@/components/ProductsHome.vue';
export default {
  name: 'HomeView',
  components: {
    HeroBanner,
    ProductsHome,
  },
};
</script>

<style>
</style>
