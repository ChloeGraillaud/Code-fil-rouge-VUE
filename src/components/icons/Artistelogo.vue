<template>
    <img 
      src="../../assets/Logo artiste.svg" 
      class="artistelogo" 
      alt="Logo nom de l'artiste sur une feuille d'églantier stylisée, lien vers l'accueil" 
      width="250" 
      height="auto"
    >
  </template>
  
  <script>
  export default {
    name: 'ArtisteLogo'
  }
  </script>
  
  <style scoped>
  
  @media only screen and (max-width: 932px) {
    .artistelogo {
    margin-left: 20px;
  }
  }
  </style>