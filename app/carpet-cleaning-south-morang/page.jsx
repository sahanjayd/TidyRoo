import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning South Morang',
  description: 'Professional carpet cleaning in South Morang, VIC. 1990s-2000s family homes and new Mernda corridor estates. Carpet and upholstery packages available. Book today.',
}

const faqs = [
  {
    q: 'We\'re near the Mernda train line extension — are there any access or timing issues we should know about?',
    a: 'The Yan Yean Road and Plenty Road corridors can experience delays during school peak hours (7:30–9am and 3–4:30pm). For morning appointments, we target arrival before or after this window. We communicate a realistic arrival window when confirming your booking and send an ETA on the day.',
  },
  {
    q: 'Can you clean carpet and upholstery in the same visit in South Morang?',
    a: 'Yes. Combining carpet steam cleaning and upholstery cleaning in a single visit is common in South Morang — we bring both sets of equipment in the same van. The sofa or chairs are typically done after the carpet has been extracted and while air movers are running. Note the upholstery quote on the booking form so we allocate the right time.',
  },
]

export default function CarpetCleaningSouthMorangPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Carpet Cleaning South Morang', href: '/carpet-cleaning-south-morang' },
      ]} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Serving South Morang &amp; Mernda</span>
          <h1>Carpet Cleaning South Morang</h1>
          <p className="lead">South Morang is a family suburb that spans two development eras — established 1990s and early-2000s homes closer to the Westfield Plenty Valley, and newer Mernda corridor properties developed from 2010 onwards. TidyRoo's carpet cleaning in South Morang addresses both: restoration cleans for older-build family carpet and first professional cleans for Mernda estates.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Common carpet situations in South Morang</h2>
          <p>Established South Morang homes — on streets like Plenty Road, the Mill Park Lakes estate, and surrounding residential grid — were predominantly built in the 1990s and early 2000s. This generation of carpet is at or past its typical 15–20 year professional maintenance cycle, and households that have prioritised regular cleaning are seeing it reward that maintenance, while properties that haven't had a clean in several years may have traffic lanes and staining that require the full pre-treatment approach.</p>
          <p style={{ marginTop: 16 }}>South Morang's family demographics mean active households with children, pets, and high daily foot traffic — the main soiling vectors are consistent and predictable. We see carpets that accumulate soil primarily in the hallway, main living area, and the bedroom used most heavily as a gathering space. These are the areas we focus pre-treatment on before extraction.</p>
          <p style={{ marginTop: 16 }}>In the newer Mernda sections — Mernda Village, Edgebrook, and surrounds — the carpet profile is newer and the soiling lighter but more varied, including tracked-in soil from active outdoor areas and some construction dust from nearby ongoing builds.</p>

          <h2 style={{ marginTop: 40 }}>Services South Morang residents book most</h2>
          <ul className="service-area-list" style={{ marginTop: 16 }}>
            <li><Link href="/services/carpet-steam-cleaning">Carpet steam cleaning</Link> — full-home packages for established 1990s-2000s homes and newer Mernda builds</li>
            <li><Link href="/services/upholstery-cleaning">Upholstery cleaning</Link> — frequently combined with carpet cleaning in South Morang family homes</li>
            <li><Link href="/services/stain-odour-removal">Stain and odour removal</Link> — pet households and families with young children commonly add targeted treatment</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Getting to South Morang</h2>
          <p>South Morang is approximately 22 km north of Melbourne's CBD via Plenty Road or the Yan Yean Road. Drive time is typically 25–40 minutes depending on traffic. Residential streets are wide suburban streets with unconstrained parking and driveway access on most properties. We communicate arrival windows clearly and account for peak traffic periods on Yan Yean Road when planning north-corridor runs.</p>
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
              <strong>Ready to book in South Morang?</strong>
              <p>Carpet and upholstery packages available. Book online or call us now.</p>
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
