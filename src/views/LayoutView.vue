<template>
  <div class="container-fluid d-flex flex-column vh-100">
    <Header />
    <Navbar />
    <main class="flex-grow-1">
      <router-view />
    </main>
    <Footer />
    <WhatsappButton />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import WhatsappButton from '@/components/WhatsappButton.vue';
export default {
  name: 'LayoutView',
  components: {
    Navbar,
    Header,
    Footer,
    WhatsappButton,
  },
};
</script>

<style>
</style>