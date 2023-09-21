import { Metadata } from 'next'

export function generateMetadata(firstTitle: string): Metadata {
  return {
    title: `${firstTitle} | Banda Purple Queen`,
    description: 'Generated by create next app',
    icons: {
      icon: '/favicon.png',
    },
  }
}
