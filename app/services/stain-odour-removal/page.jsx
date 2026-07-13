import Link from 'next/link'
import BreadcrumbSchema from '../../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Carpet Stain & Pet Odour Removal Melbourne',
  description: 'Expert pet stain removal and carpet odour treatment in Melbourne. Enzyme, oxidising, and solvent treatments. UV detection. 7-day re-clean guarantee. Book now.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Carpet Stain and Odour Removal Melbourne',
  description: 'Targeted enzyme, oxidising, and solvent-based stain and odour treatments for Melbourne carpets, including pet accidents, wine, coffee, rust, and more.',
  provider: { '@type': 'HouseCleaningService', name: 'TidyRoo', url: 'https://tidyroo.com.au' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Melbourne, VIC, Australia' },
  url: 'https://tidyroo.com.au/services/stain-odour-removal',
}

const faqs = [
  {
    q: 'Can you remove old or dried-in carpet stains?',
    a: 'Often yes — but success depends on the stain type, how long it has been set, and whether previous DIY attempts have altered the chemistry of the stain. We assess each stain and advise honestly on likely outcomes before starting.',
  },
  {
    q: 'How do you eliminate pet urine odour from carpet?',
    a: 'Surface cleaning alone does not resolve deep pet urine odour because crystallised urine salts sit in the backing and underlay. We use UV detection to find all affected zones, then inject an enzyme solution through the carpet to break down the urine compounds below the surface.',
  },
  {
    q: 'What is the 7-day re-clean guarantee?',
    a: 'If you are not satisfied with any area of the clean within 7 days of service, contact us with photos and we will return to re-clean that area at no charge. The guarantee covers the original treatment area.',
  },
  {
    q: 'Which stains cannot be removed?',
    a: 'Some stains permanently alter carpet dye — bleach spills, certain rust compounds, and very old set-in urine can leave residual discolouration even after professional treatment. We will advise during the inspection if a full removal is unlikely.',
  },
]

const stainTypes = [
  { type: 'Pet urine & faeces', method: 'Enzyme solution, UV detection, sub-surface extraction' },
  { type: 'Red wine & fruit juice', method: 'Oxidising treatment, cold water extraction' },
  { type: 'Coffee & tea', method: 'Tannin-specific chemistry, hot water extraction' },
  { type: 'Grease & cooking oil', method: 'Solvent-based pre-treatment, agitation, extraction' },
  { type: 'Rust & metal stains', method: 'Acid-based rust remover (fibre-safe formulation)' },
  { type: 'Ink & dye transfer', method: 'Solvent-based spotting agent, blot and rinse extraction' },
  { type: 'Mud & soil', method: 'Dry-vacuum when dry, then detergent and hot water extraction' },
  { type: 'Smoke & general odour', method: 'Deodorising treatment with plant-based neutraliser' },
]

export default function StainOdourRemovalPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Stain & Odour Removal', href: '/services/stain-odour-removal' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Enzyme, oxidising &amp; solvent treatments</span>
          <h1>Carpet Stain &amp; Pet Odour Removal Melbourne</h1>
          <p className="lead">TidyRoo's pet stain removal and carpet odour treatment service in Melbourne uses targeted chemistry — enzyme solutions for biological stains, oxidising agents for tannin-based stains, and solvent spotters for grease — matched to the stain type rather than a one-size product. UV detection ensures every hidden spot is found and treated.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>What's included</h2>
          <ul className="service-area-list" style={{ marginTop: 20 }}>
            <li>Black light (UV) inspection to locate all biological staining, including hidden pet spots</li>
            <li>Stain type identification and chemistry selection</li>
            <li>Pre-treatment with enzyme, oxidising, or solvent-based agent as appropriate</li>
            <li>Dwell time and agitation to maximise stain release</li>
            <li>Sub-surface extraction for urine penetration into backing and underlay</li>
            <li>Hot water extraction to remove dissolved stain material and chemistry residue</li>
            <li>Plant-based deodorising treatment to neutralise odours at source</li>
            <li>Post-treatment inspection and walkthrough</li>
            <li>7-day satisfaction re-clean promise</li>
          </ul>
        </div>
      </section>

      <section className="section-white" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Stain types and our approach</h2>
          <div className="table-wrap" style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginTop: 20 }}>
            <table className="table">
              <thead><tr><th>Stain type</th><th>Treatment method</th></tr></thead>
              <tbody>
                {stainTypes.map(({ type, method }) => (
                  <tr key={type}><td>{type}</td><td>{method}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="helper-text" style={{ marginTop: 12 }}>Treatment methods are assessed per stain during the pre-inspection. Results depend on stain type, age, and carpet fibre.</p>
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
          <p>Stain treatment pricing depends on stain type, number of spots, and area affected. See the <Link href="/pricing">pricing guide</Link> for an overview, or get an exact quote now.</p>
          <div style={{ marginTop: 20 }}>
            <Link className="btn btn-primary" href="/booking#quote-form">Get an instant quote</Link>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p>Related services: <Link href="/services/carpet-steam-cleaning">carpet steam cleaning</Link> · <Link href="/services/rug-mattress-cleaning">mattress cleaning</Link> · <Link href="/services/upholstery-cleaning">upholstery cleaning</Link></p>
        </div>
      </section>
    </>
  )
}
