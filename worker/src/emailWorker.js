'use strict'

const config = require('./config')
const nodemailer = require('nodemailer')
const amqp = require('amqplib/callback_api')
const queue = 'email-job'

async function sendMail (email, subject, html) {
  const mail = {
    from: `${config.smtpMail}`,
    to: `${email}`,
    subject,
    html
  }

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: config.smtpPort,
    secure: (config.smtpPort === 465), // true for 465, false for other ports
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass
    }
  })
  await transporter.sendMail(mail)
  return { message: 'mail sent' }
}

amqp.connect(config.amqpHost, function (error0, connection) {
  if (error0) {
    throw error0
  }
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1
    }
    channel.assertQueue(queue)
    console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', queue)
    channel.consume(queue, (msg) => {
      if (msg !== null) {
        const { email, subject, html } = JSON.parse(msg.content.toString())
        sendMail(email, subject, html)
        console.log(' [x] Sent mail to %s with the subject "%s"', email, subject)
        channel.ack(msg)
      }
    })
  })
})
