import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning Epping',
  description: 'Professional carpet cleaning in Epping, VIC. Established family homes and newer estate properties. Property management bookings welcome. 24-48 hour availability. Book now.',
}

const faqs = [
  {
    q: 'Can you clean a rental property I manage in Epping without the tenant being present?',
    a: 'Yes. We work with property managers across Epping regularly. If access is arranged — key safe, meet-and-leave, or agent access — we can complete the job without the tenant present. We issue the invoice to the managing agent or landlord as required and communicate job completion promptly.',
  },
  {
    q: 'How far in advance do I need to book for Epping?',
    a: 'We can typically fit Epping jobs within 24–48 hours of booking. Same-day slots are sometimes available, particularly mid-week. For time-sensitive end-of-lease situations, call 0493 100 989 directly for the fastest response on availability.',
  },
]

export default function CarpetCleaningEppingPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Carpet Cleaning Epping', href: '/carpet-cleaning-epping' },
      ]} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Serving Epping</span>
          <h1>Carpet Cleaning Epping</h1>
          <p className="lead">Epping is a suburb in transition — established family homes from the 1980s and 1990s alongside newer estate development in the Epping North and Cooper Street growth corridors. TidyRoo's carpet cleaning in Epping covers both: deep-clean work on older established-home carpet and first-time professional cleans for newer builds. We also work directly with local property managers for rental property turnovers.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Common carpet situations in Epping</h2>
          <p>Established Epping homes in the areas around High Street, Cooper Street, and Findon Road carry the soiling profile typical of family-owned brick veneer from the 1980s: traffic lanes in hallways, accumulated soil in main living areas, and children's staining in bedroom carpet. These homes have often been through multiple carpet cleaning cycles with varying results — a thorough pre-treatment approach gives these carpets a noticeably better result than a pass-only clean.</p>
          <p style={{ marginTop: 16 }}>Newer estate development in Epping North brings first-time cleaning demand — families settled in homes built from 2010 onwards who are booking their initial professional clean. These properties tend to have consistent carpet throughout, often including a study and rumpus room in addition to standard bedrooms, making whole-home packages practical.</p>
          <p style={{ marginTop: 16 }}>Epping's growing multicultural community includes many families who book professional cleaning as a regular seasonal routine rather than a reaction to visible soiling — we see consistent repeat bookings from Epping households on 6 and 12 month cycles.</p>

          <h2 style={{ marginTop: 40 }}>Services Epping residents book most</h2>
          <ul className="service-area-list" style={{ marginTop: 16 }}>
            <li><Link href="/services/carpet-steam-cleaning">Carpet steam cleaning</Link> — whole-home packages for both established and newer-build Epping homes</li>
            <li><Link href="/end-of-lease-carpet-cleaning">End of lease carpet cleaning</Link> — rental properties coordinated with local property management agencies</li>
            <li><Link href="/services/tile-grout-cleaning">Tile and grout cleaning</Link> — popular in Epping North new builds where kitchen and bathroom tile restoration is requested</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Getting to Epping</h2>
          <p>Epping is approximately 20 km north of Melbourne's CBD via High Street or the Hume Freeway. Drive time is typically 25–35 minutes. Residential parking throughout Epping is straightforward — wide streets, driveways on most properties, and no permit-zone restrictions in the residential precincts. The area around Epping Plaza on High Street has timed parking, but residential jobs away from the commercial strip present no access issues.</p>
        </div>
      </section>

      <section className="section-green" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Frequently asked questions</h2>
          <div className="faq" style={{ marginTop: 16 }}>
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
          <div className="cta-strip">
            <div>
              <strong>Ready to book in Epping?</strong>
              <p>24–48 hour availability in most cases. Book online or call us now.</p>
            </div>
            <div className="hero-ctas">
              <Link className="btn btn-accent btn-lg" href="/booking#quote-form">Book now</Link>
              <Link className="btn btn-outline-white" href="tel:+61493100989">Call 0493 100 989</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
