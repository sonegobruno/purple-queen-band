// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require('nodemailer')

type SendEmail = {
  name: string
  email: string
  message: string
}

export async function sendEmail(data: SendEmail) {
  const TRANSPORTER = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_LOGIN,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
  })

  await TRANSPORTER.sendMail({
    from: 'purplequeenband@gmail.com',
    to: 'sonego.bruno@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: `<div><p>Nome: ${data.name}</p> <p>Email: ${data.email}</p> <p>Mensagem: ${data.message}</p></div>`,
  })
}
