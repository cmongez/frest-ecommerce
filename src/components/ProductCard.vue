import ProductCard from '@/components/ProductCard.vue';
<template>
  <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
    <div class="card h-100">
      <div class="card-img-container">
        <img
          v-if="product.url_image == '' || product.url_image == null"
          src="../assets/img-not-available.png"
          class="card-img-top"
          alt="..."
        /><img v-else :src="product.url_image" class="card-img-top" alt="..." />
      </div>
      <div class="card-body d-flex flex-column justify-content-end">
        <p class="card-title">{{ product.name }}</p>

        <div v-if="product.discount > 0" class="card-price d-flex justify-content-between">
          <div class="d-inline">
            <span class="old-price">{{ product.price }}</span>
            <span>{{ ((100 - product.discount) * product.price) / 100 }} </span>
          </div>
          <span class="sale">OFERTA -{{ product.discount }}% </span>
        </div>

        <div v-else class="card-price">{{ product.price }}</div>

        <div class="d-flex justify-content-between">
          <a type="button" class="btn btn-bsale bg-bsale text-white" @click="addToCart()"> Comprar </a>
          <a
            type="button"
            class="btn btn-bsale bg-bsale text-white"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="openDetails()"
          >
            Detalles
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDetails from '@/components/ProductDetails.vue';
export default {
  name: 'ProductCard',
  components: {
    ProductDetails,
  },
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addProductToCart', {
        product: this.product,
        quantity: 1,
      });
    },
    openDetails() {
      this.$store.dispatch('openDetails', this.product);
    },
  },
};
</script>

<style>
</style>