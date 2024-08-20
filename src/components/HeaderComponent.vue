<template>
  <header>
    <CameraLogo />
    <div class="dropdown">
      <button class="dropmenuimg" @click="toggleDropdown">
        <HamburgerLogo />
      </button>
      <div v-if="isDropdownOpen" id="mydropdown" class="dropdownmenu">
        <NavComponent :links="links" navClass="mobile-nav" />
      </div>
    </div>
    <router-link to="/">
      <ArtisteLogo />
    </router-link>
    <NavComponent :links="links" navClass="desktop-nav" />
  </header>
</template>

<script>
import CameraLogo from './icons/CameraLogo.vue';
import HamburgerLogo from './icons/Hamburger.vue';
import ArtisteLogo from './icons/Artistelogo.vue';
import NavComponent from './NavComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    CameraLogo,
    HamburgerLogo,
    ArtisteLogo,
    NavComponent
  },
  data() {
    return {
      isDropdownOpen: false,
      links: [
        { href: '/', text: 'Accueil' },
        { href: '/tarifs', text: 'Tarifs' },
        { href: '/apropos', text: 'À propos' },
        { href: '/galerie', text: 'Galerie' },
        { href: '/contact', text: 'Contact' }
      ]
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown(event) {
      if (!this.$el.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.closeDropdown);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeDropdown);
  }
}
</script>

<style scoped>
header {
  background-color: rgb(240, 247, 242);
  background-color: var(--header-background-color);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-bottom: none;
  padding: 15px;
}

.dropdown {
  display: none;
}

.dropdownmenu {
  display: flex;
  flex-direction: column;
}

.desktop-nav {
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  margin-right: 25px;
  margin-top: 10px;
}

.mobile-nav {
  flex-direction: column;
}

@media only screen and (max-width: 932px) {
  .desktop-nav {
    display: none;
  } 
.artistelogo {
    margin-left: 20px;
  }

  .dropdown {
    display: flex;
    border: none;
    position: relative;
  }

  .dropdownmenuimg {
    border: none;
    border-radius: 0;
    box-shadow: none;
    cursor: pointer;
  }

  button.dropmenuimg {
    border: none;
    background: none;
    padding: 0;
  }
}
</style>


  