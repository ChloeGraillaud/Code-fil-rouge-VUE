<template>
    <div>
      <h1>A propos</h1>
      <AproposTopComponent />
      <AproposMapComponent />
    </div>
  </template>
  
  <script>
import AproposTopComponent from '@/components/AproposTopComponent.vue';
import AproposMapComponent from '@/components/AproposMapComponent.vue'


  export default {
    name: 'AproposView',
    components: {
      AproposTopComponent,
      AproposMapComponent,
    }
  }
  </script>
  