<template>
    <section class="py-4 py-md-5">
        <div class="container py-md-5">
            <div class="row">
                <div class="col-md-5 col-xl-4 text-center text-md-start">
                    <h2 class="display-6 fw-bold mb-5"><span class="underline pb-1"><strong>Adicionar Clientes</strong></span></h2>
                    <div v-if="errorMessage" class="alert alert-danger">
        {{ errorMessage }}
    </div>
    <form @submit.prevent="registerBusiness">
        <!-- Outros campos do formulário -->
        <div class="mb-3">
            <input class="shadow-sm form-control" type="text" v-model="business.name_business" placeholder="Nome da Empresa" />
        </div>
        <div class="mb-3">
            <input class="shadow-sm form-control" type="text" v-model="business.business_cnpj_cpf" placeholder="CNPJ/CPF" />
        </div>
        <div class="mb-3">
            <input class="shadow-sm form-control" type="text" v-model="business.business_site" placeholder="Site da Empresa" />
        </div>
        <div class="mb-3">
            <input class="shadow-sm form-control" type="file" @change="handleFileUpload" accept=".jpg, .jpeg, .png" />
        </div>
        <div class="mb-5">
            <button class="btn btn-primary shadow" type="submit">Cadastrar Empresa</button>
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
import axios from "@/axios"; // Ajuste o caminho conforme a configuração do seu projeto
import { useRouter } from 'vue-router';

export default {
    name: 'NewClient',
    data() {
        return {
            business: {
                name_business: '',
                business_cnpj_cpf: '',
                business_site: '',
                business_date_create: new Date().toISOString().split('T')[0],
                business_logo: null,
                business_user_adm: null
            },
            errorMessage: ''
        };
    },
    setup() {
        const router = useRouter();
        return { router };
    },
    mounted() {
        this.business.business_user_adm = '1';
    },
    methods: {
        async handleFileChange(event) {
            this.file = event.target.files[0]; // Captura o arquivo
        },
        async handleUpload() {
            if (!this.file) {
                alert("Por favor, selecione um arquivo.");
                return;
            }

            const formData = new FormData();
            formData.append('files', this.file); // Adiciona o arquivo ao FormData

            try {
                const uploadResponse = await axios.post('/api/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                // Processa a resposta...
                console.log(uploadResponse.data);

                // Agora você pode enviar outras informações para a API, incluindo o caminho do arquivo
            } catch (error) {
                console.error("Erro ao fazer upload da imagem: ", error.response);
            }
        },
        async registerBusiness() {
            try {
                const response = await axios.post('/api/businesses', {
                    data: this.business
                });
                console.log('Empresa cadastrada com sucesso:', response.data);
                this.router.push('/dashboard/clients');
            } catch (error) {
                console.error("Erro ao cadastrar empresa: ", error.response);
                this.errorMessage = "Erro ao cadastrar empresa. Por favor, tente novamente.";
            }
        }
    }
}
</script>

<style>

</style>


