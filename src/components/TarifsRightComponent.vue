<template>
    <div class="tarifright">
      <img 
        src="@/assets/luca-bravo-VowIFDxogG4-unsplash.jpg" 
        class="imghover imgborder" 
        alt="Photo d'un lac dans les montagnes, avec un quai et plusieurs petites barques" 
        width="320" 
        height="214"
      >
      <img 
        src="@/assets/mohamed-nohassi-odxB5oIG_iA-unsplash.jpg" 
        class="imghover imgborder" 
        alt="Photo d'une personne bras écartés se tenant sur une étendue d'eau qui reflète le ciel coloré"  
        width="321" 
        height="214"
      >
      <h2>Photo nature</h2>
      <p>De 60 à 100 € la séance d’une heure, possibilité de forfait pour une longue durée.<br>
      Me contactez pour plus de détails</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TarifsRightComponent'
  }
  </script>
  
  <style scoped>
  .tarifright {
    float: right;
    width: 50%;
    text-align: center;
  }
  @media only screen and (max-width: 932px) {
    .tarifright {
      width: 90%;
    }
  }
  </style>
  