
<template>
    <div class="darkmode-icon">
      <button @click="toggleDarkMode" class="darkmode-button">
        <img :src="icon" :alt="iconAlt" width="150" height="auto" />
      </button>
    </div>
  </template>
  
  <script>
  import darkModeIcon from '../../assets/darkmode.svg';
  import lightModeIcon from '../../assets/lightmode.svg';
  
  export default {
    name: 'DarkModeToggle',
    data() {
      return {
        darkModeIcon,
        lightModeIcon,
        darkMode: 'dark-mode',
        icon: darkModeIcon,
        iconAlt: 'Mode sombre'
      };
    },
    methods: {
      updateButtonIcon() {
        if (document.body.classList.contains(this.darkMode)) {
          this.icon = this.lightModeIcon;
          this.iconAlt = 'Mode clair';
        } else {
          this.icon = this.darkModeIcon;
          this.iconAlt = 'Mode sombre';
        }
      },
      toggleDarkMode() {
        document.body.classList.toggle(this.darkMode);
        if (document.body.classList.contains(this.darkMode)) {
          localStorage.setItem('theme', 'dark');
        } else {
          localStorage.setItem('theme', 'light');
        }
        this.updateButtonIcon();
      }
    },
    mounted() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.body.classList.add(this.darkMode);
      }
      this.updateButtonIcon();
    }
  };
  </script>
  <style scoped>
  .darkmode-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.darkmode-icon img {
  display: block;
}
  </style>
  