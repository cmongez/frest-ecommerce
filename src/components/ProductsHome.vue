<template>
  <div class="products-home" :class="{ secondary }">
    <div class="d-flex justify-content-between align-items-center">
      <h2 :class="secondary ? ['text-white pt-2 ps-3'] : 'pt-2 ps-3'">{{ title }}</h2>

      <router-link to="/products" :class="secondary ? 'text-white me-3 home-button ' : 'text-dark me-3 home-button'"
        ><img :src="secondary ? require('../assets/arrow.svg') : require('../assets/arrow-black.svg')" />ir a
        productos</router-link
      >
    </div>
    <ProductsContainer :info="info" />
  </div>
</template>

<script>
import ProductsContainer from '@/components/ProductsContainer.vue';
export default {
  name: 'ProductsHome',
  props: {
    info: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    secondary: {
      type: Boolean,
    },
  },
  components: {
    ProductsContainer,
  },
};
</script>

<style lang="scss" scoped>
.secondary {
  background-color: #fe6a00;
  border-radius: 0.25rem;
}
.home-button {
  line-height: 18px;
}
</style>