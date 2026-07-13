import Link from 'next/link'
import BreadcrumbSchema from '../../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Tile and Grout Cleaning Melbourne',
  description: 'Professional tile and grout cleaning in Melbourne. Rotary scrubbing, hot extraction, and optional sealing restore kitchens, bathrooms, and outdoor areas. Book now.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tile and Grout Cleaning Melbourne',
  description: 'Rotary scrubbing and hot water extraction tile and grout restoration for kitchens, bathrooms, and outdoor areas across Melbourne.',
  provider: { '@type': 'HouseCleaningService', name: 'TidyRoo', url: 'https://tidyroo.com.au' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Melbourne, VIC, Australia' },
  url: 'https://tidyroo.com.au/services/tile-grout-cleaning',
}

const faqs = [
  {
    q: 'What surfaces do you clean?',
    a: 'We clean ceramic, porcelain, and stone tiles in kitchens, bathrooms, laundries, and outdoor areas. We assess each surface before selecting the appropriate cleaning chemistry to avoid damage.',
  },
  {
    q: 'How does grout sealing work and do I need it?',
    a: 'Grout is porous and absorbs oil, bacteria, and moisture over time. After cleaning, a penetrating sealant fills those pores to repel future staining. Sealing is recommended in kitchens, outdoor areas, and anywhere with heavy foot traffic.',
  },
  {
    q: 'Can you remove black mould from grout?',
    a: 'Yes. We apply a mould and mildew neutraliser as part of the cleaning process, which breaks down the mould at the root rather than just bleaching the surface. Persistent mould in very porous grout may require regrouting — we will advise if that is the case.',
  },
  {
    q: 'Will the clean damage my skirting boards or cabinetry?',
    a: 'We use edge guards and protective cloths to safeguard skirting boards, cabinetry, and adjacent surfaces during the rotary scrubbing and pressure rinse stages.',
  },
]

export default function TileGroutCleaningPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Tile & Grout Cleaning', href: '/services/tile-grout-cleaning' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Rotary scrub &amp; hot extraction</span>
          <h1>Tile and Grout Cleaning Melbourne</h1>
          <p className="lead">TidyRoo's tile and grout cleaning in Melbourne combines rotary agitation with hot water pressure rinsing to lift embedded grime, mould, and grease from ceramic, porcelain, and stone tiles in kitchens, bathrooms, and outdoor areas — restoring grout lines that vacuuming and mopping simply cannot reach.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>What's included</h2>
          <p>Every tile and grout job includes full surface preparation, treatment, and aftercare.</p>
          <ul className="service-area-list" style={{ marginTop: 20 }}>
            <li>Surface assessment and selection of appropriate cleaning chemistry</li>
            <li>Pre-treatment of heavy grime and mould with targeted agents</li>
            <li>Rotary scrubbing to agitate embedded soil in grout lines</li>
            <li>Hot water pressure rinse and extraction</li>
            <li>Mould and mildew neutralisation where present</li>
            <li>Edge guards to protect skirting boards and cabinetry</li>
            <li>Grout sealing (optional add-on)</li>
            <li>Anti-slip finish treatment (optional, particularly for outdoor areas)</li>
            <li>7-day satisfaction re-clean promise</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Areas we restore</h2>
          <div className="card-grid" style={{ marginTop: 24 }}>
            {[
              { title: 'Kitchen floors & splashbacks', desc: 'Cooking grease and food residue penetrate grout quickly. Rotary cleaning and a grease-cutting pre-treatment restore splashbacks and floor tiles.' },
              { title: 'Bathroom floors & walls', desc: 'Soap scum, mould, and hard water deposits are targeted with pH-appropriate chemistry to protect tile glaze and restore grout colour.' },
              { title: 'Outdoor entertaining areas', desc: 'Alfresco and pool tiles accumulate algae and environmental grime. Post-clean anti-slip treatment keeps outdoor tiles safe underfoot.' },
              { title: 'Laundries & wet rooms', desc: 'High-humidity areas develop mould in grout over time. Mould neutralisation and optional sealing protect these zones between cleans.' },
            ].map(({ title, desc }) => (
              <article className="card" key={title}><h3>{title}</h3><p>{desc}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Frequently asked questions</h2>
          <div className="faq" style={{ marginTop: 24 }}>
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
          <h2>Pricing</h2>
          <p>Tile and grout pricing is based on area size, tile type, and soiling level. Sealing is quoted separately. See the <Link href="/pricing">pricing guide</Link> or get an exact quote now.</p>
          <div style={{ marginTop: 20 }}>
            <Link className="btn btn-primary" href="/booking#quote-form">Get an instant quote</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p>Related services: <Link href="/services/carpet-steam-cleaning">carpet steam cleaning</Link> · <Link href="/services/dry-carpet-cleaning">dry carpet cleaning</Link> · <Link href="/services/stain-odour-removal">stain and odour removal</Link></p>
        </div>
      </section>
    </>
  )
}
