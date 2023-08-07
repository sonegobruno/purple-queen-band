import { NextResponse } from 'next/server'

type SendEmailDTO = {
  name: string
  email: string
  message: string
}

export async function POST(request: Request) {
  const body: SendEmailDTO = await request.json()
  return NextResponse.json({ message: 'Hello World!' }, { status: 202 })
}
