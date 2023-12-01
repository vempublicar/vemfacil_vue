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
            <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                <div class="col">
                    <div><img class="rounded img-fluid d-block w-100 fit-cover" style="height: 200px;"
                            src="@/assets/img/brands/greeninovate.png" />
                        <div class="py-4">
                            <h4>Green Innovate</h4>
                            <p>Setor: Tecnologias Sustentáveis
                                <a href="http://greeninnovate.com" target="_blank">
                                    <i class="bi bi-link"></i> greeninnovate.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                <p>Edição do cliente</p>
            </div>
        </div>
    </section>
</template>
    
<script>
export default {
    name: 'EditClients',

}
</script>
    
<style></style>