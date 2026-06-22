'use client'
import { useState, useEffect } from 'react'

function StarRating({ rating }) {
  return <div className="stars">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</div>
}

export default function ReviewsSection({ limit }) {
  const [reviews, setReviews] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetch('/api/reviews')
      .then(r => r.json())
      .then(data => setReviews(Array.isArray(data) ? data : data.reviews || []))
      .catch(() => {})
  }, [])

  const filtered = reviews.filter(r => {
    if (!filter) return true
    const q = filter.toLowerCase()
    return (
      r.review?.toLowerCase().includes(q) ||
      r.name?.toLowerCase().includes(q) ||
      r.suburb?.toLowerCase().includes(q)
    )
  })

  const displayed = limit ? filtered.slice(0, limit) : filtered

  if (reviews.length === 0) return null

  return (
    <>
      {!limit && (
        <div className="card" style={{ marginBottom: 32 }}>
          <h2>Search reviews</h2>
          <p className="helper-text">Filter by suburb, service, or keyword.</p>
          <input
            type="search"
            placeholder="Try 'tile', 'Richmond', or 'allergy'"
            value={filter}
            onChange={e => setFilter(e.target.value)}
            style={{ marginTop: 10 }}
          />
        </div>
      )}
      {displayed.length === 0 && filter && (
        <p className="helper-text">No reviews match that search.</p>
      )}
      <div className="testimonial-grid" aria-live="polite">
        {displayed.map(r => (
          <article className="testimonial" key={r.id}>
            <StarRating rating={r.rating || 5} />
            <p>&ldquo;{r.review}&rdquo;</p>
            <cite>{r.name}{r.suburb ? `, ${r.suburb}` : ''}</cite>
          </article>
        ))}
      </div>
    </>
  )
}
