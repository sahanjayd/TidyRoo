import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning Thomastown',
  description: 'Carpet cleaning in Thomastown, VIC. Post-war and 1970s brick homes, deep soiling, pet households. Full-house packages and end-of-lease service. Book today.',
}

const faqs = [
  {
    q: 'Our Thomastown carpet is over 20 years old but still structurally sound — is professional cleaning worth it?',
    a: 'Often yes. Age alone doesn\'t determine whether carpet cleans well — fibre integrity does. A structurally sound 20-year-old carpet can look dramatically better after extraction than it does before, particularly if soiling has built up gradually and the change happened slowly. We give an honest assessment on arrival so you can decide whether to clean or replace with full information.',
  },
  {
    q: 'Our landlord specifically asked for a steam clean — will your invoice state that the method was hot water extraction?',
    a: 'Yes. Our invoices itemise the service performed, including noting that hot water extraction (steam cleaning) was used. This satisfies most Thomastown and Whittlesea Council agency requirements for tenancy handover documentation.',
  },
]

export default function CarpetCleaningThomastown() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Carpet Cleaning Thomastown', href: '/carpet-cleaning-thomastown' },
      ]} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Serving Thomastown</span>
          <h1>Carpet Cleaning Thomastown</h1>
          <p className="lead">Thomastown's housing stock is predominantly post-war worker's housing and 1960s–1970s brick veneer — solid, well-built homes that have been in family hands for decades and carry carpet with a history to match. TidyRoo's carpet cleaning in Thomastown regularly involves homes where the carpet hasn't seen a professional machine in years, requiring pre-treatment and proper hot water extraction rather than a surface-only pass.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Common carpet situations in Thomastown</h2>
          <p>The characteristic Thomastown home is a three-bedroom brick veneer on a well-established block — often with a family that has lived there for 10, 20, or 30 years. This long-term occupation pattern produces carpet with layered soiling: not acute staining from a single incident, but gradual traffic-lane formation, generalised embedded soil, and the occasional set-in stain from long ago that has become part of the carpet's history.</p>
          <p style={{ marginTop: 16 }}>These homes respond very well to our full pre-treatment approach — we don't just extract, we pre-condition the traffic lanes with an agitation solution to break up compacted soil before the wand passes over. This extra step makes a visible difference on carpets where soil has been pressed into the fibre over years of daily foot traffic.</p>
          <p style={{ marginTop: 16 }}>Thomastown's rental stock — concentrated in post-war flats and units along High Street and Dalton Road — generates consistent end-of-lease demand, particularly around September and March when leases commonly turn over in the area.</p>

          <h2 style={{ marginTop: 40 }}>Services Thomastown residents book most</h2>
          <ul className="service-area-list" style={{ marginTop: 16 }}>
            <li><Link href="/services/carpet-steam-cleaning">Carpet steam cleaning</Link> — full-home cleans with pre-treatment for long-tenure homes with built-up soiling</li>
            <li><Link href="/end-of-lease-carpet-cleaning">End of lease carpet cleaning</Link> — rental stock around High Street and Dalton Road precincts</li>
            <li><Link href="/services/stain-odour-removal">Pet stain and odour treatment</Link> — enzyme treatment for pet households in established family homes</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Getting to Thomastown</h2>
          <p>Thomastown is approximately 17 km north of Melbourne's CBD via Plenty Road or High Street. Drive time is typically 20–30 minutes. Residential streets in Thomastown are wide suburban streets with ample unmetered parking — most homes have driveways or at minimum unconstrained kerb access directly in front. There are no notable parking challenges in the residential precincts and we can typically position the van close enough to keep hose runs efficient.</p>
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
              <strong>Ready to book in Thomastown?</strong>
              <p>Deep-clean specialists for established homes. Book online or call us now.</p>
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
