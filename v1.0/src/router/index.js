import { createRouter, createWebHistory } from 'vue-router';
import PublicPage from '@/views/PublicAll.vue';
import axios from "@/axios";
import DashboardPage from '@/views/DashboardAll.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: PublicPage,
            children: [
                { path: '/', component: () => import('@/components/public/HomePage.vue') },
                { path: 'home', component: () => import('@/components/public/HomePage.vue') },
                { path: 'pricing', component: () => import('@/components/public/SectionPlan.vue') },
                { path: 'signup', component: () => import('@/components/public/SignUp.vue') },
                { path: 'login', component: () => import('@/components/public/LoginUp.vue') },
                { path: 'forgot', component: () => import('@/components/public/ForgotUp.vue') },
                { path: 'reset', component: () => import('@/components/public/ResetPassword.vue') },
                { path: 'send-mail', component: () => import('@/components/public/SendMail.vue') },
                // { path: '/connect/google/redirect', component: () => import('@/components/GoogleRedirect.vue')},
                // outras rotas públicas
            ]
        },
        {
            path: '/dashboard',
            component: DashboardPage,
            meta: { requiresAuth: true },
            children: [
                { path: 'home', component: () => import('@/components/dashboard/HomeDashboard.vue') },
                // outras rotas do dashboard
            ]
        },
        // outras rotas
    ]
});

async function handleGoogleRedirect(accessToken, next) {
    try {
        const response = await axios.get(`http://localhost:1337/api/auth/google/callback?access_token=${accessToken}`);
        localStorage.setItem('jwt', response.data.jwt); // Armazenando o JWT
        console.log('Response:', response.data);
        next('/dashboard/home'); // Redireciona diretamente para a página desejada
    } catch (error) {
        console.error('Error:', error);
        next('/login'); // Redireciona para a página de login em caso de erro
    }
}

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = localStorage.getItem('jwt');

    if (to.path === '/connect/google/redirect' && to.query.access_token) {
        // Chama a função assíncrona e passa o token e o callback 'next'
        handleGoogleRedirect(to.query.access_token, next);
    } else if (requiresAuth && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});

export default router;