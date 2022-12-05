<template>
  <div class="products container-fluid">
    <Loader v-if="!info.length" />
    <div v-else id="productsContainer" class="row d-flex wrap justify-content-evenly">
      <div v-if="info.length === 0">No hay productos por ese nombre</div>
      <ProductCard v-for="(product, index) in info" :key="index" :product="product" />
    </div>

    <div id="modalContainer"></div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import Loader from '@/components/Loader.vue';
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
    Loader,
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