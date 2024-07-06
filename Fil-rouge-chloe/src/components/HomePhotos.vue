
<template>
    <div class="homephotos">
      <img src="@/assets/david-clode-I_eOutw1MTg-unsplash.jpg" class="imghover imgborder" alt="Gros plan d'un boa constrictor brun et noir" width="235" height="351">
      <img src="@/assets/filipp-romanovski-CGKYNN3uuVo-unsplash.jpg" class="imghover imgborder" alt="Portrait d'une femme aux cheveux bruns courts sur fond jaune ocre" width="235" height="351">
      <br>
      <img src="@/assets/sean-oulashin-KMn4VEeEPR8-unsplash.jpg" class="imghover imgborder" alt="Photo d'une plage au coucher de soleil, avec une eau turquoise" width="357" height="238">
      <img src="@/assets/dawid-zawila--G3rw6Y02D0-unsplash.jpg" class="imghover imgborder" alt="Photo de plaines d'herbe verte, prise à l'heure d'or avec de la brume en arrière-plan" width="357" height="238">
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePhotos'
  }
  </script>
  
  <style scoped>
  .homephotos {
    float:right;
    width:50%; 
    text-align: center;
    padding-bottom: 70px;
}
  @media only screen and (max-width:932px ) {
    .homephotos {
            width:90%; 
        }
  }
  </style>
  