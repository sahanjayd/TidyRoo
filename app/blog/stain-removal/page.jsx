import Link from 'next/link'

export const metadata = {
  title: 'First Response Stain Removal Guide | TidyRoo Blog',
  description: 'What to do in the first 90 seconds after a spill. TidyRoo\'s step-by-step guide to handling common carpet and upholstery stains.',
}

export default function StainRemovalPage() {
  return (
    <section className="section-white" style={{ padding: '72px 0 100px' }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <Link href="/blog" className="helper-text" style={{ display: 'inline-block', marginBottom: 24 }}>← Back to blog</Link>
        <span className="badge">Stains</span>
        <h1 style={{ marginTop: 12 }}>First response stain removal guide</h1>
        <p className="lead">The first 90 seconds after a spill are critical. Here is what to do — and what to never do.</p>

        <article className="card" style={{ marginTop: 40, background: 'var(--color-green-50)' }}>
          <h2 style={{ fontSize: '1.2rem' }}>First response checklist</h2>
          <ol style={{ paddingLeft: 20, display: 'grid', gap: 10, marginTop: 12 }}>
            <li><strong>Act immediately</strong> — do not wait until later.</li>
            <li><strong>Blot, never rub</strong> — rubbing spreads the stain and damages fibres.</li>
            <li><strong>Work from the outside in</strong> — this stops the stain from spreading.</li>
            <li><strong>Use cold water</strong> — hot water sets many stains permanently.</li>
            <li><strong>Blot dry</strong> — press with a clean cloth or paper towel to absorb as much liquid as possible.</li>
          </ol>
        </article>

        <h2 style={{ marginTop: 48 }}>Common stains and how to treat them</h2>

        <h3 style={{ marginTop: 32 }}>Red wine</h3>
        <p>Blot immediately. Pour cold water to dilute. Sprinkle table salt to absorb remaining liquid and leave for 3 minutes. Vacuum the salt. Apply a small amount of dish soap mixed with cold water and blot again. Rinse with cold water and blot dry.</p>

        <h3 style={{ marginTop: 24 }}>Coffee and tea</h3>
        <p>Blot up as much as possible. Mix one tablespoon of white vinegar with one tablespoon of dish soap in two cups of cold water. Apply, blot, then rinse and blot dry. Avoid rubbing at every step.</p>

        <h3 style={{ marginTop: 24 }}>Mud and dirt</h3>
        <p>Let it dry completely before attempting any treatment. Dried mud is much easier to remove than wet mud. Once dry, vacuum thoroughly. Use a stiff brush to break up any remaining crust, vacuum again, then treat any residual stain with a water-and-dish-soap mix.</p>

        <h3 style={{ marginTop: 24 }}>Pet urine</h3>
        <p>Blot up as much as possible immediately. Apply a 1:1 mixture of cold water and white vinegar. Blot again. Sprinkle bicarbonate of soda, leave 15 minutes, then vacuum. For older stains, or if odour persists, professional sub-surface extraction is required.</p>

        <h3 style={{ marginTop: 24 }}>Grease and oil</h3>
        <p>Scrape up any solid residue with a spoon. Apply a small amount of dry cleaning solvent or a baking soda paste (baking soda mixed with a few drops of dish soap). Leave 5 minutes, blot with a clean cloth, then rinse with cold water and blot dry.</p>

        <h2 style={{ marginTop: 48 }}>Things to never do</h2>
        <ul style={{ paddingLeft: 20, display: 'grid', gap: 10 }}>
          <li>Never scrub — scrubbing untwists carpet fibres and makes the stain permanent.</li>
          <li>Never pour boiling water on a stain — heat sets protein stains (blood, milk, egg).</li>
          <li>Never use coloured cloths — dye can transfer to the carpet.</li>
          <li>Never over-wet the carpet — too much water soaks into the backing and encourages mould.</li>
          <li>Never use bleach on coloured carpet — it strips the dye permanently.</li>
        </ul>

        <h2 style={{ marginTop: 48 }}>When to call a professional</h2>
        <p>DIY treatment is only effective in the first few hours. If the stain has dried and set, if it has penetrated into the backing or underlay, or if you have tried home treatment without success, a professional clean is the safest path. We have specialised equipment and chemistry for stubborn and set-in stains.</p>

        <div className="card" style={{ marginTop: 40, background: 'var(--color-green-50)' }}>
          <strong>Got a stain you cannot shift?</strong>
          <p>Send us a photo and we will advise the best treatment. <Link href="/contact">Get in touch</Link> or call <Link href="tel:+61493100989">0493 100 989</Link>.</p>
        </div>
      </div>
    </section>
  )
}
