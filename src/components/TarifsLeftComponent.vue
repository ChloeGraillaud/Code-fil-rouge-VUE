<template>
    <div class="tarifleft">
      <img 
        src="@/assets/robert-godwin-cdksyTqEXzo-unsplash.jpg" 
        class="imghover imgborder" 
        alt="Photo portrait en noir et blanc d'un homme chauve souriant face à la caméra" 
        width="159" 
        height="239"
      >
      <img 
        src="@/assets/good-faces-xmSWVeGEnJw-unsplash.jpg" 
        class="imghover imgborder" 
        alt="Photo portrait en couleur d'un femme noir regardant vers la caméra de trois quarts" 
        width="159" 
        height="239"
      >
      <img 
        src="@/assets/karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg" 
        class="imghover imgborder" 
        alt="Photo portrait en couleur d'un chat noir et blanc, avec un papillon sur son nez" 
        width="159" 
        height="238"
      >  
      <h2>Portrait humain et animal</h2>
      <ul>
        <li>Couleur : 120 €/ 150 €</li>
        <li>Noir et blanc : 100 €/ 130 €</li>
        <li>Effet personnalisé : à partir de + 50 €</li>
        <li>Groupes : + 50 €</li>
      </ul>
      <p>Possibilités de forfait dans le cas de groupe de plus de 5 participants</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TarifsLeftComponent'
  }
  </script>
  
  <style scoped>
  .tarifleft {
    float: left;
    text-align: center;
    width: 50%;
  }
  @media only screen and (max-width: 932px) {
    .tarifleft {
      width: 90%;
      padding-bottom: 30px;
    }
  }
  </style>
  