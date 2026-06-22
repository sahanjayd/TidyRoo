'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function FloatingContact() {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  return (
    <div className="floating-contact">
      <Link className="btn btn-primary btn-sm" href="tel:+61493100989">Call us</Link>
      <Link
        className="btn btn-secondary btn-sm"
        href="https://wa.me/61493100989?text=Hi%20TidyRoo,%20I'd%20like%20to%20book%20a%20clean"
        target="_blank"
        rel="noopener"
      >
        WhatsApp
      </Link>
      <button className="btn btn-outline btn-sm" type="button" onClick={() => setDismissed(true)} aria-label="Hide">✕</button>
    </div>
  )
}
