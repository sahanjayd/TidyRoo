import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingContact from '../components/FloatingContact'
import ClientInit from '../components/ClientInit'

export const metadata = {
  metadataBase: new URL('https://tidyroo.com.au'),
  title: { default: 'TidyRoo | Professional Carpet Steam Cleaning Melbourne', template: '%s | TidyRoo' },
  description: 'TidyRoo delivers same-day carpet steam cleaning, upholstery care, and tile revival across Melbourne with eco-friendly detergents and transparent pricing.',
  openGraph: { type: 'website', siteName: 'TidyRoo' },
}

export const viewport = {
  themeColor: '#1A6B3C',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/jpeg" href="/images/logo.jpg" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <ClientInit />
      </body>
    </html>
  )
}
