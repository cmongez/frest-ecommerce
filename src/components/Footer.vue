<template>
  <footer class="bg-bsale mt-4 pt-3 pb-3">
    <div class="d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center">
      <ul
        class="
          socialNetworks
          d-flex
          justify-content-center
          align-items-center
          mt-2
          d-flex
          justify-content-around
          align-items-center
        "
      >
        <li class="socialNetworks__item">
          <a href="https://www.linkedin.com/in/cmongez/" target="_blank" class="socialNetworks__link"
            ><i title="Perfil de LinkedIn" class="fa-brands fa-linkedin socialNetworks__icon"></i
          ></a>
        </li>
        <li class="socialNetworks__item">
          <a href="https://github.com/cmongez" target="_blank" class="socialNetworks__link"
            ><i title="Perfil de GitHub" class="fa-brands fa-github socialNetworks__icon"></i
          ></a>
        </li>
        <li class="socialNetworks__item">
          <a href="https://github.com/cmongez/portafolio" target="_blank" class="socialNetworks__link"
            ><i title="Codigo portafolio" class="fa-solid fa-briefcase socialNetworks__icon"></i
          ></a>
        </li>
      </ul>
      <div class="d-flex flex-column align-items-center mb-2">
        <div class="d-flex align-items-center pb-2">
          <p class="text-center m-0">Hecho con</p>
          <div class="heart mx-2" title="Amor"></div>
          <p class="m-0">
            en <span title="JavaScript Vanila" class="font-weight-bold font-italic text-white">Vue</span>
          </p>
        </div>
        <p class="m-0">
          Desarrollado por
          <a href="https://github.com/cmongez/" title="César Mongez" target="_blank" class="text-white font-weight-bold"
            >César Mongez</a
          >
        </p>
      </div>
      <p class="text-center m-0">Copyright © 2022</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style>
</style>