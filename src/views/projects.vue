
<template>
    <div id="projects">
        <div class="container">
            <h1>Projetos</h1>
            <div class="projects-list">
                <div class="projects-carrossel">
                    <img src="../assets/portfolio-background.png">
                    <div class="layer">
                        <h3>Personal Portfolio</h3>
                        <p>Portfolio pessoal (este que você está acessando) construído com VueJS 3.0 baseado em composition
                            API, Html e Css,
                            totalmente responsível.
                            Utilização de continuous deploy via Netlify e disponibilização feita através do GitHub Pages.
                        </p>
                        <a href="#"></a>
                        <p><b>Custo do projeto: R$29,90 (Domínio customizado)</b></p>
                        <p><b>Esforço: 1 Sprint</b></p>
                    </div>
                </div>
                <div class="projects-carrossel">
                    <img src="../assets/work-2.png">
                    <div class="layer">
                        <h3>Gym Landing Page</h3>
                        <p>Landing page de academia com finalidade a apresentação comercial do
                            empreendimento.</p>
                        <a href="#"></a>
                        <p><b>Custo do projeto: R$99,90 (Domínio customizado + Hospedagem)</b></p>
                        <p><b>Esforço: 2 Sprints</b></p>
                    </div>
                </div>
                <div class="projects-carrossel">
                    <img src="../assets/work-3.png">
                    <div class="layer">
                        <h3>Locadora de Veículos</h3>
                        <p>Aplicação Web destinada a locação de veículos.</p>
                        <p>Construída em VueJS 3.0 com backend em C#.</p>
                        <a href="#"></a>
                        <p><b>Custo do projeto: R$2599,00 (Domínio customizado + Hospedagem)</b></p>
                        <p><b>Esforço: 6 Sprints</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
#projects {
    background-image: linear-gradient(to right, #2f0549, #340551, #3a065a, #3f0662, #45066b, #45066b, #45066b, #45066b, #3f0662, #3a065a, #340551, #2f0549);
    padding: 70px 0;
    color: var(--off-white);
    height: 100vh;
}

.projects-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 40px;
    margin: 50px 0px;
}

.projects-carrossel {
    border-radius: 10px;
    position: relative;
    overflow: hidden;
}

.projects-carrossel img {
    width: 100%;
    border-radius: 10px;
    display: block;
    transition: transform 0.5s;
}

.projects-carrossel:hover img {
    transform: scale(1.1);
}

.projects-carrossel:hover .layer {
    height: 100%;
}

.layer {
    width: 100%;
    height: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), var(--light-purple));
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    transition: 0.5s;
}

.layer h3 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
}

.layer p {
    font-size: 15px;
    font-weight: 400;
}

/*---- Small Screens ----*/
@media only screen and (max-width: 1000px) {
    #projects {
        height: 1600px;
    }

    .projects-list {
        margin: 50px 20px;
    }
}
</style>
