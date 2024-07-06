<template>
    <div>
      <h1>Parlons de votre projet</h1>
      <ContactComponent />
    </div>
  </template>
  
  <script>
import ContactComponent from '@/components/ContactComponent.vue'

  export default {
    name: 'Contact',
    components: {
      ContactComponent,
    }
  }
  </script>
  