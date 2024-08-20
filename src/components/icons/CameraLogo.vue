<template>
    <img 
      src="../../assets/camera logo.svg" 
      class="cameralogo" 
      alt="logo obturateur de caméra vert" 
      width="85" 
      height="85"
    >
  </template>
  
  <script>
  export default {
    name: 'CameraLogo'
  }
  </script>
  
  <style scoped>
  .cameralogo {
    margin-left: 15px;
    border: none;
  }
  
  @media only screen and (max-width: 932px) {
    .cameralogo {
      display: none;
    }
  }
  </style>
  