<script setup>
import navigation from '../components/navigation.vue';
</script>

<template>
    <div id="home">
        <div class="container">
            <navigation></navigation>

            <div class="home-text">
                <h1>Olá, eu sou o <span>Felipe</span></h1>
                <h2>FullStack Developer</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
#home {
    width: 100%;
    height: 100vh;
    background-image: url(../src/assets/background.png);
    background-size: cover;
    background-position: center;
}

.home-text {
    margin-top: 20%;
}

.home-text h1 {
    font-size: 5em;
}

.home-text h1 span {
    font-size: 1.4em;
    color: var(--fourth);
}

.home-text h2 {
    font-size: 2em;
    letter-spacing: 0.08em;
}
</style>
