import Link from 'next/link'

export const metadata = {
  title: 'How Often Should You Clean Your Carpets? | TidyRoo Blog',
  description: 'A practical guide to carpet cleaning frequency for Melbourne homes, rentals, pet households, and offices — from the TidyRoo team.',
}

export default function HowOftenPage() {
  return (
    <section className="section-white" style={{ padding: '72px 0 100px' }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <Link href="/blog" className="helper-text" style={{ display: 'inline-block', marginBottom: 24 }}>← Back to blog</Link>
        <span className="badge">Maintenance</span>
        <h1 style={{ marginTop: 12 }}>How often should you clean your carpets?</h1>
        <p className="lead">The answer depends on your household — but here is a schedule that works for most Melbourne homes.</p>

        <h2 style={{ marginTop: 48 }}>The quick answer</h2>
        <div className="table-wrap" style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginTop: 16 }}>
          <table className="table">
            <thead><tr><th>Household type</th><th>Recommended interval</th></tr></thead>
            <tbody>
              <tr><td>Single occupant, no pets</td><td>Every 12–18 months</td></tr>
              <tr><td>Couple, no pets</td><td>Every 12 months</td></tr>
              <tr><td>Family (kids) or pets</td><td>Every 6–12 months</td></tr>
              <tr><td>Allergy sufferers or asthma</td><td>Every 3–6 months</td></tr>
              <tr><td>Commercial or high-traffic</td><td>Every 3–6 months</td></tr>
              <tr><td>Rental (end of lease)</td><td>Before every handover</td></tr>
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: 48 }}>Why does it matter?</h2>
        <p>Carpets trap dust mites, pet dander, pollen, and bacteria deep in the pile. Regular vacuuming removes surface debris, but it does not reach embedded particles. Over time these build up and can trigger allergies and degrade the fibre itself, shortening carpet life.</p>

        <h2 style={{ marginTop: 40 }}>Signs you are overdue</h2>
        <ul style={{ paddingLeft: 20, display: 'grid', gap: 10 }}>
          <li>Carpet looks dull even after vacuuming</li>
          <li>Musty or stale odour lingers after airing the room</li>
          <li>Family members experience unexplained allergy symptoms indoors</li>
          <li>Visible traffic lanes (darker paths) on light carpets</li>
          <li>Stains that have dried and set</li>
        </ul>

        <h2 style={{ marginTop: 40 }}>Between professional cleans</h2>
        <p>Vacuum at least twice a week on high-traffic areas. Use a HEPA-filter vacuum where possible. Address spills immediately — blot, do not rub, and neutralise with a small amount of cold water before the stain sets.</p>

        <h2 style={{ marginTop: 40 }}>Rental and property management</h2>
        <p>Most real estate agencies in Melbourne expect clean carpets at every tenancy change. A professional steam clean receipt is often required as evidence. TidyRoo provides a dated invoice that satisfies most agency requirements.</p>

        <div className="card" style={{ marginTop: 48, background: 'var(--color-green-50)' }}>
          <strong>Not sure when your last clean was?</strong>
          <p>If it has been more than 12 months, it is time. <Link href="/booking#quote-form">Book a quick assessment</Link> and our technician will advise the best treatment on arrival.</p>
        </div>
      </div>
    </section>
  )
}
