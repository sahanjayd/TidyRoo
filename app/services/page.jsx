import Link from 'next/link'
import HeroSlideshow from '../../components/HeroSlideshow'

export const metadata = {
  title: 'Services | TidyRoo Carpet & Upholstery Cleaning Melbourne',
  description: "TidyRoo's full range of carpet steam cleaning, upholstery care, rug revival, mattress sanitising, and tile and grout restoration services across Melbourne.",
}

const services = [
  {
    title: 'Carpet steam cleaning',
    desc: 'Our truckmount and portable units heat water to 95°C, injecting and extracting in one pass for a deep clean and low residue finish.',
    items: ['Pre-vacuum (HEPA) and soil analysis', 'Spot and stain spotting with fibre-safe solutions', 'High velocity extraction and grooming'],
  },
  {
    title: 'Dry carpet cleaning',
    desc: 'Encapsulation cleaning for commercial spaces or areas needing immediate use. Leaves carpets dry within one hour.',
    items: ['Low moisture polymers break down soil', 'Counter-rotating brush agitation', 'Vacuum extraction and deodorising'],
  },
  {
    title: 'Upholstery detailing',
    desc: 'Fabric testing and colour-fast checks precede each clean. Ideal for lounges, dining chairs, ottomans, and office partitions.',
    items: ['Solvent or water based options', 'Foam and hand tools for precision', 'Fabric protection sealants available'],
  },
  {
    title: 'Mattress & rug sanitising',
    desc: 'Anti-microbial treatments to remove dust mites, sweat, and spills. Includes UV inspection and deodorising.',
    items: ['Mattress cleaning and deep sanitising', 'Rug washing with delicate fibre care', 'Pickup and delivery available on request'],
  },
  {
    title: 'Tile & grout restoration',
    desc: 'Rotary scrubbing paired with pressure rinsing and hot extraction to lift embedded grime from ceramic, porcelain, and stone tiles.',
    items: ['Sealing and anti-slip treatments', 'Safeguards for skirting and cabinetry', 'Mould and mildew neutralisation'],
  },
  {
    title: 'Stain & odour remediation',
    desc: 'Targeted enzyme, oxidising, and solvent-based treatments for pet accidents, wine, coffee, rust, and more stubborn spills.',
    items: ['Black light detection for hidden spots', 'Sub-surface extraction for severe pet issues', 'Re-clean guarantee within 7 days'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container hero">
          <div className="hero-copy">
            <span className="hero-kicker">Service menu</span>
            <h1>What we clean for homes and workplaces</h1>
            <p className="lead">From plush carpets to high-traffic tiles, TidyRoo technicians tailor the method, chemistry, and equipment to each surface for the best result.</p>
            <div className="hero-ctas">
              <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Get instant quote</Link>
              <Link className="btn btn-outline" href="/contact">Contact us</Link>
            </div>
          </div>
          <HeroSlideshow />
        </div>
      </section>

      <section className="section-green" style={{ padding: '88px 0' }}>
        <div className="container">
          <h2>Detailed inclusions by service</h2>
          <div className="card-grid" style={{ marginTop: 36 }}>
            {services.map(({ title, desc, items }) => (
              <article className="card service-card" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-white" style={{ padding: '88px 0' }}>
        <div className="container">
          <h2>Steam vs dry cleaning comparison</h2>
          <div className="table-wrap" style={{ marginTop: 28, border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <table className="table">
              <thead><tr><th>Feature</th><th>Steam cleaning</th><th>Dry cleaning</th></tr></thead>
              <tbody>
                <tr><td>Dry time</td><td>3–6 hours (with turbo dryers)</td><td>30–90 minutes</td></tr>
                <tr><td>Soil removal</td><td>Deep extraction removes heavy soil and allergens</td><td>Great for maintenance cleans and light soil</td></tr>
                <tr><td>Chemistry</td><td>Eco detergents, hot water rinse, minimal residue</td><td>Encapsulation polymers vacuumed on next pass</td></tr>
                <tr><td>Ideal for</td><td>Residential carpets, move-outs, stain removal</td><td>Commercial spaces, high-rise apartments, low pile</td></tr>
                <tr><td>Extras</td><td>Stain guard, deodorising, pet odour flush</td><td>Rapid deodorising, anti-static spray</td></tr>
              </tbody>
            </table>
          </div>
          <p className="helper-text" style={{ marginTop: 16 }}>Not sure which is right? We advise during the pre-inspection and can combine methods where needed.</p>
        </div>
      </section>

      <section className="section-green" style={{ padding: '88px 0' }}>
        <div className="container card-grid">
          <article className="card">
            <h2>Sustainability credentials</h2>
            <ul className="service-area-list">
              <li>Certified by the IICRC (Institute of Inspection Cleaning and Restoration)</li>
              <li>Biodegradable detergents with low VOC ratings</li>
              <li>Water-efficient machines and grey water disposal compliant with council guidelines</li>
              <li>Reusable pads, filtered wastewater, and paperless invoicing</li>
              <li>Carbon-offset fleet for metropolitan jobs</li>
            </ul>
          </article>
          <article className="card">
            <h2>Popular add-ons</h2>
            <ul className="service-area-list">
              <li>Stain guard application</li>
              <li>Anti-microbial misting</li>
              <li>Flood extraction and structural drying</li>
              <li>On-site rug pickup and delivery</li>
              <li>Pet odour subsurface treatment</li>
            </ul>
            <p className="helper-text" style={{ marginTop: 12 }}>Add-ons can be added during booking or confirmed on-site after inspection.</p>
          </article>
        </div>
      </section>

      <section className="section-white" style={{ padding: '64px 0' }}>
        <div className="container">
          <div className="cta-strip">
            <div>
              <strong>Need a same-day clean?</strong>
              <p>Check live availability online or call the team now. Emergency slots reserved for floods and move-outs.</p>
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
