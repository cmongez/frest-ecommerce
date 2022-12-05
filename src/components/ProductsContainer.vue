<template>
  <div class="products container-fluid">
    <div id="productsContainer" class="row d-flex wrap justify-content-evenly">
      <div v-if="info.length === 0">No hay productos por ese nombre</div>
      <ProductCard v-for="(product, index) in info" :key="index" :product="product" />
      <ProductDetails :prod="getProduct" />
    </div>

    <div id="modalContainer"></div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import ProductDetails from '@/components/ProductDetails.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'ProductsContainer',
  props: {
    info: {
      type: Array,
      required: true,
    },
  },
  components: {
    ProductCard,
    ProductDetails,
  },
  computed: {
    ...mapGetters(['getProduct']),
  },
  methods: {
    renderProducts() {
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