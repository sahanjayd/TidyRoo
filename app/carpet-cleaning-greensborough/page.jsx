import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning Greensborough',
  description: 'Carpet cleaning in Greensborough, VIC. 1970s-80s family homes, original wool carpet, hilly access handled. Full-home packages and upholstery available. Book today.',
}

const faqs = [
  {
    q: 'We have original 1970s wool carpet that\'s still in good condition — is steam cleaning safe for it?',
    a: 'Wool carpet responds very well to hot water extraction when the right low-alkaline chemistry and controlled temperature are used. We test pH tolerance and temperature response in a discreet corner before treating the full area. Wool cleaned correctly recovers extremely well — it\'s one of the more rewarding carpet types to restore professionally.',
  },
  {
    q: 'Our Greensborough house is on a steep block — is that a problem for your equipment?',
    a: 'Not at all. We use portable units on shoulder straps designed for multi-level access and sloped driveways. The hose runs from our van to the property and we have enough length to reach all areas of most Greensborough homes without repositioning. Let us know the block configuration when booking if it\'s particularly steep or has specific access challenges.',
  },
]

export default function CarpetCleaningGreensboroughPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Carpet Cleaning Greensborough', href: '/carpet-cleaning-greensborough' },
      ]} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Serving Greensborough</span>
          <h1>Carpet Cleaning Greensborough</h1>
          <p className="lead">Greensborough's 1970s and 1980s family homes — many of them on the hilly terrain north-east of the town centre — carry some of Melbourne's most interesting carpet: original wool and wool-blend installations that have survived decades of careful family use and still have genuine life left. TidyRoo's carpet cleaning in Greensborough is built around respecting that — the right chemistry for wool, proper temperature control, and access equipment for sloped sites.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Common carpet situations in Greensborough</h2>
          <p>Greensborough was developed substantially in the 1970s and 1980s, and many of its homes retain carpet from that era — sometimes original wool or wool-blend installations that were built to last and have done exactly that. These carpets need low-alkaline chemistry, controlled heat, and a gentle approach that synthetic carpet doesn't require. Applying high-pH detergents or excessive heat to wool causes shrinkage and colour change — chemistry selection is not optional, it's essential.</p>
          <p style={{ marginTop: 16 }}>Greensborough's topography — the hilly terrain around Grimshaw Street, Sherbourne Road, and the elevated streets east of the town centre — means some properties have sloped driveways and multi-level access that cheaper operators find challenging. Our portable equipment handles this without compromise on machine power or cleaning effectiveness.</p>
          <p style={{ marginTop: 16 }}>Owner-occupier culture dominates in Greensborough, and the suburb's residents tend to take pride in the condition of their homes. We see a high proportion of regular 12-to-18-month bookings from Greensborough households rather than reactive crisis cleans.</p>

          <h2 style={{ marginTop: 40 }}>Services Greensborough residents book most</h2>
          <ul className="service-area-list" style={{ marginTop: 16 }}>
            <li><Link href="/services/carpet-steam-cleaning">Carpet steam cleaning</Link> — wool-safe hot water extraction for Greensborough's established homes with original or quality replacement carpet</li>
            <li><Link href="/services/upholstery-cleaning">Upholstery cleaning</Link> — fabric lounges commonly cleaned alongside carpet in owner-occupied Greensborough homes</li>
            <li><Link href="/services/rug-mattress-cleaning">Rug cleaning</Link> — quality area rugs in Greensborough homes benefit from on-site professional washing</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Getting to Greensborough</h2>
          <p>Greensborough is approximately 22 km north-east of Melbourne's CBD via the Eastern Freeway and Diamond Creek Road or Greensborough Bypass. Drive time is typically 25–35 minutes. Residential streets in the flatter sections have unconstrained parking; properties on elevated terrain may require some planning around the driveway gradient. We don't consider Greensborough's terrain unusual — it's a regular part of our north-east Melbourne run.</p>
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
              <strong>Ready to book in Greensborough?</strong>
              <p>Wool-safe products and hilly-site experience. Book online or call us now.</p>
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
