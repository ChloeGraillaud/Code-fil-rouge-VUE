<template>
    <div>
      <h2>Paysages</h2>
      <div class="galeriecontainer">
        <div class="galerie2">
          <img 
            src="@/assets/leonard-cotte-c1Jp-fo53U8-unsplash.jpg" 
            class="imghover galerieimg2 imgborder" 
            alt="Photo couleur d'un champ de lavande violette, avec un coucher de soleil derrière quelques arbres" 
            width="432" 
            height="262"
          >
          <img 
            src="@/assets/jonathan-roger-LY1eyQMFeyo-unsplash.jpg" 
            class="imghover galerieimg2 imgborder" 
            alt="Photo couleur de l'horizon de la ville américaine Jersey City, avec l'océan en premier plan" 
            width="432" 
            height="262"
          >
          <img 
            src="@/assets/oc-gonzalez-xg8z_KhSorQ-unsplash.jpg" 
            class="imghover galerieimg2 imgborder" 
            alt="Photo couleur d'un coucher de soleil créant un dégradé sur le ciel de bleu à orange, avec des bruyières en premier plan" 
            width="432" 
            height="262"
          >
          <img 
            src="@/assets/sebastian-unrau-v4e3JI7DDHI-unsplash.jpg" 
            class="imghover galerieimg2 imgborder" 
            alt="Photo couleur d'une route bordée de végétation verte, dans une forêt d'arbre aux feuilles oranges" 
            width="432" 
            height="262"
          >
          <img 
            src="@/assets/geranimo-WJkc3xZjSXw-unsplash-min.jpg" 
            class="imghover galerieimg2 imgborder" 
            alt="Photo couleur d'une forêt de pins vu du dessus" 
            width="432" 
            height="262"
          >
          <img 
            src="@/assets/florian-olivo-rv-4cKysYNE-unsplash-min.jpg" 
            class="imghover galerieimg2 imgborder" 
            alt="Photo couleur de la ville de Grenoble vu du fort de la Bastille" 
            width="432" 
            height="262"
          >
          <img 
            src="@/assets/matheo-jbt-KraZK-NLCq0-unsplash-min.jpg" 
            class="imghover galerieimg2 imgborder" 
            alt="Photo couleur de la ville d'Amsterdam et de ses canaux" 
            width="432" 
            height="262"
          >
          <img 
            src="@/assets/adam-chang-IWenq-4JHqo-unsplash-min.jpg" 
            class="imghover galerieimg2 imgborder" 
            alt="Photo couleur d'une forêt enneigée" 
            width="432" 
            height="262"
          >
          <img 
            src="@/assets/vincent-dufour-lxoj-DlZ7nc-unsplash-min.jpg" 
            class="imghover galerieimg2 imgborder" 
            alt="Photo couleur d'un lac couvert de brume, à coté d'une forêt de pins" 
            width="432" 
            height="262"
          >
          <img 
            src="@/assets/willian-justen-de-vasconcellos-cNagAGEok9k-unsplash-min.jpg" 
            class="imghover galerieimg2 imgborder" 
            alt="Photo couleur de dunes de sable dans le désert" 
            width="432" 
            height="262"
          >
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GaleriePaysagesComponent',
  };
  </script>
  
  <style scoped>
  .galeriecontainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-flow: row wrap;
  }
  .galerie2 {
    width: 50%;  
  }
  
  @media only screen and (max-width: 932px) { 
    .galeriecontainer {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .galerie2 {
      width: 100%;
      transform: scale(0.88);
      margin-top: -40px;
      margin-bottom: -40px;
    }
  }
  </style>
  