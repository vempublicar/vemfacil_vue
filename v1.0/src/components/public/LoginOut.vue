<template>
    <section class="py-4 py-md-5">
        <div class="container py-md-5">
            <div class="row">
                <div class="col-md-6 text-center">
                    <img class="img-fluid w-100" src="@/assets/img/illustrations/login.svg" />
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'; // Correção aqui

export default {
  name: 'LoginOut',
  setup() {
    const store = useStore();
    const router = useRouter(); // Agora importando corretamente do vue-router
    
    function logout() {
      store.dispatch('logoutUser');
      router.push('/login'); // Usando o roteador para redirecionar
    }

    // Chama o logout assim que o componente é montado
    logout();

    // Nada a retornar se você estiver chamando logout imediatamente
  },
};
</script>


<style></style>