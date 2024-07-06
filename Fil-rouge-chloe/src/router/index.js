import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Tarifs from '../views/Tarifs.vue';
import Apropos from '../views/Apropos.vue';
import Galerie from '../views/Galerie.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/tarifs', component: Tarifs },
  { path: '/apropos', component: Apropos },
  { path: '/galerie', component: Galerie },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

