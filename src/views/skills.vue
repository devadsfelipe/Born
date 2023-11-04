<template>
    <div id="skills">
        <div class="container">
            <h1>Skills</h1>
            <div class="skills-list">
                <div>
                    <h2>Back-end</h2>
                    <p> &bull; Desenvolvimento de soluções em <b>C#</b> utilizando a stack <b>.Net Core e Framework</b>.
                    <p> &bull; Know-how em soluções assíncronas utilizando <b>RabbitMQ,
                            Azure Service Bus, Event Grid e Event Hubs</b>.</p>
                    <p> &bull; Habilidade com serviços indepentes e altamente escalonáveis com <b>Docker e Kubernetes</b>.
                    </p>
                    <p> &bull; Levantamento de requisitos, arquitetura de soluções, gerenciamento da infraestrutura
                        de recursos e prospeção de <b>redução de custos</b>.
                    </p>
                    </p>
                </div>
                <div>
                    <h2>Front-end</h2>
                    <p> &bull; Sólidos conhecimentos em <b>VueJS 2.0 e 3.0</b> com proficiência em componentização.</p>
                    <p> &bull; Atuação em <b>KnockoutJS</b> e <b>jQuery</b>.</p>
                    <p> &bull; Codificação em <b>JavaScript</b> puro (VanillaJS).</p>
                    <p> &bull; Sketchs com <b>HTML5</b> e <b>CSS3</b>.</p>
                    <p> &bull; Versionamento de código com <b>GIT</b>.</p>
                    <p> &bull; <b>Design responsivo</b> e construção de conteúdo criativo.</p>
                </div>
                <div>
                    <h2>Cloud Computing</h2>
                    <p> &bull; Vivência diária com <b>Azure Cloud</b></p>
                    <p> &bull; Competência na criação de recursos <b>auto escaláveis</b> através de <b>automações</b> baseadas em PowerShell</p>
                    <p> &bull; Know-how no gerenciamento de recursos através via <b>IAC</b> (infrastructure as code)</p>
                    <p> &bull; Proficiência na implementação de aplicações utilizando <b>AKS</b></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
#skills {
    background-image: linear-gradient(to right, #2f0549, #340551, #3a065a, #3f0662, #45066b, #45066b, #45066b, #45066b, #3f0662, #3a065a, #340551, #2f0549);
    padding: 30px 0;
    color: var(--off-white);
    height: 100vh;
}

.skills-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 40px;
    margin: 20px 0px;
}

.skills-list div {
    background: var(--purple);
    padding: 30px 40px;
    font-size: 15px;
    font-weight: 400;
    border-radius: 20px;
    transition: background 0.5s, transform 0.5s;
}

.skills-list div:hover {
    background: var(--light-purple);
    transform: translateY(-10px);
}

.skills-list div h2 {
    font-size: 30px;
    font-weight: 500;
    border-bottom: 15px;
}

@media only screen and (max-width: 1000px) {
    #skills{
        height: 1800px;
    }
    .container{
        margin-top: 40px;
    }
    .skills-list {
        grid-gap: 40px;
        margin: 40px 20px ;
    }

    .skills-list div{
        padding: 30px 30px;
    }
}
</style>
