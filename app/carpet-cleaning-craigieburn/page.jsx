import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning Craigieburn',
  description: 'Carpet cleaning in Craigieburn, VIC. New estate homes, first professional cleans, construction dust removal, and combined carpet-and-tile packages. Book today.',
}

const faqs = [
  {
    q: 'Our Craigieburn carpet is only two years old and looks fine — is a professional clean really necessary this early?',
    a: 'Yes, and early cleaning actually protects the investment. Soil particles that haven\'t bonded yet are easy to extract. Once they bond to the fibre — typically after 2–3 years without professional cleaning — removal becomes progressively harder. A clean at the 12–18 month mark keeps the carpet in a condition where professional cleaning remains highly effective throughout its life.',
  },
  {
    q: 'Can you clean the carpet and tiled areas in one visit?',
    a: 'Yes. Combined carpet steam cleaning and tile-and-grout restoration in a single visit is common in Craigieburn new builds. We bring the equipment for both services in the same van. Tile work typically follows carpet cleaning on the same day.',
  },
]

export default function CarpetCleaningCraigiburnPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Carpet Cleaning Craigieburn', href: '/carpet-cleaning-craigieburn' },
      ]} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Serving Craigieburn</span>
          <h1>Carpet Cleaning Craigieburn</h1>
          <p className="lead">Craigieburn is one of Melbourne's fastest-growing corridors — and it shows in the carpet cleaning requests we receive. Most Craigieburn homes are new-build properties with carpet throughout, occupied by young families who are booking their first professional clean and want to establish a proper maintenance routine from the start. We cover all of Craigieburn including Roxburgh Park, Mickleham Road estates, and the newest releases in the Hume Growth Corridor.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Common carpet situations in Craigieburn</h2>
          <p>New estate carpet in Craigieburn presents a specific challenge: construction dust. This fine particulate — from plasterboard cutting, concrete grinding, and general site activity — settles deep into the pile during and after construction, then gets pressed further in by the first occupants. A builder's clean vacuums the surface but doesn't address the embedded layer. HEPA pre-vacuuming followed by hot water extraction is the most effective way to clear this first-clean backlog.</p>
          <p style={{ marginTop: 16 }}>Active families with young children in Craigieburn's newer homes generate soiling patterns dominated by tracked-in soil from outdoor play areas (many properties have grass backyards that are still being established), food-and-drink spills in open-plan living areas, and the accumulation of fine dust that blows in from surrounding paddocks during dry conditions.</p>
          <p style={{ marginTop: 16 }}>New-build tile and grout is another common request — post-construction grout haze and surplus product left by tilers benefits from a professional restoration clean before it hardens permanently into the pore.</p>

          <h2 style={{ marginTop: 40 }}>Services Craigieburn residents book most</h2>
          <ul className="service-area-list" style={{ marginTop: 16 }}>
            <li><Link href="/services/carpet-steam-cleaning">Carpet steam cleaning</Link> — first-time and annual professional cleans for new-estate homes with carpet throughout</li>
            <li><Link href="/services/tile-grout-cleaning">Tile and grout cleaning</Link> — post-build grout restoration in kitchens, bathrooms, and alfresco areas</li>
            <li><Link href="/services/stain-odour-removal">Stain removal</Link> — spot treatment for tracked-in soil and food spills in active family homes</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Getting to Craigieburn</h2>
          <p>Craigieburn is approximately 28 km north of Melbourne's CBD via the Hume Freeway. Drive time is typically 30–40 minutes in normal conditions. Craigieburn's estate streets are wide, well-planned, and nearly universally have driveway access — parking is the least complicated of any suburb we service. We do not charge a travel levy for Craigieburn. When booking, include the estate name (e.g., Highlands, Serenity, Peppercorn Hill) if possible so we can confirm the access route.</p>
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
              <strong>Ready to book in Craigieburn?</strong>
              <p>First-time and regular estate cleans welcome. Book online or call us now.</p>
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
