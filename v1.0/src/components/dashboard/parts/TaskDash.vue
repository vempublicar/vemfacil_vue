<template>
    <section class="col-sm-7 col-lg-7 col-12 text-center pt-5 py-4 py-md-5">
            <div class="col-12">
                <h3 class="fw-bold pb-md-4">Acompanhe suas<span class="underline"> tarefas</span></h3>
            </div>
            <div class="row mb-2">
                <div class="col-md-10 mx-auto">
                    <div id="accordion-1" class="accordion text-muted" role="tablist">
                        <div class="accordion-item">
                            <h2 class="accordion-header" role="tab"><button class="accordion-button" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="true"
                                    aria-controls="accordion-1 .item-1">Cadastre seu primeiro cliente</button></h2>
                            <div class="accordion-collapse collapse show item-1" role="tabpanel"
                                data-bs-parent="#accordion-1">
                                <div class="accordion-body">
                                    <p>Bem-vindo à plataforma vemfacil.com, para começar a transformar a maneira como você gerencia os anúncios da sua organização, o primeiro passo é cadastrar um cliente (Empresa). Clique em 'Adicionar Cliente' no menu superior e siga as instruções simples para ativar o sistema.</p>
                                        <a class="btn btn-warning shadow" role="button" href="signup.html">Tarefa Concluída</a>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-2" aria-expanded="false"
                                    aria-controls="accordion-1 .item-2">Lorem quam erat placerat
                                    mollis, rhoncus senectus?</button></h2>
                            <div class="accordion-collapse collapse item-2" role="tabpanel" data-bs-parent="#accordion-1">
                                <div class="accordion-body">
                                    <p class="mb-0">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
                                        odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta
                                        gravida at eget metus.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-3" aria-expanded="false"
                                    aria-controls="accordion-1 .item-3">Iaculis accumsan id,
                                    facilisis proin ipsum velit neque?</button></h2>
                            <div class="accordion-collapse collapse item-3" role="tabpanel" data-bs-parent="#accordion-1">
                                <div class="accordion-body">
                                    <p class="mb-0">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
                                        odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta
                                        gravida at eget metus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>
    
<script>
export default {
    name: 'TaskDash',

}
</script>
    
<style></style>