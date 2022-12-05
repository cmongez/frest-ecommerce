<template>
  <header class="header d-flex justify-content-between align-items-center mt-3 mb-2">
    <router-link to="/" class="h2 logo m-0 d-flex justify-content-center align-items-center"
      >FREST <img class="beer ms-2" src="../assets/beer.png" alt=""
    /></router-link>
    <ProductSearcher />
    <div class="">
      <router-link to="/cart" class="mb-2 d-flex justify-content-center align-items-center"
        ><span v-if="cartItemCount" class="cartItemCount">{{ cartItemCount }}</span
        ><img class="cart" src="../assets/cart.png" alt=""
      /></router-link>
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
  font-weight: bold;
  vertical-align: middle;
}
.cart,
.beer {
  width: 28px;
}
.cartItemCount {
  color: black;
  font-size: 20px;
}
</style>