import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning Mickleham',
  description: 'Carpet cleaning in Mickleham, VIC. New estate homes near Melbourne Airport corridor. Early morning and weekend slots available. No call-out fee. Book today.',
}

const faqs = [
  {
    q: 'I work shifts at the airport — can you do early morning or weekend appointments in Mickleham?',
    a: 'Yes. We operate Monday to Sunday from 7am and can lock in early morning slots for Mickleham bookings. Mention your preferred window when you book online and we will confirm availability. For urgent or specific-time bookings, calling directly on 0493 100 989 is the fastest way to get a firm slot.',
  },
  {
    q: 'Can you give a quote for Mickleham without coming out first?',
    a: 'Yes. We provide indicative quotes based on room count and carpet type — a standard 4-bedroom home with standard soiling can be estimated over the phone or via the online form. We confirm the exact price during the pre-inspection on arrival before starting, so there are no surprises.',
  },
]

export default function CarpetCleaningMicklehamPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Carpet Cleaning Mickleham', href: '/carpet-cleaning-mickleham' },
      ]} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Serving Mickleham &amp; surrounds</span>
          <h1>Carpet Cleaning Mickleham</h1>
          <p className="lead">Mickleham sits in the Hume employment corridor — close to Melbourne Airport, logistics hubs, and the Craigieburn Road growth area — which means a significant portion of residents work non-standard hours. TidyRoo's Mon–Sun 7am–6pm schedule accommodates shift workers who need carpet cleaning done around an irregular timetable, not just standard weekday slots.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Common carpet situations in Mickleham</h2>
          <p>Mickleham's housing spans two eras: a small original township section with older homes, and extensive new estate development (Merrifield, Mookhari, and surrounding releases) built from around 2015 onwards. The estate homes are largely in their first professional cleaning cycle — carpet installed at settlement that has now accumulated 2–5 years of family soiling and construction dust from ongoing building in neighbouring stages.</p>
          <p style={{ marginTop: 16 }}>Agricultural land still borders many Mickleham properties, and dry northerly winds carry fine paddock dust indoors. On high-wind days this is visible as a fine powdery layer on surfaces — and the same dust settles into carpet pile where it's invisible until it builds into a soil load that makes the carpet look dull and feel gritty underfoot.</p>
          <p style={{ marginTop: 16 }}>Pet households in Mickleham are common — the semi-rural feel of the area attracts dog owners, and we regularly see pet stain treatment added to standard steam cleaning bookings.</p>

          <h2 style={{ marginTop: 40 }}>Services Mickleham residents book most</h2>
          <ul className="service-area-list" style={{ marginTop: 16 }}>
            <li><Link href="/services/carpet-steam-cleaning">Carpet steam cleaning</Link> — estate-home whole-house cleans with dust pre-treatment</li>
            <li><Link href="/services/stain-odour-removal">Pet stain removal</Link> — enzyme treatment for pet households in this dog-friendly outer-north suburb</li>
            <li><Link href="/services/tile-grout-cleaning">Tile and grout cleaning</Link> — new-build kitchen and bathroom tile restoration</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Getting to Mickleham</h2>
          <p>Mickleham is approximately 35 km north of Melbourne's CBD via the Hume Freeway or Craigieburn Road. Drive time is typically 35–45 minutes. Access within the estate streets is straightforward — wide new roads with driveway access on every property. If your home is within the Merrifield estate or similar gated-entrance development, let us know the access code or gate procedure when booking.</p>
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
              <strong>Ready to book in Mickleham?</strong>
              <p>Early morning and weekend slots available. Book online or call us now.</p>
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
