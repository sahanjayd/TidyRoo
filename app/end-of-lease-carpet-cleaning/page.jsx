import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'End of Lease Carpet Cleaning Melbourne',
  description: 'End of lease carpet cleaning in Melbourne. Real estate-ready receipt, 7-day re-clean promise for bond protection, and same-day availability. Book your move-out clean.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'End of Lease Carpet Cleaning Melbourne',
  description: 'Professional end of lease and bond back carpet cleaning for Melbourne renters and property managers, with a real estate-ready receipt and 7-day re-clean promise.',
  provider: { '@type': 'HouseCleaningService', name: 'TidyRoo', url: 'https://tidyroo.com.au' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Melbourne, VIC, Australia' },
  url: 'https://tidyroo.com.au/end-of-lease-carpet-cleaning',
}

const faqs = [
  {
    q: 'Do I get a receipt my property manager will accept?',
    a: 'Yes. Every job includes a dated, itemised invoice listing the services performed, the address, and the technician name. Most Melbourne real estate agencies accept this as proof of professional cleaning at tenancy handover.',
  },
  {
    q: 'How soon before my final inspection should I book?',
    a: 'We recommend booking 1–2 days before your final inspection to allow drying time and avoid re-soiling. If your timeline is tight, same-day and next-morning slots are available — call us on 0493 100 989 to check availability.',
  },
  {
    q: 'What if the agent is not satisfied after the clean?',
    a: 'Our 7-day re-clean promise applies to every job. If your property manager identifies a specific area of concern within 7 days of service, contact us with photos and we will return to re-clean that area at no extra charge. This is not a bond guarantee — it is a commitment to deliver a clean your agent is satisfied with.',
  },
  {
    q: 'Do you clean carpets and other surfaces in the same visit?',
    a: 'Yes. We can combine carpet steam cleaning with upholstery, tile and grout, or other services in a single visit to help you meet the full tenancy requirements in one booking.',
  },
  {
    q: 'What areas of the rental do you cover?',
    a: 'We clean all carpeted rooms, hallways, and stairs. We also offer tile and grout, upholstery, and rug cleaning as add-ons. Tell us the full scope when you book and we will confirm everything in writing.',
  },
]

export default function EndOfLeasePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'End of Lease Carpet Cleaning', href: '/end-of-lease-carpet-cleaning' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="hero-kicker">Move-out ready</span>
          <h1>End of Lease Carpet Cleaning Melbourne</h1>
          <p className="lead">Moving out in Melbourne? TidyRoo's end of lease carpet cleaning gives renters and property managers a professional, real estate-ready receipt, same-day availability for tight move-out timelines, and a 7-day re-clean promise if any area falls short of agent expectations.</p>
          <div className="hero-ctas" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book now</Link>
            <Link className="btn btn-outline btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
          </div>
          <div className="hero-badges" style={{ marginTop: 20 }}>
            <span className="badge">Real estate-ready receipt</span>
            <span className="badge-neutral badge">7-day re-clean promise</span>
            <span className="badge-neutral badge">Same-day availability</span>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>Why choose TidyRoo for your bond clean</h2>
          <div className="card-grid" style={{ marginTop: 24 }}>
            <article className="card">
              <h3>Real estate-ready receipt</h3>
              <p>Every job includes a dated, itemised invoice listing the address, services completed, and technician name. Most Melbourne agencies accept our invoice as proof of professional carpet cleaning at tenancy handover — the same document that satisfies property managers in Richmond, Brunswick, Epping, and across the metro area.</p>
            </article>
            <article className="card">
              <h3>7-day re-clean promise</h3>
              <p>If your property manager identifies a specific area of concern within 7 days of your clean, contact us with photos and we will return to re-clean that area at no extra charge. We stand behind the quality of our work — so you are not left scrambling if the agent raises a point at the inspection.</p>
            </article>
            <article className="card">
              <h3>Same-day availability</h3>
              <p>Move-out timelines can be tight. We hold priority slots for end-of-lease bookings and offer same-day and next-morning availability across Melbourne. Call 0493 100 989 to check live slots, or book online and we will confirm within the hour.</p>
            </article>
            <article className="card">
              <h3>Full-service in one visit</h3>
              <p>Combine carpet steam cleaning with tile and grout, upholstery, or rug cleaning in a single visit. One technician, one invoice, one less thing to organise during a stressful move.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-white" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>What's included in every end of lease clean</h2>
          <ul className="service-area-list" style={{ marginTop: 20 }}>
            <li>Pre-inspection of all carpeted rooms and identification of problem areas</li>
            <li>Pre-vacuum (HEPA) to remove loose soil before wet treatment begins</li>
            <li>Targeted spot and stain treatment using fibre-safe chemistry</li>
            <li>Hot water extraction at 95°C through all carpeted areas</li>
            <li>Deodorising treatment to neutralise pet, smoke, or cooking odours</li>
            <li>Air mover placement to minimise drying time before the inspection</li>
            <li>Dated, itemised invoice issued on the day</li>
            <li>7-day re-clean promise if any area falls short</li>
          </ul>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>For property managers</h2>
          <p>TidyRoo works regularly with Melbourne real estate agencies and property managers. We understand what a handover-ready carpet looks like and can work directly with outgoing tenants on your behalf. For agency accounts and priority scheduling, call us directly on <Link href="tel:+61493100989">0493 100 989</Link> or email <Link href="mailto:info@tidyroo.au">info@tidyroo.au</Link>.</p>
        </div>
      </section>

      <section className="section-white" style={{ padding: '72px 0' }}>
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

      <section className="section-green" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="cta-strip">
            <div>
              <strong>Ready to book your move-out clean?</strong>
              <p>Get an instant quote online or call our team now to check same-day availability.</p>
            </div>
            <div className="hero-ctas">
              <Link className="btn btn-accent btn-lg" href="/booking#quote-form">Book now</Link>
              <Link className="btn btn-outline-white" href="tel:+61493100989">Call 0493 100 989</Link>
            </div>
          </div>
          <p style={{ marginTop: 24 }}>See also: <Link href="/services/carpet-steam-cleaning">carpet steam cleaning</Link> · <Link href="/services/tile-grout-cleaning">tile and grout cleaning</Link> · <Link href="/pricing">pricing guide</Link></p>
        </div>
      </section>
    </>
  )
}
