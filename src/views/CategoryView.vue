
<template>
  <div>
    <h1>{{ title ? title : getActualCategory }}</h1>
    <ProductsContainer :info="getProducts" />
  </div>
</template>

<script>
import ProductsContainer from '@/components/ProductsContainer.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'HomeView',
  components: {
    ProductsContainer,
  },
  computed: {
    title() {
      const title = this.$route.params.data ? this.$route.params.data : null;
      return title;
    },
    ...mapGetters(['getProducts', 'getActualCategory']),
  },
};
</script>
