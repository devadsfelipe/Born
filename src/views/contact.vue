<script setup>
</script>

<template>
    <div id="contact">
        <div class="container">
            <div class="row">
                <div class="contact-left">
                    <h1>Contact Me</h1>
                    <p><i class="fas fa-paper-plane"></i>devads.felipe@gmail.com</p>
                    <p><i class="fas fa-phone-square-alt"></i>+55 11 97510-8358</p>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="contact-right">
                    <form>
                        <input type="text" name="Nome" placeholder="Digite seu Nome..." maxlength="200" required>
                        <input type="email" name="Email" placeholder="Digite seu Email..." maxlength="200" required>
                        <textarea name="Message" rows="6" placeholder="Digite sua Mensagem..." maxlength="600"
                            required></textarea>
                        <button type="submit">Enviar</button>
                    </form>
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

.contact-left {
    flex-basis: 35%;
}

.contact-right {
    flex-basis: 60%;
}

.contact-left p {
    margin-top: 30px;
}

.contact-left p i {
    color: var(--fifth);
    margin-right: 15px;
    font-size: 25px;
}

.social-icons {
    margin-top: 30px;
}

.social-icons a{
    text-decoration: none;
    font-size: 30px;
    margin-right: 15px;
    color: var(--fifth);
}


</style>
