<template>
  <div>
    <main>
      <HomeText /> 
    <HomePhotos />
    <HomeCarousel />
    </main>
  </div>
</template>

<script>
import HomePhotos from '../components/HomePhotos.vue';
import HomeText from '../components/HomeText.vue';
import HomeCarousel from '../components/HomeCarousel.vue'

export default {
  name: 'HomeView',
  components: {
    HomeText,
    HomePhotos,
    HomeCarousel
  }
};
</script>
