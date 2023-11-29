module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.hostinger.com'),
          port: env('SMTP_PORT', 465),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'no-reply@app.vemfacil.com',
          defaultReplyTo: 'no-reply@app.vemfacil.com',
        },
      },
    },
    // ...
  });