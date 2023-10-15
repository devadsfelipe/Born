import { createApp } from 'vue'
import './style.css'
import app from './App.vue'
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ]


  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  const app = createApp({})
  app.use(router)
  app.mount('#app')