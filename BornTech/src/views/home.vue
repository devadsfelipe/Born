<script setup>

</script>

<template>
    <div class="row">
        <div class="cols textdata">
            <h2>Olá, sou o <span>Felipe</span></h2>
            <div style="margin-left: 15px;">
                <h3>Full Stack Developer</h3>
                <p>Sou fascinado em <b>solucionar problemas</b> complexos e <b>prospectar soluções</b> inovadoras com
                    uso da
                    tecnologia. Desbravador de otimizações de recursos financeiros através da <b>Cloud Computing</b>
                    para
                    chegar o mais perto possível do equilibrio entre custo/operação
                </p>
                <div class="btn">
                    <button>Download CV</button>
                </div>
                <div class="socialmidia">
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-github"></i>
                </div>
            </div>
        </div>
        <div class="cols imagedata">
            <div class="imgbox">
                <img src="../assets/photo-me.png">
            </div>
            <div class="pattern"></div>
        </div>
    </div>
</template>

<style scoped>
.row {
    position: relative;
    display: flex;
    width: 100%;
    margin: 2%;
}

.cols {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.textdata a {
    text-decoration: none;
}

.textdata h2 {
    font-family: 'Tilt Neon', sans-serif;
    color: var(--textcolor);
    font-size: 4em;
    font-weight: 400;
    /* z-index: 1111; */
}

.textdata h2 span {
    color: var(--primary);
    font-weight: 900;
}

.textdata h3 {
    font-family: 'Tilt Neon', sans-serif;
    color: var(--textcolor);
    font-size: 1.5em;
    font-weight: 400;
    margin-top: 20px;
}

.textdata p {
    font-size: 1em;
    font-weight: 400;
    margin: 20px 0;
    color: var(--textcolor);
    line-height: 30px;
}

.textdata p b {
    color: var(--primary);
}

.textdata .btn {
    width: 100%;
    margin: 20px 0px 130px;
    padding: 0px;
    text-align: start;
    min-width: 170px;
}

.btn button {
    border: none;
    min-width: 60px;
    background: var(--primary);
    color: var(--secondary);
    font-size: 15px;
    text-transform: capitalize;
    letter-spacing: 1px;
    padding: 10px 30px;
    box-shadow: 0 10px 20px 0 var(--textcolor);
    cursor: pointer;
}

.btn button:hover {
    transition: 0.4s ease;
    padding: 10px 90px;
}

.socialmidia {
    /* margin: 20px 0px; */
}

.socialmidia i {
    font-size: 1.5em;
    margin-right: 20px;
    cursor: pointer;
    color: var(--textcolor);
    transition: 0.3s ease;
}

.socialmidia i:hover {
    font-size: 2.5em;
    color: var(--primary);
}

.imagedata {
    overflow: hidden;
}

.imgbox {
    z-index: 1;
    transition: 0.9s ease;
}

.imgbox img {
    width: 70%;
}

.imagedata:hover .imgbox {
    transform: translateX(10px);
}

.imagedata .pattern {
    position: absolute;
    background-color: url('../assets/C_Sharp_Icon.png');
}
</style>
