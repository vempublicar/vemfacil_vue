await strapi.plugin('email').service('email').send({
    to: 'luishenrique.pian@gmail.com',
    from: 'suport@app.vemfacil.com',
    subject: 'Hello world',
    text: 'Hello world',
    html: `<h4>Hello world</h4>`,
  });