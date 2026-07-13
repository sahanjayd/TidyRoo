import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning Brunswick',
  description: 'Expert carpet cleaning in Brunswick, VIC. End-of-lease steam cleaning, pet stain treatment, and share-house specialist cleans. Same-day slots available. Book now.',
}

const faqs = [
  {
    q: 'We have a share house with four people and two dogs — do you charge more for heavy soiling?',
    a: 'Pricing is based on soil level assessed on arrival, not a flat per-room rate. Share houses do typically have heavier soiling than single-occupant properties, which we factor into the quote before starting. We always confirm the final price before we plug anything in.',
  },
  {
    q: 'Can you clean all rooms of a Brunswick terrace in a single session?',
    a: 'Yes. A typical Brunswick 3-bedroom terrace with hallway takes 2–3 hours with our commercial equipment. We bring everything needed in one van so there is no reason to split the job across multiple visits.',
  },
]

export default function CarpetCleaningBrunswickPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Carpet Cleaning Brunswick', href: '/carpet-cleaning-brunswick' },
      ]} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Serving Brunswick</span>
          <h1>Carpet Cleaning Brunswick</h1>
          <p className="lead">TidyRoo's carpet cleaning service in Brunswick handles the unique demands of the suburb's Edwardian terraces, converted warehouses, and compact share-house flats — where high renter turnover, pets, and heavy foot traffic create the kind of soiling that a vacuum cannot shift. We run regular runs through Brunswick and hold same-day slots for end-of-lease bookings.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Common carpet situations in Brunswick</h2>
          <p>Brunswick's Edwardian-era terraces along streets like Sydney Road, Lygon Street, and their cross-streets often feature carpet runner installations in hallways and stairs that have absorbed decades of foot traffic. Original timber floorboards in the main rooms are common, but the bedrooms and hallways frequently have carpet — sometimes original, sometimes a later replacement — that holds a significant soil load by the time a tenancy ends.</p>
          <p style={{ marginTop: 16 }}>Share houses are a defining feature of Brunswick's rental market. Multi-occupant properties with two to five adults, often with a pet or two, generate soiling patterns that require pre-treatment and agitation before extraction — not just a pass with the wand. We factor this into every Brunswick quote so there are no surprises on the day.</p>
          <p style={{ marginTop: 16 }}>Newer apartment buildings along the Sydney Road corridor present end-of-lease situations similar to Brunswick's neighbours, with strict agency inspection standards and tight handover timelines.</p>

          <h2 style={{ marginTop: 40 }}>Services Brunswick residents book most</h2>
          <ul className="service-area-list" style={{ marginTop: 16 }}>
            <li><Link href="/end-of-lease-carpet-cleaning">End of lease carpet cleaning</Link> — Brunswick's high tenant turnover makes this our most frequent Brunswick booking</li>
            <li><Link href="/services/stain-odour-removal">Pet stain and odour removal</Link> — common in share houses and flats; enzyme treatment reaches below the surface where DIY products cannot</li>
            <li><Link href="/services/carpet-steam-cleaning">Carpet steam cleaning</Link> — full residential steam clean for owner-occupiers and longer-term tenants</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Getting to Brunswick</h2>
          <p>Brunswick sits approximately 5 km north of the CBD, accessible via Sydney Road, Lygon Street, and the Ring Road. Parking in Brunswick is competitive throughout the week — permit zones cover most residential streets and metered spaces fill early along Sydney Road. Residential side streets off Brunswick Street, Hope Street, and Glenlyon Road are the most practical options for our van. If your property has a driveway or rear-lane access, let us know — it makes positioning the equipment much faster and reduces hose run distances.</p>
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
              <strong>Ready to book in Brunswick?</strong>
              <p>Same-day and next-morning slots available. Book online or call us now.</p>
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
