import Link from 'next/link'
import Image from 'next/image'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Cleaning Prices Melbourne',
  description: "Transparent carpet cleaning prices for Melbourne homes. Know the investment before we arrive — steam cleaning, upholstery, and tile services all included. Get a quote.",
}

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Pricing', href: '/pricing' }]} />
      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container hero">
          <div className="hero-copy">
            <span className="hero-kicker">Transparent pricing</span>
            <h1>Packages built for every floor plan</h1>
            <p className="lead">Know the investment before we arrive. Prices include GST, equipment, detergents, and our 7-day re-clean promise.</p>
            <div className="hero-ctas">
              <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Get exact quote</Link>
              <Link className="btn btn-outline" href="tel:+61493100989">Call 0493 100 989</Link>
            </div>
          </div>
          <div className="hero-media">
            <Image src="/images/invoice.jpg" alt="Technician writing up a transparent quote for carpet cleaning" fill style={{ objectFit: 'cover' }} priority sizes="(max-width: 768px) 100vw, 640px" />
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '88px 0' }}>
        <div className="container card-grid">
          <article className="card">
            <h2>What impacts pricing?</h2>
            <ul className="service-area-list">
              <li>Carpet fibre type and pile height</li>
              <li>Soil level and stain complexity</li>
              <li>Accessibility (parking, lifts, water supply)</li>
              <li>Time of day (after-hours surcharges)</li>
              <li>Bundle size and frequency of clean</li>
            </ul>
          </article>
          <article className="card">
            <h2>Included every time</h2>
            <ul className="service-area-list">
              <li>Pre-inspection and written confirmation</li>
              <li>Eco detergents tailored to your fibres</li>
              <li>Protective corner guards and mats</li>
              <li>Final walkthrough and aftercare tips</li>
              <li>7-day satisfaction re-clean promise</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section-white" style={{ padding: '64px 0' }}>
        <div className="container">
          <div className="cta-strip">
            <div>
              <strong>Want an exact quote?</strong>
              <p>Tell us about your rooms and surfaces. We will confirm final pricing before we start.</p>
            </div>
            <div className="hero-ctas">
              <Link className="btn btn-accent btn-lg" href="/booking#quote-form">Start instant quote</Link>
              <Link className="btn btn-outline-white" href="mailto:info@tidyroo.au">Email photos</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
