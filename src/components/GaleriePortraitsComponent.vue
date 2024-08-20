<template>
    <div>
      <h2>Portraits</h2>
      <div class="galeriecontainer">
        <div class="galerie1">
          <img 
            src="@/assets/roman-akhmerov-Js6Hwobewi8-unsplash.jpg" 
            class="imghover galerieimg1 imgborder" 
            alt="Photo portrait en plan Américain d'une femme en robe rouge, devant un lac et végétation naturelle"  
            width="274" 
            height="410"
          >
          <img 
            src="@/assets/lukas-godina-m7sdxLZwjjw-unsplash-min.jpg" 
            class="imghover galerieimg1 imgborder" 
            alt="Photo portrait en noir et blanc d'un homme en costume, de dos et regardant sur le coté"  
            width="274" 
            height="410"
          >
          <img 
            src="@/assets/nathan-dumlao-4_mJ1TbMK8A-unsplash-min.jpg" 
            class="imghover galerieimg1 imgborder" 
            alt="Photo couleur d'une famille avec trois enfants, souriants dans un champ de fleurs oranges" 
            width="400" 
            height="413"
          >
          <img 
            src="@/assets/charlesdeluvio-DziZIYOGAHc-unsplash.jpg" 
            class="imghover galerieimg1 imgborder" 
            alt="Photo couleur d'un carlin noir avec un manteau rayé bleu jeans, blanc et rouge, sur fond rouge uni"  
            width="274" 
            height="410"
          >
          <img 
            src="@/assets/yulia-matvienko-WPuVX6hWheo-unsplash-min.jpg" 
            class="imghover galerieimg1 imgborder" 
            alt="Photo portrait en noir et blanc d'un chat, regardant sur la droite, sur un fond dégradé noir vers gris"  
            width="274" 
            height="410"
          >
          <img 
            src="@/assets/jametlene-reskp-fliwkBbS7oM-unsplash-min.jpg" 
            class="imghover galerieimg1 imgborder" 
            alt="Photo couleur d'un groupe de chiots berger Australien sur une marche, avec en fond un mur gris et une porte noire" 
            width="400" 
            height="413"
          >
          <img 
            src="@/assets/anthony-tran-LFoaYq3gmc4-unsplash-min.jpg" 
            class="imghover galerieimg1 imgborder" 
            alt="Photo couleur d'une femme avec une couronne de fleurs et une robe blanche, sur la plage" 
            width="274" 
            height="410"
          >
          <img 
            src="@/assets/artem-xromov-mArQ0u64W9w-unsplash-min.jpg" 
            class="imghover galerieimg1 imgborder" 
            alt="Photo noir et blanc d'un homme sous un arbre, l'ombre des branches sur son visage" 
            width="274" 
            height="410"
          >
          <img 
            src="@/assets/drew-dizzy-graham-cTKGZJTMJQU-unsplash-min.jpg" 
            class="imghover galerieimg1 imgborder" 
            alt="Photo couleur d'une femme cachée derrière une grande feuille, seul son oeil est visible" 
            width="400" 
            height="413"
          >
          <img 
            src="@/assets/annie-spratt-sFehmQe-OJg-unsplash-min.jpg" 
            class="imghover galerieimg1 imgborder" 
            alt="Photo couleur d'un cheval blanc qui pature" 
            width="274" 
            height="410"
          >
          <img 
            src="@/assets/dmitry-bukhantsov-Y8vc3-jAD08-unsplash-min.jpg" 
            class="imghover galerieimg1 imgborder" 
            alt="Photo couleur d'un chat gris aux yeux jaunes" 
            width="274" 
            height="410"
          >
          <img 
            src="@/assets/emiliano-vittoriosi-PwXIsh7QpsI-unsplash-min.jpg" 
            class="imghover galerieimg1 imgborder" 
            alt="Photo couleur d'un lapin taupe et blanc, seul le haut de sa tête est visible" 
            width="400" 
            height="413"
          >
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GaleriePortraitsComponent',
  };
  </script>
  
  <style scoped>
  .galeriecontainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-flow: row wrap;
}
  .galerie1 {
    width: 60%;  
  }
  @media only screen and (max-width: 932px) {
    .galeriecontainer {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .galerie1 {
      margin-left: -40px;
      margin-bottom: 30px;
    }
    .galerieimg1 {
      max-width: 110%;
    }
  }
  </style>
  