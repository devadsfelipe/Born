
<template>
    <div id="about">
        <div class="container">
            <div class="row">
                <div class="about-col-1">
                    <img src="../assets/phone-background2.png">
                </div>
                <div class="about-col-2">
                    <h1>About Me</h1>
                    <p>Mineiro de nascimento, mas paulistano de coração, desde cedo me
                        perdia por horas buscando resolver os problemas eletrônicos
                        que apareciam pela casa. Com essa vocação inquieta, a partir de um
                        primeiro contato com programação através de uma passagem pelo curso de
                        Eng. Aerospacial na universidade ferderal do ABC, compreendi que resolver problemas
                        com o uso da programação seria o meu caminho vocacional.
                    </p>

                    <div class="tab-titles">
                        <p :class="[showSkills ? 'tab-links active-link' : 'tab-links']"
                            @click="setTabContent('showSkills')">Skills</p>
                        <p :class="[showExperience ? 'tab-links active-link' : 'tab-links']"
                            @click="setTabContent('showExperience')">Experience</p>
                        <p :class="[showCertifications ? 'tab-links active-link' : 'tab-links']"
                            @click="setTabContent('showCertifications')">Certifications</p>
                    </div>
                    <div v-if="showSkills" id="skills" class="tab-contents active-tab">
                        <ul>
                            <li><span>C# | .NET FRAMEWORK | .NET CORE</span><br>Desenvolvimento de aplicações e serviços em
                                C# (API Rest, messageria, contêineres, bancos relacionais e não relacionais)</li>
                            <li><span>VANILLAJS | VUEJS | KNOCKOUTJS | JQUERY</span><br>Desenvolvimento de páginas web
                                responsivas</li>
                            <li><span>MICROSOFT AZURE CLOUD</span><br>Know-how em programação orientada a nuvem (IAC,
                                AppServices, Functions, Virtual Machines, CI\CD, Kubernetes)</li>
                        </ul>
                    </div>

                    <div v-else-if="showExperience" id="experience" class="tab-contents">
                        <ul>
                            <li><span>DESENVOLVEDOR FULL STACK</span><br>Desenvolvimento de soluções frontend e backend,
                                utilizando tecnologias de ponta</li>
                            <li><span>ANALISTA DE INFRAESTRUTURA DE TI</span><br>Gerenciamento de usuários e privilégios,
                                sustentação de recursos computacionais e resolução de incidentes</li>
                            <li><span>ANALISTA DE GESTÃO DE RISCO (FRAUDE E CRÉDITO)</span><br>Gestão de 
                                risco de crédito e de fraude através da análise de comportamento e 
                                indicadores de riscos</li>
                        </ul>
                    </div>

                    <div v-else-if="showCertifications" id="certifications" class="tab-contents">
                        <ul>
                            <li><span>MICROSOFT AZURE AZ-900</span><br>Conceitos de nuvem em geral e do Microsoft Azure</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
let showSkills = ref(true);
let showExperience = ref(false);
let showCertifications = ref(false);

function setTabContent(tabContent) {
    showSkills.value = false;
    showExperience.value  = false;
    showCertifications.value  = false;

    switch (tabContent) {
        case 'showExperience':
            showExperience.value = true;
            break;
        case 'showCertifications':
            showCertifications.value = true;
            break;
        default:
            showSkills.value = true;
            break;
    }
}
</script>

<style scoped>
#about {
    background-image: linear-gradient(to right, #2f0549, #340551, #3a065a, #3f0662, #45066b, #45066b, #45066b, #45066b, #3f0662, #3a065a, #340551, #2f0549);
    color: var(--off-white);
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
}

.row {
    display: flex;
    justify-content: space-between;
}

.about-col-1 {
    flex-basis: 35%;
}

.about-col-1 img {
    width: 100%;
    border-radius: 15px;
}

.about-col-2 {
    flex-basis: 60%;
}

.about-col-2 h1 {
    font-size: 3em;
    font-weight: 500;
    color: var(--off-white)
}

.tab-titles {
    display: flex;
    margin: 20px 0 20px 0px;
}

.tab-links {
    margin-right: 50px;
    font-size: 1.2em;
    font-weight: 500;
    cursor: pointer;
    position: relative;
}

.tab-links:hover {
    transition: 1.5s ease;
    transform: scale(0.9);
}

.tab-links::after {
    content: '';
    width: 0;
    height: 3px;
    background: var(--light-purple);
    position: absolute;
    left: 0;
    bottom: -8px;
    transition: 0.5s;
}

.tab-links.active-link::after {
    width: 50%;
}

.tab-contents ul {
    margin: 0px;
    padding: 0px;
}

.tab-contents ul li {
    list-style: none;
    margin: 10px 0;
}

.tab-contents ul li span {
    color: var(--light-purple);
    font-size: 14px;
}

.tab-contents.active-tab {
    display: block;
}

/*---- Small Screens ----*/
@media only screen and (max-width: 800px) {

    #about {
        display: block;
        color: var(--off-white);
        font-family: 'Roboto', sans-serif;
        height: 100% !important;
        padding: 0;
    }

    .about-col-1 img {
        margin-top: 20%;
        padding-bottom: 10%;
    }

    .about-col-2 h1 {
        margin-bottom: 20px;
        font-size: 1.7em;
    }

    .row {
        display: inline;
    }

    .tab-links {
        margin-right: 20px;
    }
}
</style>
