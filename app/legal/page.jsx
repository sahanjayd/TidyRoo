import Link from 'next/link'

export const metadata = {
  title: 'Privacy, Terms & Refund Policy | TidyRoo',
  description: 'Read the TidyRoo privacy policy, terms and conditions, and refund and re-clean guarantee for carpet cleaning services in Melbourne.',
}

export default function LegalPage() {
  return (
    <section className="section-white" style={{ padding: '72px 0 100px' }}>
      <div className="container" style={{ maxWidth: 780 }}>
        <h1>Legal documents</h1>
        <p className="lead">Jump to: <Link href="#privacy">Privacy</Link> · <Link href="#terms">Terms</Link> · <Link href="#refund">Refund policy</Link></p>

        <article id="privacy" style={{ marginTop: 56 }}>
          <h2>Privacy policy</h2>
          <p className="helper-text">Effective date: 1 July 2024</p>
          <p>TidyRoo (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the personal information of our customers in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.</p>
          <h3>Information we collect</h3>
          <p>We collect name, email address, phone number, service address, and booking details. We may also collect device and browser data via analytics cookies when you visit our website.</p>
          <h3>How we use it</h3>
          <p>We use your information to confirm bookings, send service reminders, process payments, and occasionally send promotional emails if you have opted in. We do not sell or share your data with third parties except as required to deliver services (e.g. payment processors).</p>
          <h3>Storage and security</h3>
          <p>Data is stored on Australian servers. We use TLS encryption for all transmissions and limit staff access on a need-to-know basis.</p>
          <h3>Your rights</h3>
          <p>You may request access to, correction of, or deletion of your personal information at any time by contacting <Link href="mailto:info@tidyroo.au">info@tidyroo.au</Link>.</p>
          <h3>Cookies</h3>
          <p>We use essential cookies for site function and analytics cookies (Google Analytics) to measure traffic. You may opt out of analytics via your browser settings.</p>
        </article>

        <article id="terms" style={{ marginTop: 56 }}>
          <h2>Terms &amp; conditions</h2>
          <p className="helper-text">Effective date: 1 July 2024</p>
          <h3>Bookings and cancellations</h3>
          <p>Appointments cancelled or rescheduled with less than 24 hours notice may incur a $50 short-notice fee. Same-day cancellations are charged at 50% of the booked service cost.</p>
          <h3>Pricing and quotes</h3>
          <p>Quotes are estimates based on information provided. Final pricing is confirmed on arrival after inspection. We notify you of any variation before commencing work.</p>
          <h3>Liability</h3>
          <p>TidyRoo is fully insured with $20 million public liability cover. We are not responsible for pre-existing damage to carpet fibres, grout, or fabrics that is revealed during cleaning.</p>
          <h3>Access and preparation</h3>
          <p>You agree to provide reasonable access to water, power, and the areas to be cleaned. Clearing clutter and relocating fragile items is the customer&apos;s responsibility.</p>
          <h3>Governing law</h3>
          <p>These terms are governed by the laws of Victoria, Australia.</p>
        </article>

        <article id="refund" style={{ marginTop: 56 }}>
          <h2>Refund &amp; re-clean policy</h2>
          <p className="helper-text">Effective date: 1 July 2024</p>
          <h3>7-day satisfaction guarantee</h3>
          <p>If you are not satisfied with the result of any area we cleaned, contact us within 7 days with photos and we will return to re-clean that area at no additional cost.</p>
          <h3>Refunds</h3>
          <p>Refunds are considered if a re-clean cannot satisfactorily resolve the concern. Requests must be submitted in writing to <Link href="mailto:info@tidyroo.au">info@tidyroo.au</Link> within 14 days of service.</p>
          <h3>Exclusions</h3>
          <p>Our guarantee does not cover damage caused by pre-existing conditions, pet accidents that occurred after cleaning, or areas not accessible during the original visit.</p>
          <div style={{ marginTop: 24 }}>
            <Link className="btn btn-outline" href="/contact">Contact us about a claim</Link>
          </div>
        </article>
      </div>
    </section>
  )
}
