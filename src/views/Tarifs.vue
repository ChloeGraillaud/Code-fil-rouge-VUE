<template>
  <div>
    <h1>Tarifs</h1>
    <TarifsLeftComponent />
    <TarifsRightComponent />
    <TarifsCarousel />
    <TarifsListeComponent />
  </div>
</template>

<script>
import TarifsCarousel from '@/components/TarifsCarousel.vue';
import TarifsLeftComponent from '../components/TarifsLeftComponent.vue';
import TarifsRightComponent from '../components/TarifsRightComponent.vue';
import TarifsListeComponent from '@/components/TarifsListeComponent.vue';

export default {
  name: 'TarifsView',
  components: {
    TarifsLeftComponent,
    TarifsRightComponent,
    TarifsCarousel,
    TarifsListeComponent
  }
}
</script>

<style>

</style>

  