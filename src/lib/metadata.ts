import type { Metadata } from 'next'

const BASE_URL = 'https://kaomassage.com'
const SITE_NAME = 'Kao Thai Massage'
const DEFAULT_DESCRIPTION =
  'Experience authentic Thai massage therapy in Cupertino, California. Traditional Thai, Deep Tissue, Swedish, Hot Stone, and more. Book your session at Kao Thai Massage on Stevens Creek Blvd.'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_NAME} | Cupertino, CA`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    'Thai massage Cupertino',
    'massage therapy Cupertino',
    'Thai massage Silicon Valley',
    'deep tissue massage Cupertino',
    'hot stone massage',
    'Swedish massage',
    'aromatherapy massage',
    'foot reflexology',
    'massage near me Cupertino',
    'Stevens Creek Blvd massage',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Authentic Thai Massage in Cupertino, CA`,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kao Thai Massage — Cupertino, California',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Cupertino, CA`,
    description: DEFAULT_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
