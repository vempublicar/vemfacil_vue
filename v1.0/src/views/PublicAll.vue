<template>
  <html data-bs-theme="light" lang="pt-br">

<head>
  <meta charset="utf-8" />  
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
  <link href="https://fonts.googleapis.com/css?family=Raleway:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&display=swap" rel="stylesheet">
  <title>Pricing - Brand</title>
</head>
<body>
      <PublicHeader/>
        <router-view/>
        <!-- Este router-view renderiza as páginas específicas públicas -->
      <PublicFooter/>
    </body>

</html>
  </template>
  
  <script>
  import PublicHeader from '@/components/layout/NavPublic.vue';
  import PublicFooter from '@/components/layout/FooterPublic.vue';
  
  export default {
    name: 'PublicAll',
    components: {
      PublicHeader,
      PublicFooter
    }
  }
  </script>
  
  <style>
   .custom-font h1 {
    font-family: 'Raleway', sans-serif;
    }

    .underline {
        border-bottom: 5px solid #ffd200; /* Ajuste a espessura conforme necessário */
        padding-bottom: 2px; /* Isso ajuda a separar um pouco o texto da linha */
    }
       
  </style>