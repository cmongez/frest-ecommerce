<template>
  <nav class="nav navbar navbar-expand-lg navbar-dark bg-bsale mb-4">
    <div class="nav__container container-fluid">
      <a class="navbar-brand d-lg-none nav__title text-white">Categorias</a>
      <button
        class="navbar-toggler nav__button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul id="navCategories" class="text-center navbar-nav mx-auto align-items-center h5">
          <li class="nav-item btn-nav">
            <router-link to="/products" class="nav-link text-white" @click="getAllProducts()">
              Todos los productos
            </router-link>
          </li>
          <li v-for="(item, index) in getCategories" :key="index" class="nav-item btn-nav">
            <a
              class="nav-link text-white"
              @click="getProductsByCategory(item.id), shareData(item.id)"
              id="${category.id}"
              >{{ item.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  data() {
    return {};
  },

  computed: {
    ...mapGetters(['getCategories']),
  },
  methods: {
    renderNavbar() {
      this.$store.dispatch('getAllCategories');
    },
    getProductsByCategory(id) {
      this.$store.dispatch('getProductsByCategory', id);
    },
    getAllProducts() {
      this.$store.dispatch('getAllProducts');
    },
    shareData(path) {
      if (this.$route.params.id !== path) {
        this.$router.push({
          name: 'category',
          params: { datos: path, id: path, meta: 'hola' },
        });
      }
    },
  },
  async created() {
    await this.renderNavbar();
  },
};
</script>

<style>
</style>