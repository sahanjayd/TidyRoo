import Link from 'next/link'
import BreadcrumbSchema from '../../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Upholstery Cleaning Melbourne',
  description: 'Professional upholstery cleaning in Melbourne. Fabric-tested, colour-safe treatment for lounges, dining chairs, ottomans, and office furniture. Book today.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Upholstery Cleaning Melbourne',
  description: 'Professional upholstery cleaning for sofas, lounges, dining chairs, ottomans, and office furniture across Melbourne.',
  provider: { '@type': 'HouseCleaningService', name: 'TidyRoo', url: 'https://tidyroo.com.au' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Melbourne, VIC, Australia' },
  url: 'https://tidyroo.com.au/services/upholstery-cleaning',
}

const faqs = [
  {
    q: 'What types of upholstery can you clean?',
    a: 'We clean most fabric upholstery including microfibre, polyester, cotton, and blended weaves. We conduct a fabric test and colour-fast check before starting every job to ensure the method is appropriate for your piece.',
  },
  {
    q: 'How long does upholstery take to dry?',
    a: 'Drying time depends on the fabric weight and ventilation. Most sofas and chairs are dry to the touch within 2–4 hours. We can position air movers to accelerate drying on request.',
  },
  {
    q: 'Can you remove pet odour from a sofa?',
    a: 'Yes. For surface odour, our water-based clean with deodoriser resolves most cases. For urine that has soaked into foam cushions, we use enzyme treatments and sub-surface flushing where the construction allows it.',
  },
  {
    q: 'Do you offer fabric protection after cleaning?',
    a: 'Yes. We offer a fabric protector application after cleaning that creates a barrier against future spills and soiling. Ask about this when booking.',
  },
]

export default function UpholsteryCleaningPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Upholstery Cleaning', href: '/services/upholstery-cleaning' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Fabric-safe detailing</span>
          <h1>Upholstery Cleaning Melbourne</h1>
          <p className="lead">TidyRoo's upholstery cleaning service in Melbourne starts with a fabric test and colour-fast check before any chemistry is applied. We clean lounges, sofas, dining chairs, ottomans, and office partitions using pH-balanced solutions and hand tools precision-matched to each piece.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>What's included</h2>
          <p>Every upholstery clean includes a full pre-service assessment and our standard inclusions at no extra cost.</p>
          <ul className="service-area-list" style={{ marginTop: 20 }}>
            <li>Fabric identification and colour-fast test before cleaning begins</li>
            <li>Pre-vacuuming to remove loose debris, crumbs, and pet hair</li>
            <li>Solvent or water-based cleaning solution selected for the fabric</li>
            <li>Foam application and hand tool agitation for precision cleaning</li>
            <li>Soft water rinse to remove detergent residue</li>
            <li>Fibre grooming for a uniform, fresh finish</li>
            <li>Deodorising treatment where required</li>
            <li>Fabric protection sealant (optional add-on)</li>
            <li>7-day satisfaction re-clean promise</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Furniture we clean</h2>
          <div className="card-grid" style={{ marginTop: 24 }}>
            {[
              { title: 'Sofas & lounges', desc: '2-, 3-, and 4-seat sofas including sectionals and L-shaped configurations. Arms, cushions, and base all cleaned.' },
              { title: 'Dining chairs', desc: 'Fabric dining chairs, including detailed work around legs and base frames. Ideal for pre-event refresh or post-meal stain removal.' },
              { title: 'Ottomans & footstools', desc: 'Fabric ottomans, pouffes, and bench seats with attention to piping and seams where soil accumulates.' },
              { title: 'Office & commercial', desc: 'Office partition panels, task chair fabric backs, and waiting room seating cleaned with commercial-grade solutions.' },
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
          <p>Upholstery pricing is based on the piece type, fabric, and soil level. See the <Link href="/pricing">pricing guide</Link> for an overview, or get an exact quote now.</p>
          <div style={{ marginTop: 20 }}>
            <Link className="btn btn-primary" href="/booking#quote-form">Get an instant quote</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p>Related services: <Link href="/services/carpet-steam-cleaning">carpet steam cleaning</Link> · <Link href="/services/rug-mattress-cleaning">rug and mattress cleaning</Link> · <Link href="/services/stain-odour-removal">stain and odour removal</Link></p>
        </div>
      </section>
    </>
  )
}
