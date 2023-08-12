import { NextResponse } from 'next/server'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require('nodemailer')

type SendEmailDTO = {
  name: string
  email: string
  message: string
}

export async function POST(request: Request) {
  const body: SendEmailDTO = await request.json()

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_LOGIN,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: 'purplequeenband@gmail.com',
      to: 'sonego.bruno@gmail.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: `<div><p>Nome: ${body.name}</p> <p>Email: ${body.email}</p> <p>Mensagem: ${body.message}</p></div>`,
    })

    return NextResponse.json(
      { message: 'Email enviado com sucesso' },
      { status: 202 },
    )
  } catch (error) {
    console.error(
      `Error /api/send-email method POST. PARAMS -> ${JSON.stringify(body)}`,
      error,
    )
    return NextResponse.json(
      { message: 'Houve um erro inesperado' },
      { status: 500 },
    )
  }
}
