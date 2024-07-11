import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import TarifsView from '../views/Tarifs.vue';
import AproposView from '../views/Apropos.vue';
import GalerieView from '../views/Galerie.vue';
import ContactView from '../views/Contact.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/tarifs', component: TarifsView },
  { path: '/apropos', component: AproposView },
  { path: '/galerie', component: GalerieView },
  { path: '/contact', component: ContactView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

