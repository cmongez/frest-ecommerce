<template>
  <div class="products container-fluid">
    <div v-if="home">HOLA</div>
    <div id="productsContainer" class="row d-flex wrap justify-content-evenly">
      <div v-if="getProducts.length === 0">No hay productos por ese nombre</div>
      <ProductCard v-for="(product, index) in home ? getNewArrivals : getProducts" :key="index" :product="product" />
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
  props: {
    home: {
      type: String,
    },
  },
  components: {
    ProductCard,
    ProductDetails,
  },
  computed: {
    ...mapGetters(['getProducts', 'getProduct', 'getNewArrivals']),
    ...mapState(['products']),
  },
  methods: {
    renderProducts() {
      if (this.$route.params.id) {
        this.$store.dispatch('getProductsByCategory', this.$route.params.id);
        return;
      }
      if (this.$route.params.id) {
        this.$store.dispatch('getProductsByCategory', this.$route.params.id);
        return;
      }

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