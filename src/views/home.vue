<template>
    <div id="home">
        <div class="container">
            <navigation></navigation>
            <div class="row">
                <div class="col">
                    <p>FullStack Developer</p>
                    <h1>Hi! I'm <span>Felipe</span></h1>
                    <div class="scroll">
                        <div class="scroller">
                            <ul class="tag-list scroller__inner">
                                <li>C#</li>
                                <li>.Net</li>
                                <li>VueJS</li>
                                <li>Microsoft Azure</li>
                                <li>SQL Server</li>
                                <li>JavaScript</li>
                                <li>CSS</li>
                                <li>KnockoutJS</li>
                                <li>HTML</li>
                                <li>JQuery</li>
                                <li>DevOps</li>
                                <li>Agile</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { onMounted } from 'vue';
import navigation from '../components/navigation.vue';

onMounted(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    };

    function addAnimation() {
        const scrollers = document.querySelectorAll(".scroller");
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    };
});
</script>


<style scoped>
#home {
    width: 100%;
    background-image: linear-gradient(to right, #2f0549, #340551, #3a065a, #3f0662, #45066b, #45066b, #45066b, #45066b, #3f0662, #3a065a, #340551, #2f0549);
}

.container {
    overflow: hidden;
    max-width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
}

.row {
    position: relative;
    display: flex;
}

.col {
    position: absolute;
    text-align: center;
    top: 25vh;
    color: var(--off-white);
}

.col h1 {
    font-weight: 600;
    font-size: 4rem;
    color: var(--light-purple);
}

.col h1 span {
    font-weight: 800;
    font-size: 6rem;
    letter-spacing: 3px;
    color: var(--off-white);
}

.col p {
    font-size: 1.2em;
    letter-spacing: 0.08em;
    margin-bottom: 0;
}

.tag-list {
    margin-left: auto;
    margin-right: auto;
    display: table;
    margin: 0;
    padding-inline: 0;
    list-style: none;
}

.tag-list li {
    padding: 1rem;
    background: var(--purple);
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 3rem -0.25rem hsl(218, 33%, 9%);
}

.scroll {
    position: relative;
    width: 100%;
}

.scroller {
    position: absolute;
    right: 30%;
    max-width: 40%;
}

.scroller__inner {
    padding-block: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.scroller[data-animated="true"] {
    overflow: hidden;
    -webkit-mask: linear-gradient(90deg,
            transparent,
            white 20%,
            white 80%,
            transparent);
    mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.scroller[data-animated="true"] .scroller__inner {
    width: max-content;
    flex-wrap: nowrap;
    animation: scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear infinite;
}

.scroller[data-direction="right"] {
    --_animation-direction: reverse;
}

.scroller[data-direction="left"] {
    --_animation-direction: forwards;
}

.scroller[data-speed="fast"] {
    --_animation-duration: 20s;
}

.scroller[data-speed="slow"] {
    --_animation-duration: 60s;
}

/*  */

@keyframes scroll {
    to {
        transform: translate(calc(-50% - 0.5rem));
    }
}

/*---- Small Screens ----*/
@media only screen and (max-width: 1000px) {
    .scroller {
        width: 80%;
        max-width: 100%;
        left: 10vw;
    }
}
</style>
