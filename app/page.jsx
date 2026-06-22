import Link from 'next/link'
import Image from 'next/image'
import ReviewsSection from '../components/ReviewsSection'

export const metadata = {
  title: 'TidyRoo | Professional Carpet Steam Cleaning in Melbourne',
  description: 'TidyRoo delivers same-day carpet steam cleaning, upholstery care, and tile revival across Melbourne with eco-friendly detergents and transparent pricing.',
  openGraph: { title: 'TidyRoo | Fresh floors. Fast turnarounds.', description: 'Book eco-friendly carpet steam cleaning with same-day service windows across Melbourne. Satisfaction guaranteed.' },
}

const faqItems = [
  { q: 'How long does a carpet steam clean take?', a: 'A standard 3-bedroom home takes 2–3 hours including pre-inspection, treatment, extraction, and drying setup. We share an accurate time estimate when you confirm your booking.' },
  { q: 'When can I walk on the carpet after cleaning?', a: 'Carpets are usually ready to walk on within 2–4 hours when we use air movers. Full drying (including the backing) typically takes 4–8 hours depending on ventilation and pile depth.' },
  { q: 'Do you move furniture?', a: 'We move light furniture such as chairs, coffee tables, and small sofas. We do not move heavy items like beds, entertainment units, or pianos. Clearing those areas beforehand helps us do a more thorough job.' },
  { q: 'Are your products safe for children and pets?', a: 'Yes. We use biodegradable, low-VOC detergents that are safe for people and pets once the carpet is dry. We also offer an unscented deodoriser option for households with fragrance sensitivities.' },
  { q: 'Do you cover my suburb?', a: 'We service all of Greater Melbourne and surrounding areas. Call us on 0493 100 989 or submit a booking request to confirm availability in your suburb.' },
  { q: 'What is your satisfaction guarantee?', a: 'We offer a 7-day re-clean promise. If you are not satisfied with any area of the clean, contact us within 7 days with photos and we will return to re-clean it at no charge.' },
]

export default function HomePage() {
  return (
    <>
      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container hero">
          <div className="hero-copy">
            <span className="hero-kicker">Fresh floors. Fast turnarounds.</span>
            <h1>Professional Carpet Steam Cleaning in Melbourne</h1>
            <p className="lead">Eco-friendly detergents, same-day service windows, and transparent pricing backed by our 7-day satisfaction re-clean guarantee.</p>
            <div className="hero-ctas">
              <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book Now</Link>
              <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
            </div>
            <div className="hero-badges">
              <span className="badge">Last-minute slots available today</span>
              <span className="badge-neutral badge">Certified technicians</span>
              <span className="badge-neutral badge">Child &amp; pet safe</span>
              <span className="badge-neutral badge">Insured &amp; police-checked</span>
            </div>
          </div>
          <div className="hero-media">
            <Image src="/images/steam.jpg" alt="Professional carpet steam cleaning in action" fill style={{ objectFit: 'cover' }} priority />
          </div>
        </div>
      </section>

      <section className="section-surface" style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="trust-bar">
            {[
              { icon: '⭐', strong: '4.9 average rating',   p: '215 local Google reviews' },
              { icon: '🛡️', strong: 'Fully insured',        p: '$20M public liability cover' },
              { icon: '🌿', strong: 'Eco detergents',       p: 'Biodegradable and low residue' },
              { icon: '⚡', strong: 'Same-day slots',       p: 'Priority windows available' },
            ].map(({ icon, strong, p }) => (
              <div className="trust-pill" key={strong}>
                <span className="trust-pill-icon">{icon}</span>
                <div><strong>{strong}</strong><p>{p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '88px 0' }}>
        <div className="container">
          <h2>Whole-home cleaning solutions</h2>
          <p className="lead">Mix and match services in one visit so every surface feels fresh.</p>
          <div className="card-grid" style={{ marginTop: 40 }}>
            {[
              { title: 'Carpet steam cleaning', desc: 'Deep hot water extraction with high-powered drying to remove soil, allergens, and lingering odours.', items: ['Pre-inspection and fibre testing','Spot treatment and agitation','Turbo drying on request'] },
              { title: 'Upholstery revival',    desc: 'Gentle, fabric-specific cleaning for lounges, dining chairs, and ottomans to lift oils and refresh safely.', items: ['pH balanced solutions','Soft water rinse and grooming','Protective spray options'] },
              { title: 'Rugs & mattresses',     desc: 'On-site rug washing and mattress sanitising to remove dust mites, spills, and everyday build-up.', items: ['Delicate fibre care','Hypoallergenic treatments','Steam and dry combos'] },
              { title: 'Tile & grout reset',    desc: 'Rotary agitation and pressure rinse that restores grout lines in kitchens, bathrooms, and outdoor areas.', items: ['Sealing available','Slip-resistant finishes','Mould and mildew neutraliser'] },
            ].map(({ title, desc, items }) => (
              <article className="card service-card" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link className="btn btn-primary" href="/services">View all services</Link>
          </div>
        </div>
      </section>

      <section className="section-white" style={{ padding: '88px 0' }}>
        <div className="container">
          <h2>Loved by locals across Melbourne</h2>
          <p className="lead">The latest reviews left by homeowners, renters, and property managers.</p>
          <div style={{ marginTop: 36 }}>
            <ReviewsSection limit={3} />
          </div>
          <div style={{ marginTop: 32 }}>
            <Link className="btn btn-outline" href="/reviews">Read all reviews</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '88px 0' }}>
        <div className="container">
          <h2>Our five-step process</h2>
          <p className="lead">Every booking follows a proven workflow to ensure surfaces are spotless and drying times are minimised.</p>
          <div className="process-steps">
            {[
              { strong: 'Inspect',     p: 'Identify fibre type, soil load, stains, and access considerations.' },
              { strong: 'Pre-treat',   p: 'Apply targeted solutions, agitate high-traffic lanes, and protect surroundings.' },
              { strong: 'Steam clean', p: 'Commercial extraction machines for deep, even cleaning.' },
              { strong: 'Deodorise',   p: 'Neutralise odours with plant-based deodorisers that do not overpower.' },
              { strong: 'Dry',         p: 'Groom fibres, place air movers, and share tailored aftercare tips.' },
            ].map(({ strong, p }) => (
              <div className="process-step" key={strong}><strong>{strong}</strong><p>{p}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-white" style={{ padding: '88px 0' }}>
        <div className="container">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2>Frequently asked questions</h2>
            <div className="faq" style={{ marginTop: 32 }}>
              {faqItems.map(({ q, a }) => (
                <details className="accordion-item" key={q}>
                  <summary className="accordion-header">{q}</summary>
                  <div className="accordion-content"><p>{a}</p></div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container">
          <div className="cta-strip">
            <div>
              <strong>Ready for fresher floors?</strong>
              <p>Book online in under two minutes or call our friendly team to discuss your project.</p>
            </div>
            <div className="hero-ctas">
              <Link className="btn btn-accent btn-lg" href="/booking#quote-form">Book Now</Link>
              <Link className="btn btn-outline-white" href="/pricing">View pricing</Link>
            </div>
            <p className="helper-text">Prefer to chat? <Link href="tel:+61493100989">Call 0493 100 989</Link> or email <Link href="mailto:info@tidyroo.au">info@tidyroo.au</Link></p>
          </div>
        </div>
      </section>
    </>
  )
}
