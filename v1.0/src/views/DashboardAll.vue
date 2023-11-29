<template>
    <div class="dashboard-container">
      <DashboardHeader/>
      <div class="dashboard-main-content">
        <router-view/>
        <!-- Este router-view renderiza as páginas específicas do dashboard -->
      </div>
      <DashboardFooter/>
    </div>
  </template>
  
  <script>
  import DashboardHeader from '@/components/layout/DashboardHeader.vue';
  import DashboardFooter from '@/components/layout/DashboardFooter.vue';
  
  export default {
    name: 'DashboardAll',
    components: {
      DashboardHeader,
      DashboardFooter
    }
  }
  </script>
  
  <style>

  </style>
  