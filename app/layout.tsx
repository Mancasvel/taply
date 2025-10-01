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
  title: 'Taply - The card that connects with you',
  description: 'Discover Taply, the smart card that combines exclusivity, technology and simplicity. Register and be among the first to experience the future.',
  keywords: ['taply', 'smart card', 'NFC', 'technology', 'connection'],
  openGraph: {
    title: 'Taply - The card that connects with you',
    description: 'Technology, simplicity and exclusivity in the palm of your hand',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="bg-taply-dark text-taply-white antialiased">
        {children}
      </body>
    </html>
  )
}

