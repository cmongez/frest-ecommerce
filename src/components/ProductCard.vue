import ProductCard from '@/components/ProductCard.vue';
<template>
  <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
    <div class="card d-flex h-100">
      <div class="card__img">
        <img
          v-if="product.url_image == '' || product.url_image == null"
          src="../assets/img-not-available.png"
          class="card__img__item"
          alt="..."
        /><img v-else :src="product.url_image" class="card__img__item" alt="..." />
      </div>
      <div class="card-body d-flex flex-column justify-content-end">
        <p class="card-title">{{ product.name }}</p>

        <div v-if="product.discount > 0" class="card-price d-flex justify-content-between align-items-center">
          <div class="d-flex flex-column">
            <span class="old-price me-1">${{ product.price }} </span>
            <span class="text-dark">${{ ((100 - product.discount) * product.price) / 100 }} </span>
          </div>
          <span class="sale">OFERTA -{{ product.discount }}% </span>
        </div>

        <div v-else class="card-price">${{ product.price }}</div>

        <!-- <div class="d-flex justify-content-between">
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
        </div> -->
        <ProductCounter :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductDetails from '@/components/ProductDetails.vue';
import ProductCounter from '@/components/ProductCounter.vue';

export default {
  name: 'ProductCard',
  components: {
    ProductDetails,
    ProductCounter,
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

<style lang="scss" scoped>
.card {
  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    &__item {
      max-height: 230px;
      max-width: 100%;
    }
  }
}
.card-price {
  font-size: 18px;
}
.old-price {
  color: #999;
  font-size: 12px;
  font-weight: 400;
  text-decoration: line-through;
  margin-left: 3px;
  display: inline-block;
}
</style>