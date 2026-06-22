import Link from 'next/link'
import Image from 'next/image'
import ApiForm from '../../components/ApiForm'

export const metadata = {
  title: 'Contact TidyRoo | Quote, Call, or Callback',
  description: 'Contact TidyRoo for carpet steam cleaning in Melbourne. Call, email, request a callback, or view our service radius and business hours.',
}

export default function ContactPage() {
  return (
    <>
      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container hero">
          <div className="hero-copy">
            <span className="hero-kicker">Get in touch</span>
            <h1>Book online, call direct, or request a callback</h1>
            <p className="lead">The TidyRoo team is available Monday to Saturday from 8am to 6pm. Emergency support available after-hours for floods.</p>
            <div className="hero-ctas">
              <Link className="btn btn-primary btn-lg" href="tel:+61493100989">Call 0493 100 989</Link>
              <Link className="btn btn-outline" href="mailto:info@tidyroo.au">Email us</Link>
            </div>
          </div>
          <div className="hero-media">
            <Image src="/images/online.jpg" alt="TidyRoo support team taking customer calls" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container card-grid">
          <article className="card">
            <h2>Contact details</h2>
            <ul className="service-area-list">
              <li>Phone: <Link href="tel:+61493100989">0493 100 989</Link></li>
              <li>Email: <Link href="mailto:info@tidyroo.au">info@tidyroo.au</Link></li>
              <li>ABN: 63 684 849 929</li>
              <li>Service area: Greater Melbourne &amp; surrounds</li>
              <li>Hours: Mon–Sun 7am–6pm</li>
            </ul>
            <p className="helper-text" style={{ marginTop: 14 }}>Need us urgently? Call and press 1 for emergency support.</p>
          </article>
        </div>
      </section>

      <section className="section-white" id="callback" style={{ padding: '88px 0' }}>
        <div className="container">
          <div className="card" style={{ maxWidth: 680, margin: '0 auto' }}>
            <h2>Request a callback</h2>
            <p className="helper-text">We will ring you back within one business hour (faster during open hours).</p>
            <ApiForm action="/api/contact" successMessage="Thanks! We will give you a buzz shortly." style={{ marginTop: 24 }}>
              <label>Name *<input name="name" type="text" required /></label>
              <label>Phone *<input name="phone" type="tel" required /></label>
              <label>Email<input name="email" type="email" /></label>
              <label>Preferred contact time
                <select name="preferred_time">
                  <option value="asap">As soon as possible</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </label>
              <label className="full">How can we help? *<textarea name="notes" rows="4" required placeholder="Tell us about your space, stains, pets, or timing" /></label>
              <div className="full" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                <button className="btn btn-primary" type="submit">Request callback</button>
                <Link className="btn btn-outline" href="tel:+61493100989">Call now</Link>
              </div>
            </ApiForm>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container card-grid">
          <article className="card">
            <h2>Stay connected</h2>
            <ul className="service-area-list">
              <li><Link href="https://www.facebook.com/tidyroo">Facebook</Link></li>
              <li><Link href="https://www.instagram.com/tidyroo">Instagram</Link></li>
              <li><Link href="https://www.linkedin.com/company/tidyroo">LinkedIn</Link></li>
            </ul>
          </article>
          <article className="card">
            <h2>Documents</h2>
            <ul className="service-area-list">
              <li><Link href="/legal#privacy">Privacy policy</Link></li>
              <li><Link href="/legal#terms">Terms &amp; conditions</Link></li>
              <li><Link href="/legal#refund">Refund &amp; re-clean policy</Link></li>
            </ul>
          </article>
        </div>
      </section>
    </>
  )
}
