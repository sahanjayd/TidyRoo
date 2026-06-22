import { NextResponse } from 'next/server'
import { listApproved, createReview } from '../../../lib/reviews-store'
import { sendEmail } from '../../../lib/email'

export async function GET() {
  try {
    const reviews = await listApproved()
    return NextResponse.json({ reviews })
  } catch {
    return NextResponse.json({ reviews: [] })
  }
}

export async function POST(request) {
  try {
    const { name, suburb, review, rating } = await request.json()
    if (!name || !review || !rating) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    const id = await createReview({ name, suburb, review, rating })
    await sendEmail(
      'TidyRoo — new review pending approval',
      `<h2>New review pending approval — TidyRoo</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Suburb:</strong> ${suburb || '—'}</p>
      <p><strong>Rating:</strong> ${rating}/5</p>
      <p><strong>Review:</strong><br>${review}</p>
      <p>Approve or reject via <code>POST /api/reviews/admin</code> with Bearer token.</p>`
    )
    return NextResponse.json({ ok: true, id })
  } catch (err) {
    console.error('[/api/reviews POST]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
