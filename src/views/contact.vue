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
                    <div>
                        <a href="assests/my-cv.pdf" download class="btn">Download CV</a>
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
        <div class="copyright">
            <p>Copyright &copy; Felipe Oliveira. 2024</p>
        </div>
    </div>
</template>

<style scoped>
#contact {
    background: var(--deep-black);
    padding: 100px 0 20px 0;
    color: var(--off-white);
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

.social-icons {
    margin-top: 30px;
}

.social-icons a {
    text-decoration: none;
    font-size: 30px;
    margin-right: 15px;
    color: var(--purple);
    display: inline-block;
}

.social-icons a:hover {
    color: var(--light-purple);
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
    font-weight: 300;
    letter-spacing: 2px;
}

.btn:hover {
    background: var(--light-purple);
    color: var(--off-white);
    transition: 0.5s ease;
    transform: scale(0.9);
}

.contact-right form{
    width: 100%;
}

form input, form textarea{
    width: 100%;
    border: 0;
    outline: none;
    background: #262626;
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
    font-size: 15px;
    color: var(--gray);
}

.contact-right button{
    position: relative;
    display: inline-block;
    margin: 40px 10px;
    background: var(--purple);
    color: var(--off-white);
    border: none;
    border-radius: 2px;
    font-size: 15px;
    font-weight: 300;
    letter-spacing: 2px;
    width: 100%;
    padding: 10px;
    height: 100%;
}

.contact-right button:hover {
    background: var(--light-purple);
    color: var(--off-white);
    transition: 0.5s ease;
    transform: scale(0.9);
}

.copyright{
    width: 100%;
    text-align: center;
    padding: 20px 0 5px 0;
    font-weight: 300;
    margin-top: 20px;
    color: var(--off-white);
}
</style>
