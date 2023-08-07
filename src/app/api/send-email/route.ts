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
      host: 'smtp.forwardemail.net',
      port: 465,
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: 'REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM',
        pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD',
      },
    })

    await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: 'bar@example.com, baz@example.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>', // html body
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
