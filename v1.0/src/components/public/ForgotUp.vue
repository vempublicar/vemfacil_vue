<template>
    <section class="py-4 py-md-5">
        <div class="container py-md-5">
            <div class="row d-flex align-items-center">
                <div class="col-md-6 text-center"><img class="img-fluid w-100" src="@/assets/img/illustrations/desk.svg" /></div>
                <div class="col-md-5 col-xl-4 text-center text-md-start">
                    <h2 class="display-6 fw-bold mb-4">Forgot your <span class="underline">password</span>?</h2>
                    <p class="text-muted">Enter the email associated with your account and we&#39;ll send you a reset link.</p>
                    <form @submit.prevent="resetPasswordRequest">
                        <input class="shadow form-control" type="email" v-model="email" placeholder="Email" />
                        <div class="mb-5"><button class="btn btn-primary shadow" type="submit">Reset password</button></div>
                    </form>
                    <p v-if="message" class="text-danger">{{ message }}</p>
                </div>
            </div>
        </div>
</section>
</template>

<script>
import axios from "@/axios";

export default {
    name: 'ForgotUp',
    data() {
        return {
            email: '',
            message: ''
        };
    },
    methods: {
        async resetPasswordRequest() {
            try {
                await axios.post('http://localhost:1337/api/auth/forgot-password', {
                    email: this.email
                });
                // this.message = 'An email has been sent to ' + this.email + ' with password reset instructions.';
                this.$router.push('/send-mail');
            } catch (error) {
                // Ajuste aqui para incluir o email na mensagem de erro
                this.message = 'An error occurred for the email ' + this.email + ': ' + (error.response?.data?.message || 'Something went wrong');
            }
        }
    }
}
</script>

<style>

</style>