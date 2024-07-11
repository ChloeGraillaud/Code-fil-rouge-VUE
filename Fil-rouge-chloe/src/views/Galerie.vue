<template>
    <div>
      <h1>Galerie</h1>
      <GaleriePortraitsComponent />
      <GaleriePaysagesComponent />
    </div>
  </template>
  
  <script>
import GaleriePortraitsComponent from '@/components/GaleriePortraitsComponent.vue'
import GaleriePaysagesComponent from '@/components/GaleriePaysagesComponent.vue';


  export default {
    name: 'GalerieView',
    components: {
      GaleriePortraitsComponent,
      GaleriePaysagesComponent
    }
  }
  </script>

  