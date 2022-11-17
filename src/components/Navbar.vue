<template>
  <nav class="nav navbar navbar-expand-lg navbar-dark bg-bsale mb-4">
    <div class="nav__container container-fluid">
      <a class="navbar-brand d-md-none nav__title text-white">Categorias</a>
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
            <a class="nav-link text-white" @click="getAllProducts()"> todos los productos </a>
          </li>
          <li v-for="(item, index) in categories" :key="index" class="nav-item btn-nav">
            <a
              class="nav-link text-white"
              @click="getProductsByCategory(item.id), shareData(item.name)"
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
import { mapState } from 'vuex';
export default {
  name: 'Navbar',
  data() {
    return {};
  },

  computed: {
    ...mapGetters(['getCategories']),
    ...mapState(['categories']),
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
      console.log(path);
      if (this.$route.name !== path) {
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