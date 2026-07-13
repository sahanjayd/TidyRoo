import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning Richmond',
  description: 'Professional carpet cleaning in Richmond, VIC. Same-day end-of-lease cleans, pet stain treatment, and 7-day re-clean promise for Richmond renters and homeowners.',
}

const faqs = [
  {
    q: 'Can you clean the carpet and have it ready before my Richmond inspection on the same day?',
    a: 'Yes. We hold priority slots for end-of-lease jobs and carry air movers to accelerate drying. Most Richmond properties are ready for a final inspection 3–4 hours after we finish. Call 0493 100 989 to check same-day availability.',
  },
  {
    q: 'My Richmond landlord is particular about the clean. What happens if they raise a concern?',
    a: 'Our 7-day re-clean promise covers every job. If your landlord or property manager identifies a specific area within 7 days of service, send us photos and we return to re-clean that area at no extra charge.',
  },
]

export default function CarpetCleaningRichmondPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Carpet Cleaning Richmond', href: '/carpet-cleaning-richmond' },
      ]} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Serving Richmond</span>
          <h1>Carpet Cleaning Richmond</h1>
          <p className="lead">TidyRoo provides professional carpet cleaning in Richmond for the suburb's distinctive mix of Victorian terraces, post-war flats, and newer apartment towers. With one of Melbourne's highest renter concentrations and constant tenancy turnover, end-of-lease carpet cleaning is the most common call we receive from Richmond — and we schedule priority same-day slots for exactly those situations.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Common carpet situations in Richmond</h2>
          <p>Richmond's Victorian terraces on streets like Punt Road, Swan Street, and Lennox Street often have original hallways and bedroom carpet that has accumulated years of compacted soil — the narrow corridors and shared entries of terrace housing see heavy foot traffic that vacuuming alone cannot address. The suburb's high proportion of rental properties and short-term tenancies means carpets are frequently handed over between tenants without professional cleaning, making each successive clean more demanding.</p>
          <p style={{ marginTop: 16 }}>Newer apartment towers along the Punt Road and Church Street corridors present a different challenge: light-coloured carpet in compact apartments that shows pet and food stains quickly. Leases in these buildings almost always require a professional receipt at handover — our dated invoice satisfies most Richmond real estate agencies.</p>

          <h2 style={{ marginTop: 40 }}>Services Richmond residents book most</h2>
          <ul className="service-area-list" style={{ marginTop: 16 }}>
            <li><Link href="/end-of-lease-carpet-cleaning">End of lease carpet cleaning</Link> — the most common booking from Richmond, driven by high tenant turnover and strict agency expectations</li>
            <li><Link href="/services/carpet-steam-cleaning">Carpet steam cleaning</Link> — full residential clean for owner-occupiers and long-term tenants refreshing after 12+ months</li>
            <li><Link href="/services/stain-odour-removal">Pet stain and odour removal</Link> — Richmond's many dog and cat owners regularly need enzyme treatment for accidents in compact flats</li>
            <li><Link href="/services/upholstery-cleaning">Upholstery cleaning</Link> — often paired with carpet cleaning in smaller flats where sofa and carpet meet high daily use</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Getting to Richmond</h2>
          <p>Richmond is approximately 3 km from Melbourne's CBD and accessible via Swan Street, Bridge Road, Church Street, and Punt Road. Parking in Richmond is among Melbourne's most competitive — metered zones cover most of the commercial streets and timed restrictions apply in surrounding residential streets. Our technician handles parking as part of the job; we plan routes and arrival windows to minimise street-searching time, and our van is compact enough for most Richmond side streets. If your building has a loading zone or rear lane access, letting us know when booking saves time on the day.</p>
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
              <strong>Ready to book in Richmond?</strong>
              <p>Same-day end-of-lease slots available. Book online or call for immediate availability.</p>
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
