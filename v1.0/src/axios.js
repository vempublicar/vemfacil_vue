// src/axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL // Usa a URL da API a partir das variáveis de ambiente
});

// Interceptador para adicionar o Token de Acesso em cada requisição
instance.interceptors.request.use(config => {
    const apiToken = process.env.VUE_APP_API_TOKEN;
    if (apiToken) {
        config.headers.Authorization = `Bearer ${apiToken}`;
    }
    // Se precisar adicionar o nome da API como um cabeçalho, faça isso aqui
    // Exemplo: config.headers['Nome-do-Cabeçalho'] = 'vemfacil_access';

    return config;
});

export default instance;