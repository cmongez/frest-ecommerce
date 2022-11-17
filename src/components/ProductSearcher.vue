<template>
  <div class="input-group input-group-sm mb-3 w-50">
    <input
      @keyup="searchProducts()"
      type="text"
      id="inputSearch"
      placeholder="Buscar..."
      class="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-sm"
      v-model="product"
    />

    <router-link to="/home"
      ><input
        @click="searchProducts()"
        type="button"
        class="input-group-text btn-bsale bg-bsale text-white"
        value="Buscar"
    /></router-link>
  </div>
</template>

<script>
export default {
  name: 'ProductSearcher',
  data() {
    return {
      product: '',
    };
  },
  methods: {
    searchProducts() {
      this.$store.dispatch('searchProducts', this.product);
    },
  },
};
</script>

<style>
</style>