<template>
  <div>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cant</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cart" :key="index">
            <td><img class="cart-img" :src="item.product.url_image" alt="" /></td>
            <td>{{ item.product.name }}</td>
            <td>{{ item.product.price }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.quantity * item.product.price }}</td>
            <td class="">
              <button type="button" class="btn btn-secondary" @click="subtractOneProduct(item.product)">-</button>
              <button type="button" class="btn btn-success" @click="addToCart(item.product)">+</button>
              <button class="btn btn-danger" @click="removeProductFromCart(item.product)">X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-flex justify-content-between">
      <p>Total a pagar: {{ cartTotalPrice }}</p>
      <div>
        <button type="button" class="btn mx-1 btn-danger" @click="removeAllProductsFromCart()">Vaciar Carrito</button>

        <button type="button" class="btn mx-1 btn-success" @click="buyAll()">Pagar</button>
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
  max-width: 70px;
}
td {
  vertical-align: middle;
}
</style>>

