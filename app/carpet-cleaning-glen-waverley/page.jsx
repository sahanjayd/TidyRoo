import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning Glen Waverley',
  description: 'Professional carpet cleaning in Glen Waverley, VIC. Quality carpet care for owner-occupied family homes. Wool-safe products, stain guard available. Book today.',
}

const faqs = [
  {
    q: 'We have expensive wool-blend carpet — are your products safe for it?',
    a: 'Yes. Wool carpet requires lower pH detergents and careful temperature management. We identify the fibre type during the pre-inspection using a burn test and select chemistry accordingly. We have cleaned wool-blend carpet extensively in Glen Waverley homes and can share our approach before we start if that helps you feel confident.',
  },
  {
    q: 'Can you apply stain protection in the same visit as the carpet clean?',
    a: 'Yes. Stain guard is applied after extraction, once the carpet is still slightly damp, which is the ideal application state. It adds approximately 30 minutes to the visit. Ask about it when you book and we will include it in the quote.',
  },
]

export default function CarpetCleaningGlenWaverleyPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Carpet Cleaning Glen Waverley', href: '/carpet-cleaning-glen-waverley' },
      ]} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Serving Glen Waverley</span>
          <h1>Carpet Cleaning Glen Waverley</h1>
          <p className="lead">Glen Waverley's owner-occupied family homes — many of them well-maintained 1980s and 1990s constructions in the Glen Waverley Secondary catchment — carry quality carpet that deserves careful cleaning. TidyRoo's service here is built around precision: the right chemistry for the fibre, the right temperature for the construction, and the option to apply stain guard while we're already on-site.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Common carpet situations in Glen Waverley</h2>
          <p>Glen Waverley's residential streets — Coleman Parade, Kingsway, Montague Road, and the surrounding school catchment grid — are lined with quality family homes where the carpet is typically well looked after but still accumulates fine soil, allergens, and occasional staining over 12 to 18 months. The suburb's strong owner-occupier culture means residents care about the result: they want the carpet to look and smell genuinely clean, not just vacuumed.</p>
          <p style={{ marginTop: 16 }}>Wool and wool-blend carpet is more common in Glen Waverley than in many other Melbourne suburbs, reflecting the quality of older home builds and renovation choices by owner-occupiers who invest in their properties. These fibres respond exceptionally well to professional hot water extraction with the right low-alkaline chemistry — and noticeably worse to wrong-chemistry cleaning. We verify fibre type before starting every job.</p>
          <p style={{ marginTop: 16 }}>Family households with school-age children often book after each school term, managing the accumulated soil from a busy home and keeping carpet in condition before it requires replacement.</p>

          <h2 style={{ marginTop: 40 }}>Services Glen Waverley residents book most</h2>
          <ul className="service-area-list" style={{ marginTop: 16 }}>
            <li><Link href="/services/carpet-steam-cleaning">Carpet steam cleaning</Link> — whole-home packages for quality family homes, with fibre-appropriate chemistry selection</li>
            <li><Link href="/services/upholstery-cleaning">Upholstery cleaning</Link> — quality fabric lounges are often cleaned alongside the carpet in a single visit</li>
            <li>Stain guard application — popular add-on after cleaning in households with young children</li>
            <li><Link href="/services/tile-grout-cleaning">Tile and grout cleaning</Link> — kitchens and bathrooms in 1980s-90s homes often benefit from a grout restoration</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Getting to Glen Waverley</h2>
          <p>Glen Waverley is approximately 22 km south-east of the CBD via the Monash Freeway (M1) and Springvale Road or Coleman Road. Residential streets throughout the suburb are wide, well-maintained, and have ample unmetered parking. Most properties have a driveway, making access for our van straightforward. The drive from our base typically takes 25–35 minutes in normal traffic conditions — we factor travel time into the booking window and communicate ETAs clearly.</p>
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
              <strong>Ready to book in Glen Waverley?</strong>
              <p>Wool-safe products and stain guard available. Book online or call us now.</p>
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
