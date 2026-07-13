import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning Reservoir',
  description: 'Professional carpet cleaning in Reservoir, VIC. Post-war homes and rental properties. Musty carpet treatment, end-of-lease cleans, and deep soil removal. Book today.',
}

const faqs = [
  {
    q: 'My Reservoir rental has carpet from the 1990s — should the landlord replace it, or is cleaning worth trying first?',
    a: 'It depends on the structural condition of the fibre. We can give a condition assessment after cleaning that describes what we found and what the result was — some landlords use this to make a more informed replacement decision. If the carpet is in good structural shape but looks poor from accumulated soil, cleaning can justify the expense and delay of replacement.',
  },
  {
    q: 'The carpet in my older Reservoir home has a musty smell — what causes it and can cleaning fix it?',
    a: 'Mustiness in older homes typically comes from moisture trapped in the carpet backing (often from historical over-wetting by previous cleaning or minor flooding), or from mould growth at the backing layer. Our deodourising treatment and extraction addresses surface-layer mustiness. If the source is structural dampness in the subfloor, we\'ll flag it — cleaning can improve the symptom but won\'t fix the underlying cause.',
  },
]

export default function CarpetCleaningReservoirPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Carpet Cleaning Reservoir', href: '/carpet-cleaning-reservoir' },
      ]} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Serving Reservoir</span>
          <h1>Carpet Cleaning Reservoir</h1>
          <p className="lead">Reservoir's housing stock spans from inter-war bungalows and post-war weatherboards through to 1960s and 1970s brick homes — a suburb with genuine character and the carpet challenges that come with older housing. TidyRoo's carpet cleaning in Reservoir handles deep restoration work on older carpet, musty-smell treatment, and end-of-lease cleans for the suburb's significant rental market around High Street and Plenty Road.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Common carpet situations in Reservoir</h2>
          <p>Reservoir's older housing — the post-war homes on streets like Cheddar Road, Blake Street, and the grid between Plenty Road and High Street — carries carpet that reflects decades of family occupation. Many of these properties have had carpet replaced once or twice since original construction, but the replacement is itself now 15–20 years old. The soil profile is deep and layered rather than recent.</p>
          <p style={{ marginTop: 16 }}>Older homes in Reservoir also present a specific challenge: carpet installed over concrete slab or floorboard can hold residual moisture from previous cleaning or minor seepage, which produces the musty odour common in this generation of housing. Our treatment identifies whether this is a surface-layer problem addressable by cleaning and deodourising, or a subfloor issue that cleaning alone won't resolve.</p>
          <p style={{ marginTop: 16 }}>The Reservoir rental market — particularly the cluster of post-war flats and duplexes along High Street, Gilbert Road, and Miller Street — generates consistent end-of-lease demand. Many of these properties have long-tenure tenants who leave behind a significant cleaning job that rewards a thorough professional approach.</p>

          <h2 style={{ marginTop: 40 }}>Services Reservoir residents book most</h2>
          <ul className="service-area-list" style={{ marginTop: 16 }}>
            <li><Link href="/services/carpet-steam-cleaning">Carpet steam cleaning</Link> — deep restoration cleans for older Reservoir homes with layered soil</li>
            <li><Link href="/end-of-lease-carpet-cleaning">End of lease carpet cleaning</Link> — rental property turnovers in Reservoir's post-war flat and unit stock</li>
            <li><Link href="/services/stain-odour-removal">Odour treatment</Link> — musty-smell deodourising and enzyme treatment for pet households</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Getting to Reservoir</h2>
          <p>Reservoir is approximately 12 km north of Melbourne's CBD, accessed via High Street, Plenty Road, or Bell Street. Drive time is typically 20–25 minutes. Street parking in the residential precincts is generally manageable — metered zones run along High Street and the main commercial strip, but side streets throughout the residential grid have unconstrained parking. Most properties are within easy van parking distance.</p>
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
              <strong>Ready to book in Reservoir?</strong>
              <p>Established-home specialists. Book online or call us for same-day availability.</p>
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
