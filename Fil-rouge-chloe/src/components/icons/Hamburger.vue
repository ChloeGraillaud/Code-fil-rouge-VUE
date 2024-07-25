<template>
    <img 
      src="../../assets/hamburger menu.png" 
      class="menuimg" 
      width="75" 
      height="75"
      alt="Menu"
    >
  </template>
  
  <script>
  export default {
    name: 'HamburgerLogo'
  }
  </script>
  
  <style scoped>
  .menuimg {
    cursor: pointer;
  }
  
  @media only screen and (max-width: 932px) {
    .menuimg {
      border: none;
      border-radius: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  </style>
  
  
  