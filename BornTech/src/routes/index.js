import { createRouter, createWebHashHistory } from 'vue-router';
import about from '../views/about.vue';
import contact from '../views/contact.vue';
import home from '../views/home.vue';
import skills from '../views/skills.vue';

const routes = [
  { path: '/', component: home },
  { path: '/about', component: about },
  { path: '/contact', component: contact },
  { path: '/skills', component: skills },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;



