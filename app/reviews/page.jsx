import Link from 'next/link'
import Image from 'next/image'
import ReviewsSection from '../../components/ReviewsSection'
import ApiForm from '../../components/ApiForm'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Customer Reviews – 4.9 Stars Melbourne',
  description: 'Read over 215 five-star reviews for TidyRoo carpet cleaning in Melbourne. Homeowners, renters, and property managers rate us 4.9 on Google. Book your clean today.',
}

export default function ReviewsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Reviews', href: '/reviews' }]} />
      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container hero">
          <div className="hero-copy">
            <span className="hero-kicker">Kind words from clients</span>
            <h1>Over 200 five-star reviews and counting</h1>
            <p className="lead">Hear from tenants, property managers, Airbnb hosts, and families who trust TidyRoo to keep their spaces fresh.</p>
            <div className="hero-ctas">
              <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book your clean</Link>
              <Link className="btn btn-outline" href="#reviewForm">Write a review</Link>
            </div>
          </div>
          <div className="hero-media">
            <Image src="/images/reviews-hero.jpg" alt="Happy customer in Melbourne home after professional carpet steam cleaning" fill style={{ objectFit: 'cover' }} priority sizes="(max-width: 768px) 100vw, 640px" />
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '88px 0' }}>
        <div className="container">
          <ReviewsSection />
          <div style={{ marginTop: 32 }}>
            <Link className="btn btn-outline" href="https://g.page/" target="_blank" rel="noopener">Leave a Google review</Link>
          </div>
        </div>
      </section>

      <section className="section-white" id="reviewForm" style={{ padding: '88px 0' }}>
        <div className="container">
          <div className="card" style={{ maxWidth: 680, margin: '0 auto' }}>
            <h2>Write a review</h2>
            <p className="helper-text">Share your experience. Reviews are published after approval.</p>
            <ApiForm
              action="/api/reviews"
              successMessage="Thanks! Your review is submitted for approval."
              className="form-grid"
              style={{ marginTop: 20 }}
            >
              <label htmlFor="reviewName">Your name *<input id="reviewName" name="name" type="text" placeholder="e.g. Sam P." required /></label>
              <label htmlFor="reviewSuburb">Suburb (optional)<input id="reviewSuburb" name="suburb" type="text" placeholder="e.g. Richmond" /></label>
              <label className="full" htmlFor="reviewRating">Rating *
                <select id="reviewRating" name="rating" required>
                  <option value="5">5 — Excellent</option>
                  <option value="4">4 — Great</option>
                  <option value="3">3 — Good</option>
                  <option value="2">2 — Okay</option>
                  <option value="1">1 — Poor</option>
                </select>
              </label>
              <label className="full" htmlFor="reviewText">Your review *<textarea id="reviewText" name="review" rows="5" placeholder="Tell us about the service, results, and technician" required /></label>
              <div className="full"><button className="btn btn-primary" type="submit">Post review</button></div>
            </ApiForm>
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container card-grid">
          <article className="card">
            <h2>Why locals choose TidyRoo</h2>
            <ul className="service-area-list">
              <li>Same technician for recurring bookings</li>
              <li>Eco products with neutral scents</li>
              <li>SMS reminders and live arrival tracking</li>
              <li>Clear aftercare advice and check-ins</li>
            </ul>
          </article>
          <article className="card">
            <h2>Share your experience</h2>
            <p>Email feedback to <Link href="mailto:info@tidyroo.au">info@tidyroo.au</Link> or message us on social to feature in the gallery.</p>
            <Link className="btn btn-outline" href="mailto:info@tidyroo.au">Email feedback</Link>
          </article>
        </div>
      </section>
    </>
  )
}
