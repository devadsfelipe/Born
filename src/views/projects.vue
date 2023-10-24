<script setup>
</script>

<template>
    <div id="projects">
        <div class="container">
            <h1>Projects</h1>
            <div class="projects-list">
                <div class="projects-carrossel">
                    <img src="../assets/work-1.png">
                    <div class="layer">
                        <h3>E-Commerce</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, lectus in ullamcorper
                            dictum, risus tortor venenatis dui, id pharetra est nisi vel est. Etiam tincidunt dui in laoreet
                            convallis.</p>
                        <a href="#"></a>
                    </div>
                </div>
                <div class="projects-carrossel">
                    <img src="../assets/work-2.png">
                    <div class="layer">
                        <h3>Gym App</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, lectus in ullamcorper
                            dictum, risus tortor venenatis dui, id pharetra est nisi vel est. Etiam tincidunt dui in laoreet
                            convallis.</p>
                        <a href="#"></a>
                    </div>
                </div>
                <div class="projects-carrossel">
                    <img src="../assets/work-3.png">
                    <div class="layer">
                        <h3>Locação de Carros</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, lectus in ullamcorper
                            dictum, risus tortor venenatis dui, id pharetra est nisi vel est. Etiam tincidunt dui in laoreet
                            convallis.</p>
                        <a href="#"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#projects {
    background: rgb(0, 0, 0);
    padding: 50px 0;
    color: #ababab;
    color: var(--secondary);
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

.projects-carrossel:hover img{
    transform: scale(1.1);
}

.projects-carrossel:hover .layer{
    height: 100%;
}

.layer {
    width: 100%;
    height: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.6), var(--fifth));
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
    font-weight: 300;
}


</style>
