<script setup>
import { ref } from 'vue'

const homeActive = ref(true);
const aboutActive = ref(false);
const skillsActive = ref(false);
const projectsActive = ref(false);
const contactActive = ref(false);

function setNavContent(activeContent) {
  this.homeActive = false;
  this.aboutActive = false;
  this.skillsActive = false;
  this.projectsActive = false;
  this.contactActive = false;

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
}

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a :class="[homeActive ? 'nav-link active-link' : 'nav-link']" @click="setNavContent('homeActive')"
            aria-current="page" href="#">HOME</a>
          <a :class="[aboutActive ? 'nav-link active-link' : 'nav-link']" @click="setNavContent('aboutActive')"
            aria-current="page" href="#">ABOUT</a>
          <a :class="[skillsActive ? 'nav-link active-link' : 'nav-link']" @click="setNavContent('skillsActive')"
            aria-current="page" href="#">SKILLS</a>
          <a :class="[projectsActive ? 'nav-link active-link' : 'nav-link']" @click="setNavContent('projectsActive')"
            aria-current="page" href="#">PROJECTS</a>
          <a :class="[contactActive ? 'nav-link active-link' : 'nav-link']" @click="setNavContent('contactActive')"
            aria-current="page" href="#">CONTACT</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
* {
  font-family: 'Montserrat', sans-serif;
  float: right;
}

.navbar {
  background: transparent !important;
}

.nav-link {
  font-weight: 400;
  font-size: 13px;
  transition: 0.3s ease;
  color: var(--off-white);
  margin: 5px 0px 0px 30px;
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


.socialmidia {
  display: flex;
  text-decoration: none;
  color: var(--bs-navbar-color)
}

/* .selectLanguage {
  font-weight: 500;
  text-decoration: none;
  color: var(--bs-navbar-color)
} */


@media only screen and (max-width: 600px) {
  * {
    margin: 0;
    padding: 0;
    float: left !important;
  }

  .nav-link {
    font-weight: 500;
    font-size: 20px;
    margin: 10px 0px 0px 30px;
  }

  .navbar-toggler{
    float: right !important;
  }
  .bg-dark {
    background-color: transparent !important;
  }

  .navbar-collapse .collapse .show{
    width: 100% !important;
  }
  .nav-link.active-link {
    background: var(--medium-purple);
    border-radius: 10px;
    padding-left: 15px;
    color: var(--off-white) !important;
    width: 100%;
  }
}
</style>

