<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ prod.name }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="card-img-container d-flex justify-content-center">
            <img
              v-if="product.url_image == '' || product.url_image == null"
              src="../assets/img-not-available.png"
              class="card-img-top"
              alt="..."
            /><img v-else :src="product.url_image" class="card-img-top" alt="..." />
          </div>

          <div v-if="product.discount > 0" class="card-price d-flex justify-content-between">
            <div class="d-inline">
              Precio:<span class="old-price"> {{ product.price }}</span>
              <span>{{ ((100 - product.discount) * product.price) / 100 }} </span>
            </div>
            <span class="sale">OFERTA -{{ product.discount }}% </span>
          </div>

          <div v-else class="card-price">Precio: {{ product.price }}</div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Agregar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: {
    prod: {
      type: Object,
    },
  },
  computed: {
    product() {
      return this.$store.getters.getProduct;
    },
  },
};
</script>

<style scoped>
.card-img-top {
  max-width: 200px;
}
</style>