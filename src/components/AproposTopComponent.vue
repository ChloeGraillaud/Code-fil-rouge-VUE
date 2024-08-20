<template>
    <div class="aproposcontainer">
      <img 
        src="@/assets/matheus-ferrero-pg_WCHWSdT8-unsplash.jpg" 
        class="imghover imgborder" 
        alt="Photo portrait en couleur de l'artiste Leonora Kahn, face à la caméra portant un chapeau, sur un fond de feuille naturelles" 
        width="287" 
        height="431"
      >
      <div class="apropostext">
        <p>
          Passionnée par la nature, je capture la beauté du monde avec un regard attentif et poétique. 
          Amoureuse des grands espaces et des petits détails, je m'engage fermement pour des valeurs 
          de qualité et de respect de l'environnement. Mes clichés, empreints d'authenticité et de délicatesse, 
          reflètent mon profond respect pour la planète et mon désir de préserver sa beauté pour les générations futures.
        </p>
        <p>
          Je vous attends dans mon atelier situé à Paris, 
          niché au coeur du 6ème arrondissement pour discuter
          de votre projet dans un cadre inspirant et authentique
          afin de capturer l'essence même de ce qui vous passionne 
          et vous fait vibrer.
        </p>
      </div>
      <img 
        src="@/assets/harry-cunningham-UWblg2i6Blw-unsplash.jpg" 
        class="imghover imgborder" 
        alt="Photo de l'atelier de la photographe, montrant la lightroom et bureau de travail" 
        width="331" 
        height="496"
      >
    </div>
  </template>
  
  <script>
  export default {
    name: 'AproposTopComponent',
  };
  </script>
  
  <style scoped>
  .aproposcontainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 50px 0;
  }
  .apropostext {
    align-items: center;
    text-align: center;
  }
  @media only screen and (max-width: 932px) {
    .aproposcontainer {
      flex-direction: column;
    }
  }
  </style>
  