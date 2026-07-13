import Link from 'next/link'
import BreadcrumbSchema from '../../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Rug & Mattress Cleaning Melbourne',
  description: 'Professional mattress cleaning and rug washing in Melbourne. Anti-microbial treatment, UV inspection, dust mite removal. Same-day slots available. Book now.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Rug and Mattress Cleaning Melbourne',
  description: 'On-site rug washing and mattress sanitising across Melbourne, including anti-microbial treatment, UV inspection, and dust mite removal.',
  provider: { '@type': 'HouseCleaningService', name: 'TidyRoo', url: 'https://tidyroo.com.au' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Melbourne, VIC, Australia' },
  url: 'https://tidyroo.com.au/services/rug-mattress-cleaning',
}

const faqs = [
  {
    q: 'How often should a mattress be professionally cleaned?',
    a: 'Most sleep specialists recommend a professional mattress sanitise every 6–12 months. Households with allergies, young children, or pets benefit from cleaning every 6 months.',
  },
  {
    q: 'Can you clean delicate or hand-knotted rugs on-site?',
    a: 'We assess each rug before cleaning. Delicate silk, hand-knotted, or antique rugs may require specialist off-site treatment. We will advise after inspecting the piece and can arrange collection and delivery.',
  },
  {
    q: 'Do you offer pickup and delivery for rugs?',
    a: 'Yes. Rug pickup and delivery is available on request for Melbourne metro areas. Ask about this option when booking.',
  },
  {
    q: 'What does UV inspection reveal on a mattress?',
    a: 'UV (black) light reveals biological stains such as sweat, urine, and other bodily fluids that are invisible to the naked eye. We use UV inspection to identify and target all contamination zones before treatment.',
  },
]

export default function RugMattressCleaningPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Rug & Mattress Cleaning', href: '/services/rug-mattress-cleaning' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Anti-microbial sanitising</span>
          <h1>Rug &amp; Mattress Cleaning Melbourne</h1>
          <p className="lead">TidyRoo's mattress cleaning in Melbourne removes dust mites, sweat, and biological stains through anti-microbial hot water extraction and UV inspection — so you sleep on a genuinely clean surface. We also provide on-site rug washing with delicate fibre care for area rugs of all sizes.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Mattress cleaning — what's included</h2>
          <ul className="service-area-list" style={{ marginTop: 20 }}>
            <li>UV (black light) inspection to map all biological staining</li>
            <li>Pre-vacuum to remove dust, skin cells, and surface debris</li>
            <li>Anti-microbial solution applied to all identified zones</li>
            <li>Hot water extraction to remove dissolved soil and allergens</li>
            <li>Hypoallergenic deodorising treatment</li>
            <li>Air mover placement to minimise drying time</li>
            <li>Aftercare advice on mattress protection and rotation</li>
            <li>7-day satisfaction re-clean promise</li>
          </ul>

          <h2 style={{ marginTop: 48 }}>Rug cleaning — what's included</h2>
          <ul className="service-area-list" style={{ marginTop: 20 }}>
            <li>Fibre identification (wool, synthetic, natural fibres, blends)</li>
            <li>Pre-test for colour-fastness and pH sensitivity</li>
            <li>On-site washing with delicate-fibre appropriate chemistry</li>
            <li>Gentle agitation and thorough rinse extraction</li>
            <li>Drying in a well-ventilated area with air mover support</li>
            <li>Pickup and delivery available on request</li>
            <li>7-day satisfaction re-clean promise</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Why mattress hygiene matters</h2>
          <p>The average person spends a third of their life in bed. Over time, mattresses accumulate dust mites (which feed on shed skin cells), sweat, and biological staining. Regular vacuuming removes surface debris but does not reach the depth where mites colonise or where dried biological material sits. A professional sanitise using hot water extraction and anti-microbial chemistry addresses these layers directly and is the most effective way to reduce allergen load in the bedroom.</p>
          <p style={{ marginTop: 16 }}>For allergy sufferers, asthma patients, and households with young children, a professional mattress clean every 6 months is a practical step toward a healthier sleep environment.</p>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Frequently asked questions</h2>
          <div className="faq" style={{ marginTop: 24 }}>
            {faqs.map(({ q, a }) => (
              <details className="accordion-item" key={q}>
                <summary className="accordion-header">{q}</summary>
                <div className="accordion-content"><p>{a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Pricing</h2>
          <p>Pricing is per mattress or rug based on size and soiling level. See the <Link href="/pricing">pricing guide</Link> for an overview, or get an exact quote in under two minutes.</p>
          <div style={{ marginTop: 20 }}>
            <Link className="btn btn-primary" href="/booking#quote-form">Get an instant quote</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p>Related services: <Link href="/services/upholstery-cleaning">upholstery cleaning</Link> · <Link href="/services/carpet-steam-cleaning">carpet steam cleaning</Link> · <Link href="/services/stain-odour-removal">stain and odour removal</Link></p>
        </div>
      </section>
    </>
  )
}
