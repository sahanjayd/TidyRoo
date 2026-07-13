import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning Lalor',
  description: 'Carpet cleaning in Lalor, VIC. Established post-war family homes, traffic lane restoration, and honest pricing. Compare our service before you book. Book today.',
}

const faqs = [
  {
    q: 'We have dark traffic lanes on our light carpet in the hallway — can those be removed?',
    a: 'Traffic lanes are areas where soil has been ground into the pile by repeated foot pressure. Hot water extraction with pre-agitation addresses them well in most cases. Very old traffic lanes — 10+ years of compaction — may leave a residual shadow even after thorough cleaning, because the fibre itself has been worn flat. We give you an honest assessment of what to expect before we start.',
  },
  {
    q: 'What is the difference between your service and the $99 carpet cleaning specials we see advertised?',
    a: 'Low-cost operators typically use portable units with limited heating and suction, skip pre-treatment, and apply minimal dwell time. The result looks fine initially but the rapid re-soiling that follows — because of detergent residue left in the fibre — often leaves carpets dirtier than before within weeks. We use commercial equipment, HEPA pre-vacuuming, spot pre-treatment, correct dwell time, and proper extraction. The difference is visible within weeks of the clean.',
  },
]

export default function CarpetCleaningLalorPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Carpet Cleaning Lalor', href: '/carpet-cleaning-lalor' },
      ]} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Serving Lalor</span>
          <h1>Carpet Cleaning Lalor</h1>
          <p className="lead">Lalor's established post-war housing stock shares characteristics with its Thomastown neighbour: solid 1950s–1970s brick homes with families who have lived there for years and carpet that reflects that history. TidyRoo's carpet cleaning in Lalor focuses on genuine deep cleaning — pre-treatment, proper agitation, and full hot water extraction — not just a rapid surface pass.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Common carpet situations in Lalor</h2>
          <p>Lalor's residential streets — Dalton Road, Plenty Road, and the cross-streets running between them — are lined with post-war homes that have seen generations of family life. The carpet in these homes is typically the second or third installation since original construction, and it has absorbed years of accumulated soil: compacted hallway traffic lanes, generalised bedroom pile flattening, and concentrated staining in the main living areas where family life happens most intensively.</p>
          <p style={{ marginTop: 16 }}>The Lalor rental market also sees consistent end-of-lease demand, particularly in the post-war flat and unit stock around Plenty Road. Many of these rentals are long-tenure, and the carpet reflects that — requiring more thorough treatment at handover than a light-soiling residential job would.</p>
          <p style={{ marginTop: 16 }}>Pet households are common in Lalor's family homes, and the suburb regularly generates requests for enzyme stain treatment alongside the standard steam clean.</p>

          <h2 style={{ marginTop: 40 }}>Services Lalor residents book most</h2>
          <ul className="service-area-list" style={{ marginTop: 16 }}>
            <li><Link href="/services/carpet-steam-cleaning">Carpet steam cleaning</Link> — established-home deep cleans with pre-agitation of traffic lanes</li>
            <li><Link href="/services/stain-odour-removal">Stain and odour removal</Link> — enzyme treatment for pet accidents in family homes</li>
            <li><Link href="/end-of-lease-carpet-cleaning">End of lease carpet cleaning</Link> — rental property turnovers with dated invoice for agency acceptance</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Getting to Lalor</h2>
          <p>Lalor is approximately 18 km north of the CBD via Plenty Road. Drive time is typically 20–30 minutes. Residential streets in Lalor have uncomplicated suburban parking — wide streets, driveways on most properties, no permit zones in the residential precincts. We can typically park directly in front of the property and keep hose runs short for efficient work.</p>
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
              <strong>Ready to book in Lalor?</strong>
              <p>Same-day and next-day slots available. Book online or call us now.</p>
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
