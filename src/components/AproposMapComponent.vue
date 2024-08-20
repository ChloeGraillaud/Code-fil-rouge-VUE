<template>
    <div>
      <h2 class="devise">
        Mes œuvres sont bien plus que de simples images : elles sont des fenêtres ouvertes <br> 
        sur des mondes de beauté, d'émotion et d'inspiration.
      </h2>
      <div class="mapcontainer">
        <h2>Retrouvez-moi au 4 Rue Pierre Sarrazin à Paris 6ème</h2>
        <div class="google-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d163.872895016659!2d2.3422192058228846!3d48.85087244672941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sfr!4v1718793129708!5m2!1sen!2sfr" 
            width="600" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AproposMapComponent',
  };
  </script>
  
  <style scoped>
  .mapcontainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .google-map {
    padding-bottom: 30px;
    padding-top: 30px;
  }
  .google-map iframe {
    height: 450px;
    width: 600px;
    filter: brightness(var(--image-dark-brightness));
    border-radius: 25px;
  }
  @media only screen and (max-width: 932px) { 
    .google-map iframe {
      height: 250px;
      width: 375px;
    }
  }
  </style>
  