import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning Werribee',
  description: 'Professional carpet cleaning in Werribee, VIC. Family homes, growing estates, and pet households. Full-house packages, same-day slots. Serving all of Wyndham LGA.',
}

const faqs = [
  {
    q: 'Do you service the newer Werribee estates like Wyndham Vale and Hoppers Crossing?',
    a: 'Yes. We cover Werribee and the broader Wyndham local government area including Wyndham Vale, Hoppers Crossing, Williams Landing, and Point Cook. Let us know your specific suburb when you book so we confirm availability for your area.',
  },
  {
    q: 'My home is on a new estate and still has construction dust in the carpet — can you remove it?',
    a: 'Construction dust is finer than household soil and settles deep into pile. We start with HEPA pre-vacuuming specifically designed to lift fine particulates, then follow with hot water extraction. This combination is substantially more effective than a standard domestic vacuum at clearing post-build dust.',
  },
]

export default function CarpetCleaningWerribeePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Carpet Cleaning Werribee', href: '/carpet-cleaning-werribee' },
      ]} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Serving Werribee &amp; Wyndham</span>
          <h1>Carpet Cleaning Werribee</h1>
          <p className="lead">Werribee's carpet cleaning needs range from established 1980s and 1990s homes on the older residential grid to the rapidly growing new estates in Wyndham Vale and surrounds — where families are settling into homes filled with brand-new carpet that needs its first professional clean. TidyRoo covers all of Wyndham LGA and carries full equipment for both established-home deep cleans and new-estate first-time treatments.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Common carpet situations in Werribee</h2>
          <p>Established Werribee homes from the 1980s and 1990s — particularly in the streets around Werribee town centre and Hoppers Crossing — carry carpet with a decade or more of family soiling: pet accidents, children's traffic, tracked-in soil from large gardens and outdoor entertaining areas. The western plains also contribute a fine dust that the prevailing westerlies carry indoors, adding a soiling layer that's invisible until you run your hand across the pile.</p>
          <p style={{ marginTop: 16 }}>In the newer estates — Wyndham Vale, Manor Lakes, and the Jubilee and Tarneit growth corridors — the situation is different: brand-new or near-new carpet in homes that have been occupied for 1–3 years. This carpet looks clean but holds construction fine dust and has started accumulating the early soil layer that, if not addressed, bonds to fibres and becomes harder to remove over time.</p>
          <p style={{ marginTop: 16 }}>Larger block sizes in Werribee mean larger homes, meaning full-house packages covering 4–6 rooms are the norm rather than the exception.</p>

          <h2 style={{ marginTop: 40 }}>Services Werribee residents book most</h2>
          <ul className="service-area-list" style={{ marginTop: 16 }}>
            <li><Link href="/services/carpet-steam-cleaning">Carpet steam cleaning</Link> — full-house packages for both established homes and newer estates</li>
            <li><Link href="/services/stain-odour-removal">Pet stain and odour removal</Link> — dog-heavy suburb; enzyme treatment added to steam clean is common</li>
            <li><Link href="/services/tile-grout-cleaning">Tile and grout cleaning</Link> — alfresco and outdoor areas in larger Werribee properties benefit from outdoor tile restoration</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Getting to Werribee</h2>
          <p>Werribee is approximately 32 km south-west of Melbourne's CBD via the Western Ring Road and Princes Freeway. Drive time from the inner suburbs is 35–45 minutes depending on traffic. We block our Werribee runs to minimise travel cost and we do not charge a call-out fee for Werribee proper or the nearby Wyndham LGA estates. Residential parking throughout Werribee is straightforward — wide streets, driveways on most properties, no permit zones in the residential precincts.</p>
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
              <strong>Ready to book in Werribee?</strong>
              <p>Full-house packages and same-day slots available. Book online or call us now.</p>
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
