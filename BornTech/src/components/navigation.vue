<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/skills" class="nav-link">Skills</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>
        <div class="navbar-nav ms-auto">
            <a href="https://www.linkedin.com/in/felipe-o-612b4b84" target="_blank"><i class="fab fa-linkedin nav-link"></i></a>
            <a href="https://www.instagram.com/felipe_ol_/" target="_blank"><i class="fab fa-instagram nav-link"></i></a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>

