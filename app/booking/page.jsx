import Link from 'next/link'
import Image from 'next/image'
import BookingForm from '../../components/BookingForm'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Book Carpet Cleaning – Instant Online Quote',
  description: 'Book carpet cleaning in Melbourne in under two minutes. Choose your services, rooms, and preferred time slot. Same-day availability. Confirm your booking online.',
}

export default function BookingPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Book Online', href: '/booking' }]} />
      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container hero">
          <div className="hero-copy">
            <span className="hero-kicker">Instant booking</span>
            <h1>Tell us about your clean in under two minutes</h1>
            <p className="lead">Choose your services, extras, and preferred time. We confirm by phone or email within the hour.</p>
            <div className="hero-ctas">
              <Link className="btn btn-primary btn-lg" href="#quote-form">Start booking</Link>
              <Link className="btn btn-outline" href="mailto:info@tidyroo.au">Email photos instead</Link>
            </div>
            <p className="helper-text">Prefer to chat? <Link href="tel:+61493100989">Call 0493 100 989</Link> and we can book it for you.</p>
          </div>
          <div className="hero-media">
            <Image src="/images/booking.jpg" alt="Homeowner booking a carpet cleaning service online in Melbourne" fill style={{ objectFit: 'cover' }} priority sizes="(max-width: 768px) 100vw, 640px" />
          </div>
        </div>
      </section>

      <section className="section-green" id="quote-form" style={{ padding: '88px 0' }}>
        <div className="container">
          <div className="card" style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2>Booking form</h2>
            <p className="helper-text">Fields marked * are required. We never share your details.</p>
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="section-white" style={{ padding: '72px 0' }}>
        <div className="container card-grid">
          <article className="card">
            <h2>What to expect next</h2>
            <ol style={{ paddingLeft: 20, display: 'grid', gap: 12 }}>
              <li>We confirm your appointment time and share the name of your technician.</li>
              <li>You receive an email with preparation tips and a reminder the day prior.</li>
              <li>On arrival we walk through the space, confirm pricing, and get started.</li>
            </ol>
          </article>
          <article className="card">
            <h2>Need rapid response?</h2>
            <p>Flood, tenancy handover, or allergy flare-up? Call us and mention our priority list. We hold emergency slots daily.</p>
            <Link className="btn btn-outline" href="tel:+61493100989">Call 0493 100 989</Link>
          </article>
        </div>
      </section>
    </>
  )
}
