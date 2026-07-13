import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning Preston',
  description: 'Professional carpet cleaning in Preston, VIC. Brick veneer family homes, kids, and pets — deep steam cleaning with pre-treatment. Full-house packages available. Book now.',
}

const faqs = [
  {
    q: 'Our Preston carpet hasn\'t been professionally cleaned in 10 years — is it worth cleaning, or should we replace it?',
    a: 'In most cases it is worth cleaning first and seeing the result before making a replacement decision. Decade-old soil is deep but not always irreversible. We give an honest assessment on arrival and will tell you if the carpet has degraded to the point where cleaning won\'t restore it to a satisfactory standard.',
  },
  {
    q: 'Can you do the whole house — five rooms — in a single visit?',
    a: 'Yes. Full-house packages covering five or more rooms are among our most common Preston bookings. We allocate extra time and bring sufficient solution for larger jobs. Just list the rooms in the booking form so we plan accurately.',
  },
]

export default function CarpetCleaningPrestonPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Carpet Cleaning Preston', href: '/carpet-cleaning-preston' },
      ]} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Serving Preston</span>
          <h1>Carpet Cleaning Preston</h1>
          <p className="lead">Preston's 1950s and 1960s brick veneer family homes are the dominant housing type here — solid, well-kept, and frequently carpeted throughout. TidyRoo's carpet cleaning service in Preston is built around full-house family cleans where children, pets, and high daily foot traffic have left traffic lanes and stain concentrations that need pre-treatment and proper hot water extraction to address properly.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Common carpet situations in Preston</h2>
          <p>The characteristic Preston home is a three-to-four bedroom brick veneer with carpet in the bedrooms, hallway, and often the lounge — covering a large total area. These properties are typically owner-occupied and well-maintained, but the volume of foot traffic in a family home accumulates soil faster than homeowners expect. Traffic lanes form visibly in the hallway and between the kitchen and main living areas, where daily movement concentrates grime into narrow bands.</p>
          <p style={{ marginTop: 16 }}>Established families with long tenure in their Preston homes often have carpet that is 10–15 years old but structurally sound — a deep professional clean can restore both the appearance and the hygiene of carpet that looks dull and overdue. Pre-treatment of traffic lanes and spot treatment of concentrated stains before extraction is standard on every Preston job.</p>
          <p style={{ marginTop: 16 }}>The Preston rental market also sees regular end-of-lease work around the High Street and St Georges Road corridors, where turnover in post-war flats creates demand for inspection-ready cleans.</p>

          <h2 style={{ marginTop: 40 }}>Services Preston residents book most</h2>
          <ul className="service-area-list" style={{ marginTop: 16 }}>
            <li><Link href="/services/carpet-steam-cleaning">Carpet steam cleaning</Link> — full-house packages are the most common Preston booking, typically 3–5 rooms</li>
            <li><Link href="/services/stain-odour-removal">Stain and odour removal</Link> — families with pets benefit from targeted enzyme treatment added to the standard clean</li>
            <li><Link href="/end-of-lease-carpet-cleaning">End of lease carpet cleaning</Link> — rental properties around the High Street and Murray Road areas</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Getting to Preston</h2>
          <p>Preston is approximately 10 km north of the CBD, accessed easily via High Street, Murray Road, and Bell Street. Parking in Preston's residential streets is generally uncomplicated — most brick veneer properties have a driveway, and surrounding streets have ample unmetered space. There is no persistent parking challenge in the residential precincts around Gilbert Road, Tyler Street, and Gower Street. We can typically park directly in front of the property, keeping hose runs short and the job efficient.</p>
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
              <strong>Ready to book in Preston?</strong>
              <p>Full-house packages available. Book online or call for a same-day or next-day slot.</p>
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
