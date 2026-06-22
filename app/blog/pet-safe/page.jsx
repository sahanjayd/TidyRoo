import Link from 'next/link'

export const metadata = {
  title: "A Pet Owner's Guide to Clean Carpets | TidyRoo Blog",
  description: 'Keep your carpets fresh and odour-free when you have pets. Practical tips from TidyRoo on managing fur, dander, and accidents in Melbourne homes.',
}

export default function PetSafePage() {
  return (
    <section className="section-white" style={{ padding: '72px 0 100px' }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <Link href="/blog" className="helper-text" style={{ display: 'inline-block', marginBottom: 24 }}>← Back to blog</Link>
        <span className="badge">Pets</span>
        <h1 style={{ marginTop: 12 }}>A pet owner&apos;s guide to clean, fresh-smelling carpets</h1>
        <p className="lead">Pets and carpets can coexist. The key is building good habits and knowing when to call in the professionals.</p>

        <h2 style={{ marginTop: 48 }}>Why pets are tough on carpets</h2>
        <p>Dogs and cats carry oils on their coats that transfer to carpet fibres. They shed dander (microscopic skin flakes) that accumulates in the pile and triggers allergies. Urine accidents are the hardest problem because the liquid penetrates the backing and underlay, where it crystallises and releases odour over time.</p>

        <h2 style={{ marginTop: 40 }}>Daily checklist for pet households</h2>
        <ul style={{ paddingLeft: 20, display: 'grid', gap: 10 }}>
          <li>Vacuum high-traffic and pet sleeping areas daily if possible, at least 3 times per week</li>
          <li>Use a rubber-bladed pet brush attachment for embedded fur</li>
          <li>Keep a spray bottle of cold water and white vinegar (1:1) for quick-blot accidents</li>
          <li>Trim pet nails monthly to reduce pile damage and snagging</li>
          <li>Wipe muddy paws at the door before pets walk on carpet</li>
        </ul>

        <h2 style={{ marginTop: 40 }}>Handling accidents correctly</h2>
        <p>Act within 60 seconds if possible. Blot up liquid with an absorbent cloth — never rub, which pushes the stain deeper. Apply the water-vinegar solution, blot again, then sprinkle bicarbonate of soda, leave for 15 minutes, and vacuum. This handles surface odour but does not reach the underlay.</p>

        <h2 style={{ marginTop: 40 }}>When professional treatment is needed</h2>
        <p>If the accident was not caught within a few hours, or if there is a recurring odour you cannot locate, professional sub-surface extraction is the only effective remedy. We use black light (UV lamp) to detect all urine spots, then inject and extract an enzyme solution through the carpet and into the underlay to break down the crystallised urine.</p>

        <h2 style={{ marginTop: 40 }}>Safe products for pets</h2>
        <p>All TidyRoo detergents are biodegradable and low-VOC. Once the carpet is dry (typically 3–4 hours), it is safe for pets and children. We also offer an unscented deodoriser for households with chemically sensitive animals.</p>

        <article className="card" style={{ marginTop: 48, background: 'var(--color-green-50)' }}>
          <h3>Pet household checklist for your next clean</h3>
          <ul style={{ paddingLeft: 20, display: 'grid', gap: 8, marginTop: 12 }}>
            <li>Note any regular accident spots so we can treat those areas first</li>
            <li>Secure pets in another room or outside during the clean</li>
            <li>Keep pets off carpet until fully dry</li>
            <li>Run ventilation (open windows or fans) for faster drying</li>
            <li>Vacuum again 48 hours after the clean to pick up any loosened particles</li>
          </ul>
        </article>

        <p style={{ marginTop: 32 }}>
          <Link className="btn btn-primary" href="/booking#quote-form">Book a pet-household clean</Link>
        </p>
      </div>
    </section>
  )
}
