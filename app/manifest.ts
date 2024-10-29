import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ARMA Reforger Server Config Editor',
    short_name: 'ARMA Reforger .json Editor',
    description: 'JSON Editor for ARMA Reforger Server Config',
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    theme_color: '#dc2626',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

export const dynamic = 'force-static';
