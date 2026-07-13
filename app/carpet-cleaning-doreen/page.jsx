import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning Doreen',
  description: 'Carpet cleaning in Doreen, VIC. New estate homes, mud and outdoor soiling, family carpet care with no call-out fee for Doreen and Laurimar. Book today.',
}

const faqs = [
  {
    q: 'Is Doreen far enough out that a call-out fee applies?',
    a: 'No. We cover Doreen and Laurimar as part of our regular north Melbourne run and do not charge an additional call-out fee. The job is priced by room count and soil level, same as any other suburb we service.',
  },
  {
    q: 'Our kids play football and track mud through the carpet all winter — what\'s the best way to manage this?',
    a: 'Heavy mud-season soiling is best addressed with a professional clean at the end of winter before it dries and bonds more deeply. For in-season management, let mud dry before vacuuming (never brush wet mud), then blot — never rub. A professional pre-treatment and extraction at end of winter removes what has accumulated and resets the carpet heading into summer.',
  },
]

export default function CarpetCleaningDoreenPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Carpet Cleaning Doreen', href: '/carpet-cleaning-doreen' },
      ]} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Serving Doreen &amp; Laurimar</span>
          <h1>Carpet Cleaning Doreen</h1>
          <p className="lead">Doreen and Laurimar are primarily made up of newer estate homes occupied by young families — many of whom are booking their first professional carpet clean since moving in. The outdoor lifestyle here, with larger block sizes and children's sport on the weekend, means carpets accumulate mud, grass, and fine soil at a faster rate than apartments or townhouses. TidyRoo covers Doreen with no call-out fee and full equipment for whole-home cleans.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Common carpet situations in Doreen</h2>
          <p>New-build homes in Doreen and Laurimar share a common carpet profile: builder-grade or builder-selected carpet installed at settlement, which collects the usual first-occupant soil mix — construction residue, tracked outdoor soil from establishing gardens and lawns, and the accumulation from a busy family household. The Doreen area also has proximity to rural land and creek corridors (Yan Yean reservoir catchment), meaning fine particulate from exposed soil blows into homes on dry northerly days.</p>
          <p style={{ marginTop: 16 }}>School-age children in this family-heavy suburb are the main soiling vector: muddy football boots, wet dog paws, and drink spills in the main living areas. Hot water extraction with targeted pre-treatment is the appropriate response — encapsulation dry cleaning is usually not deep enough for the soil levels in an active Doreen household.</p>

          <h2 style={{ marginTop: 40 }}>Services Doreen residents book most</h2>
          <ul className="service-area-list" style={{ marginTop: 16 }}>
            <li><Link href="/services/carpet-steam-cleaning">Carpet steam cleaning</Link> — whole-home cleans for new-estate families, with HEPA pre-vacuum for fine particulate</li>
            <li><Link href="/services/tile-grout-cleaning">Tile and grout cleaning</Link> — kitchen and laundry tiles in new builds benefit from an early professional clean</li>
            <li><Link href="/services/stain-odour-removal">Stain removal</Link> — spot treatment for mud season soiling and pet accidents</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Getting to Doreen</h2>
          <p>Doreen is approximately 35 km north of Melbourne's CBD, accessed via the Yan Yean Road or Plenty Road through Mernda. Drive time is typically 40–50 minutes. Estate streets in Doreen and Laurimar have wide carriageways, footpaths, and driveway access on almost every property — there are no parking challenges. We plan our north-corridor runs to group Doreen and Mernda jobs efficiently and communicate booking windows in advance.</p>
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
              <strong>Ready to book in Doreen?</strong>
              <p>No call-out fee. Book online or call us to confirm availability.</p>
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
