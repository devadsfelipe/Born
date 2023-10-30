<script setup>
</script>

<template>
    <div id="skills">
        <div class="container">
            <h1>Skills</h1>
            <div class="skills-list">
                <div>
                    <h2>Back-end</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, lectus in ullamcorper
                        dictum, risus tortor venenatis dui, id pharetra est nisi vel est. Etiam tincidunt dui in laoreet
                        convallis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, lectus in ullamcorper
                        dictum, risus tortor venenatis dui, id pharetra est nisi vel est. Etiam tincidunt dui in laoreet
                        convallis.</p>
                </div>
                <div>
                    <h2>Front-end</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, lectus in ullamcorper
                        dictum, risus tortor venenatis dui, id pharetra est nisi vel est. Etiam tincidunt dui in laoreet
                        convallis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, lectus in ullamcorper
                        dictum, risus tortor venenatis dui, id pharetra est nisi vel est. Etiam tincidunt dui in laoreet
                        convallis.</p>
                </div>
                <div>
                    <h2>Cloud Computing</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, lectus in ullamcorper
                        dictum, risus tortor venenatis dui, id pharetra est nisi vel est. Etiam tincidunt dui in laoreet
                        convallis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, lectus in ullamcorper
                        dictum, risus tortor venenatis dui, id pharetra est nisi vel est. Etiam tincidunt dui in laoreet
                        convallis.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#skills {
    background-image: linear-gradient(to right, #2f0549, #340551, #3a065a, #3f0662, #45066b, #45066b, #45066b, #45066b, #3f0662, #3a065a, #340551, #2f0549);
    padding: 40px 0;
    color: var(--off-white);
}

.skills-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 40px;
    margin: 80px 0px;
}

.skills-list div {
    background: var(--purple);
    padding: 40px;
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

</style>
