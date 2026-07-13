import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning Mill Park',
  description: 'Carpet cleaning in Mill Park, VIC. 1980s-90s brick family homes with older carpet. Deep cleaning with pre-agitation. Full-house packages available. Book today.',
}

const faqs = [
  {
    q: 'Our Mill Park carpet is from the 1990s and the pile looks flattened in the living room — can cleaning fix that?',
    a: 'Hot water extraction lifts and grooms the fibre as part of the process. Some pile recovery happens as a result, particularly in areas where the flattening is from temporary furniture placement rather than decades of foot traffic. In truly high-traffic zones, deep compaction of the fibre becomes permanent over 20+ years, but the cleaned result is still consistently better than the pre-clean state — often significantly.',
  },
  {
    q: 'How often should we be cleaning in a busy family home in Mill Park?',
    a: 'With children and a pet, we recommend every 6–12 months. Annual cleaning keeps the soil from bonding deeply into the fibre, which is what makes each subsequent clean effective. Our technician advises on the appropriate interval on the visit based on your carpet\'s current condition and household activity level.',
  },
]

export default function CarpetCleaningMillParkPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Carpet Cleaning Mill Park', href: '/carpet-cleaning-mill-park' },
      ]} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Serving Mill Park</span>
          <h1>Carpet Cleaning Mill Park</h1>
          <p className="lead">Mill Park's residential character is shaped by its 1980s and 1990s development — predominantly brick veneer family homes with carpet throughout, owned by households who have built their lives in the suburb over decades. TidyRoo's carpet cleaning in Mill Park is built around deep restoration work on this generation of home: proper pre-treatment, agitation, and extraction that addresses what 30 years of family use has put into the pile.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Common carpet situations in Mill Park</h2>
          <p>Mill Park's brick veneer homes — on streets like Morang Drive, Main Road East, and the surrounding residential streets — were largely built between 1980 and 2000. The carpet in these homes has been through one or two replacements in some properties, while in others the original or first-replacement carpet is still in service. This mid-lifecycle carpet responds well to professional cleaning when it hasn't become structurally compromised.</p>
          <p style={{ marginTop: 16 }}>Traffic lane formation is the dominant soiling pattern in Mill Park family homes — the concentration of foot movement in the hallway and between kitchen and living areas creates visible darker paths that deepen over time without professional cleaning. Our pre-agitation step loosens the soil from these zones before extraction, which is what makes the difference between a surface clean and a genuine restoration.</p>
          <p style={{ marginTop: 16 }}>Mill Park households with children and pets in active family homes generate the broadest range of staining: food spills in the living area, pet accidents in bedrooms, and tracked-in soil from busy outdoor areas. These are all addressed through the standard pre-treatment step included in every clean.</p>

          <h2 style={{ marginTop: 40 }}>Services Mill Park residents book most</h2>
          <ul className="service-area-list" style={{ marginTop: 16 }}>
            <li><Link href="/services/carpet-steam-cleaning">Carpet steam cleaning</Link> — whole-home restoration cleans for 1980s-90s family homes</li>
            <li><Link href="/services/stain-odour-removal">Stain and odour removal</Link> — spot treatment and enzyme treatment added to standard cleans</li>
            <li><Link href="/services/upholstery-cleaning">Upholstery cleaning</Link> — families in established Mill Park homes often combine sofa and carpet cleaning in one visit</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Getting to Mill Park</h2>
          <p>Mill Park is approximately 19 km north of Melbourne's CBD via Plenty Road. Drive time is typically 25–30 minutes. Mill Park's residential streets are wide suburban streets with uncomplicated parking — most homes have driveways and adjacent kerb space. Access for our van is straightforward throughout the suburb and we can typically park directly in front of the property.</p>
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
              <strong>Ready to book in Mill Park?</strong>
              <p>Family home specialists. Book online or call us for a same-day or next-day slot.</p>
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
