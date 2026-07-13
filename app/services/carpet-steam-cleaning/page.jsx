import Link from 'next/link'
import BreadcrumbSchema from '../../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Steam Cleaning Melbourne',
  description: 'Professional carpet steam cleaning in Melbourne. Hot water extraction at 95°C removes deep soil, allergens, and odours. Eco-friendly, same-day slots. Book now.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Carpet Steam Cleaning Melbourne',
  description: 'Professional hot water extraction carpet steam cleaning for Melbourne homes and workplaces.',
  provider: { '@type': 'HouseCleaningService', name: 'TidyRoo', url: 'https://tidyroo.com.au' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Melbourne, VIC, Australia' },
  url: 'https://tidyroo.com.au/services/carpet-steam-cleaning',
}

const faqs = [
  {
    q: 'How long does a carpet steam clean take?',
    a: 'A standard 3-bedroom home typically takes 2–3 hours, including pre-inspection, spot treatment, extraction, and drying setup. We provide an accurate time estimate when confirming your booking.',
  },
  {
    q: 'When can I walk on the carpet after a steam clean?',
    a: 'Most carpets are safe to walk on within 2–4 hours when air movers are used. Full drying of the pile and backing takes 4–8 hours depending on ventilation and pile depth.',
  },
  {
    q: 'Is steam cleaning safe for all carpet types?',
    a: 'We conduct a fibre test and soil analysis during the pre-inspection. Steam cleaning suits most synthetic and wool carpets. Where a fibre is sensitive to heat or moisture, we will recommend dry cleaning instead.',
  },
  {
    q: 'Are the products safe for kids and pets?',
    a: 'Yes. We use biodegradable, low-VOC detergents that are safe for people and pets once the carpet is dry. An unscented deodoriser is available for households with fragrance sensitivities.',
  },
]

export default function CarpetSteamCleaningPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Carpet Steam Cleaning', href: '/services/carpet-steam-cleaning' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Hot water extraction</span>
          <h1>Carpet Steam Cleaning Melbourne</h1>
          <p className="lead">TidyRoo's carpet steam cleaning service uses commercial truckmount and portable units that heat water to 95°C, injecting and extracting in a single pass to remove embedded soil, allergens, and odours from Melbourne homes and workplaces.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>What's included</h2>
          <p>Every carpet steam cleaning job includes the following steps as standard — no hidden extras.</p>
          <ul className="service-area-list" style={{ marginTop: 20 }}>
            <li>Pre-vacuum with HEPA filtration to lift surface debris</li>
            <li>Fibre type identification and soil load assessment</li>
            <li>Targeted spot and stain treatment with fibre-safe solutions</li>
            <li>Pre-agitation on heavily soiled traffic lanes</li>
            <li>High-temperature hot water extraction (95°C)</li>
            <li>Fibre grooming after extraction for a uniform finish</li>
            <li>Air mover placement to minimise drying time</li>
            <li>Aftercare tips tailored to your carpet type</li>
            <li>Dated invoice suitable for real estate and insurance purposes</li>
            <li>7-day satisfaction re-clean promise</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Our process</h2>
          <div className="process-steps">
            {[
              { strong: 'Inspect', p: 'We walk through each room, identify fibre types, map stain locations, and assess soil load to choose the right chemistry.' },
              { strong: 'Pre-treat', p: 'Spot treatments are applied to stains. Traffic lanes are agitated with a carpet rake to loosen compacted soil before extraction.' },
              { strong: 'Steam clean', p: 'The extraction wand delivers a pressurised hot water rinse and simultaneously vacuums out dissolved soil and detergent residue.' },
              { strong: 'Deodorise', p: 'A plant-based deodoriser is applied where needed to neutralise pet, smoke, or food odours — not just mask them.' },
              { strong: 'Dry', p: 'Air movers are positioned to accelerate drying. We advise on ventilation settings to get your rooms back in use as quickly as possible.' },
            ].map(({ strong, p }) => (
              <div className="process-step" key={strong}><strong>{strong}</strong><p>{p}</p></div>
            ))}
          </div>
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
          <p>Pricing is based on room count, carpet type, soil level, and access. Visit our <Link href="/pricing">transparent pricing page</Link> for package details, or request an exact quote via the booking form.</p>
          <div style={{ marginTop: 20 }}>
            <Link className="btn btn-primary" href="/booking#quote-form">Get an instant quote</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p>Related services: <Link href="/services/dry-carpet-cleaning">dry carpet cleaning</Link> · <Link href="/services/stain-odour-removal">stain and odour removal</Link> · <Link href="/services/upholstery-cleaning">upholstery cleaning</Link> · <Link href="/end-of-lease-carpet-cleaning">end of lease carpet cleaning</Link></p>
        </div>
      </section>
    </>
  )
}
