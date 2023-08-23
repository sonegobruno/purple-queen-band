import { NextResponse } from 'next/server'

export enum HttpStatus {
  SUCCESS = 202,
  BAD_REQUEST = 400,
  INTERNAL_SERVER_ERROR = 500,
}

export function successResponse<T>(data: T) {
  return NextResponse.json(data, { status: HttpStatus.SUCCESS })
}

export function errorResponse<T>(data: T, status: HttpStatus) {
  return NextResponse.json(data, { status })
}
