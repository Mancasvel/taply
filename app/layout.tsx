import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Taply - La tarjeta que conecta contigo',
  description: 'Descubre Taply, la tarjeta inteligente que combina exclusividad, tecnología y simplicidad. Regístrate y sé de los primeros en experimentar el futuro.',
  keywords: ['taply', 'tarjeta inteligente', 'NFC', 'tecnología', 'conexión'],
  openGraph: {
    title: 'Taply - La tarjeta que conecta contigo',
    description: 'Tecnología, simplicidad y exclusividad en la palma de tu mano',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="bg-taply-dark text-taply-white antialiased">
        {children}
      </body>
    </html>
  )
}

