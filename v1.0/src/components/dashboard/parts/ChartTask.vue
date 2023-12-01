<template>
    <section class="col-sm-4 col-lg-4 col-10  pt-5 py-4 py-md-5">
        <CustomApexChart :options="chartOptions" :series="chartSeries"></CustomApexChart>
    </section>
</template>

<script>
export default {
    name: 'ChartTask',
    data() {
        return {
            chartSeries: [6, 3, 10, 2],
            chartOptions: {
                chart: {
                    type: 'pie',
                    animations: {
                        enabled: true,
                        easing: 'easeinout',
                        speed: 800,
                        animateGradually: {
                            enabled: true,
                            delay: 150
                        },
                        dynamicAnimation: {
                            enabled: true,
                            speed: 350
                        }
                    }
                },
                labels: ['Concluídas', 'Em Produção', 'A Fazer', 'Aguardando'],
                colors: [  '#495050','#ffd200','#121643', '#4e5d78'],
                title: {
                    text: 'Desempenho das Tarefas',
                    align: 'left',
                    style: {
                        fontSize: '18px', // Tamanho do texto
                        color: '#adb5bd',    // Cor do texto
                        fontFamily: 'Helvetica, Arial, sans-serif', // Fonte (opcional)
                       
                    }
                },                
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                legend: {
                    position: 'right', // Alinhar a legenda à esquerda
                    horizontalAlign: 'left', // Alinhamento horizontal
                    offsetY: 0,
                    height: 230,
                    markers: {
                        // configurações dos marcadores da legenda, se necessário
                    },
                    itemMargin: {
                        vertical: 5 // Ajuste conforme necessário para espaço entre itens
                    },
                    padding: {
                        bottom: 20 // Ajuste este valor para adicionar espaço na parte inferior
                    },
                }
            }
        }
    }
}
</script>
