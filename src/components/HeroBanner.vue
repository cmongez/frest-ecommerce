<template>
  <div>
    <div id="carouselExampleCaptions" class="carousel slide mb-3" data-bs-ride="carousel">
      <div class="carousel-indicators d-none m-0 p-0">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          v-for="(image, index) in images"
          :key="index"
          :class="index == 0 ? 'carousel-item active' : 'carousel-item'"
          data-bs-interval="3000"
        >
          <img :src="require('../assets/' + image)" class="d-block w-100" alt="..." />

          <div class="carousel-caption m-0 p-0">
            <div class="liquors-banner__info">
              <h5 class="liquors-banner__info__title">Bienvenido a FREST</h5>
              <p class="liquors-banner__info__paragraph d-none d-sm-block">
                Tus productos favoritos a un click de distancia
              </p>

              <router-link to="/products" class="btn btn-bsale bg-bsale text-white mb-2"
                ><img class="arrow" src="../assets/arrow.svg" />ir a productos
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroBanner',
  data() {
    return {
      images: ['beer-banner.jpg', 'liquors-banner.png', 'ron-banner.jpg'],
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel-item img {
  border-radius: 0.25rem;
  overflow: hidden;
}
.carousel-caption a {
  line-height: 18px;
}

.liquors-banner {
  border-radius: 24px;

  background-size: cover;
  &__info {
    height: 100%;
    background: rgba(222, 222, 222, 0.7);
    backdrop-filter: blur(2.5px);
    border-radius: 10px;
    &__title {
      font-style: normal;
      font-weight: 800;
      font-size: 1.8em;
      color: white;
      text-shadow: 1px 1px 2px black;
    }
    &__paragraph {
      font-style: normal;

      font-size: 1.2em;
      color: white;
      text-shadow: 1px 1px 1px black;
    }
  }
}
</style>