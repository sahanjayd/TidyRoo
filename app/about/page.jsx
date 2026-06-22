import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'About TidyRoo | Our Story & Team',
  description: 'Meet the TidyRoo team delivering eco-friendly carpet steam cleaning in Melbourne. Learn about our certifications, sustainability efforts, and satisfaction guarantee.',
}

export default function AboutPage() {
  return (
    <>
      <section className="section-white" style={{ padding: '72px 0 80px' }}>
        <div className="container hero">
          <div className="hero-copy">
            <span className="hero-kicker">Meet the crew</span>
            <h1>We are locals who care about healthy homes</h1>
            <p className="lead">TidyRoo combines industry certifications with a practical, friendly approach to cleaning. Family-run, community-focused, and fully insured.</p>
            <div className="hero-ctas">
              <Link className="btn btn-primary btn-lg" href="/booking#quote-form">Book a clean</Link>
              <Link className="btn btn-outline" href="/contact#callback">Request a callback</Link>
            </div>
          </div>
          <div className="hero-media">
            <Image src="/images/about.jpg" alt="TidyRoo team member at work" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container">
          <div className="card" style={{ maxWidth: 640 }}>
            <h2>Credentials</h2>
            <ul className="service-area-list">
              <li>Fully insured with $20M public liability</li>
              <li>Working with Children clearance for school and childcare work</li>
              <li>Preferred partner for several local real estate agencies</li>
              <li>IICRC certified technicians</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-white" style={{ padding: '88px 0' }}>
        <div className="container">
          <h2>People-first values</h2>
          <p className="lead">These four principles guide every decision we make, from the products we stock to the way we communicate.</p>
          <div className="card-grid" style={{ marginTop: 36 }}>
            {[
              { title: 'Transparent',      desc: 'No hidden surcharges. We confirm pricing before we plug in a hose and keep you in the loop if scope changes.' },
              { title: 'Eco conscious',    desc: 'We choose biodegradable detergents, recycle wastewater where possible, and run a hybrid vehicle fleet.' },
              { title: 'Quality obsessed', desc: 'Regular training, peer reviews, and investment in top-tier equipment help us deliver consistent results.' },
              { title: 'Community minded', desc: 'We sponsor local junior sport teams and offer discounted cleans for community housing projects twice a year.' },
            ].map(({ title, desc }) => (
              <article className="card" key={title}><h3>{title}</h3><p>{desc}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-green" style={{ padding: '64px 0' }}>
        <div className="container">
          <div className="cta-strip">
            <div>
              <strong>Work with TidyRoo</strong>
              <p>We are always looking for motivated technicians and admin legends who want to grow with us.</p>
            </div>
            <div className="hero-ctas">
              <Link className="btn btn-accent btn-lg" href="/booking#quote-form">Book a service</Link>
              <Link className="btn btn-outline-white" href="/contact">Get in touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
