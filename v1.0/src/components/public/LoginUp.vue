<template>
    <section class="py-4 py-md-5">
        <div class="container py-md-5">
            <div class="row">
                <div class="col-md-6 text-center">
                    <img class="img-fluid w-100" src="@/assets/img/illustrations/login.svg" />
                </div>
                <div class="col-md-5 col-xl-4 text-center text-md-start">
                    <h2 class="display-6 fw-bold mb-5">
                        <span class="underline pb-1"><strong>Login</strong><br /></span>
                    </h2>

                    <!-- Social Media Login Buttons -->
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

                    <!-- Login Form -->
                    <form data-bs-theme="light" @submit.prevent="loginUser">
                        <div class="mb-3">
                            <input class="shadow form-control" type="email" v-model="email" placeholder="Email" />
                        </div>
                        <div class="mb-3">
                            <input class="shadow form-control" type="password" v-model="password" placeholder="Password" />
                        </div>
                        <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
                        <div class="mb-5">
                            <button class="btn btn-primary shadow" type="submit">Log in</button>
                        </div>
                    </form>
                    <p class="text-muted">
                        <router-link to="/forgot">Esqueceu a senha?</router-link>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import axios from "@/axios"; // Importa a instância do Axios configurada
import { useStore } from 'vuex';

export default {
    name: 'LoginUp',
    data() {
        return {
            email: '',
            password: '',
            errorMessage: ''
        };
    },
    setup() {
        const store = useStore(); // Acessa a store Vuex
        return { store };
    },
    methods: {
        async loginUser() {
            try {
                const response = await axios.post('/api/auth/local', {
                    identifier: this.email,
                    password: this.password
                });

                // Despacha a ação loginUser para a store Vuex
                this.store.dispatch('login', {
                    user: response.data.user,
                    jwt: response.data.jwt
                });

                // Redireciona para a página inicial do dashboard
                this.$router.push('/dashboard/home');
            } catch (error) {
                this.errorMessage = 'E-mail e/ou senha inválidos.';
                console.error("Login error: ", error.response);
            }
        },
        loginWithFacebook() {
            const facebookLoginUrl = 'http://localhost:1337/api/connect/facebook'; // Ajuste a URL conforme necessário
            window.location.href = facebookLoginUrl;
        },
        loginWithGoogle() {
            const googleLoginUrl = 'http://localhost:1337/api/connect/google'; // Ajuste a URL conforme necessário
            window.location.href = googleLoginUrl;
        }
    }
}
</script>

<style></style>