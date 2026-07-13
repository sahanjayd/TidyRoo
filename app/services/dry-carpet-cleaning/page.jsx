import Link from 'next/link'
import BreadcrumbSchema from '../../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Dry Carpet Cleaning Melbourne',
  description: 'Low-moisture dry carpet cleaning in Melbourne. Encapsulation technology leaves carpets dry within 60 minutes — ideal for commercial spaces and apartments. Book now.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dry Carpet Cleaning Melbourne',
  description: 'Low-moisture encapsulation carpet cleaning for Melbourne commercial spaces, apartments, and areas needing rapid return to use.',
  provider: { '@type': 'HouseCleaningService', name: 'TidyRoo', url: 'https://tidyroo.com.au' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Melbourne, VIC, Australia' },
  url: 'https://tidyroo.com.au/services/dry-carpet-cleaning',
}

const faqs = [
  {
    q: 'How quickly can I use the carpet after dry cleaning?',
    a: 'Carpets cleaned with the encapsulation method are typically dry and ready for use within 30–90 minutes, making it ideal for offices, commercial spaces, and high-rise apartments.',
  },
  {
    q: 'Is dry cleaning as effective as steam cleaning?',
    a: 'Dry cleaning excels for maintenance cleans and light-to-moderate soiling. For deep soil, set stains, or pet odour penetration into the underlay, steam cleaning delivers more thorough results. We advise during the pre-inspection.',
  },
  {
    q: 'Does dry carpet cleaning leave residue?',
    a: 'Encapsulation polymers wrap soil particles so they can be vacuumed away. A final vacuum pass removes both residue and encapsulated soil, leaving minimal chemical behind.',
  },
  {
    q: 'Which carpet types suit dry cleaning best?',
    a: 'Low-pile commercial carpet tiles, loop piles, and carpets in areas with restricted water access are well suited to the dry method. We assess each carpet before recommending a method.',
  },
]

export default function DryCarpetCleaningPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Dry Carpet Cleaning', href: '/services/dry-carpet-cleaning' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Low-moisture encapsulation</span>
          <h1>Dry Carpet Cleaning Melbourne</h1>
          <p className="lead">TidyRoo's dry carpet cleaning in Melbourne uses encapsulation technology to clean commercial carpets, high-rise apartments, and busy spaces that need to be back in use within the hour — without the drying wait of traditional steam cleaning.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>What's included</h2>
          <p>Our dry carpet cleaning service covers all essential steps for a thorough, low-moisture clean.</p>
          <ul className="service-area-list" style={{ marginTop: 20 }}>
            <li>Pre-vacuum to remove loose soil and surface debris</li>
            <li>Application of low-moisture encapsulation polymers</li>
            <li>Counter-rotating brush agitation to loosen bound soil</li>
            <li>Encapsulation dwell time for maximum soil capture</li>
            <li>Vacuum extraction of encapsulated soil and polymer residue</li>
            <li>Spot deodorising where required</li>
            <li>Rapid-dry result — ready in 30–90 minutes</li>
            <li>Dated invoice for commercial records or real estate purposes</li>
            <li>7-day satisfaction re-clean promise</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>When to choose dry carpet cleaning</h2>
          <div className="card-grid" style={{ marginTop: 24 }}>
            <article className="card">
              <h3>Best suited for</h3>
              <ul>
                <li>Commercial offices and retail spaces</li>
                <li>High-rise apartments with restricted water access</li>
                <li>Maintenance cleans on lightly soiled carpet</li>
                <li>Areas needed back in use within hours</li>
                <li>Low-pile and commercial loop carpet tiles</li>
              </ul>
            </article>
            <article className="card">
              <h3>Consider steam cleaning instead for</h3>
              <ul>
                <li>Heavy soil or deep-set stains</li>
                <li>Pet urine penetrating into the underlay</li>
                <li>End-of-lease or bond-back situations</li>
                <li>Thick residential pile carpets</li>
                <li>Full allergen and dust mite removal</li>
              </ul>
            </article>
          </div>
          <p className="helper-text" style={{ marginTop: 16 }}>Not sure which method suits your carpet? We advise on the best approach during the pre-inspection and can combine methods in a single visit.</p>
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
          <p>Pricing depends on area size, soiling level, and access. See our <Link href="/pricing">pricing guide</Link> for an overview, or get an exact quote in two minutes.</p>
          <div style={{ marginTop: 20 }}>
            <Link className="btn btn-primary" href="/booking#quote-form">Get an instant quote</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p>Related services: <Link href="/services/carpet-steam-cleaning">carpet steam cleaning</Link> · <Link href="/services/stain-odour-removal">stain and odour removal</Link> · <Link href="/services/tile-grout-cleaning">tile and grout cleaning</Link></p>
        </div>
      </section>
    </>
  )
}
