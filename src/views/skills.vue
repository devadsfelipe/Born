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
                        convallis.</p>
                    <img id="backendImageCSharp" src="../assets/C_Sharp_Icon.png">
                    <img id="backendImageRabbit" src="../assets/Rabbit_Icon.png">
                </div>
                <div>
                    <h2>Front-end</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, lectus in ullamcorper
                        dictum, risus tortor venenatis dui, id pharetra est nisi vel est. Etiam tincidunt dui in laoreet
                        convallis.</p>
                    <img id="frontendImageJavaScript" src="../assets/JS_Icon.png">
                    <img id="frontendImageVueJS" src="../assets/Vue_Icon.png">
                    <!-- <img id="frontendImageKnockoutJS" src="../assets/.png"> -->
                </div>
                <div>
                    <h2>Cloud Computing</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, lectus in ullamcorper
                        dictum, risus tortor venenatis dui, id pharetra est nisi vel est. Etiam tincidunt dui in laoreet
                        convallis.</p>
                    <img id="cloudImage" src="../assets/Azure_icon.png">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#skills {
    background: rgb(0, 0, 0);
    padding: 40px 0;
    color: #ababab;
    color: var(--secondary);
}

.skills-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 40px;
    margin: 80px 0px;
}

.skills-list div {
    background: var(--sixth);
    padding: 40px;
    font-size: 15px;
    font-weight: 300;
    border-radius: 20px;
    transition: background 0.5s, transform 0.5s;
}

.skills-list div:hover {
    background: var(--fifth);
    transform: translateY(-10px)
}

.skills-list div h2 {
    font-size: 30px;
    font-weight: 500;
    border-bottom: 15px;
}

#backendImageCSharp {
    margin: 30px 20px 0 0;
    width: 20%;
    border: none;
    border-radius: 20%;
    padding-inline: 4px;
    background: var(--secondary);
}

#backendImageRabbit {
    margin-top: 30px;
    width: 22%;
    border: none;
    border-radius: 20%;
    padding-inline: 3px;
    background: var(--secondary);
}

#frontendImageJavaScript {
    margin: 30px 20px 0 0;
    width: 20%;
    border: none;
    border-radius: 20%;
    padding-inline: 4px;
    background: var(--secondary);
}

#frontendImageVueJS {
    margin-top: 30px;
    width: 20%;
    border: none;
    border-radius: 20%;
    padding-inline: 4px;
    background: var(--secondary);
}

#cloudImage {
    width: 20%;
    margin-top: 30px;
    border: none;
    border-radius: 20%;
    background: var(--secondary);
}

.skills-list div img:hover {
    transition: 0.5s ease;
    transform: scale(0.9);
}

/* .skills-list div img {
    animation:
    20s linear 2s infinite alternate rise,
    20s linear 2s infinite alternate bounce;
}

@keyframes rise {
  from {
    transform: translateX(20vw);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes bounce {
  from {
    transform: translateX(0vw);
  }
  to {
    transform: translateX(10vw);
  }
} */


</style>
