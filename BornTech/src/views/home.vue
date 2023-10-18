<script setup>

</script>

<template>
    <div class="row">
        <div class="cols textdata">
            <h2>Olá, sou o <span>Felipe</span></h2>
            <div style="padding-left: 10px;">
                <h3>Full Stack Developer</h3>
                <p>Fascinado em <b>solucionar problemas</b> complexos e <b>prospectar soluções</b> inovadoras com uso da tecnologia. Desbravador de otimizações de recursos financeiros através da <b>Cloud Computing</b> para chegar o mais perto possível do equilibrio entre custo/operação</p>
                <div>
                    <button class="downloadCv-button">Download CV</button>
                    <button>Me mande uma whatsapp</button>
                </div>
                <div class="socialMidia">
                    <a href="https://www.linkedin.com/in/felipe-o-612b4b84" target="_blank"><i
                            class="fab fa-linkedin nav-link"></i></a>
                    <a href="https://www.instagram.com/felipe_ol_/" target="_blank"><i
                            class="fab fa-instagram nav-link"></i></a>
                </div>
                <div class="cols photo">
                    <div class="imgbox">
                        <!-- <img src="../assets/photo-me.png" class="img-fluid" alt="photo"> -->
                        <img src="" class="img-fluid" alt="photo">
                    </div>
                    <div class="pattern"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.row {
    position: relative;
    display: flex;
    width: 100%;
    height: calc(100vh - 100px);
}

.cols {
    max-width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 60px;
}

.textdata h2 {
    font-family: 'Tilt Neon', sans-serif;
    color: var(--primary);
    font-size: 5em;
    font-weight: 400;
    /* z-index: 1111; */
}

.textdata h2 span {
    color: var(--textcolor);
    font-weight: 900;
}

.textdata p b {
    color: var(--textcolor);
    line-height: 30px;
}

.textdata h3 {
    font-family: 'Tilt Neon', sans-serif;
    color: var(--primary);
    font-size: 1.5em;
    font-weight: 400;

}
</style>
