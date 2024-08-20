<!--Navbar pour desktop et dropdown pour version mobile-->
<template>
  <nav :class="navClass">
    <router-link
      v-for="link in links"
      :key="link.href"
      :to="link.href"
      class="nav-link"
      @click="closeDropdown"
    >
      <h2 class="nav-link-text">{{ link.text }}</h2>
    </router-link>
  </nav>
</template>
<script>
export default {
  name: 'NavComponent',
  props: {
    links: {
      type: Array,
      required: true
    },
    navClass: {
      type: String,
      required: true
    }
  },
  methods: {
    closeDropdown() {
      this.$emit('close-dropdown');
    }
  }
}
</script>

  
  <style scoped>
  nav h2:hover {
    color: #5BA55D;
  }
  
  nav a {
    text-decoration: none;
    margin-left: 20px;
  }
  
  nav h2 {
    margin: 0;
    font-family: 'Kaushan Script', sans-serif;
    font-size: 32px;
    color: #011202;
    margin-inline: 10px;
    text-shadow: none;
  }
  @media only screen and (max-width: 932px) { 
    .mobile-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: var(--dropdownmenu-background-color2);
  padding: 25px;
  border-radius: 10px;
  left: 0;
  z-index: 2;
  
}
.mobile-nav .nav-link-text {
    color: #011202;
    font-family: 'Kaushan Script', sans-serif;
    padding: 10px;
    text-shadow: none;
  }
.mobile-nav h2:hover {
  color: #5BA55D;
}
.mobile-nav h2 {
  display: block;
  background-color: var(--dropdownmenua-background-color1);
  border-radius: 5px;
  transform: scale(1.2);
  margin-right: 17px;

}
  }
  </style>
  