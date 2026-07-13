import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingContact from '../components/FloatingContact'
import ClientInit from '../components/ClientInit'

export const metadata = {
  metadataBase: new URL('https://tidyroo.com.au'),
  title: { default: 'Carpet Steam Cleaning Melbourne | TidyRoo', template: '%s | TidyRoo' },
  description: 'TidyRoo delivers same-day carpet steam cleaning, upholstery care, and tile revival across Melbourne with eco-friendly detergents and transparent pricing.',
  openGraph: { type: 'website', siteName: 'TidyRoo' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HouseCleaningService',
  name: 'TidyRoo',
  url: 'https://tidyroo.com.au',
  telephone: '+61493100989',
  email: 'info@tidyroo.au',
  image: 'https://tidyroo.com.au/images/logo.jpg',
  logo: 'https://tidyroo.com.au/images/logo.jpg',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '18:00',
    },
  ],
  areaServed: { '@type': 'AdministrativeArea', name: 'Melbourne, VIC, Australia' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '215' },
  sameAs: [
    'https://www.facebook.com/tidyroo',
    'https://www.instagram.com/tidyroo',
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
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
