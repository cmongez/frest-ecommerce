<template>
  <div>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
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
        <div class="carousel-item active" data-bs-interval="100000">
          <img src="../assets/beer-banner.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption">
            <div class="liquors-banner__info">
              <h5 class="liquors-banner__info__title">Bienvenido a FREST</h5>
              <p class="liquors-banner__info__paragraph d-none d-sm-block">
                Tus productos favoritos a un click de distancia
              </p>

              <div class="align-self-end">
                <router-link to="/products" class="btn btn-bsale bg-bsale text-white mb-2"
                  ><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.5 12.5H19.5M19.5 12.5L15 8M19.5 12.5L15 17"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  ver productos</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="100000">
          <img src="../assets/liquors-banner.png" class="d-block w-100" alt="..." />
          <div class="carousel-caption">
            <div class="liquors-banner__info">
              <h5 class="liquors-banner__info__title">Bienvenido a FREST</h5>
              <p class="liquors-banner__info__paragraph d-none d-sm-block">
                Tus productos favoritos a un click de distancia
              </p>

              <div class="align-self-end">
                <router-link to="/products" class="btn btn-bsale bg-bsale text-white mb-2"
                  ><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.5 12.5H19.5M19.5 12.5L15 8M19.5 12.5L15 17"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  ver productos</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="100000">
          <img src="../assets/beer-banner.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption">
            <div class="liquors-banner__info">
              <h5 class="liquors-banner__info__title">Bienvenido a FREST</h5>
              <p class="liquors-banner__info__paragraph d-none d-sm-block">
                Tus productos favoritos a un click de distancia
              </p>

              <div class="align-self-end">
                <router-link to="/products" class="btn btn-bsale bg-bsale text-white mb-2"
                  ><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.5 12.5H19.5M19.5 12.5L15 8M19.5 12.5L15 17"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  ver productos</router-link
                >
              </div>
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
};
</script>

<style lang="scss" scoped>
.carousel-item img {
  overflow: hidden;

  min-height: 200px;
}
.liquors-banner {
  border-radius: 24px;

  background-size: cover;
  &__info {
    padding: 12px;
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