<template>
    <nav id="mainNav" class="navbar navbar-expand-md fixed-top bg-primary navbar-shrink py-3 navbar-dark">
        <div class="container-fluid"><a class="navbar-brand d-flex align-items-center"
                href="/"><span>Brand</span></a><button class="navbar-toggler" data-bs-toggle="collapse"
                data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span
                    class="navbar-toggler-icon"></span></button>
            <div id="navcol-1" class="collapse navbar-collapse">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <router-link active-class="active" class="nav-link" to="/dashboard/home">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active" class="nav-link" to="/dashboard/clients">Clientes</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active" class="nav-link" to="/dashboard/tasks">Tarefas</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active" class="nav-link" to="/dashboard/campaign">Campanhas</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active" class="nav-link"
                            to="/dashboard/config">Configuração</router-link>
                    </li>
                </ul>
                <router-link class="btn btn-warning shadow" role="button" to="/dashboard/clients/new">
                    <i class="bi bi-plus"></i> Adicionar Cliente
                </router-link>
                <router-link class="btn btn-link shadow text-light" role="button" to="/dashboard/logout">
                    <i class="bi bi-box-arrow-right"></i>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'DashboardHeader'

}
</script>

<style></style>