<template>
    <div class="social-redirect-container">
        <!-- Você pode adicionar uma mensagem de carregamento ou deixar vazio -->
        Carregando...
    </div>
</template>

<script>
import axios from "@/axios";

export default {
    name: 'SocialRedirect',
    created() {
        const accessToken = this.$route.query.access_token;
        if (accessToken) {
            this.exchangeToken(accessToken);
        }
    },
    methods: {
        async exchangeToken(token) {
            try {
                const response = await axios.get(`http://localhost:1337/api/auth/google/callback?access_token=${token}`);
                // Armazene o JWT e as informações do usuário
                localStorage.setItem('jwt', response.data.jwt); // Armazenando o JWT
                console.log('Response:', response.data);
                this.$router.push('/dashboard/home'); // Redirecione para uma página após o login
            } catch (error) {
                console.error('Error:', error);
                // Trate o erro
            }
        }
    }
}
</script>