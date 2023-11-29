<template>
    <section class="py-4 py-md-5">
        <div class="container py-md-5">
            <div class="row">
                <div class="col-md-6 text-center"><img class="img-fluid w-100" src="@/assets/img/illustrations/register.svg" /></div>
                <div class="col-md-5 col-xl-4 text-center text-md-start">
                    <h2 class="display-6 fw-bold mb-5"><span class="underline pb-1"><strong>Cadastro</strong></span></h2>
                     <!-- Social Media Register Buttons -->
                <div class="mb-3 d-flex justify-content-center justify-content-md-start">
                    <button class="btn btn-outline-danger me-2" type="button" @click="loginWithGoogle">
                        <i class="bi bi-google"></i>
                    </button>
                    <button class="btn btn-outline-primary me-2" type="button" @click="loginWithFacebook">
                        <i class="bi bi-facebook"></i>
                    </button>
                </div>

                <!-- Divider -->
                <hr>

                <!-- Email Registration -->
                <form @submit.prevent="registerUser">
                    <div class="mb-3">
                        <input class="shadow-sm form-control" type="text" v-model="username" placeholder="Username" />
                    </div>
                    <div class="mb-3">
                        <input class="shadow-sm form-control" type="email" v-model="email" placeholder="Email" />
                    </div>
                    <div class="mb-3">
                        <input class="shadow-sm form-control" type="password" v-model="password" placeholder="Password" />
                    </div>
                    <div class="mb-3">
                        <input class="shadow-sm form-control" type="password" v-model="passwordRepeat" placeholder="Repeat Password" />
                    </div>
                    <div class="mb-5">
                        <button class="btn btn-primary shadow" type="submit">Create account</button>
                    </div>
                </form>
                    <p class="text-muted">Have an account? <a href="login.html">Log in<svg class="icon icon-tabler icon-tabler-arrow-narrow-right" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <line x1="15" y1="16" x2="19" y2="12"></line>
                                <line x1="15" y1="8" x2="19" y2="12"></line>
                            </svg></a></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "@/axios"; // Importa a instância do Axios configurada

export default {
    name: 'SignUp',
    data() {
        return {
            username: '',
            email: '',
            password: '',
            passwordRepeat: ''
        };
    },
    methods: {
        async registerUser() {
            if (this.password !== this.passwordRepeat) {
                alert("As senhas não coincidem.");
                return;
            }

            try {
                const response = await axios.post('/api/auth/local/register', {
                    username: this.username,
                    email: this.email,
                    password: this.password
                });

                console.log('Cadastro bem-sucedido:', response.data);
                this.$router.push('/login');
            } catch (error) {
                console.error("Erro no cadastro: ", error.response);
                // Aqui você pode exibir uma mensagem de erro para o usuário
            }
        },
        loginWithFacebook() {
        const facebookLoginUrl = 'http://localhost:1337api/connect/facebook'; // URL do Strapi para iniciar o login com Facebook
        window.location.href = facebookLoginUrl;
        },
        loginWithGoogle() {
            const googleLoginUrl = 'http://localhost:1337/api/connect/google'; // URL do Strapi para iniciar o login com Facebook
            window.location.href = googleLoginUrl;
        }
    }
}
</script>

<style>

</style>