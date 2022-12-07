<template>
  <div class="item-count d-flex justify-content-between align-items-center">
    <button class="btn text-danger fw-bold p-1" @click="handleDecrease()">-</button>
    {{ counter }}
    <button class="btn text-success fw-bold p-1" @click="handleIncrease()">+</button>

    <button class="btn btn-bsale bg-bsale text-white" @click="addToCart()">Agregar</button>
  </div>
</template>

<script>
export default {
  name: 'ProductCounter',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    handleDecrease() {
      if (this.counter > 0) {
        this.counter--;
      }
    },
    handleIncrease() {
      this.counter++;
    },

    addToCart() {
      if (this.counter) {
        this.$store.dispatch('addProductToCart', {
          product: this.product,
          quantity: this.counter,
        });
        this.counter = 0;
      }
    },
  },
};
</script>

<style>
</style>




