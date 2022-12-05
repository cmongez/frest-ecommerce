<template>
  <a
    href="https://wa.me/56991772176?text=Hola%20César,%20me%20 gustariar%20hablar%20contigo."
    class="whatsapp"
    target="_blank"
  >
    <i class="fa fa-whatsapp whatsapp-icon"></i
  ></a>
</template>

<script>
export default {
  name: 'WhatsappButton',
};
</script>

<style>
.whatsapp {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  z-index: 100;
}

.whatsapp-icon {
  margin-top: 13px;
}
</style>