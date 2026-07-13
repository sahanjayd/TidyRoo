import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning Donnybrook',
  description: 'Carpet cleaning in Donnybrook, VIC. Brand-new estate homes, first professional cleans, post-builder dust removal. Serving Donnybrook and Woodstock. Book today.',
}

const faqs = [
  {
    q: 'Our Donnybrook home was built 18 months ago and the carpet looks fine — do we really need a professional clean?',
    a: 'Builder\'s vacuuming at handover removes surface debris but not the micro-dust that settles into the pile during construction. This fine particulate acts as an abrasive on carpet fibres and contributes to indoor allergen load. A first professional clean at 12–18 months removes this foundation layer before it bonds to the fibre, and applies deodouriser to give the carpet a genuine fresh baseline.',
  },
  {
    q: 'We haven\'t fully moved in yet — can you clean an empty house?',
    a: 'Yes. Empty houses are often the easiest to clean thoroughly — no furniture to move means we can access every corner. We can also clean before you move in if you are settling soon and want a fresh start. Just book and let us know the property is unfurnished.',
  },
]

export default function CarpetCleaningDonnybrookPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Carpet Cleaning Donnybrook', href: '/carpet-cleaning-donnybrook' },
      ]} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Serving Donnybrook &amp; Woodstock</span>
          <h1>Carpet Cleaning Donnybrook</h1>
          <p className="lead">Donnybrook is one of Melbourne's newest planned suburbs — most homes here were built from 2018 onwards, and the community is still forming. Almost every Donnybrook home has carpet throughout from the original build, and most households are booking their first professional clean. TidyRoo handles new-estate first-time cleans routinely, including post-builder dust removal and pre-settlement cleans for properties still settling.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Common carpet situations in Donnybrook</h2>
          <p>Because Donnybrook is so new, the carpet situations here are consistent: builder-grade carpet that was vacuumed at handover but never professionally extracted; fine construction dust from ongoing building on neighbouring blocks that blows indoors through temporary gaps during construction; and the early-stage soiling of a family settling into a new home — tracked outdoor soil from establishing lawns, food spills in open-plan living areas.</p>
          <p style={{ marginTop: 16 }}>With ongoing construction throughout the Donnybrook and Woodstock precincts, ambient dust is a persistent issue for residents in already-settled homes. HEPA pre-vacuuming is particularly effective in this environment because it captures construction-grade fine particulate that a domestic vacuum recirculates back into the air.</p>
          <p style={{ marginTop: 16 }}>Tile and grout is also commonly requested in Donnybrook new builds — post-construction grout haze left by tilers is much easier to remove with a professional restoration clean in the first 1–2 years than after it fully cures into the pore structure.</p>

          <h2 style={{ marginTop: 40 }}>Services Donnybrook residents book most</h2>
          <ul className="service-area-list" style={{ marginTop: 16 }}>
            <li><Link href="/services/carpet-steam-cleaning">Carpet steam cleaning</Link> — first-time professional clean with HEPA pre-vacuum and post-builder dust extraction</li>
            <li><Link href="/services/tile-grout-cleaning">Tile and grout cleaning</Link> — post-construction restoration to remove grout haze and set the baseline</li>
            <li>Pre-settlement cleans — full home clean before furniture arrival for new build completions</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Getting to Donnybrook</h2>
          <p>Donnybrook is approximately 40 km north of Melbourne's CBD via the Hume Freeway to the Donnybrook Road exit. Drive time is typically 45–55 minutes. Estate streets in Donnybrook and Woodstock are wide, new, and universally have driveway access — there are no parking challenges. We cover Donnybrook as part of our outer-north corridor and do not apply a call-out surcharge for the area.</p>
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
              <strong>Ready to book in Donnybrook?</strong>
              <p>First-time estate cleans and pre-settlement bookings welcome. Book online or call us.</p>
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
