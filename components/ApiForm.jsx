'use client'
import { useState } from 'react'

export default function ApiForm({ action, successMessage, className = 'form-grid', children, style }) {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(false)
    const data = Object.fromEntries(new FormData(e.target))
    try {
      const res = await fetch(action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError(true)
    }
  }

  if (submitted) return <p className="notice">{successMessage}</p>

  return (
    <form className={className} onSubmit={handleSubmit} style={style}>
      {children}
      {error && <p className="notice full" style={{ borderColor: '#dc2626', background: '#fef2f2', color: '#dc2626' }}>Something went wrong. Please call us on 0493 100 989.</p>}
    </form>
  )
}
