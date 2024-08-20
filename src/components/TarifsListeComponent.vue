<template>
    <div>
      <h2>Pourquoi choisir mes photographies ?</h2>
      <ul class="tariftext text-center">
        <li>
          Originalité et Exclusivité : Chaque photographie que je propose est une œuvre unique, soigneusement sélectionnée et éditée pour vous offrir une pièce d'art inégalée. Vous ne trouverez nulle part ailleurs des images identiques à celles-ci.
        </li>
        <br>
        <li>
          Qualité Supérieure : Imprimées sur des matériaux de haute qualité et respectueux de l'environnement, mes photographies sont conçues pour durer. Les couleurs vibrantes et les détails nets garantiront que chaque image reste aussi éclatante et émouvante que le jour où elle a été prise.
        </li>
        <br>
        <li>
          Versatilité : Que vous cherchiez à embellir votre salon, votre bureau ou toute autre pièce de votre maison, mes photographies s'intègrent parfaitement à tout type de décoration intérieure. Elles sont disponibles en différentes tailles et formats pour s'adapter à vos besoins spécifiques.
        </li>
        <br>
        <li>
          Émotion et Connexion : Chaque photographie raconte une histoire et évoque des émotions. En accrochant l'une de mes œuvres chez vous, vous invitez non seulement la beauté, mais aussi une part d'humanité et de connexion émotionnelle dans votre espace de vie.
        </li>
      </ul>
      <h2>Pour qui sont mes photographies ?</h2>
      <ul class="text-center">
        <li>
          Amoureux de l'Art : Ceux qui apprécient les pièces uniques et souhaitent enrichir leur collection personnelle.
        </li>
        <li>
          Décorateurs d'Intérieur : Professionnels cherchant à ajouter une touche distinctive et élégante à leurs projets.
        </li>
        <li>
          Particuliers : Toute personne désirant transformer son espace de vie avec une œuvre d'art qui parle à son cœur.
        </li>
      </ul>
      <div class="d-flex justify-content-center">
        <router-link to="/contact">
          <h3 class="bouton">Contactez moi</h3>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TarifsListeComponent'
  }
  </script>
  
  <style scoped>
  .tariftext {
    font-size: 20px;
  }
  </style>
  