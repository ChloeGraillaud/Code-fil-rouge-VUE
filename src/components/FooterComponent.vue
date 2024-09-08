<template>
    <div class="footer-content">
      <div class="left-content">
        <DarkModeToggle />
      </div>
      <div class="right-content social">
        <TwitterLogo />
        <InstagramLogo />
        <FacebookLogo />
        <YoutubeLogo />
      </div>
    </div>
  </template>
  
  <script>
  import DarkModeToggle from './icons/DarkModeToggle.vue';
  import TwitterLogo from './icons/TwitterLogo.vue';
  import InstagramLogo from './icons/InstagramLogo.vue';
  import FacebookLogo from './icons/FacebookLogo.vue';
  import YoutubeLogo from './icons/YoutubeLogo.vue';
  
  export default {
    name: 'FooterComponent',
    components: {
      DarkModeToggle,
      TwitterLogo,
      InstagramLogo,
      FacebookLogo,
      YoutubeLogo
    }
  };
  </script>
  
  <style scoped>
  footer {
    background-color: rgb(240, 247, 242);
    background-color: var(--footer-background-color);
    padding: 10px;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .left-content {
    display: flex;
    align-items: center;
  }
  
  .right-content {
    display: flex;
    align-items: center;
  }
  
  .social {
    display: flex;
    justify-content: flex-end;
  }
  
  .social a {
    margin: 0 10px;
    transition: transform 0.3s;
    border:none;
  }
  
  .social a:hover {
    transform: scale(1.1);
  }
  .social img {
    border:none
  }
  
  .darkmode-icon {
    margin-left: 20px;
  }

  @media only screen and (max-width:932px ) {
    .social {
    justify-content: center;
  }

  .social a {
    margin: 0 5px;
  }

  .darkmode-icon {
    width: 100px; 
    height: auto;
    margin-left: 0;
  }
        
  }
  </style>
  