<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <button class="navbar-toggler ml-auto custom-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
      aria-label="Toggle navigation">
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <!-- <div class="navbar-nav">
        <a href="#" class="logo"><b>F.</b>elps</a>
      </div> -->
      <div class="navbar-nav ms-auto">
        <a to="/" class="nav-link">Home</a>
        <a to="/about" class="nav-link">About</a>
        <a to="/skills" class="nav-link">Skills</a>
        <a to="/contact" class="nav-link">Contact</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>

.navbar-nav{
  margin: 0 3%;
}
.nav-link {
  font-weight: 400;
  transition: 0.3s ease;
  color: var(--off-white);
  margin: 5px 0px 0px 30px;
  cursor: pointer;
}

.nav-link:hover {
  font-size: 100%;
  color: var(--light-purple);
  transform: scale(1.30);
}

/* .navbar-toggler.custom-toggler {
  background: var(--secondary);
} */

.logo {
  font-family: 'Roboto';
  font-size: 25px;
  color: var(--off-white);
  font-weight: 400;
  text-decoration: none;
}

.logo b {
  color: var(--light-purple);
}

.logo b:hover {
  color: var(--light-purple);
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

