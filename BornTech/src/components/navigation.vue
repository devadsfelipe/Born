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
        <div class="navbar-nav">
          <a href="#" class="logo"><b>F.</b>elps</a>
        </div>
        <div class="navbar-nav ms-auto">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/skills" class="nav-link">Skills</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>
        <div class="navbar-nav ms-auto">
          <div class="toggleSwitches ">
            <a><i class="fa fa-sun"></i></a>
            <i class="fa fa-moon"></i>
            <a class="selectLanguage">English</a>
            </div>
          </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

.logo{
  font-family: 'Roboto';
  font-size: 25px;
  color: var(--primary);
  font-weight: 400;
  text-decoration: none;
}

.logo b{
  color: var(--textcolor)
}

.toggleSwitches{
  align-self: center;
  color: var(--bs-navbar-color)
}

.selectLanguage{
  font-weight: 500;
  text-decoration: none;
  color: var(--bs-navbar-color)
}
</style>

