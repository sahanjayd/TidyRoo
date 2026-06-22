'use client'
import { useState } from 'react'

export default function NewsletterForm({ id }) {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    } catch {}
    setSubmitted(true)
  }

  if (submitted) return <p className="notice">Thanks for joining! Check your inbox.</p>

  return (
    <form className="newsletter" onSubmit={handleSubmit}>
      <label htmlFor={id} className="sr-only">Email address</label>
      <input id={id} type="email" name="email" placeholder="you@example.com" required />
      <button className="btn btn-secondary" type="submit">Join list</button>
    </form>
  )
}
