<template>
    <section class="py-4 py-md-5">
        <div class="container py-md-5">
            <div class="row d-flex align-items-center">
                <div class="col-md-6 text-center">
                    <img class="img-fluid w-100" src="@/assets/img/illustrations/register.svg" />
                </div>
                <div class="col-md-5 col-xl-4 text-center text-md-start">
                    <h2 class="display-6 fw-bold mb-4">Reset your <span class="underline">password</span></h2>
                    <p class="text-muted">Enter your new password below.</p>
                    <form @submit.prevent="resetPassword">
                        <div class="mb-3">
                            <input class="shadow form-control" type="password" v-model="password" placeholder="New Password" />
                        </div>
                        <div class="mb-3">
                            <input class="shadow form-control" type="password" v-model="passwordConfirmation" placeholder="Confirm New Password" />
                        </div>
                        <div class="mb-5">
                            <button class="btn btn-primary shadow" type="submit">Change password</button>
                        </div>
                    </form>
                    <p v-if="message">{{ message }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ResetPassword',
    data() {
        return {
            code: '',
            password: '',
            passwordConfirmation: '',
            message: ''
        };
    },
    mounted() {
        // Extrai o código do parâmetro de consulta da URL
        this.code = this.$route.query.code;
    },
    methods: {
        async resetPassword() {
            try {
                await axios.post('http://localhost:1337/api/auth/reset-password', {
                    code: this.code,
                    password: this.password,
                    passwordConfirmation: this.passwordConfirmation
                });
                this.message = "Your user's password has been reset.";
            } catch (error) {
                this.message = 'An error occurred: ' + error.response.data.message;
            }
        }
    }
}
</script>

<style>
    /* Seu estilo */
</style>
