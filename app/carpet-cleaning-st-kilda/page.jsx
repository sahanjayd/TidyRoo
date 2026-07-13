import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning St Kilda',
  description: 'Professional carpet cleaning in St Kilda, VIC. Sand removal, Airbnb turnaround cleans, apartment stairwell cleaning, and end-of-lease service. Book today.',
}

const faqs = [
  {
    q: 'I host on Airbnb in St Kilda — can you do quick turnaround cleans between guests?',
    a: 'Yes. We work with several St Kilda Airbnb hosts who need rapid turnarounds between guests. For short-notice cleans, call 0493 100 989 directly to check availability. For regular scheduled cleans, book through the website and set up a recurring arrangement.',
  },
  {
    q: 'My St Kilda apartment is on the third floor with no lift — is that a problem for your equipment?',
    a: 'Not at all. Our portable units are designed to be carried up stairs and can run from a van parked at street level. We handle the logistics — just let us know the floor level when you book so we allow extra time.',
  },
]

export default function CarpetCleaningStKildaPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Carpet Cleaning St Kilda', href: '/carpet-cleaning-st-kilda' },
      ]} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Serving St Kilda</span>
          <h1>Carpet Cleaning St Kilda</h1>
          <p className="lead">Carpet cleaning in St Kilda comes with challenges you don't find in other Melbourne suburbs — beach sand tracked indoors, salt air in coastal apartments, and a high concentration of Airbnb and short-stay properties that need frequent, fast turnarounds. TidyRoo handles all of it, including stair access in the suburb's iconic art deco apartment buildings where lifts were never installed.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Common carpet situations in St Kilda</h2>
          <p>St Kilda's beach proximity creates a carpet problem that most Melbourne suburbs don't face: fine coastal sand. It's lighter than regular soil and works its way deep into carpet pile, where it acts as an abrasive that damages fibres over time. Residents near the Esplanade, Jacka Boulevard, and the foreshore streets track it in year-round. Standard vacuuming removes the surface layer but leaves fine particles embedded in the backing — hot water extraction flushes them out.</p>
          <p style={{ marginTop: 16 }}>The suburb's art deco apartments — many built in the 1930s–1950s along streets like Fitzroy Street, Grey Street, and Inkerman Street — often have corridor and common-area carpet that hasn't been professionally cleaned in years. These shared spaces accumulate salt-air residue, dust, and heavy foot traffic from multiple tenancies. We handle common-area cleans for body corporates as well as individual apartments.</p>
          <p style={{ marginTop: 16 }}>St Kilda's large Airbnb stock means short turnarounds are a regular ask. We aim to accommodate these with direct-call priority booking.</p>

          <h2 style={{ marginTop: 40 }}>Services St Kilda residents and hosts book most</h2>
          <ul className="service-area-list" style={{ marginTop: 16 }}>
            <li><Link href="/services/carpet-steam-cleaning">Carpet steam cleaning</Link> — the standard clean for apartments and residences, including sand extraction from coastal properties</li>
            <li><Link href="/end-of-lease-carpet-cleaning">End of lease carpet cleaning</Link> — high renter turnover in St Kilda means constant demand for inspection-ready cleans with dated receipt</li>
            <li><Link href="/services/stain-odour-removal">Stain and odour removal</Link> — dog-friendly St Kilda Beach means lots of dogs indoors; enzyme treatment for pet accidents is common</li>
            <li><Link href="/services/upholstery-cleaning">Upholstery cleaning</Link> — Airbnb hosts often clean sofa and carpet together between guest stays</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Getting to St Kilda</h2>
          <p>St Kilda is approximately 5 km south-east of the CBD, accessed via St Kilda Road, Fitzroy Street, and Barkly Street. Foreshore and Fitzroy Street parking is metered and fills quickly on weekends. Our technician targets residential side streets — Grey Street, Inkerman Street, and Carlisle Street cross-streets typically have available space. If you are in an apartment building with a loading zone or basement garage access that allows service vehicles, please mention it when booking — it significantly reduces the time between arrival and starting work.</p>
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
              <strong>Ready to book in St Kilda?</strong>
              <p>Airbnb turnarounds and same-day end-of-lease slots available. Call for urgent bookings.</p>
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
