<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import axios from 'axios';
import { ref, onMounted } from 'vue';

const products = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get('data.json');
    products.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchData);
</script>

<template>
  <div id="app">
    <header>
      <HeaderComponent />
    </header>
    <main>
      <router-view></router-view>
      <div v-for="product in products" :key="product.id">
        {{ product.name }}
      </div>
    </main>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
