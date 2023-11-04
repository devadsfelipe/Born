<template>
  <div class="container-fluid">
    <!-- <div class="nav-link select-language" @click="setLanguage()">PT-BR</div> -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="navbar-nav">
        <a :class="[homeActive ? 'nav-link active-npmlink' : 'nav-link']" @click="setNavContent('homeActive')"
          aria-current="page" href="#home">HOME</a>
        <a :class="[aboutActive ? 'nav-link active-link' : 'nav-link']" @click="setNavContent('aboutActive')"
          aria-current="page" href="#about">ABOUT</a>
        <a :class="[skillsActive ? 'nav-link active-link' : 'nav-link']" @click="setNavContent('skillsActive')"
          aria-current="page" href="#skills">SKILLS</a>
        <a :class="[projectsActive ? 'nav-link active-link' : 'nav-link']" @click="setNavContent('projectsActive')"
          aria-current="page" href="#projects">PROJETOS</a>
        <a :class="[contactActive ? 'nav-link active-link' : 'nav-link']" @click="setNavContent('contactActive')"
          aria-current="page" href="#contact">CONTATO</a>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const homeActive = ref(true);
const aboutActive = ref(false);
const skillsActive = ref(false);
const projectsActive = ref(false);
const contactActive = ref(false);

function setNavContent(activeContent) {
  homeActive.value = false;
  aboutActive.value = false;
  skillsActive.value = false;
  projectsActive.value = false;
  contactActive.value = false;

  switch (activeContent) {
    case 'aboutActive':
      aboutActive.value = true;
      break;
    case 'skillsActive':
      skillsActive.value = true;
      break;
    case 'projectsActive':
      projectsActive.value = true;
      break;
    case 'contactActive':
      contactActive.value = true;
      break;
    default:
      homeActive.value = true;
      break;
  }
};

</script>

<style scoped>
* {
  font-family: 'Montserrat', sans-serif;
  float: right;
}

.container-fluid {
  width: 100%;
  margin: 0;
  padding: 0;

}

.select-language {
  float: left !important;
  color: var(--off-white);
  margin: 15px 0px 0px 15px;
}

.navbar {
  background: transparent !important;
  margin-right: 20px;
}

.nav-link {
  font-weight: 400;
  font-size: 13px;
  transition: 0.3s ease;
  color: var(--off-white);
  margin-right: 20px;
  cursor: pointer;
}

.nav-link.active-link {
  color: var(--light-purple) !important;
  transform: scale(1.20);
}

.nav-link:hover {
  color: var(--light-purple) !important;
  transform: scale(1.20);
}

@media only screen and (max-width: 1000px) {
  .navbar {
    display: none;
  }
}
</style>

