import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    URL: 'https://bsalebackend-production-47f1.up.railway.app',
    categories: [],
    actualCategoryId: 0,
    products: [],
    product: {},
    cart: [],
    searchValue: '',
  },
  getters: {
    getCategories(state) {
      state.categories.map((item) => {
        const firstLetter = item.name.charAt(0);

        const firstLetterCap = firstLetter.toUpperCase();

        const remainingLetters = item.name.slice(1);

        const capitalizedWord = firstLetterCap + remainingLetters;
        item.name = capitalizedWord;
      });

      return state.categories;
    },
    getActualCategory(state) {
      const category = state.categories.find((item) => item.id == state.actualCategoryId);

      return category ? category.name : category;
    },
    getProducts(state) {
      return state.products;
    },
    getProduct(state) {
      return state.product;
    },
    getNewArrivals(state) {
      const reverse = [...state.products].reverse();
      const newArrivals = reverse.slice(0, 4);

      return newArrivals;
    },
    getSales(state) {
      const sales = state.products.filter((item) => item.discount > 0);
      const firstSales = sales.slice(0, 4);

      return firstSales;
    },
    getCheaperProducts(state) {
      const cheaperProducts = [...state.products];
      console.log();
      cheaperProducts.sort((a, b) => {
        if (a.price == b.price) {
          return 0;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 1;
      });

      return cheaperProducts.slice(0, 4);
    },
    //returns the number of items in the cart
    cartItemCount(state) {
      let total = 0;
      state.cart.forEach((item) => (total += item.quantity));
      return total;
    },

    cartTotalPrice(state) {
      let total = 0;

      state.cart.forEach((item) => (total += item.product.price * item.quantity));

      return total;
    },
  },
  mutations: {
    GET_ALL_CATEGORIES(state, response) {
      state.categories = response;
    },
    GET_ALL_PRODUCTS(state, response) {
      state.products = response;
    },

    GET_PRODUCTS_BY_CATEGORY(state, { response, id }) {
      state.products = response;
      state.actualCategoryId = id;
    },

    //CART MUTATIONS
    ADD_TO_CART(state, { product, quantity }) {
      let productInCart = state.cart.find((item) => item.product.id === product.id);

      if (productInCart) {
        productInCart.quantity += quantity;
        return;
      }
      state.cart.push({ product, quantity });
    },
    REMOVE_PRODUCT_FROM_CART(state, newCart) {
      state.cart = newCart;
    },
    SUBTRACT_ONE_PRODUCT(state, prod) {
      prod.quantity -= 1;
    },
    REMOVE_ALL_PRODUCTS_FROM_CART(state) {
      state.cart = [];
    },
    //SEARCHER
    SEARCH_PRODUCTS(state, response, inputValue) {
      state.searchValue = inputValue;
      state.products = response;
    },
    //DETAILS
    OPEN_DETAILS(state, product) {
      state.product = product;
    },
  },
  actions: {
    async getAllCategories({ commit, state }) {
      const request = await fetch(`${state.URL}/v1/categories/`);
      const response = await request.json();

      commit('GET_ALL_CATEGORIES', response);
    },
    async getAllProducts({ commit, state }) {
      const request = await fetch(`${state.URL}/v1/products/`);
      const response = await request.json();
      commit('GET_ALL_PRODUCTS', response);
    },
    async getProductsByCategory({ commit, state }, id) {
      const request = await fetch(`${state.URL}/v1/products/category/${id}`);

      const response = await request.json();

      commit('GET_PRODUCTS_BY_CATEGORY', { response, id });
    },

    //CART ACTIONS
    addProductToCart({ commit, state }, { product, quantity }) {
      commit('ADD_TO_CART', { product, quantity });
    },
    removeProductFromCart({ commit, state }, product) {
      let newCart = state.cart.filter((item) => item.product.id !== product.id);
      commit('REMOVE_PRODUCT_FROM_CART', newCart);
    },
    subtractOneProduct({ commit, state, dispatch }, product) {
      let prod = state.cart.find((item) => item.product.id === product.id);

      if (prod.quantity - 1 === 0) {
        dispatch('removeProductFromCart', product);
        return;
      }
      commit('SUBTRACT_ONE_PRODUCT', prod);
    },
    removeAllProductsFromCart({ commit }) {
      commit('REMOVE_ALL_PRODUCTS_FROM_CART');
    },
    //SEARCHER
    async searchProducts({ commit, state }, inputValue) {
      const request = await fetch(`${state.URL}/v1/products/${inputValue}`);
      const response = await request.json();

      commit('SEARCH_PRODUCTS', response, inputValue);
    },
    //DETAILS
    // Previously there was a modal with the item details, now it sends to the item details page.
    openDetails({ commit, state }, product) {
      commit('OPEN_DETAILS', product);
    },
  },
});
