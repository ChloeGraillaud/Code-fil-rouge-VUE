<template>
  <div>
    <main>
      <HomeText /> 
    <HomePhotos />
    <HomeCarousel />
    <HomeForm />
    </main>
  </div>
</template>

<script>
import HomePhotos from '../components/HomePhotos.vue';
import HomeText from '../components/HomeText.vue';
import HomeCarousel from '../components/HomeCarousel.vue';
import HomeForm from '../components/HomeForm.vue'

export default {
  name: 'HomeView',
  components: {
    HomeText,
    HomePhotos,
    HomeCarousel,
    HomeForm
  }
};
</script>
