import type { Metadata } from 'next'
import { Orbitron, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
  display: 'swap',
})

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NgolaVPN - Internet Grátis para Angola',
  description: 'Navegue sem gastar dados móveis. Funciona na Unitel sem saldo! App feito em Angola para Angolanos.',
  keywords: ['VPN', 'Angola', 'Internet Grátis', 'Unitel', 'Dados Móveis', 'NgolaVPN'],
  authors: [{ name: 'NgolaVPN' }],
  openGraph: {
    title: 'NgolaVPN - Internet Grátis para Angola',
    description: 'Navegue sem gastar dados móveis. Funciona na Unitel sem saldo!',
    type: 'website',
    locale: 'pt_AO',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`scroll-smooth ${orbitron.variable} ${ibmPlex.variable}`}>
      <body className="antialiased font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}