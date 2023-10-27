
<template>
    <div id="about">
        <div class="container">
            <div class="row">
                <div class="about-col-1">
                    <img src="../assets/user.png">
                </div>
                <div class="about-col-2">
                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, lectus in ullamcorper
                        dictum, risus tortor venenatis dui, id pharetra est nisi vel est. Etiam tincidunt dui in laoreet
                        convallis. Aliquam erat volutpat. Suspendisse potenti. Integer nec dictum lectus. Sed rhoncus ac ex
                        non interdum. Nunc pellentesque, urna finibus iaculis faucibus, urna magna tincidunt est, sed
                        placerat massa purus tincidunt dolor.</p>

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
                            <li><span>.NET CORE & FRAMEWORK</span><br>Desenvolvimento de aplicações e serviços com C#</li>
                            <li><span>VUEJS & KNOCKOUTJS</span><br>Desenvolvimento de páginas web responsivas</li>
                            <li><span>MICROSOFT AZURE CLOUD</span><br>Vivência diária com desenvolvimento orientado a Cloud
                            </li>
                        </ul>
                    </div>

                    <div v-else-if="showExperience" id="experience" class="tab-contents">
                        <ul>
                            <li><span>GESTÃO DE RISCO DE CRÉDITO E FRAUDE</span><br>Conceitos de nuvem em geral e do
                                Microsoft Azure</li>
                            <li><span>INFRAESTRUTURA DE TI</span><br>Desenvolvimento de aplicações e serviços usando a stack
                                C#</li>
                            <li><span>DESENVOLVIMENTO FULL STACK</span><br>Desenvolvimento de páginas web responsivas</li>
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
import { ref, reactive, computed, watch } from 'vue'

const showSkills = ref(true);
const showExperience = ref(false);
const showCertifications = ref(false);

function setTabContent(tabContent) {
    this.showSkills = false;
    this.showExperience = false;
    this.showCertifications = false;

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
    background: linear-gradient(var(--deep-purple), rgba(0, 0, 0));
    /* background: var(--deep-purple); */
    padding: 120px 0;
    color: var(--off-white);
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
}</style>
