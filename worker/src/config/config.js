module.exports = {
  development: {
    smtpHost: process.env.DEV_SMTP_HOST,
    smtpPort: process.env.DEV_SMTP_PORT,
    smtpMail: process.env.DEV_SMTP_MAIL,
    smtpUser: process.env.DEV_SMTP_USER,
    smtpPass: process.env.DEV_SMTP_PASS,
    amqpHost: process.env.DEV_AMQP_HOST,
    languageCode: process.env.LANGUAGE_CODE
  },
  test: {
    smtpHost: process.env.TEST_SMTP_HOST,
    smtpPort: process.env.TEST_SMTP_PORT,
    smtpMail: process.env.TEST_SMTP_MAIL,
    smtpUser: process.env.TEST_SMTP_USER,
    smtpPass: process.env.TEST_SMTP_PASS,
    amqpHost: process.env.TEST_AMQP_HOST,
    languageCode: process.env.LANGUAGE_CODE
  },
  production: {
    smtpHost: process.env.PROD_SMTP_HOST,
    smtpPort: process.env.PROD_SMTP_PORT,
    smtpMail: process.env.PROD_SMTP_MAIL,
    smtpUser: process.env.PROD_SMTP_USER,
    smtpPass: process.env.PROD_SMTP_PASS,
    amqpHost: process.env.PROD_AMQP_HOST,
    languageCode: process.env.LANGUAGE_CODE
  }
}
