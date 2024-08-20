
<template>
    <div class="hometext">
      <h1 class="hometitre">Leonora Kahn<br>Photographie</h1>
      <p>
        Photographe passionnée par la nature et l'écologie, je capture la beauté authentique des humains et des animaux. Mon travail reflète la connexion profonde entre l'homme et la nature. Chaque portrait est une histoire unique et émouvante, qu'il soit individuel, familial ou animalier.
        <br>
        <br>
        Découvrez mon univers photographique et laissez-vous séduire par des images empreintes de sincérité et de respect.
      </p>
      <router-link to="/contact">
      <h3 class="bouton">Un projet ? Écrivez-moi</h3>
    </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeText'
  }
  </script>
  
  <style scoped>
  .hometitre {
    padding: 15px;
    margin-bottom: 25px;
}
.hometext {
    float:left;
    text-align: center;
    width:50%;
    padding-bottom: 70px;
}
@media only screen and (max-width:932px ) {
    .hometext {
            width:80%;
            padding-bottom: 40px;
        }
}
  </style>
  