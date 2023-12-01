<template>
    <section class="pt-5 py-4 py-md-5">
        <div class="container py-4 py-xl-5">
            <div class="col-12 pt-5 pb-4">
                <h3 class="fw-bold pb-md-4">Lista de seus <span class="underline"> clientes</span></h3>
            </div>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="buscar cliente" aria-label="Recipient's username"
                    aria-describedby="button-addon2">
                <button class="btn btn-outline-primary" type="button" id="button-addon2">Buscar</button>
            </div>
            <!-- Exibição Dinâmica das Empresas -->
            <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                <div class="col" v-for="business in businesses" :key="business.id">
                    <div>
                        <img class="rounded img-fluid d-block w-100 fit-cover" :src="business.business_logo" style="height: 200px;" />
                        <div class="py-4">
                            <h4>{{ business.name_business }}</h4>
                            <p>Setor: {{ business.business_cnpj_cpf }} <!-- Ajuste conforme a sua estrutura de dados -->
                                <a :href="business.business_site" target="_blank">
                                    <i class="bi bi-link"></i> {{ business.business_site }}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
    
<script>
import axios from "@/axios"; // Ajuste o caminho conforme a configuração do seu projeto

export default {
    name: 'ListClients',
    data() {
        return {
            businesses: [] // Armazenará os dados das empresas
        };
    },
    async created() {
        try {
        const response = await axios.get('/api/businesses');
        this.businesses = response.data.data.map(item => item.attributes); // Mapeia os atributos para o array businesses
        } catch (error) {
            console.error('Erro ao buscar dados das empresas:', error);
            // Trate o erro conforme necessário
        }
    }
}
</script>
    
<style></style>