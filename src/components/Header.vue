<template>
  <header class="header row mt-3">
    <router-link to="/" class="w-50 h2 logo">FREST</router-link>
    <ProductSearcher />
    <div class="d-flex justify-content-end">
      <router-link to="/cart" class="btn btn-bsale bg-bsale text-white mb-2">{{ cartItemCount }} Carrito</router-link>
    </div>
  </header>
</template>

<script>
import ProductSearcher from '@/components/ProductSearcher.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  components: {
    ProductSearcher,
  },
  computed: {
    ...mapGetters(['cartItemCount']),
  },
};
</script>

<style scoped>
.logo {
  text-decoration: none;
  color: #fe6a00;
}
</style>