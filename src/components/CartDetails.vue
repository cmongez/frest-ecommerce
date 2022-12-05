<template>
  <div>
    <div v-if="!cart.length">
      <h2 class="mb-2">Carrito</h2>
      <p>Su carrito esta vacio</p>
      <router-link to="/products" class="btn btn-bsale bg-bsale text-white">ir a productos</router-link>
    </div>
    <div v-else>
      <h2 class="mb-2">Carrito</h2>
      <div>
        <table class="table">
          <thead class="d-none">
            <tr>
              <th scope="col">Prod</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Cant</th>
              <th scope="col">Subtotal</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="shadow-sm rounded" v-for="(item, index) in cart" :key="index">
              <td class="d-flex justify-content-start">
                <img
                  v-if="item.product.url_image == '' || item.product.url_image == null"
                  src="../assets/img-not-available.png"
                  class="cart-img p-1"
                  alt="..."
                /><img v-else :src="item.product.url_image" class="cart-img p-1" alt="..." />
                <div class="d-flex flex-column justify-content-center">
                  <span>{{ item.product.name }}</span
                  ><span>{{ item.product.price }}$</span>
                </div>
              </td>
              <td>
                <div class="d-sm-flex justify-content-around align-items-center">
                  <div>
                    <button type="button" class="btn text-danger fw-bold p-1" @click="subtractOneProduct(item.product)">
                      -</button
                    >{{ item.quantity
                    }}<button type="button" class="btn text-success fw-bold p-1" @click="addToCart(item.product)">
                      +
                    </button>
                  </div>
                  <div>{{ item.quantity * item.product.price }}$</div>
                </div>
              </td>

              <td class="">
                <button class="btn text-danger fw-bold p-1" @click="removeProductFromCart(item.product)">X</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <button type="button" class="btn mx-1 btn-danger" @click="removeAllProductsFromCart()">Vaciar</button>

        <div class="d-flex align-items-center">
          <p class="m-0">TOTAL: {{ cartTotalPrice }}$</p>
          <button type="button" class="btn mx-1 btn-success" @click="buyAll()">Pagar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'CartDetails',
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    ...mapGetters(['cartTotalPrice']),
  },
  methods: {
    removeProductFromCart(product) {
      this.$store.dispatch('removeProductFromCart', product);
    },
    addToCart(product) {
      this.$store.dispatch('addProductToCart', {
        product: product,
        quantity: 1,
      });
    },
    subtractOneProduct(product) {
      this.$store.dispatch('subtractOneProduct', product);
    },
    removeAllProductsFromCart() {
      this.$store.dispatch('removeAllProductsFromCart');
    },
    buyAll() {
      if (confirm('¿Deseas comprar todo?')) {
        this.$store.dispatch('removeAllProductsFromCart');
        alert('¡Gracias por su compra!');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-img {
  min-width: 60px;
  max-width: 60px;
  max-height: 60px;
}
td {
  vertical-align: middle;
}
th,
td {
  padding: 0px 0px 0px 8px;
}
</style>>

