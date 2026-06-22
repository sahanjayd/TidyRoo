'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/',        label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing',  label: 'Pricing' },
  { href: '/reviews',  label: 'Reviews' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  // Close mobile nav on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container">
        <Link className="brand" href="/">
          <Image className="brand-icon" src="/images/logo.jpg" alt="TidyRoo logo" width={38} height={38} />
          <span className="brand-text">TidyRoo</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <Link className="btn btn-primary btn-sm" href="/booking#quote-form">Book Now</Link>
        </div>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobileNav"
          onClick={() => setOpen(o => !o)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span /><span /><span />
        </button>
      </div>

      <nav className={`mobile-nav${open ? ' is-open' : ''}`} id="mobileNav" aria-expanded={open} aria-label="Mobile navigation">
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>
            {label}
          </Link>
        ))}
        <div className="mobile-cta">
          <Link className="btn btn-primary" href="/booking#quote-form">Book Now</Link>
          <Link className="btn btn-outline" href="tel:+61493100989">Call 0493 100 989</Link>
        </div>
      </nav>
    </header>
  )
}
