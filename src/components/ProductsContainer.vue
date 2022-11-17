<template>
  <div class="products container-fluid">
    <div id="productsContainer" class="row d-flex wrap justify-content-evenly">
      <div v-if="getProducts.length === 0">No hay productos por ese nombre</div>
      <ProductCard v-for="(product, index) in getProducts" :key="index" :product="product" />
      <ProductDetails :prod="getProduct" />
    </div>
    <div id="modalContainer"></div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import ProductDetails from '@/components/ProductDetails.vue';
import { mapGetters } from 'vuex';
import { mapState } from 'vuex';
export default {
  name: 'ProductsContainer',
  components: {
    ProductCard,
    ProductDetails,
  },
  computed: {
    ...mapGetters(['getProducts', 'getProduct']),
    ...mapState(['products']),
  },
  methods: {
    renderProducts() {
      this.$store.dispatch('getAllProducts');
    },
  },
  async created() {
    if (this.$store.state.searchValue == '') {
      await this.renderProducts();
    }
  },
};
</script>

<style>
</style>