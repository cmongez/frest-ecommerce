import ProductCounter from '@/components/ProductCounter.vue';
<template>
  <div>
    <h2>{{ product.name }}</h2>

    <div class="d-flex flex-column">
      <div class="card__img">
        <img
          v-if="product.url_image == '' || product.url_image == null"
          src="../assets/img-not-available.png"
          class="card__img__item"
          alt="..."
        /><img v-else :src="product.url_image" class="card__img__item" alt="..." />
      </div>
      <div class="d-flexflex-column justify-content-end">
        <div v-if="product.discount > 0" class="card-price d-flex justify-content-between align-items-center">
          <div class="d-flex">
            <span class="text-dark card-price">${{ ((100 - product.discount) * product.price) / 100 }} </span>
            <span class="old-price me-1">${{ product.price }} </span>
          </div>
          <span class="sale">OFERTA -{{ product.discount }}% </span>
        </div>

        <div v-else class="card-price">${{ product.price }}</div>

        <div class="counter-detail mx-auto mt-2"><ProductCounter :product="product" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCounter from '@/components/ProductCounter.vue';

export default {
  name: 'ProductDetail',
  props: {
    prod: {
      type: Object,
    },
  },
  components: {
    ProductCounter,
  },
  computed: {
    product() {
      if (this.prod) console.log();
      return this.$store.getters.getProduct;
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
  }
}
.counter-detail {
  max-width: 300px;
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


