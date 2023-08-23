import { NextResponse } from 'next/server'

export enum HttpResponseStatus {
  SUCCESS = 202,
  BAD_REQUEST = 400,
  INTERNAL_SERVER_ERROR = 500,
}

export function successResponse<T>(data: T) {
  return NextResponse.json(data, { status: HttpResponseStatus.SUCCESS })
}

export function errorResponse<T>(data: T, status: HttpResponseStatus) {
  return NextResponse.json(data, { status })
}
