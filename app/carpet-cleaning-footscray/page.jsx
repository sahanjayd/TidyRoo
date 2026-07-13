import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning Footscray',
  description: 'Professional carpet cleaning in Footscray, VIC. Old worker\'s cottages, new apartments, and rental properties steam cleaned with eco-friendly products. Book now.',
}

const faqs = [
  {
    q: 'Can you clean aged carpet in a pre-war Footscray cottage without damaging it?',
    a: 'Yes. We run a pre-inspection specifically to identify fibre type and assess how the carpet will respond to heat and moisture. For older fibres, we adjust water temperature and dwell time to clean thoroughly without stressing the weave.',
  },
  {
    q: 'I am a new owner wanting the carpet cleaned before moving in — do I need to be present?',
    a: 'Not necessarily. Many Footscray clients give us access via a key safe or meet us briefly at the start. We do a walkthrough before beginning, so if you can be there for the first five minutes it helps, but we can also work from written notes if that is easier.',
  },
]

export default function CarpetCleaningFootscrayPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Carpet Cleaning Footscray', href: '/carpet-cleaning-footscray' },
      ]} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Serving Footscray</span>
          <h1>Carpet Cleaning Footscray</h1>
          <p className="lead">Footscray's carpet cleaning needs span two very different generations of housing — the original worker's cottages on streets like Hopkins Street and Whitehall Street, where carpet has sometimes never seen a professional machine, and the newer Maribyrnong River development apartments where fresh-settled owners want a clean start. TidyRoo handles both ends of that spectrum with chemistry and equipment chosen for each situation.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Common carpet situations in Footscray</h2>
          <p>Footscray's original housing stock — worker's cottages and inter-war homes throughout the Barkly Street, Ballarat Road, and Droop Street precincts — often carries carpet that predates professional cleaning as a routine service. In these properties, the soil load is genuinely deep: years of compacted debris, traffic lane formation, and sometimes mould or moisture residue in the backing. Our pre-inspection identifies these cases and we adjust the treatment plan accordingly, rather than applying a one-size extraction that may not be sufficient.</p>
          <p style={{ marginTop: 16 }}>New apartment buildings along the Maribyrnong corridor see a different pattern — pre-settlement cleans from new owners, and end-of-lease cleans from the increasing rental population as the suburb continues to attract younger residents drawn to the Footscray Market precinct and growing restaurant scene.</p>

          <h2 style={{ marginTop: 40 }}>Services Footscray residents book most</h2>
          <ul className="service-area-list" style={{ marginTop: 16 }}>
            <li><Link href="/services/carpet-steam-cleaning">Carpet steam cleaning</Link> — the core service for Footscray homes, old and new, with pre-treatment adjusted for soil load</li>
            <li><Link href="/end-of-lease-carpet-cleaning">End of lease carpet cleaning</Link> — growing demand in Footscray's expanding rental market</li>
            <li><Link href="/services/stain-odour-removal">Stain and odour removal</Link> — older homes sometimes carry mystery stains and embedded odours that need targeted enzyme treatment</li>
            <li><Link href="/services/tile-grout-cleaning">Tile and grout cleaning</Link> — often paired with carpet cleaning in Footscray's kitchen-heavy renovated cottages</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Getting to Footscray</h2>
          <p>Footscray is approximately 7 km west of the CBD via the Western Ring Road or Footscray Road, also accessible by Barkly Street from the inner west. Street parking in Footscray is generally more manageable than the inner-north and inner-south suburbs. Most residential streets off Hopkins Street and Leeds Street have adequate unmetered space. The Footscray Market precinct has timed street parking on weekdays — we prefer residential side streets where available. If your property has off-street parking or a driveway, it helps us position our hose runs efficiently.</p>
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
              <strong>Ready to book in Footscray?</strong>
              <p>Flexible slots available including same-day. Book online or call us now.</p>
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
