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
                    <div class="container-btn">
                        <a href="assets/my-cv.pdf" download class="btn">Download CV</a>
                    </div>
                    <div class="social-icons">
                        <a href="https://www.instagram.com/felipe_ol_/"><i class="fab fa-instagram fa-xl"></i></a>
                        <a href="www.linkedin.com/in/felipe-o-612b4b84"><i class="fab fa-linkedin fa-xl"></i></a>
                        <a href="https://github.com/devadsfelipe"><i class="fab fa-github fa-xl"></i></a>
                    </div>
                </div>
                <!-- <div class="contact-right">
                    <form>
                        <input type="text" name="Nome" placeholder="Digite seu Nome..." maxlength="200" required>
                        <input type="email" name="Email" placeholder="Digite seu Email..." maxlength="200" required>
                        <textarea name="Message" rows="6" placeholder="Digite sua Mensagem..." maxlength="600"
                            required></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div> -->
            </div>
        </div>
        <div class="copyright">
            <p>Copyright &copy; Felipe Oliveira. 2024</p>
        </div>
    </div>
</template>

<style scoped>
#contact {
    background-image: linear-gradient(to right, #2f0549, #340551, #3a065a, #3f0662, #45066b, #45066b, #45066b, #45066b, #3f0662, #3a065a, #340551, #2f0549);
    padding: 80px 0 20px 0;
    color: var(--off-white);
    height: 100vh;
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
    color: var(--purple);
    margin-right: 15px;
    font-size: 25px;
}

.social-icons a {
    text-decoration: none;
    font-size: 30px;
    margin-top: 5%;
    margin-right: 10%;
    color: var(--off-white);
    display: inline-block;
    transition: 0.5s ease;
}

.social-icons a:hover {
    color: var(--purple);
    transform: translateY(-5px)
}

.btn {
    position: relative;
    display: inline-block;
    margin: 40px 0px;
    background: var(--purple);
    color: var(--off-white);
    border-radius: 2px;
    font-size: 15px;
    font-weight: 500;
    width: 80%;
}

.btn:hover {
    background: var(--purple);
    transition: 0.5s ease;
    transform: scale(1.1);
}

.contact-right form {
    width: 100%;
}

form input,
form textarea {
    width: 100%;
    border: 0;
    outline: none;
    background: #262626;
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
    font-size: 15px;
    color: var(--gray);
    font-weight: 500;
}

.contact-right button {
    position: relative;
    display: inline-block;
    margin: 20px 10px;
    background: var(--purple);
    color: var(--off-white);
    border: none;
    border-radius: 2px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 2px;
    width: 100%;
    padding: 10px;
}

.contact-right button:hover {
    transition: 0.5s ease;
    transform: scale(1.02);
}

.copyright {
    width: 100%;
    text-align: center;
    font-weight: 400;
    margin-top: 10%;
    color: var(--off-white);
}


/*---- Small Screens ----*/
@media only screen and (max-width: 800px) {
    .row {
        display: inline;
    }

    .social-icons {
        text-align: center;
    }

    .container-btn {
        text-align: center;
    }

    .contact-left h1 {
        padding-bottom: 20%;
    }

    .btn {
        width: 100%;
        font-size: 15px;
        font-weight: 500;
    }

    .social-icons {
        padding-top: 20%;
        margin-left: 10%;
    }
}
</style>
