<template>
    
    <NumDash/>
    <!-- Aqui você pode exibir o nome do usuário -->
    <h1>Bem-vindo, {{ userName }}</h1>
    <div class="row">
        <TaskDash/>
        <ChartTask/>
    </div>
</template>
    
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import NumDash from '@/components/dashboard/parts/NumDash.vue';
import TaskDash from '@/components/dashboard/parts/TaskDash.vue';
import ChartTask from '@/components/dashboard/parts/ChartTask.vue';
export default {
  name: 'HomeDashboard',
  components: {
    NumDash,
    TaskDash,
    ChartTask
  },
  setup() {
    const store = useStore();

    const userName = computed(() => store.getters.userName || 'Visitante');

    return {
      userName
    };
  }
};
</script>
    
<style></style>
    
    