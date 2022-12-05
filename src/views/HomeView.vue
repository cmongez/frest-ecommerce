
<template>
  <div>
    <HeroBanner />

    <ProductsHome title="Ofertas" :info="getSales" />
    <ProductsHome title="Agregados recientemente" :info="getNewArrivals" secondary />

    <ProductsHome title="Mas baratos" :info="getCheaperProducts" />
  </div>
</template>

<script>
import HeroBanner from '@/components/HeroBanner.vue';
import ProductsHome from '@/components/ProductsHome.vue';

import { mapGetters } from 'vuex';
export default {
  name: 'HomeView',
  components: {
    HeroBanner,
    ProductsHome,
  },
  computed: {
    ...mapGetters(['getProducts', 'getNewArrivals', 'getSales', 'getCheaperProducts']),
  },
  methods: {
    renderProducts() {
      this.$store.dispatch('getAllProducts');
    },
  },

  async created() {
    await this.renderProducts();
  },
};
</script>

<style>
</style>
