<template>
    <div>
      <div class="container d-flex flex-column align-items-center mt-5 text-center">
        <h2>Acquérir une photographie originale</h2>
        <p class="devise">Mes œuvres sont bien plus que de simples images : elles sont des fenêtres ouvertes sur des mondes de beauté, d'émotion et d'inspiration.</p>
      </div>
      <div class="container d-flex justify-content-center mt-5">
        <div id="carouselExampleIndicators" class="carousel slide" style="max-width: 800px;">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="@/assets/mio-ito-B_SLtmXPKNA-unsplash-min.jpg" class="d-block w-100 img-fluid mx-auto d-block imgborder" alt="...">
            </div>
            <div class="carousel-item">
              <img src="@/assets/minh-pham-Wn1gmozpNZc-unsplash-min.jpg" class=" d-block w-100 img-fluid mx-auto d-block imgborder" alt="...">
            </div>
            <div class="carousel-item">
              <img src="@/assets/kasper-rasmussen-Ii45WVmhv6E-unsplash-min.jpg" class="d-block w-100 img-fluid mx-auto d-block imgborder" alt="...">
            </div>
            <div class="carousel-item">
              <img src="@/assets/jean-philippe-delberghe-exBd9GXAFhs-unsplash-min.jpg" class="d-block w-100 img-fluid mx-auto d-block imgborder" alt="...">
            </div>
            <div class="carousel-item">
              <img src="@/assets/nicola-fittipaldi-0zwzo_v2ZHQ-unsplash-min.jpg" class="d-block w-100 img-fluid mx-auto d-block imgborder" alt="...">
            </div>
            <div class="carousel-item">
              <img src="@/assets/natasha-aAPfpwIK2BU-unsplash-min.jpg" class=" d-block w-100 img-fluid mx-auto d-block imgborder" alt="...">
            </div>
            <div class="carousel-item">
              <img src="@/assets/kimson-doan-HD8KlyWRYYM-unsplash-min.jpg" class="d-block w-100 img-fluid mx-auto d-block imgborder" alt="...">
            </div>
            <div class="carousel-item">
              <img src="@/assets/vinicius-amnx-amano-17NCG_wOkMY-unsplash-min.jpg" class="d-block w-100 img-fluid mx-auto d-block imgborder" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TarifsCarousel'
  }
  </script>
  
  <style scoped>
  .carousel-inner {
    height: 800px;
    width: 560px;
  }
  
  .carousel-inner img {
    height: 800px;
    width: 560px;
    object-fit: cover;
  }
  
  .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 5%;
  }
  
  .carousel-control-prev {
    left: -5%;
  }
  
  .carousel-control-next {
    right: -5%;
  }
  @media only screen and (max-width: 932px) {
    .carousel-inner {
      height: 700px;
      width: 460px;
    }
  
    .carousel-inner img {
      height: 700px;
      width: 460px;
      object-fit: cover;
    }
  
    .carousel-control-prev {
      left: 5%;
    }
  
    .carousel-control-next {
      right: 5%;
    }
  }
  </style>
  