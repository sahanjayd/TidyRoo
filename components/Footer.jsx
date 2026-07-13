import Link from 'next/link'
import Image from 'next/image'
import NewsletterForm from './NewsletterForm'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" href="/">
            <Image className="brand-icon" src="/images/logo.jpg" alt="TidyRoo" width={38} height={38} />
            <span className="brand-text">TidyRoo</span>
          </Link>
          <p>Fresh floors and furnishings for homes, rentals, and workplaces across Melbourne.</p>
          <ul className="footer-meta">
            <li>ABN: 63 684 849 929</li>
            <li>Phone: <Link href="tel:+61493100989">0493 100 989</Link></li>
            <li>Email: <Link href="mailto:info@tidyroo.au">info@tidyroo.au</Link></li>
            <li>Hours: Mon–Sun 7am–6pm</li>
          </ul>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul className="footer-links">
            <li><Link href="/services">Service menu</Link></li>
            <li><Link href="/end-of-lease-carpet-cleaning">End of lease cleaning</Link></li>
            <li><Link href="/pricing">Pricing guide</Link></li>
            <li><Link href="/booking">Instant quote</Link></li>
            <li><Link href="/blog">Cleaning tips blog</Link></li>
          </ul>
        </div>
        <div>
          <h4>Service areas</h4>
          <ul className="service-areas">
            {[
              { label: 'Richmond',       href: '/carpet-cleaning-richmond' },
              { label: 'Brunswick',      href: '/carpet-cleaning-brunswick' },
              { label: 'St Kilda',       href: '/carpet-cleaning-st-kilda' },
              { label: 'Footscray',      href: '/carpet-cleaning-footscray' },
              { label: 'Preston',        href: '/carpet-cleaning-preston' },
              { label: 'Glen Waverley',  href: '/carpet-cleaning-glen-waverley' },
              { label: 'Werribee',       href: '/carpet-cleaning-werribee' },
              { label: 'Craigieburn',    href: '/carpet-cleaning-craigieburn' },
              { label: 'Doreen',         href: '/carpet-cleaning-doreen' },
              { label: 'Whittlesea',     href: '/carpet-cleaning-whittlesea' },
              { label: 'Thomastown',     href: '/carpet-cleaning-thomastown' },
              { label: 'Epping',         href: '/carpet-cleaning-epping' },
              { label: 'Lalor',          href: '/carpet-cleaning-lalor' },
              { label: 'South Morang',   href: '/carpet-cleaning-south-morang' },
              { label: 'Mill Park',      href: '/carpet-cleaning-mill-park' },
              { label: 'Reservoir',      href: '/carpet-cleaning-reservoir' },
              { label: 'Greensborough',  href: '/carpet-cleaning-greensborough' },
            ].map(({ label, href }) => (
              <li key={label}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Newsletter</h4>
          <p>Seasonal cleaning reminders, tips, and exclusive offers. No spam.</p>
          <NewsletterForm id="footerEmail" />
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} TidyRoo. All rights reserved.</span>
        <div className="social-links">
          <Link href="https://www.facebook.com/tidyroo">Facebook</Link>
          <Link href="https://www.instagram.com/tidyroo">Instagram</Link>
          <Link href="/legal">Privacy &amp; terms</Link>
        </div>
      </div>
    </footer>
  )
}
