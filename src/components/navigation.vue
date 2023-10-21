<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg">
      <button class="navbar-toggler ml-auto custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon "></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <!-- <a href="#" class="logo"><b>F.</b>elps</a> -->
        </div>
        <div class="navbar-nav ms-auto">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/skills" class="nav-link">Skills</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>
      </div>
  </nav>
</template>

<style scoped>

.nav-link {
  font-weight: 400;
  transition: 0.3s ease;
  color: var(--secondary);
  margin: 10px 0px 0px 30px ;
}z

.nav-link:hover {
  font-size: 110%;
  color: var(--secondary);
}

.navbar-toggler.custom-toggler {
  background: var(--secondary);
}

.logo {
  font-family: 'Roboto';
  font-size: 25px;
  color: var(--textcolor);
  font-weight: 400;
  text-decoration: none;
}

.logo b {
  color: var(--primary);
}

.logo b:hover {
  color: var(--primary);
  transition: 0.9s ease;
  font-size: 180%;
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
</style>

