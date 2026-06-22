import Link from 'next/link'

export const metadata = {
  title: 'Blog | TidyRoo Carpet Cleaning Tips Melbourne',
  description: 'Practical guides on how often to clean your carpets, keeping pets and carpets together, and what to do about stains — from the TidyRoo team.',
}

const posts = [
  {
    href: '/blog/how-often',
    title: 'How often should you clean your carpets?',
    desc: 'The answer depends on foot traffic, pets, and allergies. Here is a simple schedule for homes, rentals, and offices.',
    tag: 'Maintenance',
  },
  {
    href: '/blog/pet-safe',
    title: 'A pet owner\'s guide to clean, fresh-smelling carpets',
    desc: 'Practical strategies to stay on top of fur, dander, and accidents without harsh chemicals.',
    tag: 'Pets',
  },
  {
    href: '/blog/stain-removal',
    title: 'First response stain removal guide',
    desc: 'The first 90 seconds after a spill are critical. Learn what to do (and what to avoid) for common household stains.',
    tag: 'Stains',
  },
]

export default function BlogPage() {
  return (
    <section className="section-white" style={{ padding: '72px 0 100px' }}>
      <div className="container">
        <span className="hero-kicker">Cleaning tips &amp; guides</span>
        <h1>The TidyRoo blog</h1>
        <p className="lead" style={{ marginBottom: 48 }}>Practical advice from our technicians to keep your carpets fresh between professional cleans.</p>
        <div className="card-grid">
          {posts.map(({ href, title, desc, tag }) => (
            <article className="card" key={href}>
              <span className="badge">{tag}</span>
              <h2 style={{ marginTop: 12, fontSize: '1.25rem' }}><Link href={href}>{title}</Link></h2>
              <p>{desc}</p>
              <Link className="btn btn-outline btn-sm" href={href} style={{ marginTop: 12 }}>Read article</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
