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
    background-image: url(../src/assets/background2.png);
    background-size: cover;
    background-position: center;
}

.home-text {
    margin-top: 18%;
}

.home-text h1 {
    font-size: 4rem;
    letter-spacing: 1px;
}

.home-text h1 span {
    font-size: 1.4em;
    color: var(--fifth);
    letter-spacing: 2px;
}

.home-text h2 {
    font-size: 1.5em;
    letter-spacing: 0.08em;
    margin-left: 5px;
}


/*---- Small Screens ----*/
@media only screen and (max-width: 600px) {
    #home {
        background-image: url(../src/assets/phone-background2.png);
    }

    .home-text {
        margin-top: 150%;
        font-size: 10px;
    }

    .home-text h1 {
        font-size: 5em;
    }

}
</style>
