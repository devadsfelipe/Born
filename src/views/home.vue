<script setup>
import navigation from '../components/navigation.vue';
</script>

<template>
    <div id="home">
        <div class="container">
            <navigation class="navigation"></navigation>
            <div class="row">
                <div class="cols textdata">
                    <p>FullStack Developer</p>
                    <h1>Olá, eu sou o <span>Felipe</span></h1>
                </div>
                <div class="cols imagedata">
                    <div class="pattern-front"></div>
                    <div class="imgbox">
                        <img src="../assets/background_me.png" alt="">
                    </div>
                    <div class="pattern-back"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    padding: 0% !important;
    margin: 0% !important;
    max-height: 100vh !important;
}

.container {
    position: relative;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    max-width: 100%;
    background: linear-gradient( rgba(0, 0, 0), var(--deep-purple));

}

.navigation {
    z-index: 5;
}

.row {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
}

.row .textdata {
    z-index: 4;
    padding-left: 60px !important;
    padding-bottom: 10% !important;
    color: var(--light-purple);
    
}

.row .textdata h1 {
    font-weight: 600;
    font-size: 4rem;
}

.row .textdata h1 span {
    color: var(--off-white);
    font-weight: 800;
    font-size: 4.5rem;
    letter-spacing: 1px;
}

.row .textdata p {
    font-size: 1.3em;
    letter-spacing: 0.08em;
    margin-left: 1% !important;
    color: var(--off-white);
}

.cols {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.imagedata {
    overflow: hidden;
}

.imgbox {
    position: relative;
    width: 100%;
    left: 15%;
    z-index: 1;
    transition: 3s ease;
}

.imgbox img {
    padding-top: 100px;
    width: 100%;
}

.imagedata:hover .imgbox {
    transform: translateX(-20px);
}

.imagedata .pattern-back {
    position: absolute;
    background: url('../src/assets/background_splash_back.png');
    height: 100%;
    width: 90%;
    background-size: cover;
    left: 40%;
    top: 40px;
    transition: 4s ease;
}

.imagedata:hover .pattern-back {
    transform: translateX(+10px);
    transform: scale(1.3);
}

.imagedata .pattern-front {
    position: absolute;
    background: url('../src/assets/background_splash_front.png');
    height: 100%;
    max-height: 320px !important;
    width: 60%;
    z-index: 2;
    top: 55%;
    background-size: cover;
    transition: 3s ease;
}

.imagedata:hover .pattern-front {
    transform: translateX(40px);
    transform: scale(0.8);
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
