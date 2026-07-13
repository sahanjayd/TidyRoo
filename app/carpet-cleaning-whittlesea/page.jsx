import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning Whittlesea',
  description: 'Carpet cleaning in Whittlesea, VIC. Rural and township properties, heavy pet soiling, large home packages. Sub-surface pet urine treatment available. Book today.',
}

const faqs = [
  {
    q: 'We have a large property with five bedrooms — how do you price that?',
    a: 'Larger homes are quoted by room count plus soil assessment. We give a firm quote before starting, so you know the full cost before we plug anything in. Call us on 0493 100 989 for a quick phone estimate if you want to get a range before booking online.',
  },
  {
    q: 'Our dog has had repeated accidents in the same room over several years — is that fixable?',
    a: 'Chronic pet urine in a single area is among the most demanding carpet situations we deal with, but it is also our specialty. Repeated accidents allow urine to crystallise in the backing and underlay. We use UV detection to map the full extent of the contamination, then inject an enzyme solution below the carpet surface. For severe or multi-year cases, the underlay may need replacement — we advise honestly if that is the case.',
  },
]

export default function CarpetCleaningWhittleseaPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Carpet Cleaning Whittlesea', href: '/carpet-cleaning-whittlesea' },
      ]} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Serving Whittlesea township &amp; surrounds</span>
          <h1>Carpet Cleaning Whittlesea</h1>
          <p className="lead">Whittlesea is a different kind of Melbourne suburb — part established country township, part newer residential development, with a significant rural-residential fringe. Carpet cleaning here means dealing with the kind of soiling that comes from working properties and active outdoor lifestyles: heavy tracked-in soil, hay and pasture dust, and significant pet issues in households with dogs and sometimes livestock. TidyRoo is equipped for this.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Common carpet situations in Whittlesea</h2>
          <p>Whittlesea's older township homes — along Laurimar Road, Church Street, and the historic town grid — carry carpet in the range of 15–25 years in some cases, with soil load that reflects decades of rural-adjacent living. These properties often have dogs that move freely between paddock and indoors, tracked soil that includes clay and fine dust from unsealed driveways, and accumulated pet dander in the pile that contributes to indoor allergen load.</p>
          <p style={{ marginTop: 16 }}>Rural-residential properties on larger blocks outside the township proper have similar challenges at greater scale — more rooms, more floor area, more pets, and less frequent cleaning history. We bring sufficient solution and equipment for full large-home jobs and do not cap jobs by size.</p>
          <p style={{ marginTop: 16 }}>Newer estate sections developing along the Whittlesea-Lalor corridor share characteristics with Doreen and Mernda: newer carpet, construction-dust residue, and family households needing their first professional clean.</p>

          <h2 style={{ marginTop: 40 }}>Services Whittlesea residents book most</h2>
          <ul className="service-area-list" style={{ marginTop: 16 }}>
            <li><Link href="/services/carpet-steam-cleaning">Carpet steam cleaning</Link> — large-home packages with heavy soil pre-treatment for rural-adjacent properties</li>
            <li><Link href="/services/stain-odour-removal">Pet stain and odour removal</Link> — sub-surface enzyme treatment for repeated pet accidents, including UV detection to find all affected zones</li>
            <li><Link href="/services/rug-mattress-cleaning">Rug cleaning</Link> — area rugs in rural homes accumulate significant soiling; on-site rug washing available</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Getting to Whittlesea</h2>
          <p>Whittlesea township is approximately 35 km north of Melbourne's CBD via Plenty Road or the Plenty Valley Freeway extension. Drive time is typically 40–50 minutes. Rural properties outside the township may add 5–15 minutes. Parking and access are rarely an issue — most properties have long driveways and open access. If your property has a gate or requires advance access arrangements, let us know when booking so we can confirm arrival procedures.</p>
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
              <strong>Ready to book in Whittlesea?</strong>
              <p>Large-home and heavy-soiling specialists. Book online or call us now.</p>
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
