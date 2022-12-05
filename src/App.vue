<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;700;900&display=swap');
body {
  background-color: rgb(255, 255, 255);
  font-family: 'Poppins', sans-serif;
  max-width: 1200px;
  margin: auto;
}

.navbar-dark .navbar-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
.navbar-dark .navbar-toggler {
  border-color: white;
}
thead,
tbody,
tfoot,
tr,
td,
th {
  border-style: none;
}

.sale {
  color: red;
}

.bg-bsale {
  background-color: #fe6a00;
}

.btn-bsale:hover {
  background-color: #fe6a008f;
}
a {
  text-decoration: none;
}

.btn-nav:hover {
  background-color: #ff862f;
}

/* 
footer */

.socialNetworks {
  list-style: none;
}
.socialNetworks__item {
  margin-left: 10px;
  margin-right: 10px;
}
.socialNetworks__icon {
  color: #ffffff;
  font-size: 30px;
}
.socialNetworks__icon:hover {
  color: #ffffffb0;
}
/* 
  heart */

:root {
  --heigth: 12.5px;
  --color: red;
}
.heart {
  transform: rotate(45deg);
  -webkit-animation: latir 0.5s ease-in-out infinite alternate;
  animation: latir 0.5s ease-in-out infinite alternate;
}
.heart,
.heart:after,
.heart:before {
  height: var(--heigth);
  width: var(--heigth);
  background-color: var(--color);
}
.heart:after,
.heart:before {
  content: '';
  display: block;
  position: absolute;
  border-radius: 50%;
  transform: translateY(-6.75px);
}
.heart:after {
  transform: translateX(-6.75px);
}
@-webkit-keyframes latir {
  to {
    transform: rotate(45deg) scale(1.2);
  }
}
@keyframes latir {
  to {
    transform: rotate(45deg) scale(1.2);
  }
}
</style>
