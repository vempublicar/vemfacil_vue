<template>
    <nav id="mainNav" class="navbar navbar-expand-md fixed-top navbar-shrink py-3 navbar-light">
        <div class="container-fluid">
            <router-link class="navbar-brand d-flex align-items-center" to="/">
            <span>Brand</span>
            </router-link>
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1">
            <span class="visually-hidden">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navcol-1" class="collapse navbar-collapse">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <router-link active-class="active" class="nav-link" to="/home">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active" class="nav-link" to="/features">Features</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active" class="nav-link" to="/integrations">Integrations</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active" class="nav-link" to="/pricing">Pricing</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active" class="nav-link" to="/contacts">Contacts</router-link>
                    </li>
                </ul>
            <router-link class="btn btn-outline-primary shadow" role="button" to="/signup">Registrar</router-link>
            <router-link class="btn btn-primary shadow" role="button" to="/login">Login</router-link>
            </div>
        </div>
    </nav>

</template>

<script>
export default {
    name: 'NavPublic'
    
}
</script>

<style>

</style>