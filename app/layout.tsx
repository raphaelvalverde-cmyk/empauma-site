import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Empauma — Conciergerie de locations saisonnières à La Crau & en Provence',
  description: 'Empauma, votre conciergerie premium pour locations saisonnières à La Crau et en Provence. Gestion complète clés en main : 20% TTC, zéro frais caché.',
  metadataBase: new URL('https://www.empauma-conciergerie.fr'),
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
  },
  openGraph: {
    title: 'Empauma — Conciergerie de locations saisonnières',
    description: 'Gestion complète de vos locations saisonnières en Provence-Alpes-Côte d\'Azur. 20% TTC, zéro frais caché.',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
