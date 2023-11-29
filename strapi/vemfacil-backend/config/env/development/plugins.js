module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: 'smtp.hostinger.com',
          port: 465,
          ignoreTLS: true,
        },
      },
    },
  });