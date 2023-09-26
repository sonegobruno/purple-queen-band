import { Metadata } from 'next'

export function generateMetadata(firstTitle: string): Metadata {
  return {
    title: `${firstTitle} | Banda Purple Queen`,
    description:
      'A banda Purple Queen se localiza no Sul de Minas Gerais e toca grandes clássicos do Rock como Led Zeppelin, Deep Purple, Aerosmith, Black Sabbath e entre outros.',
    icons: {
      icon: '/favicon.png',
    },
    openGraph: {
      title: `${firstTitle} | Banda Purple Queen`,
      description:
        'A banda Purple Queen se localiza no Sul de Minas Gerais e toca grandes clássicos do Rock como Led Zeppelin, Deep Purple, Aerosmith, Black Sabbath e entre outros.',
      siteName: 'Banda Purple Queen',
      images: [
        {
          url: '/galery/image-01.webp',
          width: 800,
          height: 600,
        },
      ],
      locale: 'pt-br',
      type: 'website',
    },
    keywords:
      'banda de rock, banda Purple Queen, banda de clássicos do rock, banda de classic rock, banda no Sul de Minas, banda de rock no Sul de Minas, banda de Rock em Minas Gerais',
    authors: [{ name: 'Bruno Sônego', url: 'https://github.com/sonegobruno' }],
    metadataBase: new URL('https://banda-purple-queen.vercel.app'),
    verification: {
      google: 'Mf8jRGRn1jOYbblfDvhXyZOA-zhcYzGtT8wB6XjQp2Y',
    },
  }
}
